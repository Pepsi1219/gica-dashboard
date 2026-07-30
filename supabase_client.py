import os

import requests as _requests

SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_SERVICE_KEY = os.getenv("SUPABASE_SERVICE_KEY", "")


class SupabaseError(Exception):
    pass


def _headers(extra=None):
    h = {
        "apikey": SUPABASE_SERVICE_KEY,
        "Authorization": f"Bearer {SUPABASE_SERVICE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=representation",
    }
    if extra:
        h.update(extra)
    return h


def sb_select(table, *, filters=None, columns="*", order=None, limit=None):
    """SELECT rows with automatic pagination. filters = {col: value} for equality matches.
    Fetches all rows in 1000-row pages unless limit is specified."""
    url = f"{SUPABASE_URL}/rest/v1/{table}"
    params = {"select": columns}
    if filters:
        for k, v in filters.items():
            params[k] = f"eq.{v}"
    if order:
        params["order"] = order

    # If caller specifies a limit, honour it exactly (single request)
    if limit is not None:
        params["limit"] = limit
        r = _requests.get(url, headers=_headers(), params=params, timeout=15)
        if not r.ok:
            raise SupabaseError(f"sb_select({table}): {r.status_code} {r.text[:300]}")
        return r.json()

    # Otherwise paginate until we have all rows
    page_size = 1000
    all_rows = []
    offset = 0
    while True:
        range_header = f"{offset}-{offset + page_size - 1}"
        h = _headers({"Range": range_header, "Range-Unit": "items"})
        r = _requests.get(url, headers=h, params=params, timeout=15)
        if not r.ok:
            raise SupabaseError(f"sb_select({table}): {r.status_code} {r.text[:300]}")
        page = r.json()
        all_rows.extend(page)
        if len(page) < page_size:
            break
        offset += page_size
    return all_rows


def sb_insert(table, record):
    """INSERT one record. Returns list of inserted rows."""
    url = f"{SUPABASE_URL}/rest/v1/{table}"
    r = _requests.post(url, headers=_headers(), json=record, timeout=15)
    if not r.ok:
        raise SupabaseError(f"sb_insert({table}): {r.status_code} {r.text[:300]}")
    return r.json()


def sb_update(table, filters, updates):
    """UPDATE rows matching filters. Returns list of updated rows."""
    if not filters:
        raise SupabaseError(f"sb_update({table}): filters must not be empty — refusing full-table update")
    url = f"{SUPABASE_URL}/rest/v1/{table}"
    params = {k: f"eq.{v}" for k, v in filters.items()}
    r = _requests.patch(url, headers=_headers(), json=updates, params=params, timeout=15)
    if not r.ok:
        raise SupabaseError(f"sb_update({table}): {r.status_code} {r.text[:300]}")
    return r.json()


def sb_upsert(table, record, on_conflict="id"):
    """UPSERT: insert or update on conflict. Returns list."""
    url = f"{SUPABASE_URL}/rest/v1/{table}"
    h = _headers({"Prefer": "resolution=merge-duplicates,return=representation"})
    params = {"on_conflict": on_conflict} if on_conflict else {}
    r = _requests.post(url, headers=h, json=record, params=params, timeout=15)
    if not r.ok:
        raise SupabaseError(f"sb_upsert({table}): {r.status_code} {r.text[:300]}")
    return r.json()


def sb_delete(table, filters):
    """DELETE rows matching filters. Returns list of deleted rows."""
    if not filters:
        raise SupabaseError(f"sb_delete({table}): filters must not be empty — refusing full-table delete")
    url = f"{SUPABASE_URL}/rest/v1/{table}"
    params = {k: f"eq.{v}" for k, v in filters.items()}
    r = _requests.delete(url, headers=_headers(), params=params, timeout=15)
    if not r.ok:
        raise SupabaseError(f"sb_delete({table}): {r.status_code} {r.text[:300]}")
    return r.json()


def sb_auth_sign_in(email: str, password: str) -> dict:
    """Sign in via Supabase Auth (password flow).
    Returns {access_token, refresh_token, expires_in, ...} or raises SupabaseError."""
    url = f"{SUPABASE_URL}/auth/v1/token?grant_type=password"
    r = _requests.post(
        url,
        headers={"apikey": SUPABASE_SERVICE_KEY, "Content-Type": "application/json"},
        json={"email": email, "password": password},
        timeout=10,
    )
    if not r.ok:
        raise SupabaseError(f"sign_in: {r.status_code} {r.text[:300]}")
    return r.json()
