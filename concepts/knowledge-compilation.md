# Knowledge compilation

**Slug:** knowledge-compilation  
**Heat:** 4  
**Updated:** 2026-11-03

Configurable ingestion pipeline that enriches source documents with structured artifacts (navigation trees whose leaves are claim-evidence pairs, entity graphs, timelines, ontologies, wikis, memory) before any query. Acts as supply layer to an agentic harness.

## Triple / contrast
Knowledge compilation is a supply layer of structured, provenance-bearing artifacts, not a better retriever under a competent harness.  
Accuracy can be solved by disciplined BM25/grep loops; compilation reduces wasted context and supports governance/continuity that benchmarks miss.

## Sources
- arXiv:2610.41172 "Context as Infrastructure: Knowledge Compilation for Retrieval in Agentic Systems with Harnesses" (30 Oct 2026)
- InfiniFlow RAGFlow open source (github.com/infiniflow/ragflow)

## Shipable lab (6 h)
Take a small document set. Compile a navigation tree with claim-evidence leaves (or use RAGFlow template). Run a simple agentic retrieval loop with and without the compiled tree. Measure query tokens and sufficiency rate. Note where structure helps deployment concerns even if accuracy is flat.
