# Memory graphs

**Definition.** Experience stored as a traversable graph (entities, episodes, relations, outcomes) so a later query can recover complementary evidence that cosine similarity drops.

**Contrast.** A memory graph is not a second knowledge graph and not the prompt. Knowledge graph holds accepted assertions. Memory graph holds observations and traces. Context graph is the budgeted slice assembled *now*. GraphMemix: that slice is an evidence forest under a max-K budget, not an offline summary. LivingRAG: write verified graph signals and reasoning summaries back so the next related query does not start from scratch. WikiSkill: the wiki is the compiled layer between raw traces and skills — not a third product, a write-path. Parametric KG memory (2608.25489): LoRA-per-entity stores facts at zero query tokens, but similarity cannot pick the right adapter. A store you cannot address is a diary.

**Heat.** 5. Updated 2026-08-30.

Sources: WikiSkill 2608.27454; GraphMemix 2608.26983 + ligeng0197/graphmemix; LivingRAG 2608.25960; Recuris 2608.24876; parametric KG 2608.25489; graph-memory survey 2602.05665; Vasiliev three-graph split.

Publish angle: 6h lab — freeze the reader, swap top-k dump for a budgeted forest, show coverage vs tokens. Or compile traces into a wiki and forbid the second run from reading traces.
