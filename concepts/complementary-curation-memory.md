# Complementary Curation and Consolidation for Long-Term Agent Memory

**Slug:** complementary-curation-memory  
**Heat:** 5  
**Updated:** 2026-11-01

Hybrid memory of episodic events and structured relational memories, plus consolidation, outperforms single-type systems on long-horizon dialogue benchmarks and matches product claims of large pass-rate gains.

## Triple / contrast
Complementary hybrid (episodic + relational + consolidation) is not pure episodic notes or pure derived facts.  
Episodic preserves temporal context; relational makes implicit links explicit; consolidation keeps the store efficient and consistent.

## Sources
- arXiv:2610.39790 (Gupta, Han, Diaz, Chen, Das, Rühle, Rajmohan; Microsoft; submitted 29 Oct 2026) — paper: 90.2% LoCoMo, 85.5% LongMemEval-S
- Databricks MemCurrent / Agent Memory (blog 20 Oct 2026, X post 30 Oct) — product: internal enterprise pass rate 22.3% → 68.4%, 31% fewer tokens; episodic + derived with offline dreaming

## Shipable lab (6 h)
Build a tiny hybrid: append-only episodic JSONL of dialogue turns + a small entity-relation triple store extracted by a cheap LLM. Add a consolidation pass that merges duplicates and resolves simple conflicts. Run 5–10 multi-session probes (facts + relational queries). Compare recall and token cost against raw-history RAG and against derived-only. Measure where the hybrid wins.
