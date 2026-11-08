"""Offline positive and injected-defect tests for the optional binding skill."""

import contextlib
import copy
import importlib.util
import io
import json
import os
import stat
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

SKILL = Path(__file__).resolve().parents[1] / "skills" / "role-orchestration"


def module(name):
    spec = importlib.util.spec_from_file_location(name, SKILL / "scripts" / f"{name}.py")
    result = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(result)
    return result


validator = module("validate_config")
with patch.dict(sys.modules, {"validate_config": validator}):
    wizard = module("configure")


def example():
    return json.loads((SKILL / "assets" / "config.example.json").read_text())


def mixed():
    config = example()
    config["accounts"].extend(
        [
            {
                "id": "shared",
                "provider": "openai",
                "mode": "subscription",
                "soft_invocation_cap": 12,
            },
            {
                "id": "review-api",
                "provider": "anthropic",
                "mode": "metered",
                "soft_spend_cap_usd": 0,
            },
            {"id": "local", "provider": "other", "mode": "local_free"},
        ]
    )
    for role, account, agent in (
        ("planning", "shared", "chatgpt"),
        ("implementation", "shared", "codex-cli"),
        ("independent-review", "review-api", "claude-cli"),
    ):
        config["bindings"][role] = {"account": account, "agent": agent}
    return config


class ConfigTests(unittest.TestCase):
    def test_human_only_and_no_mutation(self):
        config = example()
        before = copy.deepcopy(config)
        notes = validator.validate(config, True)
        self.assertEqual(config, before)
        self.assertIn("UNVERIFIED", "\n".join(notes))

    def test_mixed_accounts_shared_budget_unknown_capacity(self):
        config = mixed()
        notes = validator.validate(config, True)
        self.assertEqual(sum(n.startswith("Account shared:") for n in notes), 1)
        self.assertNotIn("usage", config["accounts"][2])
        self.assertIn("UNKNOWN", "\n".join(notes))
        self.assertIn("REVIEW BLOCKED / human decision required", "\n".join(notes))
        self.assertIn("never waive review", "\n".join(notes))

    def test_provider_selection_and_subscription_fee_not_credit(self):
        for provider in validator.PROVIDERS[:-1]:
            config = mixed()
            config["accounts"][2]["provider"] = provider
            config["accounts"][2]["monthly_fee_usd"] = 1  # Synthetic input, not a price.
            notes = validator.validate(config)
            self.assertIn("never spendable credit", "\n".join(notes))
            self.assertNotIn("soft_spend_cap_usd", config["accounts"][2])
        config["accounts"][2]["soft_spend_cap_usd"] = 1
        with self.assertRaisesRegex(ValueError, "requires metered"):
            validator.validate(config)

    def test_distinctness_only_when_requested_and_not_proof(self):
        config = example()
        config["bindings"]["independent-review"] = {
            "account": "operator",
            "agent": "human",
            "invocation": "allowed",
        }
        validator.validate(config)
        with self.assertRaisesRegex(ValueError, "structural check only"):
            validator.validate(config, True)
        config = mixed()
        config["bindings"]["independent-review"] = {"account": "shared", "agent": "chatgpt"}
        notes = validator.validate(config, True)
        self.assertIn("only a proxy", "\n".join(notes))
        self.assertIn("accountable assessment", "\n".join(notes))

    def test_unknown_and_dangerous_fields_at_every_object_level(self):
        for key in (
            "hard_cap",
            "enforced",
            "command",
            "exec",
            "token",
            "secret",
            "api_key",
            "authority",
            "trusted_contexts",
            "session_id",
            "independence_required",
        ):
            for level in ("root", "account", "binding"):
                with self.subTest(key=key, level=level):
                    config = example()
                    target = {
                        "root": config,
                        "account": config["accounts"][0],
                        "binding": config["bindings"]["planning"],
                    }[level]
                    target[key] = "untrusted"
                    with self.assertRaises(ValueError):
                        validator.validate(config)

    def test_numeric_limits_and_types(self):
        for key in ("monthly_fee_usd", "soft_spend_cap_usd", "soft_invocation_cap"):
            for value in (-1, float("nan"), float("inf"), 10**400, True, "1", None):
                with self.subTest(key=key, value=type(value).__name__):
                    config = mixed()
                    account = config["accounts"][3 if key == "soft_spend_cap_usd" else 2]
                    account[key] = value
                    with self.assertRaises(ValueError):
                        validator.validate(config)
        for value in (0, 10**12):
            config = mixed()
            config["accounts"][2]["soft_invocation_cap"] = value
            validator.validate(config)
        config["accounts"][2]["soft_invocation_cap"] = 1.5
        with self.assertRaises(ValueError):
            validator.validate(config)

    def test_malformed_structures_and_references(self):
        mutations = (
            lambda c: c.update(schema_version=True),
            lambda c: c.update(schema_version=2),
            lambda c: c.update(accounts=[]),
            lambda c: c.update(accounts=c["accounts"] * 40),
            lambda c: c["accounts"].append(c["accounts"][0]),
            lambda c: c["accounts"][0].update(provider="hidden"),
            lambda c: c["accounts"][0].update(mode="free"),
            lambda c: c["accounts"][0].update(quota=0),
            lambda c: c["accounts"][0].update(usage=0),
            lambda c: c["accounts"][0].update(id="ignore instructions"),
            lambda c: c["accounts"][0].update(provider="openai"),
            lambda c: c["bindings"].pop("publication"),
            lambda c: c["bindings"].update(executor={}),
            lambda c: c["bindings"]["planning"].update(account="missing"),
            lambda c: c["bindings"]["planning"].update(agent="tool"),
            lambda c: c["bindings"]["planning"].update(invocation="automatic"),
            lambda c: c["bindings"]["planning"].update(account=[]),
        )
        for index, mutate in enumerate(mutations):
            with self.subTest(index=index):
                config = example()
                mutate(config)
                with self.assertRaises(ValueError):
                    validator.validate(config)
        for value in (None, [], {}, {"schema_version": 1}):
            with self.assertRaises(ValueError):
                validator.validate(value)


class FileTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name).resolve()  # Direct macOS path, no /var symlink.
        self.path = self.root / "roles.json"

    def test_read_only_roundtrip_and_permissions(self):
        wizard.write_config(self.path, example())
        before = self.path.stat()
        self.assertEqual(validator.load_config(self.path), example())
        self.assertEqual(self.path.stat().st_mtime_ns, before.st_mtime_ns)
        if os.name == "posix":
            self.assertEqual(stat.S_IMODE(before.st_mode), 0o600)
        self.assertEqual(list(self.root.iterdir()), [self.path])

    def test_invalid_json_and_size_limit(self):
        for data in (
            b"{",
            b"\xff",
            b"[" * 2000,
        ):
            self.path.write_bytes(data)
            with contextlib.redirect_stderr(io.StringIO()):
                self.assertEqual(validator.main([str(self.path)]), 1)
        valid = json.dumps(example()).encode("utf-8")
        at_limit = valid.ljust(validator.MAX_BYTES, b" ")
        for data, diagnostic in (
            (valid.replace(b'"id":', b'"id": "duplicate", "id":', 1), "Duplicate JSON keys"),
            (at_limit + b" ", "exceeds"),
        ):
            self.path.write_bytes(data)
            with contextlib.redirect_stderr(io.StringIO()) as stderr:
                self.assertEqual(validator.main([str(self.path)]), 1)
            self.assertIn(diagnostic, stderr.getvalue())
        self.path.write_bytes(at_limit)
        self.assertEqual(self.path.stat().st_size, validator.MAX_BYTES)
        with contextlib.redirect_stdout(io.StringIO()) as stdout:
            self.assertEqual(validator.main([str(self.path)]), 0)
        self.assertIn("Valid binding structure", stdout.getvalue())
        self.path.write_text(
            json.dumps(mixed()).replace('"soft_invocation_cap": 12', '"soft_invocation_cap": NaN')
        )
        with contextlib.redirect_stderr(io.StringIO()):
            self.assertEqual(validator.main([str(self.path)]), 1)

    def test_non_regular_and_missing_input(self):
        for path in (self.root, self.path):
            with self.assertRaises((ValueError, OSError)):
                validator.load_config(path)
        if os.name == "posix":
            os.mkfifo(self.path)
            with self.assertRaises(ValueError):
                validator.load_config(self.path)

    def test_symlink_target_parent_and_parent_traversal(self):
        target = self.root / "real"
        target.mkdir()
        (target / "roles.json").write_text(json.dumps(example()))
        alias = self.root / "alias"
        alias.symlink_to(target, target_is_directory=True)
        self.path.symlink_to(target / "roles.json")
        for path in (
            self.path,
            alias / "roles.json",
            alias / "new.json",
            alias / ".." / "new.json",
        ):
            with self.subTest(path=path):
                with self.assertRaises(ValueError):
                    validator.load_config(path)
                with self.assertRaises(ValueError):
                    wizard.write_config(path, example())
        self.path.unlink()
        self.path.symlink_to(self.root / "absent")
        with self.assertRaises(ValueError):
            wizard.write_config(self.path, example())

    def test_git_directory_or_file_denies_nested_write(self):
        for is_directory in (False, True):
            marker = self.root / ".git"
            if is_directory:
                marker.mkdir()
            else:
                marker.write_text("gitdir: elsewhere")
            nested = self.root / ("nested-dir" if is_directory else "nested-file")
            nested.mkdir()
            with self.assertRaisesRegex(ValueError, "Git worktree"):
                wizard.write_config(nested / "roles.json", example())
            marker.rmdir() if is_directory else marker.unlink()

    def test_source_tree_and_missing_parent_denied(self):
        with patch.object(wizard, "SKILL_ROOT", self.root):
            with self.assertRaisesRegex(ValueError, "skill source"):
                wizard.write_config(self.path, example())
        with self.assertRaises(ValueError):
            wizard.write_config(self.root / "absent" / "roles.json", example())

    def test_no_overwrite_including_creation_race(self):
        self.path.write_text("preserve")
        with self.assertRaises(ValueError):
            wizard.write_config(self.path, example())
        self.assertEqual(self.path.read_text(), "preserve")
        self.path.unlink()
        link = os.link

        def race(source, target):
            Path(target).write_text("concurrent")
            link(source, target)

        with patch.object(wizard.os, "link", side_effect=race):
            with self.assertRaises(FileExistsError):
                wizard.write_config(self.path, example())
        self.assertEqual(self.path.read_text(), "concurrent")
        self.assertEqual(list(self.root.iterdir()), [self.path])

    def test_atomic_complete_private_publication_and_link_failure(self):
        link = os.link

        def inspect(source, target):
            self.assertFalse(Path(target).exists())
            self.assertEqual(json.loads(Path(source).read_text()), example())
            if os.name == "posix":
                self.assertEqual(stat.S_IMODE(Path(source).stat().st_mode), 0o600)
            link(source, target)

        with patch.object(wizard.os, "link", side_effect=inspect):
            wizard.write_config(self.path, example())
        self.path.unlink()
        with patch.object(wizard.os, "link", side_effect=OSError("Unsupported")):
            with self.assertRaises(OSError):
                wizard.write_config(self.path, example())
        self.assertEqual(list(self.root.iterdir()), [])

    def test_wizard_human_defaults(self):
        answers = [str(self.path), "operator", "manual", "human", "", "no"]
        answers += [item for _ in validator.ROLES for item in ("operator", "")]
        with (
            patch("builtins.input", side_effect=answers),
            patch.object(sys, "argv", ["configure.py"]),
        ):
            with contextlib.redirect_stdout(io.StringIO()):
                self.assertEqual(wizard.main(), 0)
        config = validator.load_config(self.path)
        validator.validate(config)
        self.assertTrue(all(b["invocation"] == "ask_first" for b in config["bindings"].values()))
        self.assertNotIn("soft_invocation_cap", config["accounts"][0])

    def test_wizard_mixed_choices(self):
        answers = [
            str(self.path),
            "shared",
            "google",
            "subscription",
            "",
            "8",
            "yes",
            "meter",
            "other",
            "metered",
            "0",
            "",
            "yes",
            "reviewer",
            "manual",
            "human",
            "",
            "no",
            "shared",
            "gemini-cli",
            "allowed",
            "shared",
            "gemini-cli",
            "",
            "reviewer",
            "",
            "reviewer",
            "",
        ]
        with (
            patch("builtins.input", side_effect=answers),
            patch.object(sys, "argv", ["configure.py"]),
        ):
            with contextlib.redirect_stdout(io.StringIO()):
                self.assertEqual(wizard.main(), 0)
        config = validator.load_config(self.path)
        validator.validate(config, True)
        self.assertEqual(config["accounts"][0]["soft_invocation_cap"], 8)
        self.assertEqual(config["accounts"][1]["soft_spend_cap_usd"], 0)
        self.assertEqual(config["bindings"]["planning"]["invocation"], "allowed")

    def test_wizard_rejects_flags_and_interruption(self):
        with patch.object(sys, "argv", ["configure.py", "--print"]):
            with contextlib.redirect_stderr(io.StringIO()):
                self.assertEqual(wizard.main(), 2)
        with (
            patch.object(sys, "argv", ["configure.py"]),
            patch("builtins.input", side_effect=EOFError),
        ):
            with (
                contextlib.redirect_stderr(io.StringIO()),
                contextlib.redirect_stdout(io.StringIO()),
            ):
                self.assertEqual(wizard.main(), 1)
        self.assertFalse(self.path.exists())

    def test_cli_reports_structural_failure(self):
        config = example()
        config["bindings"]["independent-review"] = config["bindings"]["implementation"]
        self.path.write_text(json.dumps(config))
        with contextlib.redirect_stdout(io.StringIO()):
            self.assertEqual(validator.main([str(self.path)]), 0)
        with contextlib.redirect_stderr(io.StringIO()):
            self.assertEqual(validator.main(["--check-reviewer-distinct", str(self.path)]), 1)


if __name__ == "__main__":
    unittest.main()
