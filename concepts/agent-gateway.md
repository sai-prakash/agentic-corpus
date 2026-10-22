# Agent gateway

**Definition.** Unified proxy that fronts LLM provider traffic, MCP tool servers, and A2A agent-to-agent flows under a single data plane with authentication, authorization, rate limits, guardrails, and observability.

**Contrast.** An agent gateway is not a collection of ad-hoc MCP servers or a separate LLM reverse proxy. It federates tools, applies consistent policy, and routes all three traffic types so that governance is not reimplemented per connector.

**Heat.** 4. Updated 2026-10-22.

Sources: https://github.com/agentgateway/agentgateway (~5.5k stars, Linux Foundation / Agentic AI Foundation); https://agentgateway.dev; Archestack coverage (21 Oct 2026).

Publish angle: clone the repo, follow the standalone quickstart, multiplex two MCP targets behind one listener, route one LLM provider call with a simple budget or failover rule, and confirm the OpenTelemetry traces show both tool and model spans. Optionally deploy the Kubernetes Gateway API controller if you already run a cluster.
