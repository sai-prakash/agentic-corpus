# Skill as subagent

**Definition.** Invoking a skill package by spawning a fresh-context worker that must honor an input-output contract, instead of pasting the skill instructions into the parent window.

**Contrast.** Loading `SKILL.md` is not invoking a skill. Subagents vs Agent Skills (2609.09233): SkillsBench 64-task subset under OpenHands. Synthesized packages that carry a contract plus the procedure that fulfills it favor subagent execution; curated packages without contracts favor or match in-context load. The subagent gap is largest on bandwidth-limited models. GPT-5.3 Codex and Kimi K2.6 cut peak context on >80% of tasks and pay in coordination tokens. Pair with Visual Studio Agent Skills: Copilot's shipping default is the in-context load when the task matches. Pair with Warp inner/outer and MASkills: those gate *what the file says*; this gates *how the file runs*. Pair with EvoHarnessBench's agent axis: adding a specialist is a catalog change; calling the same package as a subagent is a context-boundary change. A playbook dumped into a long parent trace is still one context window.

**Heat.** 4. Updated 2026-09-10.

Sources: Subagents vs Agent Skills 2609.09233; Visual Studio Agent Skills; MASkills 2609.02094; EvoHarnessBench 2609.04280; Warp self-improving skills.

Publish angle: 6h lab — one skill package, two invocation arms. Arm A concatenates SKILL.md into the parent. Arm B starts a worker with only the contract and the package files. Same tickets, same model. Report parent peak tokens, worker tokens, and pass rate. Do not declare the playbook reusable until both arms exist.
