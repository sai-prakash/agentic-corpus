# Evals & gates

**Definition.** Independent checks that keep or reject a harness change, a tool call, or a session outcome. Not a paragraph in the system prompt.

**Contrast.** Name-match tool evals are not scenario evals. Agent Seer synthesizes graded multi-turn dialogues from an MCP spec alone; the failure that matters is argument values. Harness-Bench scores the *pairing* (model + harness), not the weights. 2608.26199: richer tool descriptions beat few-shot padding; extra context can stall small models.

**Heat.** 4. Updated 2026-08-29.

Sources: Agent Seer OpenReview AIgA3oUd7l; Harness-Bench 2605.27922 + harness-bench.ai; MCP hardware-design bench 2608.26199; SatyKrish eval-as-graph-node; Vtrivedy GRPO needs a 0.2–0.6 pass@k.

Publish angle: generate Seer-style scenarios from one MCP server you already ship; score argument accuracy, not tool-name hit rate.
