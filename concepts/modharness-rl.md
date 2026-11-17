# ModHarness-RL

Harness components (compression of history into context, and steering on behavioral deviation) are programs over typed state blocks that are proposed from trajectories, verified by execution, and replayed so they evolve with the model during agentic RL.

**Contrast:** a fixed hand-written harness that stays constant throughout training is not programs learned from the task's data that track how the model's behavior shifts.

**Sources (last 14 days):**
- arXiv:2611.18533 (13 Nov 2026) — Zelin He et al. 14–24% gains on CodeSearch over fixed-harness baselines; leads other memory/skill/prompt/evolution methods by 5–12%.
- HTML version of the paper with detailed results on ALFWorld and BIRD SQL.

**Shippable lab:** record a short agent trajectory as typed blocks (observation, action, reward, error). Write a tiny Compression program that selects/summarizes a subset into the next context. Propose one variant from the trajectory, execute it, and compare token count and task success against the baseline harness.

Heat 4. Updated 2026-11-17.
