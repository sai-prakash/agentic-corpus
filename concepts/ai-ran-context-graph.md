# AI-RAN Context Graph

Heterogeneous directed graph that turns multi-agent decision chains into a queryable explanation layer via Decision-Event causal junctions.

**Contrast:** single-model feature attribution or linear event logs are not a cross-agent causal junction whose outgoing consequences are upgraded by counterfactual verification.

**Sources (last 14 days):**
- arXiv:2611.16879 (12 Nov 2026) — Xijun Wang, Zhaoyang Liu, Xiang Chen, Howard H. Yang, Chenyuan Feng. Sub-millisecond compliance and diagnosis queries over tens of thousands of nodes; distinguishes true causal impacts from spurious correlations on AI-RAN xApp/rApp flows.
- Domain instantiation over existing E2/A1/O1 data flows as independent operational evidence.

**Shippable lab:** model a small multi-agent workflow (e.g., tool-using agents) as Decision-Event nodes with incoming context edges and outgoing consequence edges; add a simple counterfactual check; measure query latency and causal-vs-spurious accuracy on synthetic alert traces.

Heat 4. Updated 2026-11-14.
