# Agentic GraphRAG (FalkorDB)

GraphRAG-SDK gives an existing agent (Claude Code, Cursor, LangGraph, pydantic-ai, or custom) a set of bounded tools over a FalkorDB knowledge graph. Evidence returns numbered; citations can be checked; the same agent can also build the graph from a folder. Exposed via an MCP server (graphrag-mcp).

**Contrast:** an agent that plans and answers over documents without receipts is not one that receives numbered, checkable evidence from a graph and can refuse when the graph has no supporting path.

**Sources (last 14 days):**
- FalkorDB blog “Agentic GraphRAG: Your Agent Plans, FalkorDB Keeps It Honest” (updated 17 Nov 2026) describing the architecture, numbered evidence, citation check, and MCP endpoint.
- Shipping repo FalkorDB/GraphRAG-SDK (Apache-style open source, recent activity including agentic retrieval features) and its docs/MCP server.

**Shippable lab:** stand up FalkorDB via Docker, ingest a small folder of markdown/PDF with the SDK, point an MCP client at graphrag-mcp, and run a multi-hop question. Verify that every claim in the answer has a numbered source and that a deliberately unanswerable question triggers abstention or empty evidence.

Heat 4. Updated 2026-11-18.
