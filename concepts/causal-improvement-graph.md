# Causal improvement graph

**Definition.** Harness search keeps an explicit graph of what was observed, why it might be so, what was tried, and what the eval returned. The next proposer reads those edges.

**Contrast.** A proposer prompt is not an improvement state. CIG (2610.05039, Junjie Zhang and coauthors, NTU and Tongyi Lab, submitted 4 Oct) grows Evidence, Hypothesis, Intervention, and Outcome nodes so local proposers do not reconstruct experimental logic from raw history. The abstract says the graph finds stronger harnesses than prior meta-harness baselines and survives solver and proposer swaps. It does not print the deltas. The second source in the window is Harness Learning (2609.35738), the proposer-centric loop this graph externalizes. Ansatz (2610.02945) is the sibling that stores counterexamples for re-proving; CIG stores the intervention. A raw history dump that the proposer must re-summarize each round is the falsifier.

**Heat.** 4. Updated 2026-10-07.

Sources: CIG 2610.05039; Harness Learning 2609.35738; Ansatz 2610.02945.

Publish angle: freeze the solver. Arm A appends attempt logs to the proposer. Arm B admits only Evidence–Hypothesis–Intervention–Outcome edges. Report whether the next edit repeats a failed intervention.
