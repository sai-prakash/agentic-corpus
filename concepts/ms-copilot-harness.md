# Microsoft Copilot harness

**Definition.** A shared, multi-model agent execution runtime (instructions, context management, tool orchestration, sandbox, subagent delegation, skills and MCP) that Microsoft has standardized across Copilot surfaces and now exposes via Foundry managed service and SDK.

**Contrast.** The harness is the durable system that lets you switch models without rewriting the agent loop; it is not the model itself. Changing the harness moved pass rates more than changing the model in Microsoft’s internal comparisons.

**Evidence.** Official Microsoft and GitHub blogs (28 Oct 2026, Schuchman & Fedorov): powers Copilot Code, Studio, app, CLI, VS Code; Foundry public preview + downloadable multi-language SDK (github/copilot-sdk, MIT, packages for TS/Python/Go/.NET/Java/Rust). Internal numbers: +10.8 / +22.1 pp pass-rate lift vs Standard harness on same tasks; tool-call failure recovery 84–91% continued trying vs <7%, with >7× higher later success. Heat 5. Updated 2026-10-30.

Sources: https://blogs.microsoft.com/blog/2026/10/28/introducing-the-microsoft-copilot-harness-unlocking-the-potential-of-truly-multi-model-agentic-work/, https://devblogs.microsoft.com/foundry/microsoft-copilot-harness-in-foundry/, https://github.com/github/copilot-sdk.

Publish angle: stand up a small multi-step tool-using agent on the Copilot harness (or a thin local analogue) with two models, inject tool failures, and measure recovery rate and final success versus a minimal loop.
