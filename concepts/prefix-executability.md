# Prefix Executability

**Slug:** prefix-executability  
**Heat:** 4  
**Updated:** 2026-11-01

Trajectory-level evaluation for tool-using agents that checks whether every prefix of the emitted tool-call sequence remains executable under schemas, state preconditions, and data dependencies. Final success alone can hide non-executable paths.

## Triple / contrast
Prefix executability is not final-task success.  
A high terminal score can rest on an invalid intermediate trajectory; prefix metrics (TER, FED, PEC) expose where validity first fails and whether recovery occurs.

## Sources
- arXiv:2610.40444 (Rezaeian, Sun, Benajiba, Roth; Oracle; submitted 29 Oct 2026) — protocol + results on BFCL-v3, ToolSandbox, τ³-bench showing ranking divergence
- arXiv:2610.17633 (Shen, Tang et al.; submitted 13 Oct 2026) — Executable Prefix Values / restart curves that locate failure causes versus symptoms on SWE-bench

## Shipable lab (6 h)
Take a small tool-use trace set (or generate 20 synthetic multi-step tool trajectories with known schema/precondition failures). Implement a checker that walks prefixes and reports TER, first-error depth, and recovery rate. Compare against pure final-success scoring. Optionally add a simple pre-execution plan validator and measure lift in TER.
