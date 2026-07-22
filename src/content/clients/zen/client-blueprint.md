---
title: Product Blueprint
description: Zen Life product vision, loops, phased delivery, and decision register.
order: 2
---

**Version:** 1.3 · **Date:** July 2026  
**Audience:** Zen Life stakeholders, product, clinical leads  
**Technical appendix:** Entity Model *(engineering — supplementary to business sign-off)*

---

## 1. Executive summary

**Zenlife** is the proactive health platform that turns diagnostic results into a **personalized, long-term Zen health plan** — with booking, AI-assisted interpretation, physician-reviewed Zen health plans, and ongoing adherence tracking.

| Topic | Summary |
|-------|---------|
| **Target user** | Proactive health consumer |
| **Core promise** | One place for Zen reports, understanding, and action |
| **Day 1 lab model** | Zen Life operates as **Lab partner #1**; external partners added later |
| **Product commitment** | Zen reports available after fulfillment; Zen health plan after physician publish *(see phased delivery §9–§15)* |

### The five loops (plain language)

| # | Loop | In one sentence |
|---|------|-----------------|
| 1 | **Fulfillment** | Book tests → pay → visit lab → Zen reports land in Zenlife |
| 2 | **Clinical Review & Plan** | Physician reviews AI output, iterates on Zen health plan, publishes to patient |
| 3 | **Interpretation & Guidance** | Patient sees health profile, concerns, next steps, and can chat on issues |
| 4 | **Plan & Adherence** | Patient follows plan; system tracks adherence and nudges retests |
| 5 | **Continuous Enrichment** | Uploads, chat, and (later) wearables keep the health profile evolving |

**Central idea:** All loops feed a **health knowledge graph** — the living record behind patient-facing and doctor-facing health profiles.

### What Zen Life needs to decide

Section **§17** lists decisions required before build lock-in. Priority items: **launch packages**, **Zen health plan schema**, and **AI scope per phase**.

---

## 2. Product vision & scope

### 2.1 Problem & outcome

| | |
|--|--|
| **Problem** | Health data is fragmented; reports sit as PDFs; little actionable guidance |
| **Outcome** | Passive data → active, personalized plan with tracking and follow-ups |

### 2.2 Main selling points

- 360° access to diagnostic reports and prescriptions  
- AI-powered lifestyle and health guidance  
- Adherence tracking against the plan  
- Real-time **clinical alerts** when key markers are out of range  

### 2.3 Phased delivery overview

Delivery is **loop by loop**, then multi-modality. AI enters at Phase 2; the knowledge graph is built in Phase 3 (required before chat).

| Phase | Loop / focus | AI involvement | Delivers |
|-------|----------------|----------------|----------|
| **1** | **Loop 1 — Fulfillment** | Non-AI | Book → pay → test → Zen report in system |
| **2** | **Loop 2 — Clinical Review & Plan** | Human + AI | Physician-reviewed Zen health plan published to patient |
| **3** | **Knowledge graph + Loop 3 — Interpretation & Guidance** | AI *(+ physician escalation TBD)* | Graph populated; patient-facing profile; grounded chat |
| **4** | **Loop 4 — Plan & Adherence** | AI + Patient | Adherence tracking, nudges, retest triggers |
| **5** | **Loop 5 — Continuous Enrichment** | Autonomous AI | Other reports, chat facts, ongoing graph updates |
| **6+** | **Multi-modality & extended formats** | AI platform maturity | Voice/video UX; DICOM; wearables; partner scale — see AI Roadmap |

### 2.4 Full product vision (all phases complete)

| Area | Included at full maturity |
|------|---------------------------|
| **Patient** | Signup, book & pay, Zen reports, other report upload, health profile, chat, Zen health plan, adherence |
| **Physician** | Zen report queue, AI-assisted plan draft, iterate & publish |
| **Ops** | Appointments, Zen report intake, notifications, SLA |
| **Super Admin** | Packages, partners, commercial terms, users, metrics |
| **Lab** | Internal + external lab partners |
| **AI** | Extraction, interpretation, chat, enrichment, multi-modality — per AI Roadmap |

### 2.5 Assumptions

- Zen Life launches with **one internal lab partner** using the same platform model as future partners.  
- Physicians **approve** Zen health plans before patients see them.  
- **Zen reports** (from Zen Life–ordered tests) and **other reports** (user uploads) are **tracked and trusted differently** — same AI extraction pipeline, different origin and trust rules.  
- AI acts as **decision support**, not autonomous diagnosis — regulatory framing TBD (§17).

---

## 3. User types & journeys

### 3.1 User types

| Type | Role in the system |
|------|-------------------|
| **Patient** | Books tests, views profile & Zen health plan, uploads other reports, chats |
| **Physician** | Reviews Zen reports, iterates on AI Zen health plan, publishes to patient |
| **Ops** | Appointments, Zen report chase, notifications, queue management |
| **Super Admin** | Packages, pricing, partners, users, metrics |
| **Lab partner staff** | Fulfillment & Zen report submission *(Phase 1: internal)* |
| **Clinician QA** | Validates AI quality and templates *(internal)* |
| **Family manager** | *(Later)* Manages dependents under one billing account |

### 3.2 Patient journey (touchpoints)

| Stage | What the patient does | AI |
|-------|------------------------|-----|
| **Discover** | Browse benefits, packages, how it works | Non-AI |
| **Sign up** | Mobile OTP → basic profile (gender, age) → consent | Non-AI |
| **Book** | Choose package → lab → slot → pay → confirm | Non-AI |
| **Test day** | Receive reminders; visit lab; see “processing” status | Non-AI |
| **Wait** | Track status until Zen reports (+ Zen health plan when Phase 2+) ready | Non-AI |
| **Understand** | View Zen reports, health profile, concerns, trends | Human + AI |
| **Chat** | Ask questions on specific issues (grounded in their data) | AI |
| **Act** | Follow Zen health plan; log adherence; respond to nudges | AI + Patient |
| **Upload** | Add other reports (prescriptions, outside lab PDFs) | Non-AI |
| **Rebook** | Follow-up reminders → book next tests | Non-AI |

### 3.3 Physician journey (Loop 2)

| Step | Activity | AI |
|------|----------|-----|
| Queue | Pick patient / Zen report from prioritized inbox | Non-AI |
| Chart | Review markers, trends, AI summary, prior Zen health plans | Human + AI |
| Zen report | Validate extraction; comment; flag critical values | Human + AI |
| Zen health plan | Review AI draft → edit → request revision → repeat | Human + AI |
| Publish | Sign off → patient notified → profile & Zen health plan go live | Human + AI |

### 3.4 Role × capability (summary)

| Capability | Patient | Physician | Ops | Super Admin |
|------------|---------|-----------|-----|-------------|
| Book & pay | ✓ | — | reschedule | — |
| View own / all patient data | own | assigned | ✓ | ✓ |
| Upload other reports | ✓ | — | — | — |
| Review & publish Zen health plan | — | ✓ | — | — |
| Manage packages & pricing | — | — | view only | ✓ |
| Manage partners & payouts | — | — | view only | ✓ |

*"View only" = Ops can see catalog, partners, and payout status for support and reconciliation, but cannot create or edit them.*

---

## 4. System model — loops & workflows

### 4.1 Loops

| # | Loop | Delivery phase | AI involvement | Trigger | Ends when |
|---|------|----------------|----------------|---------|-----------|
| 1 | **Fulfillment** | **Phase 1** | Non-AI | User books package | Zen report ingested and structured in system |
| 2 | **Clinical Review & Plan** | **Phase 2** | Human + AI | Zen report ready | Physician publishes Zen health plan + interpretation |
| 3 | **Interpretation & Guidance** | **Phase 3** | AI *(+ physician escalation TBD)* | User opens health view / new publish | Patient has profile view + issue chat threads |
| 4 | **Plan & Adherence** | **Phase 4** | AI + Patient | Zen health plan published | Adherence tracked; retest or re-interpret triggered |
| 5 | **Continuous Enrichment** | **Phase 5** | Autonomous AI | Upload, chat, wearable | Facts merged into knowledge graph *(always-on)* |

#### Loop 1 — Fulfillment: diagnostic order lifecycle

The diagnostic order is the entity that carries Loop 1 from booking through Zen report delivery:

```
draft → pending_payment → paid → booked → confirmed → in_progress
  → completed_at_lab → reports_received → delivered
  → cancelled | refunded
```

*States `under_review` and beyond apply once Loop 2 (Phase 2) begins.*

### 4.2 Workflows (operational — not patient loops)

| Workflow | Purpose | AI |
|----------|---------|-----|
| **Ops** | Appointments, SLA, Zen report intake, notifications | Non-AI |
| **Lab partner** | Run tests, submit Zen reports | Non-AI |
| **Super Admin** | Catalog, packages, partners, users, commercial terms | Non-AI |
| **Finance** | Payments, refunds, payouts *(Phase 1: handled by Super Admin)* | Non-AI |
| **Clinician QA** | AI validation before release | Human + AI |

### 4.3 Architecture (conceptual)

```
┌─────────────────────────────────────────────────────────────┐
│  PROFILE FEEDS: Zen reports · Other reports · Chat ·       │
│  Zen health plan · Wearables (later)                        │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
                 ┌───────────────────┐
                 │  KNOWLEDGE GRAPH   │  ← single source of truth
                 └─────────┬─────────┘
                           │
           ┌───────────────┼───────────────┐
           ▼               ▼               ▼
   Patient-facing    Doctor-facing    Clinical alerts
   health profile    health profile

LOOP 1 Fulfillment → LOOP 2 Clinical Review & Plan → patient sees LOOP 3 & 4
                              ↑
LOOP 5 Enrichment (continuous, all sources)
```

### 4.4 Loop 2 — Clinical Review & Plan: iterative states

Physician workflow is **not one-pass**. AI drafts plan → physician amends → may re-request AI revision → **publish** when satisfied.

| State | Meaning |
|-------|---------|
| Queued | Awaiting physician |
| In review | Zen report and chart under review |
| Plan drafting | AI or physician working on Zen health plan |
| Awaiting edits | Physician requested changes |
| Ready to publish | Final review complete |
| Published | Visible to patient |

---

## 5. Domain model overview

*Product artefact names below; internal entity names in Entity Model — see §5.2.*

### 5.1 Key artefacts & concepts

| Artefact / concept | Category | Meaning |
|--------------------|----------|---------|
| **Diagnostic package** | Catalog | Sellable bundle of tests (marketing, clinical composition, price, gender/age gates) |
| **Diagnostic order** | Commerce | Patient’s purchase of a diagnostic package; has lifecycle from draft to delivered |
| **Appointment** | Fulfillment | Diagnostic order booked at a lab partner on a specific lab schedule slot |
| **Zen report** | Clinical | Result from a **Zen Life–ordered** test only — produced by the ecosystem after fulfillment |
| **Other report** | Clinical | Any file the user brings in — outside lab PDF, prescription, discharge summary, photo *(type unknown until classified)* |
| **Zen health plan** | Clinical | Lifestyle, follow-ups, and recommendations; AI draft → physician iterates → publishes to patient |
| **Knowledge graph** | Knowledge | Evolving canonical store of health facts, relationships, and provenance for the patient |
| **Patient-facing health profile** | Projection | What the patient sees: good / concern / next steps — **read from graph**, not a separate source |
| **Doctor-facing health profile** | Projection | Full clinical view for physician: markers, trends, AI summary, draft Zen health plan |
| **Clinical alert** | System | Medically meaningful rule-fired signal (e.g. out-of-range marker, retest due) |
| **Notification** | System | General operational message (booking confirmed, OTP, Zen health plan ready) |

### 5.2 Key rules

- **Zen report ≠ Other report** — Zen reports come from fulfillment; other reports are user-uploaded. Same AI extraction pipeline; different origin and trust rules.  
- **Zen health plan** — use this term for Zen Life–authored plans (AI + physician). Distinguishes from informal “health plan” in conversation.  
- **Appointment ≠ Lab schedule slot** — slot is partner availability; appointment is the booking on an order.  
- **Health profiles are projections** on the knowledge graph — not uploaded or edited as documents.  
- **Marker trends** are computed over time — not manually entered.  
- Internal entity names (`Report`, `Health document`, `Health plan`) in Entity Model map to **Zen report**, **Other report**, and **Zen health plan** respectively.
- **Zen Life** = the business and operator. **Zenlife** = the product/platform name. **Zen report / Zen health plan** = product artefacts.

### 5.3 Artefact permissions by user type

**Legend — actions in each cell:** **C** Create · **U** Upload · **E** Edit · **D** Delete · **I** Interpret *(generate or clinically sign off interpretation)* · **V** View only · **—** not permitted  

*View/access is implied where any action is allowed. Patient **view** of interpreted content does not require **I**.*

| Artefact | Patient | Physician | Ops | Super Admin | Lab partner staff | Clinician QA | Family manager *(later)* |
|----------|---------|-----------|-----|-------------|-------------------|--------------|--------------------------|
| **Diagnostic package** | — | — | **V** *(view only)* | **C · E · D** | — | — | — |
| **Diagnostic order** | **C · E** *(book; reschedule/cancel own)* | — | **E · D** *(reschedule; cancel)* | **E · D** | — | — | **C · E** *(for dependent)* |
| **Appointment** | **E** *(reschedule own)* | — | **C · E · D** | **E · D** | **E** *(confirm/check-in)* | — | **E** *(for dependent)* |
| **Zen report** | — | **I** | **U** *(on behalf of lab)* | **D** *(exceptional)* | **C · U** *(submit from lab)* | **I** *(staging/QA)* | — |
| **Other report** | **U · E · D** *(own uploads)* | **I** | **U** *(on behalf of patient)* | **D** | — | **I** *(staging/QA)* | **U · E · D** *(for dependent)* |
| **Zen health plan** | — | **C · E · I** *(draft, amend, publish)* | — | **D** *(archive)* | — | **I** *(staging/QA)* | — |
| **Patient-facing health profile** | — | **I** *(approves content shown)* | — | — | — | **I** *(staging/QA)* | — |
| **Doctor-facing health profile** | — | **I** | — | — | — | **I** *(staging/QA)* | — |

**Notes**

- **Create (Zen report):** Lab partner staff submits; system creates the record on ingest. Patients do not create Zen reports.  
- **Interpret:** Applies to users who **produce or clinically approve** meaning — not to patients who **read** interpreted content in the app.  
- **Ops Upload (Zen report):** Manual intake when lab sends PDF outside partner portal (Phase 1).  
- **Super Admin Delete:** Soft-delete / archive only; audit trail retained.  
- **Family manager:** Same patient actions on behalf of linked dependents once family accounts ship *(Phase 6+)*.  
- **Clinician QA:** Permissions apply to **non-production** QA/staging environments unless explicitly granted for prod audit.

---

## 6. Catalog & commercial model

### 6.1 Package structure

| Concept | Purpose |
|---------|---------|
| **Test catalog item** | Single test or scan (CBC, MRI Brain, X-ray PA) |
| **Panel** | Group of tests; selecting panel selects all items |
| **Diagnostic package** | Customer-facing SKU with marketing, price, gender/age gates |
| **Package item** | Item or panel on a package — required, optional, or default-on |

### 6.2 Partner commercial model

| Concept | Purpose |
|---------|---------|
| **Partner package offer** | Lab offers a Zen Life diagnostic package with agreed terms |
| **Commercial terms** | Patient price, lab payout (fixed or %), Zen Life margin |
| **Payout** | Auto-calculated on fulfillment from terms **snapshotted at order time** |

### 6.3 Payments

| Concept | Purpose |
|---------|---------|
| **Payment profile** | User’s saved billing methods and details |
| **Payment** | One transaction for a diagnostic order |

---

## 7. Knowledge graph & health profiles

### 7.1 What builds the graph

| Source | Delivery phase | Notes |
|--------|----------------|-------|
| **Zen report** | Phase 1 ingest → Phase 2 extract → **Phase 3 graph** | File stored in Phase 1; AI extraction in Phase 2; merged into graph in Phase 3 |
| **Zen health plan** | Phase 2 | On physician publish; feeds graph from Phase 3 onward |
| **Knowledge graph** | **Phase 3** | Canonical store built before chat goes live |
| **Chat thread** | Phase 3 | Grounded on graph; see AI Roadmap |
| **Other report** | Phase 5 | User upload; autonomous enrichment pipeline |
| **Wearable stream** | Phase 6+ | Time-series vitals |

### 7.2 What the patient sees (Loop 3)

- **Good / concern / unknown** grouping  
- Plain-language summary of markers and trends  
- **Next steps** (from Zen health plan and follow-up rules)  
- **Issue cards** → open chat thread on a specific concern  

### 7.3 Alerts & notifications

| Type | Example | Audience |
|------|---------|----------|
| **Clinical alert** | LDL out of range; retest due | Patient (+ physician if critical) |
| **Notification** | Booking confirmed; Zen health plan ready; OTP | Patient, Ops, anyone |

---

## 8. AI — strategy, scope & platform

*Phased AI rollout: no AI in Phase 1; AI begins Phase 2. Full detail in AI Roadmap.*

### 8.1 What AI does (by loop)

| Loop | Delivery phase | AI involvement | AI role | Physician validation |
|------|----------------|----------------|---------|---------------------|
| **Fulfillment** | Phase 1 | Non-AI | — *(ingest and store Zen report only)* | — |
| **Clinical Review & Plan** | Phase 2 | Human + AI | Extract markers from PDFs; draft summary; draft Zen health plan | **Required** before publish |
| **Interpretation & Guidance** | Phase 3 | AI | Generate patient-facing profile text; grounded chat on graph | — *(see open questions below)* |
| **Plan & Adherence** | Phase 4 | AI + Patient | Adherence insights; follow-up nudges | — *(see open questions below)* |
| **Continuous Enrichment** | Phase 5 | Autonomous AI | OCR/classify other reports; extract markers; chat → graph facts | Low-confidence facts flagged |
| **Multi-modality & formats** | Phase 6+ | AI platform maturity | Voice/video UX; DICOM; wearables — per AI Roadmap | Per regulatory review |

**Open questions (Zen Life to decide):**

1. **Interpretation & Guidance (Phase 3):** Do we escalate anything from this loop to a human physician? *(e.g. clinical questions, low-confidence chat, critical concern flagged in conversation)*
2. **Plan & Adherence (Phase 4):** Do we alert a physician from this loop? *(e.g. sustained non-adherence, patient-reported symptom in chat, out-of-range trend)*

### 8.2 AI — full detail in one document

All AI strategy, roadmap, and platform detail lives in **AI Roadmap**:

| Part | Contents |
|------|----------|
| **I — Strategy** | L0–L5 layers, graph evolution, HITL T0–T3, product surfaces, eval philosophy |
| **II — Roadmap** | Data source pipelines, UX modalities (text/voice/video), DICOM stack, learning |
| **III — Platform** | Routing, swapping, drift, cost, latency, safety, release gates |

**Phased AI rollout:** Phase 1 = no AI · Phase 2 = extraction + plan draft · Phase 3 = graph + chat · Phase 4–5 = adherence + enrichment · Phase 6+ = multi-modality.

### 8.3 AI platform (summary)

Single **AI gateway** for all model calls — see **AI Roadmap Part III** for full detail.

| Concern | Approach |
|---------|----------|
| **Model routing** | Right model per task (extract vs chat vs plan draft) |
| **Swapping** | Upgrade models via config; version logged on every output |
| **Quality** | Golden test sets; physician corrections as training signal |
| **Drift** | Monitor extraction accuracy and output changes over time |
| **Cost & limits** | Per-user rate limits; cost per Zen report tracked |
| **Safety** | Schema validation on outputs; PHI controls; audit trail |

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
