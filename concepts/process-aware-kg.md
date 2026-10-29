# Process-Aware Knowledge Graph

**Definition.** Typed property graph that fuses OData service metadata with BPMN reference processes so hybrid retrieval can expand along process edges and supply schema/value constraints for multi-step service invocation.

**Contrast.** Enterprise API endpoints are not independent items in a flat index; process edges and cardinality constraints supply the order and payload validity that chunk-based discovery misses.

**Evidence.** Khan & Farea (arXiv:2610.37242, submitted 27 Oct 2026): +5.7 Recall@3 on low-lexical-overlap process-chain queries (n=74); agent completion 38.7% vs 10.3% on 81 multi-step tasks. Gains disappear on services without a process layer. Heat 4. Updated 2026-10-29.

Sources: https://arxiv.org/abs/2610.37242.

Publish angle: build a minimal typed graph of two services linked by a BPMN-style process edge, retrieve with dense + edge expansion, and measure whether an agent produces fewer invalid payloads and higher multi-step completion than pure chunk retrieval.
