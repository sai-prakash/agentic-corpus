# Harness-engine pairing

**Definition.** The harness and the inference engine hold complementary state. A request may carry intent and constraints; only an outcome message closes the control.

**Contrast.** An engine ack is not a completed control. HEAR (2610.06597, submitted 5 Oct) separates protocol semantics from the optimization policy: a preference is not a requirement, a state observation does not reserve resources, and "accepted" does not mean "completed." On SCBench the cache-aware instantiation is 1.61× batch throughput and 2.23× lower median time-to-first-token. BrowseComp-Plus and DeepResearchBench role configs are 1.23× and 2.45× end-to-end, with no observed task-quality drop. The recap at https://x.com/KostyaAI/status/2107382706937921978 matches those figures and the semantic split. A harness that assumes the cache was prepared because the API returned is the falsifier.

**Heat.** 5. Updated 2026-10-07.

Sources: HEAR 2610.06597; recap https://x.com/KostyaAI/status/2107382706937921978.

Publish angle: freeze the loop on a shared prefix. Arm A sends bare requests. Arm B attaches context identity, version, reuse intent, and a waiting constraint, and waits for an outcome. Report KV reuse and time-to-first-token.
