# Harness Memory Protocol

Protocolized, grant-controlled long-term memory that outlasts any single harness session and can be shared across different agent harnesses.

**Contrast:** memory that lives inside one harness’s session or process is not a tree of records with per-node grants that any conforming harness can read and write.

**Sources (last 14 days):**
- HarnessRouter Community Edition (Apache-2.0) Unified Harness Protocol Memories chapter and recent releases (memory-by-default ~9 Nov 2026, protocol updates 10–12 Nov). https://github.com/HarnessRouter/harnessrouter
- X announcements and Product Hunt feature of Harness Memory / Harness Memory Protocol (12 Nov 2026).

**Shippable lab:** stand up the open-source HarnessRouter, create a shared memory, drive two different harness bases (or simulated clients) against the same memory tree, and verify cross-harness recall and grant enforcement.

Heat 4. Updated 2026-11-14.
