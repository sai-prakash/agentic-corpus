# Procedural graph

**Definition.** An explicit, editable graph of procedures and their relations that localizes the agent's current step and biases the next action, with topology changes committed only after a held-out validation gate.

**Contrast.** A knowledge graph is not a procedure graph. Facts answer what-is as (entity, relation, entity). Procedures answer what-to-do as (procedure, relation, procedure). Procedural Graphs (2609.09153) localize the active node, render the surrounding subgraph as situational guidance (not a dictated tool call), and let a refiner contrast failed vs successful traces. Edits commit only when held-out validation does not drop; rejected edits stay in memory so the loop does not retry them. Evolved graphs from a minimal skeleton match or beat hand-designed priors. Reported: 19/24 wins vs strongest baseline (binomial p=4.3×10⁻⁴); BFCL v3 Gemini 3.5 Flash 67.00 vs 58.00; GDPval Gemini 3.1 Pro 78.78 vs 71.37; τ-bench Gemini 3.1 Pro 80.00 vs 73.04; EnterpriseArena survival Claude Sonnet 4.6 58.0 vs 44.0, Gemini 3.1 Pro 34.0 vs 6.0. Typical graphs 7–17 nodes. Pair with TROVE (2609.05019): TROVE fences the *remaining route* after a commit; this *is* the route the solver is allowed to see. Pair with Trace2Tower (2609.05261): that compiles a leveled library from traces; this compiles the walk. Pair with control-graph / DNative-Twin: a drawing that cannot gate an edit is inventory. A paragraph of "what worked last time" is not this object.

**Heat.** 5. Updated 2026-09-10.

Sources: Procedural Graphs 2609.09153; TROVE 2609.05019; Trace2Tower 2609.05261; Graph Engineering survey 2608.21156; DNative-Twin 2609.03787.

Publish angle: three nodes, two allowed transitions, one forbidden tool order. Refiner may add an edge only if a held-out ticket still passes. Rejected edges stay listed so the next edit cannot reintroduce them.
