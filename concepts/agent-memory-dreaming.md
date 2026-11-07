# Agent memory dreaming

Offline consolidation step (Anthropic "dreaming") that reads past transcripts and current notes, corrects errors, builds linked representations (wiki), and promotes a small set of high-value notes so the harness can pre-load them into future sessions.

**Contrast:** writing notes during the task is not the same as offline consolidation that corrects mistakes and builds searchable structure for later sessions.

**Sources (last 14 days):**
- Anthropic Engineering blog, 6 Nov 2026 (Lance Martin) — four-layer hierarchy (transcripts → notes → representations → injected context). Dreaming tests notes against transcripts, builds wikis, floats notes. Wiki+search 61% vs search 53% on large corpus; Harvey multi-doc 87% vs 73%; smaller memory folder enabled further progress in long-horizon game.
- X discussion circulating 6–7 Nov 2026 (AnthropicAI post and replies).

**Shippable lab:** take a multi-session agent log, implement an offline dreaming pass that rewrites notes and builds a small wiki, then measure retrieval accuracy and token cost on a held-out question set with vs without the consolidated layer.

Heat 5. Updated 2026-11-07.