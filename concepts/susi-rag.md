# SuSi-RAG subgraph similarity

Hybrid Graph RAG that matches a maintenance query to event subgraphs using expert-weighted entity similarity and partial-match penalties, with vector retrieval as fallback.

**Contrast:** subgraph similarity over structured maintenance-event graphs is not the same as vector similarity over text chunks when the query involves complex causal chains or cross-domain synthesis.

**Sources (last 14 days):**
- arXiv:2611.30588 (submitted 23 Nov 2026, Hansi Zhang, Wilma Johanna Schmidt et al., Bosch and collaborators) — production deployment on active Bosch line >8 months, 10,664 interactions, 96.25% upper-bound accuracy; PoC gains vs vector baseline of +34.7 points top-1 retrieval and +39.2 points expert-rated quality.
- Independent X post from Information Retrieval Papers account linking the paper (24 Nov).

**Shippable lab:** construct a small synthetic maintenance event graph (entities: station, failure mode, part, action, causal link), implement the weighted subgraph match + penalty, run a set of causal-chain queries against a vector baseline on the same records, and score retrieval rank plus a simple quality proxy.

Heat 4. Updated 2026-11-25.
