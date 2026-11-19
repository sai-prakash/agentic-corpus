# Self-Improving Harness Framework

A unifying architectural framework that pairs four editable runtime components (context and state, agent control, action interfaces, verification and recovery) with a four-stage loop that diagnoses failures from traces, proposes code patches, validates candidates, and deploys modular updates.

**Contrast:** a static harness tuned for one model or a full-harness rewrite is not gated modular evolution that generalizes across models while bounding token cost and discovering reusable mechanisms such as pre-stop verifiers.

**Sources (last 14 days):**
- arXiv:2611.22299 (submitted 17 Nov 2026, Deep Shah & Nehal Kathrotia) — gated modular evolution outperforms prompt reflection and full-harness rewrites on SWE-bench Lite across models and repositories at a fraction of the token cost.
- arXiv:2606.09498 (Self-Harness, Hangfan Zhang et al., June 2026) — prior three-stage loop (weakness mining, proposal, validation) that produced large held-out gains on Terminal-Bench and SWE-bench.

**Shippable lab:** start from a minimal harness on a small SWE-bench Lite subset; implement the four-stage loop that mines failures, proposes a single modular patch (e.g., a loop breaker or verifier), validates it on a hold-out, and measures token cost and success versus an un-gated full rewrite.

Heat 4. Updated 2026-11-19.
