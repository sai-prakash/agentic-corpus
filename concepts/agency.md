# Agency

Harness interposition platform that sits between an unmodified agent harness (Claude Code, OpenAI Codex) and the computer, exposing a unified abstraction for portable system optimizations that cut token use and LLM calls without changing the model or accuracy.

**Contrast:** the harness is not the accuracy bottleneck; it is the cost bottleneck. Accuracy depends mostly on the LLM; harness variances (prompts, tools) barely move pass rate but can cut cost up to 2.6×.

**Sources (last 14 days):**
- arXiv:2611.12122 (9 Nov 2026) — Jongseok Park, Jiaxiang Yu et al. Agency achieves ~0.77× average cost (reductions up to 35%) while retaining 0.97× accuracy on coding and document-lookup tasks via compaction, gated context GC, SQLite indexing, and subtask stacking.
- Independent X analysis (10 Nov 2026, @arkyyang) — plain-language breakdown of the four takeaways, experiment setup, and product implications.

**Shippable lab:** wrap a local coding harness with a thin interposition layer that implements one optimization (e.g., reuse-gated context compaction or a prebuilt file index) and measure cost and pass rate against the unmodified harness on 10–20 short tasks.

Heat 4. Updated 2026-11-11.
