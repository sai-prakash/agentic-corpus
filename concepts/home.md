# HoMe

Evaluation-driven optimization of the memory-system harness.

The harness (code + prompts + configs) that builds, maintains, retrieves, and answers from long-running assistant memory is usually edited by hand. Unrestricted edits do not reliably produce structural improvements.

HoMe treats harness search as an evaluation loop: each candidate is derived by editing any part of a previously evaluated harness; session-level memory versioning and execution traces localize shared failure modes to specific sessions and components; candidate gating, smoke tests, adaptive sampling, and memory reuse keep the cost low.

On ReMe (agentscope-ai/ReMe) it improved LongMemEval-S by 2.8 pp and BEAM-1M by 5.4 pp while cutting query tokens 59% and 41% after only six formal evaluations.

Contrast: free-form manual harness editing is not localized, evaluation-gated structural search.

Sources: arXiv:2611.34624, agentscope-ai/ReMe (HoMe plugin).

Heat: 5.

Lab: implement a minimal diagnosis loop on a toy memory harness (versioned sessions + failure cluster) and compare token use vs the baseline prompt set.
