# ArcRAG

Agentic compositional retrieval that induces a query-local graph interface at inference time so the same retrieval procedure works across different knowledge-graph constructions without construction-specific schemas or retuning.

**Contrast:** a GraphRAG retrieval procedure co-designed with one graph construction is not required for portable multi-hop retrieval.

**Sources (last 14 days):**
- arXiv:2611.06481 (4 Nov 2026) — Jyotin Goel et al. Query-local induction of node labels, relation descriptors, and property keys; multi-hop Cypher planning and repair. Fixed config across schema-guided and open-IE graphs of MuSiQue, HotpotQA, TriviaQA. Portability holds; absolute accuracy still shaped by construction.

**Shippable lab:** dual-construct the same corpus (typed schema vs open IE), run a single ArcRAG-style retriever, and quantify the EM/F1 drop (or lack of drop) when the construction changes.

Heat 4. Updated 2026-11-06.