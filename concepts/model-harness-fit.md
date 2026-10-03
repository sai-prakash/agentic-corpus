# Model-harness fit

**Definition.** The unit of measurement is the pairing, not the model and not the cage. A harness is a prior over how failures, tool calls, and budgets are handed back. Fit is whether that prior matches the model that will use it.

**Contrast.** A strong model is not a strong pairing. Finding the Right Fit (2610.00917 + github.com/liyix/finding-the-right-fit) runs 66 configurations: OpenHands, DeepSeek Harness, PI, and openJiuwen with five models on TUA-Bench, ALE-CLI, and Terminal-Bench 4, plus native Codex-GPT and Claude Code-Claude. On Terminal-Bench 4, Claude leads GPT by 7.94 points in OpenHands and trails it by 30.16 points in PI. For four of five models the best harness changes by benchmark; openJiuwen is Kimi's best on all three, by 5.61 to 11.11 points. GPT scores higher under PI than under DSH at less than a quarter of the cost per task. Mingbird (2610.02001 + github.com/Mingbird/Mingbird-agent) is the small-model side of the same contrast: under a fixed machine and budget, cloud cages score 0.405–0.631 on LRAB where a local-first cage scores 0.886, and a frontier probe on the same 18 tasks spans 0.997 to 0.478 across harnesses. Thin MLE (2609.40303) is the falsifier when the backbone is held fixed: elaborate MLE cages did not beat a minimal read/write/bash session. Agents Are Systems (2610.01618) is the variance bound: about 54% of outcome variance on their scientific-task bench came from repeating the same configuration.

**Heat.** 5. Updated 2026-10-03.

Sources: Finding the Right Fit 2610.00917 + github.com/liyix/finding-the-right-fit; Mingbird 2610.02001 + github.com/Mingbird/Mingbird-agent; Agents Are Systems 2610.01618; thin MLE harness 2609.40303.

Publish angle: freeze two models and two cages. Report the rank reversal and the cost per solved task. Repeat the winning cell before you publish the ranking.
