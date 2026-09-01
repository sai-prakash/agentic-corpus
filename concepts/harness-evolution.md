# Harness evolution

**Definition.** Improve the wrapper, not the weights. Outer loop proposes harness changes; evals keep or reject.

**Contrast.** StarHarness / Recuris still assume a human or search loop over harness code. JIT-Agent trains a generator that emits the harness at task time. Harness-G changes the *interface* (finite graph actions, not free-form queries). HarnessLens changes the *verifier*: do not score every candidate on a fixed task set. Predictable harness (2608.26197): a first-pass FSM wrapper is mixed; the leftover variance is unconstrained free-text planning. Schema-validate the plan before any tool and three of four cells hit reproducibility 1.000 at N=100. Self-orchestration (2608.26480) is a one-shot scaffold change, not an evolution loop — gains are real and model-conditional. openJiuwen (2608.27969): the missing pair is Structural Composability plus Runtime Adaptivity — Rails under one substrate, evidence moves framework decisions, model policy stays fixed. EvoUndo (2608.28363): a mutation that raises the score is not admissible until recoverability holds on counterfactual states. All of these are harness work, not model work.

**Heat.** 5. Updated 2026-09-01.

Sources: EvoUndo 2608.28363; openJiuwen 2608.27969 + openJiuwen-ai/jiuwenswarm; Predictable harness 2608.26197; Zero-Shot Self-Orchestration 2608.26480; HarnessLens 2608.27311 + jhxu5214/HarnessLens; Recuris 2608.24876; StarHarness 2608.24804; frozen-agent control 2607.25415; Harness-G 2607.27652; JIT-Agent 2608.25593.

Publish angle: keep the model, evolve the cage, show the diff. Gate the diff on the behaviors it claims to change *and* on whether you can undo it on a second state.
