# Skill memory

**Definition.** Procedural memory as invocable units selected by current working state, not by dumping every skill file into the prompt.

**Contrast.** A skill is not a prompt and not the full trajectory. Recuris: working memory picks from experiential memory. HyperSkill: a trajectory is a hyperedge over subtasks and skills. Graph-of-Skills retrieves a dependency-complete bundle. CaSKG calibrates the *edges* with counterfactual probes before that retrieval. WikiSkill splits the store three ways — raw traces, a persistent wiki of consolidated lessons, executable skills that must build on the wiki. Skills transfer across model families; drop the wiki and evolution stalls. SkillFeed (2608.28241): task-only routing conflates relevance with suitability — hold the task, change the user profile, and the reference skill changes (+35.1 where the profile flips the answer; 75.1% top-1 overall). GCPC (2608.27487): a skill can move the trajectory without moving pass@1; partial credit is the sensor.

**Heat.** 5. Updated 2026-09-01.

Sources: SkillFeed 2608.28241; GCPC 2608.27487; WikiSkill 2608.27454; Recuris 2608.24876; HyperSkill 2608.16114; Graph-of-Skills 2604.05333; CaSKG 2608.25500; THE DECODER on WikiSkill (29 Aug).

Publish angle: three files. Traces append-only. Wiki is the only thing a skill may cite. Route on task *and* profile. Never load the raw trace on the second run.
