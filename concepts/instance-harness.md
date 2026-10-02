# Instance harness

**Definition.** The cage that search returns is not the cage that should run on every instance. A global harness is a prior. An instance harness is a gated patch or a gated act on top of that prior.

**Contrast.** A global harness is not an instance harness. MOSIB (2609.37834) keeps complementary branch heads and routes one before execution, still one head per input. Turbo Harness (2609.40330) recycles a finished global optimization into a playbook and trains an editor that patches the global cage per instance. Mid-Harness (2609.39982) does not patch the cage at all: it samples actions and verifies one before execution, generator and harness unchanged (TerminalBench-Lite Pass@1 50.00% → 68.03% with a GPT-5.6 Sol verifier and 8 samples). Thin MLE (2609.40303) is the falsifier: under equal time and the same frontier backbone, elaborate MLE harnesses did not beat a minimal read/write/bash session. Instance adaptation is allowed only where the cage still moves the score.

**Heat.** 4. Updated 2026-10-02.

Sources: Turbo Harness 2609.40330; Mid-Harness 2609.39982 + byungkwanlee.github.io/MidHarness-page; MOSIB 2609.37834; thin MLE harness 2609.40303.

Publish angle: freeze the model. Show the global head, the instance patch, and the action-verify gate on the same fixtures. Count unique solves and regressions. If a minimal session matches the global head, do not ship the patch.
