# Agentic Corpus

Local-first working set for AI + agentic AI. Aether comes later.

## Run on your machine (this is the view)

```bash
git clone https://github.com/sai-prakash/agentic-corpus.git
cd agentic-corpus
npm run collect    # arXiv + HN + Hugging Face papers + GitHub search
npm run local      # http://127.0.0.1:4173
```

Do not open `world/index.html` as a file. The desk fetches JSON; use the local server.

Optional: `GITHUB_TOKEN=... npm run collect` raises GitHub search quota.

## What collect hits (programmatic, public)

| Source | API |
|---|---|
| arXiv | export.arxiv.org/api/query |
| HN | hn.algolia.com |
| Hugging Face | /api/daily_papers |
| GitHub | search/repositories (token optional) |

X is *not* scraped here. Daily Grok automation still samples X into `days/`.

Inbox lands in `world/inbox.json`. Graph stays `world/graph.json`.

## After it works locally

Then pipe the same JSON into aether-atlas. Not before.
