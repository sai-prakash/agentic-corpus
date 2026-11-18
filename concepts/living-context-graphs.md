# Living Context Graphs

A continually learned context layer over an existing enterprise warehouse that bootstraps semantics from the data, indexes business context in a concept graph as queries are served, writes durable learnings from verified outcomes, and withdraws or re-earns context when later outcomes contradict prior routes.

**Contrast:** a static schema document or one-shot retrieval of past examples is not a no-copy context layer that earns transfer on held-out questions by revising itself from verified use.

**Sources (last 14 days):**
- arXiv:2611.20976 (submitted 16 Nov 2026, Varun Agrawal et al. / Genloop) — on a transfer-aware split of three BIRD databases (499 questions), learning from history only raises held-out accuracy by +22.6 points (95% CI [+14.4, +30.8]), exceeding five-shot retrieval from the same history by +12.3 points. Accepted at NeurIPS 2026 Workshop on Continual Learning.
- OpenReview page for the same paper (CL4FMAgents @ NeurIPS 2026) with TL;DR and keywords on non-parametric continual learning and agent memory.

**Shippable lab:** bootstrap a tiny concept graph over a small synthetic or BIRD-subset schema by extracting shared phrase-level facts from a history of successful text-to-SQL traces; serve a held-out question by retrieving and composing those concepts; measure accuracy and token cost versus plain few-shot or raw schema injection, then force one contradictory outcome and show withdrawal.

Heat 4. Updated 2026-11-18.
