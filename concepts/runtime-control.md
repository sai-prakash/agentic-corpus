# Runtime control

**Definition.** A harness that can finish a task is not a harness that can hold a requested duration, predict its runtime, or estimate elapsed time.

**Contrast.** Task completion is not runtime control. AgentTime (2610.09944, Ofengenden / Andriushchenko, submitted 7 Oct, revised 8 Oct) is 222 tasks from 18 sources, durations from about a minute to multiple days. Fable 5.1 in Claude Code deviates by a typical factor of 2.9×; GPT-6 Astra in Codex deviates by 1.2×. Among 158 reviewed Astra runs, 14 explicitly slept after appearing to finish. Predictions overestimate natural runtimes. Removing temporal information more than doubles deviation for Sol and Astra, and nearly doubles it for Fable. Shipping repo: https://github.com/michaelofengenden/agenttimebench. Paper plus repo. Do not read 1.2× as a general Codex result.

**Heat.** 4. Updated 2026-10-09.

Sources: 2610.09944 https://arxiv.org/abs/2610.09944; https://github.com/michaelofengenden/agenttimebench.

Publish angle: 10 tasks with a stated budget. Arm A stops on task completion. Arm B must stay inside a 1.5× band of the requested duration. If Arm B only wins by sleeping after the work is done, the control is a stall, not a clock.
