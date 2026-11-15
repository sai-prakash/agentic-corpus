# Logfire harness tracing

Querying coding-harness traces (model calls, tool executions, costs, subagents) through an MCP server so that repeated failures can be distilled into reusable skills and evaluated.

**Contrast:** raw or opaque session logs are not SQL-queryable, cross-harness traces that an agent can read and turn into a skill that measurably raises pass rate on the same scenarios.

**Sources (last 14 days):**
- Pydantic Logfire blog post (13 Nov 2026) on coding harness tracing, cost, skills and evals; example of a skill raising 3/12 to 12/12 passes.
- X post from Pydantic and documentation for the Logfire MCP server (hosted, OAuth or key, SQL over OpenTelemetry traces).

**Shippable lab:** instrument a local coding agent or simple loop with Logfire (or any OTel exporter), run a small suite that has known repeated failures, query the traces via the MCP server (or equivalent SQL), distill one skill or prompt patch, and re-run to measure the improvement.

Heat 4. Updated 2026-11-15.