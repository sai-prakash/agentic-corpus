# Harness distillation

**Definition.** Use a domain- or instance-optimized harness as training-time guidance, transfer the behaviors it induces into model weights or into durable code, then deploy under one fixed thinner cage.

**Contrast.** A specialist harness is not a deployment requirement. Routing among cages (HarnessRouter / UHP) keeps the gain tied to the cage you selected. Harness-Zero (2609.24974): agent-as-harness — a teacher guided by the optimized harness corrects the student *in the target harness's action space* — beats code-as-harness on frontier LLMs with the same evolved cage. After fine-tune, drop the specialist: 23.3% → 44.3% macro-average success, above the 41.7% the base model scores with that harness still attached. Recovers 82.3% of 28 harness-induced patterns across knowledge work, tool use, and science. Growing Harness (2609.26760) is the code-side twin: recurring control leaves the context window and lands in executable edits on a strategy-free scaffold; vs Tool-Calling, LLM calls −76.0–91.8% and cost −74.4–98.6%, and a 4B model stays near 45% on WebArena-Verified while Tool-Calling falls to 6.7%. RRSI (2609.24972) is the gate on the search that produces the teacher cage: unregularized evolution memorizes the evolve-set. Distillation without an OOD floor just copies the shortcut.

**Heat.** 5. Updated 2026-09-23.

Sources: Harness-Zero 2609.24974; Growing Harness 2609.26760; RRSI 2609.24972 + github.com/google-research/rrsi; HarnessRouter github.com/HarnessRouter/harnessrouter.

Publish angle: 6h lab only if you already have a teacher cage. Freeze the target harness. Arm A: run the student as-is. Arm B: teacher-corrected traces in the target action space, then a cheap SFT or a prompt-distill of three recurring control decisions. Report success with the specialist removed. Do not open a distillation product this window — Harness-Zero has no public repo.
