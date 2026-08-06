-- Add optional per-user BU scope to profiles.
-- NULL bu  = no scope (full access, existing behaviour for admins / editors)
-- 'G1'..   = user is scoped to that BU only; writes to other BUs are rejected
--
-- Safe to re-run: uses IF NOT EXISTS, and every existing row gets bu = NULL.
-- Once the app is deployed, set bu per BU-scoped account, e.g.:
--   UPDATE profiles SET role='gica_admin', bu='G1'  WHERE id='<gicabug1 uuid>';
--   UPDATE profiles SET role='gica_admin', bu='G2'  WHERE id='<gicabug2 uuid>';
--   UPDATE profiles SET role='gica_admin', bu='G3'  WHERE id='<gicabug3 uuid>';
--   UPDATE profiles SET role='gica_admin', bu='G4'  WHERE id='<gicabug4 uuid>';
--   UPDATE profiles SET role='gica_admin', bu='EA'  WHERE id='<gicabuea uuid>';
--   UPDATE profiles SET role='gica_admin', bu='TRM' WHERE id='<gicabutrm uuid>';

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS bu TEXT
  CHECK (bu IS NULL OR bu IN ('G1','G2','G3','G4','EA','TRM'));
