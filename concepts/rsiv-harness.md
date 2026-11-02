# RSIV-Harness (Recursive Self-Improvement Harness)

**Slug:** rsiv-harness  
**Heat:** 4  
**Updated:** 2026-11-02

Keeps model weights fixed and revises the surrounding harness from the agent's own failure traces, gated by a four-layer framework of anchor and memory checks. Demonstrated on open-domain conversational text-to-visualization.

## Triple / contrast
Harness revision from failure traces (with rollback) is not weight update or unconstrained code mutation.  
The harness improves while the model stays frozen; checks prevent regression.

## Sources
- arXiv:2610.35316 (submitted 26 Oct 2026) — RSIV-Harness + ODAC-Vis benchmark; +28 executability, +34 chart structure after one round

## Shipable lab (6 h)
Take a small set of failing visualization or tool-use traces. Write a proposer that suggests one harness change (prompt, tool schema, or recovery hook). Add a simple regression check against a held-out success set. Measure whether the change lifts the failing cases without breaking the successes.
