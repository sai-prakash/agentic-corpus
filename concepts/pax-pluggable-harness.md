# Pax pluggable harness

Everything in the coding-agent runtime is a plugin.

Pydantic AI Harness beta (25 Nov 2026) ships Pax, a terminal coding agent in which the coding agent itself, sandboxes, MCP servers, Logfire tracing, and any user agent are swappable plugins. `pax --agent my_module:agent` runs an arbitrary Pydantic AI agent inside the same terminal, session, and worktree machinery.

In single Harness-Bench SWE81 runs Pax posted the highest average score among the four harnesses that completed all eight models.

Contrast: a fixed monolithic harness is not a capability-plugin surface that lets a team swap only the pieces they need.

Sources: pydantic.dev/articles/pax-harness-beta, independent X posts on the plugin model.

Heat: 4.

Lab: wrap a minimal coding agent as a Pax plugin (or run `uvx pydantic-ai-pax`) and swap the sandbox and MCP set without changing the agent loop.
