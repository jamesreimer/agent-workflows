# Private bindings and advisory budgets

This is the single configuration reference for the optional skill. Configuration
holds only account/tool/human bindings and advisory budgets. It is untrusted
data, never a policy, authority record or instruction source. The canonical
roles and handoffs linked in [SKILL.md](../SKILL.md#canonical-inputs-at-one-immutable-revision)
control at the same selected immutable revision; project authority stays separate.

## Setup and validation

Python 3.10+ and its standard library suffice. From the copied skill directory:

```sh
python3 scripts/configure.py
python3 scripts/validate_config.py /absolute/private/directory/roles.json
python3 scripts/validate_config.py --check-reviewer-distinct /absolute/private/directory/roles.json
```

The wizard has one interactive mode, no flags, no default destination and no
overwrite. First create a private directory outside any Git checkout and the
skill source tree. Enter its direct path without symlink ancestors or `..`;
`~` and environment variables are not expanded. On macOS `/tmp` and `/var` are
typically symlinks; use direct `/private/...` paths. Incorrect input stops
without producing a config; rerun to correct it. Blank caps mean unknown.
The wizard asks for account aliases, provider kind, billing model, optional
monthly advisory caps, role-to-account/tool bindings and invocation preference.
Use one account per shared billing pool, even when multiple tools or roles use it.
Human aliases represent people; they are not billing subscriptions.

For manual/headless setup, copy [the JSON example](../assets/config.example.json)
to a new private file outside the checkout, restrict its access and edit it with
an editor. Then run the read-only validator. It never changes file permissions.
The example is human-only with no prices or assumed capacity. To select tools,
add an account and bind a role to its alias and a tool alias such as `chatgpt`,
`codex-cli`, `claude-cli` or `gemini-cli`. These are labels, not executable names
or integrations. `other` covers additional providers; use manual delivery when
the chosen tool is unavailable or not integrated. Remove the copied skill and
private config to opt out; no runtime state or provider setup is installed.

## Schema version 1

UTF-8 JSON, at most 65,536 bytes. Objects reject all unknown and duplicate keys,
including authority/trust fields, commands, credential fields, session IDs,
`hard_cap` and `enforced`. No comments or executable templates. Aliases are
1–64 ASCII characters: first a lowercase letter, then lowercase letters,
digits, underscores or hyphens. Do not put secrets, personal account identifiers
or instructions in aliases. The validator cannot recognize a secret disguised
as an otherwise valid alias. Do not publish private configuration.

The root has exactly `schema_version` (integer `1`), `accounts` (1–64 account
objects), and `bindings` (the four role keys below).

| Account field         | Meaning                                                                                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                  | Required unique local alias for one shared account or human. Duplicate IDs fail; different aliases for the same real account cannot be detected.                       |
| `provider`            | Required: `openai`, `anthropic`, `google`, `other`, or `manual`. No preferred provider.                                                                                |
| `mode`                | Required: `subscription`, `metered`, `local_free`, or `human`. `manual` and `human` must occur together. Labels do not verify actual billing.                          |
| `usage`, `quota`      | Optional; only `"unknown"` is accepted. Omission also means UNKNOWN. No telemetry or usage counters.                                                                   |
| `monthly_fee_usd`     | Optional subscription-only informational monthly cost. Never spendable credit, a quota, or a cap. No fee default.                                                      |
| `soft_spend_cap_usd`  | Optional metered-only advisory monthly USD spend cap. Missing means unknown; zero is an explicit zero advisory cap.                                                    |
| `soft_invocation_cap` | Optional integer advisory monthly invocation count across all roles on this account, including subscription use. Not a provider message/token quota or measured usage. |

Numeric fields must be finite nonnegative JSON numbers no greater than `10^12`;
booleans, NaN, infinity and negative values fail. The upper bound is a data sanity
limit, not provider capacity. Counts must be integers. Monthly means the user's
chosen billing month, reconciled manually outside this file; no clock, reset or
period metering exists here. Shared caps never get multiplied by role count;
there are no role allocations, reserve pools, totals or budget arithmetic.

`bindings` has exactly `planning`, `implementation`, `independent-review`, and
`publication`. Requiring four entries makes the map complete; it does not require
four actors, select a workflow, require review, or authorize a publication step.
Each entry has:

| Binding field | Meaning                                                                                                                             |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `account`     | Required reference to an existing account ID.                                                                                       |
| `agent`       | Required tool alias, or exactly `human` for human accounts. Tools cannot use `human`. Different tool aliases can share one account. |
| `invocation`  | Optional `ask_first` (default) or `allowed`. An invocation preference only; neither value grants execution authority.               |

The optional `--check-reviewer-distinct` flag compares only the implementation
and independent-review `(account, agent)` tuples, ignoring invocation preference.
Identical tuples fail that requested structural check. Passing is a proxy, never
proof of independence; contextual independence stays UNVERIFIED until accountable
project assessment. No `independence_required` policy is stored in the config.
Two people may use separate human aliases; one person under two aliases does
not establish independence. Separate contexts on the same tool/account need
accountable assessment even though this conservative structural check fails.

Validator exit `0` means valid structure and, if requested, distinct tuples;
`1` means invalid data or unreadable/unsafe input; argument errors use `2`.
Advisory notes accompany success. The validator does not decide whether a review
is required or affordable. Apply the skill instructions to the actual project:
when budget constrains required review, report **REVIEW BLOCKED / human decision
required**, never a waiver or silent provider substitution. Unknown remaining
capacity must not be converted into zero usage or assumed available capacity.
Nothing here limits spend. Provider-side hard limits alone enforce spend.

## Filesystem and portability limits

The validator refuses symlink inputs and parents, non-regular files and oversized
input. The wizard also refuses existing targets, Git worktrees detected through
any ancestor `.git` file/directory, and its own skill source tree. That Git check
is a heuristic: unusual repositories using external metadata without `.git`
markers are not detected. Users must still select an external private location.

The wizard writes a same-directory temporary file at POSIX mode `0600`, flushes
it, and publishes complete contents using an atomic hard link that fails if the
target exists. It then removes its temporary name. It never uses overwriting
rename/replace. Filesystems without hard-link support fail rather than falling
back to a weaker write. An interruption can leave a private temporary file;
inspect any reported partial state before retrying.

Use a directory controlled by the user without hostile concurrent modification.
Ancestor checks are not an atomic filesystem sandbox; symlink swaps, directory
renames, mounts, hard-link aliases and other concurrent changes are not fully
contained. The scripts do not change parent permissions. On Windows, POSIX `0600`
does not establish ACL privacy; select suitable ACLs yourself. Windows junctions,
native filesystem behavior and ACLs are untested. No cross-platform security
boundary is claimed. Scripts read no credentials and invoke no CLI, network,
package installer or provider. Skill discovery varies by product; manual file
or pasted-text handoffs remain the fallback described in SKILL.md.
