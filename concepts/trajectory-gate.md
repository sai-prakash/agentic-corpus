# Trajectory gate

**Definition.** A run passes only if the tool selection, arguments, order, and side effects pass, not if the final number matches. Outcome credit without a trajectory check is fail-open.

**Contrast.** A final number is not a trajectory. Continuous Process-Level Evaluation (2610.01833) runs 240 trials on two enterprise skills, two spec variants, two harnesses, and three models. Of 175 trials that pass every applicable final numerical check, 162 (92.6%; Wilson 95% CI 87.7–95.6) still contain another evaluator-detected deviation. Under a seven-check final-state definition, 151 of 164 passing runs (92.1%; CI 86.9–95.3) still fail a trajectory check. LiteTrajEval (2610.03315) is the budget half: one rubric-guided judge under a fixed token budget, after offline rule profiles and online failure marks. Failure-localization alignment with humans rises by roughly 20–35 percentage points on Magentic-One-style traces and up to 23 points on tau-retail versus AgentRx, at about 6× lower cost and more than 8× less evaluation time. Keyword Harnesses Fail Open (2610.02142) is the emission half: a lenient string score can credit a call that never happened.

**Heat.** 5. Updated 2026-10-06.

Sources: Continuous Process-Level Evaluation 2610.01833; LiteTrajEval 2610.03315; Keyword Harnesses Fail Open 2610.02142.

Publish angle: take 20 runs that already pass the final number. Add checks for tool choice, argument shape, and order. Report how many still fail. If none do, the gate is not the number.
