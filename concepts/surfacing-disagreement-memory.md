# Surfacing Disagreement Memory

Shared memory for multi-agent debate that preserves contradictions and passes the ranked conflict set to the agents instead of collapsing retrieval to a single winning fact.

**Contrast:** silently reconciling memory to one consistent fact before any agent sees the disagreement is not surfacing the ranked conflict set so the debate can use the disagreement.

**Sources (last 14 days):**
- arXiv:2611.22461 (submitted 17 Nov 2026, Ziaullah Khan et al.) — preserving contradictions improves F1 by +0.340 (95% CI [+0.267, +0.414]) and cuts attack success from 22 to 7 of 122 poisoned items at equal cost; harness, attack set, and logs released.
- Paper-bot and discussion posts on X (18 Nov 2026) confirming the result and the structural failure of the write trust-gate.

**Shippable lab:** implement a tiny DebateGraph backend that can return either a collapsed winner or a ranked conflict set; run a fixed multi-agent debate on 20 questions with planted contradictions and measure F1 and attack success under both policies.

Heat 4. Updated 2026-11-19.
