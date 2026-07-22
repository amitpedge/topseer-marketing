---
title: Product Blueprint
description: Zen Life product vision, loops, phased delivery, and decision register.
order: 2
---

## 8. AI — strategy, scope & platform

*Phased AI rollout: no AI in Phase 1; AI begins Phase 2. Full detail in AI Roadmap.*

### 8.1 What AI does (by loop)

| Loop | Delivery phase | AI involvement | AI role | Physician validation |
|------|----------------|----------------|---------|---------------------|
| **Fulfillment** | Phase 1 | Non-AI | — *(ingest and store Zen report only)* | — |
| **Clinical Review & Plan** | Phase 2 | Human + AI | Extract markers from PDFs; draft summary; draft Zen health plan | **Required** before publish |
| **Interpretation & Guidance** | Phase 3 | AI | Generate patient-facing profile text; grounded chat on graph | — *(see open questions below)* |
| **Plan & Adherence** | Phase 4 | AI + Patient | Adherence insights; follow-up nudges | — *(see open questions below)* |
| **Continuous Enrichment** | Phase 5 | Autonomous AI | OCR/classify other reports; extract markers; chat → graph facts | Low-confidence facts flagged |
| **Multi-modality & formats** | Phase 6+ | AI platform maturity | Voice/video UX; DICOM; wearables — per AI Roadmap | Per regulatory review |

**Open questions (Zen Life to decide):**

1. **Interpretation & Guidance (Phase 3):** Do we escalate anything from this loop to a human physician? *(e.g. clinical questions, low-confidence chat, critical concern flagged in conversation)*
2. **Plan & Adherence (Phase 4):** Do we alert a physician from this loop? *(e.g. sustained non-adherence, patient-reported symptom in chat, out-of-range trend)*

### 8.2 AI — full detail in one document

All AI strategy, roadmap, and platform detail lives in **AI Roadmap**:

| Part | Contents |
|------|----------|
| **I — Strategy** | L0–L5 layers, graph evolution, HITL T0–T3, product surfaces, eval philosophy |
| **II — Roadmap** | Data source pipelines, UX modalities (text/voice/video), DICOM stack, learning |
| **III — Platform** | Routing, swapping, drift, cost, latency, safety, release gates |

**Phased AI rollout:** Phase 1 = no AI · Phase 2 = extraction + plan draft · Phase 3 = graph + chat · Phase 4–5 = adherence + enrichment · Phase 6+ = multi-modality.

### 8.3 AI platform (summary)

Single **AI gateway** for all model calls — see **AI Roadmap Part III** for full detail.

| Concern | Approach |
|---------|----------|
| **Model routing** | Right model per task (extract vs chat vs plan draft) |
| **Swapping** | Upgrade models via config; version logged on every output |
| **Quality** | Golden test sets; physician corrections as training signal |
| **Drift** | Monitor extraction accuracy and output changes over time |
| **Cost & limits** | Per-user rate limits; cost per Zen report tracked |
| **Safety** | Schema validation on outputs; PHI controls; audit trail |

---
