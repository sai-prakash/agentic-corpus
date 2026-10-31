# FoG: Evidence-Coverage Training for KG Agents

**Slug:** fog-evidence-retrieval  
**Heat:** 4  
**Updated:** 2026-10-31

Framework that trains knowledge-graph agents to retrieve the supporting triples behind their answers, not only the answers themselves.

## Triple / contrast
Training for evidence retrieval is not answer-only RL.  
ECPR credits first retrieval of each supporting triple; synthesis ensures every question carries its evidence by construction.

## Sources
- arXiv:2610.37405 (Sun et al.; submitted 27 Oct 2026) — paper

## Shipable lab (6 h)
On a small KG (e.g., a few hundred triples from a public KGQA subset), implement a lightweight version of evidence-grounded synthesis + a process reward that scores triple coverage. Compare answer accuracy and evidence coverage of a 7B model with vs without the reward. Report the gap.
