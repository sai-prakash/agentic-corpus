# Graph engineering

**Definition.** Explicit evolving graphs of tasks, agents, and system state. Also used sloppily for knowledge-graph memory. Keep knowledge graph vs control graph vs context graph apart.

**Contrast.** Graph engineering is not "add a KG to RAG." The survey (2608.21156) is system intelligence: organize work, coordinate heterogeneous agents, maintain evolving execution state. Year of the Graph (31 Aug): GraphRAG sits on the retrieval path; graph memory organizes what agents know and have done; a GNN takes the graph as native input. IBM VLDB: the structure-boundary question is how much of that graph to materialize before retrieval versus leave to traversal and the reader. Extra schema that the retriever never walks is inventory.

**Heat.** 5. Updated 2026-09-01.

Sources: arXiv 2608.21156 v2 (26 Aug); IBM VLDB structure-boundary (31 Aug); Year of the Graph 2094370392282464493; first-party lab sai-prakash/graph-engineering-lab; walkinglabs lecture-14; SelfGraphRAG 2608.25123; LivingRAG 2608.25960; Graft trailhq/Graft.

Publish angle: the survey is the citation; the lab is the proof. Ignore "95% of developers use graph engineering" wraps.
