"""Thin REST wrapper for the Upstash/Vercel KV Redis-compatible store.

Acts as the shared (cross-instance) L2 cache layer in front of Microsoft Graph
API reads for GICA/Jumper/Trainer Excel data. Every function degrades to a
safe no-op (None / False) on missing config, network error, or non-2xx
response — callers must always be able to fall back to fetching from Graph
API directly. KV is a cache, never a hard dependency.

Supports either naming convention so it works whether the store was
provisioned as "Vercel KV" or directly as an Upstash Redis integration —
both expose the same Upstash-compatible REST protocol (POST a JSON command
array to the base URL, get back {"result": ...}).
"""
import json
import os

import requests

_KV_URL   = os.getenv('KV_REST_API_URL')   or os.getenv('UPSTASH_REDIS_REST_URL')
_KV_TOKEN = os.getenv('KV_REST_API_TOKEN') or os.getenv('UPSTASH_REDIS_REST_TOKEN')


def kv_available() -> bool:
    """True if KV env vars are configured on this instance."""
    return bool(_KV_URL and _KV_TOKEN)


def _command(*args):
    """POST a single Redis command (as a JSON array) to the REST endpoint.
    Returns the raw `result` field, or None on any failure."""
    if not kv_available():
        return None
    try:
        r = requests.post(
            _KV_URL,
            headers={'Authorization': f'Bearer {_KV_TOKEN}'},
            json=list(args),
            timeout=5,
        )
        if not r.ok:
            print(f'[KV] {args[0]} failed: HTTP {r.status_code}', flush=True)
            return None
        return r.json().get('result')
    except Exception as exc:
        print(f'[KV] {args[0]} failed: {exc}', flush=True)
        return None


def kv_get(key: str):
    """Return the JSON-deserialized value stored at key, or None on miss/error."""
    raw = _command('GET', key)
    if raw is None:
        return None
    try:
        return json.loads(raw)
    except (TypeError, ValueError):
        return None


def kv_set(key: str, value, ttl_seconds: int = 300) -> bool:
    """JSON-serialize value and store it at key with an expiry. Returns True on success."""
    result = _command('SET', key, json.dumps(value), 'EX', ttl_seconds)
    return result == 'OK'


def kv_delete(key: str) -> bool:
    """Delete key (used to invalidate after a write). True if the command ran, regardless
    of whether the key existed."""
    return _command('DEL', key) is not None
