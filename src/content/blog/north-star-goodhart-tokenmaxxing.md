---
title: "A North Star Is a Hypothesis About What Creates Value"
description: "Goodhart's Law is what happens when that hypothesis becomes dogma — and tokenmaxxing is the 2026 replay of the lines-of-code mistake."
date: 2026-07-21
author: Topseer
slug: north-star-goodhart-tokenmaxxing
tags:
  - AI
  - product
  - metrics
  - Goodhart's Law
  - North Star
  - tokenmaxxing
draft: false
---

*How product teams can align on metrics without repeating the lines-of-code — and now tokenmaxxing — mistakes.*

---

## The tension in one sentence

Product teams need a North Star to align everyone on what matters. Goodhart's Law warns that the moment you turn that measure into a target, people optimize the number — not the value behind it. The conflict is real. It is also solvable — if you treat your North Star as a living hypothesis, not immutable doctrine.

---

## What Goodhart's Law actually says

In 1976, British economist Charles Goodhart observed:

> **"When a measure becomes a target, it ceases to be a good measure."**

The pattern is old and well documented. Offer a bounty for dead cobras, and people breed cobras. Pay programmers by lines of code, and programs get longer — not better. In 2026, celebrate engineers for burning the most AI tokens, and teams optimize token consumption — not business outcomes.

Goodhart's Law is **descriptive**, not prescriptive. It does not say "never measure." It says: **the more visible, social, and incentive-linked a metric becomes, the faster it decouples from the truth it was meant to represent.**

Donald Wheeler offers a more actionable framing. When people are pressured to hit a quantitative target, they have three options:

1. **Improve the system** — the outcome you want
2. **Distort the system** — game the process
3. **Distort the data** — fake the numbers

Healthy organizations make (2) and (3) difficult, and give people room to do (1).

---

## What a North Star is supposed to do

Sean Ellis coined the term "North Star metric" to give product teams a single, memorable anchor for growth. A credible North Star should:

- **Lead to revenue** — connect to sustainable business outcomes
- **Reflect customer value** — measure something customers actually care about
- **Measure progress** — give teams a signal they can act on

The North Star was never meant to be the only number a company tracks. It is a **compass** — a shorthand for strategic direction. Like Polaris itself, it drifts over time. Companies that refuse to revisit their North Star when the business changes are the ones most vulnerable to Goodhart's Law.

Modern product organizations extend this with **metric trees**: a causal map from controllable input metrics → focus metrics → North Star. Amazon's Weekly Business Review is the canonical example — obsess over inputs you can influence, audit whether they still drive outputs, and kill metrics that stop working.

Ibrahim Bashir calls the failure mode **"South Star metrics"** — when over-rotation on a North Star produces obviously counterproductive behavior. His favorite example: a Microsoft PM who stopped asking users for permission before rebooting machines, just to push Windows Update adoption above 90%.

The North Star did not fail because it existed. It failed because it became **dogma**.

---

## Where North Stars and Goodhart collide

On the surface, the two ideas seem opposed:

| North Star thinking | Goodhart's Law |
|---|---|
| Pick one metric and align the org | The moment you align the org behind one metric, it breaks |
| Optimize everything toward the North Star | Optimizing toward a measure destroys its meaning |

But the real conflict is not "metrics vs. no metrics." It is **compass use vs. scoreboard use**:

- **Compass use**: the North Star sets direction; teams maintain a causal model of how their work connects to customer and business value
- **Scoreboard use**: the North Star becomes a leaderboard tied to status, budgets, or performance reviews — and smart people optimize the visible number

Goodhart's Law activates when a hypothesis about value hardens into an incentive structure. The metric stops being a question ("does this still predict value?") and becomes an answer ("hit this number, come hell or high water").

---

## Tokenmaxxing: Goodhart's Law in real time

**Tokenmaxxing** — optimizing AI workflows for token consumption rather than business outcomes — is the 2026 replay of the lines-of-code mistake.

Across Silicon Valley, token spend has become a proxy for AI productivity:

- Databricks publicly applauded an engineer who spent $7,000 in tokens in two weeks
- Sendbird runs leaderboards ranking employees from "Beginner" to "AI God" (100M+ tokens per day)
- Meta's internal "Claudeonomics" reportedly ranked employees by token usage
- Jensen Huang suggested a $500K engineer should consume at least $250K worth of tokens annually
- Andrew Bosworth celebrated engineers spending salary-equivalent token budgets for "5x–10x productivity" — with unclear measurement of that productivity

Tokens are an **input cost**, not an **output value**. The moment "most tokens this week" becomes socially visible, engineers do what engineers always do: they optimize the visible number. They paste larger contexts. They route to premium models when cheaper ones would suffice. They build agents that recursively call themselves.

TrueFoundry identifies four characteristic failure modes:

1. **Premium-model overuse** — Opus for tasks Haiku handles at one-fifth the cost
2. **Context stuffing** — dumping entire repositories into prompts "just to be safe"
3. **Agent loops** — runaway agents burning budget overnight
4. **Tokenizer drift** — same prompt, more tokens after a model migration; bills rise silently

Even proponents admit the parallel. Sendbird's CEO told Forbes: *"We've seen this movie before."* Token spend, he said, is a conversation starter — not a performance metric. Real productivity is measured by how much AI-generated work actually ships to production.

That distinction is everything. A North Star used as a **conversation starter** is different from one used as a **compensation input**.

---

## The token value chain: who wins when tokens become the target

Not everyone in the AI economy faces the same Goodhart risk.

Vik Sekar's **token value chain** clarifies the incentives:

| Tier | Who | Revenue tied to token volume? |
|---|---|---|
| **Token suppliers** | Nvidia, neoclouds, chip ecosystem | Yes — more tokens = more hardware |
| **Token providers** | Anthropic, OpenAI, Google | Yes — pay-per-token pricing |
| **Token consumers** | Most enterprises and product teams | No — revenue comes from outcomes, not inference |

Suppliers and providers win on volume. Consumers must win on **outcomes per token**. When a consumer-tier company adopts tokenmaxxing as strategy, it is optimizing a metric that benefits everyone upstream — while bearing the cost downstream.

Tokenmaxxing can be rational for a hyperscaler building internal AI capability at scale. For a product team shipping customer-facing software, it is a North Star pointing south.

---

## How to reconcile North Star thinking with Goodhart's Law

Goodhart's Law does not argue against having a North Star. It argues against treating any proxy as if it *were* the value itself.

### 1. Separate compass from scoreboard

Use the North Star to set direction. Never tie compensation, promotion, or public ranking directly to it without quality guardrails and independent audit.

### 2. Build metric trees, not lone numbers

Map input metrics → focus metrics → North Star. Review weekly whether inputs still predict outputs. Kill metrics that stop working — as Amazon evolved from "detail pages created" to "Fast Track In Stock."

### 3. Make gaming expensive and visible

For AI specifically: gateway controls, per-workflow attribution, budget circuit breakers, and session limits on agent loops. Measure cost *and* outcome on the same dashboard.

### 4. Match incentives to controllable inputs

Reward quality of AI usage, not quantity of tokens. If you show token dashboards, pair them with outcome dashboards — always.

### 5. Accept that North Stars expire

No metric stays clean forever. Organizations that rotate metrics as the business evolves survive. Organizations that literalize one metric into culture eventually optimize nonsense.

---

## What a healthy AI-native product North Star might look like

Not all metrics are equally resistant to Goodhart's Law. The best North Stars sit close to **customer value** and **business throughput** — not engineering activity or input cost.

### Less preferred: activity and efficiency proxies

These metrics are seductive because they are easy to measure. They are also easier to game, and they sit one or two steps removed from the value customers and the business actually receive.

| Metric | Why it is weaker |
|---|---|
| **Cost per merged PR** (with quality gates) | Measures engineering output, not customer impact. Quality gates help, but "cheap PRs" can still ship the wrong things fast. |
| **Time from idea to production** (with defect rate guardrails) | Speed is not value. Teams can rush low-impact features through the pipeline and hit the metric while customers notice nothing. |
| **Intelligence per dollar** (task success rate / token cost) | Better than raw tokens, but still an internal efficiency ratio. High task success on irrelevant tasks is still waste. |

These are useful **input metrics** and **guardrails**. They belong in the metric tree. They should not be the North Star.

### Preferred: genuinely value-indicative North Stars

These metrics bind AI-assisted work to outcomes the business and its customers actually care about. They are harder to game because gaming them requires faking value delivery — not just burning compute.

#### 1. Customer outcomes per AI-assisted workflow

Measure what changes for the customer when AI is in the loop — not how much AI was used.

**Examples by context:**

- **Support**: resolution rate and time-to-resolution for AI-assisted tickets, with customer satisfaction (CSAT) held flat or improved
- **Sales**: qualified pipeline generated per AI-assisted outreach sequence, with conversion rate as a guardrail
- **Product**: task completion rate for AI-assisted user flows (e.g., "user achieved their goal in one session")
- **Internal tools**: employee time saved on a defined workflow, validated by before/after measurement — not self-reported "productivity"

**Why it works:** You cannot tokenmaxx your way to higher customer resolution rates without actually resolving customer problems.

#### 2. Team business-facing throughput

Measure how much **validated business value** each team ships per period — not how much code or how many tokens they consume.

**Examples:**

- **Revenue-facing teams**: incremental revenue or retention lift attributable to shipped features (via experiment or cohort analysis)
- **Platform teams**: adoption and success rate of internal capabilities by downstream product teams
- **Growth teams**: activated users or expansion revenue per experiment cycle, not experiments run
- **Ops teams**: cost avoided or SLA improvement delivered per quarter, tied to a named business outcome

**Why it works:** Throughput is measured at the boundary where work meets the business — not inside the engineering machine where proxies proliferate.

#### 3. Value validated in production

Count outcomes that survived contact with real users and real systems.

**Examples:**

- Percentage of AI-generated code that reaches production *and* stays there for 90 days without rollback
- Features shipped with positive experiment results (statistically significant lift on a focus metric)
- AI-assisted workflows that remain above a success threshold after 30 days in production

**Why it works:** Production validation is a natural anti-Goodhart filter. It is much harder to fake value that persists in the wild.

#### 4. Customer retention and expansion tied to AI capabilities

For AI-native products, connect the North Star directly to whether AI features drive loyalty and growth.

**Examples:**

- Net revenue retention (NRR) for accounts using AI features vs. those not using them
- Feature-level retention: do users who adopt an AI capability retain at higher rates?
- Expansion revenue from AI-powered upsell paths

**Why it works:** Retention and expansion are lagging indicators of genuine value — the customer voted with their wallet and their continued attention.

#### 5. Outcome density per dollar of AI spend

When you must include cost — and you should — bind spend to outcomes, not to activity.

**Formula:** (Customer or business outcomes delivered) / (Total AI inference cost for that workflow)

**Examples:**

- Support tickets resolved per $100 of AI spend
- Revenue influenced per $1,000 of AI spend on sales workflows
- Active users retained per $500 of AI spend on personalization

**Why it works:** Unlike "intelligence per dollar" (an internal efficiency ratio), outcome density forces the numerator to be something the business actually cares about.

---

## A practical hierarchy for AI-native product teams

```
NORTH STAR (hypothesis — revisit quarterly)
├── Customer outcomes per AI-assisted workflow
├── Team business-facing throughput
└── Value validated in production

FOCUS METRICS (lagging indicators of North Star health)
├── Retention/expansion tied to AI capabilities
└── Outcome density per dollar of AI spend

INPUT METRICS (controllable levers — review weekly)
├── AI adoption rate on high-value workflows
├── Human review pass rate on AI outputs
└── Time-to-first-useful-output for new AI features

GUARDRAILS (never optimize directly — monitor for distortion)
├── Cost per merged PR
├── Time from idea to production
├── Intelligence per dollar (task success / token cost)
└── Raw token consumption (visibility only — never a target)
```

The guardrails exist to catch Goodhart drift. The North Star exists to point at value. Keep them in separate layers — and never let the guardrails become the goal.

---

## Closing thought

A North Star is not a KPI you set and forget. It is a **hypothesis about what creates value** — one you test, refine, and occasionally discard.

Goodhart's Law is not the enemy of measurement. It is the enemy of **dogma** — of treating a proxy as sacred, tying it to status, and calling the resulting number "productivity."

Tokenmaxxing is what happens when an entire industry forgets that distinction at exactly the moment AI costs became visible enough to put on a leaderboard. The fix is not to stop measuring. It is to measure what customers and the business actually receive — govern the inputs, audit the proxies, and never let the token counter become the prize.

---

## Further reading

- [Goodhart's Law — Wikipedia](https://en.wikipedia.org/wiki/Goodhart%27s_law)
- [What is a North Star metric? — Mixpanel](https://mixpanel.com/blog/north-star-metric/)
- [South Star Metrics, Revisited — Ibrahim Bashir](https://runthebusiness.substack.com/p/south-star-metrics-revisited)
- [Goodhart's Law Isn't as Useful as You Might Think — Commoncog](https://commoncog.com/goodharts-law-not-useful/)
- [Tokenmaxxing: The New Lines-of-Code Metric — TrueFoundry](https://www.truefoundry.com/blog/tokenmaxxing-ai-cost-governance)
- [The 'AI Gods' Spending As Much As They Can On AI Tokens — Forbes](https://www.forbes.com/sites/richardnieva/2026/03/31/the-ai-gods-spending-as-much-as-they-can-on-ai-tokens/)
- [Tokenmaxxing and the Token Value Chain — Vik Sekar](https://www.viksnewsletter.com/p/tokenmaxxing-and-the-token-value-chain)
