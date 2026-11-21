# AutoRAGBench

Benchmark and evaluation of LLM agents that autonomously develop RAG systems from scratch in an open code space, analyzing task data, implementing pipelines, and iteratively refining them under a fixed compute budget.

**Contrast:** fixed or human-designed RAG pipelines are not agents that invent and improve the full system without starter code or prescribed strategies.

**Sources (last 14 days):**
- arXiv:2611.25582 (submitted 19 Nov 2026) — nine tasks; GPT-6.1 Sol with Codex CLI averages 56.1 versus 44.4 for the composite Human-SOTA baseline; when seeded with human systems, the same agent improves scores by 16.6 points on average across seven tasks. Code and data released.
- Public GitHub release of the benchmark and agent trajectories.

**Shippable lab:** run a small agent (or yourself with an LLM) on one AutoRAGBench-style open task for two hours and compare the resulting RAG quality and iteration path against a standard fixed pipeline baseline.

Heat 4. Updated 2026-11-21.
