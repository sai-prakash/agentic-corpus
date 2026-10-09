# Skill scenario gate

**Definition.** A skill enters the library only after a verdict on a task that is skill-relevant and not the episode it was distilled from. A fitness label during training is a different gate.

**Contrast.** A distilled skill is not a reusable skill. SkillSandbox (2610.10088, Kim et al., submitted 7 Oct) has a Proposer, a Builder, and a Verifier: the Verifier compares runs with and without the skill and issues Keep or Reject on executability, utility, and efficiency. On ALFWorld and WebShop with three models it is the strongest downstream result; the abstract does not print the deltas. SkillForge (2610.09832, Ge et al., submitted 7 Oct) is the other source: skills move trial, active, stable, retired, with a pre-RL retirement pass and mutation during RL, up to 7.8% relative improvement over the strongest baseline, and a 5k+ SkillFurnace release. Sandbox gates entry on a synthesized scenario. Forge retires during training. Two gates, one library.

**Heat.** 4. Updated 2026-10-09.

Sources: 2610.10088 https://arxiv.org/abs/2610.10088; 2610.09832 https://arxiv.org/abs/2610.09832.

Publish angle: take 20 distilled skills. Arm A Keeps on the source episode. Arm B Keeps only if SkillSandbox's with/without gap is positive on a varied scenario. Report downstream success and library size. If Arm B does not beat Arm A, the scenario is not a gate.
