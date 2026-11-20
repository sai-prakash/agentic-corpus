# Semantic Context Handoff

Long-horizon agents separate a compact semantic state (current interpretation) from an addressable archive of action-observation evidence that can re-enter context on demand when later execution signals revision is needed.

**Contrast:** full-history prompting retains every prior interaction; state–evidence separation keeps interpretation lean while preserving the route back to supporting evidence without extra retrieval models.

**Sources (last 14 days):**
- arXiv:2611.24357 (submitted 18 Nov 2026, Guolong Zheng et al.) — SCH lifts Pass@1 from 80.0% to 86.9% on 150 SWE-bench tasks via evidence recovery at essentially unchanged cost; complete system 43% fewer tokens than strongest baseline.
- X discussion (e.g. @Propriocetive 20 Nov 2026) highlighting the diagnosis/evidence separation and recovery path.

**Shippable lab:** build a 60-line SCH prototype (state update + evidence archive + re-entry trigger on test failure) over 10 synthetic multi-step coding sessions and measure token use and success against full-history prompting.

Heat 4. Updated 2026-11-20.
