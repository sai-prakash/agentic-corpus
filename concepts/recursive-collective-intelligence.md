# Recursive Collective Intelligence

Multi-agent groups that improve themselves by moving scarce information and training the next generation on their own verified turns, graded against compute-matched independent agents on an equal-budget ladder (single agent → majority vote → pass@n).

**Contrast:** a team that merely aggregates votes or shares full context is not one that forwards split facts to exceed pass@n and then recursively climbs the ladder label-free on unseen problems.

**Sources (last 14 days):**
- arXiv:2611.32606 (submitted 24 Nov 2026): Recursive Collective Intelligence: Emergence on an Equal-Budget Ladder in Multi-Agent LLM Systems. Fact-forwarding lifts groups above pass@n; spontaneous hubs; two label-free generations climb and beat controls on PlanBench, HiddenBench, Hanabi.
- Independent X linking by Multiagent Systems Papers (@PIN) on 25 Nov 2026.

**Shippable lab:** On a small hidden-profile task (facts split across agents), implement fact-forwarding vs vote vs shared-context under equal token budget. Measure accuracy against pass@n. Then run one recursive generation that selects verified turns and fine-tunes or prompts the next team, re-evaluate on held-out instances.

Heat 4. Updated 2026-11-26.
