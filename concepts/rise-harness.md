# RiseHarness

**Definition.** A framework that iteratively improves long-horizon terminal agent harnesses (model weights fixed) by analyzing flipping tasks with dual traces (agent trajectories + internal harness monitor) and a Harness Handbook, then adapting relevant mechanisms from other frameworks.

**Contrast.** Reliability gaps on repeated runs are not only model stochasticity; harness mechanisms for command execution, feedback, context and completion can be revised from successful/failed pair evidence.

**Evidence.** Wang et al. (arXiv:2610.27435, 20 Oct 2026): focuses on tasks with both success and failure under the same config; improves Pass@1 and all-run success on Terminal-Bench variants; ablations support harness-execution evidence and external design research. Author thread on X notes related work on memory and handbook.

**Heat.** 4. Updated 2026-10-26.

Sources: https://arxiv.org/abs/2610.27435; https://x.com/iu_ruhan/status/2114311997257089168.

Publish angle: instrument a terminal agent harness with a lightweight runtime monitor, collect flipping-task pairs, and attempt one handbook-guided edit cycle against a fixed model.
