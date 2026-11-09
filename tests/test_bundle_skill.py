"""Bundle integrity tests; these do not evaluate agent behavior."""

import hashlib
import json
import os
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path

from scripts.bundle_skill import BUNDLE, CANONICAL, SUPPORT, check, generate
from scripts.validate_local import REQUIRED

REPO = Path(__file__).resolve().parents[1]


class SkillPolicyTests(unittest.TestCase):
    def test_explicit_implicit_invocation_policy(self):
        # Static configuration assertion only; native discovery needs runtime tests.
        policy = REPO / "skills/agent-workflows/agents/openai.yaml"
        self.assertEqual(
            policy.read_text(encoding="utf-8"),
            "policy:\n  allow_implicit_invocation: true\n",
        )


class BundleTests(unittest.TestCase):
    def setUp(self):
        directory = tempfile.TemporaryDirectory()
        self.addCleanup(directory.cleanup)
        self.root = Path(directory.name)
        for name in CANONICAL + SUPPORT:
            path = self.root / name
            path.parent.mkdir(parents=True, exist_ok=True)
            # Intentionally not normalized text: byte preservation includes CRLF,
            # non-ASCII, trailing spaces and even non-UTF8 fixture bytes.
            path.write_bytes(name.encode() + b"\r\n\xc3\xa9  \n\xff")
        generate(self.root)
        self.bundle = self.root / BUNDLE
        self.manifest = self.bundle / "manifest.json"

    def snapshot(self):
        return {
            p.relative_to(self.root): (p.read_bytes(), p.stat().st_mode, p.stat().st_mtime_ns)
            for p in self.root.rglob("*")
            if p.is_file()
        }

    def assert_invalid(self, fragment):
        errors = check(self.root)
        self.assertTrue(errors)
        self.assertIn(fragment, "\n".join(errors))

    def test_closed_canonical_list_matches_repository_contract(self):
        self.assertEqual(set(CANONICAL), set(REQUIRED))
        self.assertEqual(len(CANONICAL), 10)

    def test_exact_bytes_digests_repeat_generation_and_readonly_check(self):
        manifest = json.loads(self.manifest.read_bytes())
        self.assertEqual(set(manifest), {"schema_version", "canonical_sources", "support_sources"})
        self.assertEqual(set(manifest["canonical_sources"]), set(CANONICAL))
        self.assertEqual(set(manifest["support_sources"]), set(SUPPORT))
        for name in CANONICAL + SUPPORT:
            source = (self.root / name).read_bytes()
            self.assertEqual((self.bundle / "canonical" / name).read_bytes(), source)
            group = "canonical_sources" if name in CANONICAL else "support_sources"
            self.assertEqual(manifest[group][name], hashlib.sha256(source).hexdigest())
        before = self.snapshot()
        self.assertEqual(check(self.root), [])
        generate(self.root)
        self.assertEqual(before, self.snapshot())

    def test_each_missing_or_altered_bundle_file(self):
        for path in sorted(p for p in self.bundle.rglob("*") if p.is_file()):
            with self.subTest(path=path):
                saved = path.read_bytes()
                path.unlink()
                self.assert_invalid("missing bundle file")
                path.write_bytes(saved + b"changed")
                self.assertTrue(check(self.root))
                path.write_bytes(saved)

    def test_each_missing_or_changed_source_and_regeneration(self):
        for name in CANONICAL + SUPPORT:
            with self.subTest(name=name):
                path = self.root / name
                saved = path.read_bytes()
                path.unlink()
                self.assert_invalid("missing source")
                path.write_bytes(saved + b"changed")
                self.assert_invalid("bytes differ")
                self.assert_invalid("manifest")
                generate(self.root)
                self.assertEqual(check(self.root), [])
                path.write_bytes(saved)
                generate(self.root)

    def test_manifest_mutations(self):
        original = self.manifest.read_bytes()
        for mutation in (
            lambda m: m["canonical_sources"].pop(CANONICAL[0]),
            lambda m: m["canonical_sources"].update({CANONICAL[0]: "0" * 64}),
            lambda m: m["canonical_sources"].update({"roles/extra.md": "0" * 64}),
            lambda m: m.update({"canonical_sources": {}}),
            lambda m: m.update({"schema_version": True}),
            lambda m: m.update({"commit": "not-a-containing-commit"}),
            lambda m: m["support_sources"].clear(),
        ):
            with self.subTest(mutation=mutation):
                data = json.loads(original)
                mutation(data)
                self.manifest.write_text(json.dumps(data, indent=2) + "\n")
                self.assert_invalid("manifest")
        for malformed in (
            b"{",
            original + b"\n",
            original.replace(b'"schema_version": 1', b'"schema_version": 1, "schema_version": 1'),
        ):
            self.manifest.write_bytes(malformed)
            self.assert_invalid("manifest")
        self.manifest.write_bytes(original)

    def test_matching_altered_copy_and_digest_cannot_hide_source_mismatch(self):
        name = CANONICAL[0]
        changed = b"forged copy"
        (self.bundle / "canonical" / name).write_bytes(changed)
        data = json.loads(self.manifest.read_bytes())
        data["canonical_sources"][name] = hashlib.sha256(changed).hexdigest()
        self.manifest.write_text(json.dumps(data, indent=2) + "\n")
        self.assert_invalid("bytes differ")
        self.assert_invalid("manifest")

    def test_unlisted_source_is_not_copied(self):
        (self.root / "roles/extra.md").write_text("not in the source allowlist")
        generate(self.root)
        self.assertFalse((self.bundle / "canonical/roles/extra.md").exists())
        self.assertEqual(check(self.root), [])

    def test_unexpected_paths_stop_generation_without_mutation(self):
        for name, directory in (
            ("extra.md", False),
            ("canonical/roles/deep", True),
            ("canonical/unexpected", True),
        ):
            with self.subTest(name=name):
                path = self.bundle / name
                path.mkdir() if directory else path.write_text("extra")
                before = self.snapshot()
                self.assert_invalid("unexpected")
                with self.assertRaisesRegex(ValueError, "unexpected"):
                    generate(self.root)
                self.assertEqual(before, self.snapshot())
                path.rmdir() if directory else path.unlink()

    def test_symlinks_files_directories_parents_and_broken_targets(self):
        for relative in (
            BUNDLE,
            BUNDLE / "canonical",
            BUNDLE / "canonical/roles",
            BUNDLE / "canonical" / CANONICAL[0],
            BUNDLE / "manifest.json",
            Path(CANONICAL[0]),
            Path("roles"),
        ):
            with self.subTest(relative=relative):
                path = self.root / relative
                saved = path.with_name(path.name + ".saved")
                path.rename(saved)
                for target in (saved, self.root / "does-not-exist"):
                    path.symlink_to(target, target_is_directory=saved.is_dir())
                    self.assert_invalid("symlink")
                    with self.assertRaisesRegex(ValueError, "symlink"):
                        generate(self.root)
                    path.unlink()
                saved.rename(path)
        extra = self.bundle / "unexpected-link"
        extra.symlink_to(self.root)
        self.assert_invalid("symlink")

    def test_hardlink_and_special_output_refused(self):
        path = self.bundle / "canonical" / CANONICAL[0]
        path.unlink()
        os.link(self.root / CANONICAL[0], path)
        self.assert_invalid("singly linked regular file")
        with self.assertRaisesRegex(ValueError, "singly linked regular file"):
            generate(self.root)
        path.unlink()
        if hasattr(os, "mkfifo"):
            os.mkfifo(path)
            self.assert_invalid("singly linked regular file")
            with self.assertRaisesRegex(ValueError, "singly linked regular file"):
                generate(self.root)

    def test_existing_mode_preserved_on_regeneration(self):
        path = self.bundle / "canonical" / CANONICAL[0]
        path.chmod(0o640)
        (self.root / CANONICAL[0]).write_bytes(b"new bytes")
        generate(self.root)
        self.assertEqual(path.stat().st_mode & 0o777, 0o640)

    def test_candidate_and_cli_readonly_check(self):
        self.assertEqual(check(REPO), [])
        result = subprocess.run(
            [sys.executable, str(REPO / "scripts/bundle_skill.py"), "--check"],
            cwd=self.root,
            capture_output=True,
            text=True,
            check=False,
        )
        self.assertEqual(result.returncode, 0, result.stderr)


class EvaluationFixtureTests(unittest.TestCase):
    def test_fixture_matrix_consistency_only(self):
        fixture = REPO / "tests/fixtures/agent-workflows"
        cases = json.loads((fixture / "scenarios.json").read_bytes())
        self.assertEqual(len(cases), 4)
        self.assertEqual(len({case["id"] for case in cases}), 4)
        for case in cases:
            self.assertTrue(case["prompt"])
            self.assertTrue(case["criteria"])
            for name in case["loaded_files"]:
                self.assertTrue((fixture / name).is_file(), name)
        conflict = next(case for case in cases if case["id"] == "loaded-conflict")
        self.assertIn("conflicting-instruction.md", conflict["loaded_files"])
        self.assertIn(
            "merge automatically once CI passes",
            (fixture / "conflicting-instruction.md").read_text(),
        )


if __name__ == "__main__":
    unittest.main()
