---
title: Fulfillment Loop
description: Loop 1 — Phase 1 fulfillment from patient sign-up through Zen report delivery.
order: 4
---

## 6. What each actor does *not* do in Phase 1 Fulfillment

| Actor | Out of scope |
|-------|----------------|
| **Patient** | Create or upload Zen reports. View AI interpretation, patient-facing health profile, or Zen health plan *(Loop 2+)*. Rebook *(deferred)*. |
| **Ops** | **Manual Zen report upload** *(deferred)*. Create/edit packages or commercial terms *(Super Admin only)*. |
| **Lab partner staff** | Edit catalog, pricing, or patient profile fields. Manage slots for other lab partners. |
| **Super Admin** | Day-to-day appointment operations *(Ops)*. Submit Zen reports *(lab portal)*. |
| **Physician** | Not in Loop 1. |
| **Clinician QA** | Not in Loop 1. |

---

## 7. Notifications *(by stage — illustrative)*

| Transition | Typical notification |
|------------|---------------------|
| Profile created | Welcome / UHID confirmation *(optional)* |
| → **`booked`** | Booking confirmed *(patient)* |
| → **`confirmed`** | Appointment confirmed *(patient)* |
| → **`in_progress`** | Optional: checked in *(patient)* |
| → **`delivered`** | Zen report ready — view in My orders *(patient)* |
| SLA breach on **`completed_at_lab`** | Internal chase *(Ops ↔ lab)* |
