---
title: Product Blueprint
description: Zen Life product vision, loops, phased delivery, and decision register.
order: 2
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

`draft → pending_payment → paid → booked → confirmed → in_progress → completed_at_lab → reports_received → delivered` *(exit: `cancelled` · `refunded`)*

*States `under_review` and beyond apply once Loop 2 (Phase 2) begins. See [Fulfillment Loop](/clients/zen/doc-4/) for the full Phase 1 lifecycle.*

### 4.2 Workflows (operational — not patient loops)

| Workflow | Purpose | AI |
|----------|---------|-----|
| **Ops** | Appointments, SLA, Zen report intake, notifications | Non-AI |
| **Lab partner** | Run tests, submit Zen reports | Non-AI |
| **Super Admin** | Catalog, packages, partners, users, commercial terms | Non-AI |
| **Finance** | Payments, refunds, payouts *(Phase 1: handled by Super Admin)* | Non-AI |
| **Clinician QA** | AI validation before release | Human + AI |

### 4.3 Architecture (conceptual)

All profile feeds merge into a single **knowledge graph** — the canonical store behind patient-facing and doctor-facing health profiles. **Loop 5** enrichment runs continuously across all sources. **Loop 1** flows into **Loop 2**; the patient then engages with **Loop 3** and **Loop 4**.
