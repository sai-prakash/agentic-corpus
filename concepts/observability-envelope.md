# Observability envelope

**Definition.** What an evaluation can claim is the set of behaviours a reviewer can trace to source turns. A model-generated label is inside that set only if the report still points at the turns.

**Contrast.** A judged label is not an observation. Transect (2610.08364, Pilditch / Voudouris / Abbas / Ududec, submitted 6 Oct) separates the evaluation-family vocabulary from the judge model, and aligns events, token use, sub-agent activity, and labels on one turn timeline. The demonstration run is an AI R&D evaluation of almost 13 million tokens. The shipping repo is https://github.com/AI-Safety-Institute/transect (Inspect Scout). A transcript assistant that cannot be audited is the failure mode the package is built against.

**Heat.** 4. Updated 2026-10-08.

Sources: 2610.08364 https://arxiv.org/abs/2610.08364; repo https://github.com/AI-Safety-Institute/transect.

Publish angle: run Transect on one long Inspect log. Arm A is a free-form judge summary. Arm B is the turn-aligned report. Falsifier: if a reviewer cannot open a label and land on the source turns, Arm B failed the envelope.
