---
title: Product Blueprint
description: Zen Life product vision, loops, phased delivery, and decision register.
order: 2
---

## 9. Phased delivery summary

Same loops as §4.1 — repeated here as the **delivery roadmap**:

| Phase | Loop / focus | AI | Definition of done |
|-------|----------------|-----|-------------------|
| **1** | Loop 1 — Fulfillment | Non-AI | Patient books, pays, completes test; Zen report in system |
| **2** | Loop 2 — Clinical Review & Plan | Human + AI | Physician publishes Zen health plan to patient |
| **3** | Knowledge graph + Loop 3 — Interpretation & Guidance | AI | Graph live; patient profile + grounded chat |
| **4** | Loop 4 — Plan & Adherence | AI + Patient | Adherence tracked; nudges and retest triggers |
| **5** | Loop 5 — Continuous Enrichment | Autonomous AI | Other reports and ongoing graph enrichment |
| **6+** | Multi-modality & scale | AI platform | Voice/video, DICOM, wearables, partners — §15 |

---

## 10. Phase 1 delivery — Loop 1: Fulfillment *(non-AI)*

### 10.1 Definition of done

```
Patient discovers → signs up → books & pays → visits lab → Zen report ingested in Zenlife
```

No AI. No physician portal. No chat. Zen report stored and viewable as delivered by lab.

### 10.2 Workstreams

| Workstream | Deliverables |
|------------|--------------|
| **Patient web** | Landing, auth (OTP), package browse, booking, payment, order status, Zen report viewer *(PDF/view)* |
| **Ops portal** | Appointments, Zen report intake (manual/semi-manual), notifications |
| **Admin portal** | Diagnostic packages, lab partner #1, commercial terms, users |
| **Lab partner** | Internal Zen Life lab; submit Zen reports |
| **Platform** | Auth, payments, notifications — **no AI gateway** |

### 10.3 Zen Life dependencies

| Dependency | Needed for |
|------------|------------|
| Launch diagnostic packages & pricing (B1, B2) | Catalog, booking, payments |
| Lab Zen report delivery format (O1) | Ingestion pipeline |
| Payment provider & refund policy (O3, O4) | Commerce |
| Brand, copy, consent language (L3) | Patient web |
| 24–48h Zen report turnaround commitment (O2) | Patient expectation |

---

## 11. Phase 2 delivery — Loop 2: Clinical Review & Plan *(human + AI)*

### 11.1 Definition of done

```
Zen report ingested → AI extracts markers → physician reviews, iterates on AI-drafted Zen health plan → publishes → patient views plan
```

### 11.2 Workstreams

| Workstream | Deliverables |
|------------|--------------|
| **Physician portal** | Queue, doctor-facing health profile, Zen report validation, Zen health plan editor, publish |
| **AI gateway** | Marker extraction, draft summary, draft Zen health plan |
| **Patient web** | Zen health plan view *(post-publish)* |
| **Clinical** | Zen health plan templates, marker catalog, review SLA |

### 11.3 Zen Life dependencies

| Dependency | Needed for |
|------------|------------|
| Zen health plan schema & samples (C1, C2) | Physician UI, AI plan draft |
| Physician pool & review SLA (C3) | Loop 2 go-live |
| Lab Zen report samples for extraction tuning | AI accuracy |
| What must be physician-validated (A3) | Publish gate |
| Reference ranges (C5) | Marker flagging |
| Critical value protocol (C4) | Clinical alerts |

---

## 12. Phase 3 delivery — Knowledge graph + Loop 3: Interpretation & Chat *(AI)*

### 12.1 Definition of done

```
Knowledge graph populated from Zen reports + published plans → patient-facing health profile live → grounded text chat on patient data
```

*Graph must be built before chat ships.*

### 12.2 Workstreams

| Workstream | Deliverables |
|------------|--------------|
| **Knowledge graph** | Marker observations, trends, provenance, graph merge rules |
| **Patient web** | Patient-facing health profile (good / concern / next steps), issue cards, chat threads |
| **AI gateway** | Profile text generation, grounded chat (text modality) |
| **Platform** | Graph API, chat rate limits, escalation hook *(if decided)* |

### 12.3 Zen Life dependencies

| Dependency | Needed for |
|------------|------------|
| AI interpret vs guide scope (A1, A2) | Profile and chat boundaries |
| Chat scope & escalation (A4, A5) | Loop 3 design |
| Chat → graph enrichment (A6) | Enrichment rules |
| Physician escalation from Loop 3? *(§8.1 open question)* | Clinical workflow |

---

## 13. Phase 4 delivery — Loop 4: Plan & Adherence *(AI + patient)*

### 13.1 Definition of done

```
Patient logs adherence against Zen health plan → system tracks progress → nudges and follow-up reminders → retest triggers
```

### 13.2 Workstreams

| Workstream | Deliverables |
|------------|--------------|
| **Patient web** | Adherence logging, progress view, nudges |
| **AI gateway** | Adherence insights, follow-up recommendations |
| **Clinical alerts** | Out-of-range, retest due *(patient-facing)* |
| **Platform** | Notification engine for nudges |

### 13.3 Zen Life dependencies

| Dependency | Needed for |
|------------|------------|
| Physician alert from Loop 4? *(§8.1 open question)* | Escalation design |
| Success metrics (S1) | Adherence KPIs |

---

## 14. Phase 5 delivery — Loop 5: Continuous Enrichment *(autonomous AI)*

### 14.1 Definition of done

```
Patient uploads other reports → AI classifies and extracts → facts merge into graph with provenance → profile refreshes
```

### 14.2 Workstreams

| Workstream | Deliverables |
|------------|--------------|
| **Patient web** | Other report upload, processing status |
| **AI gateway** | OCR, document classification, marker extraction from uploads |
| **Knowledge graph** | Low-confidence merge, decay rules, conflict handling |

### 14.3 Zen Life dependencies

| Dependency | Needed for |
|------------|------------|
| Trust rules for uploaded vs Zen reports | Graph merge policy |

---

## 15. Phase 6+ delivery — Multi-modality & scale

| Item | Value |
|------|-------|
| **Voice & video UX** | TTS summaries, ASR Q&A, async video — per AI Roadmap UX modality track |
| **Extended data formats** | DICOM ingest + volume AI; radiology report NLP; wearables |
| **Partner portal** | Labs self-serve appointments & Zen report upload |
| **Mobile app** | Native iOS/Android |
| **Family accounts** | Dependents under one payer |
| **Insurance / hospitals** | Eligibility, referrals, FHIR |
| **Automated payouts** | Partner settlement automation |
| **Regulatory hardening** | Compliance by jurisdiction |
| **AI platform maturity** | Full routing, drift, outcome-linked eval — AI Roadmap Part III |

---

## 16. Risks, assumptions & dependencies

| Risk | Mitigation |
|------|------------|
| Lab Zen report format variability | Start with known formats; extraction templates per lab |
| AI extraction errors | Physician validation gate; confidence scores |
| Physician bottleneck | Queue prioritization; SLA agreed upfront |
| Regulatory ambiguity | Legal review; decision-support positioning (§17) |
| 24–48h SLA miss | Ops Zen report chase workflow; lab commitment in contract |
| Scope creep on AI chat | Phase 3: grounded chat only; not open-ended diagnosis |
| Graph-before-chat dependency | Phase 3 blocked until graph pipeline stable |

---

## 17. Zen Life — questions & decisions required

*Format: **Decision needed** → options / notes. Tagged by delivery phase. Zen Life to complete before each phase lock-in.*

### 17.1 Business & catalog *(Phase 1)*

| ID | Question | Options / notes | Impact | Owner | Due |
|----|----------|-----------------|--------|-------|-----|
| B1 | **Which diagnostic packages launch Day 1?** | Names, tests included, target gender/age | Catalog, pricing, lab prep | Zen Life | |
| B2 | **List price and discount rules per package?** | Fixed vs promotional | Payment, marketing | Zen Life | |
| B3 | **External lab partners at launch besides internal Zen Life lab?** | None / named list | Integration, ops | Zen Life | |
| B4 | **Commercial terms per partner?** | Fixed payout vs % per package | Payout automation design | Zen Life | |
| B5 | **Launch geography and first cohort size?** | City, expected volume | Ops, lab capacity | Zen Life | |

### 17.2 Clinical & Zen health plan *(Phase 2)*

| ID | Question | Options / notes | Impact | Owner | Due |
|----|----------|-----------------|--------|-------|-----|
| C1 | **Zen health plan schema — what sections?** | e.g. goals, nutrition, exercise, sleep, follow-up tests, red flags | Physician UI, patient plan view | Zen Life clinical | |
| C2 | **Sample Zen health plans for 2–3 package types?** | PDF or doc | AI draft templates, physician training | Zen Life clinical | |
| C3 | **Physician review SLA?** | e.g. 24h from Zen report received | Patient turnaround promise | Zen Life | |
| C4 | **Critical value escalation protocol?** | Who is notified; patient messaging | Clinical alert rules | Zen Life clinical | |
| C5 | **Reference ranges?** | Standard lab ranges vs custom by age/gender | Marker flagging logic | Zen Life clinical | |

### 17.3 AI & interpretation *(Phase 3)*

| ID | Question | Options / notes | Impact | Owner | Due |
|----|----------|-----------------|--------|-------|-----|
| A1 | **What is AI *interpreting*?** | Explain markers / trends / “what changed” | Interpretation loop scope | Zen Life | |
| A2 | **What is AI *guiding*?** | Lifestyle suggestions / next steps / FAQ only | Boundaries vs medical advice | Zen Life clinical | |
| A3 | **What must always be physician-validated before patient sees it?** | Zen health plan only / plan + summary / all AI text | Loop 2 gate design | Zen Life clinical | |
| A4 | **Chat scope?** | Issue-scoped Q&A vs open health coach | Safety, cost, UX | Zen Life | |
| A5 | **Chat escalation path?** | Support ticket / physician queue / none | Ops + clinical workflow | Zen Life | |
| A6 | **Can chat-derived facts enter the health profile?** | Yes with low-confidence flag / no | Graph enrichment rules | Zen Life clinical | |
| A7 | **Escalate from Interpretation loop to physician?** | Yes / no / conditional | Phase 3 clinical workflow | Zen Life clinical | |

### 17.4 Plan & adherence *(Phase 4)*

| ID | Question | Options / notes | Impact | Owner | Due |
|----|----------|-----------------|--------|-------|-----|
| A8 | **Alert physician from Plan & Adherence loop?** | Yes / no / critical only | Phase 4 escalation design | Zen Life clinical | |

### 17.5 Operations & integrations *(Phase 1)*

| ID | Question | Options / notes | Impact | Owner | Due |
|----|----------|-----------------|--------|-------|-----|
| O1 | **Zen report delivery from labs?** | PDF email / SFTP / portal upload | Ingestion pipeline | Zen Life ops | |
| O2 | **Commitment to 24–48h Zen report turnaround?** | Contractual with lab partners | Patient SLA | Zen Life | |
| O3 | **Payment methods?** | UPI, card, net banking | Payment integration | Zen Life | |
| O4 | **Refund and cancellation policy?** | Before test / after collection | Order lifecycle rules | Zen Life | |
| O5 | **Who operates Ops at launch?** | Zen Life team size & hours | Portal design, SLAs | Zen Life | |

### 17.6 Legal & compliance *(Phase 1–2)*

| ID | Question | Options / notes | Impact | Owner | Due |
|----|----------|-----------------|--------|-------|-----|
| L1 | **Primary jurisdiction?** | India / other | Data residency, consent | Zen Life legal | |
| L2 | **Regulatory framing?** | Wellness / clinical decision support / other | AI and Zen health plan disclaimers | Zen Life legal | |
| L3 | **Consent and privacy copy?** | Zen Life provides or approves | Signup flow | Zen Life legal | |
| L4 | **Family / minor policy?** | Defer to Phase 6+ / basic rules earlier | Family feature scope | Zen Life legal | |

### 17.7 Success & sign-off *(per phase)*

| ID | Question | Options / notes | Impact | Owner | Due |
|----|----------|-----------------|--------|-------|-----|
| S1 | **Success metrics per phase?** | e.g. Phase 1: booking conversion; Phase 2: plan publish time; Phase 3: chat engagement | Metrics dashboard | Zen Life | |
| S2 | **Sign-off criteria per phase go-live?** | Vertical slice per §10–§14 | Acceptance testing | Zen Life + build team | |

---

## 18. Appendices

| Doc | Purpose | Audience |
|-----|---------|----------|
| Entity Model | Full entities, relationships, formulae | Engineering, architecture |
| AI Roadmap | AI strategy, roadmap, platform (Parts I–III) | Product, clinical, engineering |
| *Glossary* | Extended term definitions | All |

---

## Document control

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jul 2026 | Initial blueprint |
| 1.1 | Jul 2026 | Zen Life terminology; artefact permissions §5.3; consistency pass |
| 1.2 | Jul 2026 | Fixed Ops view rights, Super Admin/Finance workflow labels, extraction boundary, residual "report/plan" terms |
| 1.3 | Jul 2026 | Phased delivery (1–6+); AI columns on journeys/loops/workflows; §8.1 physician validation + open questions; dropped §2.6 |

---

*End of product blueprint. For technical entity definitions, see Entity Model.*
