# MCP silent drift

**Definition.** A change to what a registry identity actually is — advertised tools, schemas, or remote host — that the installed client never sees. Not a new server with a new name.

**Contrast.** A registry row is not a pin. Same Name, Different Server (2609.14119): Aug 2026 public MCP registry, 21,643 servers / 72,606 version records / source for 14,353; eight-class scanner vs 414 hand labels. Unauthenticated network exposure 9.57% of scanned servers; observed high-severity 11.14% corrects to ~7.6% after precision. 51.1% of multi-version servers change their advertisement; 40.6% silently; 4.2% redirect the remote endpoint to another host under the same registry id. The protocol does not surface that move to clients already installed. Silent drift OR 2.96 for high-severity (95% CI [2.56, 3.42]). Popularity is weak (OR 0.78 per log-star). MCP registry draw (2609.10962) + mcp-probe: curated brochure handshake 66.7% vs raw 48.8%. When Tool Calls Succeed (2609.15397): annotations on 98,291 tools still cannot express transactional boundary capabilities. Thariq: MCP is the better integration surface. Drift says the surface can change under you after the grant.

**Heat.** 5. Updated 2026-09-16.

Sources: Same Name, Different Server 2609.14119; MCP registry draw 2609.10962 + itguruhaseeb/mcp-probe; When Tool Calls Succeed 2609.15397 + flame-stream/mcp-annotation-census; Thariq x.com/trq212/status/2099958388230873165; Scanning the Harness 2609.07360.

Publish angle: pin digest and endpoint host at install. Replay the same task against a second version that keeps the registry id and moves the host. The unpinned client should follow; the pinned client should refuse before the first call.
