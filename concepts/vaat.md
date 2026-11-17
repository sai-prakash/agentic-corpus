# VaaT (Vision-as-a-Tool)

Visual reasoning is modularized into callable external MLLM utilities (VHarness with five atomic actions) rather than locked inside an agent's intrinsic vision.

**Contrast:** Thinking-with-Images (agent depends on its own vision to analyze observations and artifacts) is not Vision-as-a-Tool (text-only agents can fully offload; vision-capable agents can augment on demand).

**Sources (last 14 days):**
- arXiv:2611.17797 (13 Nov 2026) — Haolin Yang et al. Consistent gains in visual fidelity and geometric accuracy on Image-to-HTML, Image-to-SVG, and Image-to-3D.
- Project page https://vision-as-a-tool.github.io/ documenting the paradigm and VHarness.

**Shippable lab:** take a text-only coding agent that must produce HTML/SVG from a reference image. Add one VaaT-style tool that calls an external vision model to describe layout or extract geometry, then measure whether the generated artifact improves against a baseline that has no vision tool.

Heat 4. Updated 2026-11-17.
