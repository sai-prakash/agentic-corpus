# MedGraph

Graph memory that keeps a patient's clinical state correct across longitudinal visits by extracting dated, person-attributed facts and linking them into temporal chains for medications, diagnoses, and measurements.

**Contrast:** a retrieved fact that is outdated, misattributed to another person, or missing a required safety fact is not a valid clinical state.

**Sources (last 14 days):**
- arXiv:2611.08433 (5 Nov 2026) — Donghua Zhang et al. Addresses three recurring failure modes of prior memory systems on medical dialogue. Retrieval ranks patient chains as units and always injects the full safety-fact profile. +10.5 / +10.4 points on MedMemoryBench (GPT / Qwen).

**Shippable lab:** multi-session patient dialogue fixture; implement dated fact extraction + person attribution + chain linking; measure outdated-state, wrong-person, and missing-safety errors before vs after.

Heat 4. Updated 2026-11-07.