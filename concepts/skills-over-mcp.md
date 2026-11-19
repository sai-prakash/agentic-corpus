# Skills over MCP

Serving agent skills (SKILL.md + supporting files) as MCP resources (and via the Skills extension) so every connected agent reads the same canonical copy and receives updates the moment the server is redeployed.

**Contrast:** a local skills folder that drifts per laptop is not a remote catalog served next to the tools it describes.

**Sources (last 14 days):**
- VS Code blog (18 Nov 2026): VS Code 1.147+ can load skills straight from an MCP server for GitHub Copilot.
- FastMCP 4.2 SkillCatalogProvider and documentation (mid-November 2026) plus SEP-2640 Skills extension; Pamela Fox announcement posts.

**Shippable lab:** stand up a FastMCP server that exposes one skill (e.g., “release-notes”) beside two tools; connect it from VS Code or another client that supports the extension and verify that an agent can list and load the skill without a local install, then push an update and confirm the next session sees it.

Heat 4. Updated 2026-11-19.
