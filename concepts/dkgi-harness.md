# DKGI harness

**Definition.** An agent harness for searching text-rich knowledge graphs is code the agent writes and revises over complete node and edge files, not a fixed set of predefined graph-access tools.

**Contrast.** Predefined interfaces (neighbors, subgraph queries) constrain what evidence agents can access even when they compose tool calls or process retrieved subgraphs. Direct knowledge graph interaction (DKGI, 2610.18616, Yuyang Bai et al. Texas A&M / University of Oregon, submitted 13 Oct) exposes node and edge records as files. The agent writes Python to follow relations, combine node sets, and select textual evidence, interleaving execution with shell search and file inspection. Execution feedback guides tool creation and revision; the evolving tools determine what evidence is gathered next. Training-free, it exceeds the strongest published baseline by at least 6.7 Hit@1 points on every of three domain graphs (STaRK synthetic test sets). Ablations favor multi-turn programming over shell-only or predefined tools; trajectories show code revision to extend searches or fix errors. Second source is the shipping repository (leopoldwhite/DKGI) with runners, prompts, exported graphs, and recorded trajectories. Pair with agent-harness (runtime) and graph-engineering (structures); the durable part is co-evolution of tool creation and tool use rather than a static API. A co-evolving tool set that fails to improve Hit@1 or produces non-revisable code is the falsifier.

**Heat.** 4. Updated 2026-10-15.

Sources: 2610.18616 https://arxiv.org/abs/2610.18616; https://github.com/leopoldwhite/DKGI.

Publish angle: freeze the model and a small exported graph. Arm A is restricted to a fixed predefined graph tool API. Arm B writes and revises Python over the node and edge files, interleaving shell and file inspection. Report Hit@1 (or equivalent) and number of tool revisions. Falsifier: if the co-evolving arm does not beat the fixed tools or agents do not productively revise, the co-evolution added no search value.
