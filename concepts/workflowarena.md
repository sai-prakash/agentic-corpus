# WorkflowArena

Benchmark of autonomous multi-agent workflow orchestration: 145 long-horizon tasks across 8 professional domains where the agent decides whether and how to delegate, all delegation is recorded, and success requires every acceptance criterion of an integrated deliverable to hold under a hidden verifier.

**Contrast:** end-to-end task completion is not the same as the quality of the workflow organization the model authors at runtime.

**Sources (last 14 days):**
- arXiv:2611.12856 (9 Nov 2026) — Einsia AI / Navers Lab. Best resolved rate 36.95% (Opus 5.5 max effort in Claude Code); distinct Claude vs GPT delegation patterns; no configuration dominates every domain.
- Official repo Einsia/WorkflowArena and project site — task packages, results tables, evaluation code.
- Independent X analysis (12 Nov 2026, @HaStrive) — highlights the gap between high continuous scores and low resolved rates on software tasks.

**Shippable lab:** instrument a local multi-agent harness to log every delegation decision and worker grouping on a small long-horizon task set; score both the final deliverable against explicit acceptance checks and the orchestration pattern itself.

Heat 4. Updated 2026-11-12.
