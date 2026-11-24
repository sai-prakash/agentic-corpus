# Harness Memory Protocol

Protocolized, grant-controlled long-term memory that outlasts any single harness session and can be shared across different agent harnesses.

**Contrast:** memory that lives inside one harness’s session or process is not a tree of records with per-node grants that any conforming harness can read and write.

**Sources (last 14 days):**
- HarnessRouter Community Edition (Apache-2.0) Unified Harness Protocol Memories chapter and recent releases. https://github.com/HarnessRouter/harnessrouter
- High-engagement X post by @_avichawla (23 Nov 2026, 350 likes / 468 bookmarks) demonstrating cross-harness recall (Claude Code preferences recovered in a fresh Codex session) plus supporting summaries and the Product Hunt feature of Harness Memory.

**Shippable lab:** stand up the open-source HarnessRouter, create a shared memory, drive two different harness bases (or simulated clients) against the same memory tree, and verify cross-harness recall and grant enforcement.

Heat 4. Updated 2026-11-24.
