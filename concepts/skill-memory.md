# Skill memory

**Definition.** Procedural memory as invocable units selected by current working state, not by dumping every skill file into the prompt.

**Contrast.** A skill is not a prompt and not the full trajectory. Recuris: working memory picks from experiential memory. HyperSkill: a trajectory is a hyperedge over subtasks and skills. Graph-of-Skills retrieves a dependency-complete bundle. CaSKG calibrates the *edges* with counterfactual probes before that retrieval. WikiSkill splits the store three ways — raw traces, a persistent wiki of consolidated lessons, executable skills that must build on the wiki. Skills transfer across model families; drop the wiki and evolution stalls. SkillFeed (2608.28241): task-only routing conflates relevance with suitability — hold the task, change the user profile, and the reference skill changes (+35.1 where the profile flips the answer; 75.1% top-1 overall). GCPC (2608.27487): a skill can move the trajectory without moving pass@1; partial credit is the sensor. Warp (Anthropic reprint 26 Aug, Warp docs 1 Sep): two files, not one — an inner skill does the job; an outer skill reads human corrections and opens a PR against the inner `SKILL.md`. Principles beat rule lists; rules overfit the last ticket. The merge is the gate. MNIST-PRO: a skill-shaped persistent write of stitching procedures did not raise accuracy over the episode-local harness.

**Heat.** 5. Updated 2026-09-02.

Sources: SkillFeed 2608.28241; GCPC 2608.27487; WikiSkill 2608.27454; Recuris 2608.24876; HyperSkill 2608.16114; Graph-of-Skills 2604.05333; CaSKG 2608.25500; THE DECODER on WikiSkill (29 Aug); Anthropic/Warp self-improving skills; Warp docs self-improving agent; MNIST-PRO 2608.31022.

Publish angle: three files. Traces append-only. Wiki is the only thing a skill may cite. Route on task *and* profile. Outer loop proposes a skill diff; a human or eval merges it. Never load the raw trace on the second run.
