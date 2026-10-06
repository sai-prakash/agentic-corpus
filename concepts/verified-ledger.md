# Verified ledger

**Definition.** A later round may reuse only a fragment that survived an isolated check. Failed attempts stay as objections or counterexamples, not as premises.

**Contrast.** A population of attempts is not a ledger. Cogentic (2609.40324, Google Research, revised 1 Oct) runs an orchestrator over independent provers, adversarial verification, and a persistent verified ledger. An auditor extracts lemmas from rejected drafts and re-verifies each in isolation before reuse. Table 1 summarizes five expert-checked results; the abstract does not print a success rate. Ansatz (2610.02945) is the graph sibling: facts, plans, and counterexamples are nodes, scoped recall is for local re-proving, and uncritical reuse is the failure mode. It reports closure on all ten First Proof Second Batch tasks and solutions to the Jamison caterpillar conjecture and Erdős Problems 289, 348, and 488 without human intervention. A raw context dump is the falsifier if it reuses rejected claims as often as the ledger.

**Heat.** 5. Updated 2026-10-06.

Sources: Cogentic 2609.40324 + https://sites.google.com/view/cogentic; recap https://x.com/RealMarvelX/status/2107012024681042209; Ansatz 2610.02945; recap https://x.com/arXivBangers/status/2107171769966837885.

Publish angle: freeze the prover. Arm A: paste prior attempts. Arm B: admit only re-verified lemmas and keep the killing objection as a negative edge. Report reuse of rejected claims.
