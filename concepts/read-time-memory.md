# Read-time memory

**Definition.** Keep raw trajectories as the archive. Synthesize the working set only after the next task is known. The curator is scored on that task, not on a write-time guess about future queries.

**Contrast.** Write-time distillation is not a working set. JitMem (2609.27334): reflections, workflows, and skills decide what is worth remembering before the future query exists; that irreversibly drops evidence and creates a long-horizon credit problem. Retain traces; at read time, synthesize a compact task-adaptive payload. ALFWorld / WebShop / τ²-bench +16.2 / +16.3 / +3.9 pp over the strongest write-time baseline. Untrained curator already competitive (WebShop Gemini-2.5-Pro: 61.0 vs SkillOS 41.0). EnSIMem (2609.27279 + RamonMeng/EnSIMem): a conversation summary is not an address — `[entity][type][property:value]` plus source turns. LoCoMo 90.6% / LongMemEval 92.8% under GPT-4o-mini eval. ChipMEM (2609.27067) is the opposite gate on the *write*: store a skill only after synthesis / simulation / formal check (39/54 vs 35/54 equivalence-passing; held-out CVDP 20/20 vs 18/20). Pair with RD-Forget: keep the source archive; build a query-conditioned view. Pair with provenance-mem: typed provenance of the hit beats another embedding of the same bag. Pair with AutoViewMem: write-time views still freeze a slot before the next ask.

**Heat.** 5. Updated 2026-09-25.

Sources: JitMem 2609.27334; EnSIMem 2609.27279 + github.com/RamonMeng/EnSIMem; ChipMEM 2609.27067; RD-Forget 2609.10263; provenance-mem 2609.25913; AutoViewMem 2609.21940.

Publish angle: 6h lab — freeze the model. Arm A: distill a SKILL.md after each fixture and retrieve by similarity. Arm B: keep TRACE/, synthesize a one-page payload from traces + the new ask. Report pass and discarded-but-needed facts. Optional Arm C: entity-property index, answer only from cited source turns.
