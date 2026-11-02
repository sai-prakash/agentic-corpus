# dsh-superagent (Router-Worker Proactive Coding Agent)

**Slug:** dsh-superagent  
**Heat:** 4  
**Updated:** 2026-11-02

Proactive coding agent for a single GitHub repository, packaged as a DeepSeek Harness bundle. A Router receives authorized requests, opens work items, and dispatches to isolated Worker sessions/directories; results return in the original conversation. Designed around an attention budget: act only when asked or by rule, surface only what needs a human.

## Triple / contrast
Router-Worker with isolated sessions and explicit attention budget is not a single-session coding agent or an unsupervised always-on loop.  
Isolation keeps parallel work from polluting one context; the budget keeps human attention finite.

## Sources
- github.com/deepseek-ai/dsh-superagent-prototype (DeepSeek Harness team; released 31 Oct 2026; MIT; research prototype)
- Companion architecture writeup / media reports of Super-agent design (Router-Worker, simulation p95 15.7 min vs 29.5 min single-session)

## Shipable lab (6 h)
Stand up a toy router (queue of "GitHub events") and two worker processes with separate working directories. Feed a synthetic stream of 20 mixed requests. Measure: number of human attention events, wall time to completion, and context isolation (no cross-contamination of files). Compare against a single shared-session baseline.
