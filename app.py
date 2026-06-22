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
    GICA_MAX_TESTS,
    GICA_TABLE_PREFIX,
    JUMPER_BU_TABLES,
    JUMPER_EXCEL_COLS,
    JUMPER_EXCEL_SHARE_URL,
    JUMPER_SEW_COLS,
    JUMPER_SEW_TABLE,
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
from graph_excel import (
    TokenExpiredError,
    create_employee,
    encode_sharing_url,
    find_employee,
    get_table_rows,
    graph_request,
    update_employee,
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


def is_manager():
    """True when the session was opened via /manager-login (view-only)."""
    return session.get("role") == "manager"


def require_writable():
    """Block writes for manager sessions. Returns (response, status) or None."""
    if is_manager():
        return jsonify({
            "error": "Read-only access for CSA Manager",
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
    auth_url = _build_msal_app().get_authorization_request_url(
        SCOPES,
        redirect_uri=REDIRECT_URI,
        prompt="select_account",
    )
    return redirect(auth_url)


@app.route("/auth/callback")
def auth_callback():
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

    # ── Persist session ───────────────────────────────────────────────────────
    # Store ONLY the refresh token in the cookie (~0.8 KB).
    # Cache the access token in process memory to avoid cookie overflow.
    claims = result.get("id_token_claims") or {}
    oid = claims.get("oid") or claims.get("sub") or "unknown"

    session["rt"] = result.get("refresh_token", "")
    session["user"] = {
        "name":  claims.get("name") or claims.get("preferred_username") or "User",
        "email": claims.get("preferred_username") or claims.get("upn") or "",
        "oid":   oid,
    }
    session.permanent = True

    _AT_CACHE[oid] = {
        "at":  result["access_token"],
        "exp": time.time() + result.get("expires_in", 3600),
    }

    print(f"[AUTH] Login OK — {session['user']['name']}")

    # ── Setup helper for CSA Manager mode ─────────────────────────────────────
    # If the operator hasn't configured MANAGER_REFRESH_TOKEN yet, print the
    # current login's refresh token so they can copy it into .env to enable
    # the "CSA Manager" (view-only) button on the login screen.
    if not MANAGER_REFRESH_TOKEN and result.get("refresh_token"):
        print("\n" + "=" * 72)
        print(" CSA MANAGER SETUP — copy the line below into your .env file")
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


@app.route("/manager-login", methods=["POST"])
def manager_login():
    """Open a view-only session using the central MANAGER_REFRESH_TOKEN.
    No password required — the caller just clicks the button.
    Backend will refuse writes for this session role."""
    if not MANAGER_REFRESH_TOKEN:
        return jsonify({
            "error": "CSA Manager mode is not configured on the server.",
        }), 500

    session.permanent = True
    session["rt"] = MANAGER_REFRESH_TOKEN
    session["user"] = {
        "name":  "CSA Manager",
        "email": "manager@view-only",
        "oid":   "manager-shared",
    }
    session["role"] = "manager"

    # Verify the central token actually works before returning success
    token = get_valid_token()
    if not token:
        session.clear()
        return jsonify({
            "error": "Central manager token is invalid or expired. "
                     "Ask an admin to refresh MANAGER_REFRESH_TOKEN.",
        }), 500

    print("[AUTH] CSA Manager session opened")
    return jsonify({"ok": True})


# ---------------------------------------------------------------------------
# Routes — API
# ---------------------------------------------------------------------------

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
        _, employees = call_graph(get_table_rows, department)
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
    deny = require_writable()
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
    deny = require_writable()
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
    Cached in-process for 5 minutes to minimise Graph API round-trips."""
    _, error = require_token()
    if error:
        return error
    global _JUMPER_EXCEL_CACHE
    now = time.time()
    if _JUMPER_EXCEL_CACHE.get('data') and now < _JUMPER_EXCEL_CACHE.get('exp', 0):
        return jsonify(_JUMPER_EXCEL_CACHE['data'])
    try:
        token                    = _get_manager_access_token()
        jumper_rows, sew_rows    = _fetch_jumper_excel_data(token)
        payload                  = _build_jumper_excel_payload(jumper_rows, sew_rows)
        _JUMPER_EXCEL_CACHE      = {'data': payload, 'exp': now + _JUMPER_CACHE_TTL}
        return jsonify(payload)
    except Exception as exc:
        print(f'[JUMPER-EXCEL] /api/jumper-excel error: {exc}')
        return jsonify({'error': str(exc)}), 500


@app.route('/api/trainer-excel')
def api_trainer_excel():
    """Return Trainer data from Trainer_Monitoring.xlsx on OneDrive. Cached 5 min."""
    _, error = require_token()
    if error:
        return error
    global _TRAINER_EXCEL_CACHE
    now = time.time()
    if _TRAINER_EXCEL_CACHE.get('data') and now < _TRAINER_EXCEL_CACHE.get('exp', 0):
        return jsonify(_TRAINER_EXCEL_CACHE['data'])
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
    """Resolve GICA.xlsx, auto-discover GICA_* tables + read Table_freq, in parallel.

    Returns (employee_rows, freq_rows).
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

    def _read_one(tname):
        bu_tag = tname[len(GICA_TABLE_PREFIX):]
        for attempt in range(3):
            try:
                rows = _read_excel_table(token, drive_id, item_id, tname, GICA_COLS)
                for r in rows:
                    r['_bu'] = bu_tag
                print(f'[GICA] {tname}: {len(rows)} rows', flush=True)
                return rows
            except Exception as exc:
                if attempt < 2:
                    time.sleep(1.5 * (attempt + 1))  # 1.5s, 3s backoff
                else:
                    print(f'[GICA] {tname} skipped after 3 attempts: {exc}', flush=True)
        return []

    all_rows = []
    with _ThreadPoolExecutor(max_workers=3) as ex:  # cap at 3 to avoid Graph API throttling
        for rows in ex.map(_read_one, table_names):
            all_rows.extend(rows)

    try:
        freq_rows = _read_excel_table(token, drive_id, item_id,
                                      GICA_FREQ_TABLE, GICA_FREQ_COLS)
        print(f'[GICA] {GICA_FREQ_TABLE}: {len(freq_rows)} rows', flush=True)
    except Exception as exc:
        print(f'[GICA] {GICA_FREQ_TABLE} skipped: {exc}', flush=True)
        freq_rows = []

    return all_rows, freq_rows


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


def _build_gica_payload(rows: list, freq_rows: list = None) -> dict:
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

    return {'employees': employees, 'bus': bus, 'freqTable': freq_table}


@app.route('/api/gica-excel')
def api_gica_excel():
    """Return GICA assessment data from GICA.xlsx on OneDrive. Cached 5 min."""
    _, error = require_token()
    if error:
        return error
    global _GICA_CACHE
    now = time.time()
    if _GICA_CACHE.get('data') and now < _GICA_CACHE.get('exp', 0):
        return jsonify(_GICA_CACHE['data'])
    try:
        token   = _get_manager_access_token()
        rows, freq_rows = _fetch_gica_excel_data(token)
        payload = _build_gica_payload(rows, freq_rows)
        _GICA_CACHE = {'data': payload, 'exp': now + _JUMPER_CACHE_TTL}
        return jsonify(payload)
    except Exception as exc:
        print(f'[GICA] /api/gica-excel error: {exc}')
        return jsonify({'error': str(exc)}), 500


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
