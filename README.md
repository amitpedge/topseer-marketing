# Topseer Marketing (Astro)

Public site for **Topseer** at [topseer.tech](https://topseer.tech) — enterprise AI agents, pre-cooked and frozen at pinned releases.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — Platform + Pantry (Layout 2) |
| `/platform/` | Platform capabilities |
| `/agents/` | Agent Pantry (catalog coming soon) |
| `/about/` | Company |
| `/contact/` | Demo requests → hello@topseer.tech |
| `/privacy/` | Legal |
| `/clients/zen/` | Client docs (noindex, unlisted) |

## Commands

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in ./dist
npm run preview
```

Built for **Cloudflare Workers** — same deploy path as [`1quest-marketing`](https://github.com/amitpedge/1quest-marketing).

### One-time: GitHub → Cloudflare

1. Repo: [github.com/amitpedge/topseer-marketing](https://github.com/amitpedge/topseer-marketing)
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Import a repository**
3. Select `amitpedge/topseer-marketing`, branch `main`
4. Configure:
   - **Build command:** `npm install && npm run build`
   - **Deploy command:** `npx wrangler deploy`
5. Attach custom domain **topseer.tech** on the Worker after first deploy

Pushes to `main` redeploy automatically once Workers Builds is connected.

### Manual deploy

```sh
npx wrangler login   # once per machine
npm run deploy
```

Brand tokens: `docs/design.md`
