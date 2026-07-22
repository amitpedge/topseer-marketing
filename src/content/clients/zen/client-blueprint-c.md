---
title: Product Blueprint
description: Zen Life product vision, loops, phased delivery, and decision register.
order: 2
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
