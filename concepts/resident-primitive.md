# Resident primitive

**Definition.** A long-horizon coding harness can leave program state on the component that owns it, instead of reconstructing that state from the transcript on every turn.

**Contrast.** Rereading the repo is not a resident primitive. HERMES (2610.07832, Jin / Li / Kuang / Wang, submitted 6 Oct) pairs each repository component with a resident LLM grounded in that component's implementation and dependencies. Activation is dependency-aware; bug diagnosis maps execution evidence back to the component that must change. On four software-engineering benchmarks it beats matched baseline harnesses by 12.4% on average. Qwen3-8B primitives plus strong activation and diagnosis models stay within 4.5% of the homogeneous GPT-5.6 Sol configuration, and cut inference cost 26.2% on Terminal-Bench 4.0. The four benchmarks are not named in the abstract. No code URL. EMHO (2610.08432) is the other source: the embodied model stays frozen and the harness is revised from traces. HERMES moves state onto the components. EMHO rewrites the loop.

**Heat.** 4. Updated 2026-10-09.

Sources: 2610.07832 https://arxiv.org/abs/2610.07832; EMHO 2610.08432 https://arxiv.org/abs/2610.08432.

Publish angle: one repo, two arms. Arm A reconstructs state from the transcript. Arm B may ask only the resident primitive for the touched component. Report turns and pass rate. If Arm B does not cut turns at matched pass rate, the primitive is a cache with a name.
