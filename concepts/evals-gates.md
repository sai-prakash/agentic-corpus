# Evals & gates

**Definition.** Independent checks that keep or reject a harness change, a tool call, or a session outcome. Not a paragraph in the system prompt.

**Contrast.** Name-match tool evals are not scenario evals. Harness-value (2609.20474): the gate on erroneous acceptance is a standalone verifier, not the plan that raised success — 61% of invalid Retail episodes rejected, 17% of correct ones withheld, <¢1. Coding-harness study (2609.20804): overflow-prevention is the context gate; recoverable elision is machinery without a measured accuracy gate. TRACE (2609.19897): source-traceable hit rate is the archive gate, not a new graph build. Chronicle (2609.20625 + theagentplane/chronicle): a recorded incident is not a CI test until one boundary is live. Cut-point replay serves chosen envelopes from the record and runs the complementary subset against new code. Six incidents: +23 μs/crossing to record; full replay zero model calls and bit-stable ×20; stub-every-boundary with the same assertion catches none of the guard mutants, cut-point catches all. SkillAA Local/Big Gates are the same shape on a skill graph. Verification-status laundering (2609.20211): a monitor that never sees "unverified" is not a gate. Pair with ContrAgent / CPV / CHASE / CapScope / VP-CONTROL / Fabrication After Tool Failure: a lift on the happy path is not a release gate until withheld-correct, Sham, and a live cut-point are on the page.

**Heat.** 5. Updated 2026-09-20.

Sources: Chronicle 2609.20625 + theagentplane/chronicle; SkillAA 2609.20455; Verification-status laundering 2609.20211; How Do Agent Harnesses Create Value? 2609.20474; Coding-harness study 2609.20804; TRACE 2609.19897; ContrAgent 2609.18128; CPV 2609.18820; CHASE 2609.18366; CapScope 2609.08371; VP-CONTROL 2609.10969; Fabrication After Tool Failure 2609.14758.

Publish angle: do not treat a plan lift as a release gate until the Sham control and the withheld-correct rate are both on the page. Do not treat a stubbed replay as a regression test until one unsafe boundary runs live.
