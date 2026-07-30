-- Supabase profiles table
-- Extends auth.users with app-specific role.
-- Run once in Supabase SQL editor.

CREATE TABLE IF NOT EXISTS public.profiles (
  id            UUID        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email         TEXT,
  display_name  TEXT,
  role          TEXT        NOT NULL DEFAULT 'viewer'
                            CHECK (role IN ('csa_user','qe_user','qe_audit','qe_auditee','admin','viewer')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Anyone can read profiles (Flask handles authz in middleware)
CREATE POLICY "anyone_read" ON public.profiles
  FOR SELECT USING (true);

-- Users can update their own row (future self-service profile page)
CREATE POLICY "own_update" ON public.profiles
  FOR UPDATE TO authenticated USING (auth.uid() = id);

-- Auto-insert a profiles row on new Supabase Auth signup (role defaults to 'viewer')
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, display_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1)),
    'viewer'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
