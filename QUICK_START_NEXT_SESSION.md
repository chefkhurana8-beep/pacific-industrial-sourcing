# Start Here — PIS Website

*Accurate as of 21 August 2026, end of session 2.*
*Supersedes README.md, SESSION_SUMMARY.md, PROJECT_CHECKLIST.md, IMPLEMENTATION_COMPLETE.md
and SETUP_GUIDE.md — those were written mid-session-1 and are stale.*

---

## Run it

```bash
npm run dev
```

Opens on http://localhost:5173. Node v24.19.0. Python is NOT installed.

---

## 🔴 WHERE WE STOPPED — page-by-page review

You asked to review each page before deployment. **Home was reviewed. Five pages remain.**

| # | Page | Route | Reviewed? |
|---|------|-------|-----------|
| 1 | Home | `#/home` | ✅ reviewed — changes pending |
| 2 | About | `#/about` | ⬜ not yet |
| 3 | Services | `#/services` | ⬜ not yet |
| 4 | How it works | `#/how-it-works` | ⬜ not yet |
| 5 | Industries | `#/industries` | ⬜ not yet |
| 6 | Contact | `#/contact` | ⬜ not yet |

**To resume:** say "continue the review from About".

### Open recommendations on Home
1. The hero standfirst is soft. Your approved About copy has a stronger hook:
   *"We are not a marketplace. We are not a listing service. We are your dedicated sourcing
   and procurement partner."* — your own signed-off words, and actually differentiating.
2. Home never mentions **17+ years**, **AS/NZS compliance**, or **Auckland-founded**. Those are
   the strongest credibility signals and currently appear only on About.

---

## Copy status — important

| Page | Status |
|------|--------|
| **About** | ✅ FINAL — verbatim from `content/website-copy.md` |
| Home | ⚠️ draft (except hero, which came from the Claude Design ui_kit) |
| Services | ⚠️ draft descriptions — your 17 + 8 service *names* are exact |
| How it works | ⚠️ draft — grounded only in claims the approved About copy already makes |
| Industries | ✅ your 11 sectors verbatim; intro line is draft |
| Contact | ⚠️ draft |

Source of truth for final copy: [content/website-copy.md](content/website-copy.md)
(Google Drive file `1XyWToYwE0WhpABBwuA7AMgGoeWP06J15AjbsZJsPX4U`).

---

## Design system — do not restructure

`design-system/` holds the imported PIS system. Flat single-layer tokens.

```
--brand-primary  #2E4756  slate      --font-display  Libre Franklin
--brand-accent   #A9723F  bronze     --font-body     Source Sans 3
--space-*        4px base            --container-max 1200px
```

All verified live in the browser. Never hardcode a hex or px — always `var(--token)`.

---

## Architecture

```
src/
├── App.jsx                 hash routing, 6 pages, skip-link
├── index.css               imports design-system tokens + stagger/transition keyframes
├── data/
│   ├── site.js             SITE config, NAV, ENQUIRY_TYPES  ← email lives here
│   └── services.js         17 buyer + 8 exporter + 11 industries
├── hooks/useReveal.js      IntersectionObserver + 1200ms fail-safe
├── components/
│   ├── ui/Button.jsx       variant: primary|secondary|accent|ghost, size: sm|md|lg
│   ├── ui/Card.jsx         eyebrow, title, description, footer
│   ├── ui/fields.jsx       Input, Textarea, Select, Checkbox
│   ├── Header · Footer · Hero · HeroVisual · Section · Timeline · Counter · EnquiryForm
└── pages/                  Home, About, Services, HowItWorks, Industries, Contact
functions/api/enquiry.js    Cloudflare Pages Function (not yet wired)
```

Component prop contracts match `_adherence.oxlintrc.json` from the Design project — keep them.

---

## Animation (client-requested, overrides the brief's minimal-motion rule)

- Section reveals — 28px rise, 520ms
- Grid stagger — 70ms cascade, capped at 8 children
- Card hover — 4px lift + shadow
- Page transitions — fade-and-rise on route change
- Counters — count up on scroll (About: 17+)
- Hero — 9-container stack, bronze traveller, 8s loop
- Timeline — scroll-linked bronze progress rail

**All of it disables under `prefers-reduced-motion`.** Keep that.

⚠️ Two fail-safes exist because content must never depend on JS to be visible: `useReveal` reveals
after 1200ms regardless, and `Counter` jumps to its final value if the document is hidden.
Don't remove them — without them, a background-tab visitor sees a blank page.

---

## Not done

- [ ] Review pages 2–6
- [ ] Replace draft copy on Home / Services / How it works / Contact
- [ ] **Email sending** — `functions/api/enquiry.js` needs: domain verified in Resend, and
      `RESEND_API_KEY` set as a secret in Cloudflare Pages. Until then the form shows its
      fallback "email us directly" message. That is intended degradation, not a bug.
- [ ] Deploy to Cloudflare Pages (domain already on Cloudflare)
- [ ] No photography anywhere — hero uses animated brand geometry instead

## Housekeeping

- `claude-cookbooks/` — 868 KB stray clone, safe to delete
- `plugins/superpowers-marketplace/` — catalog only, no plugins installed

## Skills installed (6)

`ui-styling` · `ui-ux-pro-max` · `frontend-design` · `banner-design` · `slides` · `webapp-testing`

Do NOT reinstall `design-system`, `brand-guidelines`, `theme-factory`, `brand`, or `design` —
each writes tokens or assumes a different architecture and would fight `design-system/`.
