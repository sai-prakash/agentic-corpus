# Cross-substrate authority

**Definition.** Decision-relevant authorization that lives outside the planner-visible workspace and memory, so two identical trees can require opposite safe actions until an execution-time guard reads the real grant.

**Contrast.** Planner-visible memory is not the authority store. Cross-substrate authority (2609.08472) names the gap: agents persist notes and mutate files while a runtime, registry, or approval service holds the license for the next write. 128-cell evidence ablation: authority-blind candidate evidence 0/32 final semantic success; raw receipts and a typed relation both 32/32 — the missing fact accounts for the gain; typed packaging adds no planning accuracy over equal raw information. 96 planning calls: workspace-visible evidence yields 12/16 unsafe publication decisions; planning on the typed relation stays unreliable (15/32 first actions correct; 11/32 invalid or absent). Replay of 32 fixed first-action intents with zero extra model calls: a deterministic guard at the mutation boundary blocks all six unsafe intents and permits all 12 valid authorized publishes. Pair with EAL (2609.01836): that failure is a *memory row* inventing a grant the history never issued; this failure is a *grant that never entered the planner's store*. Pair with Persistent Agents: identity + memory + body can migrate; the approval service may stay behind. Pair with CAPMAS (2609.06500): scoping a query onto a bounded privilege bundle is necessary and still not a mutation-boundary check. Pair with Context Gets Root / Deadbugz: those promote a tool schema; this withholds the schema the planner would need. Authority enforcement belongs where the write becomes an effect.

**Heat.** 5. Updated 2026-09-10.

Sources: Cross-substrate authority 2609.08472; EAL 2609.01836; Persistent Agents 2609.00546; CAPMAS 2609.06500; Context Gets Root 2608.27299; Deadbugz (Pillar).

Publish angle: 6h lab — NOTES + working tree visible to the planner; approval.json invisible until `git push`. Guard reads only approval.json. Report unsafe publishes when NOTES lie.
