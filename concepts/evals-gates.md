# Evals & gates

**Definition.** Independent checks that keep or reject a harness change, a tool call, or a session outcome. Not a paragraph in the system prompt.

**Contrast.** Name-match tool evals are not scenario evals. Agent Seer synthesizes graded multi-turn dialogues from an MCP spec alone; the failure that matters is argument values. Harness-Bench scores the *pairing* (model + harness), not the weights. AgentJudgeBench: LLM judges on workflow-DAG tool-calling hit a 77–82 ceiling on hard queries without gold, and gold can over-anchor frontier judges. BTS-AgentBench compiles read-only telemetry into replayable episodes with tool-derived gold — construction does not call an LLM. HarnessLens: the gate on a harness edit is attributable behavior, not a mean score. Codex 29 Aug: MCP results encoded twice; a Stop hook that memory workers inherited looped 15k times.

**Heat.** 5. Updated 2026-08-30.

Sources: AgentJudgeBench 2608.26623; BTS-AgentBench 2608.27334 + kjy7567/BTS-AgentBench; HarnessLens 2608.27311; Agent Seer OpenReview AIgA3oUd7l; Harness-Bench 2605.27922; MCP hardware-design bench 2608.26199; Tibo Codex post-mortem.

Publish angle: generate Seer-style scenarios from one MCP server you already ship; score argument accuracy, not tool-name hit rate. Do not let the judge see gold if the metric is "would a human accept this trace."
