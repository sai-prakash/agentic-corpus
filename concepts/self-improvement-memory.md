# Self-Improvement Memory

A memory for the harness optimizer (not the task agent) that groups past edits by the problem they targeted and records rationale, predicted vs observed outcome, and evaluation context so optimization can continue across changing models or benchmarks.

**Contrast:** carrying only the evolved harness code is not carrying the experience of why each edit was made and how it performed; the diary lets the optimizer decide what to keep, revise, or drop.

**Sources (last 14 days):**
- arXiv:2611.18856 (submitted 13 Nov 2026, Xin Yu et al. / Google) — SIM improves final scores over harness-only continuation across domains; +2.36 points average (p=0.003) on 10 paired coding runs.
- X posts and coverage (e.g. @ContextWindow_ 19 Nov 2026) reporting the transfer gains and the diary mechanism.

**Shippable lab:** log 8 successive harness edits on a fixed small benchmark with rationale + predicted/observed scores; then continue optimization on a shifted model and measure whether the diary version outperforms code-only transfer.

Heat 4. Updated 2026-11-20.
