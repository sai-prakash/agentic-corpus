# HarnessMM

**Definition.** Method that improves agent harness token efficiency through guarded decision reuse: Executable Decision Graphs store exact actions, literal arguments, dependencies and public guards; a controller at the model-tool boundary replays resolved decisions while model weights stay fixed.

**Contrast.** The harness does not re-invoke full reasoning after every tool result when an earlier call has already fixed the next action and its guard still holds; only new semantics, unsupported evidence or abstention fall back to the actor.

**Evidence.** Jiang, Xu, Gao, Zhao (arXiv:2610.32813, 23 Oct 2026, Tsinghua/MSRA): HumanEval/Codex success held at 90.82% while tokens/task fell 66.72k → 47.02k; DeepSeek harness success rose 71.43% → 85.71% while tokens fell 96.28k → 11.62k. Multiple independent X posts quote the numbers.

**Heat.** 4. Updated 2026-10-27.

Sources: https://arxiv.org/abs/2610.32813.

Publish angle: add a minimal decision-graph cache to an existing coding harness (record action+args+guard after first successful tool decision; skip the model call when the guard holds) and measure token reduction on a fixed set of tasks.
