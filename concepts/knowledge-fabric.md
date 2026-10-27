# Knowledge fabric

**Definition.** A pre-computed knowledge layer that organizes enterprise data into a hierarchical knowledge tree (indexes, summaries, tables) plus a domain ontology (entities, properties, relations) so that queries resolve to constrained artifact identifiers before vector search.

**Contrast.** Organize (tree + ontology) before you retrieve; disambiguation is structural rather than statistical. Do not retrieve then organize.

**Evidence.** Sarvam AI blog (26 Oct 2026): on Harvey LAB benchmark, ontology+tree reached 84.2% rubric criteria met (vs 55.1% agentic RAG), $0.28/task (vs $0.64), 0.86M tokens (vs 1.80M) with GLM 5.3; outperformed reported GPT-5.6 Sol and Opus 4.8 numbers. Related to ongoing context-graph and GraphRAG discourse.

**Heat.** 4. Updated 2026-10-27.

Sources: https://www.sarvam.ai/blogs/knowledge-fabric-enterprise-agents.

Publish angle: build a small knowledge tree (folder indexes + one-page summaries) over a document collection and compare navigation+constrained retrieval against flat hybrid RAG on a multi-hop question set.
