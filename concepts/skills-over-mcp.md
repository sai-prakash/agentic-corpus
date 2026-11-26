# Skills over MCP

Serving agent skills (SKILL.md + supporting files) as MCP resources (and via the official Skills extension) so every connected agent reads the same canonical copy and receives updates the moment the server is redeployed. Now in public beta in Claude and Claude Code.

**Contrast:** a local skills folder that drifts per laptop is not a remote catalog served next to the tools it describes, with digest verification before loading.

**Sources (last 14 days):**
- Anthropic announcement (24 Nov 2026): Skills over MCP public beta in Claude/Claude Code; Tasks and Elicitation GA; partners Shopify, HubSpot, Atlassian.
- Official MCP Skills extension (io.modelcontextprotocol/skills, SEP-2640 Final) and docs at modelcontextprotocol.io/extensions/skills/overview.
- High-engagement @ClaudeDevs post (24 Nov) and independent coverage (VentureBeat, etc.).
- Prior: VS Code 1.147+ loading skills from MCP; FastMCP SkillCatalogProvider.

**Shippable lab:** Stand up an MCP server that declares the skills extension and exposes one SKILL.md (e.g., a multi-step workflow) beside its tools. Connect from Claude or Claude Code (or another client that supports the extension), verify on-demand loading and digest check, then update the skill on the server and confirm the next session sees the new version without reinstall.

Heat 5. Updated 2026-11-26.
