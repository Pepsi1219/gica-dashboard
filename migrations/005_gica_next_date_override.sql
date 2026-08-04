-- Phase 3 follow-up: manual Next Date override
-- Adds a nullable column so qe_edit / gica_admin can pin a specific
-- assessment date instead of the auto-computed one. The override is
-- cleared automatically whenever a new test result is added (business
-- rule: new attempt → recompute nextDate from freq_months).

ALTER TABLE gica_employees
  ADD COLUMN IF NOT EXISTS next_date_override TEXT;
