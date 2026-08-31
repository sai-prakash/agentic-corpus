# Evals & gates

**Definition.** Independent checks that keep or reject a harness change, a tool call, or a session outcome. Not a paragraph in the system prompt.

**Contrast.** Name-match tool evals are not scenario evals. Agent Seer synthesizes graded multi-turn dialogues from an MCP spec alone; the failure that matters is argument values. Harness-Bench scores the *pairing* (model + harness), not the weights. Same Model, Different Harness makes that pairing the experimental unit: tight-window policy moves F2PF 28 → 49 with frozen weights. AgentJudgeBench: LLM judges on workflow-DAG tool-calling hit a 77–82 ceiling on hard queries without gold, and gold can over-anchor frontier judges. BTS-AgentBench compiles read-only telemetry into replayable episodes with tool-derived gold. MemToC: arbitration evals must condition on source correctness — models keep a true memory against a false tool 6.5–17.1% of the time. Predictable harness: schema-validate the plan *before* tools or the free-text plan is the leftover noise. Agent Mesh: retry/timeout/error-rate breakers assume idempotent messages; delegations are not messages. HarnessLens: the gate on a harness edit is attributable behavior, not a mean score.

**Heat.** 5. Updated 2026-08-31.

Sources: Same Model, Different Harness 2608.26218; MemToC 2608.26295; Predictable harness 2608.26197; Agent Mesh 2608.26225; AgentJudgeBench 2608.26623; BTS-AgentBench 2608.27334; HarnessLens 2608.27311; Agent Seer OpenReview AIgA3oUd7l; Harness-Bench 2605.27922; MCP hardware-design bench 2608.26199.

Publish angle: score the solver. Condition memory-vs-tool tests on which source is actually correct. Do not let the judge see gold if the metric is "would a human accept this trace."
