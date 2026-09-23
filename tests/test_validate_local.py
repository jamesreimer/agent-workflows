"""Positive and injected-defect checks for the workflow-specific contract."""

import tempfile
import unittest
from pathlib import Path

from scripts.validate_local import REQUIRED, validate


class ArtifactContractTests(unittest.TestCase):
    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.directory.cleanup)
        self.root = Path(self.directory.name)
        for name in REQUIRED:
            path = self.root / name
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_text("# Example\n\n`<issue>` `<commit-sha>` `<repository>`\n")

    def test_valid_placeholders_and_source_reference_preserve_bytes(self):
        path = self.root / REQUIRED[0]
        path.write_text("# Example\n\n[Source](../PROVENANCE.md#architectural-reasoning)\n")
        before = {p: p.read_bytes() for p in self.root.rglob("*.md")}
        self.assertEqual(validate(self.root), [])
        self.assertEqual(before, {p: p.read_bytes() for p in before})

    def test_missing_each_required_artifact(self):
        for name in REQUIRED:
            with self.subTest(name=name):
                path = self.root / name
                saved = path.read_bytes()
                path.unlink()
                self.assertTrue(any(name in error for error in validate(self.root)))
                path.write_bytes(saved)

    def test_live_values_in_new_nested_canonical_file(self):
        path = self.root / "handoffs" / "examples" / "new.md"
        path.parent.mkdir()
        for value in (
            "#123",
            "abcdef0123456789",
            "https://github.com/example-owner/live-project/issues/123",
            "jamesreimer/example",
        ):
            with self.subTest(value=value):
                path.write_text(f"# Example\n\n{value}\n")
                before = path.read_bytes()
                self.assertTrue(any("new.md:3:" in e for e in validate(self.root)))
                self.assertEqual(before, path.read_bytes())

    def test_source_records_are_outside_canonical_example_scope(self):
        (self.root / "PROVENANCE.md").write_text("abcdef0123456789\n")
        self.assertEqual(validate(self.root), [])

    def test_unreadable_encoding_fails(self):
        (self.root / REQUIRED[0]).write_bytes(b"\xff")
        self.assertTrue(any("cannot read" in e for e in validate(self.root)))


if __name__ == "__main__":
    unittest.main()
