# ToolSpace

Tool-centric framework for synthesizing long-horizon agent environments from real execution traces. It mines data, state, and retry dependencies from adjacent MCP calls with deterministic rules, clusters the resulting tool-composition graph into environments, and generates tasks via state-aware random walks that must replay successfully from the initial state.

**Contrast:** environments derived from real tool compositions are not invented databases with matching tools. Data-centric synthesis produces plastic interfaces and rarely spans environments.

**Sources (last 14 days):**
- arXiv:2611.05036 (3 Nov 2026) — Guanting Dong et al. Produces harder Pro versions of AutomationBench and τ³-Bench on which frontier models drop by up to 38.2 points; lifts Qwen3.6-35B-A3B from 23.0 to 41.0 average across seven long-horizon benchmarks.
- Project site toolspace-agent.github.io and recent discussion of the pipeline.

**Shippable lab:** collect a small set of real tool-call traces (or synthetic but execution-grounded), extract data/state dependencies with simple rules, cluster into one environment, and generate one replayable task; compare agent success against a data-centric baseline of the same size.

Heat 4. Updated 2026-11-11.
