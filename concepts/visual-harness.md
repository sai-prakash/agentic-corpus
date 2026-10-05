# Visual harness

**Definition.** A visual harness keeps past observations in original form and lets the model retrieve and reorganize those frames. The memory is the pixels, not a caption of them.

**Contrast.** A caption of the frame is not the frame. VISTA (2610.02200 + github.com/joshhhhhan/VISTA + vista-research.github.io) gives a general multimodal model long-horizon vision and a lossless visual memory. On ARC-AGI-3, Claude Opus 5.0's Relative Human Action Efficiency moves from 40.68 to 100.00, all 25 public games, 57.4% fewer actions than first-time humans. Mem++ (2610.02002) is the document sibling: it stores the source whole and filters by time at read, instead of distilling facts at write. A summary harness is the falsifier if the caption arm matches the frame arm on the same games.

**Heat.** 5. Updated 2026-10-05.

Sources: VISTA 2610.02200 + github.com/joshhhhhan/VISTA + https://vista-research.github.io/; author post https://x.com/JoshHanHi/status/2106536875586404707; Mem++ 2610.02002.

Publish angle: freeze the model. Arm A: text summaries of past screens. Arm B: retrieve the original frames. Report completion and action count.
