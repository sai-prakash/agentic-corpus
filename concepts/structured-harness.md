# Structured harness

**Definition.** A research report is an evolving structured state (outlines + sections + evidence), not a document regenerated from scratch each time new information arrives.

**Contrast.** Incremental update is not from-scratch generation. Chen & Bao (2610.11566, submitted 8 Oct) define Incremental-OEDR and Structured Harness: structured retrieval, a persistent structured evidence pool, and structured generation that selectively revises while preserving valid knowledge. On DeepResearch Bench (open-source and proprietary configs) it reports up to 0.51 higher content-level ROUGE-L F1, 0.63 higher outline-level EM F1, 33% lower tokens, and 61% fewer search calls versus OEDR. Project page: https://ioedr-project.github.io/. Code not yet public. Second source in the window is the project page itself (paper + shipping artifact). Existing harness papers (e.g. context policies, multi-agent search harnesses) optimize the loop; this one structures the output artifact so updates are local.

**Heat.** 4. Updated 2026-10-10.

Sources: 2610.11566 https://arxiv.org/abs/2610.11566; project https://ioedr-project.github.io/.

Publish angle: Take one DeepResearch Bench task. Arm A regenerates the full report on new evidence. Arm B updates only the affected outline nodes and evidence pool. Score continuity (outline EM) and token cost. Falsifier: if selective update loses more than 5 points of content ROUGE versus full regeneration on the same evidence, the structure did not pay for itself on your harness.
