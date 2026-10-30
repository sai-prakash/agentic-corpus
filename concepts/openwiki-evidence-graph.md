# OpenWiki evidence-graph memory

**Definition.** A compiled, cited wiki that serves as durable domain memory for agents, augmented by a lightweight typed evidence graph (claims → source paragraphs, supersedes, refers-to) that agents navigate with locate/expand tools instead of repeated similarity search.

**Contrast.** Persistent structured memory with explicit evidence paths is not pure retrieval. The wiki synthesizes relations once; the graph makes citation and expansion repeatable without re-discovering context.

**Evidence.** Eugene Liu, LangChain blog (28 Oct 2026); repo langchain-ai/openwiki. On 111 synthetic insurance documents containing 972 controlled facts: OpenWiki alone was roughly 5× more accurate than grep/search tools on connected questions; adding the evidence graph doubled citation consistency, raised accuracy another ~27%, and cut cost per correct answer by 58%. Graph construction is deterministic and finishes in under a second. Heat 4. Updated 2026-10-30.

Sources: https://www.langchain.com/blog/building-agent-memory-openwiki-graphs, https://github.com/langchain-ai/openwiki.

Publish angle: compile a small multi-document domain (policies + claims) into an OpenWiki + evidence graph, then compare accuracy, citation Jaccard, and cost on connected questions against a raw RAG baseline.
