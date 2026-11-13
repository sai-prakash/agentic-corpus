# WikiTrace

Evidence-linked memory that stores each lesson with links back to the original trajectory summary and raw trace so the agent can check or correct it before acting.

**Contrast:** free-floating lessons inferred only from success/failure labels are not evidence-linked; agents cannot descend to the source trajectory when details are missing or conflicting.

**Sources (last 14 days):**
- arXiv:2611.14320 (10 Nov 2026) — Yukyeong Lee, Yumin Choi, Jinheon Baek, Sung Ju Hwang. Addresses memory-induced degradation by linking insights to trajectories and providing terminal tools for descent.
- Companion discussion in the same Nov 11 research digest cluster on memory reliability.

**Shippable lab:** add trajectory links to a simple lesson store; on retrieval, force a check step when the lesson is from a failed task or conflicts; measure failure rate on tasks the agent previously solved without memory.

Heat 4. Updated 2026-11-13.
