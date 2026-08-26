# Daily collector job

Two layers. Do not mix them up.

1. **Programmatic harvest** (`npm run collect`) — public APIs + RSS into `world/inbox.json`.
2. **This Grok job** — X discourse + judgment. Writes `days/`, `concepts/`, `world/graph.json`.

You are collecting into the GitHub repo `sai-prakash/agentic-corpus`.
Owner: `sai-prakash`. Branch: `main`.
Do not scrape X unofficially. Use Grok X search + web search + arXiv pages.

## Goal

Refresh the working set for **AI and agentic AI** so the owner can publish from files, not from the timeline.
Local desk first. Do not touch Aether.

## Steps each run

1. Read `world/graph.json`, `world/inbox.json`, and the latest file in `days/` so you do not duplicate.
2. Search:
   - X latest + top: agent harness, graph engineering, GraphRAG, context graph, agent memory, multi-agent, evals, skills, MCP
   - Web: arXiv cs.AI / cs.SE last 48 hours for harness, graph, memory, agents
   - GitHub: notable new agent / harness repos if they appear in those results
3. Keep at most **7 concepts** and **12 sources** for the day. Quality over coverage.
4. For each kept item write or update:
   - `days/YYYY-MM-DD.md` (today, UTC date)
   - `concepts/<slug>.md` if it passes METHOD.md
   - do **not** overwrite `world/inbox.json` (that file belongs to `npm run collect`)
   - append selected pointers into `sources/YYYY-MM-DD.json` only if they are not already there
   - update `world/graph.json` nodes/edges (stable slugs, add `heat`, `updated`)
5. Push files with `github___push_files`.
6. In the user-facing result, list:
   - 5 headlines
   - what changed in the graph
   - one recommended publish (lab or thread), or “nothing worth shipping”

## Hard rules

- Credit original authors. Quote short. Link out.
- Mark ads, coins, and “agentic” wellness funnels as heat 1. Do not promote them.
- If a claim has no URL, drop it.
- Never invent citation counts or paper titles.
- Never dump raw timelines into the repo.
- Keep `world/index.html` working. graph.json must stay valid JSON.

## Done when

`days/YYYY-MM-DD.md` exists and `world/graph.json` parses.
