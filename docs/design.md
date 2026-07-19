# Topseer — Design System

> Brand tokens and layout system for **Topseer** presentations and visual artifacts.
> Pairs with the `topseer-presentations` skill: the skill is the *how*, this file is the *what*.
> Hex codes are written **without** the `#`. Keep them 6 characters.

---

## 0. Brand basics

- **Brand name:** Topseer
- **Legal entity:** Topseer Tech Private Limited
- **Personality:** Cutting-edge · sharp · modern · rare
- **What it does:** Deep technical expertise in generative AI. Topseer teaches companies how to
  transform themselves to embrace and adopt generative AI.
- **Voice in decks:** authoritative and precise, never hype-y. The "rare" quality comes from
  restraint, generous whitespace, and confident asymmetry — not from decoration.

---

## 1. Colors (by role)

Warm, editorial palette. Deep petrol dominates; rust and copper are the two warm accents; cream and
white are the two paper surfaces.

| Role | Hex | Notes |
|------|-----|-------|
| **Anchor / dark** | `1F3A3D` | Deep petrol. The dominant dark — title backgrounds, dark panels, statement slides. |
| **Secondary** | `5E7C7B` | Dusty teal. Big index numerals, panels, muted supporting marks. |
| **Accent 1 — structural** | `B87333` | Copper. The calmer accent: eyebrow labels, markers, structural emphasis. |
| **Accent 2 — pop** | `C8613A` | Rust. The louder accent: reserved for the ONE thing that pops per slide. |
| **Paper — warm** | `F7F0DD` | Cream (pale yellow). The default warm surface for content and cards. |
| **Paper — crisp** | `FFFFFF` | Pure white. The clean alternate surface — vary against cream in a deliberate rhythm. |

### Neutrals

| Role | Hex | Notes |
|------|-----|-------|
| Text (body / headings on light) | `1F3A3D` | Petrol doubles as the ink on cream/white. |
| Text (muted) | `6E7A78` | Captions, standfirsts, secondary labels. |
| Hairline / card border | `DED9CC` | Quiet borders on cream/white cards. |
| Teal wash (subtle panel on white) | `E6EDEC` | Optional light panel tint. |
| On dark: primary text | `F7F0DD` | Cream reads warmer than white on petrol. |

**Never (color):** give copper and rust equal footing with petrol — petrol leads. Use **one rust
emphasis per slide, maximum**. Don't reintroduce bright teal/blue (the retired palette).

---

## 2. Typography

Two brand fonts (both Google Fonts, installed in the build environment so QA renders true).
**Do not use Arial, Calibri, or Cambria.**

- **Merriweather** (serif) — the *rare / editorial* voice. Owns all hero moments: title and section
  headlines, oversized index numerals, big stat figures, statement slides.
- **Barlow** (sans) — the *sharp / modern* workhorse. Owns everything functional: eyebrow labels,
  body, captions, row content, table text.
- **JetBrains Mono** *(optional supporting)* — code, model names, technical tokens only.

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Title / section headline | Merriweather | 44–96pt | Bold |
| Oversized index numeral | Merriweather | 120–160pt | Bold |
| Big stat figure | Merriweather | 200–360pt | Bold |
| In-slide subhead / card title | Barlow or Merriweather | 24–34pt | SemiBold / Bold |
| Eyebrow label (CAPS, letter-spaced) | Barlow | 18–20pt | Bold |
| Body / standfirst | Barlow | 18–24pt | Regular / Medium |
| Captions | Barlow | 12–16pt | Regular, muted |

**Font robustness:** a viewer without the fonts will see a substitute. For decks leaving Topseer,
embed fonts in the `.pptx` (PowerPoint → Save → Embed fonts) or ship the font files alongside.

---

## 3. Logo

Two variants — primary logo and monogram — refreshed to the final palette (petrol mark, rust focal
dot). The mark is three ascending, narrowing chevrons converging to a focal point: foresight reached
through iterative refinement.

**Files (in this folder):**
- Primary, on light: `topseer-logo.svg` · `topseer-logo.png`
- Primary, on dark: `topseer-logo-dark.svg` · `topseer-logo-dark.png` *(cream wordmark)*
- Monogram: `topseer-monogram.svg` · `topseer-monogram.png` *(mark in a petrol rounded square)*

**Usage:** clear space ≥ the mark's height; primary logo top-left on content or centred on the
title; cream/dark variant on petrol; monogram for small/square contexts. Min size: primary ≥ 1.2 in,
monogram ≥ 0.25 in. Never recolor (beyond the sanctioned cream-on-dark), stretch, or add effects.

---

## 4. Layout system — mix, don't repeat

The single biggest anti-"AI-generated" move: **do not run one template across the deck.** Assign a
layout by the slide's job, and vary the surface (petrol / cream / white) in a deliberate rhythm
(e.g. dark title → cream content → white data → dark section break). Six directions:

| # | Layout | Surface | Use for |
|---|--------|---------|---------|
| **A** | **Editorial / asymmetric** — oversized Merriweather headline, big top whitespace, one rust word, faint large mark. | Cream | Title slides. |
| **B** | **Vertical split** — a dark label panel (giant teal index numeral, copper eyebrow, cream title) beside a generously spaced content area. | Petrol panel + white | Most content slides. |
| **C** | **Stat-driven** — one dominant figure (petrol, rust unit) carries the slide; support text beside it. | Cream | A single punchy number. |
| **D** | **Full-bleed dark, sparse** — large cream serif statement, one rust word, generous void, faint mark. | Petrol | Section breaks, thesis moments. |
| **E** | **Dominant + subordinate** — one large lead tile plus smaller supporting tiles; never an even grid. | White + petrol + cream | Frameworks, component groups. |
| **F** | **Sidebar index + editorial rows** — a rotated index label and ghosted Merriweather numeral down the side; content in cream rows; status in copper/rust. | White + cream | Tables and lists (so they don't read as spreadsheets). |

**Principles across all layouts:** asymmetry over symmetry; a clear dominant element over equal
weighting; fewer, larger elements; generous whitespace; left-aligned text (centre only display
titles).

---

## 5. Visual motif — the signature devices

Repeat these, sparingly, so the deck feels authored:

- **Oversized, ghosted Merriweather index numerals** (01, 02 …) as the recurring structural anchor —
  large and quiet (cream on dark, or a pale wash on light).
- **The refinement-tick mark** (the logo's converging chevrons) used *large and faint* as a
  watermark on hero/dark slides, and *small* as an occasional section marker.
- **One rust accent per slide** — a single word, dot, or figure. Rust is punctuation, not paint.

**Never:** accent lines under titles; decorative color bars or edge stripes; icon-in-a-circle on
every slide (the numeral + mark is the signature, not uniform icon cards); gradients as native
fills; every slide the same surface color.

---

## 6. Charts

| Property | Value |
|----------|-------|
| Primary series | Petrol `1F3A3D` or dusty teal `5E7C7B` |
| Emphasis series | Rust `C8613A` |
| Line weight | ~3.25pt, markers on, not smoothed |
| Gridlines | `DED9CC`, value-axis only |
| Axis labels | Muted `6E7A78`, Barlow, ~10pt |
| Data labels | Petrol `1F3A3D` |
| Multi-series order | `1F3A3D` → `5E7C7B` → `B87333`, then `C8613A` for the emphasized series |

---

## 7. How this file is used

- Bundle this `design.md` (and the logo files) **inside the `topseer-presentations` skill folder**
  → Topseer branding applies automatically whenever the skill triggers.
- **Or** attach this `design.md` to a specific chat → it overrides the skill's default for that
  conversation.
- Procedure lives in the skill; brand and layout live here — so a change only touches this file.
