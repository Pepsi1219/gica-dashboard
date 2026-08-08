-- 007_gica_atomic_tests.sql
-- Atomic read-modify-write for gica_employees.tests (JSONB array).
--
-- WHY: api_gica_add_result / api_gica_delete_results previously did
--   sb_select -> mutate in Python -> sb_update
-- which is a lost-update race: two concurrent writers both read the same tests
-- array, each appends, and the second write clobbers the first. These functions
-- move the mutation server-side under a SELECT ... FOR UPDATE row lock, so
-- concurrent calls serialize and no attempt is lost.
--
-- ⚠️ Run this in the Supabase SQL Editor BEFORE deploying the app code that
-- calls sb_rpc('gica_append_test' / 'gica_delete_tests'). Without it those
-- endpoints return 500.

-- Append one already-built test object. The caller passes the full test JSONB
-- (result1/result2/grade1/grade2/date — grades already computed in Python); this
-- function assigns `n` = max(existing n)+1 atomically, enforces the max-tests
-- cap, appends, and clears any manual next_date_override (a new attempt means the
-- auto-computed schedule takes over again).
--   Raises 'not_found'   -> employee row missing
--   Raises 'max_reached' -> already at p_max attempts
create or replace function gica_append_test(
  p_bu text, p_empid text, p_test jsonb, p_max int
) returns jsonb
language plpgsql
as $$
declare
  v_tests  jsonb;
  v_count  int;
  v_next_n int;
  v_new    jsonb;
begin
  select tests into v_tests
    from gica_employees
   where bu = p_bu and empid = p_empid
     for update;
  if not found then
    raise exception 'not_found';
  end if;

  v_tests := coalesce(v_tests, '[]'::jsonb);
  v_count := jsonb_array_length(v_tests);
  if v_count >= p_max then
    raise exception 'max_reached';
  end if;

  select coalesce(max((t->>'n')::int), 0) + 1
    into v_next_n
    from jsonb_array_elements(v_tests) t;

  v_new := p_test || jsonb_build_object('n', v_next_n);

  update gica_employees
     set tests = v_tests || v_new,
         next_date_override = null
   where bu = p_bu and empid = p_empid;

  return v_new;
end;
$$;

-- Delete selected attempts (or all) and renumber the survivors contiguously
-- (1..k, chronological by old n) so the read-time scheduler — which keys the
-- first attempt on n==1 — never sees a gap. Also clears next_date_override so a
-- pinned date doesn't survive a reset back to the 'needs Initial' state.
--   p_all = true       -> remove every attempt
--   p_attempts int[]   -> remove those attempt numbers
--   Raises 'not_found' -> employee row missing
--   Returns remaining attempt count.
create or replace function gica_delete_tests(
  p_bu text, p_empid text, p_attempts int[], p_all boolean
) returns int
language plpgsql
as $$
declare
  v_tests     jsonb;
  v_kept      jsonb;
  v_reindexed jsonb;
begin
  select tests into v_tests
    from gica_employees
   where bu = p_bu and empid = p_empid
     for update;
  if not found then
    raise exception 'not_found';
  end if;

  v_tests := coalesce(v_tests, '[]'::jsonb);

  if p_all then
    v_kept := '[]'::jsonb;
  else
    select coalesce(jsonb_agg(t order by (t->>'n')::int), '[]'::jsonb)
      into v_kept
      from jsonb_array_elements(v_tests) t
     where (t->>'n')::int <> all(p_attempts);
  end if;

  select coalesce(
           jsonb_agg(jsonb_set(x.val, '{n}', to_jsonb(x.rn)) order by x.rn),
           '[]'::jsonb)
    into v_reindexed
    from (
      select val, row_number() over (order by (val->>'n')::int) as rn
        from jsonb_array_elements(v_kept) val
    ) x;

  update gica_employees
     set tests = v_reindexed,
         next_date_override = null
   where bu = p_bu and empid = p_empid;

  return jsonb_array_length(v_reindexed);
end;
$$;

grant execute on function gica_append_test(text, text, jsonb, int) to service_role;
grant execute on function gica_delete_tests(text, text, int[], boolean) to service_role;
