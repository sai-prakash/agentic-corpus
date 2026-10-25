# Certified execution harness

**Definition.** A formal harness between LLM reasoning and tool execution modeled as a Petri-net supervisory control problem, where marks encode capabilities, approvals, and budgets so that only transitions with present marks can fire.

**Contrast.** Safety under prompt injection is not solely a prompt or model problem; it is a supervisory control problem between reasoning and action. A refusal that holds after replanning is not the same as a one-shot filter.

**Evidence.** Gu & Zhu (arXiv:2610.31376, 22 Oct 2026): marks refuse injected requests whose preconditions are unmet or spent regardless of wording. Conventional maximally permissive supervisor transfers safety under four assumptions. In a replanning closed loop (retry costs an inference call), the conventional supervisor can be arbitrarily more intrusive than a stricter safe one; the least-intrusive supervisor is a value-threshold refinement. Synthesis on an autonomous release agent shows safe deployment requires a post-rollout refuse step. X discussion by @deeponailabs (25 Oct).

**Heat.** 4. Updated 2026-10-25.

Sources: https://arxiv.org/abs/2610.31376; https://x.com/deeponailabs/status/2114155630248579461.

Publish angle: sketch a minimal Petri-net monitor for one high-risk tool (e.g., code execution or payment) that tracks capability and budget marks, and measure how many injected attempts are refused after a simulated retry.
