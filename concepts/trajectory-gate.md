# Trajectory gate

**Definition.** A run passes only if the tool selection, arguments, order, and side effects pass, not if the final number matches. Outcome credit without a trajectory check is fail-open.

**Contrast.** A final number is not a trajectory. Continuous Process-Level Evaluation (2610.01833) runs 240 trials on two enterprise skills, two spec variants, two harnesses, and three models. Of 175 trials that pass every applicable final numerical check, 162 (92.6%; Wilson 95% CI 87.7–95.6) still contain another evaluator-detected deviation. Under a seven-check final-state definition, 151 of 164 passing runs (92.1%; CI 86.9–95.3) still fail a trajectory check. Keyword Harnesses Fail Open (2610.02142) is the emission half: a lenient string score can credit a call that never happened (B4 0.660 vs 0.650, verbatim 6/6 vs 0/6). MCRI (2610.01506) is the prior half: it ranks a skill before execution and does not replace the trajectory check after.

**Heat.** 5. Updated 2026-10-05.

Sources: Continuous Process-Level Evaluation 2610.01833; Keyword Harnesses Fail Open 2610.02142; MCRI 2610.01506.

Publish angle: take 20 runs that already pass the final number. Add checks for tool choice, argument shape, and order. Report how many still fail. If none do, the gate is not the number.
