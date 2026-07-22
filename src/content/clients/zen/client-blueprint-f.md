---
title: Product Blueprint
description: Zen Life product vision, loops, phased delivery, and decision register.
order: 2
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
