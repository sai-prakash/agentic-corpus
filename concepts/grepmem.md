# GrepMem

Lossless, index-free memory for long-horizon agents: an append-only plain-text log of the complete interaction history plus a regular-expression search tool for on-demand recall.

**Contrast:** structured memory or summarization decides what to preserve before future needs are known and can discard exact details; GrepMem keeps everything and searches later, requiring no embeddings, retrieval index, memory extraction, or additional models.

**Sources (last 14 days):**
- arXiv:2611.25123 (submitted 18 Nov 2026, Ziyan Yang, Taiwei Shi, Jieyu Zhao / USC) — after RL training of Qwen3.5-9B, GrepMem reaches 95–97% accuracy on ContextBench versus at most 21% for lossy baselines and outperforms SUPO summarization by 8.8 points on BCP-Multi while staying on the accuracy–token-cost Pareto frontier across five tasks.
- X post by @dair_ai (20 Nov 2026, 124 likes / 147 bookmarks) and multiple independent posts summarizing the result and linking the paper.

**Shippable lab:** implement a ~40-line GrepMem (append log + grep tool) over a 20-step multi-question research agent and measure exact-recall accuracy and token cost against a summarization baseline.

Heat 5. Updated 2026-11-21.
