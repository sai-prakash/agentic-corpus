# Problem Discovery — Pass 02 Deep Dive

Date: 2026-09-16

## Decision rule

This pass does not ask whether a workflow is painful. It asks whether a small entrant can capture value *after accounting for incumbent capabilities*. A candidate advances only if there is evidence for all four: repeated pain, economic consequence/current labor spend, an unresolved action layer, and a cheap artifact-level pilot.

## Current frontier

### A. Accounts-payable exception resolution — ADVANCE, but narrow aggressively

**Observed problem:** invoice capture/matching is increasingly automated, but mismatches still create human investigation, routing, chasing, correction and release work across ERP + email/tickets + procurement/receiving/vendor.

Primary/strong evidence:
- Ardent Partners 2024 benchmark: average invoice exception rate 14.0%; straight-through 32.6%; 21.8% of staff time spent on supplier inquiries; average processing cost $9.40 and 9.15 days. Source: https://d15fjz85703yz4.cloudfront.net/7117/2227/2612/ardent-partners-state-of-epayables-2024-money-never-sleeps-PAX-NA-SRR-2406-2585.pdf
- Ardent 2026 commentary on the 2025 survey: average exception rate 18.4%; supplier inquiry time 21.9%. Source: https://payablesplace.ardentpartners.com/2026/01/state-of-epayables-part-nine-ap-benchmarks-and-best-in-class-performance/
- Ardent 2026 State of AP commentary: high exception rates and slow approvals tied at 48% as leading AP challenges. Source: https://payablesplace.ardentpartners.com/2026/08/the-state-of-ap-2026-pt-3-challenges-in-2026-familiar-friction-rising-stakes/
- Current jobs explicitly hire humans for this residual work. Koch requires investigation/resolution of PO/GR/IR mismatches and stakeholder/vendor follow-up; Mettler Toledo calls PO/non-PO exception handling a major responsibility; Masimo requires independent research and follow-up on receiving/matching discrepancies. Sources: https://in.linkedin.com/jobs/view/ap-invoice-processing-analyst-at-koch-4463021093 ; https://jobs.mt.com/en/job/mumbai/associate-accounts-payable/36870/100470766432 ; https://in.linkedin.com/jobs/view/accounts-payable-specialist-1-year-contract-at-masimo-4457308472
- Practitioner example (illustrative, not representative): one team reports 60–80 exceptions/month on ~1,200 invoices, with one AP clerk spending roughly one day/week chasing receipts and PO changes. Source: https://www.reddit.com/r/Accounting/comments/1vy3kbw/how_do_you_handle_invoice_exceptions_that_fail/

**Counterevidence / incumbent pressure:**
- ServiceNow Source-to-Pay Operations already detects invoice exceptions, creates exception tasks and routes them to responsible people. Source: https://www.servicenow.com/docs/r/source-to-pay-operations/accounts-payable-operations/work-with-invoice-exceptions.html
- Oracle 26D Payables Agent introduces unified exception management and prioritized exception resolution. Source: https://docs.oracle.com/en/cloud/saas/readiness/erp/26d/fins26d/26D-fin-wn-f51289.htm
- Coupa, Stampli, Tipalti, Medius and others cover varying amounts of matching/exception workflow.

**Remaining hypothesis:** the opportunity is NOT another AP automation suite. It may be a cross-system *exception closer*: given an already-detected exception, gather evidence, identify the responsible actor, initiate the correction in the right system/channel, chase it, verify the ERP state changed, and release/escalate with an audit trail. The wedge must work with the existing ERP/AP stack rather than replace it.

**Kill test:** obtain 100 anonymized historical exceptions from 2 AP teams. For each, reconstruct cause, actors, messages, resolution and elapsed time. A prototype must correctly propose the next action and owner on >=80% of a held-out set, and reduce human follow-up steps materially. If most cases can already be closed inside the incumbent with no off-system chase, kill the thesis.

### B. Ocean container demurrage/detention prevention — PAIN VALIDATED, ENTRY POINT CROWDED

**Economic evidence:** the U.S. Federal Maritime Commission reports nine carriers collected roughly $15.4B in D&D charges from Apr 2020 through Mar 2025. Source: https://www.fmc.gov/detention-and-demurrage/

**Regulatory actionability:** most D&D invoice requirements remain in effect; invoice timing, required contents and dispute mechanisms create machine-checkable rules. The 2024 rule requires 30-day billing/dispute windows; a 2025 appeals decision struck one section on who may be billed, while other provisions remained. Sources: https://www.fmc.gov/articles/fmc-publishes-final-rule-on-detention-and-demurrage-billing-practices/ ; https://www.fmc.gov/articles/u-s-court-of-appeals-issues-decision-in-case-on-demurrage-and-detention-billing-practices/

**Counterevidence:** prevention is no longer white space. Current products/services advertise last-free-day tracking, risk alerts, operational chasing, evidence capture and dispute workflows: Lastfree, Trackberry, ZingTMS, CargoPilot, GoComet, Dockflow, Navo24/TrackingMCP and others.

**Decision:** do not build generic LFD alerts, container tracking or invoice auditing. Keep only as a research candidate if we discover a narrowly underserved segment/data source or a guaranteed outcome model incumbents cannot economically serve.

### C. Property-maintenance coordination — PAIN VALIDATED, COMMERCIAL WEDGE WEAKENED

Strong 2026 market evidence: Buildium's 2026 industry report says AI adoption rose from 20% in 2024 to 58% in 2025, but only 8% of companies fully automated any process; 56% of owners say maintenance support is the main reason they hired a property manager. Source: https://www.buildium.com/resource/2026-property-management-industry-report/

Resident consequence: Buildium reports maintenance as the strongest driver of renter satisfaction; satisfied renters are 57% more likely to plan renewal, while 39% say better maintenance follow-through would improve their experience. Source: https://www.buildium.com/resource/2026-renters-report/

Practitioner evidence: a 659-unit operator reports two maintenance coordinators and weak task/reminder support in AppFolio. Source: https://www.reddit.com/r/PropertyManagement/comments/1rqnf89/maintenance_coordination/

**Counterevidence is decisive:** Vendoroo publicly offers end-to-end AI maintenance coordination including triage, assignment, vendor scheduling/follow-up and invoice collection at roughly $5–$6/unit/month in published plans; Latchel and Property Meld also compete directly. Sources: https://www.vendoroo.ai/ ; https://www.vendoroo.ai/old-home-2 ; https://latchel.com/ ; https://propertymeld.com/what-is-ai-maintenance-coordination/

**Decision:** downgrade generic maintenance coordination. Only revisit if interviews reveal a segment incumbents systematically reject or a specific unresolved liability/compliance/quality-verification job.

### D. Provider credentialing/payer enrollment — PAIN VALIDATED, HEAVY DIRECT COMPETITION

Medallion's 2025 survey covers 507 U.S. healthcare organizations and reports 60% of executives saying slow credentialing/enrollment hurts the bottom line. Source: https://www.medallion.co/news/slow-credentialing-and-enrollment-are-draining-revenue-and-most-healthcare-teams-arent-tracking-the-loss-according-to-medallion-report

Recent practitioners still report payer backlogs, multi-state complexity, spreadsheets and manual status work. Sources: https://www.reddit.com/r/credentialing/comments/1ti235u/credentialing_timelines_feel_unrealistic_lately/ ; https://www.reddit.com/r/credentialing/comments/1v4xjl5/learning_insurance_enrollments_suffering/

**Counterevidence:** Medallion and Assured explicitly automate payer follow-ups, verifications, submissions, rosters and provider workflows. Sources: https://www.medallion.co/ ; https://www.withassured.com/

**Decision:** downgrade generic credentialing/enrollment. Search only for residual exception/reconciliation jobs where the provider is technically credentialed but still not billable, or payer/provider data disagreement creates revenue leakage.

### E. Commercial-insurance renewals — REAL LABOR, PLATFORM RACE ADVANCED

Applied Systems surveyed 394 U.S./Canadian brokers on application and renewal workflow, establishing a real recurring process burden. Source: https://www1.appliedsystems.com/en-ca/resources/white-papers-research/state-of-insurance-renewals/

**Counterevidence:** Bold Penguin now markets submission-to-bind agentic automation, Smart Upload, policy checking and quote comparison, with 5.8M annual submissions claimed by the vendor. Source: https://www.boldpenguin.com/

**Decision:** generic renewal automation is not a good entry. Preserve only the narrower 'material change reconciliation since last policy' hypothesis until we can verify whether current platforms already do it reliably.

## Cross-candidate finding: the opportunity pattern is shifting

The most promising repeated structure is not 'document -> AI answer'. Incumbents are rapidly commoditizing capture, extraction, classification and first-pass matching.

The residual expensive work has this shape:

1. incumbent detects an exception;
2. the source of truth is split across systems/people;
3. no single actor owns resolution;
4. a human investigates and determines responsibility;
5. they contact another human/team/vendor;
6. they wait and chase;
7. somebody changes a source system;
8. the original operator verifies the state changed;
9. the transaction can finally continue.

Call this the **Exception Closure Loop**.

Research should now search horizontally for industries with high-volume Exception Closure Loops where the incumbent system can detect but cannot close the exception.

## New search protocol for Pass 03

For every industry, search for all five signals before promoting a problem:

- **Queue evidence:** a named backlog/hold/exception/discrepancy queue exists.
- **Human-owner evidence:** current job descriptions explicitly assign humans to resolve it.
- **Cross-boundary evidence:** resolution requires another department/vendor/customer/regulator.
- **Money clock:** delay creates lost revenue, penalties, working-capital cost, service failure or compliance exposure.
- **Incumbent gap:** system documentation says detect/route/review rather than autonomously close/verify.

Reject candidates where the leading incumbent already closes the full loop at a price the target buyer can easily afford.

## Current provisional lead

**AP exception closure is the strongest research lead, not yet a build decision.** It has independent benchmark evidence, current hiring evidence, direct practitioner evidence and a measurable workflow. The major threat is rapid bundling by Oracle/ServiceNow/Coupa-class platforms. Pass 03 must determine whether a cross-ERP action layer can exist without becoming a fragile consulting/integration business.
