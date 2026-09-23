"""Narrow canonical-artifact contract; generic validation remains upstream."""

import re
import sys
from pathlib import Path

REQUIRED = (
    "roles/planning.md",
    "roles/implementation.md",
    "roles/independent-review.md",
    "roles/publication.md",
    "handoffs/planning-to-implementation.md",
    "handoffs/implementation-to-review.md",
    "handoffs/review-to-correction.md",
    "handoffs/review-to-publication.md",
    "handoffs/return-of-control.md",
    "workflows/reviewed-change.md",
)
# Source identities live in GOVERNING-SOURCES.md; canonical instructions link there.
LIVE_VALUE = re.compile(
    r"(?<![A-Za-z0-9])[0-9a-fA-F]{7,64}(?![A-Za-z0-9])"
    r"|(?<![\w])#\d+\b"
    r"|https?://github\.com/[^/\s<>]+/[^/\s<>]+"
    r"|\b(?:jamesreimer|jamey-m-yates)/[A-Za-z0-9_.-]+"
)


def validate(root: Path) -> list[str]:
    errors = []
    for name in REQUIRED:
        if not (root / name).is_file():
            errors.append(f"{name}: required canonical artifact missing")
    for directory in ("roles", "handoffs", "workflows"):
        for path in sorted((root / directory).rglob("*.md")):
            try:
                content = path.read_text(encoding="utf-8")
            except (OSError, UnicodeError) as exc:
                errors.append(f"{path.relative_to(root)}: cannot read: {exc}")
                continue
            for number, line in enumerate(content.splitlines(), 1):
                if LIVE_VALUE.search(line):
                    errors.append(
                        f"{path.relative_to(root)}:{number}: live identifier shape; "
                        "use a placeholder or reference GOVERNING-SOURCES.md"
                    )
    return errors


def main() -> int:
    try:
        errors = validate(Path(__file__).resolve().parents[1])
    except OSError as exc:
        print(f"Canonical artifact validation failed: {exc}", file=sys.stderr)
        return 1
    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1
    print("Canonical artifact presence and live-identifier checks passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
