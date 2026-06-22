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
    "IQB-f6_7UzyGRov5bH30_tdxAfELOuKcgkN9lChBvw_wr4E?e=srksPb"
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
