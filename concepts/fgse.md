# FGSE

Falsification-Gated Self-Evolution for deciding when an experience-derived lesson should enter persistent agent memory.

**Contrast:** writing a lesson directly from local success is not treating it as a structured hypothesis that must survive temporary-state probes (target-transfer, falsification, archived-regression) before commit.

**Sources (last 14 days):**
- arXiv:2611.14326 (10 Nov 2026) — Runxuan Tang, Haoyu Gao et al. WebArena 39.8%, AppWorld 78.8%, τ Pass¹ 0.724/0.487; falsification failures reduced to 5.0%, regression damage 1.3%, harmful updates 3.6%.
- Independent research digest mentions (Justin Perea Nov 11 digest and related X discussion of memory admission).

**Shippable lab:** wrap a memory-writing agent with a temporary-state hypothesis tester; measure task success and regression damage against direct write on a small verifier-rich suite (web or tool-use).

Heat 4. Updated 2026-11-13.
