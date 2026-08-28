# Agent harness

**Definition.** The runtime around a frozen model: tools, memory, planning, verification, budgets, lifecycle hooks. Not the model.

**Contrast.** A framework is one packaging of harness jobs. The harness is the job list and the IP. OpenAI's wording: humans scaffold the repo so agents can execute; the model is not the product. 0xnoonez: harness is what is *allowed*; context is what is *in view*; memory is what *survives*.

**Heat.** 5. Updated 2026-08-28.

Sources: OpenAI harness engineering; Philipp Schmid; arXiv 2606.20683; 2604.08224; StarHarness 2608.24804; JIT-Agent 2608.25593; walkinglabs/learn-harness-engineering; Anthropic MHS (harness now includes hardware drivers).

Publish angle: if swapping the model breaks the system, you built a dependency.
