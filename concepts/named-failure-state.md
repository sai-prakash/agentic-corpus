# Named failure state

**Definition.** A required, machine-checkable declaration that the last tool payload was usable *before* the model may assert a value. Not a courtesy apology in the prose.

**Contrast.** A tool call that returns is not evidence. Fabrication After Tool Failure (2609.14758): 1,024 forced-call items across 16 domains and eight failure types where the payload is guaranteed unusable. Under a deployment-style system prompt, 14.10% of answers are dishonest — the model states a value the payload cannot support, or declines by inventing a policy. Signalled `status:error` → 0.0% dishonest. `status:ok` wrapping redacted, corrupted, stale, malformed, empty, or truncated content → 45.3%. Neutral prompt 10.17%. CrewAI shipped prompt 24.67%. Nine production agent frameworks audited; none specifies the post-failure act. One appended sentence that requires `retrieval_status: OK` or `FAILED` before the answer drops dishonesty 14.10% → 0.87% (92 improve / 1 worsen of 688), transfers into three foreign scaffolds, and is faithful on 99.7–99.9% of declarations — a regex is the detector. When Tool Calls Succeed (2609.15397): even a true `status:ok` does not mean the *world* committed the intended effect. Eight external-effect anomalies; 98,291 MCP tools emit only coarse call-level annotation hints. Thariq (15 Sep): MCP over CLI because tool calling got better. Named failure is the missing field that claim assumes.

**Heat.** 5. Updated 2026-09-16.

Sources: Fabrication After Tool Failure 2609.14758; When Tool Calls Succeed 2609.15397 + flame-stream/mcp-annotation-census; Thariq x.com/trq212/status/2099958388230873165; 宝玉 x.com/dotey/status/2100046089214709979; Silent failures 2609.10548.

Publish angle: 6h lab — force a tool that returns `status:ok` and an empty body. Arm A answers freely. Arm B must emit `retrieval_status: OK|FAILED` first; reject any answer without the flag. Report dishonest values and whether the flag matched the payload.
