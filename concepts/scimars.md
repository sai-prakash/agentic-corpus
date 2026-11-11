# SciMARS

Framework for recursive, task-local adaptation of multi-agent harnesses in closed-loop scientific discovery. Separate component editors revise roles, coordination, and (in the Memory variant) the memory policy, guided by candidate probes, over a shared evidence graph.

**Contrast:** static multi-agent procedures are not adaptive to evolving evidence; fixed roles and memory policies perpetuate mistakes even when observations are retained.

**Sources (last 14 days):**
- arXiv:2611.12552 (9 Nov 2026) — Weimin Wu, Han Liu. SciMARS + Memory resolves 12/18 GPT-6-Astra attempts on Autonomous Science Bench (versus 8/18 for the base team) and improves on ScienceAgentBench and AppWorld.
- Official repo github.com/WeiminWu2000/SciMARS — reusable harness components, AppWorld adapter, and local examples.

**Shippable lab:** take a small multi-agent scientific or coding team; add a shared evidence graph and a simple role-editor loop that proposes one change after a failed run; measure whether the next attempt succeeds more often.

Heat 4. Updated 2026-11-11.
