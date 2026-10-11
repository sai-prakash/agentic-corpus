# Harness-Search

**Definition.** Long-horizon search separates the responsibilities of proposing retrieval actions, committing persistent evidence, and auditing termination into three permission-bounded roles.

**Contrast.** One agent is not a Propose-Commit-Audit loop. Harness-Search (2610.05382, Shanyong Wang et al., submitted 4 Oct) assigns a Retrieval Policy (propose), a Memory Operator (validate and commit persistent state), and a Summary Auditor (accept or reject termination on evidence sufficiency). The separation reduces local errors that otherwise propagate across exploration, curation, and stopping. Across seven long-horizon search benchmarks it raises Recall 4.60–27.92 points and Final-Answer Recall 12.34–30.13 points over the strongest harness-based baseline under the same policy backbone. Second source in the window is the NLP-papers X announcement (status 2108409541943591299, 9 Oct). Pair with memory-lifecycle (consolidation) and multi-agent coordination; the durable claim is the duty separation, not the absolute deltas. A single agent that simply re-prompts on the same evidence is the falsifier.

**Heat.** 4. Updated 2026-10-11.

Sources: 2610.05382 https://arxiv.org/abs/2610.05382; x.com/HEI/status/2108409541943591299.

Publish angle: one DeepResearch-style task. Arm A is a single harness agent. Arm B is the three-role loop. Score evidence Recall and whether the auditor correctly rejects early termination. Falsifier: if the single agent matches Recall within 3 points, the separation did not reduce propagation error on that task.
