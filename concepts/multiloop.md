# MULTILOOP

Automated coding-agent loop that analyzes multi-agent execution traces, diagnoses interaction and individual failures, edits the harness, and re-evaluates on a small training set.

**Contrast:** single-agent harness optimization (editing prompts and tools from traces) is not multi-agent harness optimization, which must also change how agents delegate, share information, and coordinate.

**Sources (last 14 days):**
- arXiv:2611.15754 (11 Nov 2026) — Daniela Gottesman et al. 4.6% accuracy gain over base multi-agent harness and 3.2% over best single-agent on DeepSearchQA with 10 training samples; orchestration failures persist.
- HTML version and OpenReview workshop entry confirming the case study and claims.

**Shippable lab:** take a small multi-agent harness (or even two agents with a shared scratchpad), collect failure traces on a tiny information-seeking suite, run a coding agent that proposes one targeted edit (prompt fragment or tool addition), re-evaluate, and measure the delta. Stop after one or two iterations.

Heat 4. Updated 2026-11-15.