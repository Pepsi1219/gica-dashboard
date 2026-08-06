# New Operator Monitoring — Project Reference

เว็บแอปพลิเคชัน Flask สำหรับติดตามสถานะการฝึก New Operator ในโรงงาน Nan Yang Textile
ข้อมูล **Audit + CSA (New Operator) + GICA** ย้ายมาอยู่ใน **Supabase PostgreSQL** แล้ว (Phase 1–3 complete)
ข้อมูล Jumper/Trainer ยังเก็บใน Excel บน OneDrive อ่าน/เขียนผ่าน Microsoft Graph API (พักไว้ก่อน — Phase 4 ยังไม่ตัดสินใจ)

---

## โครงสร้างไฟล์

```
New Operator Monitoring/
├── app.py                  # Flask app หลัก — routes ทั้งหมด + auth logic
├── config.py               # ค่าคงที่: CLIENT_ID, DEPARTMENTS, GICA_*, ONEDRIVE_FOLDER, ฯลฯ
├── business_rules.py       # Logic คำนวณ training status (due date, remaining days, etc.)
├── graph_excel.py          # Wrappers สำหรับ Microsoft Graph API (CRUD Excel table)
├── kv_store.py             # L2 shared cache — REST wrapper สำหรับ Vercel KV / Upstash Redis
├── supabase_client.py      # REST wrapper สำหรับ Supabase PostgREST (sb_select/insert/update/delete/auth_sign_in)
├── supabase_auth.py        # JWT verify (ES256/HS256 via JWKS), role cache, extract_bearer
├── requirements.txt        # Flask, PyJWT, cryptography, python-dotenv, requests
├── vercel.json             # Vercel deployment config
├── .env                    # Secrets (ห้าม commit — อยู่ใน .gitignore แล้ว)
├── .env.example            # Template สำหรับ .env
├── migrations/
│   ├── 001_profiles.sql                     # profiles table + RLS + trigger auto-insert on auth.users
│   ├── 002_audit.sql                        # audit_templates / audit_plans / audit_findings + RLS + indexes
│   ├── 003_csa.sql                          # csa_employees (6 BU + bu column)
│   ├── 004_gica.sql                         # gica_employees / gica_freq / gica_kpi
│   ├── 005_gica_next_date_override.sql      # add next_date_override column for manual pin
│   └── 006_profiles_bu.sql                  # add nullable profiles.bu (BU scope) — see BU-Scoped Users
├── migrate_audit.py        # One-time migration: Audit_Monitoring.xlsx → Supabase (รันครั้งเดียว)
├── migrate_csa.py          # One-time migration: 6 CSA workbooks → Supabase (รันครั้งเดียว)
├── migrate_gica.py         # One-time migration: GICA.xlsx → Supabase (รันครั้งเดียว, done)
├── templates/
│   └── index.html          # SPA หน้าเดียว — HTML ทั้งหมด (multi-tab)
├── static/
│   ├── css/styles.css      # Styles ทั้งหมด (~3060+ บรรทัด)  [?v=203]
│   └── js/app.js           # Frontend logic ทั้งหมด (~11000+ บรรทัด)  [?v=470]
└── docs/                   # เอกสาร guide สำหรับ CSA Manager
```

---

## สถาปัตยกรรม

### Backend (Flask)
- **SPA Pattern**: `GET /` serve `index.html` เพียงหน้าเดียว ทุก navigation ทำใน JS
- **Auth**: **Supabase Auth (email/password)** — ตัด Microsoft OAuth / MSAL / door-password ออกทั้งหมดแล้ว
  - Frontend POST `/api/auth/login` → `supabase_client.sb_auth_sign_in()` → Supabase `/auth/v1/token`
  - Supabase issue **ES256 JWT** (asymmetric) — verify ด้วย JWKS endpoint (`/auth/v1/.well-known/jwks.json`)
  - JWT เก็บใน `localStorage` (`sb_jwt`) ฝั่ง frontend, inject เป็น `Authorization: Bearer` ทุก API call
  - `require_writable(allowed_roles)` — extract Bearer → `verify_jwt()` → `get_user_role()` (profiles table)
  - `require_bu_scope(url_bu)` — เรียกหลัง `require_writable` ใน GICA write endpoints; ถ้า user มี `profiles.bu` ต้องตรงกับ BU ใน URL ไม่งั้น 403 (NULL bu = full access ผ่านเสมอ)
  - `MANAGER_REFRESH_TOKEN` **ยังอยู่** — เป็น service credential สำหรับ Microsoft Graph API (Jumper/Trainer/CSA/GICA Excel) เท่านั้น ไม่ใช่ auth ผู้ใช้แล้ว
- **Session storage**: ไม่ใช้ Flask-Session แล้ว — auth state อยู่ใน client-side JWT + `localStorage` ทั้งหมด
- **Caching: L1 (in-process) → L2 (shared KV) → live fetch** — module **Jumper/Trainer** (Excel) ยังเดินตาม pattern นี้ TTL 300 วินาที; module ที่อยู่บน Supabase (CSA/GICA/Audit) อ่านตรง ไม่ใช้ L2 KV แล้ว (Supabase เร็วพอ):

  | Module | L1 dict | L2 KV key | Write invalidation |
  |---|---|---|---|
  | New Operator (CSA) | — (Supabase `csa_employees` อ่านตรง) | — (**ไม่มี L2**) | — |
  | GICA | — (Supabase `gica_employees` อ่านตรง) | — (**ไม่มี L2**) | — |
  | Jumper Skill | `_JUMPER_EXCEL_CACHE` | `jumper_excel` | — (read-only) |
  | Trainer Skill | `_TRAINER_EXCEL_CACHE` | `trainer_excel` | — (read-only) |
  | **Audit** | `_AUDIT_CACHE` (in-process, TTL 60s) | — (**ไม่มี L2**) | ✓ หลังทุก write ของ Audit |
  | ~~`_NEWOP_CACHE`~~ / ~~`_JUMPER_CACHE`~~ | — | — | ⚠️ legacy/dead (ตัดออกแล้ว) |

- **`_MANAGER_AT_CACHE`**: in-process dict cache สำหรับ Microsoft access token (5-min buffer) — ใช้แทน `_AT_CACHE` เดิม

### Frontend (Vanilla JS)
- ไม่ใช้ framework — `static/js/app.js` เป็น plain JS ~10500+ บรรทัด
- **Auth state**: `_sbJwt` (in-memory) + `localStorage('sb_jwt')` — inject เป็น `Authorization: Bearer` ใน `api()` ทุก call
- **Login**: ช่องเดียว — ค่าที่กรอกใช้เป็นทั้ง empid และ password (Supabase user ต้อง set `password = empid`) พร้อมปุ่มตา toggle
  - JS ต่อท้าย `@manu.local` อัตโนมัติ (ถ้ามี `@` ในค่าที่กรอก จะใช้ตรงๆ)
- ใช้ Chart.js v4 (CDN) + `chartjs-plugin-annotation` สำหรับกราฟ
- ใช้ jsPDF (CDN) สำหรับ export PDF
- แบ่งเป็น tab หลัก 6 แท็บ: `newOperator`, `jumper`, `trainer`, `sewingOperator`, `gica`, `audit`
- **Login**: "Remember me" checkbox — บันทึกค่าที่กรอกใน `localStorage('login_remember_id')`

### Data Source
| Tab | แหล่งข้อมูล | Endpoint | วิธีอ่าน |
|---|---|---|---|
| New Operator | **Supabase PostgreSQL** (`csa_employees`, มี `bu` column) | `/api/<dept>/employees` | `supabase_client.sb_select()` ผ่าน service key |
| Jumper Skill | `Jumper_Monitoring.xlsx` (tables `Jumper_G1...Jumper_TRM` + `SewingOperatorCount`) | `/api/jumper-excel` | Graph API `/workbook/tables` — อ่านแยก table ต่อ BU แบบ parallel |
| Trainer Skill | `Trainer_Monitoring.xlsx` (tables `TrainerListAll`, `BUSetup`, `top_3`) | `/api/trainer-excel` | Graph API `/workbook/tables` |
| Sewing Operator | มาจาก table `SewingOperatorCount` ใน `Jumper_Monitoring.xlsx` | `/api/jumper-excel` | อ่านพร้อมกับ Jumper Skill |
| GICA | **Supabase PostgreSQL** (3 tables: `gica_employees`/`gica_freq`/`gica_kpi`) | `/api/gica-excel` | `supabase_client.sb_select()` ผ่าน service key (parallel 3 tables) |
| **Audit** | **Supabase PostgreSQL** (3 tables: `audit_templates`/`audit_plans`/`audit_findings`) | `/api/audit-excel` | `supabase_client.sb_select()` ผ่าน service key |

> ⚠️ **`/api/jumper-data`** (JSON-files-based flow เดิม) ยังอยู่ในโค้ดแต่ **frontend ไม่เรียกใช้แล้ว**

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
| GICA cohort modal toolbar | `.gica-cohort-toolbar` (flex row: fail-stats ซ้าย / filters ขวา), `.gica-cohort-filters` (Dept/Level/Attempt/Status/Search inline) — ใช้ใน `_gicaShowEmpListModal` |
| KPI BU tabs | `.gica-kpi-bu-tabs`, `.gica-kpi-bu-tab`, `.gica-kpi-bu-tab--active` |
| GICA KPI Summary modal | `.gica-kpi-summary-modal__panel`, `.kpi-sum-hero`, `.kpi-sum-hero__ring`, `.kpi-sum-hero__pct/frac/meta/eyebrow/title/stats`, `.kpi-sum-stat`, `.kpi-sum-stat__dot`, `.kpi-sum-section-title`, `.kpi-sum-bu-grid`, `.kpi-sum-bu-card`, `.kpi-sum-bu-badge`, `.kpi-sum-bu-card__ring-wrap/center/pct/frac`, `.kpi-sum-bu-card__pill--pass/fail/pending`, `.kpi-sum-ring` — ธีมสีต่อ BU ผ่าน `--kpi-bu-color` custom property |
| Login password toggle | `.login-pw-wrap`, `.login-pw-input`, `.login-pw-toggle` — ปุ่มตาเปิด/ปิด password (absolute positioned inside input wrap) |
| Audit Create Form modal | `.audit-form-modal__panel`, `.audit-form-modal__body`, `.audit-form-modal__footer`, `.audit-btn`, `.audit-btn--cancel`, `.audit-btn--confirm` — **เจตนาแยกจาก `.gica-kpi-*`** ไม่ใช้ปนกัน แม้หน้าตาคล้าย KPI Setup modal |
| Audit Trend KPI Setup | `.audit-kpi-setup-btn`, `.audit-kpi-modal__panel`, `.audit-kpi-modal__body`, `.audit-kpi-modal__desc`, `.audit-kpi-row`, `.audit-kpi-row__label`, `.audit-kpi-row__val`, `.audit-kpi-slider` — เหตุผลเดียวกับ Create Form modal (ของตัวเอง ไม่ปนกับ `.gica-kpi-*`) |
| Stat card sub list modifier | `.stat-card__sub--flush` (ไม่มี border-top/margin-top) — ใช้เมื่อ `.stat-card__sub` เป็น element แรกในการ์ด |
| GICA Schedule row-1 cards | `.row1-card`, `.row1-head`, `.row1-body`, `.row1-body--divided`, `.row1-legend`, `.row1-legend__dot` — โครง header/body/legend ที่บังคับให้ header ทั้ง 3 การ์ดสูงเท่ากัน (`min-height:110px`) และแถว BU (G1/G3/G2/G4/TRM/EA) เรียงตรงกันแนวนอนข้ามการ์ด (`.mini-bar__row--lg { min-height:24px }`) |
| Container | `#gica-summary`, `#jtp-summary`, `#trainer-summary` (layout เป็น CSS ไม่ใช่ JS) |
| **Employee table** | `.emp-table`, `.emp-toolbar`, `.emp-search-box`, `.emp-filter-chip`, `.emp-table-wrap`, `.emp-footer`, `.emp-count-badge`, `.emp-row-num`, `.emp-id-cell`, `.emp-name-cell`, `.emp-date-empty`, `.emp-act-btn`, `.emp-pg-btn`, `.emp-pg-btn--active`, `.emp-pg-ellipsis` |
| Type pill | `.type-pill`, `.type-pill--sewing`, `.type-pill--qcqa`, `.type-pill--technic` |
| Grade chip | `.grade-chip`, `.grade-chip--b/c/d/e` |
| Status pill | `.status-pill`, `.status-pill__dot`, `.status-pill--{key}` (10 status keys) |
| Inline edit | `.ie-date-pair`, `.ie-date-label`, `.ie-action-cell`, `.btn-confirm-inline`, `.btn-cancel-inline` |
| GICA emp table | `.gica-emp-table-wrap`, `.gica-emp-table` (ใช้ร่วมกับ `.emp-table`), `.gica-th-sort`, `.gica-sort-arrow`, `.gica-grade-score`, `.emp-list-title-row`, `.emp-list-title` |

**Known Issue:** Global unscoped `table { min-width:1050px; } th { background:var(--blue); }` ที่ ~line 1593 leak เข้าไปใน `<table>` ทุกตัว — `.emp-table` และ `.gica-emp-table` ใช้ `!important` override แก้ปัญหานี้แล้ว; workaround อื่นด้วย div+grid (เช่น gica-compare)

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
- **Audit ย้าย Supabase แล้ว** — ดู [Supabase Migration Plan](#supabase-migration-plan) ด้านล่าง

### 4. Cache-busting (สำคัญ — ลืมบ่อย)

ทุกครั้งที่แก้ `app.js` หรือ `styles.css` ต้อง **bump `?v=` ใน `index.html`**
(ปัจจุบัน `styles.css?v=201`, `app.js?v=457`) ไม่งั้น browser cache ไฟล์เก่า

---

## Supabase Migration Plan

### สถานะปัจจุบัน (2026-07-30)

**✅ Phase 0 — COMPLETE** (Supabase infra):
- `supabase_client.py` — REST wrapper (`sb_select`/`sb_insert`/`sb_update`/`sb_delete`/`sb_auth_sign_in`)
- `supabase_auth.py` — JWT verify (ES256 via JWKS + HS256 fallback), role cache, `extract_bearer`
- `migrations/001_profiles.sql` — `profiles` table + RLS + trigger auto-insert เมื่อสร้าง `auth.users`
- `migrations/002_audit.sql` — `audit_templates`/`audit_plans`/`audit_findings` + RLS + indexes

**✅ Phase A — COMPLETE** (Auth cutover):
- ตัด MSAL / door-password / Flask-Session ออกทั้งหมด
- ใหม่: `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/me` (JWT-based)
- `require_writable(allowed_roles)` → extract Bearer → `verify_jwt()` → `get_user_role()` → check role
- `_MANAGER_AT_CACHE` (in-process) แทน `_AT_CACHE` เดิม
- Login form เปลี่ยนจาก 3-door → email+password เดียว (ช่องกรอก "รหัสพนักงาน" → JS ต่อท้าย `@manu.local`)

**✅ Phase 1 — COMPLETE** (Audit → Supabase):
- `app.py` Audit section เขียนใหม่ — ดึงจาก Supabase ผ่าน `sb_select`/`sb_insert`/`sb_update`
- ลบ translation layer เดิม (`_audit_map_in`/`_audit_map_out`, `AUDIT_FIELD_MAPS`, `_audit_to_iso`)
- API response shape เดิม (`{templates, plans, executions, findings}`) ยังเหมือนเดิม — frontend ไม่ต้องแก้
- `ActualResult` computed at read time (Approved finding → "Conformity") ไม่เก็บใน DB
- Synthetic ExecutionID: `f"{plan_id}_{item_no}"` (deterministic)
- FindingID เปลี่ยนจาก int → UUID string (route pattern เปลี่ยนเป็น `<finding_id>`)
- `migrate_audit.py` — one-time migration script อ่าน Excel → insert Supabase

**✅ Phase 2 — COMPLETE** (CSA → Supabase):
- `csa_employees` table (migrations/003_csa.sql) — 1 table ต่อ 6 BU มี `bu` column
- `migrate_csa.py` — one-time migration script อ่าน Excel 6 workbook → upsert Supabase
- CSA routes ใน `app.py` เขียนใหม่ — ตัด `_NEWOP_CACHE`/KV ออก ใช้ `sb_select`/`sb_insert`/`sb_update`
- Field mapping: `_CSA_SB_TO_API` / `_CSA_API_TO_SB` ใน `app.py` แปลง snake_case ↔ "Title Case"
- รัน migration: `python migrate_csa.py [--dry-run]`

**✅ Security Hardening (2026-07-02):**
- `FLASK_SECRET_KEY` — raise `RuntimeError` ถ้าไม่ set (ไม่ใช้ default อีกต่อไป)
- `verify_jwt` — ลบ `options={"verify_aud": False}` fallback; audience ผิด → `None`
- `_ROLE_CACHE` — จำกัดขนาด `MAX_ROLE_CACHE_SIZE = 500`; clear ทั้งก้อนเมื่อเต็ม
- `sb_update` / `sb_delete` — guard: raise `SupabaseError` ถ้า `filters` ว่าง (ป้องกัน full-table wipe)
- `sb_select` — pagination loop ด้วย `Range` header (1000 rows/page) ป้องกัน PostgREST row limit
- `graph_excel.py` — ลบ 14 dead functions ออก
- `_audit_next_plan_id` — `like.{prefix}-%` + 3-attempt retry
- Status transition validation ใน audit plan routes
- IDOR fix ใน `api_audit_plan_respond` — ตรวจ plan ownership ก่อน

**✅ Phase 3 — COMPLETE** (GICA → Supabase):
- 3 tables (migrations/004_gica.sql): `gica_employees` (tests JSONB array), `gica_freq`, `gica_kpi` — ทุก table มี `bu` column
- `migrate_gica.py` — one-time migration script (**รันไปแล้ว** — ข้อมูลอยู่ใน `gica_employees` แล้ว ไม่ต้องรันซ้ำ)
- GICA routes ใน `app.py` เขียนใหม่ — `/api/gica-excel` → `_fetch_gica_supabase_data()` (parallel 3 tables) → `_build_gica_payload()`; ตัด `_fetch_gica_excel_data()`/Graph API/KV ออก
- POST/PATCH/DELETE ใช้ `sb_select`/`sb_insert`/`sb_update`/`sb_delete` บน `gica_employees`
- API response shape เดิม (`{employees, bus, freqTable, kpiDefaults}`) ยังเหมือนเดิม — frontend ไม่ต้องแก้
- `migrations/005_gica_next_date_override.sql` — เพิ่ม column `next_date_override TEXT` ใน `gica_employees` สำหรับ manual Next Date pin (qe_edit/gica_admin/admin) — **ต้องรันใน Supabase SQL Editor ก่อน feature จะทำงาน**; new test result ล้าง override อัตโนมัติ

**✅ BU-Scoped Users (2026-08-06) — GICA per-BU access control:**
- `migrations/006_profiles_bu.sql` — เพิ่ม column `bu TEXT` ใน `profiles` (nullable + CHECK 6 BU); NULL = full access (พฤติกรรมเดิม), value เช่น `'G1'` = user เห็น/แก้ได้แค่ BU นั้น
- `supabase_auth.get_user_bu(user_id)` — cached 5 นาที เหมือน `get_user_role`; `invalidate_role_cache` เคลียร์ทั้ง 2 cache
- `GET /api/me` return field `bu` ด้วย
- `require_bu_scope(url_bu)` guard — reject 403 ถ้า user มี `bu` แต่ URL BU ไม่ตรง; ใช้กับ 5 GICA write endpoints (POST create, PATCH result, PATCH next-date, DELETE results, DELETE employee)
- Frontend: module var `_currentUserBu` ตั้งจาก `/api/me`; **Option B** — Dashboard/KPI/Charts/Schedule เห็นทุก BU ตามเดิม แต่ Employee List filter (`gica-filterBu`) + Add-employee modal ล็อกไว้ที่ BU ตัวเอง (Dept/Level options ก็ narrow ตาม)
- **⚠️ ข้อจำกัด Option B**: payload `/api/gica-excel` ยังส่งข้อมูลทุก BU ให้ frontend (Dashboard ต้องคำนวณจริง) — เปิด DevTools เห็น raw ได้ ถ้าต้องการปิดสนิทต้อง refactor dashboard ให้ backend ส่ง aggregated stats แทน
- 6 accounts BU-scoped: `gicabug1..4@manu.local` (G1/G2/G3/G4), `gicabuea@manu.local` (EA), `gicabutrm@manu.local` (TRM) — ทุกคน `role='gica_admin'` + `bu` ต่างกัน; password = ตัว empid

**รอดำเนินการ:**
```
Phase 4 — Jumper/Trainer: พักไว้ก่อน ยังไม่ตัดสินใจ ต้องแก้ repo CSA co NiSE ด้วย
```

### การตัดสินใจที่ล็อกไว้แล้ว
1. **Auth: Supabase email/password** แทน Microsoft OAuth ทั้งหมด
2. **Authorization ที่ Flask** — Bearer JWT → verify_jwt() → get_user_role() → require_writable(); service key bypass RLS; read ไม่ต้อง JWT
3. **Employee ID login pattern** — Admin สร้าง user ด้วย `{empid}@manu.local`; พนักงานกรอกแค่รหัส; JS ต่อท้าย `@manu.local` ก่อนยิง API
4. **MANAGER_REFRESH_TOKEN ยังอยู่** — service credential อ่าน Jumper/Trainer/CSA/GICA Excel เท่านั้น
5. **Role**: `csa_user`/`qe_edit`/`qe_read`/`gica_admin`/`qe_audit`/`qe_auditee`/`admin`/`viewer` ใน `profiles.role` — (`qe_user` ถูกเปลี่ยนเป็น `qe_edit`/`qe_read`; `gica_admin` = full admin ในโมดูล GICA เท่านั้น)
6. **Audit: 3 Supabase tables** (ไม่ใช่ 4 Excel tables): `audit_templates`/`audit_plans`/`audit_findings`; execution JSONB array ใน `audit_plans.execution`

### สร้าง User ใหม่ (Admin ทำ)
1. Supabase Dashboard → **Authentication → Users → Add user**
2. Email: `{empid}@manu.local`, Password กำหนดเอง
3. รัน SQL ตั้ง role:
   ```sql
   UPDATE profiles SET role = 'qe_audit' WHERE id = '<user_uuid>';
   -- roles: csa_user | qe_edit | qe_read | gica_admin | qe_audit | qe_auditee | admin
   ```

**หมายเหตุเวลาเพิ่ม role ใหม่** — ต้อง `ALTER TABLE profiles DROP/ADD CONSTRAINT profiles_role_check` ให้ครอบคลุมค่าใหม่ก่อน ไม่งั้น UPDATE จะ error

---

## Authentication Flow

### Supabase Email / Password Login

หน้า login มี **ช่องเดียว** — ผู้ใช้กรอกค่าเดียวใช้เป็นทั้ง empid และ password:

- Input `#loginPassword` (type=password) พร้อมปุ่มตา `#loginPwToggle` (toggle type ระหว่าง `password` ↔ `text`)
- Checkbox `#loginRemember` — บันทึกค่าใน `localStorage('login_remember_id')` (สะดวก autofill ครั้งถัดไป)

```
User กรอกค่าเดียว (raw)
→ JS ใช้ raw เป็นทั้ง empid และ password:
   email    = raw.includes('@') ? raw : `${raw}@manu.local`
   password = raw
→ POST /api/auth/login  → sb_auth_sign_in() → Supabase /auth/v1/token
→ return {access_token, ...}
→ _saveJwt(access_token) → localStorage('sb_jwt')
→ window.location.reload()
→ GET /api/me → verify_jwt() → get_user_role() → return {authenticated, user, role}
→ init() ตั้ง tab visibility ตาม role
```

⚠️ **ทุก Supabase user ต้อง set password = empid ของตัวเอง** เช่น `12345@manu.local` → password `12345` — ไม่งั้น login ไม่ผ่าน

### Role ↔ Tab Visibility

| Role | แหล่งที่มา | อ่าน | เขียน |
|---|---|---|---|
| `csa_user` | Supabase Auth | CSA tabs | ✓ |
| `qe_edit` | Supabase Auth | GICA tab | ✓ (GICA write: add employee, add result — **ลบไม่ได้** ต้องเป็น admin/gica_admin) |
| `qe_read` | Supabase Auth | GICA tab | อ่านอย่างเดียว (ไม่มีปุ่มแก้ไข) |
| `gica_admin` | Supabase Auth | GICA tab เท่านั้น | ✓ ทุกอย่างใน GICA (add/edit/delete employee, delete score) — ทำหน้าที่เหมือน admin แต่จำกัดโมดูล GICA |
| `gica_admin` + `bu` set | Supabase Auth | GICA tab, dashboard เห็นทุก BU แต่ Employee List เห็นแค่ BU ตัวเอง | ✓ เฉพาะ BU ตัวเอง (backend enforce ด้วย `require_bu_scope`) |
| `qe_audit` | Supabase Auth | Audit tab — ทุก sub-tab | ✓ (ทุก route ยกเว้น Respond ที่ auditee ก็ทำได้) |
| `qe_auditee` | Supabase Auth | Audit tab — Dashboard/Plan/Finding-CAR (ไม่เห็น Template) | ✓ เฉพาะ `POST /api/audit/plans/<id>/respond` |
| `admin` | Supabase Auth | ทุก tab | ✓ (รวม delete employee GICA) |
| `viewer` | fallback (ไม่มี role ใน profiles) | อ่านได้ตามที่ endpoint อนุญาต | ❌ |

> ⚠️ `qe_user` ถูกแบ่งเป็น `qe_edit` + `qe_read` แล้วต่อมาเพิ่ม `gica_admin` — อัปเดต `profiles_role_check` constraint ใน Supabase ตามลำดับ
> ⚠️ **Frontend delete gate** = `['admin', 'gica_admin'].includes(currentRole)` — ครอบคลุมทั้ง full gica_admin และ BU-scoped variant (backend เพิ่มเช็ค `require_bu_scope` ต่อ)

### Key Backend Functions

| Function | หน้าที่ |
|---|---|
| `verify_jwt(token)` | Decode ES256/HS256 JWT ผ่าน JWKS public key (ES256 = default สำหรับ Supabase project ใหม่) |
| `get_user_role(user_id)` | ดึง role จาก `profiles` table — cached in-process 5 นาที |
| `get_user_bu(user_id)` | ดึง `bu` scope จาก `profiles` — NULL = full access; cached 5 นาที |
| `extract_bearer(request)` | Parse `Authorization: Bearer <token>` header |
| `require_writable(allowed_roles)` | Decorator guard: ตรวจ JWT + role ก่อน route handler ทำงาน |
| `require_bu_scope(url_bu)` | Post-role guard สำหรับ GICA write endpoints: ถ้า user มี `bu` set ต้องตรงกับ URL BU ไม่งั้น 403 |
| `_get_manager_access_token()` | ดึง Microsoft AT สำหรับ Graph API (ใช้ MANAGER_REFRESH_TOKEN, cached 5 นาที) |
| `_get_request_actor(jwt_payload)` | แยก display name จาก JWT payload ใช้เป็น created_by/executed_by |

### Role-Based UI

- **Role badge**: `_roleBadgeText(role)` → CSA User / QE User / Auditor / Auditee / Admin / Viewer
- **Tab visibility**: กำหนดใน `init()` ตาม `currentRole`
- **Audit Plan action button**: gate 2 ระดับ — `canManage` (`qe_audit`/`admin`) vs `canRespond` (+`qe_auditee`) ดู `_auditPlanActionBtn()`

---

## API Routes

| Method | Path | Auth | หน้าที่ |
|---|---|---|---|
| GET | `/` | — | Serve SPA |
| GET | `/logout` | — | Clear JWT (redirect) |
| **POST** | **`/api/auth/login`** | — | Supabase sign-in → คืน JWT |
| **POST** | **`/api/auth/logout`** | — | Supabase sign-out |
| GET | `/api/me` | JWT optional | ดู auth status + user info + role |
| GET | `/api/departments` | — | List departments ทั้งหมด |
| GET | `/api/<dept>/employees` | — | ดูพนักงานทั้งหมด (พร้อม calculated status) |
| GET | `/api/<dept>/employees/<id>` | — | ดูพนักงานคนเดียว |
| POST | `/api/<dept>/employees` | ✓ writable | เพิ่มพนักงานใหม่ |
| PATCH | `/api/<dept>/employees/<id>` | ✓ writable | แก้ข้อมูลพนักงาน |
| GET | `/api/jumper-data` | — | ⚠️ legacy (frontend ไม่เรียกแล้ว) |
| GET | `/api/jumper-excel` | — | Jumper data จาก Excel (cached 5 นาที) |
| GET | `/api/trainer-excel` | — | Trainer data จาก Excel (cached 5 นาที) |
| GET | `/api/gica-excel` | — | GICA assessment data จาก **Supabase** (`gica_employees`/`gica_freq`/`gica_kpi`) |
| POST | `/api/gica/<bu>/employees` | ✓ writable | เพิ่มพนักงาน GICA ใหม่ |
| PATCH | `/api/gica/<bu>/employees/<empid>/result` | ✓ writable | เพิ่ม/แก้ผลสอบ GICA |
| **DELETE** | **`/api/gica/<bu>/employees/<empid>/results`** | ✓ `gica_admin`/`admin` | ลบผลสอบ (ทั้งหมดหรือเลือก attempts) |
| **DELETE** | **`/api/gica/<bu>/employees/<empid>`** | ✓ `gica_admin`/`admin` | ลบพนักงาน GICA |
| GET | `/api/audit-excel` | — | Audit data จาก **Supabase** (cached in-process 60s) |
| POST | `/api/audit/templates/forms` | ✓ writable | สร้าง Form ใหม่ หรือ version ใหม่ (ถ้า `Code` ตรงกัน) |
| POST | `/api/audit/plans` | ✓ writable | สร้าง Audit Plan (PlanID auto-gen `YYYY-MM-NNNN`) |
| PATCH | `/api/audit/plans/<plan_id>` | ✓ writable | แก้ Plan (เช่น Status → Cancelled) |
| POST | `/api/audit/executions` | ✓ writable | บันทึกผลตรวจ (รับ array — เขียนทีเดียวทั้ง checklist) |
| POST | `/api/audit/plans/<plan_id>/respond` | ✓ writable (`qe_audit`/`qe_auditee`/`admin`) | Bulk respond ทุก Open finding → Plan Pending Approval |
| PATCH | `/api/audit/findings/<finding_id>/approve` | ✓ writable | Approve finding (UUID string, ไม่ใช่ int) → ครบ = Plan Completed |
| POST | `/api/audit/findings` | ⚠️ legacy | frontend ไม่เรียกแล้ว |
| PATCH | `/api/audit/findings/<finding_id>/respond` | ⚠️ legacy | frontend ไม่เรียกแล้ว |
| PATCH | `/api/audit/findings/<finding_id>/close` | ⚠️ legacy alias | alias ของ `/approve` |

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
Supabase PostgreSQL (gica_employees / gica_freq / gica_kpi)
  → /api/gica-excel
  → _fetch_gica_supabase_data()    — sb_select 3 tables (parallel), แปลง kpi rows → {bu:{level:target}}
  → _build_gica_payload()          — pick latest attempt (จาก tests JSONB), build history[], match expectations
  → returns {employees, bus, freqTable, kpiDefaults}
  → _gicaData = {employees, bus}   — store ใน module variable
  → _gicaKpiTargets seeded from kpiDefaults
  → initGicaTab()                  — lazy-load ครั้งเดียว
  → renderGicaSummary() + charts + table
```

### Config
กำหนดใน `config.py`:

| Constant | Value | ใช้ที่ไหน |
|---|---|---|
| `GICA_MAX_TESTS` | `12` — จำนวน test slot สูงสุดต่อคน | **runtime** (app.py — guard จำนวนครั้งใน PATCH result) |
| `GICA_GRADE_ORDER` | `{A:4, B:3, C:2, D:1}` | **runtime** (app.py — จัด rank grade) |
| `GICA_EXCEL_SHARE_URL` | SharePoint sharing URL ของ GICA.xlsx | ⚠️ migration-only (`migrate_gica.py`) |
| `GICA_TABLE_PREFIX` | `"GICA_"` — table per BU: `GICA_G1`, ... | ⚠️ migration-only |
| `GICA_COLS` | `["bu","empid",...] + result{i}-1/-2, grade{i}-1/-2, date{i}` i=1..12 | ⚠️ migration-only |
| `GICA_FREQ_TABLE` | `"Table_freq"` — lookup expectation | ⚠️ migration-only |
| `GICA_KPI_TABLES` | `{G1: "kpi_g1", ...}` — per-BU KPI target tables | ⚠️ migration-only |
| `GICA_KPI_COLS` | `["level", "target"]` | ⚠️ migration-only |

> ⚠️ constant ที่มาร์ก **migration-only** ใช้แค่ตอนอ่าน Excel ใน `migrate_gica.py` เท่านั้น — runtime อ่าน Supabase ไม่แตะ Excel แล้ว

### Next Assessment Date — Scheduling Rules ⚠️

**ตัดสินจาก `_gica_uses_fast_retest(dept, level)`** ใน [app.py](app.py) → `True` เฉพาะ `dept ∈ {QA, QC}` และ `level ∈ {Officer, Worker}`

| กรณี | `scheduled_next` | `next_type` |
|---|---|---|
| ยังไม่เคยสอบ (มี `start_date`) | `start_date + 1 เดือน` | `Initial` |
| **QA/QC + Officer/Worker** สอบไม่ผ่าน | `ครั้งล่าสุด + 7 วัน` | `Retest` |
| อื่นๆ ทุกกรณี — สอบผ่านหรือไม่ผ่าน + มี `freq_months` | `ครั้งล่าสุด + freq_months เดือน` | `Review` ถ้าผ่าน / `Retest` ถ้าไม่ผ่าน |
| ไม่มี `freq_months` เลย | `None` | Review/Retest |

**เหตุผล:** เฉพาะ QA/QC + Officer/Worker เท่านั้นที่ต้อง retest ภายใน 7 วัน (fast retest cycle) — role อื่น (Supervisor+, Sewing, Technic, CSA) มี freq_months schedule เป็นหลัก ไม่ต้อง fast retest

**Passed logic:** `_gica_attempt_passed(g1, g2, exp1, exp2)` — grade ทั้ง 2 sub-tests ≥ expectation ทั้ง 2; ถ้าขาด exp1/exp2 (freq lookup ไม่เจอ) คืน `None` → คน pending

**⚠️ ห้ามลืม** — logic นี้ใช้ทั้งใน history loop (คำนวณ scheduled date ของ attempt ที่ผ่านมา) และ post-history (คำนวณ scheduled_next) ถ้าแก้กฎ ต้องแก้ทั้ง 2 ที่ให้สอดคล้อง

### Employee Object (from API)
```json
{
  "bu": "G1", "empid": "...", "name": "...", "deptname": "...",
  "level": "Supervisor", "position": "...", "attempt": 3,
  "score": 0.85, "grade": "A", "score1": 0.90, "score2": 0.80,
  "grade1": "A", "grade2": "B", "exp1": "A", "exp2": "A",
  "passed": true, "freqMonths": 6,
  "lastDate": "2025-01-15", "nextDate": "2025-07-15", "nextType": "Review",
  "history": [{ "n": 1, "score": 0.72, "score1": 0.75, "score2": 0.69, "grade": "B", "grade1": "B", "grade2": "B", "date": "2024-07-01" }]
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
| `renderGicaScheduleChart()` | Chart | Upcoming test schedule — 2 summary cards (คลิกได้เปิด shared modal) + chart: `all` mode = grouped bars ใน canvas เดียว (retest light + review solid), Retest/Review mode = single dataset |
| `renderGicaScheduleDrill()` | Delegator | Thin wrapper — เรียก `_gicaShowEmpListModal(...)` โดยตรง เมื่อ `_gicaSchedDate` set (จาก click chart bar); legacy inline HTML render ตัดออกแล้ว |
| `_gicaShowEmpListModal(headingText, printOpts, employees, dateRange?, initialBu?)` | Modal | Shared cohort/drill modal — เห็น BU bar + filter toolbar (Dept/Level/Attempt/Status/Search) + fail-stats + emp table; รับ `initialBu` optional เพื่อ preselect BU |
| `renderGicaTable()` | Table | Employee table paginated + filtered; `deletable = ['gica_admin','admin'].includes(currentRole)`; อัปเดต `#gica-count-badge` ตามผลกรอง; BU-scoped user เห็นแค่ BU ตัวเอง (filter ที่ `_gicaFilteredEmployees` ด้วย `_currentUserBu`) |
| `_wireGicaControls()` | Wire | Event handlers ทั้งหมดสำหรับ filter/toggle/pagination |
| `_wireGicaDeleteBtns(wrap)` | Wire | Wire delete buttons → confirm → `DELETE` API → refresh |
| `_gicaEmpTableMonthDots(e)` | Table | Monthly assessment dots — แบ่ง 2 แถว ×6 ถ้า > 6 dots |
| `_gicaShowAttemptDotsModal(empid)` | Modal | Assessment History: 3 Chart.js trend charts + stats panel |
| `_gicaAttemptStats(e)` | Pure | คำนวณ stats (total, pass/fail, streak, last/prev, avg, min/max) |
| `_gicaCompareTableHtml(s)` | Pure | div+grid Previous/Last/Diff comparison table |
| `_gicaOpenResultModal()` | Modal | Add Assessment Result (+ side-by-side Assessment History for QE) |
| `_gicaKpiListHtml(bu)` | Pure | KPI slider list per BU tab |
| `_computeGicaKpiSummary(emps)` | Pure | KPI Summary viewModel — org (denom=total) + per-BU (denom=tested) stats |
| `_gicaKpiSummaryHtml(vm)` | Pure | KPI Summary modal HTML: hero card + 6-col BU grid with donut rings |
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

### KPI Summary (read-only dashboard)
- ปุ่ม `#gica-kpi-summary-btn` วางข้างซ้ายปุ่ม KPI Setup ใน Expectation Matrix header
- Modal `#gica-kpi-summary-modal` (panel width 1080px) แสดง:
  - **Hero card** — Organization KPI: donut ring 132px + `passed / total (ทุกคนทุก BU)` — สีเปลี่ยนตามเปอร์เซ็นต์ (≥80% เขียว, ≥50% ส้ม, <50% แดง)
  - **BU grid** — 6 การ์ด (repeat(6,1fr) บนจอกว้าง, 3 บน ≤900px, 2 บน ≤560px): donut 92px + `passed / tested` + 3 pills (Passed/Failed/Pending)
- **Denominator ต่างกัน**: Organization ใช้ `total` (รวมคนที่ยังไม่สอบ); BU cards ใช้ `tested` (นับเฉพาะคนที่มีผลสอบ)
- ฟังก์ชัน: `_computeGicaKpiSummary(emps)` (pure, ต้องรับ `emps` ผ่าน vm) + `_gicaKpiSummaryHtml(vm)` (pure)
- Wire ใน `_mountGicaSummary` — rebuild body ทุกครั้งที่เปิด (ไม่แคชค่าเก่า)
- CSS: `.kpi-sum-hero`, `.kpi-sum-bu-card`, `.kpi-sum-ring` — ธีม BU ใช้ `--kpi-bu-color` custom property จาก `GICA_BU_COLORS`

### KPI Detail per Level (drill-down จาก KPI Summary BU card)
- คลิก BU card ใน KPI Summary → เปิด `#gica-kpi-bu-detail-modal` (panel `.gica-kpi-bu-detail-modal__panel`, `max-height:94vh`) — Summary ยังโผล่ข้างหลัง
- แสดง Hero card (BU + Organization avg %) + per-level rows (grid `130px 70px 150px 60px 1fr 90px`: Level / Target / Actual / % / Counts / Status)
- Status มี 2 ค่าเท่านั้น: **Pass / Fail** (ถ้าไม่มีผลสอบ → `—` plain text ไม่ใช่ badge)
- ปุ่ม PNG (html2canvas) + Print — hero card **ห้ามใช้ `color-mix()`** (html2canvas 1.4 parse ไม่ได้) — ใช้ `border-left: 4px solid var(--kpi-bu-color)` แทน
- **Layered ESC**: กด ESC ที่ Detail → ปิดเฉพาะ Detail modal, Summary ยังอยู่ (back-navigation) — logic ใน `_mountGicaSummary` → `window._gicaEscHandler` เช็ค `kpiBuDetailModal` hidden ก่อนตัดสินว่าจะปิดชั้นไหน
- ฟังก์ชัน: `_computeGicaKpiBuDetail(emps, bu, kpiTargets)` (pure) + `_gicaKpiBuDetailHtml(vm)` (pure) + `_gicaOpenKpiBuDetailModal(bu)` + `_gicaExportKpiBuDetailPng` + `_gicaPrintKpiBuDetail`

### Quadrant Analysis
- `quad` determination uses raw scores (`rx`/`ry`) ไม่ใช่ jittered coordinates (`x`/`y`)
- Jitter ±1.5% ใช้แค่สำหรับ visual scatter ป้องกันจุดซ้อน
- Responsive: `.quad-grid` ใช้ `minmax(0, 1fr)` ป้องกัน overflow; ≤1024px → 2 col; ≤640px → 1 col ต่อแถว

### Assessment History Modal
- **3 Chart.js line charts** แถวบน: Measurement / Inspection / Average
- **Statistics panel** แถวล่าง: 3 columns (Summary / Compare table / Overall)
- QE Edit Mode: เปิด side-by-side กับ Add Assessment Result modal

### Data Fetch (Supabase)
- `_fetch_gica_supabase_data`: `sb_select` 3 tables (`gica_employees`/`gica_freq`/`gica_kpi`) แบบ parallel (`ThreadPoolExecutor`, max_workers=3)
- ⚠️ Graph API throttling fix เดิม (retry/backoff ตอนอ่าน Excel) **ไม่เกี่ยวกับ GICA แล้ว** — ย้ายมา Supabase หมด (ยังใช้กับ Jumper/Trainer ที่ยังอ่าน Excel)

### Assessment Date Display
- Modal **Add Assessment Result**: date field = hidden `type="date"` + visible `type="text"` แสดง "2 July 2026" (`en-GB` long format)
- 📅 icon วางด้วย `position:absolute` + `pointer-events:none` เพื่อไม่บัง click บน hidden input
- Default = วันนี้ (`new Date().toISOString().slice(0,10)`) — set เมื่อ `_wireGicaResultModal` init
- ฟังก์ชัน `_gicaUpdateDateLabel(isoVal)` + `_gicaUpdateStartDateLabel(isoVal)` — แปลง ISO → readable
- Modal **Create new operator**: Start Date ใช้ pattern เดียวกัน + default = วันนี้

### GICA Employee List Table

ใช้ `class="emp-table gica-emp-table"` — shared design system เดียวกับ New Operator
- **ไม่มี** row-number column (`showNum = false` hardcoded)
- Header ทุกคอลัมกึ่งกลาง (`.gica-emp-table thead th { text-align: center !important; }`)
- Count badge `#gica-count-badge` อยู่ใน `<h3>` header — อัปเดตตามกรองทุกครั้ง
- Sortable: `onclick="_gicaSort(key)"` บน TH, `.gica-th-sort` cursor pointer
- Editable (qe_edit/admin): ชื่อพนักงานคลิกได้ → `class="gica-emp-name-cell" data-empid data-bu`
- Deletable (admin only): icon trash `.gica-delete-emp-btn`
- `_gicaEmpTableHtml(rows, opts)` ใช้ร่วมกัน main table + drill-down modal (`sortable: false`)

### Assessment Schedule — Row 1 Cards (โครง 3 การ์ด)

Row 1 เหลือ **3 การ์ด** เรียง: **Due this week → Overall On-time Rate → Failure Status by Consecutive Attempts**
(ใช้ grid `stat-grid--3` แทน `stat-grid--4`; การ์ด "Assessment Required" เดิมยังอยู่ในโค้ด — `gaugeStatCard` + `failedBuBarChart` — แต่ไม่ได้ render ใน row 1 แล้ว เก็บไว้เผื่อใช้ในอนาคต)

ทุกการ์ดในแถวนี้ใช้โครง `.row1-card > .row1-head + .row1-body.row1-body--divided` เพื่อให้:
- Header สูงเท่ากันด้วย `.row1-head { min-height:110px }` — แม้เนื้อหา header ไม่เท่ากัน (Due week มี 2-col split, On-time มี label+value, Failure มี label+value)
- แถว BU (G1/G3/G2/G4/TRM/EA) เรียงระดับเดียวกันแนวนอนข้ามการ์ดด้วย `.row1-body .mini-bar__row--lg { min-height:24px }`

**Failure Status by Consecutive Attempts** (การ์ดที่ 3):
- คำนวณ per-BU: `vm.employees.filter(passed===false)` → group by `bu` → นับ fail streak ด้วย `_gicaFailStreak(e)` แยกเป็น fail1/fail2/fail3
- แต่ละ BU row = bar แบ่ง 3 segments proportional (เหลือง/ส้ม/แดง) + total count
- Legend `.row1-legend` วางท้ายการ์ด (ใต้ BU rows) — มีเส้นแบ่ง dashed คั่นจาก BU rows
- โค้ดเดิม `donutStatCard` + `donutFailStreakLg` ยังอยู่ ไม่ได้ลบ (ถูก replace โดย `failStreakStatCard`)

**Due this week — flip card** (การ์ดที่ 1):
- คลิกที่ตัวการ์ด (ไม่มีปุ่มปิดบน) → พลิกด้วย `.flip-card-wrap` / `.is-flipped`
- **หน้าหน้า**: header 2 คอลัม (Due this week + Early Assessment) + **vertical SVG bar chart** (`dueWeekBarChart(vm.weeklyBuCards)`) — ความสูงเต็ม = `attended + earlyN + overdue`, สีเข้ม = คนที่มาสอบแล้ว, สีอ่อน (opacity 0.25) = overdue; label "done/total" เหนือแท่ง
- **หน้าหลัง**: header เดียวกัน + horizontal `combinedBuRows` (Pass/Fail/Awaiting stack)
- Pattern SVG bar เดียวกับ `buBarChart` (Total employees ใน Performance tab)

### Assessment Schedule — "Due this week" Logic ⚠️

**G3 ขึ้น "no data" ใน Due this week / On-time Rate / BU cards แถว 2 = พฤติกรรมปกติ ไม่ใช่ bug**

แหล่งข้อมูลแต่ละส่วน:
- **บาร์ชาร์ต "Assessment Required"** — นับจาก `allSchedable` (ทุกคนที่มี `scheduledNext` หรือ `startDate`) ทุก BU
- **"Due this week" + BU cards แถว 2** — นับเฉพาะ `_computeGicaWeeklyBuCards()` cohort:
  1. สอบสัปดาห์นี้แล้ว (attended this week)
  2. `scheduledNext` ตกในสัปดาห์นี้พอดี
  3. `scheduledNext` ผ่านมาแล้ว (overdue)

BU ที่วันนัดสอบยังอยู่ในอนาคต (ไม่ใช่สัปดาห์นี้) จะขึ้น "no data" ซึ่ง**ถูกต้อง**

### Assessment Schedule Timeline — Calculation Logic ⚠️ ห้ามแก้โดยไม่อ่านส่วนนี้ก่อน

กราฟแสดง buckets ใน **3 mode**:
- **Day**: 22 buckets (−7 ถึง +14 วัน จากวันนี้) — granularity แคบสุด, replace concept "Upcoming Assessments per-day"
- **Week**: 12 buckets (−5 ถึง +6 สัปดาห์)
- **Month**: 12 buckets (−5 ถึง +6 เดือน)

`_gicaSchedBuckets(today, mode)` เป็น branch เดียวจัดการทั้ง 3 modes — `compute` และ `render` ที่เหลือ generic ผ่าน `timelineMode`

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

#### ฟังก์ชันหลัก (app.js)
| ฟังก์ชัน | หน้าที่ |
|---|---|
| `_gicaSchedBuckets(today, mode)` | สร้าง 12 buckets (week/month) |
| `_gicaSchedBucketIdx(iso, buckets)` | หา index ของ bucket ที่ date ตก |
| `_computeGicaSchedule(emps, today, mode)` | คำนวณ timeline viewModel — **pure** |
| `_gicaScheduleHtml(vm)` | สร้าง HTML — **pure** |
| `_mountGicaSchedule(html, vm)` | mount DOM + Chart.js |

### Upcoming Assessments — Merged chart + Clickable summary

- **2 summary cards** ด้านบน — Failed (`retestEmps` = `passed===false && nextDate`) กับ Passed (`reviewEmps` = `passed===true && nextDate`) — **คลิกได้** (cursor:pointer + hover bg + role=button + Enter/Space keyboard) → เปิด `_gicaShowEmpListModal` แสดง cohort เต็ม
- **Mode `All`** → **1 chart** (`_makeMergedChart`) มี 2 datasets grouped bars: retest ใช้สี BU opacity 0.4 (light), review ใช้สี BU solid; sort by date asc → BU rank (`BU_ORDER`)
- **Mode `Retest`/`Review`** → single chart (`_makeChart(..., variant)`); canvas ขวาซ่อนไว้
- Click แท่งใดๆ → `onPick({date, bu})` → set `_gicaSchedDate/Bu` → `renderGicaScheduleDrill()` → shared modal ผ่าน delegator

### Shared Cohort/Drill Modal (`_gicaShowEmpListModal`)

**Entry points ที่ใช้ modal นี้ร่วมกัน:**
- คลิก BU card ใน Due-this-week (Assessment Schedule row 1)
- คลิกแท่งใน Upcoming Assessments chart (Retest/Review)
- คลิกแท่งใน Assessment Schedule Timeline chart
- คลิก 2 summary count cards (Failed / Passed) ใน Upcoming section

**Signature:** `(headingText, printOpts, employees, dateRange?, initialBu?)` — `initialBu` optional เพื่อ pre-select BU filter

**Filter toolbar (right side, same row as fail-stats):**
- `Dept ▾` / `Level ▾` / `Attempt ▾` / `Status ▾` (= `nextType`: Initial/Retest/Review) / `Search box`
- Options narrow ตาม BU filter ปัจจุบัน; state reset ทุกครั้งที่ modal เปิด
- Search focus survive per-key re-render — capture `document.activeElement.id === 'gica-cohort-filterSearch'` ก่อน `body.innerHTML =` แล้ว restore ทันที
- Class layout: `.gica-cohort-toolbar` (flex row space-between) + `.gica-cohort-filters` (flex right)
- Modal panel max-width = **1400px** (ขยายจาก 1200px)

**Legacy DOM ที่ลบไปแล้ว:** `<div id="gica-scheduleDrill-modal">` block + `_gicaDrillEscHandler` state + `renderGicaScheduleDrill`'s inline HTML render — ทุก entry point ใช้ shared modal อันเดียว

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
แท็บ Audit คือระบบ Internal Process Audit ผูกกับ BU/Dept เดิม (G1-G4/TRM/EA)
- **`qe_audit`** (Auditor) — เห็นทุก sub-tab, เขียนได้ทุก route ยกเว้น Respond ที่ auditee ก็ทำได้
- **`qe_auditee`** (Auditee) — เห็น Dashboard/Audit Plan/Finding-CAR เท่านั้น (ไม่เห็น Template), เขียนได้แค่ `POST /api/audit/plans/<id>/respond`
- **`admin`** — ทุกอย่าง

มี 4 sub-tab ที่เห็นในแถบ (Auditor): **Dashboard / Audit Plan / Template / Finding-CAR**
**Execution** เป็น panel ที่ 5 ที่ไม่มีปุ่มในแถบ — เข้าถึงได้ผ่านปุ่ม "เปิด Execution" ในตาราง Audit Plan เท่านั้น

⚠️ **ปุ่ม "Save Execution Results" disable ตัวเองทันทีที่กด** (label → "Saving…") จนกว่า `POST /api/audit/executions` จะเสร็จ — กันปัญหา double-submit

### Dashboard — 5 แถว

**แถว 1 — 4 การ์ด (`stat-grid--4`):**

| การ์ด | แสดงอะไร | ที่มาข้อมูล |
|---|---|---|
| Total Audit | จำนวน Plan ทั้งหมด + กราฟแท่งต่อ BU (stack: Completed / ยังไม่ Completed) | `data.plans` |
| Overall Score | Donut Conformity/Major NC/Minor NC/OFI ปัจจุบัน — center = % Compliance | `e.ActualResult` |
| Original Score | Donut เดียวกัน แต่จาก `Score` ดิบ | `e.Score` |
| Overall Status | Donut Plan Status ทั้งหมด — center = % Completion Rate | `data.plans` |

**Donut renderer:** `_leaderDonut()` generic + `ratingDonut()` / `statusDonut()` wrapper

**แถว 2 — Finding/CAR Pipeline ต่อ BU:** segmented bar Open/Responded/Approved + breakdown 3 แถว + badge "ค้างนานสุด X วัน"

**แถว 3 — Audit Plan Pipeline ต่อ BU:** breakdown 5 สถานะ + completion rate bar

**แถว 4 — Top 3 Major NC ซ้ำบ่อยสุดต่อ BU:** rank badge + item text + จำนวนครั้ง (อิงจาก `Score` ดิบ)

แถว 2/3/4 gate empty-state ด้วย `vm.planCountByBu[bu]` — 0 finding คือข่าวดี ไม่ใช่ "no data"

⚠️ **ห้ามใช้ `.stat-card__sub-row`** กับ breakdown list — ใช้ `.u-between` + `font-size:0.74rem` แทน

**แถว 5 — Audit Trend chart ("Initial Audit vs Re-audit"):**
- stacked bar (Conformity/Major NC/Minor NC/OFI) แต่ละแท่ง = BU+รอบ
- `_auditPctBreakdown()` largest-remainder rounding (ไม่ใช้ `Math.round()` อิสระ — เจอบั๊กมาแล้ว)
- `borderRadius` เช็ค `> 0` ไม่ใช่ `!= null` — เจอบั๊กมาแล้ว
- plugin `_auditRoundDividers` วาดเส้นแบ่งรอบ, `_auditBarLabels` วาด tick label 2 บรรทัดเอง
- KPI Setup: `localStorage('auditKpiTargetCompliance')` default 80% — ไม่ sync ข้ามเครื่อง

**Category/Year filters** — ใน nav row เดียวกับ subtab bar, มีผลกับ Dashboard ทั้ง 5 แถว

### Data Model — Supabase PostgreSQL

3 tables **ไม่แบ่งตาม BU** — BU เป็น column value เท่านั้น:

| Table | PK | คอลัมน์หลัก |
|---|---|---|
| `audit_templates` | `id` (UUID) | `code`, `version`, `category`, `template_name`, `active`, `items` (JSONB array `[{item_no, item_text}]`), `created_by`, `created_at` |
| `audit_plans` | `id` (UUID) | `plan_id` (string `YYYY-MM-NNNN`), `bu`, `department`, `form_code`, `form_version`, `audit_title`, `scheduled_date`, `auditor1/2/3`, `status`, `created_by`, `execution` (JSONB array `[{item_no, score, comment, executed_by}]`) |
| `audit_findings` | `id` (UUID) | `plan_id`, `bu`, `item_no`, `severity`, `description`, `root_cause`, `corrective_action`, `responsible_person`, `due_date`, `status`, `opened_by`, `opened_at`, `responded_by`, `approved_by`, `approved_at`, `notes` |

⚠️ **ไม่มี translation layer แล้ว** (ลบ `_audit_map_in`/`_audit_map_out`/`AUDIT_FIELD_MAPS`/`_audit_to_iso` ออกทั้งหมด) — column ใน Supabase ตั้งชื่อ snake_case สะอาด ตรงกับ field name ใน code เลย

**API response shape** (`/api/audit-excel`) ยังเหมือนเดิม `{templates, plans, executions, findings}` เพื่อไม่ให้ frontend ต้องแก้:
- `_audit_supabase_payload()` ใน `app.py` flatten JSONB → shape เดิม
- Synthetic `ExecutionID`: `f"{plan_id}_{item_no}"` (deterministic, generated at read time)
- `ActualResult`: computed at read time — Approved finding → `"Conformity"` (ไม่เก็บใน DB)
- `FindingID`: UUID string (route `<finding_id>` ไม่ใช่ `<int:finding_id>`)

### PlanID — รูปแบบพิเศษ
`plan_id` เป็น string **`YYYY-MM-NNNN`** (เช่น `2026-06-0001`) — running number รายเดือน generate โดย `_audit_next_plan_id()`

### Plan Status — ตั้งอัตโนมัติ
```
Planned --[Save Execution มี NC]--> Issued
Planned --[ผู้ใช้กด Cancel]--> Cancelled
Issued             --[Auditee bulk respond]--> Pending Approval
Pending Approval   --[Auditor approve ครบ]--> Completed
```

| Plan Status | ปุ่มที่แสดง | คลิกแล้วไปไหน |
|---|---|---|
| `Planned` | "เปิด Execution" + ทั้งแถวคลิก Cancel | `_auditSwitchSubtab('execution')` / `_auditOpenCancelPlanModal()` |
| `Issued` | "Respond" | `_auditOpenPlanRespondModal()` |
| `Pending Approval` | "Approval" | `_auditOpenPlanApprovalModal()` |
| `Completed` / `Cancelled` | disable (—) | — |

### Template = "Form" + Versioning
- **Code**: identity คงที่ข้าม version (เช่น `AUD-CSA-001`)
- **Version**: เพิ่มทุกครั้งที่แก้ Form — แก้ = สร้าง version ใหม่ + ปิด `active=false` version เก่า
- **Category**: ค่าเดียวต่อทั้ง Form — ใช้เป็นตัวเลือกใน Audit Title dropdown ตอนสร้าง Plan
- **items**: JSONB array `[{item_no, item_text}]` ไม่ใช่ rows แยก

### Execution Rating — fixed enum
```python
AUDIT_EXECUTION_RATINGS = ["Conformity", "Major Non-Conformity", "Minor Non-Conformity", "OFI"]
```
- เก็บใน `audit_plans.execution[].score`
- **`score`**: immutable ณ เวลาตรวจ (original)
- **`ActualResult`**: computed — Approved finding → "Conformity" (แสดง current compliance state)

### Finding / CAR — auto-create + 3-step lifecycle
Finding ทุกข้อ **auto-create** จาก NC execution items ทันทีที่ Save Execution สำเร็จ (`_auto_create_findings_for_plan()`, idempotent — เช็ค `item_no` ก่อนสร้างซ้ำ)

```
Open (auto) → Responded (bulk via /respond) → Approved (ต่อ finding)
```

`approved_by`/`opened_by` ยังเป็น free text — ดึงจาก JWT payload display_name (`_get_request_actor()`)

### Frontend Functions (app.js)
| ฟังก์ชัน | หน้าที่ |
|---|---|
| `initAuditTab()` | Lazy-load ครั้งเดียว, fetch `/api/audit-excel`, wire sub-tab + modal ทั้งหมด |
| `_auditRefetch()` | Re-fetch + re-render ทุก sub-tab หลัง write |
| `_auditFormGroups(templates)` | Group items by `Code` → 1 entry ต่อ Form |
| `_auditTemplateGroups(templates)` | Group items by `Category`+`Version` — ใช้ resolve ชื่อ Form ใน Plan/Execution |
| `renderAuditDashboard/Plan/Template/Execution/Finding()` | Orchestrator ต่อ sub-tab |
| `_auditPlanActionBtn(p, canManage, canRespond)` | Resolve ปุ่ม action ตาม `Status` + role |
| `_auditOpenPlanRespondModal(planId)` | Modal bulk respond — Auditee กรอก RootCause/CorrectiveAction/ResponsiblePerson/DueDate |
| `_auditOpenPlanApprovalModal(planId)` | Modal approve ทีละข้อ — Auditor |
| `_auditOpenCancelPlanModal(planId)` | Modal ยืนยัน Cancel Plan (คลิกทั้งแถว เช็ค `e.target.closest('button')` ก่อน) |
| `_computeAuditDashboardVm(data)` / `_auditDashboardHtml(vm)` | Dashboard compute→html |
| `_leaderDonut(...)` / `ratingDonut(...)` / `statusDonut(...)` | SVG donut + 2 thin wrapper |
| `_auditPctBreakdown(counts, tot)` | Largest-remainder rounding → % รวมได้ 100 เป๊ะ |
| `_mountAuditDashboard(html, vm)` | innerHTML + Chart.js trend chart + KPI Setup modal |
| `_populateAuditDashFilters()` / `_wireAuditDashFilters()` | Category/Year filter options + listener |
| `_gicaDaysBadge(iso)` | reuse GICA — Days Remaining badge ใน Plan table |

---

## Environment Variables

ต้องมีใน `.env` (local) หรือ Vercel Environment Variables (production):

| Variable | หน้าที่ | จำเป็น? |
|---|---|---|
| `FLASK_SECRET_KEY` | Secret key สำหรับ sign Flask response (cookie fallback) | ✓ |
| `SUPABASE_URL` | Supabase project URL (`https://<ref>.supabase.co`) | ✓ |
| `SUPABASE_SERVICE_KEY` | Supabase service role key (bypass RLS) — ห้าม expose frontend | ✓ |
| `SUPABASE_JWT_SECRET` | JWT secret (base64) — ใช้ fallback HS256 เท่านั้น; ES256 ดึง public key จาก JWKS | optional |
| `CLIENT_ID` | Azure App Registration client ID (สำหรับ Graph API token refresh) | ✓ |
| `CLIENT_SECRET` | Azure App Registration client secret | ✓ |
| `TENANT_ID` | Azure AD tenant ID | ✓ |
| `MANAGER_REFRESH_TOKEN` | Refresh token สำหรับ Graph API (Jumper/Trainer/CSA/GICA Excel) | ✓ |
| `KV_REST_API_URL` / `KV_REST_API_TOKEN` | L2 shared cache (Upstash Redis) — optional | optional |

**ตัดออกแล้ว (ไม่ต้องใส่อีก):** `REDIRECT_URI`, `ADMIN_EMAIL`, `QE_DOOR_PASSWORD`, `ADMIN_DOOR_PASSWORD`, `SESSION_TYPE`

---

## Departments (BU)

กำหนดใน `config.py`:

| Key | Label | Excel Workbook (CSA/Jumper/GICA) |
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

## New Operator Tab — Subtabs

แท็บ New Operator มี 4 sub-tab:

| Sub-tab | `currentNewOpType` | หน้าที่ |
|---|---|---|
| **Overall** | `null` | แสดงพนักงาน Sewing + QC/QA + Technic รวมกัน |
| **Sewing** | `'Sewing'` | กรองเฉพาะ Type = Sewing |
| **QC/QA** | `'QC/QA'` | กรองเฉพาะ Type = QC/QA |
| **Technic** | `'Technic'` | 🚧 Placeholder — แสดง `#newop-technic-panel` (รอ Type column ใน Supabase) |

- `_matchesNewOpType(emp)` — คืน `true` ถ้า `currentNewOpType === null` (Overall) หรือ `emp.Type === currentNewOpType`
- `initNewOpSubtabs()` — wire 4 ปุ่ม subtab; Technic เรียก `_newOpShowTechnicPlaceholder(true)` + ซ่อน dashboard
- `_newOpShowTechnicPlaceholder(show)` — toggle `#newop-technic-panel` และ `#homeDashCard`
- `createNewEmployee()` — ใช้ `currentNewOpType || 'Sewing'` เป็น fallback Type เมื่ออยู่ใน Overall tab

### Employee Data Table (New Operator)

ใช้ class system `.emp-table` — **ห้ามใช้ inline style ใน table นี้**

**13 คอลัม** (จากซ้ายไปขวา):

| คอลัม | Field | หมายเหตุ |
|---|---|---|
| `#` | row number | auto เรียง 1-based ต่อหน้า |
| Emp ID | `Employee ID` | `.emp-id-cell` (Geist Mono) |
| Name | `Employee Name` | `.emp-name-cell` |
| Type | `Type` | `.type-pill--{sewing/qcqa/technic}` |
| Grade | `Grade` | `.grade-chip--{b/c/d/e}` ⟵ **col-group-end** |
| CSA Start | `CSA Start Date` | formatted "15 Jan 25" |
| Due Date | computed | read-only ⟵ **col-group-end** |
| Basic Training | `Basic Start` + `Basic End` | "Start → End" format |
| Operation | `Operation Start` + `Operation End` | ⟵ **col-group-end** |
| Eff % | `Graduate Eff` | `.emp-eff-val` (Geist Mono) |
| Status | computed `actualKey` | `.status-pill--{key}` |
| Leave | `Employees Leave` | count |
| Actions | edit/delete | `.emp-act-btn` (hover-only opacity) |

**Sort order:** `CSA Start Date` descending (newest employee on page 1) — sort ใน frontend `renderEmployeeTable()` ก่อน paginate

**Inline edit:**
- กด Esc → cancel (listener ผูกกับ `tr._ieEscListener`, cleanup เมื่อ confirm/cancel)
- ปุ่ม ✓ / ✗ อยู่คอลัมขวาสุด (`.ie-action-cell`)
- Basic/Operation แต่ละช่องแสดง Start + End แบบ 2 แถวมี label (`.ie-date-pair` / `.ie-date-label`)
- `cancelInlineEdit` เรียก `renderEmployeeTable(lastEmployees)` เพื่อรักษา row numbers

**Eff %:** ค่าใน Excel/Supabase เป็น decimal ratio เสมอ (0.85 = 85%, 1.02 = 102%) — `fmtEff` ใช้ `n * 100` เสมอ **ห้ามเช็ค `n > 1`** เด็ดขาด

**Header:** `.emp-table th { text-align: center }` — หัวคอลัมทุกคอลัมกึ่งกลาง

**Pagination:** numbered buttons (`.emp-pg-btn`) ผ่าน `_renderNewOpPagination()` + event delegation บน `#newop-pageNav`
- กด pagination: save `window.scrollY` ก่อน `renderEmployeeTable`, restore ด้วย `requestAnimationFrame(() => window.scrollTo({ top: sy, behavior: 'instant' }))` — หน้าจอไม่กระโดด

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

### Supabase Setup (ครั้งแรก)
```sql
-- รันใน Supabase SQL Editor ตามลำดับ:
-- 1. migrations/001_profiles.sql
-- 2. migrations/002_audit.sql
-- 3. migrations/003_csa.sql
-- 4. migrations/004_gica.sql
-- 5. migrations/005_gica_next_date_override.sql
-- 6. migrations/006_profiles_bu.sql

-- Grant service_role access (ถ้ายังไม่ได้ทำ):
GRANT ALL ON public.profiles TO service_role;
GRANT ALL ON public.audit_templates TO service_role;
GRANT ALL ON public.audit_plans TO service_role;
GRANT ALL ON public.audit_findings TO service_role;
GRANT ALL ON public.csa_employees TO service_role;
GRANT ALL ON public.gica_employees TO service_role;
GRANT ALL ON public.gica_freq TO service_role;
GRANT ALL ON public.gica_kpi TO service_role;
```

---

## Vercel Deployment

### Environment Variables ที่ต้องตั้งใน Vercel Dashboard
```
FLASK_SECRET_KEY=...
SUPABASE_URL=...
SUPABASE_SERVICE_KEY=...
CLIENT_ID=...
CLIENT_SECRET=...
TENANT_ID=...
MANAGER_REFRESH_TOKEN=...
KV_REST_API_URL=...       (optional)
KV_REST_API_TOKEN=...     (optional)
```
**อย่าใส่ `SESSION_TYPE`** — ไม่ใช้ Flask-Session แล้ว

### ข้อจำกัดบน Vercel
- Vercel เป็น **serverless** — `_MANAGER_AT_CACHE`, `_AUDIT_CACHE`, `_GICA_CACHE` หายเมื่อ cold start
- Supabase ไม่มีปัญหา cold start (HTTP REST ทุก request)
- ไม่ต้อง restart server เมื่ออัปเดต Jumper/GICA data — cache TTL 5 นาที

---

## ความสัมพันธ์กับโปรเจ็คอื่น

โปรเจ็คนี้เคยเป็น **consumer** ของข้อมูลจาก `CSA co NiSE` (โปรเจ็คแยก) ผ่าน `/api/jumper-data`:
- `CSA co NiSE` ดึงข้อมูลจากระบบ NiSE แล้วอัปโหลดขึ้น OneDrive (`npm run fetch && npm run push`)
- ทั้งสองโปรเจ็คใช้ `MANAGER_REFRESH_TOKEN` ตัวเดียวกัน (ควร copy ค่าเดียวกัน)

> ⚠️ **`/api/jumper-data`** ไม่มี frontend code เรียกใช้แล้ว — Jumper tab อ่าน `Jumper_Monitoring.xlsx` ตรงผ่าน `/api/jumper-excel` แทน
