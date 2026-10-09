# Hybrid graph memory

**Definition.** Personalized agent memory can be three typed graphs plus a working-memory trajectory, routed by a small classifier, rather than one vector or one versioned schema.

**Contrast.** A single vector is not a typed graph. HGP (2610.10071, Zhou et al., submitted 7 Oct) routes with a lightweight classifier into episodic, semantic, and procedural graphs (event graphs, knowledge graphs, rule trees) and keeps working memory as a state trajectory. On PAL-Set solution selection the S-score is 35.58, nearly 7 points above the strongest baseline. The second benchmark is not named in the abstract. Code: https://github.com/Ouan6/HGP-.git. MINDSET (2610.08586) is the other source in the window: episodes stay immutable and a versioned schema changes by reinforce, supersede, split, or create. HGP types the store. MINDSET versions the schema. Pair, do not merge.

**Heat.** 4. Updated 2026-10-09.

Sources: 2610.10071 https://arxiv.org/abs/2610.10071; MINDSET 2610.08586 https://arxiv.org/abs/2610.08586.

Publish angle: same traces, three stores (flat vector, HGP's three graphs, a single schema version). Score routing accuracy and answer quality. If the flat vector matches HGP on PAL-Set, the type split is not earning the 7 points.
