import os
from dotenv import load_dotenv

load_dotenv()

CLIENT_ID = os.getenv("CLIENT_ID", "")
CLIENT_SECRET = os.getenv("CLIENT_SECRET", "")
TENANT_ID = os.getenv("TENANT_ID", "common")
AUTHORITY = f"https://login.microsoftonline.com/{TENANT_ID}"
REDIRECT_URI = os.getenv("REDIRECT_URI", "http://localhost:5000/auth/callback")
FLASK_SECRET_KEY = os.getenv("FLASK_SECRET_KEY", "dev-secret-change-me")
SCOPES = ["User.Read", "Files.ReadWrite"]

# Microsoft account email allowed into Admin Sign In (case-insensitive match).
ADMIN_EMAIL = os.getenv("ADMIN_EMAIL", "").strip().lower()

# Extra password gate shown before the QE / Admin "Sign in with Microsoft" buttons
# redirect to Azure AD — restricts the attempt to people who know this password,
# even if they have a valid organization Microsoft account.
# No fallback default on purpose — must be set via env var (Vercel / .env), never
# committed to source control.
QE_DOOR_PASSWORD    = os.getenv("QE_DOOR_PASSWORD", "")
ADMIN_DOOR_PASSWORD = os.getenv("ADMIN_DOOR_PASSWORD", "")
EXCEL_TABLE_NAME = os.getenv("EXCEL_TABLE_NAME", "EmployeeTable")

# Path to the folder in the owner's OneDrive (relative to drive root)
ONEDRIVE_FOLDER = os.getenv(
    "ONEDRIVE_FOLDER",
    "Documents/1. Project/CSA (Center of Skill Acquisition)/New Operator Monitoring",
)

DEPARTMENTS = {
    "G1": {
        "label": "G1",
        "workbook_name": "CSA Monitoring Report_G1_for App.xlsx",
        "share_url": "https://nanyangtextilegroup-my.sharepoint.com/:x:/g/personal/pongsathon_s_nanyangtextile_com/IQBvE30PLadSQr3LxorbUVCDAYkih4UTNzoTu7xMLBBIr1U?e=m8v1bM",
    },
    "G2": {
        "label": "G2",
        "workbook_name": "CSA Monitoring Report_G2_for App.xlsx",
        "share_url": "https://nanyangtextilegroup-my.sharepoint.com/:x:/g/personal/pongsathon_s_nanyangtextile_com/IQA7PyY-Blu6QZoUTidEdXlnAVw87EyIUbAxqt9i4kLZeJc?e=osIuby",
    },
    "G3": {
        "label": "G3",
        "workbook_name": "CSA Monitoring Report_G3_for App.xlsx",
        "share_url": "https://nanyangtextilegroup-my.sharepoint.com/:x:/g/personal/pongsathon_s_nanyangtextile_com/IQCbi16Hfi5jSJhsMM3MYlTTAUdRxCDJEHEzLigMS8ohZE0?e=UgUVof",
    },
    "G4": {
        "label": "G4",
        "workbook_name": "CSA Monitoring Report_G4_for App.xlsx",
        "share_url": "https://nanyangtextilegroup-my.sharepoint.com/:x:/g/personal/pongsathon_s_nanyangtextile_com/IQDYQRWEAzS3SLy5FIeGEsbuAWzehRjHwFcwkxE62sGwl8g?e=bfQn9r",
    },
    "TRM": {
        "label": "TRM",
        "workbook_name": "CSA Monitoring Report_TRM_for App.xlsx",
        "share_url": "https://nanyangtextilegroup-my.sharepoint.com/:x:/g/personal/pongsathon_s_nanyangtextile_com/IQA9cQHFhe21QJTuQoaPl6bSAX5x_EwSQixheBTD3KlQBD8?e=guj06d",
    },
    "EA": {
        "label": "EA",
        "workbook_name": "CSA Monitoring Report_EA_for App.xlsx",
        "share_url": "https://nanyangtextilegroup-my.sharepoint.com/:x:/g/personal/pongsathon_s_nanyangtextile_com/IQCT8Ik6tm_rSJ74kTZpfy5nAVos858uy90ZcKh2ajlWPB4?e=CwjthY",
    },
}

EXCEL_COLUMNS = [
    "ID",
    "Employee ID",
    "Employee Name",
    "Type",
    "Grade",
    "Week",
    "CSA Start Date",
    "Due date",
    "Operation End (week)",
    "3 Days Resign",
    "Remaining days (working days)",
    "Non - Working Days",
    "Due date (week)",
    "Basic Start",
    "Basic End",
    "Operation Start",
    "Operation End",
    "Resign Date",
    "Transfers Date",
    "Graduate Eff",
    "On time",
    "Actual Status",
    "Comment",
    "Employees Leave",
    "Review",
    "Total Training Days",
]

# ── Jumper Monitoring Excel ───────────────────────────────────────────────────
JUMPER_EXCEL_SHARE_URL = (
    "https://nanyangtextilegroup-my.sharepoint.com/:x:/g/personal/"
    "pongsathon_s_nanyangtextile_com/"
    "IQAHEqX7lxxpQ4r-uut2iH1zAUd6690J0eIXZonGOcCjzJY?e=jPJ8AA"
)
JUMPER_SEW_TABLE  = "SewingOperatorCount" # ชื่อ Table จำนวน Sewing Operator
JUMPER_SEW_COLS   = ["BU", "Total"]

# BU key → Excel Table name (แต่ละ BU อยู่คนละ sheet)
JUMPER_BU_TABLES = {
    "G1":  "Jumper_G1",
    "G2":  "Jumper_G2",
    "G3":  "Jumper_G3",
    "G4":  "Jumper_G4",
    "EA":  "Jumper_EA",
    "TRM": "Jumper_TRM",
}

# คอลัมน์ใน table แต่ละ BU (ไม่มีคอลัมน์ BU — BU ได้จากชื่อ table)
JUMPER_EXCEL_COLS = [
    "Employee ID",
    "Employee Name",
    "Department",
    "Position",
    "Skill Count",
    "Expired Count",
    "Training Status",
]

GRADE_ALLOWED_WORKING_DAYS = {
    "B": 18,
    "C": 6,
    "D": 5,
    "E": 2,
}

# ── Trainer Monitoring Excel ──────────────────────────────────────────────────
TRAINER_EXCEL_SHARE_URL = (
    "https://nanyangtextilegroup-my.sharepoint.com/:x:/g/personal/"
    "pongsathon_s_nanyangtextile_com/"
    "IQCW0mCMNqBZSqtqevcc5wwsAYU-dtFGqH1f478vgj7qoXY?e=VMlBrv"
)
TRAINER_LIST_TABLE  = "TrainerListAll"
TRAINER_LIST_COLS   = ["EMPID", "Employee Name", "BU", "Status", "Position", "Score"]
TRAINER_SETUP_TABLE = "BUSetup"
TRAINER_SETUP_COLS  = ["BU", "Product Type", "Style", "Total Steps"]
TRAINER_TOP3_TABLE  = "top_3"
TRAINER_TOP3_COLS   = ["BU", "Product Type", "Style", "Total Steps"]
TRAINER_SKILL_COLS  = [
    "EMPID", "process_no", "gsd_code", "process_name", "machinetype",
    "grade", "smv", "amv", "last_update", "lead_time",
    "csa_approve", "expired", "eff", "PRODUCT_TYPE", "STYLE", "total_count",
]

# ── GICA Assessment Excel ─────────────────────────────────────────────────────
# Named tables per BU: GICA_G1, GICA_G3, … (auto-discovered via /workbook/tables).
# Each row has 15 test slots; latest non-empty result = current status.
GICA_EXCEL_SHARE_URL = (
    "https://nanyangtextilegroup-my.sharepoint.com/:x:/g/personal/"
    "pongsathon_s_nanyangtextile_com/"
    "IQB-f6_7UzyGRov5bH30_tdxAVl-clDmBoBC7151yPvXrrc?e=ZJzk6f"
)
GICA_TABLE_PREFIX = "GICA_"
GICA_MAX_TESTS    = 12
# Each test now has TWO sub-parts: result{i}-1/-2 (scores) + grade{i}-1/-2 (letters),
# plus a single date{i}. Meta columns add `level`. Order here is informational only —
# _read_excel_table maps by header name, so column order in Excel can differ.
GICA_COLS = ["bu", "empid", "name", "deptname", "level", "position", "start_date"] + [
    f"{field}{i}{suffix}"
    for i in range(1, GICA_MAX_TESTS + 1)
    for field, suffix in (
        ("result", "-1"), ("result", "-2"),
        ("grade", "-1"),  ("grade", "-2"),
        ("date", ""),
    )
]

# ── GICA frequency / expectation reference table (same workbook) ───────────────
# Maps (department, level, role) → how often a person is tested and the minimum
# grade each sub-test must reach to "pass". Lookup key = (deptname, level, position).
GICA_FREQ_TABLE = "Table_freq"
GICA_FREQ_COLS  = ["department", "level", "role", "frquency (months)",
                   "expectation1", "expectation2"]
# Grade ranking for pass comparison: a grade passes when its rank >= expectation rank.
GICA_GRADE_ORDER = {"A": 4, "B": 3, "C": 2, "D": 1}

# ── GICA per-BU KPI target tables (same workbook) ──────────────────────────────
# One small table per BU — row per Level, target is a plain percentage (e.g. 80 = 80%).
# Seeds the KPI Setup modal's per-BU tab defaults on load; sliders can still be
# adjusted in-session for "what if" simulation without writing back to Excel.
GICA_KPI_TABLES = {
    "G1": "kpi_g1", "G2": "kpi_g2", "G3": "kpi_g3",
    "G4": "kpi_g4", "EA": "kpi_ea", "TRM": "kpi_trm",
}
GICA_KPI_COLS = ["level", "target"]

# ── Audit Module Excel ────────────────────────────────────────────────────────
# Single workbook (Audit_Monitoring.xlsx), 4 named tables — BU is a column value,
# not a per-BU table suffix (unlike GICA).
AUDIT_EXCEL_SHARE_URL = (
    "https://nanyangtextilegroup-my.sharepoint.com/:x:/g/personal/"
    "pongsathon_s_nanyangtextile_com/"
    "IQC9YgGU-6C3RrBljKtGdQ_WAUNpvdkFs6zsAow0l9_6Q08?e=L3u7dr"
)

# NOTE: column lists below are the ACTUAL Excel table headers (verbatim, incl.
# spaces/punctuation) — _read_excel_table maps by header name, so these must
# match exactly what's in the workbook. The app's internal/API field names are
# clean (no spaces) and are translated to/from these real headers via
# AUDIT_FIELD_MAPS (see app.py's _audit_map_in/_audit_map_out) — the frontend
# and the rest of app.py only ever see the clean API field names.
# Template = a "Form" (Google/MS Forms model): a Code identifies the form
# across edits, Version increments on every edit (old version's rows get
# Active=FALSE and are kept for history, new version's rows get Active=TRUE).
# Category is one value per whole form (e.g. "CSA Process"), not a per-item
# sub-section — it's what populates the Audit Title dropdown in Audit Plan.
# No ScoreScale/Weight — every checklist item is rated at Execution time from
# a fixed enum (see AUDIT_EXECUTION_RATINGS), not a per-item custom scale.
# No BU — a Form applies across every BU, not scoped to one.
AUDIT_TEMPLATE_TABLE = "AuditTemplate"
# No row-level PK column (TemplateItemID/Template ID removed) — a checklist
# item row's real identity is the combination Code+Version+ItemNo, which is
# already enough to resolve "all items of this exact Form version" (joined
# from AuditPlan.AuditTitle/FormVersion) without a synthetic ID column.
AUDIT_TEMPLATE_COLS = [
    "Template Name", "Category", "Section",
    "Item No.", "Item Text", "Code", "Version", "Active",
    "Created By", "CreatedDate",
]

# Fixed rating scale applied to every checklist item during Execution — no
# weighted scoring, no Pass/Fail.
AUDIT_EXECUTION_RATINGS = [
    "Conformity", "Major Non-Conformity", "Minor Non-Conformity", "OFI",
]

AUDIT_PLAN_TABLE = "AuditPlan"
# FormVersion (replaces the old TemplateID FK) pins the exact Form *version*
# selected at creation time — joined against AuditTemplate by AuditTitle
# (= Category) + FormVersion (= Version), so Execution always uses the
# checklist as it existed when the Plan was created, even if the Form is
# edited (new version) afterward.
AUDIT_PLAN_COLS = [
    "PlanID", "BU", "Department", "FormVersion", "AuditTitle",
    "ScheduledDate", "Auditor1", "Auditor2", "Auditor3", "Status", "CreatedBy",
]  # no CreatedAt column in the actual table; up to 3 auditors instead of 1 AuditorName
# Notes column removed from AuditPlan (both Excel and here) — was unused.

AUDIT_EXECUTION_TABLE = "AuditExecution"
# ItemNo (replaces the old TemplateItemID FK) identifies the checklist item
# within the Plan's pinned Form version (AuditPlan.AuditTitle+FormVersion) —
# see AUDIT_PLAN_COLS comment above.
# No HasFinding column (removed) — the rating itself (AUDIT_EXECUTION_RATINGS)
# already says whether an item is a finding (any non-Conformity rating), so a
# separate yes/no checkbox was redundant. A Finding is opened explicitly via
# POST /api/audit/findings when an auditor decides one is warranted.
#
# ActualResult is a NEW Excel column (add it right after Score in the actual
# workbook before deploying this version). Score is the immutable rating
# recorded at audit time and never changes again. ActualResult starts out as a
# copy of Score, but flips to "Conformity" the moment the Finding it produced
# gets Approved (see _do_audit_finding_approve in app.py) — it reflects the
# CURRENT state of the item, not the original finding. Dashboard "Overall
# Score" reads ActualResult (not Score) so it shows up-to-date compliance.
AUDIT_EXECUTION_COLS = [
    "ExecutionID", "PlanID", "ItemNo", "Score", "ActualResult", "Comment", "ExecutedBy",
]  # no ExecutedAt column in the actual table

AUDIT_FINDING_TABLE = "AuditFinding"
# PreventiveAction is a NEW Excel column (add it between CorrectiveAction and
# "Responsible Person" in the actual workbook before deploying this version).
# "ClosedBy"/"ClosedDate"/"Notes" Excel columns are repurposed as
# ApprovedBy/ApprovedAt/ApproverComment — no rename needed in Excel, only the
# API field names changed (see AUDIT_FIELD_MAPS['finding'] below).
AUDIT_FINDING_COLS = [
    "FindingID", "PlanID", "ExecutionID", "BU", "Severity", "Description",
    "RootCause", "CorrectiveAction", "PreventiveAction",
    "Responsible Person", "Due Date", "Status",
    "OpenedBy", "OpeneDate", "RespondedBy", "ClosedBy", "ClosedDate", "Notes",
]

# key -> (table_name, cols, key_col) — looped over for parallel fetch and for
# the generic graph_excel CRUD helpers (see graph_excel.py). key_col names are
# identical between the API and the real Excel header for all 4 tables (no
# spaces in any *ID column / in "Code"), so no mapping is needed for these.
# For plan/execution/finding, key_col IS a real unique-per-row PK. For
# template it is NOT — see the comment on that entry below.
AUDIT_TABLES = {
    # "template"'s 3rd element is NOT a unique-per-row PK (Code repeats across
    # every item row of the same Form) — it's only a "is this row populated"
    # sentinel column for get_table_rows_by_key's read-side filter. Writes to
    # AuditTemplate go through append_row/update_row_by_index instead of the
    # generic create_row/update_row_by_key, which both require uniqueness.
    "template":  (AUDIT_TEMPLATE_TABLE,  AUDIT_TEMPLATE_COLS,  "Code"),
    "plan":      (AUDIT_PLAN_TABLE,      AUDIT_PLAN_COLS,      "PlanID"),
    "execution": (AUDIT_EXECUTION_TABLE, AUDIT_EXECUTION_COLS, "ExecutionID"),
    "finding":   (AUDIT_FINDING_TABLE,   AUDIT_FINDING_COLS,   "FindingID"),
}

# key -> {api_field_name: real_excel_header} — translation table used by
# app.py's _audit_map_in (API → Excel, for writes) and _audit_map_out
# (Excel → API, for reads). Keeps every API/JSON field name space-free and
# stable even though the underlying Excel headers have spaces/punctuation/typos.
AUDIT_FIELD_MAPS = {
    "template": {
        "TemplateName":   "Template Name",
        "Category":       "Category",
        "ItemNo":         "Item No.",
        "ItemText":       "Item Text",
        "Code":           "Code",
        "Version":        "Version",
        "Active":         "Active",
        "Section":        "Section",
        "CreatedBy":      "Created By",
        "CreatedAt":      "CreatedDate",
    },
    "plan": {
        "PlanID":        "PlanID",
        "BU":            "BU",
        "Department":    "Department",
        "FormVersion":   "FormVersion",
        "AuditTitle":    "AuditTitle",
        "ScheduledDate": "ScheduledDate",
        "Auditor1":      "Auditor1",
        "Auditor2":      "Auditor2",
        "Auditor3":      "Auditor3",
        "Status":        "Status",
        "CreatedBy":     "CreatedBy",
    },
    "execution": {
        "ExecutionID":   "ExecutionID",
        "PlanID":        "PlanID",
        "ItemNo":        "ItemNo",
        "Score":         "Score",
        "ActualResult":  "ActualResult",
        "Comment":       "Comment",
        "ExecutedBy":    "ExecutedBy",
    },
    "finding": {
        "FindingID":         "FindingID",
        "PlanID":            "PlanID",
        "ExecutionID":       "ExecutionID",
        "BU":                "BU",
        "Severity":          "Severity",
        "Description":       "Description",
        "RootCause":         "RootCause",
        "CorrectiveAction":  "CorrectiveAction",
        "PreventiveAction":  "PreventiveAction",   # new Excel column
        "ResponsiblePerson": "Responsible Person",
        "DueDate":           "Due Date",
        "Status":            "Status",
        "OpenedBy":          "OpenedBy",
        "OpenedAt":          "OpeneDate",
        "RespondedBy":       "RespondedBy",
        # "ClosedBy"/"ClosedDate"/"Notes" are repurposed — Excel column names
        # unchanged; only the API-facing names changed to reflect the new flow.
        "ApprovedBy":        "ClosedBy",
        "ApprovedAt":        "ClosedDate",
        "ApproverComment":   "Notes",
    },
}

AUDIT_BUS = list(DEPARTMENTS.keys())

AUDIT_FINDING_STATUSES   = ["Open", "Responded", "Approved"]
AUDIT_FINDING_SEVERITIES = ["Minor", "Major", "Critical"]
# Plan status transitions:
#   Planned → Issued (auto, when execution has NC items)
#   → Pending Approval (auto, when auditee submits bulk Respond)
#   → Completed (auto, when auditor approves all findings)
#   Planned → Cancelled (manual, only while still Planned — see api_audit_cancel_plan)
# "Completed"/"Issued"/"Pending Approval" are not user-set — see app.py.
AUDIT_PLAN_STATUSES      = ["Planned", "Completed", "Issued", "Pending Approval", "Cancelled"]

# Maps execution rating → Finding severity for auto-created findings.
# OFI is excluded — it does not trigger Plan "Issued" status, so no Finding.
AUDIT_RATING_TO_SEVERITY = {
    "Major Non-Conformity": "Major",
    "Minor Non-Conformity": "Minor",
}
