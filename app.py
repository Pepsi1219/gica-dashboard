import os
import re as _re
import time
import urllib.parse as _urllib_parse
from concurrent.futures import ThreadPoolExecutor as _ThreadPoolExecutor
from datetime import datetime as _datetime, timedelta

import requests as _requests
from flask import Flask, jsonify, redirect, render_template, request, session, url_for
from flask_session import Session
import msal

from config import (
    ADMIN_DOOR_PASSWORD,
    ADMIN_EMAIL,
    AUDIT_EXCEL_SHARE_URL,
    AUDIT_FIELD_MAPS,
    AUDIT_RATING_TO_SEVERITY,
    AUDIT_TABLES,
    AUTHORITY,
    CLIENT_ID,
    CLIENT_SECRET,
    DEPARTMENTS,
    FLASK_SECRET_KEY,
    GICA_COLS,
    GICA_EXCEL_SHARE_URL,
    GICA_FREQ_COLS,
    GICA_FREQ_TABLE,
    GICA_GRADE_ORDER,
    GICA_KPI_COLS,
    GICA_KPI_TABLES,
    GICA_MAX_TESTS,
    GICA_TABLE_PREFIX,
    JUMPER_BU_TABLES,
    JUMPER_EXCEL_COLS,
    JUMPER_EXCEL_SHARE_URL,
    JUMPER_SEW_COLS,
    JUMPER_SEW_TABLE,
    QE_DOOR_PASSWORD,
    REDIRECT_URI,
    SCOPES,
    TRAINER_EXCEL_SHARE_URL,
    TRAINER_LIST_COLS,
    TRAINER_LIST_TABLE,
    TRAINER_SETUP_COLS,
    TRAINER_SETUP_TABLE,
    TRAINER_SKILL_COLS,
    TRAINER_TOP3_COLS,
    TRAINER_TOP3_TABLE,
)
from business_rules import calculate_status
from kv_store import kv_delete, kv_get, kv_set
from graph_excel import (
    GraphExcelError,
    TokenExpiredError,
    append_row,
    create_employee,
    create_gica_employee,
    create_row,
    encode_sharing_url,
    find_employee,
    find_gica_employee,
    find_row_by_key,
    get_gica_drive_item,
    get_table_rows,
    get_table_rows_by_key,
    graph_request,
    update_employee,
    update_gica_employee,
    update_row_by_index,
    update_row_by_key,
)

# ---------------------------------------------------------------------------
# App setup
# ---------------------------------------------------------------------------
app = Flask(__name__)
app.secret_key = FLASK_SECRET_KEY

_IS_VERCEL = os.getenv("VERCEL", "") == "1"

# Central read-only Microsoft account's refresh token, used by the
# "CSA Manager" login mode (no password, view-only access).
# Set this in your environment (e.g. .env or Vercel env vars) to enable.
# Admin must keep this token valid — if the central account's refresh token
# is invalidated, all manager sessions will lose Graph API access.
MANAGER_REFRESH_TOKEN = os.getenv("MANAGER_REFRESH_TOKEN", "")

app.config.update(
    PERMANENT_SESSION_LIFETIME=timedelta(days=30),
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Lax",
    SESSION_COOKIE_SECURE=_IS_VERCEL,
)

if not _IS_VERCEL:
    _SESSION_DIR = os.path.join(os.path.dirname(__file__), ".flask_session")
    os.makedirs(_SESSION_DIR, exist_ok=True)
    app.config.update(
        SESSION_TYPE="filesystem",
        SESSION_FILE_DIR=_SESSION_DIR,
        SESSION_FILE_THRESHOLD=500,
    )
    Session(app)


# ---------------------------------------------------------------------------
# Token storage
#
# WHY cookie overflow happened:
#   Microsoft access tokens are large JWTs (~1.5 KB of base64, already
#   high-entropy — zlib barely helps).  Refresh tokens add another ~0.8 KB.
#   Combined blob after compress+sign = 4226 B > 4093 B browser limit.
#   Browser silently drops the cookie → session lost every login.
#
# FIX:
#   Session cookie stores ONLY the refresh token (~0.8 KB raw).
#   Access token lives in a module-level dict (_AT_CACHE) keyed by user OID.
#   On warm Vercel container reuse the AT is already in memory.
#   On cold starts one extra refresh call is made (~200 ms) — acceptable.
# ---------------------------------------------------------------------------

_AT_CACHE: dict = {}   # oid -> {"at": str, "exp": float}


def _build_msal_app() -> msal.ConfidentialClientApplication:
    return msal.ConfidentialClientApplication(
        CLIENT_ID,
        authority=AUTHORITY,
        client_credential=CLIENT_SECRET,
    )


def _do_token_refresh(refresh_token: str) -> dict | None:
    try:
        r = _requests.post(
            f"{AUTHORITY}/oauth2/v2.0/token",
            data={
                "client_id":     CLIENT_ID,
                "client_secret": CLIENT_SECRET,
                "refresh_token": refresh_token,
                "grant_type":    "refresh_token",
                "scope":         " ".join(SCOPES),
            },
            timeout=10,
        )
        if r.status_code == 200:
            return r.json()
        print(f"[TOKEN] Refresh HTTP {r.status_code}: {r.text[:300]}")
    except Exception as exc:
        print(f"[TOKEN] Refresh exception: {exc}")
    return None


def get_valid_token(force_refresh: bool = False) -> str | None:
    """
    Return a valid access token.
    - Checks in-process _AT_CACHE first (fast, works on warm Vercel containers).
    - Falls back to refresh token stored in session cookie.
    - Returns None if not authenticated or refresh token is invalid/expired.
    """
    rt = session.get("rt")
    if not rt:
        return None

    oid = (session.get("user") or {}).get("oid", "")

    if not force_refresh and oid:
        cached = _AT_CACHE.get(oid)
        if cached and time.time() < cached.get("exp", 0) - 300:
            return cached["at"]

    result = _do_token_refresh(rt)
    if not result or "access_token" not in result:
        print("[TOKEN] Refresh failed — clearing session")
        session.pop("rt", None)
        return None

    at  = result["access_token"]
    exp = time.time() + result.get("expires_in", 3600)

    if oid:
        _AT_CACHE[oid] = {"at": at, "exp": exp}
    if "refresh_token" in result:   # refresh tokens may rotate
        session["rt"] = result["refresh_token"]

    return at


# ---------------------------------------------------------------------------
# Graph call wrapper with automatic 401 retry
# ---------------------------------------------------------------------------

class AuthError(Exception):
    pass


def call_graph(graph_func, *args, **kwargs):
    token = get_valid_token()
    if not token:
        raise AuthError("Not authenticated")

    try:
        return graph_func(token, *args, **kwargs)
    except TokenExpiredError:
        token = get_valid_token(force_refresh=True)
        if not token:
            raise AuthError("Session expired. Please log in again.")
        return graph_func(token, *args, **kwargs)


# ---------------------------------------------------------------------------
# Auth helpers
# ---------------------------------------------------------------------------

def require_token():
    token = get_valid_token()
    if not token:
        return None, (jsonify({"error": "Not authenticated", "login_required": True}), 401)
    return token, None


def get_role():
    return session.get("role", "")


def require_writable(allowed_roles):
    """Block writes unless the session role is in allowed_roles.
    Returns (response, status) or None."""
    if get_role() not in allowed_roles:
        return jsonify({
            "error": "Read-only access for this session role",
            "read_only": True,
        }), 403
    return None


def get_department_or_404(department_key):
    dep = DEPARTMENTS.get(str(department_key or "").upper())
    if not dep:
        return None, (jsonify({"error": "Invalid department"}), 404)
    return dep, None


def _auth_error_response(exc: AuthError):
    return jsonify({"error": str(exc), "login_required": True}), 401


# ---------------------------------------------------------------------------
# Routes — Auth
# ---------------------------------------------------------------------------

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/login")
def login():
    session.permanent = True
    door = request.args.get("door", "csa")
    if door not in ("csa", "qe", "admin"):
        door = "csa"

    # QE / Admin require the door password to be verified first (POST /api/door-unlock
    # sets this session flag) — without it, refuse to even start the MSAL redirect.
    if door in ("qe", "admin") and not session.get(f"door_unlocked_{door}"):
        return redirect(url_for("index") + "?doorLocked=1")

    auth_url = _build_msal_app().get_authorization_request_url(
        SCOPES,
        redirect_uri=REDIRECT_URI,
        prompt="select_account",
        state=door,
    )
    return redirect(auth_url)


@app.route("/auth/callback")
def auth_callback():
    door = request.args.get("state", "csa")
    if door not in ("csa", "qe", "admin"):
        door = "csa"

    error = request.args.get("error")
    if error:
        desc = request.args.get("error_description", "No description provided")
        print(f"[AUTH] Azure AD error: {error} | {desc}")
        return (
            f"<h2>Authentication Error</h2>"
            f"<p><b>{error}</b></p><p>{desc}</p>"
            f"<a href='/login'>Try again</a>"
        ), 400

    code = request.args.get("code")
    if not code:
        return "<h2>Missing authorization code</h2><a href='/login'>Try again</a>", 400

    print("[AUTH] Code received. Exchanging for token...")
    try:
        result = _build_msal_app().acquire_token_by_authorization_code(
            code,
            scopes=SCOPES,
            redirect_uri=REDIRECT_URI,
        )
    except Exception as exc:
        import traceback; traceback.print_exc()
        return f"<h2>Token Exchange Exception</h2><p>{exc}</p><a href='/login'>Try again</a>", 500

    if "access_token" not in result:
        err  = result.get("error", "unknown_error")
        desc = result.get("error_description", str(result))
        print(f"[AUTH] Token exchange failed: {err} | {desc}")
        return (
            f"<h2>Token Error</h2>"
            f"<p><b>{err}</b></p><p>{desc}</p>"
            f"<a href='/login'>Try again</a>"
        ), 400

    claims = result.get("id_token_claims") or {}
    email  = (claims.get("preferred_username") or claims.get("upn") or "").strip().lower()

    # Admin Sign In only succeeds for the account configured in ADMIN_EMAIL — any
    # other account is rejected without creating a session. The frontend tracks
    # wrong-attempt count (sessionStorage) and shows the warning/lockout UX.
    if door == "admin" and (not ADMIN_EMAIL or email != ADMIN_EMAIL):
        print(f"[AUTH] Admin Sign In rejected for {email or '(no email)'}")
        return redirect(url_for("index") + "?adminError=1")

    role = {"admin": "admin", "qe": "qe_user", "csa": "csa_user"}[door]

    # ── Persist session ───────────────────────────────────────────────────────
    # Store ONLY the refresh token in the cookie (~0.8 KB).
    # Cache the access token in process memory to avoid cookie overflow.
    oid = claims.get("oid") or claims.get("sub") or "unknown"

    session["rt"] = result.get("refresh_token", "")
    session["user"] = {
        "name":  claims.get("name") or email or "User",
        "email": email,
        "oid":   oid,
    }
    session["role"] = role
    session.permanent = True

    _AT_CACHE[oid] = {
        "at":  result["access_token"],
        "exp": time.time() + result.get("expires_in", 3600),
    }

    print(f"[AUTH] Login OK — {session['user']['name']} ({role})")

    # ── Setup helper for CSA Manager / QE View modes ──────────────────────────
    # If the operator hasn't configured MANAGER_REFRESH_TOKEN yet, print the
    # current login's refresh token so they can copy it into .env to enable
    # the View Mode buttons on the login screen.
    if not MANAGER_REFRESH_TOKEN and result.get("refresh_token"):
        print("\n" + "=" * 72)
        print(" VIEW MODE SETUP — copy the line below into your .env file")
        print(" (only printed because MANAGER_REFRESH_TOKEN is not set yet)")
        print("-" * 72)
        print(f"MANAGER_REFRESH_TOKEN={result['refresh_token']}")
        print("=" * 72 + "\n")

    # Return 200 + JS redirect instead of 302.
    # Some CDN/edge layers strip Set-Cookie from 302 responses.
    return """<!doctype html>
<html><head><meta charset="utf-8">
<meta http-equiv="refresh" content="0;url=/">
</head><body>
<script>window.location.replace('/');</script>
<p>Redirecting&hellip;</p>
</body></html>"""


@app.route("/logout")
def logout():
    oid = (session.get("user") or {}).get("oid", "")
    _AT_CACHE.pop(oid, None)
    session.clear()
    return redirect(url_for("index"))


def _open_shared_token_session(role: str, display_name: str):
    """Open a session using the central MANAGER_REFRESH_TOKEN (the file owner's
    own Microsoft account) instead of a per-person OAuth login. Whether writes
    are actually allowed for this session depends entirely on `role` being on
    the allow-list passed to require_writable() at the route — this function
    itself does not distinguish read-only from writable roles."""
    if not MANAGER_REFRESH_TOKEN:
        return jsonify({
            "error": "This sign-in mode is not configured on the server.",
        }), 500

    session.permanent = True
    session["rt"] = MANAGER_REFRESH_TOKEN
    session["user"] = {
        "name":  display_name,
        "email": f"{role}@view-only",
        "oid":   f"{role}-shared",
    }
    session["role"] = role

    # Verify the central token actually works before returning success
    token = get_valid_token()
    if not token:
        session.clear()
        return jsonify({
            "error": "Central shared token is invalid or expired. "
                     "Ask an admin to refresh MANAGER_REFRESH_TOKEN.",
        }), 500

    print(f"[AUTH] {display_name} session opened ({role})")
    return jsonify({"ok": True})


@app.route("/manager-login", methods=["POST"])
def manager_login():
    """CSA Sign In → View Mode."""
    return _open_shared_token_session("csa_view", "CSA View Mode")


@app.route("/qe-view-login", methods=["POST"])
def qe_view_login():
    """QE Sign In → View Mode."""
    return _open_shared_token_session("qe_view", "QE View Mode")


@app.route("/qe-edit-login", methods=["POST"])
def qe_edit_login():
    """QE Sign In → Edit Mode. Requires the door password to already be verified
    via POST /api/door-unlock — writes go through the shared MANAGER_REFRESH_TOKEN
    (the GICA.xlsx file owner's own account) instead of each QE staff member's own
    Microsoft login, sidestepping per-person OneDrive sharing-permission issues on
    a personal OneDrive file. Role qe_user is on require_writable()'s allow-list
    for the GICA write routes, so this session can actually save changes."""
    if not session.get("door_unlocked_qe"):
        return jsonify({"error": "ต้องยืนยันรหัสผ่านก่อน"}), 403
    return _open_shared_token_session("qe_user", "QE Edit Mode")


@app.route("/qe-audit-login", methods=["POST"])
def qe_audit_login():
    """QE Sign In → Audit Mode → Auditor. Shares the same door password gate as
    Edit Mode ('qe' door) — writes go through the shared MANAGER_REFRESH_TOKEN,
    same as qe_user. Role qe_audit is scoped to the Audit module only (see
    require_writable() calls on the /api/audit/* routes and the frontend
    tab-visibility branch in app.js). Auditor sees every Audit sub-tab and can
    create Plans, manage Templates, score Executions, and Approve findings."""
    if not session.get("door_unlocked_qe"):
        return jsonify({"error": "ต้องยืนยันรหัสผ่านก่อน"}), 403
    return _open_shared_token_session("qe_audit", "QE Audit Mode")


@app.route("/qe-auditee-login", methods=["POST"])
def qe_auditee_login():
    """QE Sign In → Audit Mode → Auditee. No door password — Auditee is the
    person being audited, not QE staff, so the gate is intentionally skipped.
    Role qe_auditee is scoped to Dashboard/Audit Plan/Finding-CAR only (see the
    frontend tab-visibility branch in app.js) and can only write through
    POST /api/audit/plans/<id>/respond — every other Audit write route stays
    restricted to qe_audit/admin."""
    return _open_shared_token_session("qe_auditee", "QE Auditee Mode")


@app.route("/api/door-unlock", methods=["POST"])
def door_unlock():
    """Verify the QE/Admin door password before /login is allowed to start the
    Microsoft OAuth redirect for that door. Does not authenticate anyone by
    itself — it only unlocks the button for this browser session."""
    payload  = request.json or {}
    door     = str(payload.get("door", "")).strip().lower()
    password = str(payload.get("password", ""))
    if door not in ("qe", "admin"):
        return jsonify({"error": "Invalid door"}), 400
    expected = {"qe": QE_DOOR_PASSWORD, "admin": ADMIN_DOOR_PASSWORD}.get(door)
    if not expected:
        # Misconfigured server (env var not set) — refuse rather than silently
        # accepting an empty password.
        return jsonify({"error": "Door password is not configured on the server."}), 500
    if password != expected:
        return jsonify({"error": "รหัสผ่านไม่ถูกต้อง"}), 401
    session.permanent = True
    session[f"door_unlocked_{door}"] = True
    return jsonify({"ok": True})


# ---------------------------------------------------------------------------
# Routes — API
# ---------------------------------------------------------------------------

# New Operator: cache raw Excel rows only (never the calculated status — that
# depends on the per-request `holiday` query args + "today", so it must always
# be recomputed). One cache slot per department/workbook. L1: in-process dict.
# L2: shared KV. Falls back to a live Graph API fetch if both miss.
_NEWOP_CACHE: dict = {}
_NEWOP_CACHE_TTL = 300  # seconds


def _get_newop_employees_cached(department_key, department):
    now = time.time()
    cached = _NEWOP_CACHE.get(department_key)
    if cached and now < cached.get('exp', 0):
        return cached['data']

    kv_key = f'newop_employees_{department_key}'
    kv_rows = kv_get(kv_key)
    if kv_rows is not None:
        _NEWOP_CACHE[department_key] = {'data': kv_rows, 'exp': now + _NEWOP_CACHE_TTL}
        return kv_rows

    _, employees = call_graph(get_table_rows, department)
    _NEWOP_CACHE[department_key] = {'data': employees, 'exp': now + _NEWOP_CACHE_TTL}
    kv_set(kv_key, employees, ttl_seconds=_NEWOP_CACHE_TTL)
    return employees


def _invalidate_newop_cache(department_key):
    _NEWOP_CACHE.pop(department_key, None)
    kv_delete(f'newop_employees_{department_key}')


@app.route("/api/me")
def api_me():
    print(f"[API/ME] Session keys: {list(session.keys())}")
    token = get_valid_token()
    user  = session.get("user")
    authenticated = bool(token) or bool(user)
    role  = session.get("role", "user")
    print(f"[API/ME] authenticated={authenticated}  token={bool(token)}  user={bool(user)}  role={role}")
    return jsonify({
        "authenticated": authenticated,
        "user": user,
        "role": role,
        "manager_available": bool(MANAGER_REFRESH_TOKEN),
    })


@app.route("/api/departments")
def api_departments():
    return jsonify([
        {"key": key, "label": dep["label"], "workbook_name": dep["workbook_name"]}
        for key, dep in DEPARTMENTS.items()
    ])


@app.route("/api/<department_key>/employees")
def api_list_employees(department_key):
    _, error = require_token()
    if error:
        return error
    department, error = get_department_or_404(department_key)
    if error:
        return error

    holidays = request.args.getlist("holiday")
    try:
        employees = _get_newop_employees_cached(department_key, department)
        enriched = []
        for employee in employees:
            calc = calculate_status(employee, holidays)
            public_employee = {k: v for k, v in employee.items() if not k.startswith("_")}
            public_employee["calculated"] = calc
            enriched.append(public_employee)
        return jsonify({"employees": enriched})
    except AuthError as exc:
        return _auth_error_response(exc)
    except Exception as exc:
        return jsonify({"error": str(exc)}), 500


@app.route("/api/<department_key>/employees/<employee_id>")
def api_get_employee(department_key, employee_id):
    _, error = require_token()
    if error:
        return error
    department, error = get_department_or_404(department_key)
    if error:
        return error

    holidays = request.args.getlist("holiday")
    try:
        employee = call_graph(find_employee, department, employee_id)
        if not employee:
            return jsonify({"error": "Employee not found"}), 404
        employee = {k: v for k, v in employee.items() if not k.startswith("_")}
        employee["calculated"] = calculate_status(employee, holidays)
        return jsonify(employee)
    except AuthError as exc:
        return _auth_error_response(exc)
    except Exception as exc:
        return jsonify({"error": str(exc)}), 500


@app.route("/api/<department_key>/employees", methods=["POST"])
def api_create_employee(department_key):
    _, error = require_token()
    if error:
        return error
    deny = require_writable(("csa_user", "admin"))
    if deny:
        return deny
    department, error = get_department_or_404(department_key)
    if error:
        return error

    payload = request.json or {}
    try:
        record = {
            "Employee ID":    payload.get("Employee ID", ""),
            "Employee Name":  payload.get("Employee Name", ""),
            "CSA Start Date": payload.get("CSA Start Date", ""),
        }
        created = call_graph(create_employee, department, record)
        _invalidate_newop_cache(department_key)
        return jsonify({"message": "Created", "employee": created})
    except AuthError as exc:
        return _auth_error_response(exc)
    except Exception as exc:
        return jsonify({"error": str(exc)}), 500


@app.route("/api/<department_key>/employees/<employee_id>", methods=["PATCH"])
def api_update_employee(department_key, employee_id):
    _, error = require_token()
    if error:
        return error
    deny = require_writable(("csa_user", "admin"))
    if deny:
        return deny
    department, error = get_department_or_404(department_key)
    if error:
        return error

    payload = request.json or {}
    holidays = payload.pop("_holidays", [])
    try:
        # Note: Excel-managed columns (Due date, Remaining days, On time,
        # Actual Status, Total Training Days) are NOT overwritten — they keep
        # whatever value/formula Excel has. calc is still computed and returned
        # so the UI can show status badges (completed-overdue, etc.).
        calc = calculate_status(payload, holidays)
        updated = call_graph(update_employee, department, employee_id, payload)
        updated["calculated"] = calc
        _invalidate_newop_cache(department_key)
        return jsonify({"message": "Updated", "employee": updated})
    except AuthError as exc:
        return _auth_error_response(exc)
    except Exception as exc:
        return jsonify({"error": str(exc)}), 500


# ---------------------------------------------------------------------------
# Jumper Skill data — sourced from OneDrive (uploaded by scripts/pushToOneDrive.js
# in the CSA co NiSE project).  Uses MANAGER_REFRESH_TOKEN so no user session needed.
# ---------------------------------------------------------------------------

JUMPER_DATA_FOLDER = (
    '1. Project/CSA (Center of Skill Acquisition)'
    '/New Operator Monitoring/jumper-data'
)
JUMPER_TRAINER_DEPT = 'CSA พัฒนาทักษะ'

# In-process cache (dict): {'data': {...}, 'exp': float}
# Avoids hammering Graph API on every page load; refreshes every 5 minutes.
_JUMPER_CACHE: dict = {}
_JUMPER_CACHE_TTL = 300  # seconds


def _get_manager_access_token() -> str:
    """Exchange MANAGER_REFRESH_TOKEN for a short-lived access token."""
    if not MANAGER_REFRESH_TOKEN:
        raise ValueError('MANAGER_REFRESH_TOKEN not configured on this server')
    result = _do_token_refresh(MANAGER_REFRESH_TOKEN)
    if not result or 'access_token' not in result:
        raise ValueError('Failed to obtain manager access token — MANAGER_REFRESH_TOKEN may be expired')
    return result['access_token']


def _mgraph_get(token: str, path: str, **kwargs):
    """GET helper for Microsoft Graph API; raises on non-2xx."""
    url = f'https://graph.microsoft.com/v1.0{path}'
    r = _requests.get(
        url,
        headers={'Authorization': f'Bearer {token}'},
        timeout=20,
        **kwargs,
    )
    if not r.ok:
        raise RuntimeError(f'Graph API {r.status_code}: {r.text[:200]}')
    return r


def _fetch_jumper_files_from_onedrive() -> dict:
    """List + download all data_*.json files from the jumper-data OneDrive folder."""
    token = _get_manager_access_token()
    encoded = _urllib_parse.quote(JUMPER_DATA_FOLDER, safe='/')

    list_resp = _mgraph_get(
        token,
        f'/me/drive/root:/{encoded}:/children',
        params={'$select': 'id,name', '$top': 200},
    )
    files = [
        f for f in list_resp.json().get('value', [])
        if f['name'].startswith('data_') and f['name'].endswith('.json')
    ]

    results: dict = {}
    for f in files:
        try:
            content_resp = _mgraph_get(token, f"/me/drive/items/{f['id']}/content")
            results[f['name']] = content_resp.json()
        except Exception as exc:
            print(f'[JUMPER] skip {f["name"]}: {exc}')
    return results


def _build_jumper_payload(files: dict) -> dict:
    """Merge downloaded files into the same structure as dashboard/server.js."""
    jumper: dict = {}
    all_employees: dict = {}
    sewing_operator: dict = {}

    for filename, content in files.items():
        m = _re.match(r'^data_(.+)_(.+)\.json$', filename)
        if not m:
            continue
        prefix, bu = m.group(1), m.group(2)
        if prefix == 'jumper':
            jumper[bu] = content.get('tblEmp', [])
        elif prefix == 'allEmployees':
            all_employees[bu] = content.get('tblEmp', [])
        elif prefix == 'sewingOperatorSkill':
            sewing_operator[bu] = content.get('employees', [])

    trainer: dict = {}
    employee: dict = {}
    for bu, emps in all_employees.items():
        trainer[bu]  = [e for e in emps if e.get('deptname') == JUMPER_TRAINER_DEPT]
        employee[bu] = [e for e in emps if e.get('deptname') != JUMPER_TRAINER_DEPT]

    return {
        'jumper':         jumper,
        'trainer':        trainer,
        'employee':       employee,
        'sewingOperator': sewing_operator,
    }


_JUMPER_EXCEL_CACHE:   dict = {}
_TRAINER_EXCEL_CACHE: dict = {}


def _read_excel_table(token: str, drive_id: str, item_id: str,
                      table_name: str, cols: list) -> list:
    """Read rows from a named table, mapping values by column name (not index)."""
    base = f'/drives/{drive_id}/items/{item_id}/workbook/tables/{table_name}'

    # Fetch actual column order from the table header
    col_resp = graph_request(token, 'GET', f'{base}/columns?$select=name')
    headers = [c.get('name', '') for c in col_resp.get('value', [])]

    # Fetch all row values
    row_resp = graph_request(token, 'GET', f'{base}/rows')
    records = []
    for row in row_resp.get('value', []):
        values = (row.get('values') or [[]])[0]
        by_name = {headers[i]: (values[i] if i < len(values) else '')
                   for i in range(len(headers))}
        obj = {col: by_name.get(col, '') for col in cols}
        records.append(obj)
    return records


def _fetch_jumper_excel_data(token: str) -> tuple:
    """Resolve Jumper_Monitoring.xlsx then read one table per BU + SewingOperatorCount."""
    share_id = encode_sharing_url(JUMPER_EXCEL_SHARE_URL)
    item = graph_request(
        token, 'GET',
        f'/shares/{share_id}/driveItem',
        headers={'Prefer': 'redeemSharingLinkIfNecessary'},
    )
    drive_id = item['parentReference']['driveId']
    item_id  = item['id']

    # Read per-BU Jumper tables in parallel — inject '_bu' key so payload builder knows which BU
    def _read_jumper_bu(bu_tbl):
        bu, table_name = bu_tbl
        try:
            rows = _read_excel_table(token, drive_id, item_id, table_name, JUMPER_EXCEL_COLS)
            for r in rows:
                r['_bu'] = bu
            print(f'[JUMPER-EXCEL] {table_name}: {len(rows)} rows', flush=True)
            return rows
        except Exception as exc:
            print(f'[JUMPER-EXCEL] {table_name} skipped: {exc}', flush=True)
            return []

    jumper_rows = []
    with _ThreadPoolExecutor(max_workers=3) as ex:  # cap at 3 to avoid Graph API throttling
        for rows in ex.map(_read_jumper_bu, JUMPER_BU_TABLES.items()):
            jumper_rows.extend(rows)

    # Read SewingOperatorCount (optional — bars hide gracefully if missing)
    sew_rows = []
    try:
        sew_rows = _read_excel_table(token, drive_id, item_id, JUMPER_SEW_TABLE, JUMPER_SEW_COLS)
    except Exception as exc:
        print(f'[JUMPER-EXCEL] SewingOperatorCount skipped: {exc}', flush=True)

    return jumper_rows, sew_rows


def _build_jumper_excel_payload(jumper_rows: list, sew_rows: list) -> dict:
    """Group Excel rows by BU → same shape as /api/jumper-data response."""
    jumper: dict = {}
    for r in jumper_rows:
        bu = str(r.get('_bu', '')).strip()   # injected by _fetch_jumper_excel_data
        if not bu:
            continue
        emp_id = str(r.get('Employee ID', '')).strip()
        if not emp_id:
            continue
        emp = {
            'empid':            emp_id,
            'firstname':        str(r.get('Employee Name',   '')).strip(),
            'deptname':         str(r.get('Department',      '')).strip(),
            'positionnameeng':  str(r.get('Position',        '')).strip(),
            'skill_count':      r.get('Skill Count',    0),
            'expired_count':    r.get('Expired Count',  0),
            'training_status':  str(r.get('Training Status', '')).strip().upper(),
        }
        jumper.setdefault(bu, []).append(emp)

    # Build sewingOperator as { BU: [{} * Total] } so frontend .length works correctly
    sewing_operator: dict = {}
    for r in sew_rows:
        bu    = str(r.get('BU',    '')).strip()
        total = r.get('Total', 0)
        if not bu:
            continue
        try:
            count = int(float(total))
        except (ValueError, TypeError):
            count = 0
        if count > 0:
            sewing_operator[bu] = [{}] * count

    return {
        'jumper':         jumper,
        'sewingOperator': sewing_operator,
    }


@app.route('/api/jumper-excel')
def api_jumper_excel():
    """Return Jumper data from Jumper_Monitoring.xlsx on OneDrive.
    L1: in-process dict (fastest, per-instance, lost on cold start). L2: shared
    KV (cross-instance — saves redundant Graph API hits when many serverless
    instances are cold at once). Falls back to a live Graph API fetch if both
    miss; KV itself degrades to a no-op if unavailable, so a KV outage never
    breaks this endpoint."""
    _, error = require_token()
    if error:
        return error
    global _JUMPER_EXCEL_CACHE
    now = time.time()
    if _JUMPER_EXCEL_CACHE.get('data') and now < _JUMPER_EXCEL_CACHE.get('exp', 0):
        return jsonify(_JUMPER_EXCEL_CACHE['data'])

    kv_payload = kv_get('jumper_excel')
    if kv_payload is not None:
        _JUMPER_EXCEL_CACHE = {'data': kv_payload, 'exp': now + _JUMPER_CACHE_TTL}
        return jsonify(kv_payload)

    try:
        token                 = _get_manager_access_token()
        jumper_rows, sew_rows = _fetch_jumper_excel_data(token)
        payload               = _build_jumper_excel_payload(jumper_rows, sew_rows)
        _JUMPER_EXCEL_CACHE   = {'data': payload, 'exp': now + _JUMPER_CACHE_TTL}
        kv_set('jumper_excel', payload, ttl_seconds=_JUMPER_CACHE_TTL)
        return jsonify(payload)
    except Exception as exc:
        print(f'[JUMPER-EXCEL] /api/jumper-excel error: {exc}')
        return jsonify({'error': str(exc)}), 500


@app.route('/api/trainer-excel')
def api_trainer_excel():
    """Return Trainer data from Trainer_Monitoring.xlsx on OneDrive.
    L1 (in-process) -> L2 (shared KV) -> live Graph API fetch fallback. Read-only
    tab, no write endpoints, so no invalidation needed — TTL alone keeps it fresh."""
    _, error = require_token()
    if error:
        return error
    global _TRAINER_EXCEL_CACHE
    now = time.time()
    if _TRAINER_EXCEL_CACHE.get('data') and now < _TRAINER_EXCEL_CACHE.get('exp', 0):
        return jsonify(_TRAINER_EXCEL_CACHE['data'])

    kv_payload = kv_get('trainer_excel')
    if kv_payload is not None:
        _TRAINER_EXCEL_CACHE = {'data': kv_payload, 'exp': now + _JUMPER_CACHE_TTL}
        return jsonify(kv_payload)

    try:
        token = _get_manager_access_token()
        share_id = encode_sharing_url(TRAINER_EXCEL_SHARE_URL)
        item = graph_request(
            token, 'GET', f'/shares/{share_id}/driveItem',
            headers={'Prefer': 'redeemSharingLinkIfNecessary'},
        )
        drive_id = item['parentReference']['driveId']
        item_id  = item['id']

        # 1. Trainer list (master)
        trainer_list = _read_excel_table(token, drive_id, item_id,
                                          TRAINER_LIST_TABLE, TRAINER_LIST_COLS)

        # 2. Setup sheet (optional — coverage matrix hides gracefully if missing)
        setup_rows = []
        try:
            setup_rows = _read_excel_table(token, drive_id, item_id,
                                            TRAINER_SETUP_TABLE, TRAINER_SETUP_COLS)
        except Exception as exc:
            print(f'[TRAINER-EXCEL] BUSetup skipped: {exc}', flush=True)

        # 3. top_3 targets (optional)
        top3_rows = []
        try:
            top3_rows = _read_excel_table(token, drive_id, item_id,
                                           TRAINER_TOP3_TABLE, TRAINER_TOP3_COLS)
        except Exception as exc:
            print(f'[TRAINER-EXCEL] top_3 skipped: {exc}', flush=True)

        # 4. Per-BU skill sheets: Trainer_G1, Trainer_G2, … (parallel)
        unique_bus = list({str(t.get('BU', '')).strip() for t in trainer_list if t.get('BU', '').strip()})

        def _read_trainer_bu(bu):
            table_name = f'Trainer_{bu}'
            try:
                rows = _read_excel_table(token, drive_id, item_id,
                                          table_name, TRAINER_SKILL_COLS)
                for r in rows:
                    r['_bu'] = bu
                print(f'[TRAINER-EXCEL] {table_name}: {len(rows)} rows', flush=True)
                return rows
            except Exception as exc:
                print(f'[TRAINER-EXCEL] {table_name} skipped: {exc}', flush=True)
                return []

        skill_rows = []
        with _ThreadPoolExecutor(max_workers=3) as ex:  # cap at 3 to avoid Graph API throttling
            for rows in ex.map(_read_trainer_bu, unique_bus):
                skill_rows.extend(rows)

        # Build payload
        trainers = []
        for t in trainer_list:
            emp_id = str(t.get('EMPID', '')).strip()
            if not emp_id:
                continue
            raw_score = t.get('Score', '')
            score_val = None
            if raw_score not in (None, '', 'null'):
                s = str(raw_score).strip().replace('%', '')
                try:
                    v = float(s)
                    score_val = round(v * 100, 2) if v <= 1 else round(v, 2)
                except (ValueError, TypeError):
                    score_val = None
            trainers.append({
                'empid':    emp_id,
                'name':     str(t.get('Employee Name', '')).strip(),
                'bu':       str(t.get('BU', '')).strip(),
                'status':   str(t.get('Status', '')).strip(),
                'position': str(t.get('Position', '')).strip(),
                'score':    score_val,
            })

        def _safe_float(v):
            try:
                return float(v) if v not in (None, '', 'null') else 0.0
            except (ValueError, TypeError):
                return 0.0

        def _safe_int(v):
            try:
                return int(float(v)) if v not in (None, '', 'null') else 0
            except (ValueError, TypeError):
                return 0

        setup = []
        for s in setup_rows:
            bu = str(s.get('BU', '')).strip()
            pt = str(s.get('Product Type', '')).strip()
            st = str(s.get('Style', '')).strip()
            steps = _safe_int(s.get('Total Steps'))
            if bu and pt and steps > 0:
                setup.append({'bu': bu, 'productType': pt, 'style': st, 'totalSteps': steps})

        top3 = []
        for s in top3_rows:
            bu = str(s.get('BU', '')).strip()
            pt = str(s.get('Product Type', '')).strip()
            st = str(s.get('Style', '')).strip()
            steps = _safe_int(s.get('Total Steps'))
            if bu and pt and steps > 0:
                top3.append({'bu': bu, 'productType': pt, 'style': st, 'totalSteps': steps})

        skills: dict = {}
        for r in skill_rows:
            emp_id = str(r.get('EMPID', '')).strip()
            if not emp_id:
                continue
            record = {
                'empid':       emp_id,
                'bu':          str(r.get('_bu', '')).strip(),
                'processNo':   str(r.get('process_no',   '') or '').strip(),
                'gsdCode':     str(r.get('gsd_code',     '') or '').strip(),
                'processName': str(r.get('process_name', '') or '').strip(),
                'machineType': str(r.get('machinetype',  '') or '').strip(),
                'grade':       str(r.get('grade',        '') or '').strip(),
                'smv':         _safe_float(r.get('smv')),
                'amv':         _safe_float(r.get('amv')),
                'lastUpdate':  str(r.get('last_update',  '') or '').strip(),
                'leadTime':    _safe_float(r.get('lead_time')),
                'csaApprove':  str(r.get('csa_approve',  '') or '').strip(),
                'expired':     _safe_int(r.get('expired')),
                'eff':         _safe_float(r.get('eff')),
                'productType': str(r.get('PRODUCT_TYPE', '') or '').strip(),
                'style':       str(r.get('STYLE',        '') or '').strip(),
                'totalCount':  _safe_int(r.get('total_count')),
            }
            skills.setdefault(emp_id, []).append(record)

        payload = {'trainers': trainers, 'setup': setup, 'top3': top3, 'skills': skills}
        _TRAINER_EXCEL_CACHE = {'data': payload, 'exp': now + _JUMPER_CACHE_TTL}
        kv_set('trainer_excel', payload, ttl_seconds=_JUMPER_CACHE_TTL)
        return jsonify(payload)
    except Exception as exc:
        print(f'[TRAINER-EXCEL] error: {exc}')
        return jsonify({'error': str(exc)}), 500


# ── GICA Assessment ───────────────────────────────────────────────────────────
_GICA_CACHE: dict = {}


def _gica_to_iso(v) -> str:
    """Excel serial number or string → 'YYYY-MM-DD' (or None if empty)."""
    if v in (None, '', 'null'):
        return None
    if isinstance(v, str):
        s = v.strip()
        return s[:10] if len(s) >= 10 and s[4:5] == '-' else (s or None)
    try:
        d = _datetime(1899, 12, 30) + timedelta(days=float(v))
        return d.strftime('%Y-%m-%d')
    except (ValueError, TypeError):
        return None


def _gica_num(v):
    try:
        return float(v) if v not in (None, '', 'null') else None
    except (ValueError, TypeError):
        return None


def _fetch_gica_excel_data(token: str) -> tuple:
    """Resolve GICA.xlsx, auto-discover GICA_* tables + read Table_freq + per-BU
    KPI target tables, in parallel.

    Returns (employee_rows, freq_rows, kpi_by_bu).
    """
    share_id = encode_sharing_url(GICA_EXCEL_SHARE_URL)
    item = graph_request(
        token, 'GET', f'/shares/{share_id}/driveItem',
        headers={'Prefer': 'redeemSharingLinkIfNecessary'},
    )
    drive_id = item['parentReference']['driveId']
    item_id  = item['id']

    tbl_resp = graph_request(
        token, 'GET',
        f'/drives/{drive_id}/items/{item_id}/workbook/tables?$select=name',
    )
    table_names = [
        t['name'] for t in tbl_resp.get('value', [])
        if str(t.get('name', '')).startswith(GICA_TABLE_PREFIX)
    ]

    def _read_emp(tname):
        bu_tag = tname[len(GICA_TABLE_PREFIX):]
        for attempt in range(3):
            try:
                rows = _read_excel_table(token, drive_id, item_id, tname, GICA_COLS)
                for r in rows:
                    r['_bu'] = bu_tag
                print(f'[GICA] {tname}: {len(rows)} rows', flush=True)
                return ('emp', None, rows)
            except Exception as exc:
                if attempt < 2:
                    time.sleep(1.5 * (attempt + 1))  # 1.5s, 3s backoff
                else:
                    print(f'[GICA] {tname} skipped after 3 attempts: {exc}', flush=True)
        return ('emp', None, [])

    def _read_freq():
        try:
            rows = _read_excel_table(token, drive_id, item_id,
                                      GICA_FREQ_TABLE, GICA_FREQ_COLS)
            print(f'[GICA] {GICA_FREQ_TABLE}: {len(rows)} rows', flush=True)
        except Exception as exc:
            print(f'[GICA] {GICA_FREQ_TABLE} skipped: {exc}', flush=True)
            rows = []
        return ('freq', None, rows)

    def _read_kpi(bu, tname):
        targets = {}
        try:
            rows = _read_excel_table(token, drive_id, item_id, tname, GICA_KPI_COLS)
            for r in rows:
                level = str(r.get('level', '') or '').strip()
                if not level:
                    continue
                try:
                    targets[level] = float(r.get('target'))
                except (ValueError, TypeError):
                    pass
            print(f'[GICA] {tname}: {len(targets)} levels', flush=True)
        except Exception as exc:
            print(f'[GICA] {tname} skipped: {exc}', flush=True)
        return ('kpi', bu, targets)

    jobs = [(lambda t=t: _read_emp(t)) for t in table_names]
    jobs.append(_read_freq)
    jobs += [(lambda b=b, t=t: _read_kpi(b, t)) for b, t in GICA_KPI_TABLES.items()]

    all_rows = []
    freq_rows = []
    kpi_by_bu = {}
    with _ThreadPoolExecutor(max_workers=3) as ex:  # cap at 3 to avoid Graph API throttling
        for kind, key, payload in ex.map(lambda job: job(), jobs):
            if kind == 'emp':
                all_rows.extend(payload)
            elif kind == 'freq':
                freq_rows = payload
            else:  # 'kpi'
                kpi_by_bu[key] = payload

    return all_rows, freq_rows, kpi_by_bu


def _gica_rank(grade) -> int:
    """Grade letter → numeric rank (A=4 … D=1); unknown → 0."""
    return GICA_GRADE_ORDER.get(str(grade or '').strip().upper(), 0)


def _gica_avg(a, b):
    """Average of two sub-scores; tolerate one being missing."""
    nums = [x for x in (_gica_num(a), _gica_num(b)) if x is not None]
    return round(sum(nums) / len(nums), 4) if nums else None


def _gica_parse_date(s):
    """ISO date string → date object (or None)."""
    if not s:
        return None
    try:
        return _datetime.strptime(s[:10], '%Y-%m-%d').date()
    except (ValueError, TypeError):
        return None


def _gica_add_months(d, months):
    """Add calendar months to a date, clamping day to month length."""
    if not months or not d:
        return d
    from calendar import monthrange
    total = d.month - 1 + int(months)
    year_adj, month_idx = divmod(total, 12)
    new_year = d.year + year_adj
    new_month = month_idx + 1
    new_day = min(d.day, monthrange(new_year, new_month)[1])
    return d.replace(year=new_year, month=new_month, day=new_day)


def _gica_attempt_passed(g1, g2, exp1, exp2):
    """Did an attempt pass? None if criteria/grades incomplete."""
    if not (exp1 and exp2 and g1 and g2):
        return None
    return (_gica_rank(g1) >= _gica_rank(exp1)
            and _gica_rank(g2) >= _gica_rank(exp2))


def _build_gica_freq_lookup(freq_rows: list) -> dict:
    """(department, level, role) → {exp1, exp2, freqMonths}.

    Keys are lower-cased + trimmed so lookups survive stray casing/whitespace.
    """
    lookup = {}
    for r in freq_rows:
        key = (
            str(r.get('department', '') or '').strip().lower(),
            str(r.get('level', '') or '').strip().lower(),
            str(r.get('role', '') or '').strip().lower(),
        )
        try:
            freq_months = int(float(r.get('frquency (months)')))
        except (ValueError, TypeError):
            freq_months = None
        lookup[key] = {
            'exp1': str(r.get('expectation1', '') or '').strip().upper(),
            'exp2': str(r.get('expectation2', '') or '').strip().upper(),
            'freqMonths': freq_months,
        }
    return lookup


def _build_gica_payload(rows: list, freq_rows: list = None, kpi_by_bu: dict = None) -> dict:
    """Per employee: pick the latest non-empty test slot (#12 → #1) as current
    status. Each test has two sub-parts (result/grade {i}-1 and {i}-2). A person
    "passes" when each sub-grade meets its per-role expectation from Table_freq
    (looked up by deptname + level + position). Next test date is the formula
    cell date{N+1} (already computed in Excel)."""
    freq_lookup = _build_gica_freq_lookup(freq_rows or [])
    today = _datetime.now().date()
    employees = []
    for r in rows:
        latest = 0
        for i in range(GICA_MAX_TESTS, 0, -1):
            if r.get(f'result{i}-1', '') not in (None, '', 'null'):
                latest = i
                break

        dept  = str(r.get('deptname', '') or '').strip()
        level = str(r.get('level', '') or '').strip()
        pos   = str(r.get('position', '') or '').strip()
        crit  = freq_lookup.get((dept.lower(), level.lower(), pos.lower()))
        exp1  = crit['exp1'] if crit else ''
        exp2  = crit['exp2'] if crit else ''
        freq_months = crit['freqMonths'] if crit else None

        start_date_iso = _gica_to_iso(r.get('start_date', ''))
        start_date = _gica_parse_date(start_date_iso)
        is_new_emp = ((today - start_date).days < 90) if start_date else False

        # Skip employees with no test history AND no start_date — nothing to schedule.
        if latest == 0 and not start_date:
            continue

        history = []
        prev_actual = None
        prev_passed = None
        for i in range(1, latest + 1):
            r1 = r.get(f'result{i}-1', '')
            r2 = r.get(f'result{i}-2', '')
            if r1 in (None, '', 'null') and r2 in (None, '', 'null'):
                continue
            g1 = str(r.get(f'grade{i}-1', '') or '').strip().upper()
            g2 = str(r.get(f'grade{i}-2', '') or '').strip().upper()
            # Legacy single grade = the weaker of the two sub-grades (limiting factor).
            worse = min([g for g in (g1, g2) if g] or [''],
                        key=lambda g: _gica_rank(g)) if (g1 or g2) else ''
            actual_iso = _gica_to_iso(r.get(f'date{i}', ''))
            actual_date = _gica_parse_date(actual_iso)

            # Scheduled date for this attempt: derived from prior state.
            if i == 1:
                sched = _gica_add_months(start_date, 1) if start_date else None
            elif prev_actual is None:
                sched = None
            elif prev_passed is False:
                sched = prev_actual + timedelta(days=7)
            elif prev_passed is True and freq_months:
                sched = _gica_add_months(prev_actual, freq_months)
            else:
                sched = None

            on_time = (actual_date <= sched) if (actual_date and sched) else None

            history.append({
                'n':      i,
                'score':  _gica_avg(r1, r2),
                'score1': _gica_num(r1),
                'score2': _gica_num(r2),
                'grade':  worse,
                'grade1': g1,
                'grade2': g2,
                'date':   actual_iso,
                'scheduledDate': sched.strftime('%Y-%m-%d') if sched else None,
                'onTime': on_time,
            })
            prev_actual = actual_date
            prev_passed = _gica_attempt_passed(g1, g2, exp1, exp2)

        cur = history[-1] if history else None

        if cur:
            g1, g2 = cur['grade1'], cur['grade2']
            passed = _gica_attempt_passed(g1, g2, exp1, exp2)
        else:
            g1 = g2 = ''
            passed = None

        # Scheduled date of the next (not-yet-taken) attempt.
        if not history:
            scheduled_next = _gica_add_months(start_date, 1) if start_date else None
            next_type = 'Initial'
        elif prev_actual is None:
            scheduled_next = None
            next_type = 'Review' if passed else 'Retest'
        elif passed is False:
            scheduled_next = prev_actual + timedelta(days=7)
            next_type = 'Retest'
        elif passed is True and freq_months:
            scheduled_next = _gica_add_months(prev_actual, freq_months)
            next_type = 'Review'
        else:
            scheduled_next = None
            next_type = 'Review' if passed else 'Retest'

        # Schedule status vs today.
        if scheduled_next:
            days_to = (scheduled_next - today).days
            days_overdue = -days_to  # positive ⇒ late; negative ⇒ still ahead
            if days_overdue > 0:
                sched_status = 'overdue'
            elif days_overdue >= -7:
                sched_status = 'due_soon'
            else:
                sched_status = 'upcoming'
        else:
            days_overdue = None
            sched_status = 'unknown'

        employees.append({
            'bu':       (str(r.get('bu', '') or '').strip() or str(r.get('_bu', '') or '').strip()),
            'empid':    str(r.get('empid', '') or '').strip(),
            'name':     str(r.get('name', '') or '').strip(),
            'deptname': dept,
            'level':    level,
            'position': pos,
            'attempt':  latest,
            # Legacy bridge fields (kept so the current dashboard renders unchanged):
            'score':    cur['score'] if cur else None,
            'grade':    cur['grade'] if cur else '',
            # New authoritative fields:
            'score1':   cur['score1'] if cur else None,
            'score2':   cur['score2'] if cur else None,
            'grade1':   g1,
            'grade2':   g2,
            'exp1':     exp1,
            'exp2':     exp2,
            'passed':   passed,
            'freqMonths': freq_months,
            'lastDate': cur['date'] if cur else None,
            'nextDate': scheduled_next.strftime('%Y-%m-%d') if scheduled_next else None,
            'nextType': next_type,
            'history':  history,
            # ── Assessment Schedule fields ──
            'startDate':     start_date_iso,
            'isNewEmp':      is_new_emp,
            'scheduledNext': scheduled_next.strftime('%Y-%m-%d') if scheduled_next else None,
            'daysOverdue':   days_overdue,
            'schedStatus':   sched_status,
        })

    bus = sorted({e['bu'] for e in employees if e['bu']})

    freq_table = []
    for r in (freq_rows or []):
        dept  = str(r.get('department', '') or '').strip()
        level = str(r.get('level', '') or '').strip()
        role  = str(r.get('role', '') or '').strip()
        if not (dept or level or role):
            continue
        try:
            freq_months = int(float(r.get('frquency (months)')))
        except (ValueError, TypeError):
            freq_months = None
        freq_table.append({
            'department':   dept,
            'level':        level,
            'role':         role,
            'freqMonths':   freq_months,
            'expectation1': str(r.get('expectation1', '') or '').strip().upper(),
            'expectation2': str(r.get('expectation2', '') or '').strip().upper(),
        })

    return {
        'employees': employees,
        'bus': bus,
        'freqTable': freq_table,
        'kpiDefaults': kpi_by_bu or {},
    }


@app.route('/api/gica-excel')
def api_gica_excel():
    """Return GICA assessment data from GICA.xlsx on OneDrive.
    L1 (in-process) -> L2 (shared KV) -> live Graph API fetch fallback.
    Write endpoints below invalidate both L1 and L2 so edits show up immediately
    instead of waiting out the TTL."""
    _, error = require_token()
    if error:
        return error
    global _GICA_CACHE
    now = time.time()
    if _GICA_CACHE.get('data') and now < _GICA_CACHE.get('exp', 0):
        return jsonify(_GICA_CACHE['data'])

    kv_payload = kv_get('gica_excel')
    if kv_payload is not None:
        _GICA_CACHE = {'data': kv_payload, 'exp': now + _JUMPER_CACHE_TTL}
        return jsonify(kv_payload)

    try:
        token   = _get_manager_access_token()
        rows, freq_rows, kpi_by_bu = _fetch_gica_excel_data(token)
        payload = _build_gica_payload(rows, freq_rows, kpi_by_bu)
        _GICA_CACHE = {'data': payload, 'exp': now + _JUMPER_CACHE_TTL}
        kv_set('gica_excel', payload, ttl_seconds=_JUMPER_CACHE_TTL)
        return jsonify(payload)
    except Exception as exc:
        print(f'[GICA] /api/gica-excel error: {exc}')
        return jsonify({'error': str(exc)}), 500


# ── GICA writes (QE Sign In / Admin only) ──────────────────────────────────────
# Writes use the LOGGED-IN user's own access token (via call_graph/require_token),
# not the shared MANAGER_REFRESH_TOKEN used for reads — the GICA.xlsx sharing link
# must grant Edit (not just View) access for this to succeed.

def _gica_score_to_grade(score):
    if score is None:
        return ''
    if score >= 0.85:
        return 'A'
    if score >= 0.65:
        return 'B'
    if score >= 0.50:
        return 'C'
    return 'D'


def _gica_write_create(token, bu, record):
    table_name = f'{GICA_TABLE_PREFIX}{bu}'
    item = get_gica_drive_item(token, GICA_EXCEL_SHARE_URL)
    drive_id = item['parentReference']['driveId']
    item_id  = item['id']
    return create_gica_employee(token, drive_id, item_id, table_name, GICA_COLS, record)


def _gica_write_add_result(token, bu, empid, meas_frac, insp_frac, assess_date):
    table_name = f'{GICA_TABLE_PREFIX}{bu}'
    item = get_gica_drive_item(token, GICA_EXCEL_SHARE_URL)
    drive_id = item['parentReference']['driveId']
    item_id  = item['id']
    employee, _headers = find_gica_employee(token, drive_id, item_id, table_name, GICA_COLS, empid)
    if not employee:
        raise GraphExcelError('Employee not found')

    next_n = None
    for i in range(1, GICA_MAX_TESTS + 1):
        if employee.get(f'result{i}-1', '') in (None, '', 'null'):
            next_n = i
            break
    if next_n is None:
        raise GraphExcelError(f'{empid} ทำครบ {GICA_MAX_TESTS} ครั้งแล้ว ไม่สามารถเพิ่มผลสอบใหม่ได้')

    patch = {
        f'result{next_n}-1': meas_frac,
        f'result{next_n}-2': insp_frac,
        f'grade{next_n}-1':  _gica_score_to_grade(meas_frac),
        f'grade{next_n}-2':  _gica_score_to_grade(insp_frac),
        f'date{next_n}':     assess_date,
    }
    return update_gica_employee(token, drive_id, item_id, table_name, GICA_COLS, empid, patch)


@app.route('/api/gica/<bu>/employees', methods=['POST'])
def api_gica_create_employee(bu):
    _, error = require_token()
    if error:
        return error
    deny = require_writable(('qe_user', 'admin'))
    if deny:
        return deny

    bu = str(bu or '').strip().upper()
    payload = request.json or {}
    empid = str(payload.get('empid', '')).strip()
    if not empid or not empid.isdigit():
        return jsonify({'error': 'Employee ID ต้องเป็นตัวเลข'}), 400
    name = str(payload.get('name', '')).strip()
    if not name:
        return jsonify({'error': 'Employee Name is required'}), 400

    record = {
        'bu':         bu,
        'empid':      empid,
        'name':       name,
        'deptname':   str(payload.get('deptname', '')).strip(),
        'level':      str(payload.get('level', '')).strip(),
        'position':   str(payload.get('position', '')).strip(),
        'start_date': str(payload.get('start_date', '')).strip(),
    }
    try:
        created = call_graph(_gica_write_create, bu, record)
        global _GICA_CACHE
        _GICA_CACHE = {}
        kv_delete('gica_excel')
        return jsonify({'message': 'Created', 'employee': created})
    except AuthError as exc:
        return _auth_error_response(exc)
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


@app.route('/api/gica/<bu>/employees/<empid>/result', methods=['PATCH'])
def api_gica_add_result(bu, empid):
    _, error = require_token()
    if error:
        return error
    deny = require_writable(('qe_user', 'admin'))
    if deny:
        return deny

    bu = str(bu or '').strip().upper()
    payload = request.json or {}
    try:
        meas_pct = float(payload.get('measurementResult'))
        insp_pct = float(payload.get('inspectionResult'))
    except (TypeError, ValueError):
        return jsonify({'error': 'Measurement/Inspection Result ต้องเป็นตัวเลข'}), 400
    assess_date = str(payload.get('assessmentDate', '')).strip()
    if not assess_date:
        return jsonify({'error': 'Assessment Date is required'}), 400

    try:
        updated = call_graph(_gica_write_add_result, bu, empid,
                              meas_pct / 100, insp_pct / 100, assess_date)
        global _GICA_CACHE
        _GICA_CACHE = {}
        kv_delete('gica_excel')
        return jsonify({'message': 'Saved', 'employee': updated})
    except AuthError as exc:
        return _auth_error_response(exc)
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


# ── Audit Module ──────────────────────────────────────────────────────────────
# Audit_Monitoring.xlsx — one workbook, 4 named tables (AuditTemplate, AuditPlan,
# AuditExecution, AuditFinding), NOT split per-BU (BU is a column value).
# Reads ride the shared MANAGER_REFRESH_TOKEN (3-layer cache, same as GICA/
# Jumper/Trainer). Writes ride the logged-in session's own token via call_graph
# (qe_audit/admin sessions are shared-token sessions too, so this is the same
# MANAGER_REFRESH_TOKEN account — the workbook must be shared with Edit
# permission from that account).
_AUDIT_CACHE: dict = {}


# Excel headers use spaces/punctuation/typos as actually created in the workbook
# (e.g. "Item No.", "OpeneDate") — these helpers translate between those
# literal headers and clean, stable API field names (e.g. ItemNo, OpenedAt)
# so nothing else in app.py or the frontend has to deal with the real header
# spelling. See AUDIT_FIELD_MAPS in config.py.

def _audit_map_out(kind, excel_row):
    """Excel-header-keyed row -> clean API-field-keyed dict."""
    if not excel_row:
        return excel_row
    field_map = AUDIT_FIELD_MAPS[kind]
    out = {api_field: excel_row.get(excel_col, '') for api_field, excel_col in field_map.items()}
    if '_row_index' in excel_row:
        out['_row_index'] = excel_row['_row_index']
    return out


def _audit_map_in(kind, api_record):
    """Clean API-field-keyed dict -> Excel-header-keyed dict (only known fields)."""
    field_map = AUDIT_FIELD_MAPS[kind]
    return {excel_col: api_record[api_field]
            for api_field, excel_col in field_map.items() if api_field in api_record}


def _fetch_audit_excel_data(token: str) -> dict:
    """Resolve Audit_Monitoring.xlsx, read all 4 Audit tables in parallel.
    Returns {'templates': [...], 'plans': [...], 'executions': [...], 'findings': [...]},
    each row already translated to clean API field names via _audit_map_out."""
    share_id = encode_sharing_url(AUDIT_EXCEL_SHARE_URL)
    item = graph_request(
        token, 'GET', f'/shares/{share_id}/driveItem',
        headers={'Prefer': 'redeemSharingLinkIfNecessary'},
    )
    drive_id = item['parentReference']['driveId']
    item_id  = item['id']

    def _read(key, table_name, cols):
        for attempt in range(3):
            try:
                rows = _read_excel_table(token, drive_id, item_id, table_name, cols)
                rows = [_audit_map_out(key, r) for r in rows]
                print(f'[AUDIT] {table_name}: {len(rows)} rows', flush=True)
                return key, rows
            except Exception as exc:
                if attempt < 2:
                    time.sleep(1.5 * (attempt + 1))  # 1.5s, 3s backoff
                else:
                    print(f'[AUDIT] {table_name} skipped after 3 attempts: {exc}', flush=True)
        return key, []

    result = {}
    with _ThreadPoolExecutor(max_workers=3) as ex:
        futures = [
            ex.submit(_read, key, table_name, cols)
            for key, (table_name, cols, _pk) in AUDIT_TABLES.items()
        ]
        for fut in futures:
            key, rows = fut.result()
            result[key] = rows

    return {
        'templates':  result.get('template', []),
        'plans':      result.get('plan', []),
        'executions': result.get('execution', []),
        'findings':   result.get('finding', []),
    }


def _audit_to_iso(v):
    """Like _gica_to_iso, but also handles the Graph API returning a date's
    underlying serial-day number as a NUMERIC STRING (e.g. '46213') instead of
    a native float — _gica_to_iso's string branch assumes any string is
    already a formatted date and passes it through unchanged, which breaks on
    this shape. Left as a separate function (not modifying _gica_to_iso) so
    GICA's existing behavior is untouched."""
    if v in (None, '', 'null'):
        return None
    if isinstance(v, str):
        s = v.strip()
        if len(s) >= 10 and s[4:5] == '-':
            return s[:10]
        try:
            return _gica_to_iso(float(s))
        except (ValueError, TypeError):
            return s or None
    return _gica_to_iso(v)


def _audit_num(v):
    try:
        return float(v) if v not in (None, '', 'null') else None
    except (ValueError, TypeError):
        return None


def _audit_bool(v):
    if isinstance(v, bool):
        return v
    return str(v).strip().upper() in ('TRUE', '1', 'YES')


def _build_audit_payload(raw: dict) -> dict:
    """Light shaping only — type coercion (numbers/bools), not heavy aggregation.
    Dashboard/CAR-Report rollups (counts by status, CAR aging, etc.) are computed
    on the frontend from this shared payload, mirroring how GICA's sub-tabs all
    reshape the one cached payload client-side rather than caching N variants."""
    # No row-level PK on AuditTemplate — "Code" non-blank is the sentinel for
    # "this is a real item row" (see AUDIT_TABLES comment in config.py).
    templates = [{
        **t,
        'ItemNo':  _audit_num(t.get('ItemNo')),
        'Version': _audit_num(t.get('Version')),
        'Active':  _audit_bool(t.get('Active')),
    } for t in raw.get('templates', []) if str(t.get('Code', '')).strip()]

    # PlanID is a formatted string ('YYYY-MM-NNNN', monthly running number),
    # NOT a numeric auto-increment like the other 3 PKs — never coerce it with
    # _audit_num, just pass it through as-is (already a clean string).
    # ScheduledDate/DueDate/OpenedAt/ClosedAt are Date-formatted Excel columns —
    # Graph API returns these as serial-day numbers, not strings, regardless of
    # how they were written (same issue GICA solved with _gica_to_iso).
    plans = [{
        **p,
        'FormVersion':   _audit_num(p.get('FormVersion')),
        'ScheduledDate': _audit_to_iso(p.get('ScheduledDate')),
    } for p in raw.get('plans', []) if str(p.get('PlanID', '')).strip()]

    executions = [{
        **e,
        'ExecutionID': _audit_num(e.get('ExecutionID')),
        'ItemNo':      _audit_num(e.get('ItemNo')),
        # Score is the fixed rating enum string (Conformity/Major Non-Conformity/
        # Minor Non-Conformity/OFI), not a number — _audit_num() would silently
        # null it out (float("Conformity") raises, caught, returns None). Keep
        # it as the raw string from Excel.
        'Score':       str(e.get('Score', '')).strip(),
        # ActualResult mirrors Score until a Finding tied to this row gets
        # Approved (see _do_audit_finding_approve). Falls back to Score for
        # rows written before the ActualResult column existed.
        'ActualResult': str(e.get('ActualResult', '')).strip() or str(e.get('Score', '')).strip(),
    } for e in raw.get('executions', []) if str(e.get('ExecutionID', '')).strip()]

    findings = [{
        **f,
        'FindingID':   _audit_num(f.get('FindingID')),
        'ExecutionID': _audit_num(f.get('ExecutionID')) if str(f.get('ExecutionID', '')).strip() else None,
        'DueDate':     _audit_to_iso(f.get('DueDate')),
        'OpenedAt':    _audit_to_iso(f.get('OpenedAt')),
        'ApprovedAt':  _audit_to_iso(f.get('ApprovedAt')),
    } for f in raw.get('findings', []) if str(f.get('FindingID', '')).strip()]

    return {
        'templates':  templates,
        'plans':      plans,
        'executions': executions,
        'findings':   findings,
    }


@app.route('/api/audit-excel')
def api_audit_excel():
    """Return Audit data from Audit_Monitoring.xlsx on OneDrive.
    L1 (in-process) -> L2 (shared KV) -> live Graph API fetch fallback.
    Write endpoints below invalidate both L1 and L2 so edits show up immediately
    instead of waiting out the TTL."""
    _, error = require_token()
    if error:
        return error
    global _AUDIT_CACHE
    now = time.time()
    if _AUDIT_CACHE.get('data') and now < _AUDIT_CACHE.get('exp', 0):
        return jsonify(_AUDIT_CACHE['data'])

    kv_payload = kv_get('audit_excel')
    if kv_payload is not None:
        _AUDIT_CACHE = {'data': kv_payload, 'exp': now + _JUMPER_CACHE_TTL}
        return jsonify(kv_payload)

    try:
        token   = _get_manager_access_token()
        raw     = _fetch_audit_excel_data(token)
        payload = _build_audit_payload(raw)
        _AUDIT_CACHE = {'data': payload, 'exp': now + _JUMPER_CACHE_TTL}
        kv_set('audit_excel', payload, ttl_seconds=_JUMPER_CACHE_TTL)
        return jsonify(payload)
    except Exception as exc:
        print(f'[AUDIT] /api/audit-excel error: {exc}')
        return jsonify({'error': str(exc)}), 500


# ── Audit writes (qe_audit Sign In / Admin only) ───────────────────────────────
# Writes use the LOGGED-IN session's own access token (via call_graph/require_token).
# The Audit_Monitoring.xlsx sharing link must grant Edit (not just View) access.

def _audit_drive_item(token):
    item = get_gica_drive_item(token, AUDIT_EXCEL_SHARE_URL)
    return item['parentReference']['driveId'], item['id']


def _audit_write_create(token, kind, record):
    """record is API-field-keyed (e.g. 'ItemNo', 'ItemText') — translated to
    the real Excel headers before writing, and the created row is translated
    back to API field names before returning."""
    table_name, cols, pk_col = AUDIT_TABLES[kind]
    drive_id, item_id = _audit_drive_item(token)
    excel_record = _audit_map_in(kind, record)
    created = create_row(token, drive_id, item_id, table_name, cols, pk_col, excel_record)
    return _audit_map_out(kind, created)


def _audit_write_update(token, kind, key_value, patch):
    """patch is API-field-keyed — see _audit_write_create."""
    table_name, cols, pk_col = AUDIT_TABLES[kind]
    drive_id, item_id = _audit_drive_item(token)
    excel_patch = _audit_map_in(kind, patch)
    updated = update_row_by_key(token, drive_id, item_id, table_name, cols, pk_col, key_value, excel_patch)
    return _audit_map_out(kind, updated)


def _audit_execution_scores_for_plan(token, plan_id):
    """Fresh (not cached) list of Score values for every AuditExecution row of
    one Plan — used right after a save to decide the Plan's auto Status, so it
    must see the row that was just written, not the 5-minute-stale cache."""
    table_name, cols, pk_col = AUDIT_TABLES['execution']
    drive_id, item_id = _audit_drive_item(token)
    rows, _headers = get_table_rows_by_key(token, drive_id, item_id, table_name, cols, pk_col)
    plan_id = str(plan_id).strip()
    return [str(r.get('Score', '')).strip() for r in rows if str(r.get('PlanID', '')).strip() == plan_id]


def _auto_create_findings_for_plan(token, plan_id, nc_exec_rows, actor):
    """Auto-create Finding rows for Major/Minor NC execution items.
    Idempotent — skips any ExecutionID that already has a Finding row.
    nc_exec_rows is the list of already-created execution dicts (API field names)
    filtered to non-Conformity ratings; each must have ExecutionID and ItemNo."""
    drive_id, item_id = _audit_drive_item(token)

    # Look up Plan for BU, AuditTitle, FormVersion
    p_table, p_cols, p_pk = AUDIT_TABLES['plan']
    plan_raw, _ = find_row_by_key(token, drive_id, item_id, p_table, p_cols, p_pk, plan_id)
    if not plan_raw:
        return
    plan = _audit_map_out('plan', plan_raw)
    bu           = str(plan.get('BU', '')).strip()
    audit_title  = str(plan.get('AuditTitle', '')).strip()
    form_version = str(_audit_num(plan.get('FormVersion')) or '').strip()

    # Build ItemNo → ItemText map from Template (active version only)
    t_table, t_cols, t_key = AUDIT_TABLES['template']
    tpl_rows, _ = get_table_rows_by_key(token, drive_id, item_id, t_table, t_cols, t_key)
    item_text_map = {}
    for tr in tpl_rows:
        row = _audit_map_out('template', tr)
        if (str(row.get('Category', '')).strip() == audit_title and
                str(_audit_num(row.get('Version')) or '').strip() == form_version and
                row.get('Active')):
            try:
                item_text_map[int(float(row.get('ItemNo', 0)))] = str(row.get('ItemText', ''))
            except (TypeError, ValueError):
                pass

    # Collect existing ExecutionIDs already linked to a Finding (dedup guard)
    f_table, f_cols, f_pk = AUDIT_TABLES['finding']
    existing_rows, _ = get_table_rows_by_key(token, drive_id, item_id, f_table, f_cols, f_pk)
    linked_exec_ids = {
        str(r.get('ExecutionID', '')).strip()
        for r in existing_rows
        if str(r.get('ExecutionID', '')).strip()
    }

    for exec_row in nc_exec_rows:
        exec_id  = str(exec_row.get('ExecutionID', '')).strip()
        if not exec_id or exec_id in linked_exec_ids:
            continue
        try:
            item_no = int(float(exec_row.get('ItemNo', 0)))
        except (TypeError, ValueError):
            item_no = 0
        item_text = item_text_map.get(item_no, f'Item No. {item_no}')
        severity  = AUDIT_RATING_TO_SEVERITY.get(str(exec_row.get('Score', '')).strip(), 'Minor')

        new_finding = {
            'PlanID':      plan_id,
            'ExecutionID': exec_id,
            'BU':          bu,
            'Severity':    severity,
            'Description': item_text,
            'Status':      'Open',
            'OpenedBy':    actor,
            'OpenedAt':    _datetime.utcnow().isoformat(),
        }
        excel_rec = _audit_map_in('finding', new_finding)
        create_row(token, drive_id, item_id, f_table, f_cols, f_pk, excel_rec)
        linked_exec_ids.add(exec_id)  # prevent duplicates within this batch


def _audit_all_findings_approved(token, plan_id):
    """Return True iff the plan has at least one Finding and ALL are Approved."""
    f_table, f_cols, f_pk = AUDIT_TABLES['finding']
    drive_id, item_id = _audit_drive_item(token)
    rows, _ = get_table_rows_by_key(token, drive_id, item_id, f_table, f_cols, f_pk)
    plan_findings = [
        _audit_map_out('finding', r)
        for r in rows
        if str(r.get('PlanID', '')).strip() == str(plan_id).strip()
    ]
    if not plan_findings:
        return False
    return all(str(f.get('Status', '')).strip() == 'Approved' for f in plan_findings)


def _audit_next_plan_id(token, drive_id, item_id):
    """PlanID is a monthly running number formatted 'YYYY-MM-NNNN' (e.g.
    2026-06-0001), not a plain auto-increment integer — the counter resets
    every calendar month. Scans existing PlanID values for the current
    year-month prefix and returns prefix + (max existing seq + 1)."""
    table_name, cols, pk_col = AUDIT_TABLES['plan']
    rows, _headers = get_table_rows_by_key(token, drive_id, item_id, table_name, cols, pk_col)
    prefix = _datetime.utcnow().strftime('%Y-%m')
    max_seq = 0
    for r in rows:
        pid = str(r.get(pk_col, '')).strip()
        if pid.startswith(prefix + '-'):
            try:
                max_seq = max(max_seq, int(pid.rsplit('-', 1)[-1]))
            except ValueError:
                pass
    return f'{prefix}-{max_seq + 1:04d}'


def _audit_write_create_plan(token, record):
    """Like _audit_write_create('plan', ...) but generates the formatted
    PlanID server-side instead of relying on create_row's generic
    max(int)+1 auto-increment (which doesn't understand the YYYY-MM-NNNN
    format)."""
    table_name, cols, pk_col = AUDIT_TABLES['plan']
    drive_id, item_id = _audit_drive_item(token)
    plan_id = _audit_next_plan_id(token, drive_id, item_id)
    excel_record = _audit_map_in('plan', record)
    excel_record[pk_col] = plan_id
    created = create_row(token, drive_id, item_id, table_name, cols, pk_col, excel_record)
    return _audit_map_out('plan', created)


def _audit_invalidate_cache():
    global _AUDIT_CACHE
    _AUDIT_CACHE = {}
    kv_delete('audit_excel')


def _audit_actor_name():
    return (session.get('user') or {}).get('name', '')


def _audit_write_create_form(token, form):
    """Create a whole Form (Google/MS-Forms model) in one call: TemplateName +
    Category + Code, plus N checklist items. If `Code` matches an existing
    form, this is a new VERSION — Version = max existing Version for that
    Code + 1, and every row currently Active for that Code gets Active=FALSE
    (old version retired, kept for history) before the new version's rows are
    written with Active=True.

    AuditTemplate has no row-level PK column — identity is Code+Version+ItemNo.
    Code itself repeats across every item row of the same Form, so the
    deactivation step below uses update_row_by_index (by each row's own
    _row_index) instead of the generic key-based update_row_by_key, which
    would only ever touch the first matching row."""
    table_name, cols, sentinel_col = AUDIT_TABLES['template']
    drive_id, item_id = _audit_drive_item(token)

    excel_rows, headers = get_table_rows_by_key(token, drive_id, item_id, table_name, cols, sentinel_col)

    code = str(form.get('Code', '')).strip()
    same_code_rows = [r for r in excel_rows if str(r.get('Code', '')).strip() == code] if code else []
    version = 1
    if same_code_rows:
        versions = []
        for r in same_code_rows:
            try:
                versions.append(int(float(r.get('Version', 0) or 0)))
            except (ValueError, TypeError):
                pass
        version = (max(versions) if versions else 0) + 1
        for r in same_code_rows:
            if str(r.get('Active', '')).strip().upper() in ('TRUE', '1', 'YES'):
                update_row_by_index(token, drive_id, item_id, table_name, cols, headers, r, {'Active': False})

    actor = _audit_actor_name()
    now_iso = _datetime.utcnow().isoformat()
    created = []
    for idx, raw_item in enumerate(form.get('items') or [], start=1):
        item_text = str(raw_item.get('ItemText', '')).strip()
        if not item_text:
            continue
        record = {
            'TemplateName': form.get('TemplateName', ''),
            'Category':     form.get('Category', ''),
            'ItemNo':       idx,
            'ItemText':     item_text,
            'Code':         code,
            'Version':      version,
            'Active':       True,
            'CreatedBy':    actor,
            'CreatedAt':    now_iso,
        }
        excel_record = _audit_map_in('template', record)
        row = append_row(token, drive_id, item_id, table_name, cols, excel_record)
        created.append(_audit_map_out('template', row))
    return created


@app.route('/api/audit/templates/forms', methods=['POST'])
def api_audit_create_template_form():
    """Create a new Form, or a new Version of an existing one if `Code`
    matches — see _audit_write_create_form."""
    _, error = require_token()
    if error:
        return error
    deny = require_writable(('qe_audit', 'admin'))
    if deny:
        return deny

    payload = request.json or {}
    template_name = str(payload.get('TemplateName', '')).strip()
    category = str(payload.get('Category', '')).strip()
    code = str(payload.get('Code', '')).strip()
    items = [it for it in (payload.get('items') or []) if str(it.get('ItemText', '')).strip()]
    if not template_name:
        return jsonify({'error': 'Template Name is required'}), 400
    if not category:
        return jsonify({'error': 'Category is required'}), 400
    if not code:
        return jsonify({'error': 'Code is required'}), 400
    if not items:
        return jsonify({'error': 'At least 1 checklist item is required'}), 400

    form = {
        'TemplateName': template_name,
        'Category':     category,
        'Code':         code,
        'items':        items,
    }
    try:
        created = call_graph(_audit_write_create_form, form)
        _audit_invalidate_cache()
        return jsonify({'message': 'Created', 'items': created})
    except AuthError as exc:
        return _auth_error_response(exc)
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


@app.route('/api/audit/plans', methods=['POST'])
def api_audit_create_plan():
    _, error = require_token()
    if error:
        return error
    deny = require_writable(('qe_audit', 'admin'))
    if deny:
        return deny

    payload = request.json or {}
    bu = str(payload.get('BU', '')).strip().upper()
    if bu not in DEPARTMENTS:
        return jsonify({'error': 'Invalid BU'}), 400
    title = str(payload.get('AuditTitle', '')).strip()
    if not title:
        return jsonify({'error': 'AuditTitle is required'}), 400

    record = {k: payload.get(k, '') for k in [
        'BU', 'Department', 'FormVersion', 'AuditTitle',
        'ScheduledDate', 'Auditor1', 'Auditor2', 'Auditor3', 'Notes',
    ]}
    record['BU']     = bu
    record['Status'] = 'Planned'
    record['CreatedBy'] = _audit_actor_name()
    # No CreatedAt column in the actual AuditPlan table.

    try:
        created = call_graph(_audit_write_create_plan, record)
        _audit_invalidate_cache()
        return jsonify({'message': 'Created', 'plan': created})
    except AuthError as exc:
        return _auth_error_response(exc)
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


@app.route('/api/audit/plans/<plan_id>', methods=['PATCH'])
def api_audit_update_plan(plan_id):
    """E.g. manual status transition Planned -> Cancelled (used by the "Cancel
    Plan" confirm modal in the frontend — only offered while Status=Planned).
    plan_id is a plain string ('YYYY-MM-NNNN'), not an int — see _audit_next_plan_id."""
    _, error = require_token()
    if error:
        return error
    deny = require_writable(('qe_audit', 'admin'))
    if deny:
        return deny

    payload = request.json or {}
    patch = {k: payload[k] for k in [
        'BU', 'Department', 'FormVersion', 'AuditTitle',
        'ScheduledDate', 'Auditor1', 'Auditor2', 'Auditor3', 'Status', 'Notes',
    ] if k in payload}

    try:
        updated = call_graph(_audit_write_update, 'plan', plan_id, patch)
        _audit_invalidate_cache()
        return jsonify({'message': 'Saved', 'plan': updated})
    except AuthError as exc:
        return _auth_error_response(exc)
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


@app.route('/api/audit/executions', methods=['POST'])
def api_audit_create_execution():
    """Accepts either a single execution object or an array — writing a whole
    audit's scored checklist in one call avoids opening N workbook write
    sessions for N checklist items."""
    _, error = require_token()
    if error:
        return error
    deny = require_writable(('qe_audit', 'admin'))
    if deny:
        return deny

    payload = request.json or {}
    items = payload if isinstance(payload, list) else [payload]
    if not items:
        return jsonify({'error': 'No execution rows provided'}), 400

    actor = _audit_actor_name()
    created_rows = []
    try:
        for raw_item in items:
            plan_id = raw_item.get('PlanID')
            item_no = raw_item.get('ItemNo')
            if not plan_id or not item_no:
                return jsonify({'error': 'PlanID and ItemNo are required'}), 400
            record = {k: raw_item.get(k, '') for k in [
                'PlanID', 'ItemNo', 'Score', 'Comment',
            ]}
            record['ExecutedBy'] = actor
            # ActualResult starts as a copy of Score — Score itself never
            # changes again after this write, but ActualResult flips to
            # "Conformity" once the Finding it produced gets Approved (see
            # _do_audit_finding_approve below).
            record['ActualResult'] = record.get('Score', '')
            # No ExecutedAt column in the actual AuditExecution table.
            created_rows.append(call_graph(_audit_write_create, 'execution', record))

        # Auto-update Plan Status from the full execution score set (not just
        # the rows just written, so partial re-saves still resolve correctly).
        plan_id = items[0].get('PlanID')
        scores  = call_graph(_audit_execution_scores_for_plan, plan_id)
        has_nc  = any(s in ('Major Non-Conformity', 'Minor Non-Conformity') for s in scores)
        new_status = 'Issued' if has_nc else 'Completed'
        call_graph(_audit_write_update, 'plan', plan_id, {'Status': new_status})

        # Auto-create Finding rows for every NC execution item (idempotent).
        if has_nc:
            nc_rows = [r for r in created_rows
                       if str(r.get('Score', '')).strip() in AUDIT_RATING_TO_SEVERITY]
            if nc_rows:
                token = get_valid_token()
                _auto_create_findings_for_plan(token, plan_id, nc_rows, actor)

        _audit_invalidate_cache()
        return jsonify({'message': 'Created', 'executions': created_rows, 'planStatus': new_status})
    except AuthError as exc:
        return _auth_error_response(exc)
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


@app.route('/api/audit/findings', methods=['POST'])
def api_audit_create_finding():
    """Step 1: Auditor opens a Finding/CAR. Sets Status='Open', OpenedBy/At."""
    _, error = require_token()
    if error:
        return error
    deny = require_writable(('qe_audit', 'admin'))
    if deny:
        return deny

    payload = request.json or {}
    bu = str(payload.get('BU', '')).strip().upper()
    if bu not in DEPARTMENTS:
        return jsonify({'error': 'Invalid BU'}), 400
    description = str(payload.get('Description', '')).strip()
    if not description:
        return jsonify({'error': 'Description is required'}), 400

    record = {k: payload.get(k, '') for k in [
        'PlanID', 'ExecutionID', 'Severity', 'Description',
        'ResponsiblePerson', 'DueDate',
    ]}
    record['BU']       = bu
    record['Status']   = 'Open'
    record['OpenedBy'] = _audit_actor_name()
    record['OpenedAt'] = _datetime.utcnow().isoformat()

    try:
        created = call_graph(_audit_write_create, 'finding', record)
        _audit_invalidate_cache()
        return jsonify({'message': 'Created', 'finding': created})
    except AuthError as exc:
        return _auth_error_response(exc)
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


def _audit_finding_or_404(token, finding_id):
    table_name, cols, pk_col = AUDIT_TABLES['finding']
    drive_id, item_id = _audit_drive_item(token)
    row, _headers = find_row_by_key(token, drive_id, item_id, table_name, cols, pk_col, finding_id)
    return _audit_map_out('finding', row) if row else None


@app.route('/api/audit/findings/<int:finding_id>/respond', methods=['PATCH'])
def api_audit_finding_respond(finding_id):
    """Step 2: Auditee responds. Sets RootCause/CorrectiveAction,
    Status='Open' -> 'Responded', RespondedBy/At. Rejects if not currently Open."""
    _, error = require_token()
    if error:
        return error
    deny = require_writable(('qe_audit', 'admin'))
    if deny:
        return deny

    payload = request.json or {}
    root_cause = str(payload.get('RootCause', '')).strip()
    corrective_action = str(payload.get('CorrectiveAction', '')).strip()
    if not root_cause or not corrective_action:
        return jsonify({'error': 'RootCause and CorrectiveAction are required'}), 400

    try:
        token = get_valid_token()
        finding = _audit_finding_or_404(token, finding_id)
        if not finding:
            return jsonify({'error': 'Finding not found'}), 404
        if str(finding.get('Status', '')).strip() != 'Open':
            return jsonify({'error': f"Cannot respond — current status is "
                                      f"'{finding.get('Status', '')}', expected 'Open'"}), 409

        patch = {
            'RootCause':         root_cause,
            'CorrectiveAction':  corrective_action,
            'PreventiveAction':  str(payload.get('PreventiveAction', '')).strip(),
            'ResponsiblePerson': str(payload.get('ResponsiblePerson', finding.get('ResponsiblePerson', ''))),
            'DueDate':           str(payload.get('DueDate', finding.get('DueDate', ''))),
            'Status':            'Responded',
            'RespondedBy':       _audit_actor_name(),
        }
        updated = call_graph(_audit_write_update, 'finding', finding_id, patch)
        _audit_invalidate_cache()
        return jsonify({'message': 'Saved', 'finding': updated})
    except AuthError as exc:
        return _auth_error_response(exc)
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


@app.route('/api/audit/plans/<plan_id>/respond', methods=['POST'])
def api_audit_plan_respond(plan_id):
    """Bulk respond: Auditee submits Root Cause / Corrective Action /
    Preventive Action / Responsible Person / Due Date for all Open findings
    of one Plan at once. Transitions each finding Open→Responded, then moves
    the Plan Issued→Pending Approval. qe_auditee is allowed here (and only
    here) — every other Audit write route stays qe_audit/admin only."""
    _, error = require_token()
    if error:
        return error
    deny = require_writable(('qe_audit', 'qe_auditee', 'admin'))
    if deny:
        return deny

    items = request.json
    if not isinstance(items, list) or not items:
        return jsonify({'error': 'Expected a non-empty array of finding responses'}), 400

    try:
        actor = _audit_actor_name()
        updated_findings = []
        for item in items:
            finding_id = item.get('findingId')
            root_cause = str(item.get('rootCause', '')).strip()
            corrective = str(item.get('correctiveAction', '')).strip()
            if not finding_id or not root_cause or not corrective:
                return jsonify({'error': 'findingId, rootCause, correctiveAction required per finding'}), 400
            patch = {
                'RootCause':         root_cause,
                'CorrectiveAction':  corrective,
                'PreventiveAction':  str(item.get('preventiveAction', '')).strip(),
                'ResponsiblePerson': str(item.get('responsiblePerson', '')).strip(),
                'DueDate':           str(item.get('dueDate', '')).strip(),
                'Status':            'Responded',
                'RespondedBy':       actor,
            }
            updated = call_graph(_audit_write_update, 'finding', finding_id, patch)
            updated_findings.append(updated)

        call_graph(_audit_write_update, 'plan', plan_id, {'Status': 'Pending Approval'})
        _audit_invalidate_cache()
        return jsonify({'message': 'Responded', 'findings': updated_findings,
                        'planStatus': 'Pending Approval'})
    except AuthError as exc:
        return _auth_error_response(exc)
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


def _do_audit_finding_approve(token, finding_id, approver_comment):
    """Core approve logic — shared by /approve and the legacy /close route."""
    finding = _audit_finding_or_404(token, finding_id)
    if not finding:
        return None, 404, 'Finding not found'
    if str(finding.get('Status', '')).strip() != 'Responded':
        return None, 409, (f"Cannot approve — status is "
                           f"'{finding.get('Status', '')}', expected 'Responded'")

    patch = {
        'Status':          'Approved',
        'ApprovedBy':      _audit_actor_name(),
        'ApprovedAt':      _datetime.utcnow().isoformat(),
        'ApproverComment': str(approver_comment or '').strip(),
    }
    updated = call_graph(_audit_write_update, 'finding', finding_id, patch)

    # The issue is now resolved — flip the originating AuditExecution row's
    # ActualResult to "Conformity" so it reflects current state. Score itself
    # is left untouched (it's the immutable record of what was found at audit
    # time). Ad-hoc findings opened without an ExecutionID have nothing to flip.
    execution_id = finding.get('ExecutionID')
    if execution_id:
        call_graph(_audit_write_update, 'execution', execution_id, {'ActualResult': 'Conformity'})

    plan_id = str(finding.get('PlanID', '')).strip()
    plan_status = None
    if plan_id and _audit_all_findings_approved(token, plan_id):
        call_graph(_audit_write_update, 'plan', plan_id, {'Status': 'Completed'})
        plan_status = 'Completed'

    _audit_invalidate_cache()
    return {'message': 'Approved', 'finding': updated, 'planStatus': plan_status}, 200, None


@app.route('/api/audit/findings/<int:finding_id>/approve', methods=['PATCH'])
def api_audit_finding_approve(finding_id):
    """Auditor approves one Finding: Responded→Approved, records ApprovedBy/At
    and optional ApproverComment. When every Finding for the Plan is Approved
    the Plan status is automatically set to Completed."""
    _, error = require_token()
    if error:
        return error
    deny = require_writable(('qe_audit', 'admin'))
    if deny:
        return deny

    payload = request.json or {}
    try:
        token = get_valid_token()
        result, status_code, err_msg = _do_audit_finding_approve(
            token, finding_id, payload.get('ApproverComment', ''))
        if err_msg:
            return jsonify({'error': err_msg}), status_code
        return jsonify(result)
    except AuthError as exc:
        return _auth_error_response(exc)
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


@app.route('/api/audit/findings/<int:finding_id>/close', methods=['PATCH'])
def api_audit_finding_close(finding_id):
    """Legacy alias for /approve — ClosureNotes mapped to ApproverComment."""
    _, error = require_token()
    if error:
        return error
    deny = require_writable(('qe_audit', 'admin'))
    if deny:
        return deny

    payload = request.json or {}
    comment = payload.get('ApproverComment', payload.get('ClosureNotes', ''))
    try:
        token = get_valid_token()
        result, status_code, err_msg = _do_audit_finding_approve(token, finding_id, comment)
        if err_msg:
            return jsonify({'error': err_msg}), status_code
        return jsonify(result)
    except AuthError as exc:
        return _auth_error_response(exc)
    except Exception as exc:
        return jsonify({'error': str(exc)}), 500


# ── Admin: Force Refresh (emergency cache bust for all 4 modules) ──────────────
# Cooldown is tracked in KV (not just in-process) so it holds even across
# Vercel serverless instances/cold starts — admin in instance A can't bypass
# the cooldown just by hitting instance B a second later.
_FORCE_REFRESH_COOLDOWN = _JUMPER_CACHE_TTL  # 300s — same window as the caches it clears


def _force_refresh_remaining_seconds():
    last_at = kv_get('force_refresh_last_at')
    if not last_at:
        return 0
    remaining = _FORCE_REFRESH_COOLDOWN - (time.time() - last_at)
    return max(0, round(remaining))


@app.route('/api/admin/force-refresh-status')
def api_force_refresh_status():
    _, error = require_token()
    if error:
        return error
    deny = require_writable(('admin',))
    if deny:
        return deny
    return jsonify({'remainingSeconds': _force_refresh_remaining_seconds()})


@app.route('/api/admin/force-refresh', methods=['POST'])
def api_force_refresh():
    _, error = require_token()
    if error:
        return error
    deny = require_writable(('admin',))
    if deny:
        return deny

    remaining = _force_refresh_remaining_seconds()
    if remaining > 0:
        return jsonify({'error': 'Force Refresh is on cooldown', 'remainingSeconds': remaining}), 429

    global _GICA_CACHE, _JUMPER_EXCEL_CACHE, _TRAINER_EXCEL_CACHE, _NEWOP_CACHE, _AUDIT_CACHE
    _GICA_CACHE = {}
    _JUMPER_EXCEL_CACHE = {}
    _TRAINER_EXCEL_CACHE = {}
    _NEWOP_CACHE = {}
    _AUDIT_CACHE = {}
    kv_delete('gica_excel')
    kv_delete('jumper_excel')
    kv_delete('trainer_excel')
    kv_delete('audit_excel')
    for dept_key in DEPARTMENTS.keys():
        kv_delete(f'newop_employees_{dept_key}')

    kv_set('force_refresh_last_at', time.time(), ttl_seconds=_FORCE_REFRESH_COOLDOWN)
    print('[ADMIN] Force Refresh triggered — all caches invalidated', flush=True)
    return jsonify({'message': 'Refreshed', 'remainingSeconds': _FORCE_REFRESH_COOLDOWN})


@app.route('/api/jumper-data')
def api_jumper_data():
    """Return merged jumper/trainer/employee/sewingOperator data from OneDrive.
    Cached in-process for 5 minutes to minimise Graph API round-trips."""
    _, error = require_token()
    if error:
        return error
    global _JUMPER_CACHE
    now = time.time()
    if _JUMPER_CACHE.get('data') and now < _JUMPER_CACHE.get('exp', 0):
        return jsonify(_JUMPER_CACHE['data'])
    try:
        files   = _fetch_jumper_files_from_onedrive()
        payload = _build_jumper_payload(files)
        _JUMPER_CACHE = {'data': payload, 'exp': now + _JUMPER_CACHE_TTL}
        return jsonify(payload)
    except Exception as exc:
        print(f'[JUMPER] /api/jumper-data error: {exc}')
        return jsonify({'error': str(exc)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True, use_reloader=False)
