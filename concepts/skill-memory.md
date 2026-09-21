# Skill memory

**Definition.** Procedural memory as invocable units selected by current working state, not by dumping every skill file into the prompt.

**Contrast.** A skill is not a prompt and not the full trajectory. Thariq (18 Sep): Claude Code 2.1.277 loads AGENTS.md when CLAUDE.md is missing; the hook is a built-in harness mod. Shared instruction files are still playbooks; they are not skills until a with-vs-without gate exists. SkillAA (2609.20455): a failed rollout is not an edit address. Applicability, execution, and composition sit in one skill graph; contrast of success vs failure routes the patch to a graph object; Local and Big Gates screen before commit. gpt-5.6-sol: SearchQA 81.5 / LiveMath 66.7 / DocVQA 91.2, highest mean in every main setting. Designer-RSI (2609.22086): a documentation pack is not a living bank. Frozen frontier model over 230+ design tools; widen (new uncovered subtasks) and deepen (revise against own successes and failures) behind a matched replay gate that refuses patches that regress observed successes. 1,406 briefs / 1,869 trajectories / no labels / no weight updates: 76 → 139 skills; GenEval2 execution on Claude-Sonnet-4 72.7% → 99.3%; held-out widen 49.4% vs deepen 48.6% vs both 58.5% (p = 0.025). Pair with Skill Issue / SkillsBench / SkillSeam / Osmani-Cherny: a fallback instruction file without a held-out gate is furniture; a skill graph without a Local/Big gate is the same furniture with edges; widen without deepen is half a bank.

**Heat.** 5. Updated 2026-09-21.

Sources: Designer-RSI 2609.22086; SkillAA 2609.20455; Thariq AGENTS.md x.com/trq212/status/2101009392611278961 + mods x.com/trq212/status/2101009393731223817; SkillSeam 2609.13321; Skill Issue 2609.12742; SkillsBench 2602.12670; Addy Osmani x.com/addyosmani/status/2098662421644853433 + Boris Cherny x.com/bcherny/status/2098217573276131577.

Publish angle: if AGENTS.md is the fallback when CLAUDE.md is missing, treat that as a harness mod and still gate the file. If a skill graph can rewrite itself, the Local gate is the skill. If you only widen the bank, measure deepen on the same held-out briefs.
