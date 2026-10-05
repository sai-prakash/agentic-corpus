# Harness learning

**Definition.** A proposer model revises a frozen solver's harness from execution feedback. The revision is the adaptation. No parameter update happens at test time.

**Contrast.** A weight update is not a harness revision. Harness Learning (2609.35738, CMU / JHU / Stanford) trains the proposer with RL on the task score of revised harnesses. On 21 unseen Reasoning Gym families, single-step held-out score rises from 0.32 to 0.62, and the 4B proposer beats its 35B teacher on average (0.62 vs 0.56); the teacher wins if an oracle keeps its best of eight. ActiveSaddler (2610.00906) is the curriculum half: the optimizer stays fixed and the next scenario moves. Harness Annealing (2610.01235) is the internalization half: control is trained out of the cage and into the weights. This paper leaves the weights alone and edits the cage.

**Heat.** 5. Updated 2026-10-05.

Sources: Harness Learning 2609.35738; ActiveSaddler 2610.00906; Harness Annealing 2610.01235; recap https://x.com/saiitoshii/status/2106919271226015773.

Publish angle: freeze the solver. Arm A: an untrained proposer. Arm B: a proposer trained on revision reward. Report held-out score on a family excluded from training, and whether the teacher still wins under best-of-eight.
