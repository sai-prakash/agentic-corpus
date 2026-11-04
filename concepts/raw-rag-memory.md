# Raw-RAG memory

Naive dense retrieval + reranking over raw conversation history is a strong baseline that frequently outperforms complex agentic memory systems on long-conversation benchmarks.

## Contrast
Complex agentic memory (mutation, structural reorganization, learned retrieval) is not always needed. Preserving raw evidence can outweigh the benefits of transformation for the evaluated tasks.

## Sources
- arXiv:2610.30755 (22 Oct 2026)
- Litmeb/RAW-RAG code
- The Frontier and Flowtivity summaries (late Oct 2026)

## Lab seed
Index a long conversation with overlapping raw windows (include timestamps). Compare top-k dense + cross-encoder rerank against a simple graph or mutation memory on the same questions. Measure evidence coverage vs utilization.
