# Schema memory

**Definition.** Long conversation memory is a set of immutable episodes plus versioned schemas. A schema changes only by a minimum-energy transition: reinforce, supersede, split, or create.

**Contrast.** Continual summarization is not a schema transition. MINDSET (2610.08586, Dutta / Tummala / Vanga / Pavani, submitted 6 Oct) balances distortion, contradiction, historical damage, fragmentation, and internal inconsistency, and uses hysteresis so one contradiction does not rewrite a stable schema. On 850 questions (700 LoCoMo + 150 MemoryAgentBench) it records the highest observed LoCoMo answer F1 and improves Recall@8, MRR, and nDCG@8 over LightMem (p<0.01 after Holm). The abstract does not print the F1. Memory width vs depth (2610.08300) is the other source: raising width from 1K to 4K tokens gains 10.11–17.98 accuracy points, and depth has no monotonic gain. A deeper summary is the failure mode both papers measure from different sides.

**Heat.** 4. Updated 2026-10-08.

Sources: 2610.08586 https://arxiv.org/abs/2610.08586; 2610.08300 https://arxiv.org/abs/2610.08300.

Publish angle: freeze the episode log. Arm A rewrites a running summary. Arm B may only reinforce, supersede, split, or create a schema, and must keep the prior schema addressable. Report answer F1 and a contradiction replay. If Arm B cannot name which schema changed, it summarized.
