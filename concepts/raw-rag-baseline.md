# Raw-RAG baseline

**Definition.** A naive RAG baseline that performs dense retrieval and reranking directly over raw conversation history (no mutation, structural reorganization, or learned memory operations) and supplies the selected evidence to a reader LLM.

**Contrast.** Complex agentic memory (mutation, graphs, learned retrieval) is not always superior to raw-history RAG on long-term conversation understanding tasks. Preserving raw evidence coverage can outweigh the benefits of structured transformation.

**Evidence.** Bao et al. (arXiv:2610.30755, 22 Oct 2026): Raw-RAG ranks first in six of seven benchmark-model settings across LoCoMo, LongMemEval, MEME, and MemoryAgentBench, outperforming the strongest compared agentic memory system by 0.13–5.53 points. Evidence analysis shows higher coverage of necessary evidence (answer values plus relations and dependency paths) offsets lower utilization. Even complete access to transformed memory stores leaves an accuracy gap relative to raw evidence. Independent high-engagement X post by @omarsar0 (23 Oct, ~980 bookmarks) amplifies the baseline recommendation: run it before adding a memory layer.

**Heat.** 5. Updated 2026-10-25.

Sources: https://arxiv.org/abs/2610.30755; https://x.com/omarsar0/status/2113635562578178147.

Publish angle: implement or proxy Raw-RAG on a public conversation benchmark subset (or private multi-session chats) and compare answer accuracy and evidence coverage against your current agentic memory system before investing in further structural complexity.
