# Skills over MCP

**Definition.** Serve Agent Skills (`SKILL.md` + supporting files) as MCP resources under `skill://`, listed and fetched on demand. Tools stay tools. Skills stay playbooks. One connection, two primitives.

**Contrast.** A tool schema is not a skill. Boot-loading every `SKILL.md` is not discovery. SEP-2640 (merged 13 Sep 2026, modelcontextprotocol#2640, identifier `io.modelcontextprotocol/skills`): `skills/list` returns a complete per-skill manifest (verbatim frontmatter + per-file resources with digests); `skills/get` returns any skill by URI, including ones absent from a partial listing; `resources/directory/read` is optional behind `directoryRead`. Hugging Face `hf-mcp-server` already implements the v1 wire contract. Cua Driver v0.28 serves desktop skills over the same stdio as the tools. Daniel San (14 Sep) is the public explanation, not the spec. LiteLLM MCP grants still apply: a missing allowlist is every server, and a skill that can `/add-mcp` is a grant surface. CapScope: ambient authority is a harness default; listing a skill does not pin who may run the tools it names. SkillsBench: loading the file can still drop a task the default solved.

**Heat.** 5. Updated 2026-09-15.

Sources: SEP-2640 github.com/modelcontextprotocol/modelcontextprotocol/pull/2640; Skills Over MCP WG github.com/modelcontextprotocol/ext-skills; Daniel San x.com/dani_avila7/status/2099325795822956575; Cua v0.28 x.com/trycua/status/2099548485062172994 + github.com/trycua/cua; Hugging Face hf-mcp-server SEP-2640 alignment; LiteLLM MCP grants docs.litellm.ai/docs/mcp_control; SkillsBench 2602.12670; CapScope 2609.08371.

Publish angle: one MCP server, two listings. `tools/list` is the hands. `skills/list` is the playbook index. Fetch one skill URI per task. Pin grants outside the server. Score with-vs-without the fetched file on a real reverted PR, not on a toy the agent already passes.
