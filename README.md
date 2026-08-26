# Agentic Corpus

GitHub-native working set for **AI + agentic AI**.

Local desk first. Aether stays parked until the inbox and graph are trustworthy.

```
public APIs + RSS
        │
        ▼
  npm run collect
        │
        ▼
  world/inbox.json + sources/YYYY-MM-DD.json
        │
        ▼
  npm run local   →  http://127.0.0.1:4173
```

Live world (after Pages is on):
**https://sai-prakash.github.io/agentic-corpus/**

## Local — do this first

From this repo:

```bash
npm run collect
npm run local
```

Open `http://127.0.0.1:4173`. Do not open `world/index.html` as `file://` — the browser will block `fetch` of the JSON.

What you should see:

- Left (or bottom on phone): inbox from the last collect
- Source chips + search
- Source health (how many rows each API returned)
- 3D field: durable concepts from `world/graph.json` plus today’s inbox rows hooked onto nearby concepts

Collect writes two files:

| File | Role |
|---|---|
| `world/inbox.json` | What the desk reads |
| `sources/YYYY-MM-DD.json` | Dated snapshot you can diff |

## Programmatic sources (no unofficial X scrape)

| Source | API | Key |
|---|---|---|
| arXiv | Atom `export.arxiv.org` | none |
| Hacker News | Algolia | none |
| Hugging Face | `/api/daily_papers` | none |
| OpenAlex | works search | none (mailto in UA) |
| Lobsters | `/t/ai.json` | none |
| Dev.to | `/api/articles` | none |
| Simon Willison | Atom | none |
| Latent Space | RSS | none |
| Import AI | RSS | none |
| GitHub repos | Search API | optional `GITHUB_TOKEN` |

X discourse is **not** scraped here. Grok’s X search (daily automation in `COLLECTOR.md`) is the legal intake for threads. Store claims + URLs, not a tweet dump.

Skipped on purpose: Semantic Scholar (429 without a key), Reddit (blocks datacenter IPs), Papers with Code HTML.

## What this is

- One concept = one markdown file (`METHOD.md`)
- One day = one briefing in `days/`
- One graph = `world/graph.json`
- One inbox = `world/inbox.json` from `npm run collect`

## What this is not

- Not Aether Atlas (product layer, later)
- Not a firehose of every X post
- Not Neon / Vercel / a database you cannot diff

## Publish path (after the desk works)

1. Open today’s `days/` file and the inbox
2. If an idea passes `METHOD.md`, write `concepts/<slug>.md` and add a node
3. Clone [graph-engineering-lab](https://github.com/sai-prakash/graph-engineering-lab) only when the idea is path-shaped
4. Aether later — it consumes this corpus, it does not replace it
