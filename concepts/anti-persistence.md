# Anti-Persistence

**Definition.** A memory design for agent self-improvement that accumulates raw trajectories and outcomes but reconstructs task-specific guidance on demand and discards the synthesized guidance after the task, preventing direct reuse of abstractions.

**Contrast.** Storing synthesized rules, summaries or skills is not always better than retaining only raw experience; error reproduction through abstraction–execution–re-abstraction cycles can make agents worse.

**Evidence.** Wang et al. (arXiv:2610.27406, 19 Oct 2026): higher overall held-out success and lowest average LLM-call cost among compared memory designs across benchmarks and backbones. Stored abstractions underperformed raw trajectories in most settings; discarding generated guidance beat keeping it. Related to the Raw-RAG baseline finding that preserving raw evidence can dominate transformation.

**Heat.** 4. Updated 2026-10-26.

Sources: https://arxiv.org/abs/2610.27406.

Publish angle: on a multi-task agent setup, A/B test storing vs discarding on-demand synthesized guidance and measure held-out success plus error recurrence rate.
