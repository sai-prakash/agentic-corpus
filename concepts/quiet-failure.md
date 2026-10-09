# Quiet failure

**Definition.** A tool fault counts only if the agent notices the content, not the error channel. Recovery has to clear the fault-free run-to-run baseline.

**Contrast.** An explicit error is not a wrong value. Kraishan (2610.10062, submitted 7 Oct) injects one of four typed faults into an established function-calling benchmark: 1,920 trials, 6 models, 24 multi-step tasks. Agents treat a failure as a problem in 91.3% of explicit-error trials and 58.8% of plausible-wrong-value trials, against 26.8% when nothing was wrong. Reasoning models notice less (−9.3 points) and change plan more (+10.4); recovery is unchanged. Fault-free pairs agree on end state only 63.3% of the time, and only a missing tool (39.9% recovery) clears that baseline. A "check each result" line did not move detection. Keyword harness fail-open (2610.02142) is the other source in the window: it scores a tool channel that stays open. This paper says the agent answers the channel, not the payload.

**Heat.** 4. Updated 2026-10-09.

Sources: 2610.10062 https://arxiv.org/abs/2610.10062; keyword harness 2610.02142 https://arxiv.org/abs/2610.02142.

Publish angle: Arm A injects an explicit error. Arm B injects a schema-valid wrong value. Score notice and recovery against the 63.3% fault-free agreement. If a check-result prompt moves Arm B, the null does not hold on your harness.
