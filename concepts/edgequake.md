# EdgeQuake

Rust implementation of LightRAG-style GraphRAG that stores entities, relationships and vectors in a single PostgreSQL instance and exposes multi-hop retrieval plus memory operations through MCP.

**Contrast:** a separate vector database plus a separate graph database is not one Postgres store (pgvector + Apache AGE) that an agent can ingest into and query for relationship-spanning answers with sources via a standard MCP endpoint.

**Sources (last 14 days):**
- raphaelmansuy/edgequake (Apache-2.0) with MCP server, recent release notes and reviews (~9–11 Nov 2026) highlighting the Postgres-only architecture and agent memory use.
- Independent write-ups (Wavect and others) confirming the LightRAG lineage, MCP workflow, and deployment simplicity for teams already on PostgreSQL.

**Shippable lab:** spin up the Docker quickstart, ingest a small multi-document set containing cross-document relationships, connect an MCP client, and run a multi-hop query that requires walking relationships rather than pure vector similarity. Compare with a pure-vector baseline on the same questions.

Heat 4. Updated 2026-11-15.