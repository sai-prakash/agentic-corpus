# Context as file

**Definition.** Working context is a file the model may edit, not a buffer a harness truncates. The edit syncs into the live context. Multi-agent work is several such files, not one shared transcript.

**Contrast.** A hand-coded compaction rule is not a context file. Traverse (2609.37082) gives the agent a Seal Memory tool: summarize, reset, continue from query ⊕ sealed memory; training every segment induces Seal Collapse, so only the post-seal segment is trained. Context Language Models (2609.37725 + github.com/facebookresearch/context-language-models) skip the tool and hand the model Bash on the file. Zero-shot vs SOTA context management: BrowseComp-Plus +11.4% accuracy and 21.5% fewer FLOPs; 12-hour EdgeBench +5% scores and 59% fewer FLOPs; 24-hour multi-repo swarm +65% improvement at the same compute. Online RL on Qwen3.5-9B: +47.6% BrowseComp-Plus accuracy and 12% fewer FLOPs. The tax is prefix-cache breakage; Suffix Cache Reuse recovers 35% server compute vs standard SGLang. A sealed segment is still not an admissible Return View (TRACE). An unrestricted file edit is still not a grant.

**Heat.** 5. Updated 2026-10-02.

Sources: Context Language Models 2609.37725 + github.com/facebookresearch/context-language-models; Traverse 2609.37082 + ByteDance-BandAI/Traverse; TRACE 2609.33517; x.com/stretchcloud/status/2105744558797795750.

Publish angle: one long trace, one planted early wrong fact. Arm auto-compact, arm Seal, arm context-file edit. Score whether the wrong fact survives, whether the answer recovers, and whether the edit invalidated the cache.
