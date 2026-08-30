# Harness evolution

**Definition.** Improve the wrapper, not the weights. Outer loop proposes harness changes; evals keep or reject.

**Contrast.** StarHarness / Recuris still assume a human or search loop over harness code. JIT-Agent trains a generator that emits the harness at task time. Harness-G changes the *interface* (finite graph actions, not free-form queries). HarnessLens changes the *verifier*: do not score every candidate on a fixed task set. Label tasks conversion / positive-control / preservation / diagnostic and accept only on attributable evidence. All four are harness work, not model work.

**Heat.** 5. Updated 2026-08-30.

Sources: HarnessLens 2608.27311 + jhxu5214/HarnessLens; Recuris 2608.24876; StarHarness 2608.24804; frozen-agent control 2607.25415; Harness-G 2607.27652; JIT-Agent 2608.25593.

Publish angle: keep the model, evolve the cage, show the diff. Gate the diff on the behaviors it claims to change.
