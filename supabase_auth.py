import os
import time

import jwt as _jwt
import requests as _req

from supabase_client import sb_select

_SUPABASE_URL = os.getenv("SUPABASE_URL", "")

# JWKS cache — refreshed every hour
_JWKS_CACHE: dict = {"keys": None, "fetched_at": 0.0}
_JWKS_TTL = 3600

# in-process role cache: user_id → {"role": str | None, "exp": float}
_ROLE_CACHE: dict = {}
_ROLE_CACHE_TTL = 300
MAX_ROLE_CACHE_SIZE = 500

# in-process bu cache: user_id → {"bu": str | None, "exp": float}
_BU_CACHE: dict = {}
_BU_CACHE_TTL = 300


def _get_jwks_key(kid: str | None = None):
    """Fetch Supabase JWKS and return the matching public key object."""
    now = time.time()
    if _JWKS_CACHE["keys"] is None or now - _JWKS_CACHE["fetched_at"] > _JWKS_TTL:
        try:
            resp = _req.get(
                f"{_SUPABASE_URL}/auth/v1/.well-known/jwks.json",
                timeout=10,
            )
            resp.raise_for_status()
            _JWKS_CACHE["keys"] = resp.json().get("keys", [])
            _JWKS_CACHE["fetched_at"] = now
        except Exception as e:
            print(f"[JWKS] fetch failed: {e}", flush=True)
            return None

    keys = _JWKS_CACHE["keys"] or []
    if not keys:
        return None

    # Pick key by kid if provided; otherwise first key
    jwk = next((k for k in keys if not kid or k.get("kid") == kid), keys[0])
    alg = jwk.get("alg", "ES256")
    try:
        algo_cls = _jwt.algorithms.get_default_algorithms().get(alg)
        if algo_cls is None:
            return None
        return algo_cls.from_jwk(jwk)
    except Exception:
        return None


def verify_jwt(token: str) -> dict | None:
    """Decode and verify a Supabase-issued JWT (ES256 or HS256).
    Returns the decoded payload dict, or None if invalid / expired."""
    if not token:
        return None

    # Peek at the header to decide which path to take
    try:
        header = _jwt.get_unverified_header(token)
    except _jwt.PyJWTError as e:
        print(f"[JWT] bad header: {e}", flush=True)
        return None

    alg = header.get("alg", "")
    kid = header.get("kid")

    if alg in ("ES256", "RS256"):
        # Asymmetric — verify with JWKS public key
        pub_key = _get_jwks_key(kid)
        if pub_key is None:
            print("[JWT] no public key available", flush=True)
            return None
        try:
            return _jwt.decode(
                token,
                pub_key,
                algorithms=[alg],
                audience="authenticated",
            )
        except _jwt.PyJWTError:
            return None
    else:
        # Symmetric HS256 (legacy Supabase projects)
        import base64
        raw_secret = os.getenv("SUPABASE_JWT_SECRET", "")
        if not raw_secret:
            print("[JWT] HS256 fallback requested but SUPABASE_JWT_SECRET is not set", flush=True)
            return None
        try:
            secret_bytes: bytes = base64.b64decode(raw_secret)
        except Exception:
            secret_bytes = raw_secret.encode()
        try:
            return _jwt.decode(
                token,
                secret_bytes,
                algorithms=["HS256"],
                audience="authenticated",
            )
        except _jwt.PyJWTError:
            return None


def get_user_role(user_id: str) -> str | None:
    """Look up the user's role from the profiles table.
    Cached in-process for 5 minutes to avoid hitting Supabase on every request."""
    if not user_id:
        return None
    cached = _ROLE_CACHE.get(user_id)
    if cached and time.time() < cached["exp"]:
        return cached["role"]
    try:
        rows = sb_select("profiles", filters={"id": user_id}, columns="role")
        role = rows[0]["role"] if rows else None
    except Exception:
        role = None
    _ROLE_CACHE[user_id] = {"role": role, "exp": time.time() + _ROLE_CACHE_TTL}
    if len(_ROLE_CACHE) > MAX_ROLE_CACHE_SIZE:
        _ROLE_CACHE.clear()
    return role


def get_user_bu(user_id: str) -> str | None:
    """Look up the user's BU scope from profiles.
    NULL bu = no scope (full access). Cached 5 minutes."""
    if not user_id:
        return None
    cached = _BU_CACHE.get(user_id)
    if cached and time.time() < cached["exp"]:
        return cached["bu"]
    try:
        rows = sb_select("profiles", filters={"id": user_id}, columns="bu")
        bu = rows[0].get("bu") if rows else None
    except Exception:
        bu = None
    _BU_CACHE[user_id] = {"bu": bu, "exp": time.time() + _BU_CACHE_TTL}
    if len(_BU_CACHE) > MAX_ROLE_CACHE_SIZE:
        _BU_CACHE.clear()
    return bu


def invalidate_role_cache(user_id: str):
    _ROLE_CACHE.pop(user_id, None)
    _BU_CACHE.pop(user_id, None)


def extract_bearer(request) -> str | None:
    """Extract the raw JWT string from the Authorization: Bearer header."""
    auth = request.headers.get("Authorization", "")
    if auth.startswith("Bearer "):
        return auth[7:].strip()
    return None
