"""Read-only checks for optional role bindings; no provider or policy execution."""

import argparse
import json
import math
import os
import re
import stat
import sys
from pathlib import Path

MAX_BYTES = 65536
ROLES = ("planning", "implementation", "independent-review", "publication")
PROVIDERS = ("openai", "anthropic", "google", "other", "manual")
MODES = ("subscription", "metered", "local_free", "human")
INVOCATIONS = ("ask_first", "allowed")


def require(condition, message):
    if not condition:
        raise ValueError(message)


def fields(value, required, optional=()):
    require(isinstance(value, dict), "Expected an object")
    require(set(required) <= value.keys(), "Missing required fields")
    require(value.keys() <= set(required) | set(optional), "Unknown fields are forbidden")


def identifier(value):
    require(
        isinstance(value, str) and re.fullmatch(r"[a-z][a-z0-9_-]{0,63}", value),
        "Identifiers must be 1-64 lowercase ASCII letters, digits, underscores or hyphens",
    )


def number(value, integer=False):
    require(
        type(value) in (int, float) and 0 <= value <= 10**12 and math.isfinite(value),
        "Amounts must be finite nonnegative numbers at most 10^12 (not booleans)",
    )
    require(not integer or type(value) is int, "Invocation caps must be integers")


def validate(config, check_reviewer_distinct=False):
    fields(config, ("schema_version", "accounts", "bindings"))
    require(
        type(config["schema_version"]) is int and config["schema_version"] == 1,
        "Unsupported schema_version",
    )
    accounts = config["accounts"]
    require(isinstance(accounts, list) and 1 <= len(accounts) <= 64, "Expected 1-64 accounts")
    by_id = {}
    for account in accounts:
        fields(
            account,
            ("id", "provider", "mode"),
            ("usage", "quota", "monthly_fee_usd", "soft_spend_cap_usd", "soft_invocation_cap"),
        )
        identifier(account["id"])
        require(account["id"] not in by_id, "Duplicate account ID")
        require(account["provider"] in PROVIDERS, "Unknown provider")
        require(account["mode"] in MODES, "Unknown billing mode")
        require(
            (account["mode"] == "human") == (account["provider"] == "manual"),
            "Human accounts must use manual; manual accounts must use human",
        )
        for key in ("usage", "quota"):
            require(account.get(key, "unknown") == "unknown", "Usage and quota must be unknown")
        for key, mode in (("monthly_fee_usd", "subscription"), ("soft_spend_cap_usd", "metered")):
            if key in account:
                require(account["mode"] == mode, f"{key} requires {mode} mode")
                number(account[key])
        if "soft_invocation_cap" in account:
            number(account["soft_invocation_cap"], integer=True)
        by_id[account["id"]] = account
    fields(config["bindings"], ROLES)
    for binding in config["bindings"].values():
        fields(binding, ("account", "agent"), ("invocation",))
        identifier(binding["account"])
        identifier(binding["agent"])
        require(binding["account"] in by_id, "Binding references an unknown account")
        require(binding.get("invocation", "ask_first") in INVOCATIONS, "Invalid invocation")
        require(
            (binding["agent"] == "human") == (by_id[binding["account"]]["mode"] == "human"),
            "Human accounts require agent human; other accounts require a tool alias",
        )
    notes = [
        "Nothing here limits spend. Provider-side hard limits alone enforce spend.",
        "Usage, quota and remaining capacity: UNKNOWN. Missing caps are UNKNOWN, not zero.",
        "Subscription monthly_fee_usd is informational cost, never spendable credit.",
        "Contextual reviewer independence: UNVERIFIED; accountable assessment is required "
        "when independence is required by the project.",
        "If budget constrains required review: REVIEW BLOCKED / human decision required; "
        "never waive review or silently substitute a reviewer/provider.",
    ]
    for account in accounts:
        notes.append(f"Account {account['id']}: one shared budget across all bound roles.")
    if check_reviewer_distinct:
        implementer = config["bindings"]["implementation"]
        reviewer = config["bindings"]["independent-review"]
        require(
            (implementer["account"], implementer["agent"])
            != (reviewer["account"], reviewer["agent"]),
            "Implementation and reviewer bindings are identical (structural check only)",
        )
        notes.append("Reviewer binding is structurally distinct; this is only a proxy.")
    return notes


def checked_path(value):
    """Reject symlinks before resolution, including parent/.. spellings."""
    path = Path(value)
    require(".." not in path.parts, "Parent traversal is not accepted; use a direct path")
    path = path.absolute()
    for part in (*reversed(path.parents), path):
        try:
            require(not stat.S_ISLNK(part.lstat().st_mode), "Symlink paths are forbidden")
        except FileNotFoundError:
            pass
    return path


def unique_object(pairs):
    result = {}
    for key, value in pairs:
        require(key not in result, "Duplicate JSON keys are forbidden")
        result[key] = value
    return result


def load_config(value):
    path = checked_path(value)
    require(stat.S_ISREG(path.lstat().st_mode), "Config must be a regular file")
    flags = os.O_RDONLY | getattr(os, "O_NOFOLLOW", 0) | getattr(os, "O_NONBLOCK", 0)
    with os.fdopen(os.open(path, flags), "rb") as stream:
        info = os.fstat(stream.fileno())
        require(stat.S_ISREG(info.st_mode), "Config must be a regular file")
        require(info.st_size <= MAX_BYTES, "Config exceeds 65536 bytes")
        raw = stream.read(MAX_BYTES + 1)
    require(len(raw) <= MAX_BYTES, "Config exceeds 65536 bytes")
    return json.loads(raw.decode("utf-8"), object_pairs_hook=unique_object)


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("path", help="Explicit config path; no credential or environment discovery")
    parser.add_argument(
        "--check-reviewer-distinct",
        action="store_true",
        help="Check binding tuples only; does not establish independence",
    )
    args = parser.parse_args(argv)
    try:
        notes = validate(load_config(args.path), args.check_reviewer_distinct)
    except (ValueError, OSError, RecursionError) as error:
        # JSON errors expose positions, not the private document's contents.
        print(f"Invalid config: {error}", file=sys.stderr)
        return 1
    print("Valid binding structure; no execution authority or provider availability verified.")
    print("\n".join(notes))
    return 0


if __name__ == "__main__":
    sys.exit(main())
