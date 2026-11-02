# ReCAP Persistent Context Graphs

**Slug:** recap-context-graph  
**Heat:** 4  
**Updated:** 2026-11-02

Lightweight persistent context graph that stores attention-derived importance scores and dependency links. On a new request it selects supporting messages without additional model calls for selection, cutting compaction and cold-restore latency.

## Triple / contrast
Attention-derived persistent graph selection is not full history re-summarization or KV-cache recompression on every request.  
Importance and dependencies are written once; relevance is scored against the new query.

## Sources
- Microsoft Research "Persistent Context Graphs for Efficient Memory Compaction in LLM Agents" (ReCAP; ~Sept 2026)

## Shipable lab (6 h)
Instrument a short multi-turn trace with attention scores (or proxy importance). Build a tiny graph of message nodes + dependency edges. Implement a selector that, given a new query, returns a compact subset. Compare token count and selection latency against a simple summarizer baseline.
