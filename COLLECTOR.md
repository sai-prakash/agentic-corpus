# Daily collector job

Collect into GitHub repo `sai-prakash/agentic-corpus`, branch `main`.
Do not scrape X unofficially. Use Grok X search + web search + arXiv.

1. Read world/graph.json and the latest days/ file.
2. Search X + arXiv + web for agent harness, graph engineering, GraphRAG, context graph, agent memory, multi-agent, evals, skills, MCP.
3. Keep at most 7 concepts and 12 sources.
4. Write days/YYYY-MM-DD.md, update concepts/*.md, sources/YYYY-MM-DD.json, world/graph.json.
5. Push with github___push_files.
6. Report 5 headlines, graph delta, one publish recommendation.

Hard rules: credit authors, drop unsourced claims, mark ads heat 1, keep graph.json valid.
