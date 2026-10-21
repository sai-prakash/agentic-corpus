# Self-Evolving Agent Harness

**Definition.** Feedback-driven persistent revision of an agent's software scaffolding (prompts, memory, workflows, tools, repository-level control logic, plugin composition) while foundation-model weights stay fixed.

**Contrast.** Harness self-evolution is not weight update and is not unvalidated self-improvement. It separates update targets from proposal and admission mechanisms; interpreted state changes differ from executable revisions. Admission uses independent validation and regression budgets under continual PAC-learning bounds.

**Heat.** 4. Updated 2026-10-21.

Sources: arXiv:2610.18813 (Wei et al.); survey + resources https://github.com/zgcagi/Harness-RSI (project site https://zgcagi.github.io/Harness-RSI/).

Publish angle: clone the repo, pick one update target (e.g. a tool or system prompt), implement a minimal Propose-Validate-Admit loop with a held-out validation set and explicit regression budget, measure whether accepted revisions transfer to a new task without weight changes.
