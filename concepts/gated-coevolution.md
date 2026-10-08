# Gated co-evolution

**Definition.** A co-evolution step is either a model update or a harness edit, and a verifier accepts it only against a development-set criterion. The two updates are not one gradient.

**Contrast.** A model update is not a harness edit. VERA (2610.05923, Liu / Pan / Jiang and coauthors, NVIDIA and academic labs, submitted 5 Oct) admits a sandbox only after an agent-written rubric and executable checks pass a judge, then alternates rubric-reward training and harness-skill edits. A 9B co-evolved agent beats the strongest baseline by 10.3 and 13.0 points in the two domains; at 27B the scores are 71.6 on AutoCoWorkBench and 80.7 on AutoMedBench. The abstract does not name the baselines. The 7 Oct recap at https://x.com/AIWith_Marcus/status/2107860198505283765 adds gate thresholds and a frontier-model comparison that are not in the abstract. VeriFine (2610.08761) is the other source: it co-evolves policy and judge, with humans on disagreements. VERA gates model and harness; VeriFine gates policy and judge.

**Heat.** 4. Updated 2026-10-08.

Sources: 2610.05923 https://arxiv.org/abs/2610.05923; recap https://x.com/AIWith_Marcus/status/2107860198505283765; VeriFine 2610.08761 https://arxiv.org/abs/2610.08761.

Publish angle: one frozen task bank. Arm A updates weights only. Arm B may edit a harness skill only if a development check passes, and may not take the credit for an Arm A gain. Falsifier: if the skill edit does not move the development set with weights frozen, it is not a harness result.
