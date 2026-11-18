# ToolGraph Q-function

A directed, weighted dependency graph compiled once over a deployed tool catalog (via parameter matching and interventional probes that execute candidate chains with and without the proposed predecessor). Graph paths are composed into a goal-conditioned action value Q(s, a, g); an LLM estimator that also reads concrete state improves ranking over pure structural methods.

**Contrast:** retrieving or searching tools from a dependency graph is not composing those paths into multi-step, goal-conditioned values that can still see the actual arguments of the call.

**Sources (last 14 days):**
- arXiv:2611.20569 (submitted 16 Nov 2026, Ke Shen et al.) — across two tool-use benchmarks and three backbones the LLM estimator improves on personalized-PageRank over the identical graph in every setting by ~8.3 points on average; pure structural estimators fall below it because type-level values cannot separate a correct tool called with a wrong argument.
- OpenReview page for the same paper (NeurIPS 2026 Workshop PTA) confirming the controlled retrieval-versus-value comparison.

**Shippable lab:** pick a small tool catalog (5–8 tools with overlapping parameters). Build the dependency graph by schema matching plus one interventional probe per candidate edge. Implement a simple path-composition scorer (even a hand-written LLM prompt that receives the graph evidence + current arguments) and compare next-tool ranking accuracy or success rate against PageRank or direct prompting on a few multi-step tasks.

Heat 4. Updated 2026-11-18.
