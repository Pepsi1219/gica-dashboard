"""
migrate_csa.py — One-time migration: 6 CSA Excel workbooks → Supabase csa_employees

Reads each BU's EmployeeTable from OneDrive via Microsoft Graph API using
MANAGER_REFRESH_TOKEN, then upserts rows into csa_employees (on conflict:
bu + employee_id).

Run once, after:
  1. migrations/003_csa.sql applied in Supabase SQL Editor
  2. .env has SUPABASE_URL, SUPABASE_SERVICE_KEY, MANAGER_REFRESH_TOKEN, etc.

Usage:
    python migrate_csa.py [--dry-run]
"""
import sys
from datetime import datetime, timedelta

from dotenv import load_dotenv
load_dotenv()

from config import AUTHORITY, CLIENT_ID, CLIENT_SECRET, DEPARTMENTS, EXCEL_TABLE_NAME, SCOPES
from supabase_client import sb_upsert, sb_select

import requests as _requests

DRY_RUN = "--dry-run" in sys.argv

# Bidirectional mapping: Excel "Title Case" column → Supabase snake_case column
_API_TO_SB = {
    "Employee ID":                  "employee_id",
    "Employee Name":                "employee_name",
    "Type":                         "type",
    "Grade":                        "grade",
    "Week":                         "week",
    "CSA Start Date":               "csa_start_date",
    "Due date":                     "due_date_excel",
    "Operation End (week)":         "op_end_week",
    "3 Days Resign":                "three_days_resign",
    "Remaining days (working days)":"remaining_days",
    "Non - Working Days":           "non_working_days",
    "Due date (week)":              "due_date_week",
    "Basic Start":                  "basic_start",
    "Basic End":                    "basic_end",
    "Operation Start":              "operation_start",
    "Operation End":                "operation_end",
    "Resign Date":                  "resign_date",
    "Transfers Date":               "transfers_date",
    "Graduate Eff":                 "graduate_eff",
    "On time":                      "on_time",
    "Actual Status":                "actual_status",
    "Comment":                      "comment",
    "Employees Leave":              "employees_leave",
    "Review":                       "review",
    "Total Training Days":          "total_training_days",
    # "ID" column is Excel's internal row ID — skipped; Supabase uses UUID PK
}


def _get_token():
    import os
    refresh_token = os.getenv("MANAGER_REFRESH_TOKEN", "")
    if not refresh_token:
        print("ERROR: MANAGER_REFRESH_TOKEN not set")
        sys.exit(1)
    r = _requests.post(
        f"{AUTHORITY}/oauth2/v2.0/token",
        data={
            "client_id":     CLIENT_ID,
            "client_secret": CLIENT_SECRET,
            "refresh_token": refresh_token,
            "grant_type":    "refresh_token",
            "scope":         " ".join(SCOPES),
        },
        timeout=15,
    )
    r.raise_for_status()
    return r.json()["access_token"]


def _graph(token, path, params=None):
    url = f"https://graph.microsoft.com/v1.0{path}"
    r = _requests.get(
        url,
        headers={"Authorization": f"Bearer {token}"},
        params=params or {},
        timeout=30,
    )
    r.raise_for_status()
    return r.json()


def _encode_share(url):
    import base64
    b64 = base64.urlsafe_b64encode(url.encode()).decode().rstrip("=")
    return "u!" + b64


def _to_str(v):
    """Normalise a cell value to string, converting Excel serial dates."""
    if v in (None, "", "null", False):
        return ""
    if isinstance(v, bool):
        return "TRUE" if v else "FALSE"
    if isinstance(v, float) and v == int(v):
        v = int(v)
    # Detect Excel serial date: positive integer in plausible range (1900–2100)
    if isinstance(v, (int, float)) and 20000 < v < 80000:
        try:
            d = datetime(1899, 12, 30) + timedelta(days=float(v))
            return d.strftime("%Y-%m-%d")
        except Exception:
            pass
    return str(v).strip()


def _read_bu_employees(token, dept):
    """Return list of dicts (Excel column names) for one BU's EmployeeTable."""
    share_id = _encode_share(dept["share_url"])
    item     = _graph(token, f"/shares/{share_id}/driveItem")
    drive_id = item["parentReference"]["driveId"]
    item_id  = item["id"]

    base = f"/drives/{drive_id}/items/{item_id}/workbook/tables/{EXCEL_TABLE_NAME}"
    col_resp = _graph(token, f"{base}/columns", {"$select": "name"})
    headers  = [c["name"] for c in col_resp.get("value", [])]
    row_resp = _graph(token, f"{base}/rows")

    rows = []
    for row in row_resp.get("value", []):
        vals = (row.get("values") or [[]])[0]
        obj  = {headers[i]: (vals[i] if i < len(vals) else "") for i in range(len(headers))}
        rows.append(obj)
    return rows


def _excel_row_to_sb(bu_key, row):
    """Convert one Excel row (Title Case) → Supabase record (snake_case)."""
    rec = {"bu": bu_key}
    for api_field, sb_col in _API_TO_SB.items():
        rec[sb_col] = _to_str(row.get(api_field, "")) or None
    return rec


def migrate():
    print("Getting Microsoft access token…")
    token = _get_token()

    total_upserted = 0
    total_skipped  = 0

    for bu_key, dept in DEPARTMENTS.items():
        print(f"\nReading {bu_key} — {dept['workbook_name']}…")
        try:
            rows = _read_bu_employees(token, dept)
        except Exception as exc:
            print(f"  ERROR reading {bu_key}: {exc}")
            continue

        print(f"  {len(rows)} rows found")

        for row in rows:
            emp_id = _to_str(row.get("Employee ID", ""))
            if not emp_id:
                print(f"  SKIP empty Employee ID row")
                total_skipped += 1
                continue

            rec = _excel_row_to_sb(bu_key, row)

            if DRY_RUN:
                print(f"  DRY  {bu_key} / {emp_id} — {_to_str(row.get('Employee Name', ''))}")
                continue

            try:
                # upsert: insert new rows, update existing ones with latest Excel data
                sb_upsert("csa_employees", rec, on_conflict="bu,employee_id")
                print(f"  UPSERT {bu_key}/{emp_id} — {_to_str(row.get('Employee Name', ''))}")
                total_upserted += 1
            except Exception as exc:
                print(f"  ERROR {bu_key}/{emp_id}: {exc}")

    if DRY_RUN:
        print("\nDry-run complete (nothing was written).")
    else:
        print(f"\nDone. Upserted: {total_upserted}, Skipped (no Employee ID): {total_skipped}")


if __name__ == "__main__":
    migrate()
