# MCPHallu

Benchmark that diagnoses hallucination-prone failures in MCP agents along reasoning, execution, and memory axes by embedding structural triggers into tasks so that one of four subtypes (Branch Collapse, Unreachable Goal, Tool Misuse, Context Forgetting) is the dominant risk.

**Contrast:** aggregate task-success rate is not a subtype-level diagnosis of reasoning, execution, or memory failures.

**Sources (last 14 days):**
- arXiv:2611.07689 (5 Nov 2026) — Yizhen Jiang et al. 358 tasks, 36 production MCP servers, 14 agents, 5,012 trajectories. Mean 0.642; Unreachable Goal 0.458 (23.2% pass). Rank shifts of ~6.9 positions across subtypes.
- Agents Watch daily (6 Nov 2026) — subtype analysis of continued tool use amplifying hallucination on infeasible goals.

**Shippable lab:** MCP agent + small server suite; inject Unreachable Goal and Context Forgetting fixtures; score subtype pass rates and stop-vs-fabricate behavior.

Heat 4. Updated 2026-11-08.