# ReHarness

**Definition.** An agent harness for continual learning over long streams is a recurrent state that revises past reflections with downstream trajectory feedback, not a forward-only write into a reflection bank.

**Contrast.** Add and delete operations can tidy a memory bank but ignore whether a retrieved reflection helped the outcome. ReHarness (2610.12668, Yuxin Xiao et al. MIT/Meta, submitted 8 Oct) complements forward read/write with backward revision under a strictly online streaming protocol: after each instance the finished trajectory revises the specific reflections that guided it, propagating feedback through the textual harness state while grounding new content in source trajectories. Across three continual-learning benchmarks with 16 tasks and three LLM backbones it consistently beats raw-context, memory, reflection, and prompt-optimization baselines; gains remain significant after multiple-comparison correction. Revisions correct overgeneralized or outdated experience under distribution shifts and improve both stability and plasticity. Second source is the independent DAIR.AI post (13 Oct, high bookmarks). Pair with harness-evolution (outer loop) and memory-lifecycle; the durable part is outcome-conditioned revision of retrieved state rather than pure accumulation. A revision that degrades held-out tasks or loses source grounding is the falsifier.

**Heat.** 4. Updated 2026-10-14.

Sources: 2610.12668 https://arxiv.org/abs/2610.12668; https://x.com/dair_ai/status/2110017231778373722.

Publish angle: freeze the model and the task stream. Arm A writes reflections forward only. Arm B runs one backward revision on the retrieved set after the outcome, preserving source links. Report next-instance success and stability under a held-out distribution shift. Falsifier: if the revised bank hurts held-out tasks or the grounding breaks, the recurrent step added no continual-learning value.
