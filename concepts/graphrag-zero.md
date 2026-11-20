# GraphRAG Zero

A lightweight GraphRAG variant that builds and queries from embedding geometry alone, eliminating LLM calls at index time and optionally at query time for sub-second interactive retrieval.

**Contrast:** LLM-heavy community summarization and index-time generation is not zero-call embedding-guided graph retrieval that remains interactive for agents.

**Sources (last 14 days):**
- Microsoft Research story (17 Nov 2026) — GraphRAG Zero ships in Foundry IQ and GitHub Repo Mind Light; removes LLM index calls, optional zero LLM query, sub-second latency via embedding geometry.
- High-engagement X post by @MSFTResearch (17 Nov 2026) and product traces in Foundry IQ / Repo Mind Light.

**Shippable lab:** implement a minimal embedding-graph retrieval (kNN + simple graph expansion, no LLM index) over a small document set and compare latency/token cost against a standard chunk RAG baseline on multi-hop questions.

Heat 5. Updated 2026-11-20.
