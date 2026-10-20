# MS-Eval

**Definition.** Unified evaluation kit that quantifies sub-agent delegation and orchestration quality in MCP-intensive working scenarios under the Main-Agent Delegation and Sub-Agent Execution (MAD-SAE) paradigm.

**Contrast.** Spec (specialized sub-agents in isolated contexts) is not sequential tool invocation and is not blanket or over-delegation. Spec is the best practical practice; unnecessary delegation turns the same cost into pure overhead. Gains come from better single-agent solutions, context offloading, and genuine parallelism, not from spawning for its own sake.

**Heat.** 4. Updated 2026-10-20.

Sources: arXiv:2610.22869 (Ding et al.); codes claimed at https://github.com/LINs-lab/MS-Eval.

Publish angle: clone or reimplement the kit, run Spec vs sequential vs over-delegation on a small MCP task set, report MSQ, cost, and efficiency side-by-side. Gate on whether the payoff is contingent.
