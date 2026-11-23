# KnowledgeClaw

Agentic system that builds and maintains an omnimodal typed hypergraph for knowledge engineering, with a closed-loop lifecycle agent and multi-granular query routing.

**Contrast:** existing knowledge-engineering systems meet at most two of omnimodality, closed-loop lifecycle, and multi-granular application; KnowledgeClaw requires all three and routes each query to the granularity it needs.

**Sources (last 14 days):**
- arXiv:2611.24294 (submitted 18 Nov 2026, Haoran Luo, Jiapu Wang, Linhao Luo, Luu Anh Tuan) — formalizes OmniKE, releases OmniKE-Bench (1,829 model-free items over 3,960 real files in five modalities); KnowledgeClaw ranks first on all six tasks against 30 baselines with overall OKE of 55.9 (+14.6 over strongest baseline).
- Public software and data at LHRLAB/KnowledgeClaw.

**Shippable lab:** prototype a minimal typed hypergraph ingest for mixed PDF + image files with a simple lifecycle check (detect edit and re-embed) and multi-granular lookup (file-level vs entity-level) on a 20-file personal corpus; measure retrieval precision against flat RAG.

Heat 4. Updated 2026-11-23.
