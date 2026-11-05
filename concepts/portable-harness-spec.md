# Portable harness specification

**Definition.** An explicit, versioned record of the functional components of the harness that actually ran with a given model, so configurations can be specified, compared, and audited across systems and within a run.

**Contrast.** A portable harness specification (eight components + sequence of effective configurations) is not a model card or an agent card.

Gertler, Novelli & Floridi decompose the harness into eight recurring functional components that keep the same meaning across implementations. Different harness configurations produce several-fold differences in reported scores for the same model; much of an agent’s attack surface lives in the harness. Existing cards document releases and operations but not the sequence of effective configurations inside a run (especially when the agent can edit its own tools). The proposed record is the missing documentation layer.

**Heat.** 4. Paper + discussion (29 Oct 2026).

Sources: arXiv:2610.40917.

Publish angle: take two open coding harnesses, map them onto the eight components, and produce a minimal versioned record that captures the configuration used for a short run.
