# Retrieval positivity

**Definition.** A memory's utility is identified only if retrieval can expose it. Store-level interventions on a memory the retriever never shows are the same outcome, so the effect is not a retention signal.

**Contrast.** A store-level utility estimate is not an identified utility. Causal Memory Policy (2610.02070 + anonymous.4open.science/r/cmp-release-D0C3) reserves context slots for memories sampled with known propensities and estimates utility by self-normalized inverse propensity weighting. Identification fails for 54% of required memories on LongMemEval and 67% on LoCoMo, including in a deployed memory system. Required vs non-required discrimination moves from 0.54 to 0.66 AUC. Per-query utility still reaches 0.78 AUC only on the query it was estimated for, so an identified effect is not yet a retention policy. TRACE (2609.33517) is the admission contrast: a retrieved memory can be relevant and still inadmissible after the shared state moved. One failure is never shown; the other is shown and stale.

**Heat.** 4. Updated 2026-10-03.

Sources: Causal Memory Policy 2610.02070 + anonymous.4open.science/r/cmp-release-D0C3; TRACE 2609.33517.

Publish angle: log memories required by the gold answer that the retriever never returned. Do not score them as low-utility. Intervene on retrieval, or refuse the retention decision.
