-- Audit module tables for Supabase
-- Replaces the 4-table Excel + translation-layer schema with 3 clean tables.
-- Run in Supabase SQL editor after 001_profiles.sql.

-- ── Templates ────────────────────────────────────────────────────────────────
-- One row per Form Code+Version. Checklist items stored as a JSONB array
-- so a whole Form version is always read/written atomically.
-- items: [{item_no: int, item_text: str, section?: str}, ...]
CREATE TABLE IF NOT EXISTS public.audit_templates (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  code          TEXT        NOT NULL,
  version       INTEGER     NOT NULL,
  category      TEXT        NOT NULL,
  template_name TEXT,
  active        BOOLEAN     NOT NULL DEFAULT TRUE,
  created_by    TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  items         JSONB       NOT NULL DEFAULT '[]',
  UNIQUE (code, version)
);

-- ── Plans ─────────────────────────────────────────────────────────────────────
-- One row per Audit Plan. Execution results embedded as JSONB (written once,
-- atomically, when the auditor saves the scored checklist).
-- execution: [{item_no: int, score: str, comment: str, executed_by: str}, ...]
-- actual_result per item is computed at read time: Approved finding → "Conformity",
-- otherwise original score. This eliminates the mutable ActualResult column.
CREATE TABLE IF NOT EXISTS public.audit_plans (
  plan_id        TEXT        PRIMARY KEY,   -- YYYY-MM-NNNN monthly running number
  bu             TEXT        NOT NULL,
  department     TEXT,
  form_code      TEXT        NOT NULL,
  form_version   INTEGER     NOT NULL,
  audit_title    TEXT        NOT NULL,
  scheduled_date DATE,
  auditor1       TEXT,
  auditor2       TEXT,
  auditor3       TEXT,
  status         TEXT        NOT NULL DEFAULT 'Planned'
                             CHECK (status IN ('Planned','Issued','Pending Approval','Completed','Cancelled')),
  created_by     TEXT,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  execution      JSONB       DEFAULT NULL
);

-- ── Findings ──────────────────────────────────────────────────────────────────
-- One row per NC Finding / CAR. Normalized for dashboard aggregation.
CREATE TABLE IF NOT EXISTS public.audit_findings (
  id                  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  plan_id             TEXT        NOT NULL REFERENCES public.audit_plans(plan_id),
  bu                  TEXT        NOT NULL,
  item_no             INTEGER,
  severity            TEXT        NOT NULL CHECK (severity IN ('Minor','Major','Critical')),
  description         TEXT,
  root_cause          TEXT,
  corrective_action   TEXT,
  preventive_action   TEXT,
  responsible_person  TEXT,
  due_date            DATE,
  status              TEXT        NOT NULL DEFAULT 'Open'
                                  CHECK (status IN ('Open','Responded','Approved')),
  opened_by           TEXT,
  opened_at           TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  responded_by        TEXT,
  responded_at        TIMESTAMPTZ,
  approved_by         TEXT,
  approved_at         TIMESTAMPTZ,
  approver_comment    TEXT
);

-- ── Row Level Security ────────────────────────────────────────────────────────
-- Flask backend uses the service key which bypasses RLS entirely.
-- RLS is defense-in-depth: anonymous/authenticated users can read,
-- but cannot write directly without the service key.
ALTER TABLE public.audit_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_plans     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_findings  ENABLE ROW LEVEL SECURITY;

CREATE POLICY "read_templates" ON public.audit_templates FOR SELECT USING (true);
CREATE POLICY "read_plans"     ON public.audit_plans     FOR SELECT USING (true);
CREATE POLICY "read_findings"  ON public.audit_findings  FOR SELECT USING (true);

-- ── Indexes ───────────────────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_audit_templates_code   ON public.audit_templates(code);
CREATE INDEX IF NOT EXISTS idx_audit_templates_active ON public.audit_templates(active);
CREATE INDEX IF NOT EXISTS idx_audit_plans_bu         ON public.audit_plans(bu);
CREATE INDEX IF NOT EXISTS idx_audit_plans_status     ON public.audit_plans(status);
CREATE INDEX IF NOT EXISTS idx_audit_findings_plan    ON public.audit_findings(plan_id);
CREATE INDEX IF NOT EXISTS idx_audit_findings_bu      ON public.audit_findings(bu);
CREATE INDEX IF NOT EXISTS idx_audit_findings_status  ON public.audit_findings(status);
