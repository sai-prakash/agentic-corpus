# Agent harness

**Definition.** The runtime around a frozen model: tools, memory, planning, verification, budgets, lifecycle hooks. Not the model.

**Contrast.** A framework is one packaging of harness jobs. The harness is the job list and the IP. OpenAI's wording: humans scaffold the repo so agents can execute; the model is not the product. 0xnoonez: harness is what is *allowed*; context is what is *in view*; memory is what *survives*. Boeckeler / Fowler via Vinija Jain: vendor harness vs user harness; guides before the act, sensors after. SARA: tool output that specifies an action is a command — induction is not authorization. Harness-Bench: same model pool, harness means 52.4–76.2 on 106 tasks.

**Heat.** 5. Updated 2026-08-30.

Sources: OpenAI harness engineering; Philipp Schmid; arXiv 2606.20683; 2604.08224; StarHarness 2608.24804; JIT-Agent 2608.25593; SARA 2608.27146; walkinglabs/learn-harness-engineering; Anthropic MHS; Harness-Bench 2605.27922; Vinija Jain 2093580125791240255.

Publish angle: if swapping the model breaks the system, you built a dependency. If a tool observation can authorize the next write, you built an injection path.
