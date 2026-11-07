# ReConMem

Graph-based dual memory that aligns distilled conversational memories with the repository code entities they refer to, so a code assistant can retrieve both natural-language context and structural code together.

**Contrast:** a general-purpose conversation memory is not aligned with the repository code entities the conversation refers to.

**Sources (last 14 days):**
- arXiv:2611.07759 (5 Nov 2026) — Zhishuo Yang et al. Semantic graph of distilled memories + structural graph of conversation-relevant code entities, with maintained cross-graph associations. Code-draft query grounding + relation expansion + structural compression. +7.9 / +7.3 pp Pass@1 on LoCoEval; 27.6% Correct / 44.0% Partially Correct on CodeAssistBench vs Full History.

**Shippable lab:** repository-oriented multi-turn fixture; build dual graphs and measure Pass@1 / Correct rate when conversational memory is or is not linked to code entities.

Heat 4. Updated 2026-11-07.