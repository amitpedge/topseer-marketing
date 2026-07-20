---
title: Entity Model
description: Finalized entities, relationships, and shorthand formulae for Zenlife.
order: 1
---

## 1. System loops

| # | Loop | Ends when |
|---|------|-----------|
| 1 | **Fulfillment** | Reports structured in system |
| 2 | **Clinical Review & Plan** | Physician publishes interpretation + health plan |
| 3 | **Interpretation & Guidance** | User has patient-facing health profile + issue chat threads |
| 4 | **Plan & Adherence** | Adherence tracked; retest / re-interpret triggered |
| 5 | **Continuous Enrichment** | Uploads, chat, wearables merged into graph *(always-on)* |

**Substrate:** **Knowledge graph** — all loops read/write. Patient-facing and doctor-facing health profiles are projections.

---

## 2. Workflows (not loops)

| Workflow | Owner |
|----------|--------|
| **Ops** | Appointments, report intake, SLA, user notifications |
| **Lab partner** | Fulfill tests, submit reports |
| **Admin / Super Admin** | Packages, pricing, users, partners, metrics |
| **Finance** | Payments, refunds, payouts, invoices |
| **Clinician QA** | AI/model validation, golden sets |
| **Insurance** *(later)* | Eligibility, claims |
| **Hospital** *(later)* | Referrals, integrations |

---

## 3. User types

| Type | Notes |
|------|--------|
| **User** | Auth identity (mobile + OTP). Not every User is a patient. |
| **Patient** | User with a Patient profile (health subject). |
| **Family manager** | User who owns a Family group and Payment profile for dependents. |
| **Physician** | User with Physician role (+ optional Physician profile). |
| **Clinician-tester** | User with QA role for AI/clinical validation. |
| **Ops** | User with operations role. |
| **Super Admin** | User with platform admin role. |
| **Lab partner staff** | User scoped to a Lab partner org. |

**Day 1:** Zenlife itself is modeled as **Lab partner #1** (`Zenlife Diagnostics`). External partners added incrementally.

---

## 4. Entity definitions

### 4.1 Identity & access

| Entity | Definition |
|--------|------------|
| **User** | Auth identity: mobile, OTP, assigned roles. |
| **Role** | Access hat: patient, physician, ops, super_admin, lab_partner_staff, clinician_tester. |
| **Patient profile** | Health subject record linked to a User: demographics, graph link, preferences. |
| **Physician profile** | Optional extension for clinician Users: license, specialties, signature. Not a separate login type. |
| **Family group** | Billing and management unit with one primary User. |
| **Family membership** | Links Family group ↔ Patient profile (self, spouse, child, parent). |
| **Lab partner** | Diagnostic center org that fulfills tests and receives payouts. |

### 4.2 Catalog & packaging

| Entity | Definition |
|--------|------------|
| **Test catalog item** | Atomic bookable test or scan (CBC, HbA1c, Chest X-ray PA, MRI Brain). Category: pathology / radiology / other. **No predefined result schema.** |
| **Panel** | Named subgroup of Test catalog items. Selecting a panel auto-includes its items. |
| **Panel item** | Membership: Panel → Test catalog item. |
| **Diagnostic package** | Sellable SKU: marketing copy, imagery, list price, discounts, gender/age gates, active flag. |
| **Package item** | Line on a Diagnostic package: points to Test catalog item **or** Panel; flags: required / optional / default_on; sort order. |

### 4.3 Commerce & fulfillment

| Entity | Definition |
|--------|------------|
| **Diagnostic order** | Patient request to run a Diagnostic package at a lab. Lifecycle: draft → paid → fulfilled → reports linked. |
| **Order line** | One Test catalog item on a Diagnostic order + fulfillment status. |
| **Lab schedule slot** | Partner-published time window: `{Lab partner, date, start, end, capacity, booked_count}`. |
| **Appointment** | Booked slot = Diagnostic order + Lab partner + one Lab schedule slot (consumes 1 capacity unit). |
| **Payment profile** | Per-User billing identity: default method, saved instrument tokens, billing name/address, tax ID. |
| **Payment** | One charge (cash in) for a Diagnostic order, via Payment profile. |
| **Partner package offer** | Lab partner exposes a Diagnostic package to Zenlife with agreed commercial terms. |
| **Commercial terms** | On Partner package offer: patient price, lab payout (fixed or %), Zenlife margin, effective dates. Snapshotted on order. |
| **Payout** | Settlement (cash out) to Lab partner after fulfillment; amount from Commercial terms snapshot on order. |

### 4.4 Clinical artifacts

| Entity | Definition |
|--------|------------|
| **Report** | Result from ecosystem fulfillment only. Usually PDF + extracted data. Tied to Diagnostic order / Lab partner. |
| **Health document** | User-uploaded file — any PDF, prescription, outside lab, discharge summary, photo. Type unknown until classified. |
| **Health plan** | Care plan: lifestyle, follow-ups, recommendations. |
| **Health plan version** | Immutable publish snapshot after physician approval. Patient sees current published version. |
| **Physician comment** | Annotation on a Report, Marker observation, or Health plan. |

### 4.5 Knowledge graph

| Entity | Definition |
|--------|------------|
| **Knowledge graph** | Canonical evolving store: facts, relationships, provenance. Single source of truth. |
| **Marker type** | Canonical observable definition: name, unit, category (quantitative / finding / impression), reference ranges where applicable. **Not 1:1 with Test catalog item.** |
| **Marker observation** | One extracted value or finding at one time for a Patient profile (e.g. LDL 130 mg/dL, 2026-07-15, from Report #88). Stored in graph. |
| **Marker trend** | **Derived view only** — time series of Marker observations for one marker type. Not a stored source entity. |
| **Expected marker map** | Design-time link: Test catalog item → expected Marker type(s) (1:N). |
| **Extraction template** | Per Test catalog item or category: how to extract Marker types from Report or Health document PDF. |
| **Provenance** | Metadata on every graph write: source, model, user, confidence, timestamp. |

**Profile sources** (ingestion channels, not tables): Report, Health document, Health plan, Wearable stream, Chat thread.

### 4.6 Projections (read models)

| Entity | Definition |
|--------|------------|
| **Patient-facing health profile** | Graph projection for patient: good / concern / next steps, plain language, chat entry points. |
| **Doctor-facing health profile** | Graph projection for physician: full markers, trends, AI summary, comments, draft plan, queue context. |

Do **not** use the term "snapshot" for these projections.

### 4.7 Engagement & ops

| Entity | Definition |
|--------|------------|
| **Chat thread** | Topic-scoped conversation with messages. Profile source — extracted facts feed graph with provenance. |
| **Adherence record** | Patient logged action against a Health plan item. Feeds graph and adherence loop. |
| **Clinical alert** | Clinically meaningful rule-fired signal: out of range, critical value, retest due, adherence slip. May feed adherence loop. |
| **Notification** | General-purpose delivery record: OTP, booking confirmed, payment receipt, plan ready. Any channel, any user. |
| **Report intake job** | Pipeline tracker for a Report: received → extracting → extracted → in_review → published / failed. Not the Report itself. |
| **Audit log** | Who viewed or changed PHI and when. |
| **Metric snapshot** | Point-in-time north-star KPIs for admin dashboards. |

### 4.8 AI platform

| Entity | Definition |
|--------|------------|
| **AI job** | Async or sync model task: extract, interpret, draft plan, chat response. |
| **Model registry** | Canonical list of models, versions, providers, capabilities. |
| **Prompt version** | Versioned prompt template bound to a task type. |

### 4.9 Later

| Entity | Definition |
|--------|------------|
| **Partner org** | Generic org: hospital, insurer (not Lab partner). |
| **Wearable connection** | Linked device/app syncing vitals into graph. |
| **Chat session** | Optional Phase 2 grouping of multiple Chat threads in one visit. |

---

## 5. Relationships

### Identity

```
User ──has──▶ Patient profile          (optional)
User ──has──▶ Physician profile        (optional; physician role)
User ──has──▶ Payment profile          (one billing owner)
User ──assigned──▶ Role(s)

Family group ──primary_user──▶ User
Family group ──includes──▶ Patient profile   (via Family membership)
```

### Catalog

```
Panel ──contains──▶ Test catalog item        (via Panel item)
Diagnostic package ──contains──▶ Package item
Package item ──points to──▶ Test catalog item | Panel

Test catalog item ──expected markers──▶ Marker type   (via Expected marker map; 1:N)
Test catalog item ──extracted via──▶ Extraction template
```

### Orders & fulfillment

```
Patient profile ──places──▶ Diagnostic order ──for──▶ Diagnostic package
Diagnostic order ──has──▶ Order line ──references──▶ Test catalog item
Diagnostic order ──books──▶ Appointment
Appointment = Diagnostic order + Lab partner + Lab schedule slot
Lab partner ──publishes──▶ Lab schedule slot

Diagnostic order ──paid by──▶ Payment ──via──▶ Payment profile
Diagnostic order ──snapshots──▶ Commercial terms   (at purchase)
Diagnostic order ──on fulfill──▶ Payout ──to──▶ Lab partner
Diagnostic order ──produces──▶ Report
```

### Commercial

```
Lab partner ──offers──▶ Partner package offer ──for──▶ Diagnostic package
Partner package offer ──has──▶ Commercial terms
```

### Clinical & knowledge

```
Patient profile ──uploads──▶ Health document

Report | Health document ──extract──▶ Marker observation ──▶ Knowledge graph
Health plan version ──on publish──▶ Knowledge graph
Wearable stream ──sync──▶ Marker observation ──▶ Knowledge graph
Chat thread ──extract──▶ Knowledge graph   (low confidence until corroborated)

Marker trend = derived query over Marker observation* for Patient profile + Marker type

Knowledge graph ──projects──▶ Patient-facing health profile
Knowledge graph ──projects──▶ Doctor-facing health profile

Physician ──reviews──▶ Report
Physician ──comments on──▶ Report | Marker observation | Health plan
Physician ──iterates──▶ Health plan ──publish──▶ Health plan version

Report ──tracked by──▶ Report intake job
```

### Alerts & notifications

```
Knowledge graph | Adherence record ──triggers──▶ Clinical alert
Any event ──delivers via──▶ Notification ──to──▶ User
```

### AI

```
AI job ──reads──▶ Report | Health document | Knowledge graph
AI job ──writes──▶ Knowledge graph + Provenance
AI job ──uses──▶ Model registry + Prompt version
```

---

## 6. Shorthand formulae

### Identity

```
User + Role(s)                         → access control
User + Patient profile                 → health subject
User + Physician profile               → clinician metadata (same auth, not separate identity)
User + Payment profile                 → billing owner
Family group + Family membership       → multi-patient under one payer
```

### Catalog & package

```
Test catalog item     = atomic bookable test/scan (no result schema)
Panel                 = bundle of Test catalog items
Panel item            = Panel → Test catalog item
Diagnostic package    = marketing SKU + gates + display price
Package item          = Package → (Test catalog item | Panel) + required/optional/default_on
```

### Order & fulfillment

```
Diagnostic order      = patient purchase of a Diagnostic package
Order line            = Diagnostic order × Test catalog item × fulfillment_status
Lab schedule slot     = Lab partner × time window × capacity
Appointment           = Diagnostic order + Lab partner + Lab schedule slot
```

### Commerce

```
Payment profile       = User + billing prefs + saved methods
Payment               = Diagnostic order → cash in
Partner package offer = Lab partner × Diagnostic package
Commercial terms      = patient price + lab payout (fixed | %) + Zenlife margin
Payout                = fulfilled Diagnostic order → cash out to Lab partner
                      (amount from Commercial terms snapshot on order)
```

### Clinical artifacts

```
Report                = ecosystem-generated result only (lab/partner)
Health document       = user upload (anything; unclassified until processed)
Health plan           = active care plan (draft until published)
Health plan version   = immutable publish by physician
Physician comment     = annotation on Report | Marker observation | Health plan
```

### Knowledge graph

```
Marker type           = canonical observable (quantitative | finding | impression)
Marker observation    = one value/finding at one time → stored in graph
Marker trend          = query(Marker observation*) over time   [DERIVED — not stored]
Expected marker map   = Test catalog item → Marker type(s)     [1:N]
Extraction template   = how to extract markers from Report | Health document
Provenance            = source + model + user + confidence + timestamp

Profile sources (ingestion):
  Report | Health document | Health plan | Wearable stream | Chat thread
      └── ingest ──▶ Knowledge graph

Knowledge graph ──projects──▶ Patient-facing health profile
Knowledge graph ──projects──▶ Doctor-facing health profile
```

### Engagement & ops

```
Chat thread           = messages + topic scope → may enrich graph
Adherence record      = patient action on Health plan item
Clinical alert        = clinical/adherence rule fired (may enter adherence loop)
Notification          = general delivery (OTP, booking, receipt, plan ready)
Report intake job     = Report pipeline state (not the Report itself)
```

### Radiology example (multi-study)

```
Diagnostic order
  ├── Order line: X-ray PA view
  └── Order line: X-ray Lateral view
        ↓
Report (one or two per lab convention)
        ↓
Marker observation(s) per study/findings   [N per report, via Extraction template]
        ↓
Knowledge graph → Marker trend (derived)
```

### Pathology example (panel)

```
Test catalog item: Lipid panel
  └── Expected marker map → LDL, HDL, TG, Total cholesterol
        ↓
Report → Marker observation (one per marker type)
```

---

## 7. Order line fulfillment statuses

```
pending → scheduled → collected → processing → complete
                                              ↘ cancelled
                                              ↘ failed
```

---

## 8. Report intake job statuses

```
received → extracting → extracted → in_review → published
                                              ↘ failed
```

---

## 9. Terminology rules (do not mix)

| Use | Do not use for the same thing |
|-----|-------------------------------|
| Diagnostic order | Order (alone) |
| Appointment | Lab schedule slot |
| Lab schedule slot | Appointment |
| Report | Health document |
| Health document | Report |
| Patient-facing health profile | Snapshot |
| Doctor-facing health profile | Snapshot |
| Clinical alert | Notification |
| Marker trend | Stored entity |
| Chat thread | Chat session (Phase 1) |
| Report intake job | Report |

---

## 10. AI platform (cross-cutting)

Not domain entities, but wraps all AI capability:

- Model routing · model swapping · drift & eval · rate limits · latency SLAs · cost attribution · fallback · cache · schema validation · safety & audit · job orchestration

Every graph write from AI carries **Provenance**.

---

*Document version: 1.0 — finalized entity model for Zenlife Phase 1 scaffolding.*
