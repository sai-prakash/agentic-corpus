# HEELO

Harness engineering framework that builds each task's harness from a library of agent-native primitives: reusable units that equip a resource with a resident LLM which applies it in context and communicates requirements to other primitives. Composition produces a task-specific graph; evidence-based revision updates only implicated primitives.

**Contrast:** reaching a tool is not applying it; competence must travel with the resource, not stay with the caller.

**Sources (last 14 days):**
- arXiv:2611.07461 (5 Nov 2026) — Haibo Jin et al. Dev-Primitives raise Terminal-Bench 4.0 from 37.3% to 55.5% on the same backbone; on 46 real-world tasks at heelo.dev, Claude Code completes 9 → 39 and Codex 9 → 35 when connected via MCP.
- Author post (6 Nov 2026, @HaohanWang) — announcement of the paper and platform results.

**Shippable lab:** take a small tool suite or coding task; define 2–3 agent-native primitives with resident LLMs; compose them for the task and measure completion rate and cost vs a standard harness that only exposes the raw tools.

Heat 4. Updated 2026-11-09.
