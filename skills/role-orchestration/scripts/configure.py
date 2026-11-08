"""Interactive local setup only. Never invokes providers or reads credentials."""

import json
import os
import sys
import tempfile
from pathlib import Path

from validate_config import (
    INVOCATIONS,
    MAX_BYTES,
    MODES,
    PROVIDERS,
    ROLES,
    checked_path,
    require,
    validate,
)

SKILL_ROOT = Path(__file__).resolve().parents[1]


def destination(value):
    path = checked_path(value)
    require(
        path != SKILL_ROOT and SKILL_ROOT not in path.parents,
        "Choose a private path outside the skill source tree",
    )
    require(path.parent.is_dir(), "Create the private parent directory yourself first")
    require(not path.exists(), "Destination already exists; refusing overwrite")
    for parent in path.parents:
        require(
            not os.path.lexists(parent / ".git"),
            "Refusing a Git worktree destination (.git ancestor detected)",
        )
    return path


def write_config(value, config):
    validate(config)
    data = (json.dumps(config, indent=2, allow_nan=False) + "\n").encode("utf-8")
    require(len(data) <= MAX_BYTES, "Config exceeds 65536 bytes")
    path = destination(value)
    # A hard link publishes complete bytes atomically and fails if target exists.
    # Unlike replace/rename, this never overwrites a concurrently created target.
    fd, temporary = tempfile.mkstemp(prefix=".role-bindings-", dir=path.parent)
    try:
        with os.fdopen(fd, "wb") as stream:
            if os.name == "posix":
                os.fchmod(stream.fileno(), 0o600)
            stream.write(data)
            stream.flush()
            os.fsync(stream.fileno())
        destination(path)
        os.link(temporary, path)
    finally:
        os.unlink(temporary)
    return path


def choose(prompt, options, default=None):
    suffix = f" [{default}]" if default else ""
    answer = input(f"{prompt} ({', '.join(options)}){suffix}: ").strip() or default
    require(answer in options, "Choose one of the listed values")
    return answer


def optional_number(prompt, integer=False):
    value = input(f"{prompt} (blank = unknown): ").strip()
    if not value:
        return None
    return int(value) if integer else float(value)


def collect():
    print("Use local aliases, never credentials or personal account identifiers.")
    accounts = []
    while True:
        account = {
            "id": input("Account alias: ").strip(),
            "provider": choose("Provider", PROVIDERS),
            "mode": choose("Billing model", MODES),
            "usage": "unknown",
            "quota": "unknown",
        }
        if account["mode"] == "subscription":
            fee = optional_number("Monthly USD fee, informational cost only; NOT credits")
            if fee is not None:
                account["monthly_fee_usd"] = fee
        if account["mode"] == "metered":
            cap = optional_number("Monthly USD soft spend cap, advisory only")
            if cap is not None:
                account["soft_spend_cap_usd"] = cap
        cap = optional_number("Monthly soft invocation count cap, advisory only", integer=True)
        if cap is not None:
            account["soft_invocation_cap"] = cap
        accounts.append(account)
        require(len(accounts) <= 64, "At most 64 accounts")
        if choose("Add another account?", ("yes", "no"), "no") == "no":
            break
    bindings = {}
    for role in ROLES:
        account_id = choose(f"{role} account", tuple(a["id"] for a in accounts))
        account = next(a for a in accounts if a["id"] == account_id)
        agent = (
            "human"
            if account["mode"] == "human"
            else input(
                f"{role} tool alias (e.g. chatgpt, codex-cli, claude-cli, gemini-cli): "
            ).strip()
        )
        bindings[role] = {
            "account": account_id,
            "agent": agent,
            "invocation": choose(f"{role} invocation preference", INVOCATIONS, "ask_first"),
        }
    return {"schema_version": 1, "accounts": accounts, "bindings": bindings}


def main():
    if len(sys.argv) != 1:
        print("Usage: python3 configure.py (interactive only; no flags)", file=sys.stderr)
        return 2
    print("Nothing here limits spend. Provider-side hard limits alone enforce spend.")
    print("Allowed is a preference, never execution permission. Usage and quota stay UNKNOWN.")
    print("Choose an existing private directory outside Git and the skill source tree.")
    print("Use a direct path with no symlink ancestors (on macOS, /private/tmp, not /tmp).")
    print("Windows ACL privacy is not guaranteed; use a directory with suitable access controls.")
    try:
        path = destination(input("New config path (no ~ expansion): ").strip())
        config = collect()
        notes = validate(config)
        write_config(path, config)
    except (ValueError, OSError, EOFError, KeyboardInterrupt) as error:
        print(f"Setup stopped: {error}", file=sys.stderr)
        return 1
    print("Private config created. No agents installed or invoked; no authority record created.")
    print("\n".join(notes))
    return 0


if __name__ == "__main__":
    sys.exit(main())
