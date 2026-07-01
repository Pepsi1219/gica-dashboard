# New Operator Monitoring — Project Reference

เว็บแอปพลิเคชัน Flask สำหรับติดตามสถานะการฝึก New Operator ในโรงงาน Nan Yang Textile
ข้อมูลพนักงานเก็บใน Excel ไฟล์บน OneDrive และอ่าน/เขียนผ่าน Microsoft Graph API

---

## โครงสร้างไฟล์

```
New Operator Monitoring/
├── app.py                  # Flask app หลัก — routes ทั้งหมด + auth logic (~1600 บรรทัด)
├── config.py               # ค่าคงที่: CLIENT_ID, DEPARTMENTS, GICA_*, ONEDRIVE_FOLDER, ฯลฯ
├── business_rules.py       # Logic คำนวณ training status (due date, remaining days, etc.)
├── graph_excel.py          # Wrappers สำหรับ Microsoft Graph API (CRUD Excel table)
├── kv_store.py             # L2 shared cache — REST wrapper สำหรับ Vercel KV / Upstash Redis
├── requirements.txt        # Flask, Flask-Session, msal, python-dotenv, requests
├── vercel.json             # Vercel deployment config
├── .env                    # Secrets (ห้าม commit — อยู่ใน .gitignore แล้ว)
├── .env.example            # Template สำหรับ .env
├── templates/
│   └── index.html          # SPA หน้าเดียว — HTML ทั้งหมด (multi-tab, ~1036 บรรทัด)
├── static/
│   ├── css/styles.css      # Styles ทั้งหมด (~2760 บรรทัด)
│   └── js/app.js           # Frontend logic ทั้งหมด (~9874 บรรทัด)
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
- **Caching: L1 (in-process) → L2 (shared KV) → live Graph API fetch** — ทุก read endpoint (New Operator, Jumper, Trainer, GICA) เดินตาม pattern เดียวกัน TTL 300 วินาทีทั้ง 2 ชั้น:
  1. L1 = in-process dict ต่อ instance — เร็วสุด, ฟรี, หายเมื่อ cold start บน Vercel
  2. L2 = Vercel KV / Upstash Redis ผ่าน [`kv_store.py`](kv_store.py) (`kv_get`/`kv_set`/`kv_delete`, REST API ผ่าน `requests` — ไม่เพิ่ม dependency ใหม่) — shared ข้าม serverless instance กัน Graph API ถูกยิงซ้ำซ้อนตอนหลาย instance cold start พร้อมกัน
  3. ถ้า KV ไม่พร้อม (env var ไม่ครบ/network error) `kv_store.py` คืน `None`/`False` เงียบๆ ทุกฟังก์ชัน — caller fallback ไป Graph API ตรงเสมอ **ไม่มีทางที่ KV ล่มแล้วทำให้แอปพัง**

  | Module | L1 dict | L2 KV key | Write invalidation |
  |---|---|---|---|
  | New Operator | `_NEWOP_CACHE[dept_key]` (raw rows ก่อนคำนวณ `calculated`) | `newop_employees_{dept_key}` | ✓ หลัง POST/PATCH `/api/<dept>/employees` |
  | Jumper Skill | `_JUMPER_EXCEL_CACHE` | `jumper_excel` | — (read-only) |
  | Trainer Skill | `_TRAINER_EXCEL_CACHE` | `trainer_excel` | — (read-only) |
  | GICA | `_GICA_CACHE` | `gica_excel` | ✓ หลัง POST `/api/gica/<bu>/employees`, PATCH `.../result` |
  | Audit | `_AUDIT_CACHE` | `audit_excel` | ✓ หลังทุก write ของ Audit (`/api/audit/templates/forms`, `/plans`, `/executions`, `/findings`, `/respond`, `/close`) |
  | ~~`_JUMPER_CACHE`~~ | — | — | ⚠️ **legacy/dead** — รองรับ `/api/jumper-data` (JSON flow เดิม) ที่ frontend ไม่เรียกใช้แล้ว ไม่มี L2 ไม่ต้อง migrate |

  ⚠️ **แก้ไฟล์ Excel ตรงบน OneDrive (ไม่ผ่านแอป) ระบบไม่มีทางรู้** เพราะไม่มี webhook/polling ติดไฟล์ — ต้องรอ TTL หมดอายุทั้ง L1+L2 (สูงสุด 5 นาที) นี่คือ behavior เดิมตั้งแต่ก่อนมี KV ไม่ใช่สิ่งที่ KV ทำให้แย่ลง

- **Force Refresh** (ปุ่มฉุกเฉิน, แสดงเฉพาะ Admin Sign In ใน Admin Settings modal ใต้ "Configure Special Holidays"): ล้าง L1+L2 ของทุก module พร้อมกันในคลิกเดียว สำหรับกรณีแก้ Excel ตรงแล้วไม่อยากรอ TTL — cooldown 300 วินาทีต่อครั้ง เก็บ timestamp ไว้ใน **KV** (`force_refresh_last_at`, ไม่ใช่ in-process) เพื่อให้ cooldown ถูกต้องข้าม serverless instance ด้วย ดู `/api/admin/force-refresh` (POST), `/api/admin/force-refresh-status` (GET) ใน `app.py`

### Frontend (Vanilla JS)
- ไม่ใช้ framework — `static/js/app.js` เป็น plain JS ~9900+ บรรทัด
- ใช้ Chart.js v4 (CDN) + `chartjs-plugin-annotation` สำหรับกราฟ
- ใช้ jsPDF (CDN) สำหรับ export PDF
- แบ่งเป็น tab หลัก 6 แท็บ: `newOperator`, `jumper`, `trainer`, `sewingOperator`, `gica`, `audit`

### Data Source
| Tab | แหล่งข้อมูล | Endpoint | วิธีอ่าน |
|---|---|---|---|
| New Operator | Excel บน OneDrive (6 workbooks) | `/api/<dept>/employees` | Graph API `/workbook/tables/{table}/rows` |
| Jumper Skill | `Jumper_Monitoring.xlsx` (tables `Jumper_G1...Jumper_TRM` + `SewingOperatorCount`) | `/api/jumper-excel` | Graph API `/workbook/tables` — อ่านแยก table ต่อ BU แบบ parallel |
| Trainer Skill | `Trainer_Monitoring.xlsx` (tables `TrainerListAll`, `BUSetup`, `top_3`) | `/api/trainer-excel` | Graph API `/workbook/tables` |
| Sewing Operator | มาจาก table `SewingOperatorCount` ใน `Jumper_Monitoring.xlsx` (ส่วนหนึ่งของ payload `/api/jumper-excel`) | `/api/jumper-excel` | อ่านพร้อมกับ Jumper Skill |
| GICA | Excel เดียว (GICA.xlsx) บน OneDrive | `/api/gica-excel` | Graph API `/workbook/tables` — auto-discover GICA_* tables ทีละ BU |
| Audit | Excel เดียว (`Audit_Monitoring.xlsx`) บน OneDrive, 4 table ไม่แบ่งตาม BU | `/api/audit-excel` | Graph API `/workbook/tables` — อ่าน 4 table (`AuditTemplate`/`AuditPlan`/`AuditExecution`/`AuditFinding`) แบบ parallel ดูรายละเอียดที่ [Audit Module](#audit-module) |

> ทุก endpoint ในตารางนี้ผ่าน **L1 (in-process) → L2 (KV) → Graph API** ก่อนถึงจะ "วิธีอ่าน" ที่ระบุ — ดู [Caching](#backend-flask) ด้านบนสำหรับ cache key ของแต่ละ module

> ⚠️ **`/api/jumper-data`** (JSON-files-based flow เดิม จากยุค CSA co NiSE push JSON ขึ้น OneDrive) ยังอยู่ในโค้ดแต่ **frontend ไม่เรียกใช้แล้ว** — Jumper/Trainer/Sewing Operator ทั้งหมดอ่านจาก Excel โดยตรงผ่าน `/api/jumper-excel` และ `/api/trainer-excel` ตามตารางด้านบน ดู `config.py` (`JUMPER_EXCEL_SHARE_URL`, `TRAINER_EXCEL_SHARE_URL`) สำหรับ config จริง

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
| Audit Create Form modal | `.audit-form-modal__panel`, `.audit-form-modal__body`, `.audit-form-modal__footer`, `.audit-btn`, `.audit-btn--cancel`, `.audit-btn--confirm` — **เจตนาแยกจาก `.gica-kpi-*`** ไม่ใช้ปนกัน แม้หน้าตาคล้าย KPI Setup modal |
| Audit Trend KPI Setup | `.audit-kpi-setup-btn`, `.audit-kpi-modal__panel`, `.audit-kpi-modal__body`, `.audit-kpi-modal__desc`, `.audit-kpi-row`, `.audit-kpi-row__label`, `.audit-kpi-row__val`, `.audit-kpi-slider` — เหตุผลเดียวกับ Create Form modal (ของตัวเอง ไม่ปนกับ `.gica-kpi-*`) ส่วน modal scaffold (`.gica-modal`, `.gica-modal__backdrop/__panel/__head/__close/__body`) กับปุ่ม footer (`.audit-btn*`) reuse ของเดิมตรงๆ เพราะเป็น generic infra ไม่ใช่ฟีเจอร์เฉพาะ GICA |
| Stat card sub list modifier | `.stat-card__sub--flush` (ไม่มี border-top/margin-top) — ใช้เมื่อ `.stat-card__sub` เป็น element แรกในการ์ด (ไม่มีอะไรอยู่เหนือมันให้คั่น) |
| Container | `#gica-summary`, `#jtp-summary`, `#trainer-summary` (layout เป็น CSS ไม่ใช่ JS) |

**Known Issue:** Global unscoped `table { min-width:1050px; } th { background:var(--blue); }` ที่ ~line 1593 leak เข้าไปใน `<table>` ทุกตัว — workaround ด้วย div+grid (เช่น gica-compare) แต่ยังไม่ได้แก้ที่ root

**Trap:** `.stat-card__sub-row strong { font-size:16px }` / `span { font-size:11px }` เป็นค่า hardcode
ไว้สำหรับ use case เดิมที่ตั้งใจให้ตัวเลขเด่น (เคยใช้ผิด context ในการ์ด Audit Dashboard row 2-4 มาแล้วรอบหนึ่ง
ตัวเลขเลยใหญ่เกินสัดส่วน) ถ้าต้องการ label+value แบบเล็กเท่ากันทั้งคู่ (เช่น breakdown 3-5 แถวในการ์ดเล็ก) ให้ใช้
`.u-between` พร้อม inline `font-size:0.74rem` บนตัว row แทน (pattern ของการ์ด "Total employees" ใน GICA,
`_gicaSummaryHtml`) — ไม่ใช่ `.stat-card__sub-row`

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
- **กำลังจะย้าย Audit/CSA/GICA ไป Supabase** — ดู [Supabase Migration Plan](#supabase-migration-plan-planned)
  ด้านล่าง (แทนที่แผนเดิมที่เขียนว่า "ย้าย GICA หลัง Assessment Schedule")

### 4. Cache-busting (สำคัญ — ลืมบ่อย)

ทุกครั้งที่แก้ `app.js` หรือ `styles.css` ต้อง **bump `?v=` ใน `index.html`**
(ปัจจุบัน `styles.css?v=172`, `app.js?v=385`) ไม่งั้น browser cache ไฟล์เก่า

---

## Supabase Migration Plan (Planned)

⚠️ **ยังไม่เริ่มลงมือ** — นี่คือทิศทางที่ตกลงกันแล้ว รอคำสั่งเริ่มจากผู้ใช้ทีละ Phase
ถ้ากำลังจะแก้ Audit/CSA/GICA ให้อ่านส่วนนี้ก่อนเพื่อไม่ทำงานสวนทางแผน

### เป้าหมาย
ย้าย data ของ **Audit → CSA → GICA** (ตามลำดับนี้) จาก Excel/OneDrive ไป **Supabase PostgreSQL**
และแทนที่ **auth ผู้ใช้ทั้งหมด** (Microsoft OAuth + 3-Door password + `MANAGER_REFRESH_TOKEN` ในฐานะ
login) ด้วย **Supabase Auth (email/password)**

**Jumper / Trainer ยังไม่ย้าย** — data ต้นทางมาจากระบบ NiSE ผ่านโปรเจ็ค `CSA co NiSE` (คนละ repo)
ที่ push ขึ้น Excel แอปนี้อ่านอย่างเดียว การย้ายต้องแก้ repo นั้นด้วย เลยเลื่อนเป็น Phase สุดท้าย (ตัดสินใจทีหลัง)
→ `MANAGER_REFRESH_TOKEN` **ยังต้องเก็บไว้** เป็น service credential อ่าน Jumper/Trainer Excel (ไม่ใช่ auth ผู้ใช้แล้ว)

### การตัดสินใจที่ล็อกไว้แล้ว (ผู้ใช้เลือกเอง)
1. **Auth: แทน Microsoft OAuth ทั้งหมด** ด้วย Supabase email/password — ตัด MSAL/`/login`/`/auth/callback`,
   door password, `_AT_CACHE`, token rotation ทิ้ง Admin เลิกพึ่ง `ADMIN_EMAIL` env → ใช้ `role='admin'` ใน `profiles`
2. **Authorization ทำที่ Flask backend** — frontend ส่ง Supabase JWT มากับ write request (`Authorization: Bearer`),
   Flask verify ด้วย `SUPABASE_JWT_SECRET` → ดึง role จาก `profiles` → เช็คใน `require_writable` (เขียนใหม่)
   Flask คุย Supabase ด้วย **service key** (bypass RLS) — RLS เป็นแค่ defense-in-depth (anon อ่านได้/เขียนไม่ได้)
   Read request ไม่ต้องมี JWT ก็ได้ (anonymous อ่านปกติ)
3. **แยก role ตามโมดูล** — `csa_user` (CSA), `qe_user` (GICA), `qe_audit`/`qe_auditee` (Audit), `admin` (ทุกโมดูล)
   เก็บใน `profiles.role` (FK `auth.users`) ไม่มี account/ไม่ส่ง JWT = อ่านทุกโมดูลได้

### ลำดับ Phase
```
Phase 0 — Supabase project + profiles table + supabase_client.py + supabase_auth.py
Phase 1 — Audit (data → Supabase + auth cutover, เป็น proof-of-concept)
Phase 2 — CSA   (data → Supabase, role csa_user/admin)
Phase 3 — GICA  (data → Supabase, role qe_user/admin)
Phase 4 — Jumper/Trainer (ตัดสินใจทีหลัง — ต้องแก้ repo CSA co NiSE ด้วย)
```

### สิ่งที่เปลี่ยนต่อโมดูลตอนย้าย
- ลบ Graph API / Excel calls ของโมดูลนั้น + ลบ L2 KV cache ของโมดูลนั้น (L1 เบาๆ พอ, Supabase เร็ว)
- **Audit เฉพาะ:** ลบ translation layer ทั้งชุด (`_audit_map_in`/`_audit_map_out`, `AUDIT_FIELD_MAPS`,
  `AUDIT_*_COLS` ที่เป็นชื่อ Excel) — column ใน Supabase ตั้งชื่อสะอาด (snake_case) ตั้งแต่แรก
- **GICA เฉพาะ:** test history 60 columns แบน → เก็บใน `tests JSONB` array แทน
- **CSA เฉพาะ:** 6 workbook แยก dept → 1 table `csa_employees` มี column `bu` (query ข้าม BU ได้ทันที)
- ต้องเขียน `migrate_<module>.py` อ่าน Excel ผ่าน Graph API → insert Supabase (รันครั้งเดียวตอน cutover)
- computed fields ของ CSA (`business_rules.py`) ยังคำนวณฝั่ง backend เหมือนเดิม ไม่เก็บใน DB

### env var ใหม่
`SUPABASE_URL`, `SUPABASE_SERVICE_KEY`, `SUPABASE_JWT_SECRET`, `SUPABASE_ANON_KEY` (frontend)

---

## Authentication Flow

### 3-Door Login System

> ⚠️ **จะถูกแทนที่ทั้งหมดด้วย Supabase Auth** — ดู [Supabase Migration Plan](#supabase-migration-plan-planned)
> ด้านล่าง ส่วนนี้อธิบาย auth ปัจจุบัน (Microsoft OAuth) ที่ยังใช้อยู่จนกว่าจะ cutover

หน้า login มี **3 ประตูหลัก** (CSA / QE / **Audit**) เรียงเป็นปุ่มในหน้าแรก + **ปุ่มเฟือง ⚙ มุมขวาบน
ของ login card สำหรับ Admin** (`loginAdminBtn`, เข้า `_showLoginDoor('admin')`) — layout นี้เปลี่ยนแล้ว
จากเดิมที่ Audit เคยซ่อนเป็น nested picker ใต้ QE และ Admin เคยเป็นปุ่มที่ 3 ในแถว:

| Door | ประตู | ต้องรหัสผ่าน? | ต้อง Microsoft Login? | Roles |
|---|---|---|---|---|
| CSA Sign In | CSA Dashboard | ไม่ | View Mode: ไม่ / Edit Mode: ใช่ (OAuth) | `csa_view`, `csa_user` |
| QE Sign In | GICA Dashboard | View: ไม่ / Edit: ใช่ (`QE_DOOR_PASSWORD`) | ไม่ (shared token) | `qe_view`, `qe_user` |
| **Audit Sign In** (top-level door) | Audit Dashboard | Auditor: ใช่ (`QE_DOOR_PASSWORD`, `data-door="qe"`) / **Auditee: ไม่** | ไม่ (shared token) | `qe_audit`, `qe_auditee` |
| Admin (ปุ่มเฟือง ⚙) | ทุกระบบ (CSA / GICA / Audit) | ใช่ (`ADMIN_DOOR_PASSWORD`) | ใช่ (OAuth + email check) | `admin` |

```
User → เลือก Door (CSA/QE/Audit) หรือกดเฟือง ⚙ (Admin) → ใส่ password (ถ้ามี)
     → POST /api/door-unlock → session["door_unlocked_{door}"] = True
     → View Mode: POST /manager-login หรือ /qe-view-login → shared token session
     → Edit Mode (CSA): GET /login?door=csa → Azure AD OAuth
     → Edit Mode (QE): POST /qe-edit-login → shared token + qe_user role
     → Audit Sign In → เลือก Auditor/Auditee:
         → Auditor: ใส่ password (data-door="qe") → POST /qe-audit-login → shared token + qe_audit role
         → Auditee: ไม่มี password gate → POST /qe-auditee-login → shared token + qe_auditee role
     → Admin (เฟือง): GET /login?door=admin → Azure AD OAuth + ADMIN_EMAIL check
```

⚠️ **`qeEditBtn`/`qeAuditorBtn` ใช้ `data-door="qe"` ตัวเดียวกัน** (password gate เดียวกัน) แต่ login คนละ route —
แยกด้วย `data-login-route` attribute บนปุ่ม (`/qe-edit-login` vs `/qe-audit-login`) ที่ `_submitDoorPassword()`
อ่านจากปุ่มที่ถูกกด (`app.js`) — ถ้าเพิ่มปุ่มใหม่ใต้ door เดิมในอนาคต **ต้องตั้ง `data-login-route` ทุกครั้ง**
ไม่งั้นจะ fallback ไป `/qe-edit-login` เงียบๆ (ของเดิมเคยมี bug แบบนี้มาก่อน)

⚠️ **Audit Sign In เป็น top-level door แล้ว** (`auditDoorBtn` → `_showLoginDoor('qe-audit')`) ไม่ใช่ nested
picker ใต้ QE อีกต่อไป — panel `loginDoor-qe-audit` ถูกเพิ่มเข้า loop ของ `_showLoginDoor`/`_showLoginDoorPicker`
(`['csa','qe','qe-audit','admin']`) และ back/Esc กลับไป main picker ตรงๆ (ไม่ใช่กลับ QE panel แบบเดิม)

⚠️ **Auditee ไม่มี `data-door`** — ปุ่ม `qeAuditeeBtn` ไม่ผ่าน password gate เลย เรียก
`_openViewOnlySession('/qe-auditee-login', ...)` ตรงๆ เหมือน `csaViewBtn`/`qeViewBtn` (ปุ่ม View Mode อื่นๆ)
ไม่ใช่ pattern เดียวกับ `qeEditBtn`/`qeAuditorBtn`

### Session Types

| Role | วิธีเข้า | Token | อ่าน | เขียน |
|---|---|---|---|---|
| `csa_view` | CSA → View Mode | `MANAGER_REFRESH_TOKEN` | CSA tabs | ❌ |
| `csa_user` | CSA → Edit Mode (OAuth) | User's own token | CSA tabs | ✓ |
| `qe_view` | QE → View Mode | `MANAGER_REFRESH_TOKEN` | GICA tab | ❌ |
| `qe_user` | QE → Edit Mode | `MANAGER_REFRESH_TOKEN` | GICA tab | ✓ (GICA only) |
| `qe_audit` | QE → Audit Mode → Auditor | `MANAGER_REFRESH_TOKEN` | Audit tab — ทุก sub-tab | ✓ (Audit ทุก route ยกเว้น Approve เป็น qe_audit/admin เท่านั้น) |
| `qe_auditee` | QE → Audit Mode → Auditee | `MANAGER_REFRESH_TOKEN` | Audit tab — เฉพาะ Dashboard/Audit Plan/Finding-CAR (ไม่เห็น Template) | ✓ เฉพาะ `POST /api/audit/plans/<id>/respond` เท่านั้น — write อื่นทุกตัว 403 |
| `admin` | Admin → OAuth | User's own token | All tabs | ✓ |
| `manager` | Legacy (ไม่มีปุ่มแล้ว) | `MANAGER_REFRESH_TOKEN` | All tabs | ❌ |

**QE Edit/Audit Mode ใช้ `MANAGER_REFRESH_TOKEN` แทน per-user OAuth** เพราะ OneDrive sharing permissions
ทำให้ต้องเปิด access ให้ทีละคน — shared token หลีกเลี่ยงปัญหา 403 Access Denied (`qe_auditee` ก็ใช้ token
เดียวกันนี้ แม้จะไม่ผ่าน door password — ดู `qe_auditee_login()` ใน `app.py`)

### Key Backend Functions

| Function | หน้าที่ |
|---|---|
| `_open_shared_token_session(role, display_name)` | สร้าง session ด้วย MANAGER_REFRESH_TOKEN — ใช้ทั้ง view-only, QE edit, QE audit (Auditor) และ QE auditee |
| `get_valid_token(force_refresh)` | ดึง access token จาก cache หรือ refresh — handle token rotation |
| `require_writable(allowed_roles)` | Guard decorator ตรวจ role ก่อนอนุญาตเขียน — route ส่วนใหญ่ของ Audit ใช้ `('qe_audit', 'admin')`, มีแค่ `/api/audit/plans/<id>/respond` ที่เพิ่ม `'qe_auditee'` เข้าไปด้วย |
| `_do_token_refresh(refresh_token)` | Raw HTTP refresh call (ไม่ใช้ MSAL) |

### Role-Based UI

- **Topbar title**: เปลี่ยนตาม door — `_applyRoleBrandTitle(role)` (re-apply หลัง language switch)
- **Role badge**: `_roleBadgeText(role)` → CSA (View Mode) / CSA (Edit Mode) / QE (View Mode) / QE (Edit Mode) / QE (Audit Mode - Auditor) / QE (Audit Mode - Auditee) / Admin Mode
- **Tab visibility**: CSA doors เห็นแค่ CSA tabs, `qe_view`/`qe_user` เห็นแค่ GICA, `qe_audit`/`qe_auditee` เห็นแค่ Audit
  (`qe_auditee` เห็นแค่ Dashboard/Audit Plan/Finding-CAR sub-tab — ดู `initAuditTab()` ใน `app.js` ที่ซ่อนปุ่ม
  Template เมื่อ `currentRole === 'qe_auditee'`), Admin เห็นหมด
- **Audit Plan action button**: gate ด้วย 2 ระดับแยกกัน ไม่ใช่ canWrite ตัวเดียว — `canManage`
  (`qe_audit`/`admin`: สร้าง Plan, เปิด Execution, Cancel, Approval) vs `canRespond`
  (`qe_audit`/`qe_auditee`/`admin`: ปุ่ม Respond เท่านั้น) ดู `_auditPlanActionBtn()` ใน `app.js`

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
| POST | `/qe-audit-login` | door_unlocked_qe | เปิด qe_audit (Auditor) session ด้วย MANAGER_REFRESH_TOKEN |
| POST | `/qe-auditee-login` | — (ไม่ต้อง unlock door) | เปิด qe_auditee session ด้วย MANAGER_REFRESH_TOKEN — ไม่มี password gate |
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
| GET | `/api/audit-excel` | ✓ | Audit data จาก Audit_Monitoring.xlsx (cached 5 นาที) |
| POST | `/api/audit/templates/forms` | ✓ writable | สร้าง Form ใหม่ หรือ version ใหม่ของ Form เดิม (ถ้า `Code` ตรงกับของเดิม) |
| POST | `/api/audit/plans` | ✓ writable | สร้าง Audit Plan ใหม่ (PlanID auto-gen แบบ `YYYY-MM-NNNN`) |
| PATCH | `/api/audit/plans/<plan_id>` | ✓ writable | แก้ Plan (เช่น เปลี่ยน Status) |
| POST | `/api/audit/executions` | ✓ writable | บันทึกผลตรวจ (รับ array ได้ — เขียนทีเดียวทั้ง checklist) |
| POST | `/api/audit/plans/<plan_id>/respond` | ✓ writable (`qe_audit`/**`qe_auditee`**/`admin`) | Auditee submit response ทุก Open finding ของ Plan ทีเดียว (bulk, Open→Responded, Plan Issued→Pending Approval) — **route เดียวใน Audit ที่ `qe_auditee` เขียนได้** |
| PATCH | `/api/audit/findings/<id>/approve` | ✓ writable | Auditor approve finding เดียว (Responded→Approved) — ถ้า Approved ครบทุกข้อของ Plan จะตั้ง Plan Status=Completed อัตโนมัติ |
| POST | `/api/audit/findings` | ⚠️ legacy | เปิด Finding เดี่ยวด้วยมือ — **frontend ไม่เรียกใช้แล้ว** Finding ทุกข้อตอนนี้ auto-create จาก NC execution items (ดู [Finding / CAR](#finding--car--auto-create--3-step-status-lifecycle)) |
| PATCH | `/api/audit/findings/<id>/respond` | ⚠️ legacy | Respond finding เดี่ยว — **frontend ไม่เรียกใช้แล้ว** ถูกแทนด้วย bulk `/plans/<plan_id>/respond` ด้านบน |
| PATCH | `/api/audit/findings/<id>/close` | ⚠️ legacy alias | Alias เดิมของ `/approve` (ก่อนเปลี่ยนชื่อ Closed→Approved) — ยังใช้งานได้ แต่ frontend เรียก `/approve` ตรงแทน |

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

### Data Flow (ปัจจุบัน)
```
Jumper_Monitoring.xlsx (OneDrive — SharePoint, JUMPER_EXCEL_SHARE_URL ใน config.py)
  → /api/jumper-excel    (Flask อ่านผ่าน MANAGER_REFRESH_TOKEN, parallel ทีละ BU table)
  → JavaScript render    (Summary cards, Charts, Table)
```
Tables ที่อ่าน: `Jumper_G1...Jumper_TRM` (per BU, ดู `JUMPER_BU_TABLES`) + `SewingOperatorCount`

### Cache
- `_JUMPER_EXCEL_CACHE` — in-process dict TTL 5 นาที

> ⚠️ **Data Flow เดิม (legacy, ยังไม่ลบโค้ด แต่ frontend ไม่เรียกแล้ว):**
> ```
> CSA co NiSE project → npm run fetch/push → data_*.json บน OneDrive (jumper-data/ folder)
>   → /api/jumper-data (cache: _JUMPER_CACHE) → ไม่มี frontend code เรียกใช้แล้ว
> ```
> เปลี่ยนมาอ่าน Excel ตรง (`/api/jumper-excel`) แทน — ดู [Data Source](#data-source) ด้านบน

### Frontend components
| ฟังก์ชัน | หน้าที่ |
|---|---|
| `initJumperTab()` | Lazy-load ครั้งเดียว ต่อ session, fetch `/api/jumper-excel` |
| `normalizeJumperRows(byBu)` | Flatten `{bu: rows[]}` → flat array |
| `renderJumperSummaryCards()` | 3-row summary: KPI cards, BU mini-cards, Training donuts |
| `_makeJumperBarChart()` | Chart.js bar chart (จำนวนคน, avg skill) |
| `_makeJumperPositionChart()` | Stacked bar พร้อม target gap (Center 2.5%, Inline 5.0%) |
| `renderJumperTable()` | ตาราง sortable + paginated + 3 filters |
| `JT_PROD` / `window._JTP` | Training progress tracker — SVG donut, persist ใน localStorage |

---

## Audit Module

### Overview
แท็บ Audit คือระบบ Internal Process Audit ผูกกับ BU/Dept เดิม (G1-G4/TRM/EA) เข้าถึงได้เฉพาะ
`qe_audit` (QE Sign In → Audit Mode → **Auditor**, ต้อง password), `qe_auditee` (QE Sign In → Audit Mode
→ **Auditee**, ไม่ต้อง password) และ `admin` — ดู [Authentication Flow](#authentication-flow) สำหรับ
role/door ดู [API Routes](#api-routes) สำหรับ endpoint ทั้งหมด **`qe_auditee` เห็นแค่ Dashboard/Audit
Plan/Finding-CAR (ไม่มี Template) และเขียนได้แค่ผ่านปุ่ม Respond เท่านั้น** — ส่วนที่เหลือทั้งหมดในหัวข้อนี้
อ้างอิงมุมมองของ `qe_audit` (Auditor) เป็นหลัก เว้นแต่ระบุไว้เป็นอย่างอื่น

มี 4 sub-tab ที่เห็นในแถบ (สำหรับ Auditor — Auditee เห็นแค่ 3 ตัวแรก): **Dashboard / Audit Plan / Template / Finding-CAR**
(`.gica-subtab-bar` reuse pattern เดียวกับ GICA, ดู `syncAuditSubtabTop()` ใน `app.js`) — **Execution**
เป็น panel ที่ 5 ที่ยังมีอยู่แต่ **ไม่มีปุ่มในแถบ sub-tab** เข้าถึงได้ผ่านปุ่ม "เปิด Execution" ในตาราง Audit
Plan เท่านั้น (`_auditSwitchSubtab('execution')` เรียกตรงจาก `_mountAuditPlan()` ใน `app.js`) — Plan ที่เปิด
มาเป็น**ค่าตายตัว ไม่มี dropdown ให้เปลี่ยน** (ของเดิมเคยมี "Switch Plan" select แต่เอาออกแล้ว เพราะ Plan
ถูกกำหนดมาจากหน้า Audit Plan แล้ว) ปิดกลับไปหน้า Audit Plan ได้ผ่านปุ่ม ✕ มุมขวาบนหรือกด **Esc**
(`_auditCloseExecution()` + `_auditExecutionEscHandler()` ใน `app.js`, wire ครั้งเดียวใน `initAuditTab()`)

⚠️ **ปุ่ม "Save Execution Results" disable ตัวเองทันทีที่กด** (เปลี่ยน label เป็น "Saving…") จนกว่า
`POST /api/audit/executions` จะเสร็จ — กันปัญหา double-submit ตอน user กดซ้ำระหว่างรอ (เขียนทั้ง checklist
ใช้เวลาหลายวินาที) ถ้า error จะ re-enable ปุ่มกลับให้กดใหม่ได้ ถ้า success ไม่ต้อง re-enable เพราะ
`_auditRefetch()` re-render panel ทั้งก้อนใหม่อยู่แล้ว (ปุ่มใหม่จะ enable เองโดย default)

### Dashboard — 5 แถว
Sub-tab แรกของ Audit คือ Dashboard — แถว 1 ใช้ design system เดียวกับ GICA Performance page เป๊ะ (`stat-grid`,
`.bu-name`/`.bu-head`, leader-line SVG donut) แถว 2-4 เป็นการ์ด per-BU operational (Finding/CAR pipeline,
Plan pipeline, Major NC ซ้ำบ่อยสุด) แทนที่ BU rating donut เดิมที่เคยอยู่แถว 2 (ของเดิมข้อมูลซ้ำกับสิ่งที่
แถว 5 แสดงอยู่แล้ว เลยเปลี่ยนมาโชว์ operational data ที่ไม่ซ้ำใครแทน) ดูหัวข้อ
[CSS Toolbox](#1-css-toolbox-design-system--เขียน-class-ไม่ใช่-inline) ด้านบน

**แถว 1 — 4 การ์ด (`stat-grid--4`):**

| การ์ด | แสดงอะไร | ที่มาข้อมูล |
|---|---|---|
| Total Audit | จำนวน Plan ทั้งหมด + กราฟแท่งแนวตั้งต่อ BU (`buBarChart()`) — แต่ละแท่ง stack 2 ส่วน: Completed (สีเต็ม) กับ ยังไม่ Completed (สีจาง opacity 0.3, รวมทุก status อื่นเป็นก้อนเดียว ไม่แยกย่อย) | `data.plans` |
| Overall Score | Donut สัดส่วน Conformity/Major NC/Minor NC/OFI ปัจจุบัน (หลังแก้ไขแล้ว) — center text = % Compliance | `e.ActualResult` ของทุก execution |
| Original Score | Donut เดียวกัน แต่อ่านจาก `Score` ดิบ (ไม่เปลี่ยนแปลง) — ไม่ใช่ flip card แล้ว (เคยลองทำ flip แต่เปลี่ยนใจ แยกเป็นการ์ดถาวรแทน) | `e.Score` ของทุก execution |
| Overall Status | Donut สัดส่วน Plan Status ทั้งหมด (Planned/Issued/Pending Approval/Completed/Cancelled) — center text = % Completion Rate | `data.plans` |

**Donut renderer ใช้ร่วมกัน (แถว 1 เท่านั้น)** — `_leaderDonut(counts, tot, categories, colorOf, labelOf, opts, center)`
เป็น generic SVG leader-line donut (รับ category list + color/label resolver + center-text callback) ส่วน
`ratingDonut()` (4 ratings, center = Compliance %) กับ `statusDonut()` (5 plan statuses, center = Completion
Rate %) เป็น thin wrapper รอบฟังก์ชันนี้ — ขยาย category ใหม่ในอนาคตให้เขียน wrapper ใหม่แบบนี้ ไม่ต้อง
duplicate SVG logic ทั้งก้อน **สี**: `AUDIT_RATING_HEX` (4 ratings, ใช้กับแถว 1) และ `AUDIT_PLAN_STATUS_HEX`
(5 statuses) เป็น literal hex (ไม่ใช่ CSS var) เพื่อให้ใช้ใน SVG `stroke`/`fill` ได้ตรงๆ — แยกจาก
`AUDIT_RATING_COLOR`/`AUDIT_STATUS_COLOR` เดิมที่เป็น semantic class name (`ok`/`warn`/`danger`/`muted`)
สำหรับ badge เท่านั้น (mirror แนวทางเดียวกับ `GICA_GRADE_COLORS` ของ GICA)

**แถว 2 — Finding/CAR Pipeline ต่อ BU (`stat-grid--6`):** segmented bar (`.pbar`, `display:flex`) สัดส่วน
Open(`var(--danger)`)/Responded(`var(--warn)`)/Approved(`var(--ok)`) ของ `AuditFinding` ทั้งหมดของ BU นั้น
(`f.BU === bu && planIds.has(f.PlanID)` — กรองด้วย Category/Year filter เดียวกับการ์ดอื่น) + breakdown 3 แถว
+ badge "ค้างนานสุด X วัน" (max ของ `_auditDaysSince(f.OpenedAt)` เฉพาะ finding ที่ยังไม่ `Approved`)

**แถว 3 — Audit Plan Pipeline ต่อ BU (`stat-grid--6`):** breakdown 5 สถานะ Plan ของ BU นั้น
(`AUDIT_PLAN_STATUS_LIST`, สี dot จาก `AUDIT_PLAN_STATUS_HEX`) + completion rate bar
(`Completed / total` ทุกสถานะรวม Cancelled)

**แถว 4 — Top 3 Major NC ซ้ำบ่อยสุดต่อ BU (`stat-grid--6`):** rank badge (1/2/3) + item text (truncate
ellipsis) + จำนวนครั้ง — นับเฉพาะ `e.Score === 'Major Non-Conformity'` (**ไม่รวม** Minor NC) อิงจาก `Score`
ดิบ (ไม่ใช่ `ActualResult` ที่ถูกแก้แล้ว — เหตุผลเดียวกับการ์ด "Original Score") join item text ผ่าน
`Plan.AuditTitle`(=Category)+`FormVersion`(=Version) เข้า `AuditTemplate` (join เดียวกับที่
`_computeAuditExecutionVm()` ใช้สำหรับ Execution sub-tab)

แถว 2/3/4 gate empty-state ด้วย `vm.planCountByBu[bu]` (BU นี้เคยมี Plan ในตัวกรองปัจจุบันไหม) **ไม่ใช่**
จำนวน finding/NC ที่เจอ — 0 finding หรือ 0 Major NC ซ้ำทั้งที่มี Plan คือข่าวดี (ไม่เคยต้องเปิด CAR / ไม่มี
NC ซ้ำเลย) แสดงเป็นข้อความเงียบๆ ("— ไม่มี Finding —" / "— ไม่มี Major NC ที่พบซ้ำ —") ไม่ใช่การ์ดจาง
`.stat-card--empty` แบบ "— no data —" ที่สงวนไว้สำหรับ BU ที่ไม่เคยถูกตรวจเลย

⚠️ **ห้ามใช้ `.stat-card__sub-row`** กับ breakdown list ของแถว 2-4 — class นั้น hardcode
`strong{font-size:16px}` ไว้สำหรับ use case อื่น (เจอบั๊กตัวเลขใหญ่เกินสัดส่วนการ์ดมาแล้วรอบหนึ่ง) ใช้
`.u-between` พร้อม inline `font-size:0.74rem` บนตัว row แทนเสมอ (ดู [CSS Toolbox](#1-css-toolbox-design-system--เขียน-class-ไม่ใช่-inline) ด้านบน)

**แถว 5 — Audit Trend chart ("Initial Audit vs Re-audit"):** การ์ดเต็มความกว้าง (`card card--section`)
มีปุ่ม KPI Setup เหมือน Expectation Matrix ของ GICA แต่ data/logic ต่างกันโดยสิ้นเชิง:

- **Canvas Chart.js stacked bar** (`#audit-trendChart`) — สร้าง/destroy ผ่าน `_auditTrendChart` (module
  variable เดียว ไม่ใช่ dict แบบ `_gicaCharts`)
- **แกน X จัดล่วงหน้าตามรอบ** — รอบ #1 ไล่ทุก BU ตาม `BU_ORDER` (`G1,G3,G2,G4,TRM,EA` เดียวกับ GICA) ก่อน
  แล้วค่อยรอบ #2 ฯลฯ จำนวนรอบ = `Math.max(AUDIT_TREND_MIN_ROUNDS=4, ...จำนวนรอบจริงของแต่ละ BU)` — เตรียม
  4 รอบไว้เป็นค่าเริ่มต้นเสมอแม้ยังไม่มีข้อมูล ("no data") แล้วขยายเกิน 4 อัตโนมัติเมื่อ BU ไหนตรวจถึงครั้งที่ 5
- **1 หมวด = 1 แท่ง** (ไม่ใช่คู่) — "Initial audit" (จาก `Score`) มีเสมอเมื่อมีข้อมูล ส่วน "Re-audit" (จาก
  `ActualResult`) จะมีก็ต่อเมื่อ `h.hasNC === true` เท่านั้น (audit logic: ตรวจครั้งแรกสะอาด = ไม่มี CAR =
  ไม่มี Re-audit) ดังนั้นแต่ละ BU+รอบมี 0("no data")/1/2 แท่ง ไม่คงที่
- **แต่ละแท่งเป็น stack 4 ส่วน** (Conformity/Major NC/Minor NC/OFI) — เปอร์เซ็นต์มาจาก `_auditPctBreakdown(counts, tot)`
  (largest-remainder rounding, **ไม่ใช่** `Math.round()` อิสระทีละตัว — ปัดอิสระทำให้ผลรวมได้ 99 หรือ 101
  แล้วแท่งสูงไม่เท่ากันทั้งที่ tot เท่ากัน เจอบั๊กนี้มาแล้วรอบหนึ่ง) สีใช้ `AUDIT_TREND_RATING_HEX` (เขียวมินต์/
  โรสอ่อน/เหลืองอำพัน/เทาฟ้าอ่อน) ซึ่งเป็นเวอร์ชันสว่างกว่า `AUDIT_RATING_HEX` — แยกชุดสีเพราะ `AUDIT_RATING_HEX`
  (เข้ม) เหมาะกับ accent เล็กๆ (donut/badge) แต่ดูหนักเกินไปตอนเป็นพื้นที่แท่งใหญ่ๆ ของกราฟนี้ legend สีในหัวการ์ด
  ก็ใช้ `AUDIT_TREND_RATING_HEX` ให้ตรงกับแท่งจริง
- **มุมโค้งเฉพาะขอบนอกของสแต็ก** — `borderRadius` เป็น callback ต่อ dataset เช็คว่า rating นั้นเป็น segment
  แรก/สุดท้าย **ที่ค่า `> 0`** ของ index นั้นไหม (⚠️ ต้องเช็ค `> 0` ไม่ใช่ `!= null` — `_auditPctBreakdown` คืน
  `0` ไม่ใช่ `null` ให้ rating ที่ไม่มีข้อมูล เช่น OFI ที่มักเป็น 0% เกือบทุกแท่ง ถ้าเช็คแค่ `!= null` จะนับ OFI
  เป็น "บนสุด" เสมอทั้งที่สูง 0px มุมโค้งเลยไปติดอยู่กับ segment ที่มองไม่เห็น เจอบั๊กนี้มาแล้วรอบหนึ่ง)
- **Label ใต้แท่งวาดเอง ไม่ใช้ native tick** — ปิด `x.ticks.display`/`x.grid.display` แล้ววาด 2 บรรทัดผ่าน
  plugin `_auditBarLabels`: บรรทัดบน = "Initial audit"/"Re-audit"/"no data" (สีเทา), บรรทัดล่าง = ชื่อ BU
  (สีเขียว/แดงตาม KPI met, เช็คจาก Conformity % ของแท่งนั้นเทียบ `_auditKpiTarget`) — ต้องวาดเองเพราะ
  Chart.js native multi-line tick กำหนดสีแยกแต่ละบรรทัดไม่ได้ (สีเดียวทั้ง tick) ต้องเพิ่ม
  `layout.padding.bottom` เองด้วยเพื่อเผื่อที่ให้ label ที่วาดเอง (ไม่มี native tick มาเผื่อให้แล้ว)
- **เส้นแบ่งรอบ** — plugin `_auditRoundDividers` วาดเส้นประคั่นระหว่างรอบ + ป้าย "รอบ N" เหนือกลุ่มแท่งของ
  แต่ละรอบ — คำนวณตำแหน่งจาก `roundStartIdx`/`roundSpan` ที่สะสมระหว่าง loop สร้างข้อมูล (**ไม่ใช่** คูณ
  `index * buCount` คงที่ เพราะจำนวนแท่งต่อ BU ต่อรอบไม่เท่ากัน — 1 หรือ 2 แท่งแล้วแต่ `hasNC`)
- **เส้น Target KPI** — `chartjs-plugin-annotation` เส้นประแนวนอนที่ `_auditKpiTarget` (ไม่ใช่ % คงที่)

**KPI Setup** — modal เดียว slider เดียว "Target Compliance %" (**All BU เท่านั้น** ไม่มีแท็บแยก BU แบบ
GICA) เก็บค่าใน **`localStorage`** (`auditKpiTargetCompliance`, default `80`) **ไม่ใช่ Excel/backend** —
ตัดสินใจแบบนี้เพราะไม่อยากเพิ่ม kpi table ใหม่ใน `Audit_Monitoring.xlsx` (ต่างจาก GICA ที่มี `kpi_g1`...`kpi_trm`
table จริง) ค่าเลย sync ข้ามเครื่อง/ข้าม user ไม่ได้ — ถ้าต้องการ sync ในอนาคตต้องเพิ่ม Excel table +
backend route ใหม่

**Category/Year filters** — อยู่แถวเดียวกับ `.audit-subtab-bar` ชิดขวาสุด (`.audit-dash-filters`,
`margin-left:auto`) เห็นได้ทุก sub-tab ของ Audit (เพราะอยู่ใน nav row เดียวกัน) แต่มีผลแค่กับการ์ด Dashboard
เท่านั้น (ทั้ง 5 แถว รวม Audit Trend chart) — Category = ตัวเลือกจาก `Plan.AuditTitle` ที่ไม่ซ้ำกัน, Year =
ตัวเลือกจาก 4 ตัวแรกของ `PlanID` (format `YYYY-MM-NNNN`) ไม่ใช่ column จริง ตัวเลือกถูกสร้างใหม่ทุกครั้งที่
`_auditData` รีเฟรช (`_populateAuditDashFilters()`, เก็บค่าที่เลือกไว้ถ้ายังมีอยู่ใน option ใหม่ ไม่งั้น reset
เป็น "All") `_computeAuditDashboardVm()` filter `plans` ก่อนตามทั้งสองตัวกรอง แล้ว derive `executions`/
`findings` จาก `PlanID` ที่เหลือ ดังนั้นทุกการ์ดในแถบ Dashboard (รวม Audit Trend chart แถว 5) สอดคล้องกับ
ตัวกรองเดียวกันเสมอ

### Data Model — `Audit_Monitoring.xlsx`
Workbook เดียว 4 table **ไม่แบ่งตาม BU** (ต่างจาก GICA ที่แบ่ง table ต่อ BU) — BU เป็นแค่ column value
ใน `AuditPlan`/`AuditFinding` เท่านั้น `AuditTemplate` ไม่มี BU เลย (Form ใช้ได้ทุก BU)

| Table | PK | คอลัมน์จริงใน Excel (มีเว้นวรรค/ตัวพิมพ์ตามนี้เป๊ะ) |
|---|---|---|
| `AuditTemplate` | **ไม่มี row-level PK** (ดูหัวข้อด้านล่าง) | `Template Name`, `Category`, `Item No.`, `Item Text`, `Code`, `Version`, `Active`, `Created By`, `Created At` |
| `AuditPlan` | `PlanID` | `BU`, `Department`, `FormVersion`, `AuditTitle`, `ScheduledDate`, `Auditor1`, `Auditor2`, `Auditor3`, `Status`, `CreatedBy`, `Notes` |
| `AuditExecution` | `ExecutionID` | `PlanID`, `ItemNo`, `Score`, `ActualResult`, `Comment`, `ExecutedBy` |
| `AuditFinding` | `FindingID` | `PlanID`, `ExecutionID`, `BU`, `Severity`, `Description`, `RootCause`, `CorrectiveAction`, `Responsible Person`, `Due Date`, `Status`, `OpenedBy`, `OpeneDate` (ชื่อจริงสะกดแบบนี้ ไม่ใช่ typo ในโค้ด), `RespondedBy`, `ClosedBy`, `ClosedDate`, `Notes` |

⚠️ **`AuditTemplate` ไม่มี `TemplateItemID`/`Template ID` แล้ว** (ลบออกแล้ว — ของเดิมเคยมี แทนที่ด้วย
Category+Version, ดูหัวข้อ Template ด้านล่าง) **`AuditPlan` ไม่มี `TemplateID` แล้ว ใช้ `FormVersion`
แทน** **`AuditExecution` ไม่มี `TemplateItemID` แล้ว ใช้ `ItemNo` แทน** — ถ้าเจอชื่อคอลัมน์เหล่านี้ในโค้ดเก่า/
เอกสารเก่าที่ยังหลุดอยู่ ถือเป็นของค้าง ห้ามใช้อ้างอิง schema จริง

⚠️ **ไม่มี `CreatedAt` ใน `AuditPlan`, ไม่มี `ExecutedAt` ใน `AuditExecution`, ไม่มี `RespondedAt` ใน
`AuditFinding`** — ถูกตัดออกตอน implement เพราะ Excel table จริงไม่มีคอลัมน์เหล่านี้ ห้ามเพิ่มกลับมาในโค้ด
โดยไม่เพิ่มคอลัมน์ใน Excel ก่อน

### Field-name translation layer (สำคัญมาก ก่อนแก้ Audit ต้องเข้าใจจุดนี้)
Excel header ของ Audit มีเว้นวรรค/ตัวสะกดไม่ตรง pattern เดิม (`Template ID` มีเว้นวรรค, `Item No.`
มีจุด, `OpeneDate`/`ClosedDate` คนละชื่อกับที่อื่น) — ต่างจาก GICA/Jumper ที่ column ชื่อสะอาดตรงกับ field
name ใน code เลย ด้วยเหตุนี้ Audit จึงมี **translation layer แยก** ที่ module อื่นไม่มี:

- `config.py` → `AUDIT_FIELD_MAPS = {kind: {api_field_name: real_excel_header}}` (kind = `template`/`plan`/`execution`/`finding`)
- `app.py` → `_audit_map_in(kind, api_record)` (API → Excel ตอน write) / `_audit_map_out(kind, excel_row)` (Excel → API ตอน read)
- **Frontend (`app.js`) และส่วนอื่นของ `app.py` เห็นแค่ API field name ที่สะอาด** (เช่น `ItemNo`, `ItemText`, `OpenedAt`) — ไม่เห็นชื่อ Excel จริงเลย
- ถ้าจะเพิ่มคอลัมน์ใหม่ใน Excel: เพิ่ม column จริงก่อน → เพิ่มเข้า `AUDIT_*_COLS` (ชื่อ Excel เป๊ะ) → เพิ่มเข้า `AUDIT_FIELD_MAPS[kind]` (api_name → excel_name) → ใช้ api_name ในโค้ดที่เหลือทั้งหมด

`graph_excel.py` มีฟังก์ชัน generic เพิ่มสำหรับ Audit โดยเฉพาะ (ของ GICA เดิม hardcode key เป็น `"empid"`
ใช้กับ Audit ไม่ได้): `get_table_rows_by_key`, `find_row_by_key`, `create_row`, `update_row_by_key` —
รับ `key_col` เป็น parameter แทน hardcode ใช้กับ `plan`/`execution`/`finding` (มี PK column จริงที่ unique
ทุกแถว) ส่วน `AuditTemplate` (ไม่มี PK column ที่ unique ทุกแถว — ดูหัวข้อ Template ด้านล่าง) ใช้
`append_row`/`update_row_by_index` แทน (ไม่ต้องมี key เลย, update โดยตรงผ่าน `_row_index` ที่ติดมากับแถว)

### PlanID — รูปแบบพิเศษ ไม่ใช่ auto-increment ธรรมดา
`PlanID` เป็น string format **`YYYY-MM-NNNN`** (เช่น `2026-06-0001`) — running number รายเดือน
รีเซ็ตทุกเดือนปฏิทิน ไม่ใช่ running number ทั้งระบบ — generate โดย `_audit_next_plan_id()` (`app.py`)
สแกน `PlanID` ที่มี prefix เดือนปัจจุบันแล้ว +1 **ห้ามใช้ `<int:plan_id>` ใน route** (เป็น string) —
ดู `PATCH /api/audit/plans/<plan_id>`

### Plan Status — ตั้งอัตโนมัติทั้งสาย ไม่ใช่ user-set (ยกเว้น Planned/Cancelled)
`AUDIT_PLAN_STATUSES = ["Planned", "Completed", "Issued", "Pending Approval", "Cancelled"]`
(`config.py`) — `Issued`/`Pending Approval`/`Completed` ไม่มี UI ให้ผู้ใช้เลือกตรงๆ ทั้งหมดตั้งอัตโนมัติโดย
backend ตามจังหวะของ Respond/Approval workflow ส่วน `Cancelled` เป็น manual แต่ทำได้แค่ตอน Status
ยังเป็น `Planned` เท่านั้น (ดูหัวข้อ Cancel ด้านล่าง) — **ไม่มี `InProgress` แล้ว** (ของเดิมเคยมีไว้เป็น
placeholder แต่ไม่เคยมี UI ตั้งค่านี้จริง เลยตัดออกเพื่อลด state ที่ไม่ใช้งาน):

```
Planned --[Save Execution มี NC]--> Issued
Planned --[ผู้ใช้กด Cancel + ยืนยันใน modal]--> Cancelled
Issued             --[Auditee submit ครบทุก Open finding]--> Pending Approval
Pending Approval   --[Auditor approve ครบทุก finding]--> Completed
```

1. **Issued**: กด "Save Execution Results" สำเร็จ (`api_audit_create_execution()` ใน `app.py`) — อ่าน
   `AuditExecution` rows ทั้งหมดของ `PlanID` นั้นสดๆ (ไม่ใช้ cache เก่า — ดู `_audit_execution_scores_for_plan()`)
   ถ้ามี `Score` เป็น `Major Non-Conformity`/`Minor Non-Conformity` ที่ไหนก็ตาม → `Status = "Issued"` พร้อม
   auto-create Finding จากแต่ละแถว NC (`_auto_create_findings_for_plan()`) ถ้าไม่มี NC เลย → `Status = "Completed"`
   ตรงนี้เลย (ไม่ต้องผ่าน Respond/Approval เพราะไม่มี finding ให้ approve)
2. **Pending Approval**: `POST /api/audit/plans/<plan_id>/respond` (bulk submit ทุก Open finding ของ
   Plan) ตั้ง Plan `Status = "Pending Approval"` ทันที (ไม่เช็คว่า Responded ครบทุกข้อหรือยัง เพราะ endpoint
   นี้รับเป็น array ของทุก Open finding อยู่แล้ว)
3. **Completed**: `PATCH /api/audit/findings/<id>/approve` หลัง approve ทุกข้อของ Plan ครบ (เช็คผ่าน
   `_audit_all_findings_approved()` ที่อ่านสดจาก Excel ทุกครั้งหลัง approve แต่ละข้อ) → ตั้ง Plan
   `Status = "Completed"` อัตโนมัติ
4. **Cancelled**: ในตาราง Audit Plan แถวไหนที่ `Status === 'Planned'` (และมีสิทธิ์เขียน) จะคลิกได้
   (`.audit-plan-row--cancellable` ใน `app.js`, มี `cursor:pointer` + hover) คลิกแล้วเปิด confirm modal
   (`_auditOpenCancelPlanModal()` → `#audit-plan-cancel-modal`) กดยืนยันแล้วยิง
   `PATCH /api/audit/plans/<plan_id>` ด้วย `{Status: "Cancelled"}` ตรงๆ (reuse generic update route
   เดิม ไม่มี endpoint แยก) คลิกที่ปุ่ม "เปิด Execution" ในแถวเดียวกันจะไม่ trigger modal นี้ (event handler
   เช็ค `e.target.closest('button')` ก่อน)

ปุ่ม action ที่คอลัมน์ Execution ในตาราง Audit Plan เปลี่ยนตาม Status (`_auditPlanActionBtn()`, `app.js`):

| Plan Status | ปุ่มที่แสดง | คลิกแล้วไปไหน |
|---|---|---|
| `Planned` | "เปิด Execution" (และทั้งแถวคลิกได้เพื่อ Cancel) | `_auditSwitchSubtab('execution')` / `_auditOpenCancelPlanModal()` |
| `Issued` | "Respond" | `_auditOpenPlanRespondModal()` — modal รวมทุก Open finding |
| `Pending Approval` | "Approval" | `_auditOpenPlanApprovalModal()` — modal รวมทุก Responded finding |
| `Completed` / `Cancelled` | disable (`—`) | — |

ถ้าจะแก้ผลตรวจของ Plan ที่ Issued/Pending Approval/Completed แล้วในอนาคต ต้องเปลี่ยน Status กลับเป็น
`Planned` ก่อน (ผ่าน `PATCH /api/audit/plans/<plan_id>`) — ยังไม่มี UI ทำสิ่งนี้

### Template = "Form" (Google/MS Forms model) + Versioning
Template ไม่ใช่ checklist เดี่ยวๆ แต่เป็น **Form** ที่มี Code + Version ควบคุม (เหมือน document control):

- **Code**: identity คงที่ข้าม version (เช่น `AUD-CSA-001`) — ผู้ใช้กรอกตอนสร้าง Form ใหม่
- **Version**: เลขจำนวนเต็ม เพิ่มทุกครั้งที่แก้ Form — แก้ Form = สร้าง **แถว item ใหม่ทั้งชุด** (Code เดิม,
  Version+1) แล้วปิด `Active=FALSE` ของทุกแถวเวอร์ชันเก่า (เก็บไว้เป็นประวัติ ไม่ลบ) ดู
  `_audit_write_create_form()` ใน `app.py`
- **Category**: ค่าเดียวต่อทั้ง Form (เช่น `"CSA Process"`) — **ไม่ใช่** sub-section ภายใน item อีกแล้ว —
  ใช้เป็นตัวเลือกใน **Audit Title dropdown** ตอนสร้าง Audit Plan (เลือก Category → resolve Version
  ของ Form ที่ Active อัตโนมัติ ดู `_auditOpenPlanCreateModal()` ใน `app.js`)
- **ไม่มี BU** ใน Template — Form ใช้กับทุก BU
- **ไม่มี ScoreScale/Weight** — ตัดออกแล้ว เพราะการตรวจไม่มีคะแนนถ่วงน้ำหนักหรือ Pass/Fail อีกต่อไป
  (ดูหัวข้อ Execution Rating ด้านล่าง)
- UI: หน้า Template list แสดง **1 แถวต่อ 1 Form** (group by `Code`, แสดง version ล่าสุด) คลิกแถว →
  modal รายละเอียดทุก item ของ version นั้น ปุ่ม "Edit (New Version)" เปิด modal เดิม pre-fill
  พร้อมสร้าง version ใหม่เมื่อ save — ดู `_auditFormGroups()`, `_auditOpenFormModal()`,
  `_auditOpenFormDetailModal()` ใน `app.js`

⚠️ **`AuditTemplate` ไม่มี row-level PK column** (ของเดิมเคยมี `TemplateItemID`+`Template ID` แต่ลบออก
แล้ว) — identity ของแถว checklist item คือ **Code + Version + Item No.** รวมกัน, ไม่ใช่ column เดียว
`Code` เองซ้ำกันได้ทุกแถวของ Form เดียวกัน (ไม่ unique ทั้งตาราง) จึงใช้เป็น key ของ `get_table_rows_by_key`
ได้แค่เป็น sentinel "แถวนี้มีข้อมูลจริงไหม" เท่านั้น **ห้ามใช้ `update_row_by_key`/`create_row` (generic, ต้อง
unique) กับ `AuditTemplate`** — ใช้ `update_row_by_index`/`append_row` แทน (ดูหัวข้อ Field-name translation
layer ด้านบน) `AuditPlan.FormVersion` (แทนที่ `TemplateID` เดิม) join กับ `AuditTemplate` ผ่าน
`AuditTitle`(=`Category`)+`FormVersion`(=`Version`) ไม่ใช่ FK number เดียว — ดู
`_computeAuditExecutionVm()` ใน `app.js` `AuditExecution.ItemNo` (แทนที่ `TemplateItemID` เดิม) คือ Item
No. ของ checklist item ภายใน scope ของ Plan นั้น (ไม่ unique ข้าม version แต่ unique พอภายใต้ PlanID เดียว
เพราะ Plan ผูกกับ version เดียวอยู่แล้ว)

### Execution Rating — fixed enum, ไม่ใช่คะแนน
ทุก checklist item ที่ตรวจใน Execution ใช้ rating ตายตัว **ไม่มี weighted score, ไม่มี Pass/Fail**:

```python
AUDIT_EXECUTION_RATINGS = ["Conformity", "Major Non-Conformity", "Minor Non-Conformity", "OFI"]
```
(`config.py`, mirror ด้วย `AUDIT_EXECUTION_RATINGS` constant ใน `app.js`) — เก็บใน `AuditExecution.Score`
(ชื่อ column เดิมจากตอนยังเป็นคะแนน แต่ตอนนี้เก็บ string จาก enum นี้)

#### `Score` vs `ActualResult` — immutable original vs current resolved state
`ActualResult` เป็น column ใหม่ (เพิ่มหลัง `Score` ใน Excel) — **`Score` ไม่เปลี่ยนแปลงอีกเลยหลังบันทึกครั้งแรก**
เป็น snapshot ของสิ่งที่ตรวจเจอ ณ ขณะตรวจจริง ส่วน `ActualResult` เริ่มต้นเป็นค่าเดียวกับ `Score` (เซ็ตพร้อมกัน
ใน `api_audit_create_execution()`) แต่จะ**ถูกเปลี่ยนเป็น `"Conformity"`** อัตโนมัติเมื่อ Finding ที่เกิดจาก
แถวนั้นถูก Approve แล้ว (`_do_audit_finding_approve()` ใน `app.py` — match ผ่าน `Finding.ExecutionID`)
สะท้อนว่าประเด็นนั้นถูกแก้ไขจบแล้ว ไม่ใช่ว่าตอนตรวจไม่เจอปัญหา

- ใช้ `Score` เมื่อต้องการดูประวัติ/สิ่งที่ตรวจเจอจริง (เช่น การ์ด "Original Score" บน Dashboard)
- ใช้ `ActualResult` เมื่อต้องการดูสถานะปัจจุบัน/compliance ล่าสุด (เช่น การ์ด "Overall Score" บน Dashboard)
- `_build_audit_payload()` มี fallback: ถ้า `ActualResult` ว่าง (แถวเก่าก่อนมี column นี้) ให้ใช้ `Score` แทน
  ดังนั้น frontend ที่อ่าน `e.ActualResult || e.Score` จะปลอดภัยเสมอ

⚠️ **`AuditExecution` ไม่มี `HasFinding` แล้ว** (ลบออกแล้ว) — rating เองบอกอยู่แล้วว่า item นั้นเป็น
finding หรือไม่ (rating ใดๆที่ไม่ใช่ `Conformity`) ไม่ต้องมี checkbox แยกซ้ำ การเปิด Finding ทำผ่าน
`POST /api/audit/findings` ตรงๆ (ดูหัวข้อ Finding / CAR ด้านล่าง) ไม่ผูกกับ field นี้ใน Execution row
อีกแล้ว `AUDIT_RATING_COLOR` (`app.js`) คือตัวแปรสีเฉพาะของ rating 4 ค่านี้ — ใช้ทั้งกับ badge (view-only)
และปุ่มเลือกที่หน้า Execution Result เป็น **4 ปุ่ม ไม่ใช่ dropdown** (`.audit-rating-btngroup` ครอบ 4
`.audit-rating-btn`, ปกติสีขาว/เทากลาง — ปุ่มที่เลือกจะได้ class `.audit-rating-btn--active` +
`.audit-rating-btn--{ok|warn|danger|muted}` ตอนคลิกผ่าน listener ใน `_mountAuditExecution()`, ค่าที่เลือก
เก็บใน `data-score` ของ container `.audit-exec-score-group` ไม่ใช่ `value` ของ `<select>`)

### Finding / CAR — auto-create + 3-step status lifecycle
`AuditFinding` 1 table ครอบคลุมทั้ง Finding และ CAR data — **ไม่มี sub-tab "CAR Report" แยกแล้ว**
(ของเดิมเคยมี แต่เอาออกแล้ว เพราะเป็น data ชุดเดียวกับ Finding/CAR เป๊ะ) คอลัมน์ที่ CAR Report เคยมี
(`Opened`, `Aging`, `Approver Comment`) ถูกรวมเข้าไปในตาราง **Finding / CAR** sub-tab เดียวแทน — ดู
`_computeAuditFindingVm()`/`_auditFindingHtml()` ใน `app.js` (`agingDays` คำนวณจาก `_auditDaysSince(f.OpenedAt)`
เฉพาะแถวที่ยังไม่ `Approved`)

**ไม่มี UI สร้าง Finding ด้วยมือแล้ว** ("Open New Finding" form ถูกเอาออกจากหน้า Finding/CAR) — Finding
ทุกข้อ **auto-create จาก `AuditExecution` ที่มี rating เป็น Non-Conformity** (`Major Non-Conformity` /
`Minor Non-Conformity`, ดู `AUDIT_RATING_TO_SEVERITY` ใน `config.py`) ทันทีที่กด "Save Execution Results"
สำเร็จ ผ่าน `_auto_create_findings_for_plan()` ใน `app.py` (idempotent — เช็ค Finding ที่มีอยู่แล้วผ่าน
`ExecutionID` ก่อนสร้างซ้ำ เผื่อ save execution รอบเดิมซ้ำ)

```
Status: Open (auto) → Responded (bulk, ต่อ Plan) → Approved (ต่อ finding)
(ห้าม skip step หรือถอยหลัง — validate ใน route handler)

1. Execution บันทึก NC  → _auto_create_findings_for_plan()         (Status=Open, OpenedBy/OpeneDate)
2. Auditee ตอบทุกข้อ      → POST /api/audit/plans/<plan_id>/respond  (bulk ทุก Open finding ของ Plan
                                                                     ทีเดียว → Responded, Plan→Pending Approval)
3. Auditor approve ทีละข้อ → PATCH /api/audit/findings/<id>/approve   (Responded → Approved;
                                                                     ครบทุกข้อ → Plan Status=Completed อัตโนมัติ)
```
⚠️ **มี role `qe_auditee` แยกแล้ว** (QE Sign In → Audit Mode → Auditee, ไม่ต้อง password — ดู
[Session Types](#session-types) ด้านบน) แต่ `RespondedBy`/`OpenedBy`/`ApprovedBy` ยังเป็น free text เหมือนเดิม
(ไม่ใช่ FK ไป user account ของแต่ละคน — shared token ทุกคนใช้ session เดียวกัน) ดูรายละเอียด Plan Status ↔
ปุ่ม (Respond/Approval) ที่หัวข้อ [Plan Status](#plan-status--ตั้งอัตโนมัติทั้งสาย-ไม่ใช่-user-set-ยกเว้น-plannedcancelled) ด้านบน

### Date columns — ต้องผ่าน `_audit_to_iso()` ไม่ใช่ `_gica_to_iso()`
Graph API คืนค่า date column (`ScheduledDate`, `Due Date`, `OpeneDate`, `ClosedDate`) เป็น serial-day
**ทั้งแบบ number และแบบ string ตัวเลข** (เช่น `"46213"`) — `_gica_to_iso()` เดิมของ GICA สมมติว่า string
ใดๆคือ date ที่ format ไว้แล้ว เลย parse ผิดถ้าเจอ string ตัวเลข จึงเขียน **`_audit_to_iso()`** แยกใน
`app.py` (ไม่แก้ `_gica_to_iso()` เดิม กัน regression ฝั่ง GICA) — ใช้ `_audit_to_iso()` เท่านั้นกับ date
column ของ Audit ห้ามใช้ `_gica_to_iso()` ตรงๆ

แสดงผลฝั่ง frontend ใช้ `_auditFmtDate()` ซึ่ง delegate ไปที่ `_gicaFmtDate()` (format `11 Jul 2026`
เหมือน GICA) — reuse ได้เพราะเป็นแค่ display formatting ไม่เกี่ยวกับ parsing bug ฝั่ง backend

### Frontend Functions (app.js)
| ฟังก์ชัน | หน้าที่ |
|---|---|
| `initAuditTab()` | Lazy-load ครั้งเดียว, fetch `/api/audit-excel`, wire sub-tab + modal ทั้งหมด |
| `_auditRefetch()` | Re-fetch + re-render ทุก sub-tab หลัง write (ไม่ reset `_auditLoaded` flow ซับซ้อนแบบ GICA) |
| `_auditFormGroups(templates)` | Group items by `Code` → 1 entry ต่อ Form, เก็บทุก version ไว้ (`byVersion`) |
| `_auditTemplateGroups(templates)` | Group items by `Category`+`Version` (1 version เดียว) — ใช้ตอน resolve ชื่อ Form ในตาราง Plan/join Execution |
| `renderAuditDashboard/Plan/Template/Execution/Finding()` | Orchestrator ต่อ sub-tab ตาม compute→html→mount pattern (ดูหัวข้อ Render Architecture ใน Frontend Code Conventions ด้านบน) — ไม่มี `renderAuditCarReport()` แล้ว (sub-tab ถูกรวมเข้า Finding) |
| `_auditOpenPlanCreateModal()` / `_wireAuditPlanCreateModal()` | Modal สร้าง Plan — Audit Title เป็น dropdown จาก Category ของ Form ที่ Active |
| `_auditOpenFormModal()` / `_wireAuditFormModal()` | Modal สร้าง/แก้ Form (Create ใหม่ หรือ New Version ถ้ามี `existingForm`) |
| `_auditOpenFormDetailModal()` / `_wireAuditFormDetailModal()` | Modal แสดงรายละเอียด Form 1 รายการ + ปุ่ม Edit (New Version) |
| `_auditPlanActionBtn(p, canManage, canRespond)` | Resolve ปุ่ม action ต่อแถว Plan ตาม `Status` — gate 2 ระดับแยกกัน: `canManage` (`qe_audit`/`admin`: เปิด Execution/Approval) vs `canRespond` (+`qe_auditee`: ปุ่ม Respond เท่านั้น) |
| `_auditOpenPlanRespondModal(planId)` / `_wireAuditPlanRespondModal()` | Modal รวมทุก Open finding ของ Plan — Auditee กรอก RootCause/CorrectiveAction/PreventiveAction/ResponsiblePerson/DueDate แล้ว Submit ทีเดียว → `POST /api/audit/plans/<id>/respond` (รองรับ Esc ปิด) |
| `_auditOpenPlanApprovalModal(planId)` / `_wireAuditPlanApprovalModal()` | Modal รวมทุก Responded finding ของ Plan — Auditor ใส่ comment + Approve ทีละข้อ → `PATCH /api/audit/findings/<id>/approve`, อัปเดต card in-place |
| `_wireAuditApproveModal()` | Modal approve finding เดียวจากตาราง Finding/CAR โดยตรง (`#audit-approve-modal`) — ใช้ endpoint เดียวกับ Approval modal ข้างบน |
| `_auditOpenCancelPlanModal(planId)` / `_wireAuditCancelPlanModal()` | Modal ยืนยัน Cancel Plan — เปิดจากการคลิกทั้งแถวของ Plan ที่ `Status==='Planned'` (`.audit-plan-row--cancellable`, เช็ค `e.target.closest('button')` ก่อนกัน conflict กับปุ่ม "เปิด Execution" ในแถวเดียวกัน) ยืนยันแล้วยิง `PATCH /api/audit/plans/<id>` ตรงๆ ด้วย `{Status:'Cancelled'}` รองรับ Esc ปิด |
| `_computeAuditDashboardVm(data)` / `_auditDashboardHtml(vm)` | Dashboard compute→html — ดูหัวข้อ [Dashboard](#dashboard--5-แถว) ด้านบนสำหรับรายละเอียดการ์ดและ filter ทั้ง 5 แถว |
| `_leaderDonut(...)` / `ratingDonut(...)` / `statusDonut(...)` | Generic leader-line SVG donut renderer + 2 thin wrapper สำหรับ rating กับ plan status — ใช้แค่แถว 1 (`Overall Score`/`Original Score`/`Overall Status`) เท่านั้น ตั้งแต่แถว 2 เปลี่ยนไปเป็น Finding/Plan pipeline cards แล้ว |
| `_auditPctBreakdown(counts, tot)` | Largest-remainder rounding — แปลง counts เป็น % ต่อ rating ที่รวมกันได้ 100 เป๊ะเสมอ (ไม่ใช้ `Math.round()` อิสระทีละตัว) ใช้ทั้งใน `buHistory` (แถว 5 chart) |
| `_mountAuditDashboard(html, vm)` | นอกจาก `innerHTML` แล้วยัง build/destroy Chart.js instance ของแถว 5 (`_auditTrendChart`) + wire ปุ่ม/modal KPI Setup — มี inline plugin `_auditRoundDividers` (เส้นแบ่งรอบ) และ `_auditBarLabels` (วาด tick label เอง 2 บรรทัด สี/text แยกตามแท่ง) ดูรายละเอียด logic ทั้งหมดในหัวข้อ [Dashboard](#dashboard--5-แถว) แถว 5 ด้านบน |
| `_populateAuditDashFilters()` / `_wireAuditDashFilters()` | สร้าง option ของ Category/Year filter จาก `_auditData` สดทุกครั้ง (เก็บค่าที่เลือกไว้ถ้ายังมีอยู่) + wire `change` listener → `renderAuditDashboard()` ตรงๆ ไม่ refetch |
| `_gicaDaysBadge(iso)` | reuse ของ GICA ตรงๆ สำหรับ Days Remaining badge ใน Plan table (สีตาม threshold) — Plan ที่ `Status` เป็น `Completed`/`Cancelled` แสดง `—` แทนเสมอ (ไม่นับวันต่อแล้ว) |

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
| `KV_REST_API_URL` / `KV_REST_API_TOKEN` | L2 shared cache (Vercel KV / Upstash Redis) — ดู [`kv_store.py`](kv_store.py) | optional — ไม่มีก็ทำงานได้ fallback ไป Graph API ตรง |

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

โปรเจ็คนี้เคยเป็น **consumer** ของข้อมูลจาก `CSA co NiSE` (โปรเจ็คแยก) ผ่าน `/api/jumper-data`:
- `CSA co NiSE` ดึงข้อมูลจากระบบ NiSE แล้วอัปโหลดขึ้น OneDrive (`npm run fetch && npm run push`)
- ทั้งสองโปรเจ็คใช้ `MANAGER_REFRESH_TOKEN` ตัวเดียวกัน (ควร copy ค่าเดียวกัน)

> ⚠️ **`/api/jumper-data` ไม่มี frontend code เรียกใช้แล้ว** (Jumper tab เปลี่ยนไปอ่าน `Jumper_Monitoring.xlsx` ตรงผ่าน `/api/jumper-excel` แทน — ดู [Jumper Skill Tab](#jumper-skill-tab)) ความสัมพันธ์กับ `CSA co NiSE` ในแง่ของ tab นี้จึงไม่ active แล้วในโค้ดปัจจุบัน — ถ้า `CSA co NiSE` ยังรันอยู่เพื่อจุดประสงค์อื่น ควรเช็คกับทีมที่ดูแลโปรเจ็คนั้นแยก
