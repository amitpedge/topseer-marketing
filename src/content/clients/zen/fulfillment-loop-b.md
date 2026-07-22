---
title: Fulfillment Loop
description: Loop 1 — Phase 1 fulfillment from patient sign-up through Zen report delivery.
order: 4
---

## 3. User, patient profile & UHID

Every Fulfillment journey is anchored to a **patient profile**. The profile is created at sign-up — **before** the first booking — and persists across all future orders and Zen reports.

### 3.1 Three layers — do not conflate

| Layer | What it is | Phase 1 role |
|-------|------------|--------------|
| **User** | Auth identity — mobile number, OTP login, assigned roles | Sign-in; owns the account |
| **Patient profile** | Regulated **health subject** record linked to the User — demographics, **UHID**, consent, preferences | Created at sign-up; **every diagnostic order and Zen report belongs to this profile** |
| **Patient-facing health profile** | **Graph projection** — good / concern / next steps, AI copy, chat entry points | **Not in Phase 1** *(Loop 3)* — do not build or promise this in Fulfillment |

*Internal entity names: User, Patient profile. UHID is introduced here as a Fulfillment requirement and should be added to the entity model on the next engineering pass.*

### 3.2 UHID — unique identifier

**UHID** *(Unique Health Identifier)* is the **canonical, system-assigned identifier** for a patient profile in Zenlife — analogous to identifiers used by regulated healthcare entities.

| Property | Rule |
|----------|------|
| **Assigned when** | At **patient profile creation** (sign-up), before the first diagnostic order |
| **Uniqueness** | **Globally unique** within Zenlife; never reused |
| **Immutability** | **Permanent** — does not change if the patient updates mobile, name, or address |
| **Visibility** | Shown on patient profile, diagnostic orders, appointments, and Zen reports *(lab and ops workflows)* |
| **Purpose** | Single stable key for regulated operations: lab requisitions, report matching, audit, support, and future clinical integrations |

UHID is **not** the mobile number, email, or internal database primary key exposed to users — it is the **regulated-facing patient identifier** for the Zenlife ecosystem.

### 3.3 Patient profile — Phase 1 fields *(Fulfillment minimum)*

Collected or assigned during **sign up** (Product Blueprint §3.2):

| Field / artefact | Collected by | Notes |
|------------------|--------------|-------|
| **UHID** | System | Auto-generated at profile creation |
| **Mobile number** | Patient | OTP verification; login identity on **User** |
| **Gender** | Patient | Package eligibility gates |
| **Age / date of birth** | Patient | Package eligibility gates *(exact field TBD with Zen Life)* |
| **Consent** | Patient | Terms, privacy, health-data processing *(L3)* |
| **Name** | Patient | Display and lab-facing identity *(if collected at sign-up)* |
| **Payment profile** | Patient | Created or linked when first paying *(may be deferred until book step)* |

Phase 1 does **not** require a populated knowledge graph or patient-facing health profile. The **patient profile** is the identity shell; Zen reports attach to it as files.

### 3.4 Profile × actor actions *(Phase 1)*

What each actor can do on the **patient profile** during Loop 1 *(not on a specific order)*:

| Actor | Can do | Cannot do |
|-------|--------|-----------|
| **Patient** | **Create** profile at sign-up. **View** own profile & UHID. **Edit** own demographics & consent *(policy TBD)*. **View** own order history & Zen reports under My orders. | View other patients. Edit UHID. |
| **Ops** | **View** any patient profile & UHID. **View** all orders and reports for support. **Assist** profile corrections on request *(audit logged)*. | Create profiles on behalf of patients *(unless Zen Life decides otherwise)*. |
| **Lab partner staff** | **View** patient identity fields **needed for the appointment** *(name, UHID, gender, age, package)* on **their** lab’s appointments only. | Browse all patients. Edit profile. |
| **Super Admin** | **View** all profiles & UHIDs. **Manage** user accounts & roles. **Deactivate** account *(soft)* on exception. | Impersonate patient without audit. |

### 3.5 How profile links to fulfillment artefacts

- Every **diagnostic order** is placed **by** a patient profile *(not by a bare User)*.
- Every **Zen report** is linked to the **diagnostic order** and therefore to the **patient profile / UHID**.
- Lab partner staff see **UHID on the appointment** when confirming, checking in, and submitting the report — for correct patient matching.
