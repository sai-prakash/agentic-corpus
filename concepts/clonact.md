# ClonAct

Routerless architecture that virtualizes context blocks as independent schedulable resources (Context Cells) behind a single continuous interface, using a pluggable Context MMU, in-place cells, a footprint-aware Synaptic Bus with isolated trial-merge gate, and a wave-flushed Shared Trunk.

**Contrast:** funneling interleaved tasks into one linear session produces cross-topic constraint bleed and head-of-line stalling; router-ticket hierarchies incur lossy prose handoffs and blind merges; ClonAct schedules context blocks directly as resources.

**Sources (last 14 days):**
- arXiv:2611.26346 (submitted 19 Nov 2026, Xufei Tian, Han Hu, Wenli Du) — portable trial merge gate lifts true-conflict merges to 63.3%; ClonAct attains the ceiling with 45.9% fewer prompt tokens and prevents compact-model router collapse; matches top completion under surge streams with lowest median wait.
- GitHub repo Viacol0916/ClonAct (code, benchmarks, reproduction) and accompanying design blog.

**Shippable lab:** prototype a minimal Context MMU + two Context Cells that share a prefix and exchange updates on a 10-episode interleaved coding + briefing workload; measure token use and merge success against single-session and simple router baselines.

Heat 4. Updated 2026-11-21.
