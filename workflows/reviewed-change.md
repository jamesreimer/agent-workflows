# Reviewed Change

## Governing sources

- [Publication and Release Integrity (PRI)](../GOVERNING-SOURCES.md#publication-release-integrity), §§4–17.
- [Architectural Reasoning (AR)](../GOVERNING-SOURCES.md#architectural-reasoning), §§4–12.
- [Operational Execution Contract (OEC)](../GOVERNING-SOURCES.md#operational-execution-contract), §§2, 4–17.
- [Shared Asset Provenance (SAP)](../GOVERNING-SOURCES.md#shared-asset-provenance), §§5–11, 15.1.
- [Project Repository Responsibility (PRR)](../GOVERNING-SOURCES.md#project-repository-model), §§5–9.
- [Standards Adoption Model (SAM)](../GOVERNING-SOURCES.md#standards-adoption-model), §§3–8.

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

Applicable adopted/project authority governs throughout; merely selecting this
composition does not adopt its governing sources (SAM §§3–8). Establish the
responsibility, authority, proportional architecture, and affected dependencies
before treating the model as settled (AR §§4–12).

For an applicable OEC edition, assess its actual scope, not adoption status alone
or the workflow shorthand below. The pinned OEC §2 covers material effects on
live systems, shared services/infrastructure, runtime configuration, protected
data, secrets/credentials, provider state, deployment/activation, backup/restore/
migration/recovery, administration, published/externally consumed artifacts, security configuration,
difficult-to-reverse operations, and comparable operational harm. OEC §§4–5
require a reviewed execution contract before that consequential activity, with
objective, authorized scope, completion boundary, validation, and protected
boundaries whose accidental modification creates material risk (§10). Complexity
alone must not trigger it; simple work with material consequences cannot bypass it.
OEC §16 separately permits narrowly bounded emergency action when delay would
create greater material harm; this workflow supplies no emergency authorization.

OEC §5 recommends, where relevant, non-goals, acceptance criteria, material risks,
recovery expectations, prerequisites, evidence, sequencing, and dependencies on
other authorized actions. These remain recommendations except where a separate
requirement applies: §13 requires recovery expectations for material state that
is difficult to reverse, destructive, externally consequential, or operationally
risky. If no practical rollback exists, state that fact; compensating recovery or
containment is recommended. Concise expectations can suffice for simple rollback;
fictional rollback is not required. Proportionality cannot remove required content
or effect, and genuinely irrelevant concepts need no empty sections.

Implementation mechanics remain bounded by the contract; forecasts do not
themselves add authority
(OEC §§6–9). Every stage stops before exceeding its authority and at its completion
boundary; validation and review do not grant publication or live-operation
permission (OEC §§6–12, 14–15).

Architectural completion requires supported conclusions and explicit material
finding dispositions, including retained follow-up, accepted or deferred findings
with rationale, and dismissals with rationale (AR §12). No disposition waives
another completion condition. Verify shared-source identities, correspondence,
and required targets where SAP §§5–8 and 15.1 apply. Keep project decisions and
work state in their appropriate records (PRR §§5–9). OEC §12.1 recommends
proportionate reporting and retention when later action or review materially
depends on the result, across executors rather than exclusively in publication.

For publication within PRI scope, apply its transition, correspondence, identity,
and resulting-state verification requirements (§§4–9, 14), including its rules for
identity stability, corrections, withdrawal, and partial exposure (§§10–13).
Use applicable SAP provenance semantics rather than a separate correspondence
model (PRI §15); preserve downstream authority and proportionality (§§16–17).

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
  member artifacts and their identities according to what that release denotes.
  Classify changes by effect rather than labels such as metadata or presentation:
  a change is substantive if it could lead a reasonable consumer to a materially
  different conclusion about meaning or requirements, conformance, compatibility,
  dependency or resolution behavior, installation or execution, licensing or
  permitted use, security or safety, identified content or components, or suitability
  for intended reliance (local procedure informed by PRI §10).
  Treat materially uncertain in-place changes as substantive. Substantive corrections need a distinguishable successor
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

Select this composition when a change benefits from an explicit review boundary.
It does not impose independent review on all work. The project specifies any
required independence and reviewer eligibility; required independent review
cannot be replaced by implementor checks. Four responsibilities need not mean
four people or agents. The project can combine already-authorized boundaries
without ceremonial reauthorization.

The selected role remains active until project/user authority explicitly
reassigns it or an instantiated handoff transfers responsibility within that
authority. Generic `proceed`, `continue`, or equivalent language continues only
within the current role, authority, and completion boundary; it neither transfers
roles nor authorizes another role's actions. When the next required action belongs
to another role, stop and return an instantiated, ready-to-use handoff for that
role. Preparing that handoff does not itself authorize the sender to execute it.

1. **Plan.** [Planning](../roles/planning.md) supplies
   [planning → implementation](../handoffs/planning-to-implementation.md).
   Set outcome, authority, ownership, protected behavior, and evidence expectations.
   Distinguish controlling constraints from predicted files and techniques.
   Stop with the instantiated handoff; Planning does not implement.
2. **Implement.** [Implementation](../roles/implementation.md) owns mechanics
   within those constraints. Before mutation, verify any supplied exact/approved
   source against its declared authoritative state using the local provenance
   checks above (and SAP where actually governing);
   a candidate label alone is insufficient. Own required validation through a final
   result. Only final success of all required checks for the immutable candidate
   supports [implementation → review](../handoffs/implementation-to-review.md).
   Pending, queued, in-progress, cancelled, unexpectedly skipped, unresolved, or
   failed checks leave it incomplete; an open PR does not establish readiness.
   Correct and revalidate within existing authority or return incomplete state.
3. **Review.** [Independent review](../roles/independent-review.md) evaluates
   actual candidate state against authorized intent and evidence, rather than
   conformity to a nonbinding forecast. Carry every material finding's disposition
   and rationale; approval versus correction is not a complete findings record.
   Do not mutate the candidate; return the appropriate instantiated handoff.
4. **Correct when authorized.** Use
   [review → correction](../handoffs/review-to-correction.md) for bounded outcomes.
   Carry accepted, deferred, dismissed, and follow-up findings alongside corrections.
   Changes receive re-review proportionate to their effects and dependencies;
   record the new candidate identity and which prior conclusions remain supported.
   This re-review rule is workflow-local operational guidance, not a general
   Review Standard. Missing authority or unresolved conditions return to their owner.
5. **Publish only when authorized.**
   [Review → publication](../handoffs/review-to-publication.md) carries the reviewed
   identity, dispositions, checks, and actual publication authority to
   [publication](../roles/publication.md). Verify correspondence of the state about
   to be published to the reviewed state and satisfy publication conditions.
   Changed state returns to proportionate re-review, not silent substitution.
   Publication does not redesign the candidate. Apply the workflow-local
   publication checks above and any actually governing source obligations.
   Return corrections through the authorized role handoff.
   Where GitHub issue-closing semantics apply, derive the handoff's **Issue closure
   on merge** from the substantive completion boundary established by
   [Planning/project authority](../roles/planning.md#workflow-local-operational-guidance)
   and issue-closure authority. Include an authorized issue when merge satisfies
   all its substantive completion conditions. Merge need not complete every work
   item: exclude an issue with material governed obligations remaining after merge
   and retain ownership of its explicit later completion. Neither closure nor
   `none` is a universal default. Actual closing relationships must express this
   per-issue intent regardless of repository auto-close configuration. Follow the
   [issue-closure safety rule](../roles/publication.md#github-issue-closure) across
   PR, commit, and landing-message surfaces; Publication verifies applicable
   GitHub issue-closing state immediately before merge and resulting issue state
   afterward.
6. **Return from every boundary.** Use
   [return of control](../handoffs/return-of-control.md) on completion, interruption,
   missing authority, or a new material decision. Publication can be absent; all
   roles still return useful state, evidence, unresolved conditions, and follow-up.
   Governed completion requires material consequences actually created by the work
   to be handled, explicitly inapplicable, or durably owned, under
   [Planning's consequence guidance](../roles/planning.md#workflow-local-operational-guidance).

Instantiated contracts, candidates, findings, and execution records remain with
the consuming project. This file supplies a reusable composition, not task state,
an execution engine, an organizational review policy, or release authorization.
