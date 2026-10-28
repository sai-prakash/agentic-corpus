# RSIV-Harness

**Definition.** Recursive self-improvement applied to an agent harness for open-domain conversational text-to-visualization: model weights stay fixed; the harness is revised from the agent's own failure traces under a four-layer stability framework (anchor and memory checks; refine or restore).

**Contrast.** The harness revises itself from experience while the model stays frozen. Static predefined harnesses leave recurring failures unaddressed; the four-layer checks prevent unbounded or unstable revisions.

**Evidence.** arXiv:2610.35316 (submitted 26 Oct 2026): on ODAC-Vis (640 tasks covering open-domain discovery, ambiguity, multi-turn refinement and executable charts) a single round improves all six metrics, with +28.02 points executability and +34.01 points chart structure relative to the seed harness.

**Heat.** 4. Updated 2026-10-28.

Sources: https://arxiv.org/abs/2610.35316.

Publish angle: take a simple text-to-chart harness, collect failure traces on a small open-domain task set, propose harness revisions, accept only those that pass an anchor/memory check, and measure executability and structure scores before versus after one RSI round.
