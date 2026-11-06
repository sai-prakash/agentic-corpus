# HarnessGrad

A configurable workflow that treats the agent harness as a continual learner: swap harnesses, improvement methods, and benchmarks without rebuilding the experiment pipeline, then inspect how the harness itself changes across rounds while the model stays fixed.

**Contrast:** rebuilding a separate experiment pipeline for every harness/method/benchmark combination is not a shared continual-learning substrate.

**Sources (last 14 days):**
- X post, Ningyu Zhang (@zxlzr), 5 Nov 2026. Announcement of HarnessGrad: 8 harnesses, 19 methods, 56 benchmark adapters; inspect candidates, code diffs, trajectories. GitHub and website linked.
- Broader harness-evolution cluster (Harness-S, HCL, Hermit) already in the corpus; this is the shared experimental substrate.

**Shippable lab:** point HarnessGrad (or a minimal local clone of the idea) at two existing harnesses and one improvement method, run three rounds on a small benchmark, and measure both task score and the size/nature of the harness diff.

Heat 4. Updated 2026-11-06.