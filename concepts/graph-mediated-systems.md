# Graph-mediated systems

A survey taxonomy that treats graphs in agentic LLM systems as operations with both a role (what they do) and a locus (where the computation lives). Local improvements in retrieval or prediction do not automatically improve the downstream action that consumes the graph output.

**Contrast:** a graph operation that raises a local metric is not one that raises downstream task success.

**Sources (last 14 days):**
- arXiv:2611.05953 (4 Nov 2026) — Haihui Liu, Yang Chen, Zice Qiu, Yun Zhang, Jialun Zhong, Wenhua Wang, Yanzeng Li, Tian Wang. Operation-level role–locus taxonomy for reasoning, knowledge/evidence, retrieval/memory, execution, coordination. Open challenges: adaptive stopping, memory maintenance, dependency-aware recovery.
- X discussion, The Year of the Graph (@TheYotg), 5 Nov 2026. Concrete example of retrieval success + action failure; summary of evidence conditions and evaluation framework.

**Shippable lab:** instrument an existing multi-hop agent so every graph operation logs its role, locus, and the exact artifact handed to the next step; then ablate which hand-offs actually change final success versus local scores.

Heat 4. Updated 2026-11-06.