# GitLab Orbit

**Slug:** gitlab-orbit  
**Heat:** 4  
**Updated:** 2026-11-03

Live queryable context graph of the software lifecycle (code, merge requests, pipelines, vulnerabilities, ownership) served to agents over MCP or CLI. Continuously updated; permissions enforced at query time.

## Triple / contrast
One structured graph query with namespace permissions is not multi-API crawling across endpoints or document-level RAG over source files.  
The graph is the slice; the harness decides when to call it.

## Sources
- GitLab blog "GitLab Orbit is GA" (29 Oct 2026)
- docs.gitlab.com/orbit and MCP tools
- gitlabhq/orbit-knowledge-graph

## Shipable lab (6 h)
Stand up a local Orbit or mock graph with a few projects, MRs, and ownership edges. Connect an MCP client. Run a multi-hop question ("which recent changes to the failing component reached production?") with and without the graph. Count tokens, tool calls, and retry rounds.
