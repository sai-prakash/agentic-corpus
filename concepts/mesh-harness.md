# MESH-Harness

**Definition.** An agent harness is a composition of role-specific modules whose implementations can be swapped and recombined; the next combination is chosen by a bandit that reads past validation scores, not by a monolithic rewrite.

**Contrast.** A single harness codebase is not a searchable module pool. MESH-Harness (2610.05300, Junhao Hu et al., submitted 4 Oct) divides the harness into five or seven functional modules, seeds ten implementations each, and uses full-covariance LinUCB on shared module representations to select combinations under a fixed evaluation budget. After every five evaluations a proposal model generates at most one new implementation per two module positions from failure traces. On text, retrieval-augmented math, code, and interactive scientific tasks it outperforms Meta-Harness by 5.70, 7.01, 2.00 and 5.00 points respectively under matched budgets; iterative optimization adds 5.63–7.79 points. Aggregate test-time cost is 44.2% lower; total cost including search 14.6% lower. Second source is the author’s X thread (status 2108870657492537696, 10 Oct) which repeats the module-pool and bandit design and points at the paper. Pair with causal-improvement-graph (explicit improvement state) and harness-evolution (outer loop); MESH is the compositional, budget-aware variant. A random combination baseline that matches bandit accuracy is the falsifier.

**Heat.** 4. Updated 2026-10-11.

Sources: 2610.05300 https://arxiv.org/abs/2610.05300; x.com/DerekHJH9/status/2108870657492537696.

Publish angle: freeze the task executor. Arm A ships one harness file. Arm B maintains per-module pools and selects the next combination with LinUCB for 20 evaluations. Report accuracy and total candidate evaluations. Falsifier: if random selection from the same pools closes within 2 points of the bandit, compositional search added no value under the budget.
