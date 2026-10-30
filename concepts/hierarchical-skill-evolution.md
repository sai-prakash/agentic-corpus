# Hierarchical Skill Evolution

**Definition.** Progressive distillation of procedural skills from coding trajectories through hierarchical evidence aggregation: task-level traces → repository-specific skill candidates → cross-repository transferable skills, driven by an external writer-evaluator loop that leaves the underlying coding model frozen.

**Contrast.** Hierarchical aggregation produces skills that transfer across repositories, models and harnesses; it is not a flat collection of task-specific notes.

**Evidence.** Gao et al., arXiv:2610.35616 (submitted 26 Oct 2026; code github.com/jungao1106/SKILL_EVO). Ten skills evolved solely from SWE-Gym trajectories improved pass rates on SWE-bench Verified and DeepSWE across GLM-5.2 (run on both Pi and Claude Code harnesses), GPT-5.5 and Opus 4.8 with Pi. Heat 4. Updated 2026-10-30.

Sources: https://arxiv.org/abs/2610.35616, https://github.com/jungao1106/SKILL_EVO.

Publish angle: run a small coding-agent trajectory set through a hierarchical aggregation loop, freeze the resulting skills, and measure transfer to a held-out repository or different harness.
