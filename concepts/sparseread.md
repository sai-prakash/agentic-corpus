# SparseRead

Training-free reading control layer that governs content admission for agent tools so only sparse needed evidence enters context.

**Contrast:** naive full-object read is not a gated admission process with intent tracking, adaptive backends, and a budgeted gate plus faithful full-view fallback.

**Sources (last 14 days):**
- arXiv:2608.22237v2 (revised 7 Nov 2026) — Zedong Liu et al. Up to 92.9% token and 89% wall-time reduction across six models and five scenarios while preserving or improving quality in 97% of settings; portable to three frameworks.
- Public repo and project site (https://github.com/Zedong-Liu/SparseReading, sparseread.pages.dev) plus recent X discussion of harness integration.

**Shippable lab:** insert a SparseRead-style preview/read gate in front of file or web tools in an existing harness; measure token use and task score versus full read on long documents or multi-file audits.

Heat 4. Updated 2026-11-13.
