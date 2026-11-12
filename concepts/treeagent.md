# TreeAgent

Structure-aware memory agent that partitions long hierarchical inputs (JSON, HTML, YAML, JS) into complete subtrees and adjacent-sibling groups, attaches explicit structural paths, and retrieves relevant spans from residual linked historic memory states while retaining the host agent's update procedure.

**Contrast:** flat sequential segments are not structure-preserving; residual hierarchical memory access is not successive overwrite that discards sibling context.

**Sources (last 14 days):**
- arXiv:2611.13946 (10 Nov 2026) — Wei Gu, Weiwei Qi et al. 3.61% average gain across four memory agents on eight tasks over 8K–1M token hierarchical inputs. Theoretical segment-count bounds for budget selection.
- Public repo ZJU-LLM-Safety/TreeAgent — implementation, checks, and citation.

**Shippable lab:** wrap a recurrent memory agent with subtree sectioning, structural path injection, and residual span retrieval; compare answer scores against flat fixed-length segmentation on a held-out set of hierarchical documents.

Heat 4. Updated 2026-11-12.
