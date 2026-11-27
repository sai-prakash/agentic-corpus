# Model-driven context

Agent harnesses typically trigger compaction automatically when the context window fills, summarizing history on the model's behalf. The alternative is a context API that lets the model itself inspect history, choose ranges to collapse into summaries, and later retrieve archived events.

**Contrast:** automatic harness-triggered summarization is not the same as model-driven control through an explicit API that surfaces usage, allows selective compaction, and preserves originals for retrieval.

**Sources (last 14 days):**
- arXiv:2611.34147 (submitted 25 Nov 2026, NVIDIA): model-driven vs harness-driven in NOOA; GPT-6.1 score rises from 21% to 56% at 32K on OfficeQA Pro v2; Kimi gains with up to 41% fewer input tokens; models differ in usage frequency and aggression; prompt changes timing ("context anxiety"); KV cache reuse on unchanged suffix cuts prefill compute by up to 15% with no accuracy change.
- GitHub NVIDIA-NeMo/labs-OO-Agents: open-source NOOA harness exposing model-callable context and event APIs as one of six core capabilities.
- NVIDIA technical blog (Jul 2026, still current): six agent harness capabilities including model-callable harness APIs for context and events.
- Independent X threads (26-27 Nov): @Ldataengineer, @muratcan, @rohanpaul_ai, @itarutomy discussing results, model variance, and implications for co-design of models, harnesses, and inference engines.

**Shippable lab:** In a minimal harness, expose a context API (list recent events, compact a range to a tagged summary, retrieve by tag). Run the same multi-document research task under threshold-triggered summarization versus model-driven calls. Measure accuracy and total input tokens at 16K-32K budgets across two models. Optionally add a simple KV-reuse simulation.

Heat 5. Updated 2026-11-27.
