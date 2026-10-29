# CTXAgent

**Definition.** Self-controlled context management in which the model, given two tools and a short principle, decides when to compact finished work into a hand-off, what tool output to drop, and what to recall, rather than a harness compacting at a fixed token threshold.

**Contrast.** Context window management is a model policy that can be cheaper and equally effective, not solely a harness-enforced threshold. Automatic tiers remain only as a safety net.

**Evidence.** Busch, Tacke, Aydin, Feiler, Cyron (arXiv:2610.34425, submitted 25 Oct 2026; repo MatthiasHBusch/CTXAgent): strongest models keep mixed long sessions mostly under 100k tokens with little score drop. Claude Opus 5.5 matches Claude Code success at 34% lower cost than the explicit 200k configuration and 49% lower than default. Heat 4. Updated 2026-10-29.

Sources: https://arxiv.org/abs/2610.34425, https://github.com/MatthiasHBusch/CTXAgent.

Publish angle: give a small agent two compact/curate tools plus a one-paragraph principle, run mixed long sessions against a threshold-based harness, and measure token cost versus task success on a held-out subset of coding or multi-step problems.
