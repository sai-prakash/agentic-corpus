# Independent policy distillation

Specialist memory-writing and retrieval policies can be distilled independently from frontier trajectories into small models and composed with a fixed generator without joint optimization, outperforming compositions of separately RL-trained specialists.

**Contrast:** composing independently distilled specialist policies is not the same as joint multi-policy training or distilling all memory behavior into a single set of model weights.

**Sources (last 14 days):**
- arXiv:2611.30230 (submitted 23 Nov 2026) — independent distillation of memory-writing + sequential retrieval into 3B models yields 73.1% on LongMemEval-style vs 36.2% for RL-specialist composition; ablations show cross-specialist compatibility matters.
- arXiv:2611.26361 (submitted 19 Nov 2026, IBM) — self-distilled lessons consolidated into guidelines; optimal memory size is model-dependent; deployed in production agent stacks.

**Shippable lab:** collect a small set of agent trajectories, distill a compact memory-writer and a retriever policy into small models (or prompt-distilled equivalents), compose them with a frozen answerer, and measure long-horizon recall/use accuracy against a joint baseline or naive RAG memory.

Heat 4. Updated 2026-11-25.
