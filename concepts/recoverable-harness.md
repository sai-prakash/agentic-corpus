# Recoverable harness

**Definition.** A harness change is admissible only if a later process can restore a typed observational equivalent of the pre-change state on states other than the one where the change was made.

**Contrast.** Capability gain is not recoverability. EvoUndo (2608.28363): 197 of 600 one-shot mutations improve the score and then fail recoverability verification; conventional repair recovers 0/197 under the original recovery language. Logos (2608.28553): shared memory inside one process is a single failure domain — an append-only transcript plus peer processes lets eighty sessions resume with no repeated effect after kills at the four tool-call boundaries. Nash / Second Mind: a recovery file that a fresh session can read is operational state; a conversation the next session must reconstruct is only history. Full snapshots fail selective undo because they clobber later edits. HarnessEvolve (2609.00829): the performance gate is a weak recoverability proxy — refuse an edit that lifts the current batch and drops recent ones, then pick a held-out snapshot. That stores competence across batches; it is not yet a typed restore on a second state. HoH versioned project histories make the iteration addressable; they do not by themselves prove that iteration 69 can still authorize iteration 1's contract.

**Heat.** 5. Updated 2026-09-03.

Sources: EvoUndo 2608.28363; Logos 2608.28553; Nash / Second Mind 2094080706544619893; HarnessEvolve 2609.00829; Harness-of-Harness 2609.01481.

Publish angle: 6h lab — mutate one surface, capture a witness, replay undo on a second state. Admit the mutation only if both restores match the contract.
