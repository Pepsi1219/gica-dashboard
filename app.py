import base64
import json
import os
import time
import zlib
from datetime import timedelta

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
    REDIRECT_URI,
    SCOPES,
)
from business_rules import calculate_status
from graph_excel import (
    TokenExpiredError,
    create_employee,
    find_employee,
    get_table_rows,
    update_employee,
)

# ---------------------------------------------------------------------------
# App setup
# ---------------------------------------------------------------------------
app = Flask(__name__)
app.secret_key = FLASK_SECRET_KEY

_IS_VERCEL = os.getenv("VERCEL", "") == "1"

app.config.update(
    PERMANENT_SESSION_LIFETIME=timedelta(days=30),
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Lax",    # required for OAuth cross-site redirect
    SESSION_COOKIE_SECURE=_IS_VERCEL, # HTTPS-only on Vercel
)

if not _IS_VERCEL:
    # Filesystem sessions for local dev — no cookie size concern
    _SESSION_DIR = os.path.join(os.path.dirname(__file__), ".flask_session")
    os.makedirs(_SESSION_DIR, exist_ok=True)
    app.config.update(
        SESSION_TYPE="filesystem",
        SESSION_FILE_DIR=_SESSION_DIR,
        SESSION_FILE_THRESHOLD=500,
    )
    Session(app)
# On Vercel: Flask built-in signed-cookie session.
# Cookie contains only the compressed auth blob (~1.5 KB) + user dict (~200 B),
# well within the 4 KB browser cookie limit.


# ---------------------------------------------------------------------------
# Compression helpers
# ---------------------------------------------------------------------------

def _compress(text: str) -> str:
    return base64.b64encode(zlib.compress(text.encode(), level=9)).decode()


def _decompress(data: str) -> str:
    return zlib.decompress(base64.b64decode(data)).decode()


# ---------------------------------------------------------------------------
# Token storage — minimal, no MSAL cache
#
# WHY: MSAL's SerializableTokenCache stores access token + refresh token +
# ID token + account metadata (total ~4 KB uncompressed, ~2–3 KB compressed).
# Flask's signed cookie adds its own overhead, pushing the total over the
# browser's 4 KB cookie limit.  When the browser silently drops an oversized
# cookie, the session is lost after every login — which was the Vercel bug.
#
# FIX: Skip MSAL's cache entirely.  After the initial auth-code exchange we
# pull the tokens out of MSAL's result dict and store only:
#   { "at": <access_token>, "rt": <refresh_token>, "exp": <unix_expiry> }
# After compression the auth blob is ~1.5 KB — no overflow possible.
# ---------------------------------------------------------------------------

def _build_msal_app() -> msal.ConfidentialClientApplication:
    """MSAL app used ONLY for the initial auth-code exchange and auth URL."""
    return msal.ConfidentialClientApplication(
        CLIENT_ID,
        authority=AUTHORITY,
        client_credential=CLIENT_SECRET,
    )


def _do_token_refresh(refresh_token: str) -> dict | None:
    """Call Azure AD token endpoint directly to refresh the access token."""
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
    - Returns the cached access token if still valid (5-min buffer).
    - force_refresh=True or an expired token triggers a refresh via the
      stored refresh token (direct call to Azure AD, no MSAL cache).
    - Returns None if not authenticated or if the refresh token is invalid.
    """
    raw = session.get("auth")
    if not raw:
        return None

    try:
        auth = json.loads(_decompress(raw))
    except Exception:
        return None

    # Return cached access token if still fresh
    if not force_refresh and auth.get("at") and time.time() < auth.get("exp", 0) - 300:
        return auth["at"]

    # Need a fresh access token — use the refresh token
    rt = auth.get("rt")
    if not rt:
        return None

    result = _do_token_refresh(rt)
    if not result or "access_token" not in result:
        print("[TOKEN] Refresh failed — clearing auth session")
        session.pop("auth", None)
        return None

    auth["at"]  = result["access_token"]
    auth["exp"] = time.time() + result.get("expires_in", 3600)
    if "refresh_token" in result:           # refresh tokens may rotate
        auth["rt"] = result["refresh_token"]
    session["auth"] = _compress(json.dumps(auth))

    return auth["at"]


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
    # ── Step 1: check for Azure AD error ──────────────────────────────────
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

    # ── Step 2: exchange auth-code for tokens ──────────────────────────────
    print(f"[AUTH] Code received. Exchanging for token...")
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

    # ── Step 3: persist session ────────────────────────────────────────────
    # Store ONLY access token + refresh token + expiry (not the full MSAL cache).
    # This keeps session["auth"] ~1.5 KB after compression — safe for cookies.
    auth_data = {
        "at":  result["access_token"],
        "rt":  result.get("refresh_token", ""),
        "exp": time.time() + result.get("expires_in", 3600),
    }
    session["auth"] = _compress(json.dumps(auth_data))

    claims = result.get("id_token_claims") or {}
    session["user"] = {
        "name":  claims.get("name") or claims.get("preferred_username") or "User",
        "email": claims.get("preferred_username") or claims.get("upn") or "",
        "oid":   claims.get("oid") or claims.get("sub") or "unknown",
    }
    session.permanent = True

    user_name = session["user"].get("name", "?")
    print(f"[AUTH] Login OK — {user_name}")

    # Return 200 HTML instead of 302 redirect.
    # Some CDN/edge layers (including Vercel's) strip Set-Cookie headers from
    # 302 responses, so the session cookie never reaches the browser.
    # A 200 response with a JS redirect bypasses this reliably.
    return """<!doctype html>
<html><head><meta charset="utf-8">
<meta http-equiv="refresh" content="0;url=/">
</head><body>
<script>window.location.replace('/');</script>
<p>Redirecting&hellip;</p>
</body></html>"""


@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("index"))


# ---------------------------------------------------------------------------
# Routes — API
# ---------------------------------------------------------------------------

@app.route("/api/me")
def api_me():
    print(f"[API/ME] Session keys: {list(session.keys())}")
    token = get_valid_token()
    user  = session.get("user")
    authenticated = bool(token) or bool(user)
    print(f"[API/ME] authenticated={authenticated}  token={bool(token)}  user={bool(user)}")
    return jsonify({"authenticated": authenticated, "user": user})


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
    department, error = get_department_or_404(department_key)
    if error:
        return error

    payload = request.json or {}
    holidays = payload.pop("_holidays", [])
    try:
        calc = calculate_status(payload, holidays)
        payload["Due date"]                     = calc["due_date"]
        payload["Remaining days (working days)"] = calc["remaining_days"] if calc["remaining_days"] is not None else ""
        payload["On time"]                      = calc["on_time"]
        payload["Actual Status"]                = calc["status"]
        payload["Total Training Days"]          = calc["allowed_days"] if calc["allowed_days"] is not None else ""
        updated = call_graph(update_employee, department, employee_id, payload)
        updated["calculated"] = calc
        return jsonify({"message": "Updated", "employee": updated})
    except AuthError as exc:
        return _auth_error_response(exc)
    except Exception as exc:
        return jsonify({"error": str(exc)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True, use_reloader=False)
