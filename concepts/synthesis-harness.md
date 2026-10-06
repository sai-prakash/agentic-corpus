# Synthesis harness

**Definition.** The procedure that builds the next training task is itself revised from solver failures. Weights and the verification criteria stay fixed. The harness of construction moves.

**Contrast.** Task recursion is not harness recursion. Task-harness co-evolution (2610.03548) converts intermediate solver failures into reusable skills during generation, then revises skills, prompts, and workflows after a batch only when the candidate makes harder valid tasks inside a bounded cost increase. Mean solver accuracy falls from 100.0% to 54.8% over fourteen rounds across mathematics, coding, and science. A 27B student fine-tuned on 10K synthesized mathematics examples reaches 62.5% mean-16 on APEX. MOSIB (2609.37834) is the solving-harness sibling: it branches the agent harness, not the data-construction harness. A fixed construction harness that only reseeds tasks is the falsifier if hardness does not rise.

**Heat.** 4. Updated 2026-10-06.

Sources: Task-harness co-evolution 2610.03548; MOSIB 2609.37834.

Publish angle: freeze the solver and the verifier. Arm A: reseed tasks, leave the construction harness fixed. Arm B: adopt a harness edit only if the next batch is harder inside a cost cap. Report solver accuracy on the new batch, not on the old one.
