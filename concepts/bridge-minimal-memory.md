# BRIDGE Minimal Memory

A deliberately minimal RAG memory that stores chained observation notes, retrieves them with hybrid BM25 + cosine, and renders them chronologically, reaching parity with far more elaborate agent-memory systems on standard recall benchmarks while revealing design trade-offs on action probes.

**Contrast:** stacking extraction, supersession, reflection, and graph synthesis is not automatically better than block-summary notes; standard benchmarks score what is retrieved, not what the agent can do with it.

**Sources (last 14 days):**
- arXiv:2611.22179 (submitted 17 Nov 2026, Jingyu Liu et al.) — BRIDGE matches prior SOTA within CI on LongMemEval-S and BEAM, beats best memory baseline on EverMemBench by 5.7-6.3 points at ~5-7K tokens; on adversarial probes atomic-fact extractors win rule application while BRIDGE wins pattern induction.
- Official repo https://github.com/Jingyu6/rag-in-a-trenchcoat (code, probes, outputs) and high-engagement X summary by @dair_ai (18 Nov 2026).

**Shippable lab:** build a 50-line BRIDGE-style store over 15 synthetic sessions; run the two opposing probes (rule application vs pattern induction) against a simple atomic-fact extractor and measure both retrieval precision and whether the agent actually applies the remembered rule.

Heat 5. Updated 2026-11-19.
