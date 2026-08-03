import os
import re as _re
import time
import urllib.parse as _urllib_parse
from concurrent.futures import ThreadPoolExecutor as _ThreadPoolExecutor
from datetime import datetime as _datetime, timedelta

import requests as _requests
from flask import Flask, jsonify, render_template, request

from config import (
    AUDIT_BUS,
    AUDIT_EXECUTION_RATINGS,
    AUDIT_PLAN_STATUSES,
    AUDIT_RATING_TO_SEVERITY,
    AUTHORITY,
    CLIENT_ID,
    CLIENT_SECRET,
    DEPARTMENTS,
    FLASK_SECRET_KEY,
    GICA_GRADE_ORDER,
    GICA_MAX_TESTS,
    JUMPER_BU_TABLES,
    JUMPER_EXCEL_COLS,
    JUMPER_EXCEL_SHARE_URL,
    JUMPER_SEW_COLS,
    JUMPER_SEW_TABLE,
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
    TokenExpiredError,
    encode_sharing_url,
    graph_request,
)
from supabase_client import SupabaseError, sb_insert, sb_select, sb_update, sb_delete, sb_auth_sign_in
from supabase_auth import extract_bearer, get_user_role, invalidate_role_cache, verify_jwt

# ---------------------------------------------------------------------------
# App setup
# ---------------------------------------------------------------------------
app = Flask(__name__)
app.secret_key = FLASK_SECRET_KEY

_IS_VERCEL = os.getenv("VERCEL", "") == "1"

MANAGER_REFRESH_TOKEN = os.getenv("MANAGER_REFRESH_TOKEN", "")

# ---------------------------------------------------------------------------
# Microsoft Graph — manager-token-only
# (No per-user OAuth; all Graph calls use the single service refresh token.)
# ---------------------------------------------------------------------------

_MANAGER_AT_CACHE: dict = {}   # single entry keyed "manager"


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


def _get_manager_access_token() -> str:
    """Return a valid manager access token, refreshing only when within 5 min of expiry."""
    cached = _MANAGER_AT_CACHE.get("manager")
    if cached and time.time() < cached["exp"] - 300:
        return cached["at"]
    if not MANAGER_REFRESH_TOKEN:
        raise ValueError("MANAGER_REFRESH_TOKEN not configured on this server")
    result = _do_token_refresh(MANAGER_REFRESH_TOKEN)
    if not result or "access_token" not in result:
        raise ValueError("Failed to get manager access token — MANAGER_REFRESH_TOKEN may be expired")
    at  = result["access_token"]
    exp = time.time() + result.get("expires_in", 3600)
    _MANAGER_AT_CACHE["manager"] = {"at": at, "exp": exp}
    return at


# ---------------------------------------------------------------------------
# Auth helpers — Supabase JWT-based
# ---------------------------------------------------------------------------

def require_writable(allowed_roles):
    """Guard for write endpoints — checks Bearer JWT and role. Returns error response or None."""
    token_str = extract_bearer(request)
    if not token_str:
        return jsonify({"error": "Authentication required", "login_required": True}), 401
    payload = verify_jwt(token_str)
    if not payload:
        return jsonify({"error": "Invalid or expired token", "login_required": True}), 401
    user_id = payload.get("sub", "")
    role = get_user_role(user_id)
    if role not in allowed_roles:
        return jsonify({"error": "Insufficient permissions", "read_only": True}), 403
    return None


def _get_request_actor() -> str:
    """Extract actor name/email from Bearer JWT, or return empty string."""
    token_str = extract_bearer(request)
    if not token_str:
        return ""
    payload = verify_jwt(token_str)
    if not payload:
        return ""
    return payload.get("email", "") or payload.get("sub", "")


def get_department_or_404(department_key):
    dep = DEPARTMENTS.get(str(department_key or "").upper())
    if not dep:
        return None, (jsonify({"error": "Invalid department"}), 404)
    return dep, None


# ---------------------------------------------------------------------------
# Routes — Auth
# ---------------------------------------------------------------------------

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/auth/login", methods=["POST"])
def api_auth_login():
    """Email/password login via Supabase Auth. Returns {access_token, expires_in}."""
    payload = request.json or {}
    email    = str(payload.get("email", "")).strip()
    password = str(payload.get("password", ""))
    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400
    try:
        result = sb_auth_sign_in(email, password)
        return jsonify({
            "access_token": result.get("access_token"),
            "expires_in":   result.get("expires_in", 3600),
        })
    except SupabaseError as exc:
        return jsonify({"error": str(exc)}), 401
    except Exception as exc:
        return jsonify({"error": str(exc)}), 500


@app.route("/api/auth/logout", methods=["POST"])
def api_auth_logout():
    """Invalidate the Supabase session and the in-process role cache."""
    from supabase_client import SUPABASE_URL, SUPABASE_SERVICE_KEY
    token_str = extract_bearer(request)
    # Revoke the token server-side on Supabase
    if token_str:
        try:
            _requests.post(
                f"{SUPABASE_URL}/auth/v1/logout",
                headers={
                    "apikey": SUPABASE_SERVICE_KEY,
                    "Authorization": f"Bearer {token_str}",
                },
                timeout=5,
            )
        except Exception:
            pass
        jwt_payload = verify_jwt(token_str)
        if jwt_payload:
            invalidate_role_cache(jwt_payload.get("sub", ""))
    return jsonify({"ok": True})


@app.route("/api/me")
def api_me():
    """Return current auth status and role. No JWT → unauthenticated."""
    token_str = extract_bearer(request)
    if not token_str:
        return jsonify({"authenticated": False, "user": None, "role": "viewer"})
    jwt_payload = verify_jwt(token_str)
    if not jwt_payload:
        return jsonify({"authenticated": False, "user": None, "role": "viewer"})
    user_id = jwt_payload.get("sub", "")
    role    = get_user_role(user_id) or "viewer"
    email   = jwt_payload.get("email", "")
    meta    = jwt_payload.get("user_metadata") or {}
    name    = meta.get("display_name", "") or (email.split("@")[0] if email else "")
    return jsonify({
        "authenticated": True,
        "user":          {"name": name, "email": email},
        "role":          role,
    })


@app.route("/api/departments")
def api_departments():
    return jsonify([
        {"key": key, "label": dep["label"], "workbook_name": dep["workbook_name"]}
        for key, dep in DEPARTMENTS.items()
    ])


# ---------------------------------------------------------------------------
# New Operator (CSA) routes  — Phase 2: reads/writes via Supabase csa_employees
# ---------------------------------------------------------------------------

# Supabase snake_case column → API "Title Case" field name (matching Excel headers
# the frontend already knows). Inverse dict built once at module load.
_CSA_SB_TO_API = {
    "employee_id":          "Employee ID",
    "employee_name":        "Employee Name",
    "type":                 "Type",
    "grade":                "Grade",
    "week":                 "Week",
    "csa_start_date":       "CSA Start Date",
    "due_date_excel":       "Due date",
    "op_end_week":          "Operation End (week)",
    "three_days_resign":    "3 Days Resign",
    "remaining_days":       "Remaining days (working days)",
    "non_working_days":     "Non - Working Days",
    "due_date_week":        "Due date (week)",
    "basic_start":          "Basic Start",
    "basic_end":            "Basic End",
    "operation_start":      "Operation Start",
    "operation_end":        "Operation End",
    "resign_date":          "Resign Date",
    "transfers_date":       "Transfers Date",
    "graduate_eff":         "Graduate Eff",
    "on_time":              "On time",
    "actual_status":        "Actual Status",
    "comment":              "Comment",
    "employees_leave":      "Employees Leave",
    "review":               "Review",
    "total_training_days":  "Total Training Days",
}
_CSA_API_TO_SB = {v: k for k, v in _CSA_SB_TO_API.items()}


def _csa_row_to_api(row):
    """Supabase row (snake_case) → API dict (Title Case) expected by frontend."""
    return {
        api: (row.get(sb) if row.get(sb) not in (None, False) else "")
        for sb, api in _CSA_SB_TO_API.items()
    }


def _csa_payload_to_sb(payload):
    """API dict (Title Case from request body) → Supabase snake_case updates."""
    out = {}
    for api_field, val in payload.items():
        sb_col = _CSA_API_TO_SB.get(api_field)
        if sb_col:
            out[sb_col] = val if val not in (None, "", False) else None
    return out


@app.route("/api/<department_key>/employees")
def api_list_employees(department_key):
    _, error = get_department_or_404(department_key)
    if error:
        return error
    holidays = request.args.getlist("holiday")
    try:
        rows = sb_select("csa_employees",
                         filters={"bu": department_key.upper()},
                         order="employee_id.desc")
        enriched = []
        for row in rows:
            emp = _csa_row_to_api(row)
            emp["calculated"] = calculate_status(emp, holidays)
            enriched.append(emp)
        return jsonify({"employees": enriched})
    except Exception as exc:
        app.logger.error("api_list_employees(%s): %s", department_key, exc)
        return jsonify({"error": "Internal server error"}), 500


@app.route("/api/<department_key>/employees/<employee_id>")
def api_get_employee(department_key, employee_id):
    _, error = get_department_or_404(department_key)
    if error:
        return error
    holidays = request.args.getlist("holiday")
    try:
        rows = sb_select("csa_employees",
                         filters={"bu": department_key.upper(),
                                  "employee_id": str(employee_id).strip()})
        if not rows:
            return jsonify({"error": "Employee not found"}), 404
        emp = _csa_row_to_api(rows[0])
        emp["calculated"] = calculate_status(emp, holidays)
        return jsonify(emp)
    except Exception as exc:
        app.logger.error("api_get_employee(%s/%s): %s", department_key, employee_id, exc)
        return jsonify({"error": "Internal server error"}), 500


@app.route("/api/<department_key>/employees", methods=["POST"])
def api_create_employee(department_key):
    deny = require_writable(("csa_user", "admin"))
    if deny:
        return deny
    _, error = get_department_or_404(department_key)
    if error:
        return error

    payload = request.json or {}
    emp_id  = str(payload.get("Employee ID", "")).strip()
    if not emp_id:
        return jsonify({"error": "Employee ID is required"}), 400
    try:
        record = {
            "bu":            department_key.upper(),
            "employee_id":   emp_id,
            "employee_name": payload.get("Employee Name", "") or None,
            "csa_start_date": payload.get("CSA Start Date", "") or None,
            "actual_status": "Under basic",
        }
        result  = sb_insert("csa_employees", record)
        created = _csa_row_to_api(result[0] if result else record)
        return jsonify({"message": "Created", "employee": created})
    except Exception as exc:
        app.logger.error("api_create_employee(%s): %s", department_key, exc)
        return jsonify({"error": "Internal server error"}), 500


@app.route("/api/<department_key>/employees/<employee_id>", methods=["PATCH"])
def api_update_employee(department_key, employee_id):
    deny = require_writable(("csa_user", "admin"))
    if deny:
        return deny
    _, error = get_department_or_404(department_key)
    if error:
        return error

    payload  = request.json or {}
    holidays = payload.pop("_holidays", [])
    updates  = _csa_payload_to_sb(payload)
    if not updates:
        return jsonify({"error": "No recognised fields to update"}), 400
    try:
        result = sb_update("csa_employees",
                           filters={"bu": department_key.upper(),
                                    "employee_id": str(employee_id).strip()},
                           updates=updates)
        if not result:
            return jsonify({"error": "Employee not found"}), 404
        emp = _csa_row_to_api(result[0])
        emp["calculated"] = calculate_status(emp, holidays)
        return jsonify({"message": "Updated", "employee": emp})
    except Exception as exc:
        app.logger.error("api_update_employee(%s/%s): %s", department_key, employee_id, exc)
        return jsonify({"error": "Internal server error"}), 500


# ---------------------------------------------------------------------------
# Jumper Skill data (legacy JSON-files route, frontend no longer calls this)
# ---------------------------------------------------------------------------

JUMPER_DATA_FOLDER = (
    "1. Project/CSA (Center of Skill Acquisition)"
    "/New Operator Monitoring/jumper-data"
)
JUMPER_TRAINER_DEPT = "CSA พัฒนาทักษะ"

_JUMPER_CACHE_TTL = 300


def _mgraph_get(token: str, path: str, **kwargs):
    url = f"https://graph.microsoft.com/v1.0{path}"
    r = _requests.get(
        url,
        headers={"Authorization": f"Bearer {token}"},
        timeout=20,
        **kwargs,
    )
    if not r.ok:
        raise RuntimeError(f"Graph API {r.status_code}: {r.text[:200]}")
    return r


def _fetch_jumper_files_from_onedrive() -> dict:
    token   = _get_manager_access_token()
    encoded = _urllib_parse.quote(JUMPER_DATA_FOLDER, safe="/")
    list_resp = _mgraph_get(
        token,
        f"/me/drive/root:/{encoded}:/children",
        params={"$select": "id,name", "$top": 200},
    )
    files = [
        f for f in list_resp.json().get("value", [])
        if f["name"].startswith("data_") and f["name"].endswith(".json")
    ]
    results: dict = {}
    for f in files:
        try:
            content_resp = _mgraph_get(token, f"/me/drive/items/{f['id']}/content")
            results[f["name"]] = content_resp.json()
        except Exception as exc:
            print(f"[JUMPER] skip {f['name']}: {exc}")
    return results


def _build_jumper_payload(files: dict) -> dict:
    jumper: dict = {}
    all_employees: dict = {}
    sewing_operator: dict = {}
    for filename, content in files.items():
        m = _re.match(r"^data_(.+)_(.+)\.json$", filename)
        if not m:
            continue
        prefix, bu = m.group(1), m.group(2)
        if prefix == "jumper":
            jumper[bu] = content.get("tblEmp", [])
        elif prefix == "allEmployees":
            all_employees[bu] = content.get("tblEmp", [])
        elif prefix == "sewingOperatorSkill":
            sewing_operator[bu] = content.get("employees", [])
    trainer: dict = {}
    employee: dict = {}
    for bu, emps in all_employees.items():
        trainer[bu]  = [e for e in emps if e.get("deptname") == JUMPER_TRAINER_DEPT]
        employee[bu] = [e for e in emps if e.get("deptname") != JUMPER_TRAINER_DEPT]
    return {"jumper": jumper, "trainer": trainer, "employee": employee, "sewingOperator": sewing_operator}


_JUMPER_EXCEL_CACHE: dict = {}
_TRAINER_EXCEL_CACHE: dict = {}


def _read_excel_table(token: str, drive_id: str, item_id: str,
                      table_name: str, cols: list) -> list:
    base     = f"/drives/{drive_id}/items/{item_id}/workbook/tables/{table_name}"
    col_resp = graph_request(token, "GET", f"{base}/columns?$select=name")
    headers  = [c.get("name", "") for c in col_resp.get("value", [])]
    row_resp = graph_request(token, "GET", f"{base}/rows")
    records  = []
    for row in row_resp.get("value", []):
        values = (row.get("values") or [[]])[0]
        by_name = {headers[i]: (values[i] if i < len(values) else "")
                   for i in range(len(headers))}
        obj = {col: by_name.get(col, "") for col in cols}
        records.append(obj)
    return records


def _fetch_jumper_excel_data(token: str) -> tuple:
    share_id = encode_sharing_url(JUMPER_EXCEL_SHARE_URL)
    item = graph_request(
        token, "GET",
        f"/shares/{share_id}/driveItem",
        headers={"Prefer": "redeemSharingLinkIfNecessary"},
    )
    drive_id = item["parentReference"]["driveId"]
    item_id  = item["id"]

    def _read_jumper_bu(bu_tbl):
        bu, table_name = bu_tbl
        try:
            rows = _read_excel_table(token, drive_id, item_id, table_name, JUMPER_EXCEL_COLS)
            for r in rows:
                r["_bu"] = bu
            print(f"[JUMPER-EXCEL] {table_name}: {len(rows)} rows", flush=True)
            return rows
        except Exception as exc:
            print(f"[JUMPER-EXCEL] {table_name} skipped: {exc}", flush=True)
            return []

    jumper_rows = []
    with _ThreadPoolExecutor(max_workers=3) as ex:
        for rows in ex.map(_read_jumper_bu, JUMPER_BU_TABLES.items()):
            jumper_rows.extend(rows)

    sew_rows = []
    try:
        sew_rows = _read_excel_table(token, drive_id, item_id, JUMPER_SEW_TABLE, JUMPER_SEW_COLS)
    except Exception as exc:
        print(f"[JUMPER-EXCEL] SewingOperatorCount skipped: {exc}", flush=True)

    return jumper_rows, sew_rows


def _build_jumper_excel_payload(jumper_rows: list, sew_rows: list) -> dict:
    jumper: dict = {}
    for r in jumper_rows:
        bu     = str(r.get("_bu", "")).strip()
        emp_id = str(r.get("Employee ID", "")).strip()
        if not bu or not emp_id:
            continue
        emp = {
            "empid":           emp_id,
            "firstname":       str(r.get("Employee Name",   "")).strip(),
            "deptname":        str(r.get("Department",      "")).strip(),
            "positionnameeng": str(r.get("Position",        "")).strip(),
            "skill_count":     r.get("Skill Count",    0),
            "expired_count":   r.get("Expired Count",  0),
            "training_status": str(r.get("Training Status", "")).strip().upper(),
        }
        jumper.setdefault(bu, []).append(emp)
    sewing_operator: dict = {}
    for r in sew_rows:
        bu    = str(r.get("BU",    "")).strip()
        total = r.get("Total", 0)
        if not bu:
            continue
        try:
            count = int(float(total))
        except (ValueError, TypeError):
            count = 0
        if count > 0:
            sewing_operator[bu] = [{}] * count
    return {"jumper": jumper, "sewingOperator": sewing_operator}


@app.route("/api/jumper-excel")
def api_jumper_excel():
    global _JUMPER_EXCEL_CACHE
    now = time.time()
    if _JUMPER_EXCEL_CACHE.get("data") and now < _JUMPER_EXCEL_CACHE.get("exp", 0):
        return jsonify(_JUMPER_EXCEL_CACHE["data"])

    kv_payload = kv_get("jumper_excel")
    if kv_payload is not None:
        _JUMPER_EXCEL_CACHE = {"data": kv_payload, "exp": now + _JUMPER_CACHE_TTL}
        return jsonify(kv_payload)

    try:
        token                 = _get_manager_access_token()
        jumper_rows, sew_rows = _fetch_jumper_excel_data(token)
        payload               = _build_jumper_excel_payload(jumper_rows, sew_rows)
        _JUMPER_EXCEL_CACHE   = {"data": payload, "exp": now + _JUMPER_CACHE_TTL}
        kv_set("jumper_excel", payload, ttl_seconds=_JUMPER_CACHE_TTL)
        return jsonify(payload)
    except Exception as exc:
        print(f"[JUMPER-EXCEL] /api/jumper-excel error: {exc}")
        return jsonify({"error": str(exc)}), 500


@app.route("/api/trainer-excel")
def api_trainer_excel():
    global _TRAINER_EXCEL_CACHE
    now = time.time()
    if _TRAINER_EXCEL_CACHE.get("data") and now < _TRAINER_EXCEL_CACHE.get("exp", 0):
        return jsonify(_TRAINER_EXCEL_CACHE["data"])

    kv_payload = kv_get("trainer_excel")
    if kv_payload is not None:
        _TRAINER_EXCEL_CACHE = {"data": kv_payload, "exp": now + _JUMPER_CACHE_TTL}
        return jsonify(kv_payload)

    try:
        token    = _get_manager_access_token()
        share_id = encode_sharing_url(TRAINER_EXCEL_SHARE_URL)
        item = graph_request(
            token, "GET", f"/shares/{share_id}/driveItem",
            headers={"Prefer": "redeemSharingLinkIfNecessary"},
        )
        drive_id = item["parentReference"]["driveId"]
        item_id  = item["id"]

        trainer_list = _read_excel_table(token, drive_id, item_id, TRAINER_LIST_TABLE, TRAINER_LIST_COLS)

        setup_rows = []
        try:
            setup_rows = _read_excel_table(token, drive_id, item_id, TRAINER_SETUP_TABLE, TRAINER_SETUP_COLS)
        except Exception as exc:
            print(f"[TRAINER-EXCEL] BUSetup skipped: {exc}", flush=True)

        top3_rows = []
        try:
            top3_rows = _read_excel_table(token, drive_id, item_id, TRAINER_TOP3_TABLE, TRAINER_TOP3_COLS)
        except Exception as exc:
            print(f"[TRAINER-EXCEL] top_3 skipped: {exc}", flush=True)

        unique_bus = list({str(t.get("BU", "")).strip() for t in trainer_list if t.get("BU", "").strip()})

        def _read_trainer_bu(bu):
            table_name = f"Trainer_{bu}"
            try:
                rows = _read_excel_table(token, drive_id, item_id, table_name, TRAINER_SKILL_COLS)
                for r in rows:
                    r["_bu"] = bu
                print(f"[TRAINER-EXCEL] {table_name}: {len(rows)} rows", flush=True)
                return rows
            except Exception as exc:
                print(f"[TRAINER-EXCEL] {table_name} skipped: {exc}", flush=True)
                return []

        skill_rows = []
        with _ThreadPoolExecutor(max_workers=3) as ex:
            for rows in ex.map(_read_trainer_bu, unique_bus):
                skill_rows.extend(rows)

        trainers = []
        for t in trainer_list:
            emp_id = str(t.get("EMPID", "")).strip()
            if not emp_id:
                continue
            raw_score = t.get("Score", "")
            score_val = None
            if raw_score not in (None, "", "null"):
                s = str(raw_score).strip().replace("%", "")
                try:
                    v = float(s)
                    score_val = round(v * 100, 2) if v <= 1 else round(v, 2)
                except (ValueError, TypeError):
                    score_val = None
            trainers.append({
                "empid":    emp_id,
                "name":     str(t.get("Employee Name", "")).strip(),
                "bu":       str(t.get("BU", "")).strip(),
                "status":   str(t.get("Status", "")).strip(),
                "position": str(t.get("Position", "")).strip(),
                "score":    score_val,
            })

        def _safe_float(v):
            try: return float(v) if v not in (None, "", "null") else 0.0
            except (ValueError, TypeError): return 0.0

        def _safe_int(v):
            try: return int(float(v)) if v not in (None, "", "null") else 0
            except (ValueError, TypeError): return 0

        setup = []
        for s in setup_rows:
            bu = str(s.get("BU", "")).strip()
            pt = str(s.get("Product Type", "")).strip()
            st = str(s.get("Style", "")).strip()
            steps = _safe_int(s.get("Total Steps"))
            if bu and pt and steps > 0:
                setup.append({"bu": bu, "productType": pt, "style": st, "totalSteps": steps})

        top3 = []
        for s in top3_rows:
            bu = str(s.get("BU", "")).strip()
            pt = str(s.get("Product Type", "")).strip()
            st = str(s.get("Style", "")).strip()
            steps = _safe_int(s.get("Total Steps"))
            if bu and pt and steps > 0:
                top3.append({"bu": bu, "productType": pt, "style": st, "totalSteps": steps})

        skills: dict = {}
        for r in skill_rows:
            emp_id = str(r.get("EMPID", "")).strip()
            if not emp_id:
                continue
            record = {
                "empid":       emp_id,
                "bu":          str(r.get("_bu",          "") or "").strip(),
                "processNo":   str(r.get("process_no",   "") or "").strip(),
                "gsdCode":     str(r.get("gsd_code",     "") or "").strip(),
                "processName": str(r.get("process_name", "") or "").strip(),
                "machineType": str(r.get("machinetype",  "") or "").strip(),
                "grade":       str(r.get("grade",        "") or "").strip(),
                "smv":         _safe_float(r.get("smv")),
                "amv":         _safe_float(r.get("amv")),
                "lastUpdate":  str(r.get("last_update",  "") or "").strip(),
                "leadTime":    _safe_float(r.get("lead_time")),
                "csaApprove":  str(r.get("csa_approve",  "") or "").strip(),
                "expired":     _safe_int(r.get("expired")),
                "eff":         _safe_float(r.get("eff")),
                "productType": str(r.get("PRODUCT_TYPE", "") or "").strip(),
                "style":       str(r.get("STYLE",        "") or "").strip(),
                "totalCount":  _safe_int(r.get("total_count")),
            }
            skills.setdefault(emp_id, []).append(record)

        payload = {"trainers": trainers, "setup": setup, "top3": top3, "skills": skills}
        _TRAINER_EXCEL_CACHE = {"data": payload, "exp": now + _JUMPER_CACHE_TTL}
        kv_set("trainer_excel", payload, ttl_seconds=_JUMPER_CACHE_TTL)
        return jsonify(payload)
    except Exception as exc:
        print(f"[TRAINER-EXCEL] error: {exc}")
        return jsonify({"error": str(exc)}), 500


# ---------------------------------------------------------------------------
# GICA Assessment
# ---------------------------------------------------------------------------

# GICA data lives in Supabase — no in-process cache needed


def _gica_to_iso(v) -> str:
    if v in (None, "", "null"):
        return None
    if isinstance(v, str):
        s = v.strip()
        return s[:10] if len(s) >= 10 and s[4:5] == "-" else (s or None)
    try:
        d = _datetime(1899, 12, 30) + timedelta(days=float(v))
        return d.strftime("%Y-%m-%d")
    except (ValueError, TypeError):
        return None


def _gica_num(v):
    try: return float(v) if v not in (None, "", "null") else None
    except (ValueError, TypeError): return None


def _gica_rank(grade) -> int:
    return GICA_GRADE_ORDER.get(str(grade or "").strip().upper(), 0)


def _gica_avg(a, b):
    nums = [x for x in (_gica_num(a), _gica_num(b)) if x is not None]
    return round(sum(nums) / len(nums), 4) if nums else None


def _gica_parse_date(s):
    if not s:
        return None
    try: return _datetime.strptime(s[:10], "%Y-%m-%d").date()
    except (ValueError, TypeError): return None


def _gica_add_months(d, months):
    if not months or not d:
        return d
    from calendar import monthrange
    total = d.month - 1 + int(months)
    year_adj, month_idx = divmod(total, 12)
    new_year  = d.year + year_adj
    new_month = month_idx + 1
    new_day   = min(d.day, monthrange(new_year, new_month)[1])
    return d.replace(year=new_year, month=new_month, day=new_day)


def _gica_attempt_passed(g1, g2, exp1, exp2):
    if not (exp1 and exp2 and g1 and g2):
        return None
    return (_gica_rank(g1) >= _gica_rank(exp1) and _gica_rank(g2) >= _gica_rank(exp2))


def _build_gica_freq_lookup(freq_rows: list) -> dict:
    lookup = {}
    for r in freq_rows:
        key = (
            str(r.get("department", "") or "").strip().lower(),
            str(r.get("level", "") or "").strip().lower(),
            str(r.get("role", "") or "").strip().lower(),
        )
        try: freq_months = int(float(r.get("freq_months")))
        except (ValueError, TypeError): freq_months = None
        lookup[key] = {
            "exp1": str(r.get("expectation1", "") or "").strip().upper(),
            "exp2": str(r.get("expectation2", "") or "").strip().upper(),
            "freqMonths": freq_months,
        }
    return lookup


def _fetch_gica_supabase_data() -> tuple:
    """Read all GICA data from Supabase in parallel.
    Returns (emp_rows, freq_rows, kpi_by_bu) matching the shape _build_gica_payload expects."""
    with _ThreadPoolExecutor(max_workers=3) as ex:
        fut_emp  = ex.submit(sb_select, "gica_employees", order="bu.asc,empid.asc")
        fut_freq = ex.submit(sb_select, "gica_freq")
        fut_kpi  = ex.submit(sb_select, "gica_kpi")
        emp_rows  = fut_emp.result()
        freq_rows = fut_freq.result()
        kpi_rows  = fut_kpi.result()

    # Convert [{bu, level, target}] → {bu: {level: target}} expected by _build_gica_payload
    kpi_by_bu: dict = {}
    for row in kpi_rows:
        bu    = str(row.get("bu", "") or "").strip()
        level = str(row.get("level", "") or "").strip()
        if not bu or not level:
            continue
        if bu not in kpi_by_bu:
            kpi_by_bu[bu] = {}
        try:
            kpi_by_bu[bu][level] = float(row.get("target"))
        except (TypeError, ValueError):
            pass

    return emp_rows, freq_rows, kpi_by_bu


def _build_gica_payload(rows: list, freq_rows: list = None, kpi_by_bu: dict = None) -> dict:
    """Build frontend-ready payload from Supabase rows.
    rows: gica_employees rows — each has tests JSONB array [{n,result1,result2,grade1,grade2,date}]
    freq_rows: gica_freq rows — columns match Supabase snake_case
    kpi_by_bu: {bu: {level: target}} already converted by _fetch_gica_supabase_data"""
    freq_lookup = _build_gica_freq_lookup(freq_rows or [])
    today = _datetime.now().date()
    employees = []

    for r in rows:
        tests_raw = sorted(r.get("tests") or [], key=lambda t: t.get("n", 0))

        dept  = str(r.get("deptname", "") or "").strip()
        level = str(r.get("level", "") or "").strip()
        pos   = str(r.get("position", "") or "").strip()
        crit  = freq_lookup.get((dept.lower(), level.lower(), pos.lower()))
        exp1  = crit["exp1"] if crit else ""
        exp2  = crit["exp2"] if crit else ""
        freq_months = crit["freqMonths"] if crit else None

        start_date_iso = r.get("start_date") or ""
        start_date     = _gica_parse_date(start_date_iso)
        is_new_emp     = ((today - start_date).days < 90) if start_date else False

        if not tests_raw and not start_date:
            continue

        history = []
        prev_actual = None
        prev_passed = None
        for t in tests_raw:
            r1 = t.get("result1")
            r2 = t.get("result2")
            g1 = str(t.get("grade1", "") or "").strip().upper()
            g2 = str(t.get("grade2", "") or "").strip().upper()
            worse = min([g for g in (g1, g2) if g] or [""],
                        key=lambda g: _gica_rank(g)) if (g1 or g2) else ""
            actual_iso  = t.get("date") or ""
            actual_date = _gica_parse_date(actual_iso)
            n = t.get("n", len(history) + 1)

            if n == 1:
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
                "n":      n,
                "score":  _gica_avg(r1, r2),
                "score1": _gica_num(r1),
                "score2": _gica_num(r2),
                "grade":  worse,
                "grade1": g1,
                "grade2": g2,
                "date":   actual_iso,
                "scheduledDate": sched.strftime("%Y-%m-%d") if sched else None,
                "onTime": on_time,
            })
            prev_actual = actual_date
            prev_passed = _gica_attempt_passed(g1, g2, exp1, exp2)

        cur = history[-1] if history else None
        if cur:
            g1, g2 = cur["grade1"], cur["grade2"]
            passed = _gica_attempt_passed(g1, g2, exp1, exp2)
        else:
            g1 = g2 = ""
            passed = None

        if not history:
            scheduled_next = _gica_add_months(start_date, 1) if start_date else None
            next_type = "Initial"
        elif prev_actual is None:
            scheduled_next = None
            next_type = "Review" if passed else "Retest"
        elif passed is False:
            scheduled_next = prev_actual + timedelta(days=7)
            next_type = "Retest"
        elif passed is True and freq_months:
            scheduled_next = _gica_add_months(prev_actual, freq_months)
            next_type = "Review"
        else:
            scheduled_next = None
            next_type = "Review" if passed else "Retest"

        if scheduled_next:
            days_overdue = -(scheduled_next - today).days
            sched_status = "overdue" if days_overdue > 0 else ("due_soon" if days_overdue >= -7 else "upcoming")
        else:
            days_overdue = None
            sched_status = "unknown"

        employees.append({
            "bu":         str(r.get("bu", "") or "").strip(),
            "empid":      str(r.get("empid", "") or "").strip(),
            "name":       str(r.get("name", "") or "").strip(),
            "deptname":   dept,
            "level":      level,
            "position":   pos,
            "attempt":    len(history),
            "score":      cur["score"] if cur else None,
            "grade":      cur["grade"] if cur else "",
            "score1":     cur["score1"] if cur else None,
            "score2":     cur["score2"] if cur else None,
            "grade1":     g1,
            "grade2":     g2,
            "exp1":       exp1,
            "exp2":       exp2,
            "passed":     passed,
            "freqMonths": freq_months,
            "lastDate":   cur["date"] if cur else None,
            "nextDate":   scheduled_next.strftime("%Y-%m-%d") if scheduled_next else None,
            "nextType":   next_type,
            "history":    history,
            "startDate":     start_date_iso,
            "isNewEmp":      is_new_emp,
            "scheduledNext": scheduled_next.strftime("%Y-%m-%d") if scheduled_next else None,
            "daysOverdue":   days_overdue,
            "schedStatus":   sched_status,
        })

    bus = sorted({e["bu"] for e in employees if e["bu"]})

    freq_table = []
    for r in (freq_rows or []):
        dept  = str(r.get("department", "") or "").strip()
        level = str(r.get("level", "") or "").strip()
        role  = str(r.get("role", "") or "").strip()
        if not (dept or level or role):
            continue
        try: fm = int(float(r.get("freq_months")))
        except (ValueError, TypeError): fm = None
        freq_table.append({
            "department":   dept,
            "level":        level,
            "role":         role,
            "freqMonths":   fm,
            "expectation1": str(r.get("expectation1", "") or "").strip().upper(),
            "expectation2": str(r.get("expectation2", "") or "").strip().upper(),
        })

    return {
        "employees":   employees,
        "bus":         bus,
        "freqTable":   freq_table,
        "kpiDefaults": kpi_by_bu or {},
    }


@app.route("/api/gica-excel")
def api_gica_excel():
    try:
        rows, freq_rows, kpi_by_bu = _fetch_gica_supabase_data()
        return jsonify(_build_gica_payload(rows, freq_rows, kpi_by_bu))
    except Exception as exc:
        app.logger.error("[GICA] /api/gica-excel error: %s", exc)
        return jsonify({"error": "Internal server error"}), 500


@app.route("/api/gica/<bu>/employees", methods=["POST"])
def api_gica_create_employee(bu):
    deny = require_writable(("qe_edit", "admin"))
    if deny: return deny

    bu      = str(bu or "").strip().upper()
    payload = request.json or {}
    empid   = str(payload.get("empid", "")).strip()
    if not empid or not empid.isdigit():
        return jsonify({"error": "Employee ID ต้องเป็นตัวเลข"}), 400
    name = str(payload.get("name", "")).strip()
    if not name:
        return jsonify({"error": "Employee Name is required"}), 400

    record = {
        "bu":         bu,
        "empid":      empid,
        "name":       name,
        "deptname":   str(payload.get("deptname", "")).strip() or None,
        "level":      str(payload.get("level", "")).strip() or None,
        "position":   str(payload.get("position", "")).strip() or None,
        "start_date": str(payload.get("start_date", "")).strip() or None,
        "tests":      [],
    }
    try:
        existing = sb_select("gica_employees", filters={"bu": bu, "empid": empid})
        if existing:
            return jsonify({"error": f"Employee {empid} ใน BU {bu} มีอยู่แล้ว"}), 409
        sb_insert("gica_employees", record)
        return jsonify({"message": "Created", "employee": record})
    except Exception as exc:
        app.logger.error("api_gica_create_employee(%s/%s): %s", bu, empid, exc)
        return jsonify({"error": "Internal server error"}), 500


@app.route("/api/gica/<bu>/employees/<empid>/result", methods=["PATCH"])
def api_gica_add_result(bu, empid):
    deny = require_writable(("qe_edit", "admin"))
    if deny: return deny

    bu      = str(bu or "").strip().upper()
    payload = request.json or {}
    try:
        meas_pct = float(payload.get("measurementResult"))
        insp_pct = float(payload.get("inspectionResult"))
    except (TypeError, ValueError):
        return jsonify({"error": "Measurement/Inspection Result ต้องเป็นตัวเลข"}), 400
    assess_date = str(payload.get("assessmentDate", "")).strip()
    if not assess_date:
        return jsonify({"error": "Assessment Date is required"}), 400

    try:
        rows = sb_select("gica_employees", filters={"bu": bu, "empid": empid})
        if not rows:
            return jsonify({"error": "Employee not found"}), 404
        row   = rows[0]
        tests = list(row.get("tests") or [])
        if len(tests) >= GICA_MAX_TESTS:
            return jsonify({"error": f"{empid} ทำครบ {GICA_MAX_TESTS} ครั้งแล้ว"}), 400

        def _grade(score):
            if score >= 0.85: return "A"
            if score >= 0.65: return "B"
            if score >= 0.50: return "C"
            return "D"

        meas = meas_pct / 100
        insp = insp_pct / 100
        tests.append({
            "n":       len(tests) + 1,
            "result1": round(meas, 6),
            "result2": round(insp, 6),
            "grade1":  _grade(meas),
            "grade2":  _grade(insp),
            "date":    assess_date,
        })
        sb_update("gica_employees", {"bu": bu, "empid": empid}, {"tests": tests})
        return jsonify({"message": "Saved"})
    except Exception as exc:
        app.logger.error("api_gica_add_result(%s/%s): %s", bu, empid, exc)
        return jsonify({"error": "Internal server error"}), 500


@app.route("/api/gica/<bu>/employees/<empid>/results", methods=["DELETE"])
def api_gica_delete_results(bu, empid):
    """Delete selected assessment attempts (or all) for one employee. Admin only.
    Body: {"attempts": [n, ...]} to remove specific attempts, or {"all": true} to
    clear every score. The employee row itself is kept — clearing scores just resets
    them to a fresh 'needs Initial assessment' state."""
    deny = require_writable(("admin",))
    if deny: return deny

    bu    = str(bu or "").strip().upper()
    empid = str(empid or "").strip()
    if not bu or not empid:
        return jsonify({"error": "bu and empid are required"}), 400

    payload    = request.json or {}
    delete_all = bool(payload.get("all"))
    try:
        attempts = {int(n) for n in (payload.get("attempts") or [])}
    except (TypeError, ValueError):
        return jsonify({"error": "attempts must be a list of numbers"}), 400
    if not delete_all and not attempts:
        return jsonify({"error": "Nothing to delete"}), 400

    try:
        rows = sb_select("gica_employees", filters={"bu": bu, "empid": empid})
        if not rows:
            return jsonify({"error": "Employee not found"}), 404
        tests = list(rows[0].get("tests") or [])

        kept = [] if delete_all else [t for t in tests if int(t.get("n", 0)) not in attempts]

        # Renumber remaining attempts contiguously (1..k) in original order — the
        # read-time scheduler keys the first attempt on n==1, so a gap would shift
        # scheduling. Sort by the old n to preserve chronological attempt order.
        kept.sort(key=lambda t: int(t.get("n", 0)))
        for i, t in enumerate(kept, start=1):
            t["n"] = i

        sb_update("gica_employees", {"bu": bu, "empid": empid}, {"tests": kept})
        return jsonify({"message": "Deleted", "remaining": len(kept)})
    except Exception as exc:
        app.logger.error("api_gica_delete_results(%s/%s): %s", bu, empid, exc)
        return jsonify({"error": "Internal server error"}), 500


@app.route("/api/gica/<bu>/employees/<empid>", methods=["DELETE"])
def api_gica_delete_employee(bu, empid):
    deny = require_writable(("admin",))
    if deny: return deny

    bu    = str(bu or "").strip().upper()
    empid = str(empid or "").strip()
    if not bu or not empid:
        return jsonify({"error": "bu and empid are required"}), 400

    try:
        rows = sb_select("gica_employees", filters={"bu": bu, "empid": empid})
        if not rows:
            return jsonify({"error": "Employee not found"}), 404
        sb_delete("gica_employees", {"bu": bu, "empid": empid})
        return jsonify({"message": "Deleted"})
    except Exception as exc:
        app.logger.error("api_gica_delete_employee(%s/%s): %s", bu, empid, exc)
        return jsonify({"error": "Internal server error"}), 500


# ---------------------------------------------------------------------------
# Audit Module — Phase 1: Supabase backend
# (Replaces Excel + translation layer. Response shape preserved for frontend.)
# ---------------------------------------------------------------------------

_AUDIT_CACHE: dict = {}


def _iso_str(v) -> str | None:
    """Coerce any date/timestamp value to 'YYYY-MM-DD' string or None."""
    if not v:
        return None
    s = str(v)
    return s[:10] if len(s) >= 10 else s


def _audit_supabase_payload() -> dict:
    """Fetch Audit data from Supabase and return the frontend-compatible shape:
    {templates: [...], plans: [...], executions: [...], findings: [...]}
    Templates: one dict per checklist item (flattened from items JSONB).
    Plans: one dict per Plan row (execution JSONB excluded — becomes executions list).
    Executions: one dict per execution item, ActualResult computed dynamically.
    Findings: one dict per Finding row."""
    with _ThreadPoolExecutor(max_workers=3) as ex:
        fut_tpl      = ex.submit(sb_select, "audit_templates", order="created_at.asc")
        fut_plans    = ex.submit(sb_select, "audit_plans",     order="plan_id.asc")
        fut_findings = ex.submit(sb_select, "audit_findings",  order="opened_at.asc")
        raw_templates = fut_tpl.result()
        raw_plans     = fut_plans.result()
        raw_findings  = fut_findings.result()

    # Build approved set for ActualResult: (plan_id, item_no) that are Approved
    approved_set = {
        (f["plan_id"], f["item_no"])
        for f in raw_findings
        if f.get("status") == "Approved" and f.get("item_no") is not None
    }

    # Flatten templates: one row per item in JSONB items array
    templates = []
    for t in raw_templates:
        items = t.get("items") or []
        for item in items:
            templates.append({
                "Code":         t["code"],
                "Version":      t["version"],
                "Category":     t["category"],
                "TemplateName": t.get("template_name", ""),
                "Active":       t.get("active", True),
                "ItemNo":       item.get("item_no"),
                "ItemText":     item.get("item_text", ""),
                "Section":      item.get("section", ""),
                "CreatedBy":    t.get("created_by", ""),
                "CreatedAt":    _iso_str(t.get("created_at")),
            })

    plans = []
    executions = []
    for p in raw_plans:
        plan_id = p["plan_id"]
        plans.append({
            "PlanID":        plan_id,
            "BU":            p.get("bu", ""),
            "Department":    p.get("department", ""),
            "FormVersion":   p.get("form_version"),
            "AuditTitle":    p.get("audit_title", ""),
            "ScheduledDate": _iso_str(p.get("scheduled_date")),
            "Auditor1":      p.get("auditor1", ""),
            "Auditor2":      p.get("auditor2", ""),
            "Auditor3":      p.get("auditor3", ""),
            "Status":        p.get("status", "Planned"),
            "CreatedBy":     p.get("created_by", ""),
        })
        for exec_item in (p.get("execution") or []):
            item_no = exec_item.get("item_no")
            score   = str(exec_item.get("score", "")).strip()
            exec_id = f"{plan_id}_{item_no}"
            actual  = "Conformity" if (plan_id, item_no) in approved_set else score
            executions.append({
                "ExecutionID":  exec_id,
                "PlanID":       plan_id,
                "ItemNo":       item_no,
                "Score":        score,
                "ActualResult": actual,
                "Comment":      exec_item.get("comment", ""),
                "ExecutedBy":   exec_item.get("executed_by", ""),
            })

    findings = []
    for f in raw_findings:
        plan_id = f.get("plan_id", "")
        item_no = f.get("item_no")
        findings.append({
            "FindingID":         str(f["id"]),
            "PlanID":            plan_id,
            "ExecutionID":       f"{plan_id}_{item_no}" if item_no is not None else None,
            "BU":                f.get("bu", ""),
            "Severity":          f.get("severity", ""),
            "Description":       f.get("description", ""),
            "RootCause":         f.get("root_cause", ""),
            "CorrectiveAction":  f.get("corrective_action", ""),
            "PreventiveAction":  f.get("preventive_action", ""),
            "ResponsiblePerson": f.get("responsible_person", ""),
            "DueDate":           _iso_str(f.get("due_date")),
            "Status":            f.get("status", "Open"),
            "OpenedBy":          f.get("opened_by", ""),
            "OpenedAt":          _iso_str(f.get("opened_at")),
            "RespondedBy":       f.get("responded_by", ""),
            "RespondedAt":       _iso_str(f.get("responded_at")),
            "ApprovedBy":        f.get("approved_by", ""),
            "ApprovedAt":        _iso_str(f.get("approved_at")),
            "ApproverComment":   f.get("approver_comment", ""),
        })

    return {"templates": templates, "plans": plans, "executions": executions, "findings": findings}


_AUDIT_CACHE_TTL = 60


def _audit_invalidate_cache():
    global _AUDIT_CACHE
    _AUDIT_CACHE = {}


def _audit_actor_name() -> str:
    return _get_request_actor()


def _audit_next_plan_id() -> str:
    """YYYY-MM-NNNN monthly running number, resets each calendar month.
    Filters by current month prefix to avoid full table scan."""
    from supabase_client import SUPABASE_URL, SUPABASE_SERVICE_KEY
    prefix = _datetime.utcnow().strftime("%Y-%m")
    url = f"{SUPABASE_URL}/rest/v1/audit_plans"
    params = {"select": "plan_id", "plan_id": f"like.{prefix}-%"}
    try:
        r = _requests.get(url, headers={
            "apikey": SUPABASE_SERVICE_KEY,
            "Authorization": f"Bearer {SUPABASE_SERVICE_KEY}",
        }, params=params, timeout=10)
        rows = r.json() if r.ok else []
    except Exception:
        rows = []
    max_seq = 0
    for p in rows:
        pid = str(p.get("plan_id", "")).strip()
        if pid.startswith(prefix + "-"):
            try: max_seq = max(max_seq, int(pid.rsplit("-", 1)[-1]))
            except ValueError: pass
    return f"{prefix}-{max_seq + 1:04d}"


def _auto_create_findings_for_plan(plan_id: str, nc_items: list, actor: str):
    """Insert Finding rows for NC execution items. Idempotent — skips item_nos
    that already have a Finding for this plan."""
    plans = sb_select("audit_plans", filters={"plan_id": plan_id})
    if not plans:
        return
    plan = plans[0]

    # Build item_no → item_text from the active form version
    item_text_map: dict = {}
    templates = sb_select("audit_templates", filters={
        "code":    plan.get("form_code", ""),
        "version": plan.get("form_version", 0),
    })
    if templates:
        for item in (templates[0].get("items") or []):
            item_text_map[item["item_no"]] = item.get("item_text", "")

    # Existing findings for this plan (dedup guard)
    existing = sb_select("audit_findings", filters={"plan_id": plan_id})
    existing_item_nos = {f["item_no"] for f in existing if f.get("item_no") is not None}

    now_iso = _datetime.utcnow().date().isoformat()
    bu = plan.get("bu", "")
    # Collect all new findings first, then insert each (sb_insert is single-record)
    new_findings = []
    for exec_item in nc_items:
        item_no = exec_item.get("item_no")
        if item_no in existing_item_nos:
            continue
        score    = str(exec_item.get("score", "")).strip()
        severity = AUDIT_RATING_TO_SEVERITY.get(score, "Minor")
        new_findings.append({
            "plan_id":     plan_id,
            "bu":          bu,
            "item_no":     item_no,
            "severity":    severity,
            "description": item_text_map.get(item_no, f"Item No. {item_no}"),
            "status":      "Open",
            "opened_by":   actor,
            "opened_at":   now_iso,
        })
        existing_item_nos.add(item_no)
    for finding in new_findings:
        sb_insert("audit_findings", finding)


def _audit_all_findings_approved(plan_id: str) -> bool:
    findings = sb_select("audit_findings", filters={"plan_id": plan_id})
    if not findings:
        return False
    return all(f.get("status") == "Approved" for f in findings)


@app.route("/api/audit-excel")
def api_audit_excel():
    """Return Audit data from Supabase (shape matches old Excel endpoint for frontend compat).
    L1 in-process cache only (60s TTL) — Supabase is fast enough, no KV needed."""
    global _AUDIT_CACHE
    now = time.time()
    if _AUDIT_CACHE.get("data") and now < _AUDIT_CACHE.get("exp", 0):
        return jsonify(_AUDIT_CACHE["data"])

    try:
        payload = _audit_supabase_payload()
        _AUDIT_CACHE = {"data": payload, "exp": now + _AUDIT_CACHE_TTL}
        return jsonify(payload)
    except Exception as exc:
        app.logger.error("[AUDIT] /api/audit-excel error: %s", exc)
        return jsonify({"error": "Internal server error"}), 500


# ── Audit writes ──────────────────────────────────────────────────────────────

@app.route("/api/audit/templates/forms", methods=["POST"])
def api_audit_create_template_form():
    """Create or version-up a Form. If Code already exists, deactivates old version
    and inserts new one with Version = max + 1."""
    deny = require_writable(("qe_audit", "admin"))
    if deny: return deny

    payload       = request.json or {}
    template_name = str(payload.get("TemplateName", "")).strip()
    category      = str(payload.get("Category", "")).strip()
    code          = str(payload.get("Code", "")).strip()
    items         = [it for it in (payload.get("items") or []) if str(it.get("ItemText", "")).strip()]
    if not template_name: return jsonify({"error": "Template Name is required"}), 400
    if not category:      return jsonify({"error": "Category is required"}), 400
    if not code:          return jsonify({"error": "Code is required"}), 400
    if not items:         return jsonify({"error": "At least 1 checklist item is required"}), 400

    try:
        # Determine version: max existing + 1, and deactivate old rows
        existing = sb_select("audit_templates", filters={"code": code})
        version  = 1
        if existing:
            versions = [r.get("version", 0) for r in existing]
            version  = max(versions) + 1
            for old in existing:
                if old.get("active"):
                    sb_update("audit_templates", {"id": str(old["id"])}, {"active": False})

        items_arr = [
            {
                "item_no":   idx,
                "item_text": str(it.get("ItemText", "")).strip(),
                "section":   str(it.get("Section", "")).strip(),
            }
            for idx, it in enumerate(items, start=1)
            if str(it.get("ItemText", "")).strip()
        ]

        actor   = _audit_actor_name()
        created = sb_insert("audit_templates", {
            "code":          code,
            "version":       version,
            "category":      category,
            "template_name": template_name,
            "active":        True,
            "created_by":    actor,
            "items":         items_arr,
        })

        _audit_invalidate_cache()
        return jsonify({"message": "Created", "template": created[0] if created else {}})
    except Exception as exc:
        app.logger.error("api_audit_create_template_form: %s", exc)
        return jsonify({"error": "Internal server error"}), 500


@app.route("/api/audit/plans", methods=["POST"])
def api_audit_create_plan():
    deny = require_writable(("qe_audit", "admin"))
    if deny: return deny

    payload = request.json or {}
    bu      = str(payload.get("BU", "")).strip().upper()
    if bu not in DEPARTMENTS:
        return jsonify({"error": "Invalid BU"}), 400
    title = str(payload.get("AuditTitle", "")).strip()
    if not title:
        return jsonify({"error": "AuditTitle is required"}), 400

    # Resolve form_code + form_version from audit_title (Category match)
    form_code    = str(payload.get("FormCode", "")).strip()
    form_version = payload.get("FormVersion")
    if form_code and form_version:
        try: form_version = int(form_version)
        except (TypeError, ValueError): form_version = None

    try:
        actor = _audit_actor_name()
        record_base = {
            "bu":            bu,
            "department":    str(payload.get("Department", "")).strip(),
            "form_code":     form_code,
            "form_version":  form_version,
            "audit_title":   title,
            "scheduled_date": str(payload.get("ScheduledDate", "")).strip() or None,
            "auditor1":      str(payload.get("Auditor1", "")).strip(),
            "auditor2":      str(payload.get("Auditor2", "")).strip(),
            "auditor3":      str(payload.get("Auditor3", "")).strip(),
            "status":        "Planned",
            "created_by":    actor,
        }
        created = None
        plan_id = None
        for _attempt in range(3):
            plan_id = _audit_next_plan_id()
            try:
                record = {"plan_id": plan_id, **record_base}
                created = sb_insert("audit_plans", record)
                break
            except SupabaseError as e:
                if "unique" in str(e).lower() or "duplicate" in str(e).lower():
                    continue
                raise
        if created is None:
            return jsonify({"error": "Could not generate a unique Plan ID — please retry"}), 500
        _audit_invalidate_cache()
        plan_resp = {
            "PlanID":        plan_id,
            "BU":            bu,
            "Department":    record["department"],
            "FormVersion":   form_version,
            "AuditTitle":    title,
            "ScheduledDate": record["scheduled_date"],
            "Auditor1":      record["auditor1"],
            "Auditor2":      record["auditor2"],
            "Auditor3":      record["auditor3"],
            "Status":        "Planned",
            "CreatedBy":     record["created_by"],
        }
        return jsonify({"message": "Created", "plan": plan_resp})
    except Exception as exc:
        app.logger.error("api_audit_create_plan: %s", exc)
        return jsonify({"error": "Internal server error"}), 500


@app.route("/api/audit/plans/<plan_id>", methods=["PATCH"])
def api_audit_update_plan(plan_id):
    deny = require_writable(("qe_audit", "admin"))
    if deny: return deny

    payload = request.json or {}
    allowed = {"BU", "Department", "FormVersion", "AuditTitle", "ScheduledDate",
               "Auditor1", "Auditor2", "Auditor3", "Status"}
    patch_api = {k: payload[k] for k in allowed if k in payload}

    # Map API field names → Supabase column names
    _field_map = {
        "BU": "bu", "Department": "department", "FormVersion": "form_version",
        "AuditTitle": "audit_title", "ScheduledDate": "scheduled_date",
        "Auditor1": "auditor1", "Auditor2": "auditor2", "Auditor3": "auditor3",
        "Status": "status",
    }
    patch_db = {_field_map[k]: v for k, v in patch_api.items() if k in _field_map}
    if not patch_db:
        return jsonify({"error": "No valid fields to update"}), 400

    try:
        # Fetch current plan to validate status transition
        current_plans = sb_select("audit_plans", filters={"plan_id": plan_id}, columns="status")
        if not current_plans:
            return jsonify({"error": "Plan not found"}), 404
        current_status = current_plans[0].get("status", "")
        if current_status in ("Completed", "Cancelled"):
            return jsonify({"error": f"Cannot modify a plan in {current_status} status"}), 400
        # Only allow cancellation from Planned or Issued
        new_status = patch_db.get("status")
        if new_status == "Cancelled" and current_status not in ("Planned", "Issued"):
            return jsonify({"error": f"Cannot cancel a plan in {current_status} status"}), 400

        sb_update("audit_plans", {"plan_id": plan_id}, patch_db)
        _audit_invalidate_cache()
        return jsonify({"message": "Saved", "planId": plan_id, "patch": patch_api})
    except SupabaseError as exc:
        app.logger.error("api_audit_update_plan(%s): %s", plan_id, exc)
        return jsonify({"error": "Internal server error"}), 500
    except Exception as exc:
        app.logger.error("api_audit_update_plan(%s): %s", plan_id, exc)
        return jsonify({"error": "Internal server error"}), 500


@app.route("/api/audit/executions", methods=["POST"])
def api_audit_create_execution():
    """Write the full scored checklist for one Plan (replaces plan.execution JSONB).
    Accepts a single item or an array."""
    deny = require_writable(("qe_audit", "admin"))
    if deny: return deny

    raw   = request.json or {}
    items = raw if isinstance(raw, list) else [raw]
    if not items:
        return jsonify({"error": "No execution rows provided"}), 400

    plan_id = items[0].get("PlanID")
    if not plan_id:
        return jsonify({"error": "PlanID is required"}), 400

    actor = _audit_actor_name()
    exec_array = []
    for item in items:
        item_no = item.get("ItemNo")
        if not item_no:
            return jsonify({"error": "ItemNo is required"}), 400
        exec_array.append({
            "item_no":     item_no,
            "score":       str(item.get("Score", "")).strip(),
            "comment":     str(item.get("Comment", "")).strip(),
            "executed_by": actor,
        })

    has_nc = any(
        ei["score"] in ("Major Non-Conformity", "Minor Non-Conformity")
        for ei in exec_array
    )
    new_status = "Issued" if has_nc else "Completed"

    try:
        sb_update("audit_plans", {"plan_id": plan_id}, {
            "execution": exec_array,
            "status":    new_status,
        })

        if has_nc:
            nc_items = [i for i in exec_array if i["score"] in AUDIT_RATING_TO_SEVERITY]
            _auto_create_findings_for_plan(plan_id, nc_items, actor)

        _audit_invalidate_cache()

        executions_resp = [{
            "ExecutionID":  f"{plan_id}_{ei['item_no']}",
            "PlanID":       plan_id,
            "ItemNo":       ei["item_no"],
            "Score":        ei["score"],
            "ActualResult": ei["score"],
            "Comment":      ei["comment"],
            "ExecutedBy":   ei["executed_by"],
        } for ei in exec_array]

        return jsonify({
            "message":    "Created",
            "executions": executions_resp,
            "planStatus": new_status,
        })
    except Exception as exc:
        app.logger.error("api_audit_create_execution(%s): %s", plan_id, exc)
        return jsonify({"error": "Internal server error"}), 500


@app.route("/api/audit/plans/<plan_id>/respond", methods=["POST"])
def api_audit_plan_respond(plan_id):
    """Bulk respond: Auditee submits responses for all Open findings of a Plan.
    qe_auditee is allowed here (the only Audit write route they can use)."""
    deny = require_writable(("qe_audit", "qe_auditee", "admin"))
    if deny: return deny

    items = request.json
    if not isinstance(items, list) or not items:
        return jsonify({"error": "Expected a non-empty array of finding responses"}), 400

    now_iso = _datetime.utcnow().isoformat()
    actor   = _audit_actor_name()
    try:
        updated_findings = []
        for item in items:
            finding_id = item.get("findingId")
            root_cause = str(item.get("rootCause", "")).strip()
            corrective = str(item.get("correctiveAction", "")).strip()
            if not finding_id or not root_cause or not corrective:
                return jsonify({"error": "findingId, rootCause, correctiveAction required per finding"}), 400
            # IDOR guard: verify finding belongs to this plan
            finding_rows = sb_select("audit_findings", filters={"id": finding_id}, columns="plan_id,status")
            if not finding_rows:
                return jsonify({"error": f"Finding {finding_id} not found"}), 404
            if str(finding_rows[0].get("plan_id", "")) != str(plan_id):
                return jsonify({"error": f"Finding {finding_id} does not belong to plan {plan_id}"}), 403
            sb_update("audit_findings", {"id": finding_id}, {
                "root_cause":          root_cause,
                "corrective_action":   corrective,
                "preventive_action":   str(item.get("preventiveAction", "")).strip(),
                "responsible_person":  str(item.get("responsiblePerson", "")).strip(),
                "due_date":            str(item.get("dueDate", "")).strip() or None,
                "status":              "Responded",
                "responded_by":        actor,
                "responded_at":        now_iso,
            })
            updated_findings.append({"FindingID": finding_id, "Status": "Responded"})

        if not updated_findings:
            return jsonify({"error": "No findings to respond to"}), 400

        sb_update("audit_plans", {"plan_id": plan_id}, {"status": "Pending Approval"})
        _audit_invalidate_cache()
        return jsonify({
            "message":    "Responded",
            "findings":   updated_findings,
            "planStatus": "Pending Approval",
        })
    except SupabaseError as exc:
        app.logger.error("api_audit_plan_respond(%s): %s", plan_id, exc)
        return jsonify({"error": "Internal server error"}), 500
    except Exception as exc:
        app.logger.error("api_audit_plan_respond(%s): %s", plan_id, exc)
        return jsonify({"error": "Internal server error"}), 500


@app.route("/api/audit/findings/<finding_id>/approve", methods=["PATCH"])
def api_audit_finding_approve(finding_id):
    """Auditor approves one Finding. Auto-completes the Plan when all findings approved."""
    deny = require_writable(("qe_audit", "admin"))
    if deny: return deny

    payload = request.json or {}
    now_iso = _datetime.utcnow().isoformat()
    actor   = _audit_actor_name()

    try:
        rows = sb_select("audit_findings", filters={"id": finding_id})
        if not rows:
            return jsonify({"error": "Finding not found"}), 404
        finding = rows[0]
        if finding.get("status") != "Responded":
            return jsonify({"error": f"Cannot approve — status is '{finding.get('status')}', expected 'Responded'"}), 409

        sb_update("audit_findings", {"id": finding_id}, {
            "status":           "Approved",
            "approved_by":      actor,
            "approved_at":      now_iso,
            "approver_comment": str(payload.get("ApproverComment", "")).strip(),
        })

        plan_id     = finding.get("plan_id", "")
        plan_status = None
        if plan_id and _audit_all_findings_approved(plan_id):
            sb_update("audit_plans", {"plan_id": plan_id}, {"status": "Completed"})
            plan_status = "Completed"

        _audit_invalidate_cache()
        return jsonify({
            "message":    "Approved",
            "finding":    {"FindingID": finding_id, "Status": "Approved"},
            "planStatus": plan_status,
        })
    except Exception as exc:
        app.logger.error("api_audit_finding_approve(%s): %s", finding_id, exc)
        return jsonify({"error": "Internal server error"}), 500


@app.route("/api/audit/findings/<finding_id>/close", methods=["PATCH"])
def api_audit_finding_close(finding_id):
    """Legacy alias for /approve."""
    deny = require_writable(("qe_audit", "admin"))
    if deny: return deny

    payload = request.json or {}
    comment = str(payload.get("ApproverComment", payload.get("ClosureNotes", ""))).strip()
    now_iso = _datetime.utcnow().isoformat()
    actor   = _audit_actor_name()

    try:
        rows = sb_select("audit_findings", filters={"id": finding_id})
        if not rows:
            return jsonify({"error": "Finding not found"}), 404
        finding = rows[0]
        if finding.get("status") != "Responded":
            return jsonify({"error": f"Cannot approve — status is '{finding.get('status')}', expected 'Responded'"}), 409

        sb_update("audit_findings", {"id": finding_id}, {
            "status":           "Approved",
            "approved_by":      actor,
            "approved_at":      now_iso,
            "approver_comment": comment,
        })

        plan_id     = finding.get("plan_id", "")
        plan_status = None
        if plan_id and _audit_all_findings_approved(plan_id):
            sb_update("audit_plans", {"plan_id": plan_id}, {"status": "Completed"})
            plan_status = "Completed"

        _audit_invalidate_cache()
        return jsonify({
            "message":    "Approved",
            "finding":    {"FindingID": finding_id, "Status": "Approved"},
            "planStatus": plan_status,
        })
    except Exception as exc:
        app.logger.error("api_audit_finding_close(%s): %s", finding_id, exc)
        return jsonify({"error": "Internal server error"}), 500


# Legacy single-finding respond (frontend uses bulk /plans/<id>/respond instead)
@app.route("/api/audit/findings/<finding_id>/respond", methods=["PATCH"])
def api_audit_finding_respond(finding_id):
    deny = require_writable(("qe_audit", "admin"))
    if deny: return deny

    payload = request.json or {}
    root_cause = str(payload.get("RootCause", "")).strip()
    corrective = str(payload.get("CorrectiveAction", "")).strip()
    if not root_cause or not corrective:
        return jsonify({"error": "RootCause and CorrectiveAction are required"}), 400

    now_iso = _datetime.utcnow().isoformat()
    try:
        rows = sb_select("audit_findings", filters={"id": finding_id})
        if not rows:
            return jsonify({"error": "Finding not found"}), 404
        if rows[0].get("status") != "Open":
            return jsonify({"error": "Cannot respond — finding is not Open"}), 409
        sb_update("audit_findings", {"id": finding_id}, {
            "root_cause":         root_cause,
            "corrective_action":  corrective,
            "preventive_action":  str(payload.get("PreventiveAction", "")).strip(),
            "responsible_person": str(payload.get("ResponsiblePerson", "")).strip(),
            "due_date":           str(payload.get("DueDate", "")).strip() or None,
            "status":             "Responded",
            "responded_by":       _audit_actor_name(),
            "responded_at":       now_iso,
        })
        _audit_invalidate_cache()
        return jsonify({"message": "Saved", "finding": {"FindingID": finding_id, "Status": "Responded"}})
    except Exception as exc:
        app.logger.error("api_audit_finding_respond(%s): %s", finding_id, exc)
        return jsonify({"error": "Internal server error"}), 500


# Legacy manual finding creation (frontend uses auto-create from executions instead)
@app.route("/api/audit/findings", methods=["POST"])
def api_audit_create_finding():
    deny = require_writable(("qe_audit", "admin"))
    if deny: return deny

    payload = request.json or {}
    bu      = str(payload.get("BU", "")).strip().upper()
    if bu not in DEPARTMENTS:
        return jsonify({"error": "Invalid BU"}), 400
    description = str(payload.get("Description", "")).strip()
    if not description:
        return jsonify({"error": "Description is required"}), 400

    try:
        created = sb_insert("audit_findings", {
            "plan_id":            str(payload.get("PlanID", "")).strip() or None,
            "bu":                 bu,
            "item_no":            payload.get("ItemNo"),
            "severity":           str(payload.get("Severity", "Minor")).strip(),
            "description":        description,
            "responsible_person": str(payload.get("ResponsiblePerson", "")).strip(),
            "due_date":           str(payload.get("DueDate", "")).strip() or None,
            "status":             "Open",
            "opened_by":          _audit_actor_name(),
            "opened_at":          _datetime.utcnow().isoformat(),
        })
        _audit_invalidate_cache()
        return jsonify({"message": "Created", "finding": created[0] if created else {}})
    except Exception as exc:
        app.logger.error("api_audit_create_finding: %s", exc)
        return jsonify({"error": "Internal server error"}), 500


# ---------------------------------------------------------------------------
# Admin — Force Refresh (emergency cache bust for all modules)
# ---------------------------------------------------------------------------

_FORCE_REFRESH_COOLDOWN = _JUMPER_CACHE_TTL


def _force_refresh_remaining_seconds():
    last_at = kv_get("force_refresh_last_at")
    if not last_at:
        return 0
    return max(0, round(_FORCE_REFRESH_COOLDOWN - (time.time() - last_at)))


@app.route("/api/admin/force-refresh-status")
def api_force_refresh_status():
    deny = require_writable(("admin",))
    if deny: return deny
    return jsonify({"remainingSeconds": _force_refresh_remaining_seconds()})


@app.route("/api/admin/force-refresh", methods=["POST"])
def api_force_refresh():
    deny = require_writable(("admin",))
    if deny: return deny

    remaining = _force_refresh_remaining_seconds()
    if remaining > 0:
        return jsonify({"error": "Force Refresh is on cooldown", "remainingSeconds": remaining}), 429

    global _JUMPER_EXCEL_CACHE, _TRAINER_EXCEL_CACHE, _AUDIT_CACHE  # noqa: PLW0603
    _JUMPER_EXCEL_CACHE  = {}
    _TRAINER_EXCEL_CACHE = {}
    _AUDIT_CACHE         = {}
    # GICA + CSA + Audit are in Supabase — no KV cache to clear for those
    kv_delete("jumper_excel")
    kv_delete("trainer_excel")

    kv_set("force_refresh_last_at", time.time(), ttl_seconds=_FORCE_REFRESH_COOLDOWN)
    print("[ADMIN] Force Refresh triggered — all caches invalidated", flush=True)
    return jsonify({"message": "Refreshed", "remainingSeconds": _FORCE_REFRESH_COOLDOWN})


# ---------------------------------------------------------------------------
# Legacy Jumper JSON-files route (frontend no longer calls this — kept for
# backwards compatibility only; returns 410 Gone to signal deprecation)
# ---------------------------------------------------------------------------

@app.route("/api/jumper-data")
def api_jumper_data():
    return jsonify({"error": "This endpoint is deprecated. Use /api/jumper-excel instead."}), 410


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True, use_reloader=False, threaded=True)
