---
title: Fulfillment Loop
description: Loop 1 — Phase 1 fulfillment from patient sign-up through Zen report delivery.
order: 4
---

**Version:** 1.1 · **Date:** July 2026  
**Parent:** [Product Blueprint](/clients/zen/doc-1/) v1.3 · Phase 1 (non-AI)  
**Audience:** Zen Life stakeholders, product, operations, lab partners

---

## 1. Scope

Loop 1 covers everything from first visit through Zen report delivery. The spine of Fulfillment is **patient profile (UHID) → diagnostic order → Zen report**.

### Locked decisions *(this doc)*

- **P8 / wait:** Phase 1 ends when the **Zen report is ready** in the patient’s order view — not when a Zen health plan is ready *(Loop 2)*.
- **Lab calendar:** **Lab partner staff** manage their own **lab schedule slots and capacity** from day one — capability exists at **lab partner level only**.
- **Granularity:** Actions described at **diagnostic order** level only. Smallest sellable unit breakdown *(package item / order line)* comes later.
- **Report intake:** **No manual Ops upload** in Phase 1. All lab partner staff use the **same portal** to submit Zen reports. Manual Ops intake and a dedicated external partner portal are **later**.
- **Rebook:** **Out of scope** for this doc.

---

## 2. End-to-end sequence *(Phase 1)*

Fulfillment is not only the order lifecycle — it starts when a person becomes a **registered patient** in Zenlife. Steps **1–2** happen before any order exists. Steps **3–6** follow the diagnostic order lifecycle in §4.
