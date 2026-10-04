# Fail-open tool score

**Definition.** A tool-use claim is the emission of a valid call on the prompts that should call, and the absence of a call on the prompts that should not. Lenient overlap with a reference string is not that claim.

**Contrast.** A keyword score is not a tool call. Keyword Harnesses Fail Open (2610.02142) runs a matched pair: 661.6M with no dedicated tool SFT and 1,109M after a web-heavy phase and 6B-token tool-SFT. Lenient B4 is 0.660 vs 0.650. Verbatim reproduction splits them 6/6 vs 0/6. The 1B's tool-call token prior is 10^-4 to 10^-5. A short repair (about 3.3 GPU-hours) lifts corpus valid emission from 0.100 to 0.959 and unseen-prompt pass from the 600M's 0.428 to 0.536 (p = 0.004), without moving the trigger embedding (97.7% of the bf16 table bit-identical). Both still over-trigger (0.09 and 0.17 on negative prompts). Finding the Right Fit (2610.00917 + github.com/liyix/finding-the-right-fit) is the pairing half: on Terminal-Bench 4, Claude leads GPT by 7.94 points in OpenHands and trails it by 30.16 in PI. Mingbird (2610.02001) is the completion-gate half: a finish that does not re-read the task accepts a loop. The ladder is the cheap gate before either comparison.

**Heat.** 5. Updated 2026-10-04.

Sources: Keyword Harnesses Fail Open 2610.02142; Finding the Right Fit 2610.00917 + github.com/liyix/finding-the-right-fit; Mingbird 2610.02001 + github.com/Mingbird/Mingbird-agent.

Publish angle: report the verbatim split and the negative-prompt rate next to the lenient score. If they agree, the ladder is not the gate.
