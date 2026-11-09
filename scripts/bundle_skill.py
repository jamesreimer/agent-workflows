"""Generate/check the closed, same-tree Agent Workflows delivery bundle (Python 3.10+)."""

import argparse
import hashlib
import json
import stat
import sys
from pathlib import Path

CANONICAL = (
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
SUPPORT = ("GOVERNING-SOURCES.md",)
BUNDLE = Path("skills/agent-workflows/references")
# Navigation adapter, not a copy or a second authored authority model. The ten
# contracts' README links target this anchor; their operational text is self-contained.
NAVIGATION = b"""# Bundled library context

## Authority and source status

Read the selected contract's Governing sources, Source-derived guidance, and
Workflow-local operational guidance sections for the canonical authority and
source-status explanation. This navigation page adds no contract requirements.

The [skill entrypoint](../../SKILL.md) routes to the same-tree contract copies.
[Governing source pins](GOVERNING-SOURCES.md) are copied unchanged for traceability.
This page is a generated navigation adapter, not a copy of the repository README.
"""


def inspect_path(root: Path, relative: Path, directory: bool = False) -> bool:
    """Reject symlink parents, special files and multiply linked output candidates."""
    for part in [*relative.parents][::-1] + [relative]:
        if part == Path("."):
            continue
        path = root / part
        try:
            info = path.lstat()
        except FileNotFoundError:
            return False
        want_dir = part != relative or directory
        if stat.S_ISLNK(info.st_mode):
            raise ValueError(f"{part}: symlink is not allowed")
        if want_dir and not stat.S_ISDIR(info.st_mode):
            raise ValueError(f"{part}: expected directory")
        if not want_dir and (not stat.S_ISREG(info.st_mode) or info.st_nlink != 1):
            raise ValueError(f"{part}: expected singly linked regular file")
    return True


def expected(root: Path) -> dict[str, bytes]:
    """Read only the explicit source allowlist; preserve every source byte."""
    output = {"canonical/README.md": NAVIGATION}
    manifest = {"schema_version": 1, "canonical_sources": {}, "support_sources": {}}
    for group, names in (("canonical_sources", CANONICAL), ("support_sources", SUPPORT)):
        for name in sorted(names):
            if not inspect_path(root, Path(name)):
                raise ValueError(f"{name}: missing source")
            content = (root / name).read_bytes()
            output[f"canonical/{name}"] = content
            manifest[group][name] = hashlib.sha256(content).hexdigest()
    output["manifest.json"] = (json.dumps(manifest, indent=2) + "\n").encode("utf-8")
    return output


def inventory(root: Path, output: dict[str, bytes]) -> list[str]:
    """Inspect all bundle entries, including unexpected/empty directories; never follow links."""
    directories = {
        parent.as_posix() for name in output for parent in Path(name).parents if parent != Path(".")
    }
    errors = []
    if not inspect_path(root, BUNDLE, directory=True):
        return errors

    def visit(directory: Path) -> None:
        for path in sorted(directory.iterdir()):
            name = path.relative_to(root / BUNDLE).as_posix()
            info = path.lstat()
            if stat.S_ISLNK(info.st_mode):
                errors.append(f"{BUNDLE / name}: symlink is not allowed")
            elif stat.S_ISDIR(info.st_mode):
                if name not in directories:
                    errors.append(f"{BUNDLE / name}: unexpected directory")
                else:
                    visit(path)
            elif name not in output:
                errors.append(f"{BUNDLE / name}: unexpected file")
            elif not stat.S_ISREG(info.st_mode) or info.st_nlink != 1:
                errors.append(f"{BUNDLE / name}: expected singly linked regular file")

    visit(root / BUNDLE)
    return errors


def check(root: Path) -> list[str]:
    try:
        output = expected(root)
        errors = inventory(root, output)
        if errors:
            return errors
        for name, content in output.items():
            relative = BUNDLE / name
            if not inspect_path(root, relative):
                errors.append(f"{relative}: missing bundle file")
            elif (root / relative).read_bytes() != content:
                reason = (
                    "stale or invalid manifest: source list, digests or serialization differ"
                    if name == "manifest.json"
                    else "bytes differ from same-tree source or generated navigation"
                )
                errors.append(f"{relative}: {reason}")
        return errors
    except (OSError, ValueError) as exc:
        return [str(exc)]


def generate(root: Path) -> None:
    output = expected(root)
    errors = inventory(root, output)
    if errors:
        raise ValueError("\n".join(errors))
    # Preflight every destination before writing; do not delete unexpected entries.
    for name in output:
        inspect_path(root, BUNDLE / name)
    for name, content in output.items():
        path = root / BUNDLE / name
        path.parent.mkdir(parents=True, exist_ok=True)
        if not path.exists() or path.read_bytes() != content:
            path.write_bytes(content)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="read-only correspondence check")
    args = parser.parse_args()
    root = Path(__file__).resolve().parents[1]
    try:
        if not args.check:
            generate(root)
        errors = check(root)
    except (OSError, ValueError) as exc:
        errors = [str(exc)]
    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1
    print("Agent Workflows bundle matches same-tree sources and deterministic manifest.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
