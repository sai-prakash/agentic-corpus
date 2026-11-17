# Neural Context Protocol (NCP)

An MCP-native memory bus for multi-agent systems: agents share bounded, trust-weighted context and emit directed signals without replaying full transcripts.

**Contrast:** replaying entire conversation histories (or relying solely on host-native memory) is not an explicit shared bus with trust weighting, bounded retrieval, and cross-host durability.

**Sources (last 14 days):**
- GitHub repo kulkarni2u/neural-context-protocol (activity around 16 Nov 2026) and PyPI package neural-context-protocol.
- README and protocol description documenting the MCP endpoint, remember/recall/whisper tools, and reported token reductions (~13× vs raw replay).

**Shippable lab:** spin up the local SQLite NCP server, connect two simple agents (or two Claude/Codex sessions) via the MCP tools, have them share one durable memory atom and one whisper, then measure context tokens versus a baseline that pastes the full prior transcript.

Heat 4. Updated 2026-11-17.
