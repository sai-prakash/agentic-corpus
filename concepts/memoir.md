# MEMOIR

Training-free memory lifecycle that unifies judge-gated consolidation (screen that answer-relevant evidence survives before merge) with retrospective attribution (credit supporting memories after each query and revise retrieval priority) plus UCB exploration for under-exposed items.

**Contrast:** static prospective importance scores are not retrospective attribution plus preservation screening before compression.

**Sources (last 14 days):**
- arXiv:2611.07631 (5 Nov 2026) — Mayank Anand et al. On 1,905 deduplicated LoCoMo QA pairs: +11.92 pp evidence recall@5 over bare cosine; confidence-gated feedback +1.50 without references. Judge-gated merges show 0 observed losses in 100 audits.
- AI Weekly summary (6 Nov 2026) — coverage of the failure modes and the single principle of attribute-after-use / screen-before-compress.

**Shippable lab:** LoCoMo-style multi-session traces; implement judge-gated merge screening + post-query attribution; measure evidence recall and loss rate before vs after.

Heat 4. Updated 2026-11-08.