# Agentic Corpus

A GitHub-native working set for **AI + agentic AI**.

Not a scrape of the entire internet. A dated, cited, growing graph you own.

```
X / arXiv / GitHub / labs
        |
        v
  daily Grok collector
        |
        v
  this repo (markdown + JSON)
        |
        +-- 3D world  (GitHub Pages)
        +-- concepts  (publish raw material)
        +-- days/     (what moved)
```

Live world (after Pages is on):
**https://sai-prakash.github.io/agentic-corpus/**

This is the publishing corpus. Labs such as
[graph-engineering-lab](https://github.com/sai-prakash/graph-engineering-lab)
and the heavier [aether-atlas](https://github.com/sai-prakash/aether-atlas)
product sit on top of it. They are not the source of truth.

## What this is

- One concept = one markdown file with claims, sources, and "ship a lab?" notes
- One day = one briefing of what moved
- One graph = `world/graph.json` that the 3D view reads
- One collector prompt = `COLLECTOR.md` (Grok automation runs this)

## What this is not

- Not a firehose of every X post on earth
- Not an unofficial X scraper (ToS + ban risk + slop)
- Not a substitute for reading the paper
- Not Neon, Vercel, or a database you cannot diff

Grok’s X search + web/arXiv is the legal, high-signal intake.
You keep the files. Git is the database.

## Layout

```
concepts/          durable ideas (the corpus)
days/YYYY-MM-DD.md daily briefing
sources/           raw pointers
world/             3D viewer + graph.json
COLLECTOR.md       exact job for the daily automation
METHOD.md          how a concept earns a file
```

## Use it to publish

1. Open today’s file in `days/`
2. Open the concept that gained heat
3. If the idea is path-shaped, clone the graph-engineering-lab shell
4. Draft the thread from the concept file’s “Publish angle”
5. Credit sources. Do not launder a thread as original research

## Pages

Settings → Pages → Source: GitHub Actions.
