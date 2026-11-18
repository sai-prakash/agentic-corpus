# Agent harness anatomy

An agent harness is the program around a language model that turns replies into actions: request construction, tool execution, permission decisions, conversation storage, failure recovery, and visibility. Most of these decisions live only in code; the paper writes them as invariants to test via 30 decision cards (options, costs, invariant, corner cases, test, evidence tag), six cause classes, and a checklist.

**Contrast:** implicit code-level decisions that every new harness rediscovers are not explicit invariants with planted-change tests and evidence tags that can be applied to any harness.

**Sources (last 14 days):**
- arXiv:2611.19960 (submitted 15 Nov 2026, Resham Joshi) — system model with trust boundaries; 30 decision cards in six groups; of 83 invariant clauses 56 tagged Tested; checklist applied to the author’s own harness (11 hold, 14 do not, 5 untested). No ranking of other systems.
- X discussion and mentions of the paper as a practical checklist for people building their own harnesses (including in daily AI digests).

**Shippable lab:** take a minimal loop (model call → tool call → append to history). Write three decision cards from the paper (e.g., tool timeout behavior, permission default, conversation truncation). Implement the invariant tests with a scripted provider and planted failures; report which hold on the toy harness.

Heat 4. Updated 2026-11-18.
