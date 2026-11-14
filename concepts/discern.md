# DISCERN

Preserve-at-write, resolve-at-read framework for persistent LLM-agent memory that separates additive bi-temporal provenance from governed read-time navigation.

**Contrast:** merging confusable entities or resolving supersession at write time is not preserving every fact and value in a bi-temporal graph, then resolving entity, time-state, and abstention only at read via gated actions.

**Sources (last 14 days):**
- arXiv:2611.15729 (11 Nov 2026) — Chirag Ahuja, Vladislav Tanov, Ramcharan Kakarla, Jonathan Taws. ENT-310 abstention F1 0.924, macro correctness 0.861, entity resolution 0.800; LoCoMo lead with zero tuning.
- Independent HTML/arXiv version and research-digest mentions of the preserve/resolve split and bi-temporal approach.

**Shippable lab:** build a minimal bi-temporal event log + entity-family graph; implement a zero-LLM or light-tool navigator that chooses among answer/abstain/disambiguate/check-temporal; compare calibration and entity accuracy against a merge-on-write baseline on a small synthetic conflicting-facts set.

Heat 4. Updated 2026-11-14.
