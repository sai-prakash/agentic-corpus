# GraphRAGProv

**Definition.** Architecture that runs SPARQL over source-grounded RDF graphs and returns both answer bindings and how-provenance polynomials recording which statement occurrences were used and how they were combined; each occurrence links to exact source text.

**Contrast.** GraphRAG is not opaque retrieval-plus-LLM generation; the derivation itself is a first-class, inspectable object that can surface extraction or query errors even when the final answer is correct.

**Evidence.** El Amrani & Galárraga (arXiv:2610.37237, submitted 27 Oct 2026): interactive demo on 400 cases from two multi-hop QA benchmarks reveals extraction and query errors. Related how-provenance visualization work by the same authors. Heat 4. Updated 2026-10-29.

Sources: https://arxiv.org/abs/2610.37237.

Publish angle: implement SPARQL + how-provenance (or a simplified path trail) on a toy multi-hop GraphRAG setup and measure the rate at which the provenance trail flags incorrect supporting statements that the answer text alone does not reveal.
