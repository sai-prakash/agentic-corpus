# Per-query harness

**Definition.** Roles, instructions, tools, and communication structure are chosen for the query. A fixed harness is a baseline, not the method.

**Contrast.** Executing alternatives at inference time is not a predicted harness. SHIFT (2610.04137, submitted 2 Oct) trains a local architect and a value function on measured executions, then runs Monte Carlo tree search per query. Across 9,193 tasks in six benchmarks with a Gemini 3.5 Flash executor, mean accuracy is about 80%, 7.2 points over the strongest of 17 baselines. A cheaper mode beats every baseline at 32% fewer execution tokens. Joint choice of structure, instructions, and tools beats either alone by up to 9.1 points. STITCH (2609.38912, submitted 30 Sep) is the compile-time sibling: reusable primitives mined from failed trajectories, composed at test time, up to 12 points over fixed harnesses, 2.7% overhead, 638× cheaper than generating harness code from scratch. SHIFT searches a predicted tree; STITCH stitches a library. Do not read 80% as a new base model.

**Heat.** 5. Updated 2026-10-07.

Sources: SHIFT 2610.04137; STITCH 2609.38912.

Publish angle: freeze the executor. Arm A is one human harness. Arm B picks structure, instructions, and tools from a logged value model. Report accuracy and execution tokens. Falsifier: if tools-only matches the joint pick, the harness is not the gain.
