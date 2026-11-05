# Harness-S

**Definition.** Train one policy on complementary trajectories from a fixed sibling-harness pool so the learned behaviors transfer back to the original base harness.

**Contrast.** Sibling-rescue transfer into the base-harness policy is not the search for a single universally superior harness, and is not ordinary multi-harness mixture training that always mixes.

Directional Harness Evolution builds specialized siblings along distinct repair directions (locality + complementarity). The pool stays fixed during policy training. Complementary Harness Rescue Training invokes the pool only when the entire base-harness group fails; fresh sibling rollouts replace the failed group for RL. An Adaptive Harness Router (behavior profiles + multi-LLM voting, policy-aware re-anchoring) selects Top-k. On AppWorld, SWE-Gym, and DBBench the resulting policy substantially beats policy-only training when evaluated under the original harness; router reuse at Rank-1 inference adds further gains at equal rollout count. Behavioral analyses show harness-elicited behaviors have transferred.

**Heat.** 4. Paper + shipping repo (3 Nov 2026).

Sources: arXiv:2611.04277; github.com/DeepExperience/Harness-S.

Publish angle: build a tiny sibling pool (two directional edits of a base harness), rescue only on all-failure groups, and measure whether the policy keeps the gains when the siblings are removed.
