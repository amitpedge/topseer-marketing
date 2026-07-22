---
title: Fulfillment Loop
description: Loop 1 — Phase 1 fulfillment from patient sign-up through Zen report delivery.
order: 4
---

## 4. Diagnostic order lifecycle

Payment completes before the order is **`booked`**. The stage × actor matrix (§5) covers **`booked` → `delivered`** plus exception exits.

States **`under_review` and beyond** belong to **Loop 2 — Clinical Review & Plan**, not Fulfillment.

---

## 5. Stage × actor action matrix

**How to read:** each row is an order **state**. Columns list what each actor **can do on that order** at that state. The order is always tied to a **patient profile (UHID)**. Actions apply to the **diagnostic order** and its linked **appointment** / **Zen report** as noted.

| Order state | Patient | Ops | Lab partner staff | Super Admin |
|-------------|---------|-----|-------------------|-------------|
| **`booked`** *(slot reserved; payment captured)* | **View** order & appointment in My orders *(profile / UHID shown)*. **Reschedule** own appointment *(if policy allows)*. **Cancel** own order *(refund per policy O4)*. | **View** order, **UHID**, & patient record. **Reschedule** appointment. **Cancel** order. **Send** booking confirmation. **Monitor** day-of schedule. | **View** upcoming appointments *(patient name, **UHID**, package)*. **Confirm** → **`confirmed`**. **Manage** lab schedule slots & capacity *(lab-level)*. | **View** all orders. **Reschedule** or **cancel** *(exception)*. **View** catalog, partners, payout status *(not edit catalog here)*. |
| **`confirmed`** *(lab acknowledged booking)* | **View** order status & appointment. **Receive** reminders. **Reschedule** or **cancel** own order *(per policy)*. | **View** order & UHID. **Reschedule** or **cancel** on patient’s behalf. **Monitor** no-shows & SLA. | **View** appointment *(UHID for check-in)*. **Check in** patient → **`in_progress`**. | **View** order. **Reschedule** or **cancel** *(override)*. |
| **`in_progress`** *(patient at lab; tests underway)* | **View** status *(e.g. “In progress at lab”)*. Typically **cannot** reschedule or cancel *(contact support)*. | **View** order. **Monitor** SLA. **Cancel** only on exception. | **View** appointment. **Mark completed at lab** → **`completed_at_lab`**. | **View** order. **Override** state or **cancel** on exception. |
| **`completed_at_lab`** *(tests done; report not yet submitted)* | **View** status *(“Processing — awaiting report”)*. **Wait** — no Zen report yet. | **View** order & UHID. **Monitor** 24–48h report SLA *(O2)*. **Chase** overdue reports with lab. | **View** order *(match report to **UHID**)*. **Submit Zen report** via lab portal → **`reports_received`**. | **View** order & SLA dashboard. **Intervene** on stuck orders. |
| **`reports_received`** *(Zen report submitted; system processing)* | **View** status *(“Report received — preparing”)*. Cannot open final report yet. | **View** order & intake status. **Monitor** processing. **Notify** when ready. | **View** submitted report *(UHID on record)*. **Update / re-submit** if correction needed. | **View** order. **Exceptional archive / remove** Zen report *(audit retained)*. |
| **`delivered`** *(Zen report ready — Fulfillment complete)* | **View** Zen report in **My orders** *(PDF / viewer)*. Order **complete**. *(No Zen health plan in Phase 1.)* | **View** order, report, UHID. **Support** access issues. | **View** submitted report *(read-only)*. | **View** order, report, payout. **Archive** on exception. Payout typically automatic. |

### Exception states *(same actors; summary)*

| Order state | Patient | Ops | Lab partner staff | Super Admin |
|-------------|---------|-----|-------------------|-------------|
| **`cancelled`** | **View** cancelled order & refund status | **Cancel** + notify patient | **View** only | **Cancel** / override; audit |
| **`refunded`** | **View** refund confirmation | **View** reconciliation | — | **View** payment & payout records |
