# Model Hardware Standard

**Definition.** A shared driver spec so an agent can operate lab and factory devices through read/write primitives plus natural-language safety tags. Control paths: MCP, CLI, or a code file that continues after the model stops thinking.

**Contrast.** MCP is software I/O. MHS is hardware I/O. The kill-switch and physical limits belong in the driver, not in the system prompt. A code-file path that outlives the model is the threat-model item.

**Heat.** 4. Updated 2026-08-28.

Sources: Anthropic MHS research preview (27 Aug 2026); partner traces (Janelia, Genentech, QuEra, LeRobot, Raspberry Pi). Not open source yet.

Publish angle: name the bind (who may attach an agent to a machine) before you demo the robot arm.
