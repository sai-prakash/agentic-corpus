# Agent sleep

**Definition.** Periodic offline selectionist consolidation that protects coherent traces and weakens the rest, paid as the price of continuous plasticity under finite capacity.

**Contrast.** Selectionist consolidation (sample, test what holds, keep/weaken) is not continuous instructionist memory mutation (per-fact ADD/UPDATE/DELETE/NOOP while the agent is still interacting).

Persistent agents already show the symptoms of unchecked plasticity: semantic drift, noisier retrieval, propagation of stored errors, capacity saturation. Haber & Tononi map the three phases of the RRR account of sleep onto feasible digital memory operations and note that engineers are independently rediscovering “what to forget and when.” Falsifiable prediction: selectionist methods will outperform instructionist ones as stores grow large. The claim is about continuous learning itself, not a biological metaphor.

**Heat.** 4. Paper + recent discussion (1–3 Nov 2026).

Sources: arXiv:2611.02216.

Publish angle: implement a simple offline consolidation pass (stochastic sampling + coherence test + prune) on a growing memory store and compare drift and accuracy against a per-fact instructionist baseline as the store scales.
