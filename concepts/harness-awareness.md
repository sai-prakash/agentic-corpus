# Harness awareness

A trust-separated pattern in which the host injects a small, fresh, verified snapshot of operational state (tool health, recent failures, resource pressure) before a consequential action, while keeping measurement, enforcement, and dispatch authority itself. Closes the gap called operational blindness: tool descriptions say what is possible, not what is healthy right now.

**Contrast:** a tool description is not operational health at the moment of use.

**Sources (last 14 days):**
- arXiv:2611.05391 (submitted 13 Sep 2026; HTML and discussion circulating 5 Nov 2026) — Manu Agrawal, Shrey Nagpal. ToolRoute ablation: verified tool-health state reduced mean observable policy regret 96.9% and raised single-dispatch completion from 69.4% to 95.8% across three frontier models. Live fault-injection replication: regret to zero, 9/9 vs 5/9.
- X discussion, 5 Nov 2026, summarizing the 96.9% regret reduction.

**Shippable lab:** wrap one existing tool-calling harness with a host-side health probe (latency, error rate, recent failures) that injects a 50-token verified snapshot before dispatch; measure policy regret and completion rate with the probe on vs off under injected faults.

Heat 4. Updated 2026-11-06.