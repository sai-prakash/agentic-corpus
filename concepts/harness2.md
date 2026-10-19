# Harness² recursive harnessing

**Definition.** Online recursive optimization of the execution harness (prompts, tools, memory, skills, orchestration) around a frozen model, for tasks unseen at design time.

**Contrast.** Offline Meta-Harness or GT-verifier RSI search over fixed splits. Harness² does task-level recursion without ground truth via contrastive Propose–Probe–Compose (behavioral contrasts guide the compose), then harnessing-level recursion extracts transferable lessons into a persistent improvement harness. Not a one-shot scaffold change or mid-task prompt CRUD; the improvement harness accumulates across tasks. Eight file-mounted components stay editable; weights never move.

**Heat.** 5. Updated 2026-10-19.

Sources: arXiv:2610.14224 (Xu et al., Google Cloud AI Research / Northwestern); https://github.com/google-research/harness2 (Apache-2.0, OpenCode/Codex, JobBench/LAB/WorkBuddy-Bench); https://harness2.github.io/; X posts 19 Oct on GitHub hot picks.

Publish angle: keep the model, recurse the cage online without a verifier. Diff the adopted harness files after one step; show the improvement harness lessons that transfer to the next unseen task. Gate on token cost of the probe probes.
