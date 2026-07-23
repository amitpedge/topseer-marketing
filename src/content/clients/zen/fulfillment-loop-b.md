---
title: Fulfillment Loop
description: Loop 1 — Phase 1 fulfillment from patient sign-up through Zen report delivery.
order: 4
---

## 3. User, patient profile & UHID

Every Fulfillment journey is anchored to a **patient profile**. The profile is created at sign-up — **before** the first booking — and persists across all future orders and Zen reports.

*Internal entity names: User, Patient profile. UHID is introduced here as a Fulfillment requirement and should be added to the entity model on the next engineering pass.*

UHID is **not** the mobile number, email, or internal database primary key exposed to users — it is the **regulated-facing patient identifier** for the Zenlife ecosystem.

Phase 1 does **not** require a populated knowledge graph or patient-facing health profile. The **patient profile** is the identity shell; Zen reports attach to it as files.

### 3.5 How profile links to fulfillment artefacts

- Every **diagnostic order** is placed **by** a patient profile *(not by a bare User)*.
- Every **Zen report** is linked to the **diagnostic order** and therefore to the **patient profile / UHID**.
- Lab partner staff see **UHID on the appointment** when confirming, checking in, and submitting the report — for correct patient matching.
