# ActionRAG

**Definition.** Graph memory architecture for LLM agents that pairs cautious indexing (type-label reconciliation and tiered entity resolution) with query-time evidence-refining graph diffusion on a bounded local subgraph.

**Contrast.** Initial dual-channel similarity scores are not final; receiver-normalized diffusion over local path structure revises triple relevance, protects seeds, penalizes hubs, and materializes missed connections.

**Evidence.** Mahla & Vandrangi (arXiv:2610.32752, 23 Oct 2026): 55.1 average accuracy on eight MemoryAgentBench deterministic columns (+5.4 over strongest retrieval baseline); synthesis cost < $0.001/query; retrieval-side p99 sum 440.7 ms on consumer hardware. X posts circulating the abstract and numbers.

**Heat.** 4. Updated 2026-10-27.

Sources: https://arxiv.org/abs/2610.32752.

Publish angle: implement dual-channel entity+triple retrieval plus a single diffusion solve on a small memory-agent benchmark subset and measure whether local graph revision recovers multi-hop or conflict cases that flat RAG misses.
