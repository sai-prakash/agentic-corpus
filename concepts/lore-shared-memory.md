# Lore Shared Memory (Notion-backed)

**Slug:** lore-shared-memory  
**Heat:** 4  
**Updated:** 2026-11-02

Shared, persistent agent memory stored as structured Notion databases (Projects, Topics, Memories, Entities, Facts). Accessible via MCP tools, CLI, and hooks so any MCP-compatible harness and human editors share the same vault across sessions and people.

## Triple / contrast
Shared multiplayer memory (Notion + MCP) is not per-session local notes or an opaque private vector store.  
Humans and agents read/write the same structured pages; context survives clear, handoff, and model change.

## Sources
- github.com/makenotion/lore (MIT; Notion)
- Notion blog "Building Shared Memory for AI Agents in Notion" + recent X recirculation

## Shipable lab (6 h)
Create a minimal Lore-like vault (or use the real MCP) with two databases. Run two separate agent sessions (or simulated MCP calls) that write a fact and a memory, then have a third session retrieve them. Measure recall accuracy and human editability versus a local JSONL or in-memory baseline.
