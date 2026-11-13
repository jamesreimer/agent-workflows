# Security Policy

## Supported validation environments

The repository link checker is supported on trusted, single-user development
machines and isolated, short-lived GitHub-hosted CI runners. Shared or
multi-tenant machines and self-hosted runners shared across users or jobs
are not supported for running the link check. The temporary localhost server
is not a filesystem sandbox against other local processes; its bounded
residual risk is documented in [#28](https://github.com/jamesreimer/agent-workflows/issues/28).
Requalify if Linkinator releases a relevant fix, our serving usage changes,
or support expands to shared machines. This does not waive release qualification.

## Reporting

For a sensitive concern, open a brief issue in this repository requesting private
contact without exploit details or credentials. Ordinary documentation and
validation defects belong in regular issues. There is no agent execution runtime or
response-time commitment; reports should identify the affected library revision.

Inherited private-key detection recognizes some private-key content. It does
not establish that repository content or history contains no secrets.
