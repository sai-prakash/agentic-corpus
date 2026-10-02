# Problem Discovery Corpus

Started: 2026-09-16
Branch: `problem-discovery`

This directory is the durable research base for finding problems worth validating commercially across industries.

## Files

- `METHOD.md` — research protocol, source hierarchy, falsification rules and validation ladder.
- `EVIDENCE.csv` — source-level evidence ledger. One row should represent one independently inspectable observation/claim.
- `CANDIDATES.md` — problem hypotheses synthesized from the evidence ledger, including contradictions and cheap kill-tests.

## Initial corpus

- 15 problem hypotheses
- 35 evidence records
- Industries: healthcare administration, construction, property management, finance/AP/AR, commercial insurance, logistics, cybersecurity/GRC, quality/QMS

## Current deeper-research queue

1. H-03 Provider credentialing / payer-enrollment exception handling
2. F-03 AP exception resolution after failed 3-way match
3. I-02 Commercial-insurance renewal change detection/reconciliation
4. L-01 Detention/demurrage prevention + dispute evidence
5. P-01 Property-maintenance approval/dispatch exception handling

This queue reflects research priority, not product-market-fit proof.

## Explicitly crowded problems

- H-01 Generic healthcare denial recovery
- C-01 Generic construction submittal comparison
- S-01 Generic security-questionnaire answering

These remain real problems, but the obvious product shape is already heavily attacked. Any opportunity here must be narrower and supported by residual-work evidence.

## Evidence rules

1. Do not promote a vendor claim to a fact.
2. Record evidence against a thesis as carefully as evidence supporting it.
3. A large TAM does not substitute for observable buyer pain.
4. Complaints without spending/economic consequence are weak signals.
5. Existing spend on an inadequate workaround is a strong signal.
6. Before building, obtain real workflow artifacts/data from target users.
7. Before scaling, obtain a paid pilot.

## Next evidence needed

For each item in the deeper-research queue:

- 20+ practitioner observations from independent people
- current competitor map and pricing where public
- 3+ concrete existing-spend signals
- workflow decomposition showing system boundaries and manual handoffs
- integration/data-access feasibility
- regulatory/liability kill-test
- bottom-up buyer-count and ACV model
- a concierge validation protocol using real artifacts

The corpus should grow by evidence rows first. Candidate prose is derived from those rows and should be rewritten when the evidence changes.
