# Agent Skills standard

**Definition.** Agent Skills is an open standard for packaging specialized knowledge and workflows as a folder containing a `SKILL.md` (YAML frontmatter + Markdown instructions) plus optional scripts, references, and assets. Agents discover via progressive disclosure (name + description at startup; full load on relevance) and reuse across compatible runtimes.

**Contrast.** A vendor-neutral skill standard under neutral governance is not a captive product feature or a tool schema. Progressive disclosure is not boot-loading every SKILL.md into context. Skills are playbooks; MCP remains access/hands.

**Evidence.** Donated 22 Oct 2026 by Anthropic to the Agentic AI Foundation (AAIF, Linux Foundation), the same home as MCP. >70 platforms integrated (ChatGPT, Cursor, GitHub Copilot, VS Code, etc.). ~1 million skills published, nearly 280 million installs. GitHub org, name/logo, and agentskills.io transferred. Maintainers as individuals from Anthropic, Google, OpenAI, and others; lead maintainers David Soria Parra and Mahesh Murag. Spec remains Apache-2.0 / CC BY 4.0; usable without joining AAIF.

**Heat.** 5. Updated 2026-10-23.

Sources: https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation; https://aaif.io/blog/agent-skills-sharing-team-expertise-across-ai-agents; https://github.com/agentskills/agentskills; x.com/ClaudeDevs/status/2113328526413996100.

Publish angle: write one SKILL.md that teaches a narrow procedure (e.g. a checklist that fires only on a specific trigger). Load it in two different agents (Claude Code and Cursor or VS Code). Measure tokens at discovery vs full load. Confirm it works without joining AAIF. Pair with skills-over-mcp if serving the same folder as MCP resources under skill://.
