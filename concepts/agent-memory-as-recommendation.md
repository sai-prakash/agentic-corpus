# Agent Memory as Recommendation

**Definition.** Formalization of long-term agent memory selection as budgeted slate recommendation: the request is the user, stored memories are items, and the context window is the slate. Selection uses recommender cascades (candidate generation, learning-to-rank, slate construction) without LLM calls at serving time.

**Contrast.** Memory selection is recommendation, not pure retrieval. Completeness of the slate (holding all needed evidence) is the factorized accuracy objective; complex agentic mutation is not required for the evaluated multi-session tasks.

**Evidence.** Zhang & Sun (arXiv:2610.34673, Fudan, submitted 26 Oct 2026): AgentMemRec outperforms A-Mem, HippoRAG 2, DynamicRAG and T-Mem by 10–31 points on LongMemEval multi-session questions; matches an LLM reranker (64 calls/query) at 3.2× lower serving cost; beats Mem0 and Zep on LoCoMo without write-time LLM calls.

**Heat.** 4. Updated 2026-10-28.

Sources: https://arxiv.org/abs/2610.34673.

Publish angle: implement a simple ranking cascade (dense candidate generation + lightweight LTR) over a multi-session conversation store and measure slate completeness and answer accuracy against flat RAG and an LLM reranker on a fixed LongMemEval-style set.
