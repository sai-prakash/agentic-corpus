# TASK Memory

Text note + activation steering + knowledge edit to stop use-time memory hallucinations.

Agents often retrieve the correct external memory note yet ignore it, apply it to the wrong entity, or confuse an old version with a new one. These failures arise from conflict between parametric knowledge and the note in context.

TASK stores three carriers that share one in-model address: the text content, a removable knowledge edit whose subject key supplies the address, and a pair of content-free steering vectors that decide query-by-query whether the model adopts the memory or keeps its own answer.

On frozen open models it reduces memory-ignoring to ≤1.5% and neighbour misuse from 39.2% to 7.5%.

Contrast: pure text-in-context memory is not the same as an addressable, steerable memory that can override or restrain parametric knowledge.

Sources: arXiv:2611.34762, independent X discussion of use-time failures.

Heat: 4.

Lab: for an open model, store a counterfactual fact as TASK (text + edit + steering) and measure ignore/misapply rates against a plain text-note baseline.
