# Experience-trace harness

**Definition.** With the embodied model frozen, the harness is the object that revisions. A revision is allowed only when episode-level gains and losses support where the new behaviour applies.

**Contrast.** A recovery prompt is not a harness revision. EMHO (2610.08432, Lee / Kim / Jeong / Kam / Kim / Lee, submitted 6 Oct) rewrites monitoring, vision-tool use, grounding, and failure response from execution traces and prior harness history. EMHO-Merge uses episode-level gains and losses so one shared harness can cover several subtasks. On EmbodiedBench it improves navigation and manipulation success for Qwen 9B and 27B. The abstract does not print the deltas. Causal Improvement Graph (2610.05039) is the other source: it externalizes Evidence, Hypothesis, Intervention, and Outcome so a proposer reads relations. EMHO reads traces and edits the harness. A graph of what was tried is not the same object as the harness that runs.

**Heat.** 4. Updated 2026-10-08.

Sources: 2610.08432 https://arxiv.org/abs/2610.08432; CIG 2610.05039 https://arxiv.org/abs/2610.05039.

Publish angle: freeze the model. Arm A appends a recovery prompt after a failed episode. Arm B may change only the progress check, the vision-tool rule, or the failure branch, and must cite the episode that justified it. Report success on a held-out subtask the merge did not see.
