# MemFolder

Structure-guided memory folding that sequentially reduces both record count and context length for long-term agents, using shared memory groups guided by cross-record structure.

**Contrast:** pruning discards evidence that later queries may need; plain consolidation produces fewer but longer retrieval units that still inflate attention cost; MemFolder uses entity anchors, affinity, and temporal chaining to fold while preserving recoverable facts via verification.

**Sources (last 14 days):**
- arXiv:2611.26427 (submitted 19 Nov 2026, Xuyang Liu, Chenwen Lu, Junxi Wang et al.) — RecordFolder retains 99.0% of original average performance across LoCoMo, PersonaMem, and LongMemEval with 50% fewer records on Mem0, exceeding the strongest baseline by 1.9 points; ContextFolder further shortens records with limited accuracy loss.
- GitHub repository xuyang-liu16/MemFolder (code for RecordFolder and ContextFolder).

**Shippable lab:** implement a minimal RecordFolder (entity mention grounding + cosine affinity clustering with temporal window) over a 100-record conversation log and measure fact retention and retrieval latency against a random-prune-to-50% baseline.

Heat 4. Updated 2026-11-23.
