# Cross-Industry Problem Candidate Map

Status: initial desk-research pass, 2026-09-16. This is not a winner list. It is an evidence map to decide where deeper validation is worth spending time.

## Strongest current investigation candidates

### H-03 — Provider credentialing / payer enrollment exception handling

**Buyer:** medical groups, hospital systems, digital health networks, credentialing vendors.

**Job:** get a newly hired or changed provider correctly enrolled with many payers, keep CAQH/provider data synchronized, chase payer status, resolve payer-specific exceptions, and know when the provider is actually billable.

**Evidence for pain:** recent practitioners describe repetitive manual work, long opaque payer timelines, provider-data changes causing denials, Airtable/manual date tracking, and enrollment backlogs across states. MGMA-related sources describe credentialing and enrollment as materially tied to revenue timing.

**Why it remains interesting:** large incumbents such as Medallion and CertifyOS already automate core credentialing. The possible wedge is therefore not generic credentialing. Investigate payer-specific exception resolution, enrollment-status truth, multi-location/provider roster reconciliation, and smaller-practice workflows below enterprise minimums.

**Contradiction:** competition is strong and getting stronger; Medallion and CertifyOS explicitly market AI-native end-to-end workflows.

**Cheap falsification test:** give 5 credentialing managers a list of 20 recently delayed enrollments and ask which steps were not handled by their current platform/vendor. Kill the candidate if the residual work is mostly payer wait time rather than solvable operator work.

Sources:
- https://www.reddit.com/r/credentialing/comments/1ozvo16/what_are_the_worst_pain_in_credentialing_today/
- https://www.reddit.com/r/credentialing/comments/1ti235u/credentialing_timelines_feel_unrealistic_lately/
- https://www.reddit.com/r/CodingandBilling/comments/1m2bsvd/
- https://www.medallion.co/
- https://www.certifyos.com/

### F-03 — Accounts-payable exception resolution after 3-way-match failure

**Buyer:** controllers, AP managers, procurement operations, multi-site operators.

**Job:** resolve invoices blocked by missing receipts, stale POs, price/quantity variance, partial delivery or site-level paperwork gaps.

**Evidence for pain:** practitioner examples show AP owns an exception queue but needs buyers, warehouse/site staff or requisitioners to clear it. The actual chasing often happens in email/Slack outside the ERP. One 2026 practitioner example reported roughly 60–80 exceptions per month on ~1,200 invoices, with one AP clerk spending roughly a day per week chasing receipts and PO changes. This is anecdotal C-level evidence, not a population estimate.

**Why it remains interesting:** invoice capture and matching are crowded. The residual workflow is cross-functional exception resolution: determine cause, locate the responsible actor, collect proof, update the system of record, preserve controls, and escalate by aging/value.

**Contradiction:** many ERP/AP suites already flag exceptions. Process failures upstream may matter more than smarter workflow software.

**Cheap falsification test:** collect 100 historical exceptions from 3 companies. Measure how many could have been resolved from existing digital evidence without human judgment. If less than ~30% are automatable, the wedge weakens materially.

Sources:
- https://www.reddit.com/r/Accounting/comments/1vy3kbw/how_do_you_handle_invoice_exceptions_that_fail/
- https://www.reddit.com/r/Accounting/comments/1iv5k3o/3way_match_invoice_doesnt_align_with_purchase/

### I-02 — Commercial-insurance renewal data reconciliation and change detection

**Buyer:** independent commercial insurance agencies, regional brokerages, account managers.

**Job:** prepare a renewal by gathering current client exposure data, comparing it with prior-year applications/policies/schedules, finding what changed, chasing missing information, and updating carrier-specific forms/submissions.

**Evidence for pain:** Applied/Indio research of hundreds of brokers documented recurring time spent finding the right forms, re-keying/prefilling submission data, and chasing clients for renewal information. Current Applied Indio product positioning still emphasizes eliminating re-entry and renewal form collection; Bold Penguin now automates substantial submission work, proving active budgets but also competition.

**Potential wedge:** renewal *diff intelligence* rather than form digitization: infer what materially changed since last renewal, show source evidence, identify likely coverage-impacting changes, and create a minimal client question set instead of re-asking everything.

**Contradiction:** Applied, Indio and Bold Penguin have broad distribution and increasingly agentic capabilities.

**Cheap falsification test:** take 20 real prior/current renewal packets from 3 agencies and measure how much human time is spent deciding what changed versus simple data entry. If most pain is already solved by their AMS/Indio stack, kill it.

Sources:
- https://www1.appliedsystems.com/en-ca/resources/white-papers-research/state-of-insurance-renewals/
- https://www.appliedclientnetwork.org/Connections-Publication/how-to-reduce-cost-with-your-commercial-lines-renewals-process
- https://apsy02mstr4d4f2inte.dxcloud.episerver.net/en-us/solutions/for-agents/insurance-application-software/indio/
- https://www.boldpenguin.com/

### L-01 — Ocean detention/demurrage fee prevention + dispute evidence

**Buyer:** beneficial cargo owners, importers, freight forwarders, NVOCCs, drayage operators, logistics finance teams.

**Job:** know when free time expires, prevent avoidable D&D, validate invoices against shipment events/contracts/FMC rules, preserve dispute deadlines, and assemble evidence.

**Evidence for pain:** the U.S. Federal Maritime Commission reports the nine major carriers collected roughly $15.4B in detention and demurrage charges from Apr 2020 through Mar 2025. FMC maintains an audit program specifically covering billing and dispute practices. Recent products are emerging around deterministic invoice checks, evidence packages and recovery, which confirms both a regulatory trigger and buying interest.

**Why it remains interesting:** current entrants indicate the obvious 'audit this invoice' wedge is already being attacked. A better research direction may be pre-charge operational prevention and evidence capture across carrier/terminal/container events, where missed deadlines have direct cash consequences.

**Contradiction:** several 2026 startups already market automated D&D invoice auditing/dispute preparation, so the most obvious wedge is becoming crowded.

**Cheap falsification test:** audit 12 months of D&D data for 3 importers and separate avoidable operational charges from billing errors. If most recoverable value is already caught by freight audit providers, move upstream or kill.

Sources:
- https://www.fmc.gov/detention-and-demurrage/
- https://www.fmc.gov/databases-and-publications/vessel-operating-common-carrier-vocc-audit-program/
- https://www.demurrageaudit.com/
- https://auditdray.com/
- https://getgatepilot.com/

### P-01 — Property-maintenance approval/dispatch exception handling

**Buyer:** property-management companies managing roughly 100–2,000 units, maintenance directors, portfolio operators.

**Job:** triage a request, determine responsibility, approve within owner/NTE rules, find/dispatch a qualified vendor, chase estimate/tenant/vendor, track completion, reconcile invoice, and surface exceptions.

**Evidence for pain:** practitioners report Google Sheets/Drive surviving into 100+ unit operations, approval bottlenecks on every work order, and multi-coordinator teams manually assigning vendors, getting estimates and handling invoices even when AppFolio is the system of record. A 2026 example described 659 units supported by two maintenance coordinators and dissatisfaction with AppFolio task/reminder support.

**Why it remains interesting:** core PMS products exist; the likely gap is orchestration across owner rules, tenant communication, vendors, estimates, approvals and invoice closeout rather than another property-management system.

**Contradiction:** Property Meld, Venderoo and newer AI dispatch vendors are already targeting this workflow.

**Cheap falsification test:** obtain 200 closed work orders from 3 managers. Reconstruct touches, elapsed time and handoffs. If coordination time is low or vendors solve it sufficiently, kill.

Sources:
- https://www.reddit.com/r/PropertyManagement/comments/1rqnf89/maintenance_coordination/
- https://www.reddit.com/r/PropertyManagement/comments/1k4ka84/maintenance_price_list/
- https://www.reddit.com/r/PropertyManagement/comments/1peesiq/what_software_do_property_managers_use/

## Strong pain but currently crowded / harder wedge

### H-01 — Healthcare claim-denial recovery

Verified scale is high. KFF's corrected CMS analysis reports roughly 85M in-network denied HealthCare.gov claims for 2024 and a 19% in-network denial rate; administrative reasons represented 25% of reported denial reasons. The weakness is not problem existence but white space: many AI-native RCM vendors now automate triage, evidence and appeals.

Sources:
- https://www.kff.org/patient-consumer-protections/claims-denials-and-appeals-in-aca-marketplace-plans-in-2024/

### H-02 — Prior-authorization operations

AMA 2025 survey reports an average 40 prior authorizations per physician per week, roughly 13 hours of physician/staff time, and 40% employing staff dedicated to PA. MGMA calls PA the top administrative burden for medical groups. Pain is unusually strong, but regulatory change, payer APIs, EHR integration and clinical-risk concerns raise execution difficulty.

Sources:
- https://www.ama-assn.org/press-center/ama-press-releases/ama-survey-prior-authorization-reform-pledge-falls-short-physicians
- https://www.mgma.com/articles/the-prior-authorization-landscape-in-2025

### C-01 — Construction submittal review

Repeated practitioner evidence describes slow manual spec-to-submittal comparison, high consequence of misses, and huge submittal logs. Procore is entrenched and reviews show mixed workflow complaints, but AI submittal entrants now exist. The stronger wedge may be cross-document/context conflict detection rather than product-data comparison alone.

Sources:
- https://www.reddit.com/r/ConstructionManagers/comments/1pq8axe/is_there_a_trick_to_reviewing_submittals_faster/
- https://www.reddit.com/r/ConstructionManagers/comments/1q8kkk3/new_to_construction_why_are_submittals_such_a/
- https://apps.apple.com/us/app/procore/id374930542?see-all=reviews

### S-01 — Security-questionnaire response automation

Pain is obvious: practitioners report 200–400-question spreadsheets and repeated copy/paste work. But Vanta, Conveyor, SafeBase/Drata, Loopio and Responsive already automate this exact job. Do not build generic questionnaire answering.

Possible research wedge: buyer-side *evidence validation* and adaptive questioning, because one TPRM survey reports 81% saying most vendors pass questionnaires while only 14% trust that vendor security actually matches questionnaire responses.

Sources:
- https://www.reddit.com/r/cybersecurity/comments/1q49z8u/anyone_else_drowning_in_security_questionnaires/
- https://www.vanta.com/products/questionnaire-automation
- https://www.riskrecon.com/benchmark-your-tprm-program

## Secondary candidates requiring more evidence

### F-01 — SMB / mid-market AR collections prioritization

QuickBooks' 2025 survey of >2,000 U.S. small businesses found businesses with outstanding invoices were owed more than $17k on average. The problem is economically real, but collection automation is highly competitive. Investigate dispute-resolution and promise-to-pay reconciliation rather than generic reminder emails.

Source: https://quickbooks.intuit.com/r/small-business-data/small-business-late-payments-report-2025/

### F-02 — Cash application / unmatched remittance exception resolution

Recent practitioner evidence shows partial/split payments defeating ERP auto-match and forcing CSV/bank-statement reconciliation. Need stronger population-level data and competitive mapping before elevation.

Source: https://www.reddit.com/r/AccountingDepartment/comments/1vtfcrd/what_accounts_receivable_automation_best/

### C-02 — Construction submittal-log generation + critical-path prioritization

Practitioners describe manually creating logs from hundreds of pages of specs and uncertainty about which of hundreds or thousands of listed submittals actually matter. This may be more tractable than review, but Procore/ecosystem entrants may absorb it quickly.

Sources:
- https://www.reddit.com/r/ConstructionManagers/comments/1km2xb1/submittals/
- https://www.reddit.com/r/ConstructionManagers/comments/1kypb0b/submittal_importance/

### P-02 — Property vendor contract/insurance/renewal tracking

Evidence shows operators still using SharePoint/desktop folders and needing expiry tracking. However, many PMS products already have vendor tracking, so switching willingness may be weak.

Source: https://www.reddit.com/r/PropertyManagement/comments/1omyx4v/how_does_everyone_manage_contracts/

### Q-01 — QMS document-review comment resolution

Quality professionals describe mature QMS systems whose document review still pushes entire documents back and forth rather than managing review comments as traceable work items. Interesting workflow niche; economic magnitude and buyer population still unverified.

Source: https://www.reddit.com/r/QualityAssurance/comments/1j454ug/qms_software_that_allows_to_creates_tasks_for/

## Current research direction

The four candidates that deserve the next level of evidence collection are H-03 credentialing/enrollment exceptions, F-03 AP exception resolution, I-02 commercial-insurance renewal change detection, and L-01 D&D prevention/evidence. P-01 property maintenance orchestration remains close behind.

This is a research-priority statement, not proof of product-market fit. Each candidate still needs real workflow artifacts and paid-pilot evidence.
