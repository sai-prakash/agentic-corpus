# MIRIX-2.0

Multi-agent memory system in which six typed memory agents keep complete records as the system of record, a provenance hypergraph indexes episodic and semantic records with n-ary frames that cite their source rows, and retrieval is constrained by explicit budgets. AutoDream runs offline outside the write path to merge duplicate anchors without rewriting records and to distill task sessions into skills.

**Contrast:** complete, citable records plus offline distillation is not history rewriting or unbounded search.

**Sources (last 14 days):**
- arXiv:2611.12068 (9 Nov 2026) — Wei-Chieh Huang, Weizhi Zhang et al. 91.4% on LoCoMo (+14.3 over strongest baseline), 72.6% on LongMemEval-S; best procedural results on ALFWorld and WebShop; 49.2% on MetaClaw-Bench versus 44.0% for a skill library. Code public.
- Author posts (10 Nov 2026, @__YuWang__) — announcement of factual and procedural results, with links to paper and repo.

**Shippable lab:** implement two typed memory agents (episodic + procedural) that write complete records and an offline distillation step that turns successful sessions into skills; measure recall accuracy and token use on a small conversational or tool-use benchmark.

Heat 4. Updated 2026-11-11.
