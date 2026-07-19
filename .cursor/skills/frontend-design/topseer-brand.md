# Topseer — brand tokens (companion to frontend-design)

Read this alongside `SKILL.md` when designing Topseer marketing pages. Palette is derived
from the Clasico reference and fixed by the client; spend creative freedom on layout,
type treatment, and the signature element — not on inventing new colors.

## Subject
- **Topseer** — AI study agents for two audiences: **school students** and **UPSC aspirants**.
- The site carries a **School | UPSC** switch; audience is encoded in color.
- Page's single job: get the right person to start with the right agent.

## Palette (source of truth: `src/styles/tokens.css`)
| Name | Hex | Use |
|------|-----|-----|
| Paper | `#FAFAF8` | Page background |
| Paper deep | `#F2F2EF` | Alternating panels, cards |
| Sage | `#D6EBD8` | School world, soft panels |
| Green | `#2A7A4E` | School solid accent (AA-safe on paper) |
| Signal red | `#E63329` | Signature accent, badges, UPSC world |
| Red solid | `#D62B20` | UPSC solid CTA (AA-safe) |
| Ink | `#2A2A28` | Text — dark grey |
| Ink muted | `#5C5C58` | Secondary text |

`--accent` is remapped by mode: **school → green**, **upsc → red**.

## Type
- Display: **Newsreader** (serif) — used with restraint; italics for one accent word.
- Body / UI: **Hanken Grotesk**.
- Eyebrows: Newsreader, uppercase, letter-spacing ~0.22em (the Clasico move).

## Signature
- The **School ⇄ UPSC toggle** re-skins the hero (copy, agent names, accent color).
- Keep everything else quiet. One bold move only.

## Guardrails
- Do not reintroduce the generic "cream + serif + terracotta" feel: the red is a loud
  signal, not a soft terracotta, and sage adds a second axis.
- Numbered markers only where content is a real sequence (e.g. "How it works").
- Respect reduced motion; visible keyboard focus; mobile down to 360px.

## Masthead (spatial system)

Source of truth in code: `HomeNav.astro`, `home.css`, `tokens.css` (`--gutter`,
`--masthead-icon`, `--masthead-row`). Cursor rule: `.cursor/rules/masthead.mdc`.

### One left rail
Logo, tier-2 sub-nav, and hero lede (`hero__lede`) must share the same left inset
(`padding-inline-start` of `--gutter` on `.masthead__shell` / `.hero__shell`). Never
mix left-aligned logo with centered sub-nav.

### Desktop (≥900px)

```
[ Topseer logo ]     [ School · UPSC · JEE · NEET ]     About · Contact · Privacy  (user)
────────────────────────────────────────────────────────────────────────────────────────
Agents · How it works · For parents · Guides · Why Topseer
```

- Row 1 grid: `minmax(0,1fr) auto minmax(0,1fr)` — logo | exam tabs (true center) | utility.
- Row 2: sub-nav left-aligned on the logo rail; small type; hairline top border.
- Hamburger hidden. About / Contact / Privacy visible in utility cluster.
- User icon (profile → `/contact/`): ghost button, no border box at gutter edge.

### Mobile (<900px)

```
[ ☰ ]              [ Topseer logo ]              [ user ]
[ Sch · UPSC · JEE · NEET — full width pill ]
Agents · How it works · For parents · Guides
```

- Row 1: fixed `--masthead-row` (3.5rem), icons vertically centered; logo centered in middle column.
- Row 2: exam tabs on grid row 2 (not flex-wrapped into row 1).
- Row 3: sub-nav; tier-2 capped at 4 links; overflow + About/Contact/Privacy in drawer.
- Icons: borderless, `--masthead-icon` touch target; inset comes from `--gutter` on shell.

### Icon treatment
- **Do:** transparent background, subtle hover wash (`--paper-deep`), 2.75rem hit area.
- **Do not:** bordered squares that visually kiss the viewport edge; separate padding on buttons
  that fights `--gutter`.

### Exam tabs
- Order: School → UPSC → JEE → NEET. JEE/NEET disabled (greyed, no navigation).
- Pill container; active tab uses `--accent` (school green / upsc red via `data-exam`).
