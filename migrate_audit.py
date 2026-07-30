"""
migrate_audit.py — One-time migration: Audit_Monitoring.xlsx → Supabase

Reads the four Excel tables (AuditTemplate, AuditPlan, AuditExecution, AuditFinding)
via Microsoft Graph API using MANAGER_REFRESH_TOKEN, then inserts the data into the
three Supabase tables (audit_templates, audit_plans, audit_findings).

Run once, after:
  1. Supabase project is set up with migrations/001_profiles.sql + 002_audit.sql applied
  2. .env has SUPABASE_URL, SUPABASE_SERVICE_KEY, MANAGER_REFRESH_TOKEN, CLIENT_ID, etc.

Usage:
    python migrate_audit.py [--dry-run]
"""
import sys
import time
from datetime import datetime, timedelta

from dotenv import load_dotenv
load_dotenv()

from config import (
    AUDIT_RATING_TO_SEVERITY,
    AUTHORITY,
    CLIENT_ID,
    CLIENT_SECRET,
    SCOPES,
)
from supabase_client import sb_insert, sb_update, sb_select

import os
import requests as _requests

DRY_RUN = '--dry-run' in sys.argv

AUDIT_EXCEL_SHARE_URL = os.getenv("AUDIT_EXCEL_SHARE_URL", "")
MANAGER_REFRESH_TOKEN = os.getenv("MANAGER_REFRESH_TOKEN", "")

# ── Column names as they appear in the Excel tables (before translation layer) ──
TEMPLATE_COLS  = ["Template Name", "Category", "Item No.", "Code", "Version",
                   "Active", "Created By", "Created At", "Item Text"]
PLAN_COLS      = ["PlanID", "BU", "Department", "FormVersion", "AuditTitle",
                   "ScheduledDate", "Auditor1", "Auditor2", "Auditor3",
                   "Status", "CreatedBy", "Notes"]
EXECUTION_COLS = ["ExecutionID", "PlanID", "ItemNo", "Score", "ActualResult",
                   "Comment", "ExecutedBy"]
FINDING_COLS   = ["FindingID", "PlanID", "ExecutionID", "BU", "Severity",
                   "Description", "RootCause", "CorrectiveAction",
                   "Responsible Person", "Due Date", "Status",
                   "OpenedBy", "OpeneDate", "RespondedBy", "ClosedBy",
                   "ClosedDate", "Notes"]


def _get_token():
    r = _requests.post(
        f"{AUTHORITY}/oauth2/v2.0/token",
        data={
            "client_id":     CLIENT_ID,
            "client_secret": CLIENT_SECRET,
            "refresh_token": MANAGER_REFRESH_TOKEN,
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
        params=params,
        timeout=30,
    )
    r.raise_for_status()
    return r.json()


def _encode_share(url):
    import base64
    b64 = base64.urlsafe_b64encode(url.encode()).decode().rstrip("=")
    return "u!" + b64


def _read_table(token, drive_id, item_id, table_name):
    base = f"/drives/{drive_id}/items/{item_id}/workbook/tables/{table_name}"
    col_resp = _graph(token, f"{base}/columns", {"$select": "name"})
    headers  = [c["name"] for c in col_resp.get("value", [])]
    row_resp = _graph(token, f"{base}/rows")
    rows = []
    for row in row_resp.get("value", []):
        vals   = (row.get("values") or [[]])[0]
        obj    = {headers[i]: (vals[i] if i < len(vals) else "") for i in range(len(headers))}
        rows.append(obj)
    return rows


def _to_iso(v):
    if not v or v in ("", "null"):
        return None
    if isinstance(v, str):
        s = v.strip()
        if len(s) >= 10 and s[4:5] == "-":
            return s[:10]
        try:
            n = float(s)
        except ValueError:
            return s[:10] if s else None
        v = n
    try:
        d = datetime(1899, 12, 30) + timedelta(days=float(v))
        return d.strftime("%Y-%m-%d")
    except Exception:
        return None


def _str(v):
    return str(v).strip() if v not in (None, "", "null") else ""


def _bool(v):
    if isinstance(v, bool):
        return v
    s = str(v).strip().upper()
    return s not in ("FALSE", "0", "NO", "")


def migrate():
    if not AUDIT_EXCEL_SHARE_URL:
        print("ERROR: AUDIT_EXCEL_SHARE_URL not set in environment")
        sys.exit(1)

    print("Getting manager access token…")
    token = _get_token()

    print("Resolving Audit_Monitoring.xlsx drive item…")
    share_id = _encode_share(AUDIT_EXCEL_SHARE_URL)
    item     = _graph(token, f"/shares/{share_id}/driveItem",)
    drive_id = item["parentReference"]["driveId"]
    item_id  = item["id"]
    print(f"  drive={drive_id[:20]}… item={item_id[:20]}…")

    print("\nReading AuditTemplate…")
    raw_tpl = _read_table(token, drive_id, item_id, "AuditTemplate")
    print(f"  {len(raw_tpl)} rows")

    print("Reading AuditPlan…")
    raw_plan = _read_table(token, drive_id, item_id, "AuditPlan")
    print(f"  {len(raw_plan)} rows")

    print("Reading AuditExecution…")
    raw_exec = _read_table(token, drive_id, item_id, "AuditExecution")
    print(f"  {len(raw_exec)} rows")

    print("Reading AuditFinding…")
    raw_find = _read_table(token, drive_id, item_id, "AuditFinding")
    print(f"  {len(raw_find)} rows")

    # ── Build audit_templates: group by Code+Version, items as JSONB array ──────
    print("\nBuilding audit_templates…")
    from collections import defaultdict
    tpl_groups: dict = {}   # (code, version) → meta + items list
    for r in raw_tpl:
        code    = _str(r.get("Code"))
        version = r.get("Version")
        if not code or version in (None, "", "null"):
            continue
        try: version = int(float(version))
        except (ValueError, TypeError): continue
        key = (code, version)
        if key not in tpl_groups:
            tpl_groups[key] = {
                "code":          code,
                "version":       version,
                "category":      _str(r.get("Category")),
                "template_name": _str(r.get("Template Name")),
                "active":        _bool(r.get("Active", True)),
                "created_by":    _str(r.get("Created By")),
                "created_at":    _to_iso(r.get("Created At")) or datetime.utcnow().date().isoformat(),
                "items":         [],
            }
        item_no = r.get("Item No.")
        item_tx = _str(r.get("Item Text"))
        if item_no not in (None, "", "null") and item_tx:
            try: item_no_int = int(float(item_no))
            except (ValueError, TypeError): item_no_int = len(tpl_groups[key]["items"]) + 1
            tpl_groups[key]["items"].append({"item_no": item_no_int, "item_text": item_tx})

    print(f"  {len(tpl_groups)} template forms")

    if not DRY_RUN:
        for rec in tpl_groups.values():
            existing = sb_select("audit_templates",
                                 filters={"code": rec["code"], "version": rec["version"]})
            if existing:
                print(f"  SKIP  template {rec['code']} v{rec['version']} (already exists)")
            else:
                sb_insert("audit_templates", rec)
                print(f"  INSERT template {rec['code']} v{rec['version']} ({len(rec['items'])} items)")
    else:
        for rec in tpl_groups.values():
            print(f"  DRY   template {rec['code']} v{rec['version']} ({len(rec['items'])} items)")

    # ── Build audit_plans (execution JSONB built from AuditExecution rows) ────────
    print("\nBuilding audit_plans…")
    # Index executions by PlanID
    exec_by_plan: dict = defaultdict(list)
    for r in raw_exec:
        pid     = _str(r.get("PlanID"))
        item_no = r.get("ItemNo")
        score   = _str(r.get("Score"))
        if not pid or item_no in (None, "", "null"):
            continue
        try: item_no_int = int(float(item_no))
        except (ValueError, TypeError): continue
        exec_by_plan[pid].append({
            "item_no":     item_no_int,
            "score":       score,
            "comment":     _str(r.get("Comment")),
            "executed_by": _str(r.get("ExecutedBy")),
        })

    plan_records = []
    for r in raw_plan:
        pid = _str(r.get("PlanID"))
        if not pid:
            continue
        fv = r.get("FormVersion")
        try: fv = int(float(fv))
        except (ValueError, TypeError): fv = None
        status = _str(r.get("Status")) or "Planned"
        plan_records.append({
            "plan_id":       pid,
            "bu":            _str(r.get("BU")),
            "department":    _str(r.get("Department")),
            "form_code":     "",   # old Excel schema didn't have FormCode
            "form_version":  fv or 1,
            "audit_title":   _str(r.get("AuditTitle")),
            "scheduled_date": _to_iso(r.get("ScheduledDate")),
            "auditor1":      _str(r.get("Auditor1")),
            "auditor2":      _str(r.get("Auditor2")),
            "auditor3":      _str(r.get("Auditor3")),
            "status":        status if status in ("Planned","Issued","Pending Approval","Completed","Cancelled") else "Planned",
            "created_by":    _str(r.get("CreatedBy")),
            "execution":     exec_by_plan.get(pid) or None,
        })

    print(f"  {len(plan_records)} plans")

    if not DRY_RUN:
        for rec in plan_records:
            existing = sb_select("audit_plans", filters={"plan_id": rec["plan_id"]})
            if existing:
                print(f"  SKIP  plan {rec['plan_id']} (already exists)")
            else:
                sb_insert("audit_plans", rec)
                print(f"  INSERT plan {rec['plan_id']} (status={rec['status']}, {len(rec['execution'] or [])} exec items)")
    else:
        for rec in plan_records:
            print(f"  DRY   plan {rec['plan_id']} (status={rec['status']})")

    # ── Build audit_findings ──────────────────────────────────────────────────────
    print("\nBuilding audit_findings…")
    finding_records = []
    for r in raw_find:
        pid = _str(r.get("PlanID"))
        if not pid:
            continue
        exec_id   = _str(r.get("ExecutionID"))
        item_no   = None
        if exec_id and "_" in exec_id:
            try: item_no = int(exec_id.rsplit("_", 1)[-1])
            except ValueError: pass

        severity = _str(r.get("Severity")) or "Minor"
        if severity not in ("Minor", "Major", "Critical"):
            severity = "Minor"

        raw_status = _str(r.get("Status")) or "Open"
        if raw_status in ("Closed", "Approved"):
            status = "Approved"
        elif raw_status == "Responded":
            status = "Responded"
        else:
            status = "Open"

        finding_records.append({
            "plan_id":            pid,
            "bu":                 _str(r.get("BU")),
            "item_no":            item_no,
            "severity":           severity,
            "description":        _str(r.get("Description")),
            "root_cause":         _str(r.get("RootCause")),
            "corrective_action":  _str(r.get("CorrectiveAction")),
            "responsible_person": _str(r.get("Responsible Person")),
            "due_date":           _to_iso(r.get("Due Date")),
            "status":             status,
            "opened_by":          _str(r.get("OpenedBy")),
            "opened_at":          _to_iso(r.get("OpeneDate")) or datetime.utcnow().date().isoformat(),
            "responded_by":       _str(r.get("RespondedBy")) or None,
            "approved_by":        _str(r.get("ClosedBy")) or None,
            "approved_at":        _to_iso(r.get("ClosedDate")) or None,
        })

    print(f"  {len(finding_records)} findings")

    if not DRY_RUN:
        for rec in finding_records:
            sb_insert("audit_findings", rec)
        print(f"  INSERT {len(finding_records)} findings")
    else:
        for rec in finding_records:
            print(f"  DRY   finding plan={rec['plan_id']} severity={rec['severity']} status={rec['status']}")

    print("\nMigration complete." if not DRY_RUN else "\nDry-run complete (nothing was written).")


if __name__ == "__main__":
    migrate()
