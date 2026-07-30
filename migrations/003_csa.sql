-- Phase 2: CSA (New Operator) employees → Supabase
-- Consolidates 6 per-BU Excel workbooks into one table.
-- Run after 001_profiles.sql and 002_audit.sql.

CREATE TABLE IF NOT EXISTS csa_employees (
  id                   UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  bu                   TEXT        NOT NULL,
  employee_id          TEXT        NOT NULL,
  employee_name        TEXT,
  type                 TEXT,
  grade                TEXT,
  week                 TEXT,
  csa_start_date       TEXT,
  due_date_excel       TEXT,
  op_end_week          TEXT,
  three_days_resign    TEXT,
  remaining_days       TEXT,
  non_working_days     TEXT,
  due_date_week        TEXT,
  basic_start          TEXT,
  basic_end            TEXT,
  operation_start      TEXT,
  operation_end        TEXT,
  resign_date          TEXT,
  transfers_date       TEXT,
  graduate_eff         TEXT,
  on_time              TEXT,
  actual_status        TEXT,
  comment              TEXT,
  employees_leave      TEXT,
  review               TEXT,
  total_training_days  TEXT,
  created_at           TIMESTAMPTZ DEFAULT NOW(),
  updated_at           TIMESTAMPTZ DEFAULT NOW()
);

-- Business key: one employee per BU
CREATE UNIQUE INDEX IF NOT EXISTS csa_employees_bu_empid
  ON csa_employees (bu, employee_id);

ALTER TABLE csa_employees ENABLE ROW LEVEL SECURITY;

-- Reads are public (same pattern as audit tables)
CREATE POLICY "csa public read" ON csa_employees
  FOR SELECT USING (true);

-- Writes require authenticated session (service_role bypasses RLS automatically)
CREATE POLICY "csa auth write" ON csa_employees
  FOR ALL USING (auth.role() = 'authenticated');

GRANT ALL ON public.csa_employees TO service_role;
