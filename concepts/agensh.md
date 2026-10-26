# Agensh

**Definition.** A self-organized multi-agent harness in which concurrent workers claim sub-tasks, share findings, verify results and merge progress asynchronously without a central orchestrator, coordinated through shared workspace, messaging and context infrastructure.

**Contrast.** Multi-agent coordination is not always a lead agent allocating tasks and consolidating results; shared state + self-claim can scale further under fixed time budgets.

**Evidence.** Zhan et al. (arXiv:2609.26781, 22 Sep 2026; open-sourced 24 Oct): on five hardest ProgramBench tasks (GPT-5.6-sol, 6 h offline) mean pass rate rises from 19.31% (1 agent) to 28.78% (128); on pandoc from 33.89% to 55.06% (1,024). Larger organizations reach comparable rates earlier; specialized roles emerge. Independent X amplification by @Marktechpost (25 Oct, ~229 bookmarks) and others. Shipping MIT repo: https://github.com/microsoft/Agensh.

**Heat.** 4. Updated 2026-10-26.

Sources: https://arxiv.org/abs/2609.26781; https://github.com/microsoft/Agensh; https://x.com/Marktechpost/status/2114200105108586623.

Publish angle: run the single-node Docker Compose launcher on a modest coding task and compare coordination traces and outcomes against a single-agent baseline or a lead-orchestrated alternative.
