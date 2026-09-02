# Memoryfield

**Definition.** Portable agent memory as a flat directory of short Markdown pages, optional YAML frontmatter, optional SQLite vector index. The index is a cache. The pages are the store.

**Contrast.** Memory is not a pipeline. Cal Paterson (31 Aug): three failing species — a vendor harness that mines conversation history about *you*; a pgvector + Neo4j + judge stack that decides what is worth remembering; a High Modernist graph that distills prose into isolated propositions. Retrieval is a semantic jump (one search, parallel reads), not an N-hop walk. Karpathy-style wiki walking is slow (one serial tool call per hop) and unreliable (the model judges relevance from titles). Graft already showed the cheap entity map as linked markdown in the repo; IBM VLDB showed schema-rich event graphs spending tokens the reader never traverses. Memoryfield is that cheap map made interchangeable across harnesses. MNIST-PRO: a persistent write of *procedures* did not beat an episode-local executable canvas — transferring instructions is not transferring an artifact. EXG experience graphs remain the other pole: relational wins/failures for long trusted deployments, not a file format you zip and move.

**Heat.** 5. Updated 2026-09-02.

Sources: calpaterson.com/memoryfields.html; calpaterson/memoryfield-spec; calpaterson/memoryfield-tool; calpaterson/memoryfield-skill; HN 49508317; Graft trailhq/Graft; IBM VLDB structure-boundary; MNIST-PRO 2608.31022; EXG 2605.17721.

Publish angle: 6h lab — agent-written pages vs entity graph vs schema-rich graph on one corpus. Count tool calls to assemble context. Delete the ontology if the walk loses.
