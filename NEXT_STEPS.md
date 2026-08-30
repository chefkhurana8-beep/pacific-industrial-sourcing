# Status

**The site is live and the contact form works end to end.** Verified 2026-08-30:
a real enquiry submitted through `/api/enquiry` returned `{"ok":true}` and both
emails — the enquiry and the acknowledgement — arrived in
`info@pacificindustrialsourcing.co.nz`, carrying the branded logo signature.

---

## Next week — search visibility

The agenda for the week of **2026-08-31** is getting the site found on Google.
The full plan, in plain language, is published here:

**https://claude.ai/code/artifact/d94ddf9a-c010-4d3f-8ad3-6c74abce4f89**

Seven jobs in priority order:

| # | Job | Who |
| --- | --- | --- |
| 1 | Claim the free Google Business Profile | **You** — needs a phone number first |
| 2 | Remove the `#` from the web addresses | Claude |
| 3 | Give every page its own title | Claude |
| 4 | Tell Google what kind of business this is | Claude |
| 5 | Add a sitemap | Claude |
| 6 | Get listed on other websites | **You** |
| 7 | Write pages answering real customer questions | Both |

**Job 2 gates the rest.** The site uses hash routing (`/#/services`), so Google
files all six pages as a single address and no inner page can rank on its own.
Jobs 3–5 are wasted effort until that lands.

Realistic target phrases are NZ-specific — "sourcing agent New Zealand",
"industrial sourcing NZ" — not the bare word "sourcing", which competes
globally with Alibaba and Thomasnet.

| Component | Status |
| --- | --- |
| Site live on the custom domain | Working |
| Code on GitHub, auto-deploys on push | Working |
| Worker script deployed | Working |
| `/api/enquiry` endpoint | Working |
| Form validation (name, email, consent) | Working |
| `RESEND_API_KEY` bound at runtime | Working |
| Enquiry + acknowledgement emails | Working |

Nothing is outstanding. The items below are optional.

---

## How it is wired

The site deploys to Cloudflare as a **Worker with static assets** — *not* as a
Pages project, even though `functions/api/enquiry.js` is written in the Pages
Functions style.

- `worker.js` is the entry point. It routes `POST /api/enquiry` to the existing
  `onRequestPost` handler and serves everything else from `env.ASSETS`.
- `wrangler.toml` declares the Worker and its assets directory.
- The dashboard **Deploy command** must stay `npx wrangler deploy`. If it is set
  to `npm run build`, the site rebuilds but nothing is ever deployed.

### Three things that cost a day, worth not repeating

1. **A Pages `functions/` directory is invisible to a Worker deploy.** The form
   had no backend at all until `worker.js` existed.
2. **Cloudflare will not attach secrets to a Worker with no script.** Every
   settings panel showed "cannot be added to a Worker that only has static
   assets" until a real entry point was deployed.
3. **Saving a secret creates a *version*, and a version is not live until it is
   promoted.** The dashboard showed the key while the running Worker still used
   an older version without it. Fixed under **Deployments → Version History →
   ⋯ → Promote**, which is also where to look if a secret ever seems ignored.

### Adding or changing a secret later

Dashboard: **Settings → Runtime variables and secrets** (the section at the very
top — the one inside the *Builds* card is build-time only and the Worker cannot
read it). Add it, then check **Deployments** and promote the new version.

Or from the project folder, which does both in one step:

```bash
npx wrangler secret put RESEND_API_KEY
```

---

## Optional, not urgent

- **Background videos are missing in production.** `public/*.mp4` is in
  `.gitignore`, so neither video reaches the build. `Hero.jsx` and `About.jsx`
  request them and get a 404 — the sections fall back to their background
  colours, which looks intentional rather than broken. `hero-bg.mp4` is 7 MB and
  could simply be committed. `about-bg.mp4` is 87 MB, over Cloudflare's 25 MB
  per-file limit, so it needs compressing or hosting on Stream/R2.
- **`node_modules/` is committed to git** (~3,800 files). Harmless but bloats
  every clone. Worth untracking.
- **Rotate the Resend key** when convenient. It was pasted into a chat window
  during setup, so treat it as seen. Resend issues a new one in a click; only
  the Cloudflare secret would need updating afterwards.
