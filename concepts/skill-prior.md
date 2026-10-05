# Skill prior

**Definition.** A skill prior ranks a skill before it runs, from what the skill claims to add and what it constrains. It is a selection signal, not an execution score.

**Contrast.** A pre-execution skill score is not an execution. MCRI (2610.01506) scores skills on information gain and behavioral constraint. On 63,812 OpenClaw hub skills and 58,275 executions, top-1 selection advances 17.7, 22.8, and 19.6 percentile points in downstream rank on BigCodeBench, BFCL-Fundamental, and Mind2Web versus the strongest baseline on each. Process-level evaluation (2610.01833) is the falsifier after selection: 92.6% of numerically passing runs still hid a trajectory deviation. Popularity is the cheap baseline the prior has to beat, not the prior itself.

**Heat.** 4. Updated 2026-10-05.

Sources: MCRI 2610.01506; Continuous Process-Level Evaluation 2610.01833.

Publish angle: rank 20 skills by description length, by stars, and by a four-axis prior. Execute the top-1 of each. Report the rank gap, then the trajectory-fail rate of the winner.
