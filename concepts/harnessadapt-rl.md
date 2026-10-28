# HarnessAdapt-RL

**Definition.** Method that jointly trains a coding agent policy and adapts its evaluation harness during RL: mechanism-level skills for repair strategies plus evolving tools and runtime hooks, kept only when they improve pass rate or trainable rate without degrading the other.

**Contrast.** The trained artifact is a model-harness pair, not just weights. Skills can be removed at deployment while tools/hooks often cannot; freezing the harness during RL leaves interaction problems unaddressed.

**Evidence.** Tang, Tao, Guo, Bao (arXiv:2610.28069, submitted 20 Oct 2026; code: lingxiaotang/HarnessAdapt-RL): 9B base model gains +9.8 / +12.6 / +6.4 pp over GRPO on SWE-bench Verified / Multilingual / Pro. Mechanism-level skill gains persist after removal; removing evolved tools and hooks costs up to 7.7 pp. Repo and X discussion present.

**Heat.** 4. Updated 2026-10-28.

Sources: https://arxiv.org/abs/2610.28069 ; https://github.com/lingxiaotang/HarnessAdapt-RL.

Publish angle: during a short GRPO or rejection-sampling run on a coding harness, let a frozen teacher propose mechanism-level skill edits and tool/hook changes, keep only those that improve a held-out pass rate, and measure the resulting model-harness pair versus frozen-harness training.
