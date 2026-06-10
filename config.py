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
TRAINER_LIST_COLS   = ["Employee ID", "Employee Name", "BU", "Status"]
TRAINER_SETUP_TABLE = "BUSetup"
TRAINER_SETUP_COLS  = ["BU", "Product Type", "Style", "Total Steps"]
TRAINER_SKILL_COLS  = ["Employee ID", "Product Type", "Style", "grade", "expired", "eff"]
