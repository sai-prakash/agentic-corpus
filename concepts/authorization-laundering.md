# Authorization laundering

**Definition.** Persistent memory that records a permission the underlying event history never issued, so a later executor acts on invented authority with no external attacker.

**Contrast.** A memory write is not a grant. EAL (2609.01836) names the failure endogenous authorization laundering and measures it on EAL-Bench: five writer models, two executors, procurement / cybersecurity / finance. Incremental updates invent false authority on up to 50.2% of unauthorized requests; once the row exists, executors act on it in 98.6% of trials. Two repairs — stored permissions must cite a valid source event; permission changes travel through bounded event sourcing — cut laundering and also reject more legitimate actions. Pair with Memory portability (2609.05339): NOTES already bind the next model; a permit row binds the next *action*. Pair with Context Gets Root and Deadbugz: those promote a tool schema into an instruction; this promotes a memory row into a permit. Pair with World-acting (2609.04894): action-interface expansion is documented; authorization and independent verification are not. Pair with PlanFence: stale lineage of a *plan* is a block; stale or invented lineage of a *grant* is the same block one layer down. A diary that can mint authority is the policy.

**Heat.** 5. Updated 2026-09-09.

Sources: EAL 2609.01836; World-acting 2609.04894 + x.com/dair_ai/status/2097022152088445034; Memory portability 2609.05339; Context Gets Root 2608.27299; Deadbugz (Pillar); PlanFence 2609.03340.

Publish angle: 6h lab — one JSON store of grants. Writer appends a permission with no source event. Executor refuses unless every grant cites an id that still exists. Event-source arm revokes by append, never by rewrite. Notes-only baseline should fire the unauthorized tool. Report invented-grant rate vs legitimate-reject rate.
