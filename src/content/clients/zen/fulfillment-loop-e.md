---
title: Fulfillment Loop
description: Loop 1 — Phase 1 fulfillment from patient sign-up through Zen report delivery.
order: 4
---

## 8. Handoff to Loop 2

When the order is **`delivered`**, Fulfillment is **complete**. The Zen report exists in the system, linked to the **patient profile (UHID)**. **Loop 2** *(Phase 2)* begins when the physician queue picks up the report for clinical review and Zen health plan drafting — states **`under_review` and beyond**.

---

## 9. Related Zen Life decisions

| ID | Question | Blocks |
|----|----------|--------|
| **L3** | Brand, copy, **consent language** | Sign-up & profile |
| **New** | **UHID format & assignment rules** *(prefix, length, checksum)* | Profile creation, lab matching |
| B1, B2 | Launch packages & pricing | Booking |
| O1 | Lab Zen report delivery format | Lab submit → **`reports_received`** |
| O2 | 24–48h turnaround commitment | SLA on **`completed_at_lab`** |
| O3 | Payment methods | **`paid` → `booked`** |
| O4 | Refund & cancellation policy | Patient/Ops cancel actions |
| O5 | Ops team size & hours | Ops coverage |

---

## 10. Related documents

| Document | Role |
|----------|------|
| [Product Blueprint](/clients/zen/doc-1/) | Parent blueprint — loops, phases, permissions |

---

*Fulfillment loop v1.1 — patient profile & UHID added; derived from Product Blueprint v1.3 Phase 1 scope.*
