# ParetoSaddler

Harness optimization that jointly improves quality and cost by separating intermediate candidate promotion from final deployment selection.

## Contrast
Joint quality–cost harness search is not quality-only search. Applying the deployment preference at every intermediate step can discard candidates that enable later improvements.

## Sources
- arXiv:2611.02079 (1 Nov 2026)
- X: @omarsar0 (3 Nov 2026) summarizing the key insight and numbers

## Lab seed
Build a minimal AutoSaddler-style optimizer. Run each candidate 3×. Promote if Bayesian bootstrap shows credible progress on quality *or* cost. Select final harness only on the Pareto front under the deployment preference. Measure on a small multi-step tool-use task.
