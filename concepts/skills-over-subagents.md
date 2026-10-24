# Skills over subagents

**Definition.** Prefer a single agent loop that progressively discloses context and tools via Agent Skills (and tool search) over a router + specialist subagents for most tasks. Skills package procedures, rules, and judgments; tools handle actions, data reads, and permissions. Domain teams own skills; a central team owns the system prompt and shared end-to-end evals.

**Contrast.** A single agent loop with progressive skill disclosure is not a multi-agent subagent architecture. Subagents are not the default for every specialist or org-chart mirror. Progressive disclosure prevents context bloat without forcing a handoff chain.

**Evidence.** Anthropic applied-AI findings (22 Oct 2026): across several enterprise deployments a single agent with skills frequently outperformed both the one-prompt design and the subagent design on quality, often at lower cost and latency. One customer saw roughly 2× faster runtime after folding. Progressive disclosure cut Claude Code’s system prompt >80% on advanced models. Subagents retained for: measurable context-bloat degradation, parallel work that needs disposable fresh contexts, or tool-selection problems caused by conflicting instructions. Companion open-source reference kit (not maintained, no contributions): https://github.com/anthropics/single-agent-loop-kit — measures before/after, merges co-running subagents, folds one at a time into skills + tools, keeps only what the eval supports. Builds on the Agent Skills standard (donated to AAIF 22 Oct).

**Heat.** 5. Updated 2026-10-24.

Sources: https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop; https://github.com/anthropics/single-agent-loop-kit; https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation; x.com/Xudong07452910/status/2113800139005460534.

Publish angle: clone the kit, run the support-desk example, fold one of the six subagents into a skill, score the shared eval, and report the quality/latency delta. Or write a SKILL.md that replaces a specialist prompt you currently hand off, load it only on trigger, and compare tokens + task success against the subagent version.
