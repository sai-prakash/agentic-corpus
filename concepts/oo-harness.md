# OO-Harness

**Definition.** A harness optimization framework that evolves a hierarchy of specialized executable harness classes through object-oriented inheritance; a router selects the appropriate class (or reuses base) at test time using routing lessons from training.

**Contrast.** One global harness is not optimal for heterogeneous long-horizon tasks; specialized subclasses that inherit and override only what they need, plus evidence-based routing, outperform flat global optimization.

**Evidence.** Li et al. (arXiv:2610.28380, 20 Oct 2026): up to +15.79 percentage points absolute over base on AutomationBench, Workspace-Bench and Toolathlon-GYM; ablations support inheritance and trajectory-informed routing. Limited independent X discussion.

**Heat.** 4. Updated 2026-10-26.

Sources: https://arxiv.org/abs/2610.28380.

Publish angle: implement a small inheritance-based harness family (base + 2–3 specialists) and a simple router on one of your long-horizon task distributions; measure whether specialists earn the route versus always using base.
