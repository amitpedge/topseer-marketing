---
title: Fulfillment Loop
description: Loop 1 — Phase 1 fulfillment from patient sign-up through Zen report delivery.
order: 4
---

## 9. Related Zen Life decisions

These Fulfillment-blocking items should be resolved before Phase 1 lock-in. The full decision register lives in [Product Blueprint §17](/clients/zen/doc-1/).

- **L3** — Brand, copy, consent language *(sign-up & profile)*
- **New** — UHID format & assignment rules *(profile creation, lab matching)*
- **B1, B2** — Launch packages & pricing *(booking)*
- **O1** — Lab Zen report delivery format *(lab submit → `reports_received`)*
- **O2** — 24–48h turnaround commitment *(SLA on `completed_at_lab`)*
- **O3** — Payment methods *(`paid` → `booked`)*
- **O4** — Refund & cancellation policy *(patient/Ops cancel actions)*
- **O5** — Ops team size & hours *(Ops coverage)*

---

## 10. Related documents

| Document | Role |
|----------|------|
| [Product Blueprint](/clients/zen/doc-1/) | Parent blueprint — loops, phases, permissions |

---

*Fulfillment loop v1.1 — patient profile & UHID added; derived from Product Blueprint v1.3 Phase 1 scope.*
