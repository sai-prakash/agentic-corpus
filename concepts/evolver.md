# Evolver

Experience-driven framework that turns transient agent exploration traces into persistent, reusable Gene assets (structured procedural knowledge). Genes are retrieved at task start and revised from feedback, enabling experience-conditioned execution on existing harnesses without model weight updates.

**Contrast:** transient execution traces are not persistent, reusable procedural experience.

**Sources (last 14 days):**
- arXiv:2611.07595 (5 Nov 2026) — Haoyang Zhang et al. On 320 paired runs across Terminal-Bench 2.1, SWE-bench Multilingual, SWE-rebench, and GAIA with Claude Code and Codex: success 83.13% → 87.50%, tokens −24.24%; on 265 dual-success pairs, tokens still −17.57%.
- Discussion (8 Nov 2026, @omarsar0 and others) — coverage of the Gene reuse pattern and efficiency gains.
- github.com/EvoMap/evolver — shipping implementation with recent v2 releases.

**Shippable lab:** instrument a coding harness (Claude Code or Codex-style) with Evolver-style Gene extraction and retrieval; run paired tasks and measure success rate and token delta.

Heat 4. Updated 2026-11-09.
