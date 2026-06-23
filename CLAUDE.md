# New Operator Monitoring — Project Reference

เว็บแอปพลิเคชัน Flask สำหรับติดตามสถานะการฝึก New Operator ในโรงงาน Nan Yang Textile
ข้อมูลพนักงานเก็บใน Excel ไฟล์บน OneDrive และอ่าน/เขียนผ่าน Microsoft Graph API

---

## โครงสร้างไฟล์

```
New Operator Monitoring/
├── app.py                  # Flask app หลัก — routes ทั้งหมด + auth logic (~1467 บรรทัด)
├── config.py               # ค่าคงที่: CLIENT_ID, DEPARTMENTS, GICA_*, ONEDRIVE_FOLDER, ฯลฯ
├── business_rules.py       # Logic คำนวณ training status (due date, remaining days, etc.)
├── graph_excel.py          # Wrappers สำหรับ Microsoft Graph API (CRUD Excel table)
├── requirements.txt        # Flask, Flask-Session, msal, python-dotenv, requests
├── vercel.json             # Vercel deployment config
├── .env                    # Secrets (ห้าม commit — อยู่ใน .gitignore แล้ว)
├── .env.example            # Template สำหรับ .env
├── templates/
│   └── index.html          # SPA หน้าเดียว — HTML ทั้งหมด (multi-tab, ~813 บรรทัด)
├── static/
│   ├── css/styles.css      # Styles ทั้งหมด (~2639 บรรทัด)
│   └── js/app.js           # Frontend logic ทั้งหมด (~7603 บรรทัด)
└── docs/                   # เอกสาร guide สำหรับ CSA Manager
```

---

## สถาปัตยกรรม

### Backend (Flask)
- **SPA Pattern**: `GET /` serve `index.html` เพียงหน้าเดียว ทุก navigation ทำใน JS
- **Auth**: Microsoft OAuth2 (MSAL) — redirect ไป Azure AD แล้ว callback กลับมาที่ `/auth/callback`
- **Session storage**:
  - Local dev: filesystem (`SESSION_TYPE=filesystem`, `.flask_session/`)
  - Vercel: signed cookie (ตรวจจาก `VERCEL=1` env var อัตโนมัติ)
  - Cookie เก็บแค่ **refresh token** (~0.8 KB) เพื่อไม่ให้ cookie overflow
  - Access token เก็บใน process memory `_AT_CACHE` (dict `oid → {at, exp}`)
- **In-process caches** (TTL 5 นาที — หายเมื่อ cold start บน Vercel):
  - `_JUMPER_CACHE` — Jumper/Trainer JSON data
  - `_GICA_CACHE` — GICA assessment Excel data
  - `_JUMPER_EXCEL_CACHE`, `_TRAINER_EXCEL_CACHE` — Excel workbook caches

### Frontend (Vanilla JS)
- ไม่ใช้ framework — `static/js/app.js` เป็น plain JS ~7603 บรรทัด
- ใช้ Chart.js v4 (CDN) + `chartjs-plugin-annotation` สำหรับกราฟ
- ใช้ jsPDF (CDN) สำหรับ export PDF
- แบ่งเป็น tab หลัก 5 แท็บ: `newOperator`, `jumper`, `trainer`, `sewingOperator`, `gica`

### Data Source
| Tab | แหล่งข้อมูล | วิธีอ่าน |
|---|---|---|
| New Operator | Excel บน OneDrive (6 workbooks) | Graph API `/workbook/tables/{table}/rows` |
| Jumper Skill | JSON files บน OneDrive | Graph API `/children` → download แต่ละไฟล์ |
| Trainer Skill | รวมมาจาก Jumper data | แยกจาก `deptname === 'CSA พัฒนาทักษะ'` |
| Sewing Operator | รวมมาจาก Jumper data | ส่วนที่เหลือหลังแยก Trainer ออก |
| GICA | Excel เดียว (GICA.xlsx) บน OneDrive | Graph API `/workbook/tables` — auto-discover GICA_* tables ทีละ BU |

---

## Frontend Code Conventions ⚠️ อ่านก่อนแก้ `app.js` / `styles.css`

โปรเจ็คนี้วาง **Design System + Render Architecture** ไว้แล้ว
โค้ดใหม่ทุกชิ้นต้องเดินตาม convention นี้ **ห้ามถอยกลับไปเขียนแบบเก่า**

### 1. CSS Toolbox (Design System) — เขียน class ไม่ใช่ inline

**กฎเหล็ก:** ใช้ class จากคลังก่อนเสมอ ถ้า pattern ยังไม่มี → **เพิ่ม class ใหม่ในคลัง** แล้วค่อยใช้
ห้ามเขียน inline `style="..."` ที่ซ้ำกับ pattern ที่มีอยู่แล้ว

คลัง class หลัก (อยู่ใน `static/css/styles.css`):

| กลุ่ม | Class |
|---|---|
| Grid | `.stat-grid`, `.stat-grid--{3,4,5,6}` |
| Card | `.stat-card`, `.stat-card--row`, `.stat-card__label`, `.stat-card__value`, `.stat-card__value--flush` |
| Header | `.card-head`, `.chart-header` |
| Grade list | `.grade-list`, `.grade-row` |
| Utility | `.u-between`, `.u-muted`, `.u-mt-auto` |
| Dashboard | `.charts--flex`, `.card--chart`, `.card--section`, `.chart-canvas-wrap` |
| Table cell | `.drill-th`, `.drill-td` |
| Flip card | `.flip-card-wrap`, `.flip-card-inner`, `.flip-card-front`, `.flip-card-back`, `.flip-card-type`, `.is-flipped` |
| Progress bar | `.pbar`, `.pbar--6`, `.pbar--kpi`, `.pbar__fill`, `.pbar__kpi-marker` |
| Exp matrix | `.exp-cell`, `.exp-cell--empty`, `.exp-th`, `.exp-td--expect`, `.exp-badge`, `.exp-status` |
| GICA trend | `.gica-trend-row`, `.gica-trend-card`, `.gica-trend-canvas-wrap` |
| GICA layout | `.gica-subtab-bar`, `.gica-subtab-btn`, `.gica-flip-btn`, `.gica-dist-dual` |
| GICA history | `.gica-attempt-dots-modal__panel`, `.gica-attempt-charts-container`, `.gica-attempt-chart-block`, `.gica-attempt-stats`, `.gica-attempt-stats__col` |
| GICA compare | `.gica-compare-grid`, `.gica-compare-header`, `.gica-compare-cell` (div+grid ไม่ใช่ `<table>` เพื่อหลีกเลี่ยง global CSS leak) |
| GICA paired | `.gica-modal--paired-left`, `.gica-modal--paired-right` (side-by-side modal layout) |
| KPI BU tabs | `.gica-kpi-bu-tabs`, `.gica-kpi-bu-tab`, `.gica-kpi-bu-tab--active` |
| Container | `#gica-summary`, `#jtp-summary`, `#trainer-summary` (layout เป็น CSS ไม่ใช่ JS) |

**Known Issue:** Global unscoped `table { min-width:1050px; } th { background:var(--blue); }` ที่ ~line 1593 leak เข้าไปใน `<table>` ทุกตัว — workaround ด้วย div+grid (เช่น gica-compare) แต่ยังไม่ได้แก้ที่ root

**ห้าม:**
- ❌ `container.style.cssText = '...'` — layout ต้องอยู่ใน CSS rule (`#xxx-summary { ... }`)
- ❌ override default ของ class ด้วย inline — สร้าง **modifier** แทน (เช่น `--flush`)
- ❌ string constant สำหรับ style ใน JS

### 2. Render Architecture — Functional Core / Imperative Shell

ทุก dashboard render function แยกเป็น **4 ชั้น** (ทำแล้วครบใน GICA / Jumper / Trainer):

```
_computeXxx(data, ...)  → viewModel    [Pure] รับ data ทาง param, คำนวณทั้งหมด, คืน object
_xxxHtml(vm)            → HTML string  [Pure] รับแค่ vm, ไม่แตะ DOM, helper อยู่ใน scope นี้
_mountXxx(html, ...)    → DOM          [Shell] ที่เดียวที่แตะ DOM + side-effect ที่ต้องการ DOM
renderXxx()             → orchestrator [Public] ชื่อเดิม, ที่เดียวที่อ่าน global, ต่อ 3 ชั้น
```

**กฎของแต่ละชั้น:**
- `_compute` — รับ state ทาง **parameter เท่านั้น** ห้ามอ่าน global mutable (`_gicaData`, `_jumperRows`)
  อ่าน module **constant** ได้ (`GICA_GRADE_COLORS`, `BU_ORDER`) เพราะไม่เปลี่ยน → ยัง pure
- `_xxxHtml` — pure 100%: input เดียวกัน → output เดียวกัน, helper (`pBar`, `tip`, `miniBar`) นิยามใน scope
- `_mount` — `innerHTML` + งานที่ต้องรอ DOM
  ⚠️ `innerHTML` ลบ event listener ทุกตัว → ถ้า element มี event ของตัวเอง ต้อง re-wire ที่นี่
- `renderXxx` — orchestrator: `_mountXxx(_xxxHtml(_computeXxx(globals)))`

**ทดสอบ purity (mental check):** เรียก `_xxxHtml(vm)` 2 ครั้งด้วย vm เดิม ได้ HTML เหมือนกันไหม? ถ้าใช่ = ผ่าน

**ห้าม:**
- ❌ IIFE `(() => {...})()` ใน template literal — แยกเป็น named helper
- ❌ คำนวณ data ใน template literal (เช่น `.map()` ที่มี logic หนัก) — ย้ายเข้า `_compute`
- ❌ render function อ่าน global ตรงๆ — รับผ่าน parameter

### 3. ตัดสินใจไว้แล้ว — ไม่ทำ

- **ไม่ทำ State Management (Redux-style)** — module variable ที่มีอยู่ใช้เป็น state container ได้เลย
- **GICA ยังใช้ Excel/OneDrive** — แผนย้ายไป Supabase หลัง Assessment Schedule phase เสร็จ

### 4. Cache-busting (สำคัญ — ลืมบ่อย)

ทุกครั้งที่แก้ `app.js` หรือ `styles.css` ต้อง **bump `?v=` ใน `index.html`**
(ปัจจุบัน `styles.css?v=137`, `app.js?v=296`) ไม่งั้น browser cache ไฟล์เก่า

---

## Authentication Flow

### 3-Door Login System

หน้า login มี 3 ประตู ผู้ใช้เลือกก่อนเข้าระบบ:

| Door | ประตู | ต้องรหัสผ่าน? | ต้อง Microsoft Login? | Roles |
|---|---|---|---|---|
| CSA Sign In | CSA Dashboard | ไม่ | View Mode: ไม่ / Edit Mode: ใช่ (OAuth) | `csa_view`, `csa_user` |
| QE Sign In | GICA Dashboard | ใช่ (`QE_DOOR_PASSWORD`) | View Mode: ไม่ / Edit Mode: ไม่ (shared token) | `qe_view`, `qe_user` |
| Admin Sign In | CSA & GICA Dashboard | ใช่ (`ADMIN_DOOR_PASSWORD`) | ใช่ (OAuth + email check) | `admin` |

```
User → เลือก Door → ใส่ password (ถ้ามี)
     → POST /api/door-unlock → session["door_unlocked_{door}"] = True
     → View Mode: POST /manager-login หรือ /qe-view-login → shared token session
     → Edit Mode (CSA): GET /login?door=csa → Azure AD OAuth
     → Edit Mode (QE): POST /qe-edit-login → shared token + qe_user role
     → Admin: GET /login?door=admin → Azure AD OAuth + ADMIN_EMAIL check
```

### Session Types

| Role | วิธีเข้า | Token | อ่าน | เขียน |
|---|---|---|---|---|
| `csa_view` | CSA → View Mode | `MANAGER_REFRESH_TOKEN` | CSA tabs | ❌ |
| `csa_user` | CSA → Edit Mode (OAuth) | User's own token | CSA tabs | ✓ |
| `qe_view` | QE → View Mode | `MANAGER_REFRESH_TOKEN` | GICA tab | ❌ |
| `qe_user` | QE → Edit Mode | `MANAGER_REFRESH_TOKEN` | GICA tab | ✓ (GICA only) |
| `admin` | Admin → OAuth | User's own token | All tabs | ✓ |
| `manager` | Legacy (ไม่มีปุ่มแล้ว) | `MANAGER_REFRESH_TOKEN` | All tabs | ❌ |

**QE Edit Mode ใช้ `MANAGER_REFRESH_TOKEN` แทน per-user OAuth** เพราะ OneDrive sharing permissions
ทำให้ต้องเปิด access ให้ทีละคน — shared token หลีกเลี่ยงปัญหา 403 Access Denied

### Key Backend Functions

| Function | หน้าที่ |
|---|---|
| `_open_shared_token_session(role, display_name)` | สร้าง session ด้วย MANAGER_REFRESH_TOKEN — ใช้ทั้ง view-only และ QE edit |
| `get_valid_token(force_refresh)` | ดึง access token จาก cache หรือ refresh — handle token rotation |
| `require_writable(allowed_roles)` | Guard decorator ตรวจ role ก่อนอนุญาตเขียน |
| `_do_token_refresh(refresh_token)` | Raw HTTP refresh call (ไม่ใช้ MSAL) |

### Role-Based UI

- **Topbar title**: เปลี่ยนตาม door — `_applyRoleBrandTitle(role)` (re-apply หลัง language switch)
- **Role badge**: `_roleBadgeText(role)` → CSA (View Mode) / CSA (Edit Mode) / QE (View Mode) / QE (Edit Mode) / Admin Mode
- **Tab visibility**: CSA doors เห็นแค่ CSA tabs, QE doors เห็นแค่ GICA, Admin เห็นหมด

---

## API Routes

| Method | Path | Auth | หน้าที่ |
|---|---|---|---|
| GET | `/` | — | Serve SPA |
| GET | `/login` | door_unlocked | Redirect ไป Microsoft OAuth2 (ต้อง unlock door ก่อน) |
| GET | `/auth/callback` | — | รับ code → exchange token |
| GET | `/logout` | — | Clear session |
| POST | `/manager-login` | — | เปิด csa_view session ด้วย MANAGER_REFRESH_TOKEN |
| POST | `/qe-view-login` | door_unlocked_qe | เปิด qe_view session ด้วย MANAGER_REFRESH_TOKEN |
| POST | `/qe-edit-login` | door_unlocked_qe | เปิด qe_user session ด้วย MANAGER_REFRESH_TOKEN |
| POST | `/api/door-unlock` | — | ตรวจ password → set session flag |
| GET | `/api/me` | — | ดู auth status + user info + role |
| GET | `/api/departments` | — | List departments ทั้งหมด |
| GET | `/api/<dept>/employees` | ✓ | ดูพนักงานทั้งหมด (พร้อม calculated status) |
| GET | `/api/<dept>/employees/<id>` | ✓ | ดูพนักงานคนเดียว |
| POST | `/api/<dept>/employees` | ✓ writable | เพิ่มพนักงานใหม่ |
| PATCH | `/api/<dept>/employees/<id>` | ✓ writable | แก้ข้อมูลพนักงาน |
| GET | `/api/jumper-data` | — | ดึง Jumper/Trainer/SewingOperator data จาก OneDrive JSON |
| GET | `/api/jumper-excel` | — | Jumper data จาก Excel (cached 5 นาที) |
| GET | `/api/trainer-excel` | — | Trainer data จาก Excel (cached 5 นาที) |
| GET | `/api/gica-excel` | — | GICA assessment data จาก GICA.xlsx (cached 5 นาที) |
| POST | `/api/gica/<bu>/employees` | ✓ writable | เพิ่มพนักงาน GICA ใหม่ |
| PATCH | `/api/gica/<bu>/employees/<empid>/result` | ✓ writable | เพิ่ม/แก้ผลสอบ GICA |

---

## GICA Assessment Tab

### Overview
แท็บ GICA แสดงผลการ Assessment ของพนักงานตาม 2 sub-test ต่อรอบ:
- **Score (Measurement)** — sub-test 1: `result{i}-1`, `grade{i}-1`
- **Score (Inspection)** — sub-test 2: `result{i}-2`, `grade{i}-2`

พนักงาน "ผ่าน" เมื่อ grade ทั้งสองพอ expectation ที่กำหนดตาม role ใน `Table_freq`

### Sub-tabs
- **Performance** — KPI cards, grade donut, BU flip cards, trend charts, expectation matrix, quadrant analysis, employee table
- **Assessment Schedule** — 🚧 Under development

### Data Flow
```
GICA.xlsx (OneDrive — SharePoint)
  → /api/gica-excel
  → _fetch_gica_excel_data()       — auto-discover GICA_* tables + Table_freq + kpi_* tables (parallel, max_workers=3)
  → _build_gica_payload()          — pick latest attempt, build history[], match expectations
  → returns {employees, bus, freqTable, kpiDefaults}
  → _gicaData = {employees, bus}   — store ใน module variable
  → _gicaKpiTargets seeded from kpiDefaults
  → initGicaTab()                  — lazy-load ครั้งเดียว
  → renderGicaSummary() + charts + table
```

### Excel / Config
กำหนดใน `config.py`:

| Constant | Value |
|---|---|
| `GICA_EXCEL_SHARE_URL` | SharePoint sharing URL ของ GICA.xlsx |
| `GICA_TABLE_PREFIX` | `"GICA_"` — table per BU: `GICA_G1`, `GICA_G2`, ... |
| `GICA_MAX_TESTS` | `12` — จำนวน test slot สูงสุดต่อคน |
| `GICA_COLS` | `["bu","empid","name","deptname","level","position","start_date"] + result{i}-1/-2, grade{i}-1/-2, date{i}` สำหรับ i=1..12 |
| `GICA_FREQ_TABLE` | `"Table_freq"` — lookup expectation ตาม dept/level/role |
| `GICA_GRADE_ORDER` | `{A:4, B:3, C:2, D:1}` |
| `GICA_KPI_TABLES` | `{G1: "kpi_g1", G2: "kpi_g2", ...}` — per-BU KPI target tables |
| `GICA_KPI_COLS` | `["level", "target"]` |

### Employee Object (from API)
```json
{
  "bu": "G1",
  "empid": "...",
  "name": "...",
  "deptname": "...",
  "level": "Supervisor",
  "position": "...",
  "attempt": 3,
  "score": 0.85,
  "grade": "A",
  "score1": 0.90,
  "score2": 0.80,
  "grade1": "A",
  "grade2": "B",
  "exp1": "A",
  "exp2": "A",
  "passed": true,
  "freqMonths": 6,
  "lastDate": "2025-01-15",
  "nextDate": "2025-07-15",
  "nextType": "Review",
  "history": [
    { "n": 1, "score": 0.72, "score1": 0.75, "score2": 0.69, "grade": "B", "grade1": "B", "grade2": "B", "date": "2024-07-01" }
  ]
}
```

### Frontend Constants (app.js)
```javascript
GICA_GRADES       = ['A','B','C','D']
GICA_GRADE_RANK   = { A:4, B:3, C:2, D:1 }
GICA_GRADE_COLORS = { A:'#16a34a', B:'#2563eb', C:'#f59e0b', D:'#dc2626' }
GICA_GRADE_THRESH = { A:0.85, B:0.65, C:0.50, D:0.00 }
GICA_LEVEL_ORDER  = ['QEDM','AQEDM','DVM','ADVM','DPM','ADPM','Department Head','Supervisor*','Supervisor','Officer','Worker']
// GICA_BU_COLORS อ่านจาก CSS custom properties --bu-{BU} ณ runtime
```

### Frontend Functions (app.js)
| ฟังก์ชัน | ชั้น | หน้าที่ |
|---|---|---|
| `initGicaTab()` | Entry | Lazy-load, fetch API, seed KPI defaults, call all renders |
| `_computeGicaSummary(emps, busRaw, kpiTargets)` | Compute | KPI + BU cards + matrix + trend viewModel |
| `_gicaSummaryHtml(vm)` | HTML | HTML string ทั้งหมดของ summary row 1–3 + matrix |
| `_mountGicaSummary(html, vm)` | Mount | DOM + wire flip cards + matrix animation + Chart.js trend |
| `renderGicaSummary()` | Orchestrator | ต่อ 3 ชั้น |
| `renderGicaGradeDistChart()` | Chart | Dual-canvas grade distribution |
| `renderGicaInsideChart(mode)` | Chart | Inside data — 4 modes |
| `renderGicaScheduleChart()` | Chart | Upcoming test schedule stacked bar |
| `renderGicaTable()` | Table | Employee table paginated + filtered |
| `_wireGicaControls()` | Wire | Event handlers ทั้งหมดสำหรับ filter/toggle/pagination |
| `_gicaEmpTableMonthDots(e)` | Table | Monthly assessment dots (แทน per-attempt dots เดิม) |
| `_gicaShowAttemptDotsModal(empid)` | Modal | Assessment History: 3 Chart.js trend charts + stats panel |
| `_gicaAttemptStats(e)` | Pure | คำนวณ stats (total, pass/fail, streak, last/prev, avg, min/max) |
| `_gicaCompareTableHtml(s)` | Pure | div+grid Previous/Last/Diff comparison table |
| `_gicaOpenResultModal()` | Modal | Add Assessment Result (+ side-by-side Assessment History for QE) |
| `_gicaKpiListHtml(bu)` | Pure | KPI slider list per BU tab |
| `kpiPctFor(level, bu)` | Pure | Resolve KPI: BU-specific → all fallback → null |

### BU Flip Cards (Row 2)
- Front: **Score (Measurement)** — donut SVG + avg% ตรงกลาง + leader lines ต่อ grade
- Back: **Score (Inspection)** — รูปแบบเดียวกัน
- ปุ่ม ↻ ลอยอยู่มุมขวาบน (`position: absolute`) ไม่กินพื้นที่ grid
- Flip all: `wireFlipAll('#gica-flip-all', '.flip-card-wrap[data-bu]', ...)`

### Trend Mini-Cards (Row 3)
- หนึ่งการ์ดต่อ BU วางตรงข้ามกับ flip card ข้างบน (`stat-grid--6` row แยก)
- แสดงทั้ง Measurement + Inspection เป็น 2 เส้นใน Chart.js line chart เดียว
- X-axis: attempt #1–maxLen (capped at BU's actual max attempt count), Y-axis: 0–100% (stepSize 20)
- Carry-forward: ค่าสุดท้ายลากต่อถึง maxLen (ไม่เกิน 12, ไม่เกินจำนวนครั้งสูงสุดจริงของ BU)

### Expectation Matrix
- หน้า Level × BU: แสดง % ผ่านต่อ level+BU
- หน้า Department × BU: flip ด้วย scale+fade animation
- คลิก cell → modal รายชื่อพนักงาน
- KPI marker: `<div class="pbar__kpi-marker">` ที่ % ที่ตั้งไว้ใน KPI Setup modal
- ปุ่ม Table_freq reference: ไอคอนเอกสารข้าง KPI Setup — แสดง modal ตาราง freq

### KPI Setup
- `_gicaKpiTargets` structure: `{level: {all: pct, [bu]: pct}}`
- BU tab bar: All BU + per-BU tabs — ตั้งค่า slider แยกแต่ละ BU ได้
- ตั้งค่าที่ All BU → ทุก BU ใช้ค่าเดียวกัน (frontend sync)
- Defaults seed จาก `kpiDefaults` ใน API response (อ่านจาก `kpi_g1`...`kpi_trm` tables)

### Quadrant Analysis
- `quad` determination uses raw scores (`rx`/`ry`) ไม่ใช่ jittered coordinates (`x`/`y`)
- Jitter ±1.5% ใช้แค่สำหรับ visual scatter ป้องกันจุดซ้อน

### Assessment History Modal
- เปิดจาก Assessment Result column ใน employee table
- **3 Chart.js line charts** แถวบน: Measurement / Inspection / Average
  - X-axis คงที่ #1–12, แสดงเฉพาะ attempts ที่มีข้อมูล
  - เส้น pass-threshold จาก `chartjs-plugin-annotation` (ตาม exp1/exp2)
- **Statistics panel** แถวล่าง: 3 columns
  - Column 1: Summary (total attempts, pass/fail, streak)
  - Column 2: Compare table (Previous / Last / Diff) — div+grid layout
  - Column 3: Overall (avg, min, max)
- QE Edit Mode: เปิด side-by-side กับ Add Assessment Result modal

### Vercel Throttling Fix
Graph API rate limit เมื่อ parallel requests หลาย table พร้อมกัน:
- `_fetch_gica_excel_data`: `max_workers=3` (ไม่ใช้ len(tables))
- Retry 3 ครั้งด้วย backoff 1.5s / 3s ถ้า request fail

### Assessment Schedule Timeline — Calculation Logic ⚠️ ห้ามแก้โดยไม่อ่านส่วนนี้ก่อน

กราฟแสดง 12 buckets (−5 ถึง +6 จากปัจจุบัน) ในโหมด รายสัปดาห์ หรือ รายเดือน

#### กฎธุรกิจ
1. พนักงานใหม่ → ต้องสอบภายใน 1 สัปดาห์หลังเข้างาน
2. สอบไม่ผ่าน → ต้องสอบซ้ำภายใน 1 สัปดาห์
3. สอบผ่าน → นัดทบทวนอีก 1 เดือน

**ไม่มีแนวคิด "Late"** — มองเป็น period: คนมาสอบหรือไม่มาสอบเท่านั้น

#### 3 datasets ในกราฟ (grouped bar, Chart.js stack groups)
| Dataset | stack group | สี | ความหมาย |
|---|---|---|---|
| `จำนวนต้องสอบ` | `'total'` | `#64748b` | ยอดรวมทุกคนที่ต้องสอบ period นั้น |
| `On-time (ผ่าน)` | `'ontime'` | `#16a34a` | มาสอบแล้ว **ผ่าน** |
| `On-time (ไม่ผ่าน)` | `'ontime'` | `#86efac` | มาสอบแต่ **ไม่ผ่าน** |
| `Overdue` | `'overdue'` | `#dc2626` | ถึงกำหนดแต่ไม่มาสอบ |

#### การตัดสิน pass/fail ต่อ attempt (ใน history loop)
```javascript
const attemptPassed = h.grade1 && h.grade2 && e.exp1 && e.exp2 &&
  (GICA_GRADE_RANK[h.grade1] || 0) >= (GICA_GRADE_RANK[e.exp1] || 0) &&
  (GICA_GRADE_RANK[h.grade2] || 0) >= (GICA_GRADE_RANK[e.exp2] || 0);
```
`h.grade1/2` = grade จาก history entry, `e.exp1/2` = expectation จาก employee object (role-based)

#### Overdue cascade logic
สำหรับคน `e.schedStatus === 'overdue'` (scheduledNext แต่ยังไม่สอบ):
- วน bucket ตั้งแต่ที่ scheduledNext ตก (skip ก่อนหน้า)
- `isFuture === true` → หยุด (ไม่แสดงในอนาคตที่ยังไม่ถึง)
- `end < today` → `overdue++` (สัปดาห์/เดือนผ่านไปแล้ว)
- `end >= today && !isFuture` → `upcoming++` (สัปดาห์ปัจจุบัน ยังไม่จบ ยังไม่ overdue)
- **Double-count guard (monthly mode)**: ถ้า lastDate อยู่ใน bucket เดียวกันกับ scheduledNext → `continue` เพราะ history loop นับ onTime ใน bucket นั้นไปแล้ว

#### ฟังก์ชันหลัก (app.js)
| ฟังก์ชัน | หน้าที่ |
|---|---|
| `_gicaSchedBuckets(today, mode)` | สร้าง 12 buckets (week/month) |
| `_gicaSchedBucketIdx(iso, buckets)` | หา index ของ bucket ที่ date ตก |
| `_computeGicaSchedule(emps, today, mode)` | คำนวณ timeline viewModel — **pure** |
| `_gicaScheduleHtml(vm)` | สร้าง HTML — **pure** |
| `_mountGicaSchedule(html, vm)` | mount DOM + Chart.js |

---

## Jumper Skill Tab

### Data Flow
```
CSA co NiSE project
  → npm run fetch       (ดึงจาก NiSE ระบบ HR)
  → npm run push        (อัปโหลด data_*.json ขึ้น OneDrive)
  → /api/jumper-data    (Flask อ่านจาก OneDrive ผ่าน MANAGER_REFRESH_TOKEN)
  → JavaScript render   (Summary cards, Charts, Table)
```

### OneDrive path ของ Jumper files
```
1. Project/CSA (Center of Skill Acquisition)/New Operator Monitoring/jumper-data/
  data_jumper_G1.json          ← Jumper employees per BU
  data_allEmployees_G1.json    ← All employees (แยก trainer/employee ใน Python)
  data_sewingOperatorSkill_G1.json ← Sewing operator count (ใช้คำนวณ target)
  ... (ซ้ำสำหรับ G2, G3, G4, NYV/EA, TRM)
```

### Cache
- `_JUMPER_CACHE` — in-process dict TTL 5 นาที

### Frontend components
| ฟังก์ชัน | หน้าที่ |
|---|---|
| `initJumperTab()` | Lazy-load ครั้งเดียว ต่อ session, fetch `/api/jumper-data` |
| `normalizeJumperRows(byBu)` | Flatten `{bu: rows[]}` → flat array |
| `renderJumperSummaryCards()` | 3-row summary: KPI cards, BU mini-cards, Training donuts |
| `_makeJumperBarChart()` | Chart.js bar chart (จำนวนคน, avg skill) |
| `_makeJumperPositionChart()` | Stacked bar พร้อม target gap (Center 2.5%, Inline 5.0%) |
| `renderJumperTable()` | ตาราง sortable + paginated + 3 filters |
| `JT_PROD` / `window._JTP` | Training progress tracker — SVG donut, persist ใน localStorage |

---

## Environment Variables

ต้องมีใน `.env` (local) หรือ Vercel Environment Variables (production):

| Variable | หน้าที่ | จำเป็น? |
|---|---|---|
| `CLIENT_ID` | Azure App Registration client ID | ✓ |
| `CLIENT_SECRET` | Azure App Registration client secret | ✓ |
| `TENANT_ID` | Azure AD tenant ID | ✓ |
| `FLASK_SECRET_KEY` | Secret key สำหรับ sign session cookie | ✓ |
| `REDIRECT_URI` | OAuth2 callback URL | ✓ |
| `MANAGER_REFRESH_TOKEN` | Refresh token สำหรับ view-only sessions + QE edit + Jumper + GICA data | ✓ |
| `QE_DOOR_PASSWORD` | รหัสผ่านประตู QE Sign In | ✓ |
| `ADMIN_DOOR_PASSWORD` | รหัสผ่านประตู Admin Sign In | ✓ |
| `ADMIN_EMAIL` | Email ที่อนุญาตให้เข้า Admin (case-insensitive) | ✓ |
| `SESSION_TYPE` | `filesystem` (local เท่านั้น) — ไม่ใส่บน Vercel | local only |

**ข้อสำคัญ**:
- `REDIRECT_URI` ต้องตรงกับที่ลงทะเบียนไว้ใน Azure App Registration
  - Local: `http://localhost:5000/auth/callback`
  - Vercel: `https://<your-app>.vercel.app/auth/callback`
- Door passwords ต้องตั้งผ่าน env var เท่านั้น — **ห้ามใส่ default ใน code**
- เปลี่ยน door passwords ได้ตลอดเวลาผ่าน env var (Vercel dashboard หรือ .env)

---

## Departments (BU)

กำหนดใน `config.py`:

| Key | Label | Excel Workbook |
|---|---|---|
| G1 | G1 | CSA Monitoring Report_G1_for App.xlsx |
| G2 | G2 | CSA Monitoring Report_G2_for App.xlsx |
| G3 | G3 | CSA Monitoring Report_G3_for App.xlsx |
| G4 | G4 | CSA Monitoring Report_G4_for App.xlsx |
| TRM | TRM | CSA Monitoring Report_TRM_for App.xlsx |
| EA | EA | CSA Monitoring Report_EA_for App.xlsx |

Excel ไฟล์อยู่ที่ OneDrive: `1. Project/CSA (Center of Skill Acquisition)/New Operator Monitoring/`
(path นี้กำหนดใน `config.py` → `ONEDRIVE_FOLDER`)

---

## Business Rules (business_rules.py)

คำนวณ training status ของพนักงานแต่ละคน:

| Grade | Allowed Working Days |
|---|---|
| B | 18 วัน |
| C | 6 วัน |
| D | 5 วัน |
| E | 2 วัน |

**Status ที่เป็นไปได้**: `Not Started`, `On Track`, `Warning` (≤2 วัน), `Overdue`, `Completed`, `Resigned`, `Transferred`

ฟังก์ชันหลัก: `calculate_status(record, holidays, today)` — คืน dict ที่มี `due_date`, `remaining_days`, `progress`, `status`, `on_time`

---

## Local Development

```bash
# 1. สร้าง .env จาก template
cp .env.example .env
# แล้วใส่ค่าจริงใน .env

# 2. สร้าง virtual environment
python -m venv .venv
.venv\Scripts\activate  # Windows

# 3. ติดตั้ง dependencies
pip install -r requirements.txt

# 4. รันแอป
python app.py
# เปิดที่ http://localhost:5000
```

---

## Vercel Deployment

### สิ่งที่ต้องทำก่อน deploy

1. **Azure App Registration**: เพิ่ม Vercel URL เป็น Redirect URI
   - ไปที่ Azure Portal → App registrations → Authentication
   - เพิ่ม `https://<your-app>.vercel.app/auth/callback`

2. **Vercel Environment Variables**: ตั้งค่าในหน้า Vercel dashboard (Settings → Environment Variables)
   ```
   CLIENT_ID=...
   CLIENT_SECRET=...
   TENANT_ID=...
   FLASK_SECRET_KEY=...  (ใช้ random string ยาวๆ)
   REDIRECT_URI=https://<your-app>.vercel.app/auth/callback
   MANAGER_REFRESH_TOKEN=...
   QE_DOOR_PASSWORD=...
   ADMIN_DOOR_PASSWORD=...
   ADMIN_EMAIL=...
   ```
   **อย่าใส่ `SESSION_TYPE`** — Vercel ใช้ cookie session อัตโนมัติ

3. `vercel.json` และ `requirements.txt` ครบแล้ว ไม่ต้องแก้อะไร

### ข้อจำกัดบน Vercel
- Vercel เป็น **serverless** — ไม่มี persistent filesystem
  - `_AT_CACHE`, `_JUMPER_CACHE`, `_GICA_CACHE` หายเมื่อ cold start (ปกติ) — แค่ทำให้ช้าขึ้น 1 request
  - ห้ามใช้ `SESSION_TYPE=filesystem` บน Vercel (ไม่มีที่เขียนไฟล์)
- ไม่ต้อง restart server เมื่ออัปเดต Jumper/GICA data — cache TTL 5 นาที

---

## ความสัมพันธ์กับโปรเจ็คอื่น

โปรเจ็คนี้เป็น **consumer** ของข้อมูลจาก `CSA co NiSE` (โปรเจ็คแยก):
- `CSA co NiSE` ดึงข้อมูลจากระบบ NiSE แล้วอัปโหลดขึ้น OneDrive (`npm run fetch && npm run push`)
- โปรเจ็คนี้อ่านไฟล์เหล่านั้นผ่าน `/api/jumper-data` เพื่อแสดงแท็บ Jumper Skill
- ทั้งสองโปรเจ็คใช้ `MANAGER_REFRESH_TOKEN` ตัวเดียวกัน (ควร copy ค่าเดียวกัน)
