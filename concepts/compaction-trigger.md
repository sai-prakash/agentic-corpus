# Compaction harm trigger

**Definition.** A compaction policy may fire on recent agent behaviour, not only on a token budget. The claim is only as strong as the burden it avoids at matched retention.

**Contrast.** A token budget is not a harm predictor. Pakhomov and Nijkamp (2610.08722, submitted 6 Oct) replay 590 harness-triggered AppWorld boundaries from TRACE under the pre-compaction context and under the summary. Harm is the burden of the next actions: calls that error, or that repeat a call already made. History predicts that harm only weakly (best held-out AUROC 0.66 against a same-boundary replicate of 0.72). The best frozen trigger avoids 21% of positive-burden boundaries while keeping 84% of compaction opportunities, and beats a random rule on count but not on burden mass. TRACE return admission (2609.33517) is the other source in the window: it gates what may re-enter; this paper asks when a summary will hurt. Whether the trigger beats a token-budget rule at matched retention is not evaluable on the release.

**Heat.** 4. Updated 2026-10-08.

Sources: 2610.08722 https://arxiv.org/abs/2610.08722; TRACE 2609.33517 https://arxiv.org/abs/2609.33517.

Publish angle: Arm A compacts on a token budget. Arm B fires the frozen trigger and must keep at least 84% of Arm A's opportunities. Report burden mass. If Arm B does not win at matched retention, the trigger is not a policy.
