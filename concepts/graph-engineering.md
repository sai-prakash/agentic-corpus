# Graph engineering

**Definition.** Explicit evolving graphs of tasks, agents, and system state. Also used sloppily for knowledge-graph memory. Keep knowledge graph vs control graph vs context graph apart.

**Contrast.** Graph engineering is not "add a KG to RAG." The survey (2608.21156) is system intelligence: organize work, coordinate heterogeneous agents, maintain evolving execution state. Year of the Graph (31 Aug): GraphRAG sits on the retrieval path; graph memory organizes what agents know and have done; a GNN takes the graph as native input. IBM VLDB: the structure-boundary question is how much of that graph to materialize before retrieval versus leave to traversal and the reader. Extra schema that the retriever never walks is inventory. DNative-Twin (2609.03787): a committed decision is a typed trajectory — observed state, path, authority — replayed under declared conditions. Graph structure localizes a represented change. It cannot decide the consequence of an unobserved tool state until replay-contract state and verification evidence are attached (unresolved-divergence recall 0 → 0.667 → 1.0 on 300 injected instances). That is a control graph with a gate, not a retrieval graph.

**Heat.** 5. Updated 2026-09-04.

Sources: arXiv 2608.21156 v2 (26 Aug); IBM VLDB structure-boundary (31 Aug); Year of the Graph 2094370392282464493; first-party lab sai-prakash/graph-engineering-lab; walkinglabs lecture-14; SelfGraphRAG 2608.25123; LivingRAG 2608.25960; Graft trailhq/Graft; DNative-Twin 2609.03787.

Publish angle: the survey is the citation; the lab is the proof. Ignore "95% of developers use graph engineering" wraps. A decision graph that cannot replay tool state is a drawing.
