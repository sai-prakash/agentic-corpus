# Evidence topology

**Definition.** GraphRAG over documents has to recover how text, tables, figures, and captions connect. An entity-relation graph, and a history graph, are different objects.

**Contrast.** An entity graph is not an evidence topology. TopoGraphRAG-Bench (2610.09360, Li et al., submitted 7 Oct, NeurIPS 2026) has 2,024 questions over 201 visually rich documents, three topologies (single-hop, bridge-chain, multi-source synthesis), and counterfactual checks for shortcut, modality, and evidence necessity. Multimodal GraphRAG is strongest overall and still fails when alignment or multi-unit composition is incomplete. The abstract does not print metric values. Code and data: https://richardlrc.github.io/TopoGraphRAG-Bench/. TAGGRAPH (2609.38353, submitted 29 Sep, revised 1 Oct) is the other source: on LongMemEval-S, AdaptiveGraph MRR is 0.844, BM25 0.867, OpenClaw 0.880. Layout can be the missing object. A history graph is not automatically the better retriever.

**Heat.** 4. Updated 2026-10-09.

Sources: 2610.09360 https://arxiv.org/abs/2610.09360; TAGGRAPH 2609.38353 https://arxiv.org/abs/2609.38353.

Publish angle: 30 bridge-chain items whose key hop is a table or figure. Arm A is text-only GraphRAG. Arm B must return the layout edge. If Arm B does not beat Arm A on topology recovery, the bench is not changing the store.
