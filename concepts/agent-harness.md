# Agent harness

**Definition.** The runtime around a frozen model: tools, memory, planning, verification, budgets, lifecycle hooks. Not the model.

**Contrast.** A framework is one packaging of harness jobs. The harness is the job list and the IP. OpenAI's wording: humans scaffold the repo so agents can execute; the model is not the product. 0xnoonez: harness is what is *allowed*; context is what is *in view*; memory is what *survives*. Boeckeler / Fowler via Vinija Jain: vendor harness vs user harness; guides before the act, sensors after. Sid Jain (30 Aug): prompt tells, context decides the view, harness is the world. Same Model, Different Harness (2608.26218): tight-window context policy moves SWE-bench Verified F2PF 28% → 49% and complete solutions 43 → 72 with weights frozen. Self-orchestration (2608.26480): a manager-worker filesystem scaffold is a harness, not a multi-agent society — gains are real and model-conditional. SARA and Context Gets Root: tool observation is not authorization, and context assembly can grant root.

**Heat.** 5. Updated 2026-08-31.

Sources: OpenAI harness engineering; Philipp Schmid; arXiv 2606.20683; 2604.08224; StarHarness 2608.24804; JIT-Agent 2608.25593; SARA 2608.27146; Context Gets Root 2608.27299; Same Model, Different Harness 2608.26218; Zero-Shot Self-Orchestration 2608.26480; walkinglabs/learn-harness-engineering; Anthropic MHS; Harness-Bench 2605.27922; Vinija Jain 2093580125791240255; Sid Jain 2094089437345132953.

Publish angle: if swapping the model breaks the system, you built a dependency. If a tool observation can authorize the next write, you built an injection path. Benchmark the solver, not the checkpoint.
