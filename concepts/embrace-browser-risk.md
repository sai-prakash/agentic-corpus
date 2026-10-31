# EMBRACE: Embedded Browser Risk in Agent Tools

**Slug:** embrace-browser-risk  
**Heat:** 4  
**Updated:** 2026-10-31

Embedded browsers inside AI coding assistants break standard browser threat models, creating new trust boundaries for agent harnesses.

## Triple / contrast
The agent’s built-in browser is not a normal browser.  
Enrichments that let the agent drive the browser also let untrusted pages reach the host.

## Sources
- Forever Security blog “EMBRACE” (Gal Weizman, 29 Oct 2026)
- Independent coverage (30 Oct 2026)
- X discussion of the research

## Shipable lab (6 h)
Inventory local agent tools (Cursor, VS Code, Claude Desktop, etc.) for embedded-browser features. Document which ones remain unpatched or expose local-file / code-execution surfaces. Produce a short checklist for safe use (prefer external Chrome + MCP, avoid opening untrusted project HTML in the built-in browser).
