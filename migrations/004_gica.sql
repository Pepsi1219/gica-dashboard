-- Phase 3: GICA Assessment → Supabase
-- Replaces 6 per-BU Excel tables (67 flat columns each) with 3 clean tables.
-- Run after 001_profiles.sql, 002_audit.sql, 003_csa.sql.

-- Employee base info + all test history as JSONB array
-- tests element: {n, result1, result2, grade1, grade2, date}
CREATE TABLE IF NOT EXISTS gica_employees (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  bu          TEXT        NOT NULL,
  empid       TEXT        NOT NULL,
  name        TEXT,
  deptname    TEXT,
  level       TEXT,
  position    TEXT,
  start_date  TEXT,
  tests       JSONB       NOT NULL DEFAULT '[]',
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS gica_employees_bu_empid
  ON gica_employees (bu, empid);

-- Expectation + review frequency lookup (replaces Table_freq in Excel)
CREATE TABLE IF NOT EXISTS gica_freq (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  department   TEXT,
  level        TEXT,
  role         TEXT,
  freq_months  INT,
  expectation1 TEXT,
  expectation2 TEXT
);

-- KPI target per BU × level (replaces kpi_g1 ... kpi_trm tables in Excel)
CREATE TABLE IF NOT EXISTS gica_kpi (
  id     UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
  bu     TEXT    NOT NULL,
  level  TEXT    NOT NULL,
  target NUMERIC
);

CREATE UNIQUE INDEX IF NOT EXISTS gica_kpi_bu_level
  ON gica_kpi (bu, level);

-- RLS (service_role bypasses automatically)
ALTER TABLE gica_employees ENABLE ROW LEVEL SECURITY;
ALTER TABLE gica_freq      ENABLE ROW LEVEL SECURITY;
ALTER TABLE gica_kpi       ENABLE ROW LEVEL SECURITY;

CREATE POLICY "gica_emp public read"  ON gica_employees FOR SELECT USING (true);
CREATE POLICY "gica_emp auth write"   ON gica_employees FOR ALL    USING (auth.role() = 'authenticated');
CREATE POLICY "gica_freq public read" ON gica_freq      FOR SELECT USING (true);
CREATE POLICY "gica_freq auth write"  ON gica_freq      FOR ALL    USING (auth.role() = 'authenticated');
CREATE POLICY "gica_kpi public read"  ON gica_kpi       FOR SELECT USING (true);
CREATE POLICY "gica_kpi auth write"   ON gica_kpi       FOR ALL    USING (auth.role() = 'authenticated');

GRANT ALL ON public.gica_employees TO service_role;
GRANT ALL ON public.gica_freq      TO service_role;
GRANT ALL ON public.gica_kpi       TO service_role;
