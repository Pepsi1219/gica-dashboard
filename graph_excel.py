import base64
import urllib.parse
from contextlib import contextmanager

import requests
from config import EXCEL_COLUMNS, EXCEL_TABLE_NAME, ONEDRIVE_FOLDER

GRAPH_ROOT = "https://graph.microsoft.com/v1.0"


class GraphExcelError(Exception):
    pass


class TokenExpiredError(GraphExcelError):
    """Raised when Graph API returns 401 — access token is expired or invalid."""
    pass


def _headers(token):
    return {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
    }


def graph_request(token, method, path, **kwargs):
    url = f"{GRAPH_ROOT}{path}"

    default_headers = _headers(token)
    extra_headers = kwargs.pop("headers", {})
    merged_headers = {**default_headers, **extra_headers}

    response = requests.request(
        method,
        url,
        headers=merged_headers,
        timeout=60,
        **kwargs
    )

    if response.status_code == 401:
        raise TokenExpiredError(
            "Graph API returned 401 — access token expired or invalid."
        )

    if not response.ok:
        raise GraphExcelError(f"Graph API error {response.status_code}: {response.text}")

    if response.status_code == 204:
        return None

    return response.json()


def encode_sharing_url(share_url):
    encoded = base64.b64encode(share_url.encode("utf-8")).decode("utf-8")
    encoded = encoded.rstrip("=").replace("/", "_").replace("+", "-")
    return "u!" + encoded


def get_drive_item(token, department):
    """
    Locate the workbook. Access priority:
    1. Sharing URL  — always points to the exact file configured in DEPARTMENTS
    2. Direct path  — fallback (unreliable when multiple files share the same name)
    3. Drive search — last resort
    """
    workbook_name = department["workbook_name"]
    share_url     = department["share_url"]

    # ── 1. Sharing URL (most precise — unique per file) ───────────────────────
    try:
        share_id = encode_sharing_url(share_url)
        item = graph_request(
            token,
            "GET",
            f"/shares/{share_id}/driveItem",
            headers={"Prefer": "redeemSharingLinkIfNecessary"},
        )
        print(f"[DRIVE] ✓ sharing URL: {workbook_name}", flush=True)
        return item
    except GraphExcelError as e:
        print(f"[DRIVE] sharing URL failed: {e}", flush=True)

    # ── 2. Direct path-based access ──────────────────────────────────────────
    try:
        file_path    = f"{ONEDRIVE_FOLDER}/{workbook_name}"
        encoded_path = urllib.parse.quote(file_path, safe="/")
        item = graph_request(token, "GET", f"/me/drive/root:/{encoded_path}:")
        print(f"[DRIVE] ✓ path: {workbook_name}", flush=True)
        return item
    except GraphExcelError as e:
        print(f"[DRIVE] path failed: {e}", flush=True)

    # ── 3. Search in user's own drive ─────────────────────────────────────────
    q    = urllib.parse.quote(workbook_name, safe="")
    data = graph_request(token, "GET", f"/me/drive/root/search(q='{q}')")
    for item in (data.get("value") or []):
        if item.get("name") == workbook_name and "file" in item:
            print(f"[DRIVE] ✓ search: {workbook_name}", flush=True)
            return item
    raise GraphExcelError(f"Cannot locate workbook: {workbook_name}")


# ── Workbook session context manager ─────────────────────────────────────────

@contextmanager
def _workbook_session(token, drive_id, item_id):
    """
    Create a persistent workbook session for write operations.
    Sessions give proper write access and avoid the 'cannot perform operation' 403.
    Falls back to no-session mode if createSession itself fails.
    """
    session_id = None
    url_base   = f"/drives/{drive_id}/items/{item_id}/workbook"
    try:
        resp       = graph_request(token, "POST", f"{url_base}/createSession",
                                   json={"persistChanges": True})
        session_id = resp.get("id", "")
        print(f"[SESSION] created {session_id[:20]}…", flush=True)
    except GraphExcelError as exc:
        print(f"[SESSION] createSession failed ({exc}) — writing without session", flush=True)

    try:
        yield {"workbook-session-id": session_id} if session_id else {}
    finally:
        if session_id:
            try:
                graph_request(token, "POST", f"{url_base}/closeSession",
                              headers={"workbook-session-id": session_id})
                print("[SESSION] closed", flush=True)
            except GraphExcelError:
                pass


# ── Row helpers ───────────────────────────────────────────────────────────────

def row_to_object(values, headers):
    """Map a row's values to EXCEL_COLUMNS by header name (not position) —
    survives column reordering/insertion in the Excel file."""
    values  = values or []
    by_name = {headers[i]: (values[i] if i < len(values) else "")
               for i in range(len(headers))}
    return {col: by_name.get(col, "") for col in EXCEL_COLUMNS}


def object_to_row(record, headers):
    """Build a row's values in the Excel file's actual column order."""
    return [record.get(col, "") for col in headers]


# ── Table read ────────────────────────────────────────────────────────────────

def get_table_rows(token, department):
    item     = get_drive_item(token, department)
    drive_id = item["parentReference"]["driveId"]
    item_id  = item["id"]
    base     = (f"/drives/{drive_id}/items/{item_id}"
                f"/workbook/tables/{EXCEL_TABLE_NAME}")

    col_resp = graph_request(token, "GET", f"{base}/columns?$select=name")
    headers  = [c.get("name", "") for c in col_resp.get("value", [])]
    item["_headers"] = headers

    data      = graph_request(token, "GET", f"{base}/rows")
    rows      = data.get("value", [])
    employees = []
    for index, row in enumerate(rows):
        values = (row.get("values") or [[]])[0]
        obj    = row_to_object(values, headers)
        emp_id = str(obj.get("Employee ID", "")).strip()
        if emp_id and emp_id != "0":
            obj["_row_index"] = index
            employees.append(obj)
    return item, employees


# ── Write via Workbook API (with session) ─────────────────────────────────────

def _write_row_add(token, drive_id, item_id, table_name, row_values):
    """Add a new row to the given table — uses a workbook session for proper write access."""
    with _workbook_session(token, drive_id, item_id) as sess_hdrs:
        body = {"index": None, "values": [row_values]}
        graph_request(
            token, "POST",
            f"/drives/{drive_id}/items/{item_id}"
            f"/workbook/tables/{table_name}/rows/add",
            json=body,
            headers=sess_hdrs,
        )


def _write_row_patch(token, drive_id, item_id, table_name, row_index, row_values):
    """Update an existing row range in the given table — uses a workbook session."""
    with _workbook_session(token, drive_id, item_id) as sess_hdrs:
        body = {"values": [row_values]}
        graph_request(
            token, "PATCH",
            f"/drives/{drive_id}/items/{item_id}"
            f"/workbook/tables/{table_name}"
            f"/rows/itemAt(index={row_index})/range",
            json=body,
            headers=sess_hdrs,
        )


# ── Public CRUD (CSA write operations — now handled by Supabase in app.py) ──────
# create_employee, update_employee, find_employee were removed (dead code — CSA
# is now Phase 2 Supabase). GICA write functions were removed too (GICA moved to
# Supabase). Generic per-table CRUD helpers removed as no longer referenced.
