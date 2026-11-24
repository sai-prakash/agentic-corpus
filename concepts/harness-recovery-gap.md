# Harness recovery gap

Public evidence shows recovery mechanisms in agent harnesses and runtimes are frequently exercised yet rarely produce a full recovery of the run.

**Contrast:** presence of a recovery feature (checkpoint/resume, undo, human approval, trace log, sandbox) is not the same as that feature actually restoring a broken run to a successful or recoverable state in real use.

**Sources (last 14 days):**
- arXiv:2611.27090 (submitted 20 Nov 2026, Kaviru Hapuarachchi) — of 128 real-use reports across 50 systems, only 19 describe full recovery; checkpoint/resume recovered in 1 of 27 reports, rollback in 1 of 15; no shipping harness offers compensation for external side effects. Research runtimes evaluate guarantees on benchmarks but show none reported in operation.
- Independent X posts summarizing the result and linking the paper (notably @arkyyang 23 Nov with detailed takeaways for product builders on resume/undo weakness and the value of full event logs; multiple additional short summaries and links the same day).

**Shippable lab:** instrument a small coding-agent loop with injected failures (tool timeout, process crash, unintended file mutation) and measure full/partial/fail rates for each recovery path (resume from checkpoint, undo scoped only to agent-written files, full event-log replay). Compare against the paper’s public-report baselines.

Heat 4. Updated 2026-11-24.
