# Publication

## Governing sources

- [Publication and Release Integrity (PRI)](../GOVERNING-SOURCES.md#publication-release-integrity), §§4–17.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§2, 4–17.
- [Shared Asset Provenance (SAP)](../GOVERNING-SOURCES.md#shared-asset-provenance), §§5–11, 15.1, 20.
- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §12.

These references trace source-derived guidance and the origins of local mechanics;
they do not adopt standards for the consumer. Source-derived guidance applies only
where actually applicable governing authority gives it force, at its original
strength and scope. A project may explicitly incorporate a rule or adopt a source;
merely having a local authorizer does not adopt the linked standards. Selecting the workflow selects its documented local
mechanics, not organizational normative adoption or permission to act. Neither
category overrides governing requirements; proportionality cannot remove required
content or effect. The local instructions below support use without Standards
Templates adoption or access to the [README](../README.md#authority-and-source-status).

## Source-derived guidance

Authority for the particular publication action and its consequences must exist
and be explicit enough for the executor to determine permitted actions and where
execution must stop (OEC §6).
One deliberate, unambiguous project authorization may already cover several
authority boundaries (OEC §6). Implementation, review, validation, available
capability, or successful intermediate state do not themselves supply missing
authority (OEC §§6–7, 11, 14–15).
Verify the actual input's correspondence to its immutable identity and all
required shared targets where authoritative consumption applies (SAP §§5–8,
15.1). Dispositions cannot hide unmet completion conditions (AR §12).

Stay within protected boundaries and stop if authority or required validation is
missing (OEC §§8, 10–12). Define recovery expectations where §13 applies. Neither
publication nor its validation authorizes live activation (OEC §14).
OEC §12.1 recommends proportionate completion/interruption reporting and retention
when later action or review materially depends on the result; this recommendation
applies across executors, not exclusively to publication.

Where PRI applies, use §§4–9 and 14–15 for transition completion, authorized-source
correspondence, identity binding, and verification of the resulting publication
state. Evidence must support the claimed completion; an initiating operation's
success alone is insufficient when the resulting state is observable (PRI §9).
Apply §§7–12 to fixed and moving identities, identity layers, and proposed
corrections or withdrawal. Account for observable publication state, including
assessment of possible exposure from a failed, interrupted, or premature
publication, before replacing, retrying, withdrawing, correcting, or claiming
completion (PRI §§4, 13). Use SAP for
applicable provenance semantics, and preserve separate downstream authority
(PRI §§15–16). Apply proportionality without waiving required integrity (PRI §17).

## Workflow-local operational guidance

Record governing standards, versions, and scope, or `Standards Templates: not
adopted`, separately from the actual local authorizer and contract. For alternative
standards, record accept/adapt/reject for affected mechanics, the reason, controlling
authority, decision owner, and record location. Resolve material conflicts before
dependent work; another policy does not automatically replace or add to every step.

Before this workflow's work may materially affect protected systems, data,
externally relied-upon artifacts, publication state, access, or similarly
consequential interests, require a reviewed, explicitly authorized contract with
objective, scope, completion boundary, validation, and materially necessary
protected boundaries. This local threshold is informed by [OEC §§4–5](../GOVERNING-SOURCES.md#operational-execution-contract).
`Not adopted` does not remove it. Complexity alone is not a trigger; low-consequence
work may use a lighter instruction. Assess actually applicable OEC scope as well:
this shorthand cannot narrow it, and any additional workflow coverage remains local.
Stop before actions lacking authority, including publication or live activation
(putting a change into operational use). Legitimate local authority may adapt or
replace the workflow with recorded responsibility and appropriate protections;
silently dropping safeguards is not unchanged use.

Stop affected execution before unauthorized scope expansion, reliance on a materially
superseded contract or model, or bypassing or weakening a defective protective
control. Re-evaluate the contract through actual authority before resuming; preserve
required protection while defects remain. A failed attempt or available credential
alone never justifies a more privileged or exceptional path. Consider established
paths and affirmative evidence of their insufficiency within the contract.
Handle separately discovered defects under their own responsibility and authority;
pause affected work if a defect prevents safe execution, while unrelated safe,
authorized work may continue. These selected local safeguards are informed by
[OEC §§8–10](../GOVERNING-SOURCES.md#operational-execution-contract).

When work could create difficult-to-reverse, destructive, externally consequential,
or operationally risky state, record recovery expectations before the affected
action. If reversal is impractical, say so and consider containment or compensating
recovery; do not invent rollback. This is a workflow-local safeguard informed by
[OEC §13](../GOVERNING-SOURCES.md#operational-execution-contract), not authority
to perform recovery outside the contract.

For a governed upstream asset, immutable input, exact copy, or required target,
identify the legitimate source and exact revision or object-appropriate immutable
identity; verify correspondence of the actual consumed content, accounting for
declared transformations or adaptations. A branch, path, or label alone is not proof.
Resolve required targets in the intended consumer context, including dependencies
of those targets to the extent relied upon; verify their identities and correspondence. A producer's valid reference alone is
insufficient: missing or inconsistent required targets leave dependent work
incomplete. Preserve adaptations; do not claim changed bytes are exact copies.
These workflow checks are informed by [SAP §§5–11, 15.1](../GOVERNING-SOURCES.md#shared-asset-provenance).
Informative links need not become required targets. Retain evidence in the project
record; provenance does not grant authority.

When making an artifact available under an identity for organizational, external,
downstream, or other durable reliance, or discovering unintended observable exposure,
use these workflow-local publication checks, informed by [PRI §§4–17](../GOVERNING-SOURCES.md#publication-release-integrity):

- Identify the authorized source state, intended completion, destination, and
  evidence connecting reviewed, authorized, and published content. A transformation
  needs correspondence evidence; a successful upload alone does not establish it.
- Say which identities are fixed (one state) or moving (declared to change), and
  what each release/component/content identity actually identifies. Without declared
  movement, treat an identity reasonably relied on as one state as fixed; technical
  mutability is not permission to reclassify it. Supply a content-binding identity
  when exact consumed bytes matter.
- Observe the resulting authoritative publication surface: verify identity,
  content correspondence, availability, and material release/component relationships.
  Wait for relevant state to settle or limit the claim to what is established.
  If the result cannot reasonably be observed, report only the transfer or other
  state evidenced; do not claim verified publication from initiation alone.
- Move a moving reference only within its declared meaning and verify its new
  target. Never claim it is fixed or content-immutable or retroactively reclassify
  an established identity. Preserve a fixed or content-binding historical identity
  alongside it when consumers need to distinguish prior states. Moving a pointer
  does not automatically change downstream state.
- Preserve established fixed identities, including a fixed release's declared
  member artifacts and their identities according to what that release denotes. Treat materially uncertain in-place
  changes as substantive. Substantive corrections need a distinguishable successor
  or another identity-preserving mechanism. A content-binding identity cannot retain changed
  bytes. Accurate status/advisory updates or non-substantive corrections may occur
  in place only when the identity's meaning remains intact. Make a material
  correction/supersession relationship determinable where consumers need it.
- Before retrying, replacing, correcting, withdrawing, or claiming completion after
  failed, interrupted, or premature exposure, inspect actual observable state and
  retain evidence. Do not assume failure means nothing was published. Withdrawal
  needs authority and never frees a fixed identity for different content. Communicate
  harmful defects or withdrawal where legitimate disclosure constraints permit;
  preserve permissible identity/status evidence even if content must be removed.
- Publication does not itself adopt, install, deploy, or activate downstream state.
  Those actions need their own authority or an explicitly granted managed-propagation
  relationship. Stop on missing authority or unresolved integrity conditions.

The selected role remains active until project/user authority explicitly
reassigns it or an instantiated handoff transfers responsibility within that
authority. Generic `proceed`, `continue`, or equivalent language continues only
within the current role, authority, and completion boundary; it neither transfers
roles nor authorizes another role's actions. When the next required action belongs
to another role, stop and return an instantiated, ready-to-use handoff for that
role. Preparing that handoff does not itself authorize the sender to execute it.

Read the [review → publication](../handoffs/review-to-publication.md) handoff,
actual authorization, and reviewed candidate. Confirm whether the actual project
contract, instantiated handoff, or other applicable project authority already
covers the proposed action and its consequences. When authority clearly exists,
proceed within it without requesting redundant authorization. When authority is
absent or unclear, stop and return control; implementation, review, or validation
success and available capability do not supply missing authority.

Check that the state about to be published is the reviewed state and that the
project's publication conditions are satisfied. If the candidate changed, route
it through the composition's
proportionate re-review before relying on the review; do not silently substitute
bytes or conduct an unrequested redesign at publication time.

Perform only the authorized action. Return resulting object identities,
verification evidence, recovery performed, remaining conditions, and next owner
through [return of control](../handoffs/return-of-control.md). Publication is an
optional authorized boundary, not a prerequisite for reporting completed work.

### GitHub issue closure

When GitHub is the relevant host, closing keywords before issue references are
commands, not ordinary prose. Use `close` / `closes` / `closed`, `fix` / `fixes` /
`fixed`, or `resolve` / `resolves` / `resolved` before an issue reference only when
closure is authorized. Never use those forms in negative or prohibitive prose:
`do not close #N` is unsafe; use `#N remains open` or `leave issue #N open`.
Ordinary references remain permitted. This rule covers generated handoffs, PR
descriptions, commit messages, and merge/squash subjects and bodies.

Where GitHub issue-closing semantics apply, use this manual procedure regardless
of repository auto-close configuration; no setting change is required.

Enforce the declared closure set derived from the
[established completion boundary](../workflows/reviewed-change.md#workflow-local-operational-guidance);
Publication does not redefine it. Post-merge checks of landed identity, tree
correspondence, messages, issue state, or hosted validation remain required where
applicable, but their timing and routine cleanup do not independently force
`Issue closure on merge: none`. A material condition that the project contract
includes in the issue's boundary still requires that issue to remain open until
the condition is satisfied.

1. **Prepare the final gate.** After candidate correspondence and required
   validation, establish the exact PR head SHA (`<verified-head-sha>`) and the
   permitted landing method. The handoff's **Issue closure on merge** remains
   the single declaration: `none` or authorized `owner/repository#number`
   identities, with authority/source where material. Resolve every discovered
   closing reference to that canonical identity before comparison. Source text
   may use supported local, qualified, or GitHub issue URL forms without rewriting;
   in commit messages, local `#N` resolves against the repository whose default
   branch the commit will land in.
2. **Verify all controlling surfaces for that head.** Inspect actual PR closing
   relationships and applicable commit messages using:

   ```sh
   gh pr view <PR> --json closingIssuesReferences
   gh pr view <PR> --json commits
   ```

   Resolve each surface's targets to full identities and require each set to be
   a subset of the declaration; any undeclared target blocks merge. Inspect
   commit messages only when they can
   contribute closing semantics to the default-branch landing; every such target
   must be declared. Intermediate messages are non-controlling for squash when an
   explicitly supplied final subject/body prevents their inclusion; merge/rebase
   methods must account for messages they land. Establish and check the exact
   final merge/squash subject and body under the same subset rule.
   For methods without a synthesized message, verify the messages
   that actually land instead. Do not rely on unchecked future host defaults.

   Take the union of all applicable controlling surfaces' resolved target sets:
   this aggregate closure-command set must equal the declared closures expected
   from the merge action. Targets need not appear on every surface. For `none`,
   every surface and the aggregate must be empty. Unexpected
   or missing targets, unresolved identities, or incomplete/unverifiable state
   block merge. For a missing declared target, correct an authorized surface and
   rerun the gate, or correct the handoff within authority if explicit post-merge
   closure is intended instead of closure on merge. Do not silently reinterpret
   the declaration or add a second one. The relevant issue scope is
   the union of declared identities and targets reachable through PR relationships,
   controlling commit commands, and final landing commands; record their pre-merge
   states for comparison, without inspecting unrelated issues.

   This combined gate is the **last host-state verification immediately before
   merge**, not an earlier review/handoff snapshot or authorization. Any change to
   the head (including a required branch update), PR description, linked issues,
   controlling messages, final subject/body, or declaration invalidates it; rerun
   affected checks and all comparisons against the current head before merging.
3. **Bind the authorized merge to verified inputs.** For squash, use:

   ```sh
   gh pr merge <PR> --squash --match-head-commit <verified-head-sha> \
     --subject "<verified-subject>" --body "<verified-body>"
   ```

   Adapt to the permitted method while retaining a fail-closed head-match guard
   and binding actual landing messages to checked text. Explicitly supply verified
   merge/squash text; never fall back silently to a generated message. Confirm the
   CLI/API preserves an intended empty body before relying on `--body ""`;
   otherwise use a non-empty verified body. If the method cannot bind these inputs,
   stop and return the unresolved condition rather than claim the gate passed.
4. **Verify the result.** Identify the actual landed commit(s), establish their
   correspondence to the expected publication action, and inspect their subjects
   and bodies against the verified messages. Resolve landed closing references to
   full identities and extend the relevant issue set with any newly observed
   targets. Verify every declared issue reached the intended closed state and
   check issue states/history for unexpected closure through all three surfaces.
   For `none`, verify no relevant issue was unexpectedly closed. Retain landed
   identities, message correspondence, resulting-state evidence, and verification
   limits; report and route any mismatch for disposition.

An authorized issue remaining open because host auto-close differs is not alone
publication failure. Explicit closure requires the actual issue-closure owner or
that authority already held by the executor. Preserve and report unexpected
observed closure; route correction/reopening under project authority without
silently restoring state. Return unresolved conditions, follow-up, and next owner
through return of control. Publication authority does not imply issue-closure
authority or general project closeout: merge need not complete the work item,
and issues may legitimately remain open afterward.
