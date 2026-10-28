# Harness Scaling

**Definition.** Method that treats structured diversity of agent harnesses as a scaling dimension for agentic RL: factorize the harness into components, select a compact balanced training subset, and train policies across those configurations so they generalize to unseen harnesses.

**Contrast.** Harness diversity is training signal, not merely an evaluation concern. Training through one fixed harness overfits; structured white-box variation transfers better to black-box harnesses than direct black-box training.

**Evidence.** Bai, Song, Hao et al. (arXiv:2610.29458, submitted 21 Oct 2026, revised 25 Oct; RUC / IQuest / Beihang): five components (system prompt, tool interface, observation, context management, workflow). Qwen3-4B GRPO average Pass@1 29.8 → 39.0 across benchmarks; policies transfer better to unseen Claude Code than OpenClaw-trained baselines. Multiple independent X posts quote the results.

**Heat.** 4. Updated 2026-10-28.

Sources: https://arxiv.org/abs/2610.29458.

Publish angle: factorize a simple coding or tool-use harness into 2–3 components, generate a small balanced set of variants, train or fine-tune a small policy across them, and measure Pass@1 on held-out configurations versus single-harness training.
