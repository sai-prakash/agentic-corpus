# Harness curriculum

**Definition.** The scenarios that generate harness-update feedback are part of the optimizer. As the cage changes, the failures worth targeting change. A curriculum is that moving set, not the patch writer.

**Contrast.** A fixed scenario order is not a curriculum. ActiveSaddler (2610.00906 + autosaddler-projectpage.github.io/activesaddler) keeps the harness optimizer fixed and replaces a pre-set scenario order with a non-stationary bandit over failure-pattern arms. Test Pass@1 rises 4.4 points on GAIA2 and 7.5 points on Terminal-Bench 2.0 versus the same optimizer; the project page puts the absolutes at 59.8% vs 55.4% and 80.0% vs 72.5%. FloWright (2610.01026 + xhguo7.github.io/FloWright) is the credit side of the same contrast: a workflow outcome is one sparse score, so training only the generator leaves the executing roles fixed. A hierarchical reward on the workflow itself lets roles co-evolve with no extra models or labels; small open models gain up to +7.41%, and co-evolving more roles (+5.03%) beats optimizing one role (+2.83%). Growing Harness (2609.26760) is the falsifier if you only localize a function: it grows control code from a failure, but it does not choose which failure the next batch should be.

**Heat.** 5. Updated 2026-10-04.

Sources: ActiveSaddler 2610.00906 + autosaddler-projectpage.github.io/activesaddler; FloWright 2610.01026 + xhguo7.github.io/FloWright; Growing Harness 2609.26760.

Publish angle: freeze the patch writer. Arm A: a scenario order fixed before search. Arm B: re-rank the next batch by recurring failure patterns. Report held-out pass and whether the winning arm was known at step 0.
