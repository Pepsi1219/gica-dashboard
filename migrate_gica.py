"""
migrate_gica.py — One-time migration: GICA.xlsx → Supabase

Reads GICA_G1…GICA_TRM (employee + 60 flat test columns) → converts to
tests JSONB array → upserts gica_employees.
Reads Table_freq → upserts gica_freq.
Reads kpi_g1…kpi_trm → upserts gica_kpi.

Run once, after migrations/004_gica.sql applied.

Usage:
    python migrate_gica.py [--dry-run]
"""
import json
import sys
from datetime import datetime, timedelta

from dotenv import load_dotenv
load_dotenv()

from config import (
    AUTHORITY, CLIENT_ID, CLIENT_SECRET, SCOPES,
    GICA_EXCEL_SHARE_URL, GICA_TABLE_PREFIX, GICA_MAX_TESTS,
    GICA_COLS, GICA_FREQ_TABLE, GICA_FREQ_COLS,
    GICA_KPI_TABLES, GICA_KPI_COLS,
)
from supabase_client import sb_upsert, sb_select, sb_insert

import requests as _requests

DRY_RUN       = "--dry-run" in sys.argv
DEBUG_HEADERS = "--debug-headers" in sys.argv


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


def _read_table(token, drive_id, item_id, table_name, expected_cols, debug=False):
    base = f"/drives/{drive_id}/items/{item_id}/workbook/tables/{table_name}"
    col_resp = _graph(token, f"{base}/columns", {"$select": "name"})
    headers  = [c["name"] for c in col_resp.get("value", [])]
    if debug:
        print(f"  [DEBUG] {table_name} headers ({len(headers)}): {headers}")
    # Normalize to lowercase so _flat_to_tests can match "Result1-1" → "result1-1"
    headers_lower = [h.lower() for h in headers]
    row_resp = _graph(token, f"{base}/rows")
    rows = []
    for row in row_resp.get("value", []):
        vals = (row.get("values") or [[]])[0]
        obj  = {headers_lower[i]: (vals[i] if i < len(vals) else "") for i in range(len(headers_lower))}
        rows.append(obj)
    return rows


def _to_iso(v):
    """Convert Excel serial date or ISO string → 'YYYY-MM-DD' or None."""
    if v in (None, "", "null", False):
        return None
    if isinstance(v, str):
        s = v.strip()
        if len(s) >= 10 and s[4:5] == "-":
            return s[:10]
        try:
            v = float(s)
        except ValueError:
            return s[:10] if s else None
    try:
        d = datetime(1899, 12, 30) + timedelta(days=float(v))
        return d.strftime("%Y-%m-%d")
    except Exception:
        return None


def _to_num(v):
    """Convert percentage/decimal cell value → float or None."""
    if v in (None, "", "null", False):
        return None
    try:
        return float(v)
    except (ValueError, TypeError):
        return None


def _to_str(v):
    if v in (None, "", "null", False):
        return None
    if isinstance(v, bool):
        return "TRUE" if v else "FALSE"
    return str(v).strip() or None


def _grade(score):
    if score is None:
        return ""
    if score >= 0.85: return "A"
    if score >= 0.65: return "B"
    if score >= 0.50: return "C"
    return "D"


def _flat_to_tests(row):
    """Convert flat Excel columns result{i}-1/result{i}-2/grade{i}-1/grade{i}-2/date{i}
    → JSONB tests array [{n, result1, result2, grade1, grade2, date}]."""
    tests = []
    for i in range(1, GICA_MAX_TESTS + 1):
        r1 = row.get(f"result{i}-1")
        r2 = row.get(f"result{i}-2")
        if r1 in (None, "", "null") and r2 in (None, "", "null"):
            break
        num1 = _to_num(r1)
        num2 = _to_num(r2)
        g1 = _to_str(row.get(f"grade{i}-1")) or (_grade(num1) if num1 is not None else "")
        g2 = _to_str(row.get(f"grade{i}-2")) or (_grade(num2) if num2 is not None else "")
        tests.append({
            "n":       i,
            "result1": num1,
            "result2": num2,
            "grade1":  g1.strip().upper() if g1 else "",
            "grade2":  g2.strip().upper() if g2 else "",
            "date":    _to_iso(row.get(f"date{i}")),
        })
    return tests


def migrate():
    print("Getting Microsoft access token…")
    token = _get_token()

    print("Resolving GICA.xlsx drive item…")
    share_id = _encode_share(GICA_EXCEL_SHARE_URL)
    item     = _graph(token, f"/shares/{share_id}/driveItem")
    drive_id = item["parentReference"]["driveId"]
    item_id  = item["id"]

    # ── 1. Discover BU tables ────────────────────────────────────────────────
    tbl_resp = _graph(token, f"/drives/{drive_id}/items/{item_id}/workbook/tables",
                      {"$select": "name"})
    bu_tables = [t["name"] for t in tbl_resp.get("value", [])
                 if str(t.get("name", "")).startswith(GICA_TABLE_PREFIX)]
    print(f"Found BU tables: {bu_tables}")

    # ── 2. Employees ─────────────────────────────────────────────────────────
    total_emp = 0
    for tname in bu_tables:
        bu_key = tname[len(GICA_TABLE_PREFIX):]
        print(f"\nReading {tname}…")
        try:
            rows = _read_table(token, drive_id, item_id, tname, GICA_COLS, debug=DEBUG_HEADERS)
        except Exception as exc:
            print(f"  ERROR: {exc}")
            continue
        print(f"  {len(rows)} rows")

        for row in rows:
            empid = _to_str(row.get("empid"))
            if not empid:
                continue
            name  = _to_str(row.get("name")) or ""
            tests = _flat_to_tests(row)

            if DRY_RUN:
                print(f"  DRY  {bu_key}/{empid} — {name} ({len(tests)} tests)")
                continue

            record = {
                "bu":         bu_key,
                "empid":      empid,
                "name":       name,
                "deptname":   _to_str(row.get("deptname")),
                "level":      _to_str(row.get("level")),
                "position":   _to_str(row.get("position")),
                "start_date": _to_iso(row.get("start_date")),
                "tests":      tests,
            }
            try:
                sb_upsert("gica_employees", record, on_conflict="bu,empid")
                print(f"  UPSERT {bu_key}/{empid} — {name} ({len(tests)} tests)")
                total_emp += 1
            except Exception as exc:
                print(f"  ERROR {bu_key}/{empid}: {exc}")

    # ── 3. Freq table ────────────────────────────────────────────────────────
    print(f"\nReading {GICA_FREQ_TABLE}…")
    try:
        freq_rows = _read_table(token, drive_id, item_id, GICA_FREQ_TABLE, GICA_FREQ_COLS)
        print(f"  {len(freq_rows)} rows")
        freq_records = []
        for row in freq_rows:
            dept  = _to_str(row.get("department"))
            level = _to_str(row.get("level"))
            role  = _to_str(row.get("role"))
            if not (dept or level or role):
                continue
            try:
                freq_months = int(float(row.get("frquency (months)")))
            except (ValueError, TypeError):
                freq_months = None
            record = {
                "department":   dept,
                "level":        level,
                "role":         role,
                "freq_months":  freq_months,
                "expectation1": _to_str(row.get("expectation1", "")) or None,
                "expectation2": _to_str(row.get("expectation2", "")) or None,
            }
            if DRY_RUN:
                print(f"  DRY  freq {dept}/{level}/{role} → {freq_months}m exp={record['expectation1']}/{record['expectation2']}")
            else:
                freq_records.append(record)
        if not DRY_RUN and freq_records:
            import os
            print(f"  Truncating existing freq rows…")
            _requests.delete(
                f"{os.getenv('SUPABASE_URL')}/rest/v1/gica_freq",
                headers={
                    "apikey": os.getenv("SUPABASE_SERVICE_KEY"),
                    "Authorization": f"Bearer {os.getenv('SUPABASE_SERVICE_KEY')}",
                    "Prefer": "return=minimal",
                },
                params={"id": "not.is.null"},
                timeout=15,
            )
            freq_inserted = 0
            for record in freq_records:
                try:
                    sb_insert("gica_freq", record)
                    freq_inserted += 1
                except Exception as exc:
                    print(f"  ERROR freq {record.get('department')}/{record.get('level')}/{record.get('role')}: {exc}")
            print(f"  Inserted {freq_inserted} freq rows")
    except Exception as exc:
        print(f"  ERROR reading {GICA_FREQ_TABLE}: {exc}")

    # ── 4. KPI tables ────────────────────────────────────────────────────────
    print("\nReading KPI tables…")
    kpi_inserted = 0
    for bu_key, tname in GICA_KPI_TABLES.items():
        try:
            kpi_rows = _read_table(token, drive_id, item_id, tname, GICA_KPI_COLS)
            for row in kpi_rows:
                level = _to_str(row.get("level"))
                if not level:
                    continue
                try:
                    target = float(row.get("target"))
                except (ValueError, TypeError):
                    target = None
                record = {"bu": bu_key, "level": level, "target": target}
                if DRY_RUN:
                    print(f"  DRY  kpi {bu_key}/{level} → {target}")
                else:
                    try:
                        sb_upsert("gica_kpi", record, on_conflict="bu,level")
                        kpi_inserted += 1
                    except Exception as exc:
                        print(f"  ERROR kpi {bu_key}/{level}: {exc}")
            print(f"  {tname}: {len(kpi_rows)} rows")
        except Exception as exc:
            print(f"  ERROR reading {tname}: {exc}")
    if not DRY_RUN:
        print(f"  Inserted/updated {kpi_inserted} KPI rows")

    if DRY_RUN:
        print("\nDry-run complete (nothing written).")
    else:
        print(f"\nDone. Employees upserted: {total_emp}")


if __name__ == "__main__":
    migrate()
