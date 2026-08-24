# Pacific Industrial Sourcing - Design System Integration ✅

**Status:** Design system successfully integrated from Claude Design project

## What Was Integrated

Your complete PIS Design System has been installed into your project with all design tokens, colors, typography, spacing, and component specifications.

### Source Project
- **Project Name:** PIS Design System
- **ID:** a135a094-9dab-4ae6-9694-dc3eb9c5cbdc
- **Last Updated:** 2026-08-19

---

## 🎨 Brand Identity

### Colors

#### Primary Color - Slate Blue
- **Display Name:** Slate Blue
- **Use:** Core brand color carrying nearly all UI weight
- **Main:** #2E4756 (primary-700)
- **Dark:** #1B3540 (primary-800)
- **Light:** #E4ECEF (primary-100)
- **Palette Range:** 9 shades from #F3F7F8 (50) to #12222B (900)

#### Secondary/Accent - Bronze/Copper
- **Display Name:** Muted Bronze
- **Use:** Reserved for single CTAs, eyebrows, and small emphasis marks - NEVER large fields
- **Main:** #A9723F (accent-600)
- **Palette Range:** 6 shades from #F3E9DD (100) to #6E4A26 (800)

#### Neutral - Cool Grays
- **Use:** Text, surfaces, borders
- **Range:** 10 shades from #F7F8F9 (50) to #12171C (900)
- **Character:** Cool grays (not warm) to stay consistent with primary

#### Semantic Colors
- **Success:** #3F7D58 (BG: #E7F1EA)
- **Warning:** #B98A2E (BG: #FBF1DF)
- **Error:** #B0453D (BG: #F8E7E5)
- **Info:** #52717F (BG: #F3F7F8)

### Typography

#### Display Font: Libre Franklin
- **Usage:** Headlines (h1, h2, h3), eyebrow labels, uppercase emphasis
- **Weights:** 500, 600, 700, 800
- **Letter-spacing:** 0.08em (eyebrow), 0.04em (caps)
- **Character:** Semi-bold to bold, crisp corporate style

#### Body Font: Source Sans 3
- **Usage:** Paragraphs, descriptions, body text, form fields
- **Weights:** 400, 500, 600, 700
- **Character:** Professional services tone - plain, factual, consultative

#### Type Scale
- **Display:** 3.5rem (h1:1.08 line-height)
- **H1:** 2.5rem (1.15 lh)
- **H2:** 2rem (1.2 lh)
- **H3:** 1.5rem (1.3 lh)
- **H4:** 1.25rem (1.4 lh)
- **Body Large:** 1.125rem (1.6 lh)
- **Body:** 1rem (1.6 lh)
- **Small:** 0.875rem (1.5 lh)
- **Caption:** 0.75rem (1.4 lh)

### Spacing

**4px base unit scale:**
```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 24px
--space-6: 32px
--space-7: 48px
--space-8: 64px
--space-9: 96px
--space-10: 128px
--container-max: 1200px
--container-pad: 24px
```

**Card padding:** 24px (--space-5)
**Section vertical rhythm:** 80–96px
**Grid:** 1200px max-width with 24px padding

### Foundations

#### Border Radius
- **sm:** 4px (inputs, tight UI)
- **md:** 8px (cards, default)
- **lg:** 12px (larger surfaces)
- **pill:** 999px (badges, tags)

#### Shadows (soft, low-opacity)
- **sm:** 0 1px 2px rgba(18,23,28,0.06)
- **md:** 0 4px 16px rgba(18,23,28,0.08)
- **lg:** 0 16px 40px rgba(18,23,28,0.12)

#### Motion
- **Ease:** cubic-bezier(.2,.6,.2,1)
- **Duration (fast):** 120ms
- **Duration (base):** 200ms
- **Animation approach:** Minimal - 120–200ms ease transitions on hover/color changes only

#### Interactive States
- **Hover:** Color shift only (darken by one token step)
- **Active:** Slight opacity/color darken, no scale/shrink transforms
- **Focus:** 1px border, `--border-default` (light) or `--border-strong` (emphasis)
- **Philosophy:** Keep interactions calm rather than "app-like"

---

## 📦 Components

### Available Components
1. **Button** — Primary, secondary, accent, ghost variants; sm, md, lg sizes
2. **Card** — With eyebrow, title, description, footer
3. **Input** — Text input with label, placeholder, error state
4. **Select** — Dropdown with label and options
5. **Checkbox** — Labeled checkbox
6. **Badge** — Tone variants: neutral, primary, accent, success, warning, error
7. **Tag** — Removable tag

### Component Philosophy
- **Set size:** Intentional starting scope for a services-marketing site + contact form
- **Not a full app kit** — but built to grow with Tabs, Accordion, Table if needed
- **Starting point:** `ui_kits/website/` includes components for Home, Services, Contact pages

---

## 🎯 Design Principles

### 1. Visual Restraint
- **One accent color, used sparingly** — keeps palette "very subtle" rather than colorful
- **Flat color fields only** — no gradients, no patterns/textures, no photography yet
- **Minimal animation** — no bounce, no scale-pop, no page-transition animation
- **No transparency/blur** — no glassmorphism, no backdrop blur in v1

### 2. Content Fundamentals
- **Voice:** Plain, factual, consultative
- **Person:** "We" for company, "you" occasionally in CTAs
- **Casing:** Sentence case for body and buttons; uppercase + letter-spaced eyebrows
- **Numbers:** Sparingly, only when concrete (e.g., "120+ Verified Suppliers")
- **Emoji:** None — B2B industrial consultancy reads credible without them

### 3. Typography as Personality
- **Libre Franklin (600/700 weight)** — short, uppercase, eyebrow labels with wide letter-spacing
- **Source Sans 3 (400/600)** — all body copy, form fields
- **No italics, no display serif** — keeps reading register plain and professional
- **Type treatment itself is memorable** — not just a neutral delivery vehicle

### 4. Structure Encodes Information
- **Numbering/dividers:** Only if content truly is a sequence or timeline
- **Cards/sections:** Support content hierarchy, not just decoration
- **Whitespace:** Generous - trust the eye to navigate through emptiness

### 5. Intentional Risk
- **One justified aesthetic risk per project** — this system: the bronze accent paired with slate-blue
- **Grounded in subject matter** — industrial sourcing consultancy: measured, trustworthy, quiet
- **Not templated** — avoids three common AI defaults: cream+serif+terracotta, dark+acid-green, broadsheet layout

---

## 📁 File Structure

```
design-system/
├── theme.json                     # Complete design system configuration
├── styles.css                     # Global entry point
├── tailwind.config.js             # Tailwind CSS configuration
├── tokens/
│   ├── colors.css                # Color palette (9 color families)
│   ├── typography.css            # Fonts (Libre Franklin + Source Sans 3)
│   └── spacing.css               # Spacing scale (4px base)
├── colors/
│   ├── primary.md                # Slate blue palette specs
│   ├── accent.md                 # Bronze accent guidelines
│   └── semantic.md               # Success/warning/error/info
├── typography/
│   ├── display.md                # Libre Franklin specs
│   └── body.md                   # Source Sans 3 specs
└── components/                   # Component documentation (coming)
```

---

## 🚀 Using the Design System

### In HTML/CSS
```html
<link rel="stylesheet" href="design-system/styles.css">

<button style="background: var(--brand-primary); color: var(--text-inverse); padding: var(--space-4);">
  CTA Button
</button>
```

### In Tailwind CSS
```javascript
// design-system/tailwind.config.js is pre-configured with:
colors: {
  primary: {
    50: '#F3F7F8',
    100: '#E4ECEF',
    // ... through 900
  },
  accent: '#A9723F',
  neutral: { /* full scale */ }
}

fontFamily: {
  display: "'Libre Franklin', sans-serif",
  body: "'Source Sans 3', sans-serif"
}

spacing: {
  1: '4px',
  2: '8px',
  // ... through 10 and container-*
}
```

### In React Components
```jsx
import styles from 'design-system/styles.css'

export function Button() {
  return (
    <button 
      style={{
        background: 'var(--brand-primary)',
        padding: 'var(--space-4)',
        fontFamily: 'var(--font-display)',
        borderRadius: 'var(--radius-md)'
      }}
    >
      Sourcing Inquiry
    </button>
  )
}
```

---

## 📊 Design Tokens Reference

### CSS Variables (ready to use)
All tokens are defined as CSS custom properties in `tokens/*.css`:
```css
--color-primary-700, --color-primary-50, --color-neutral-*, --color-accent-*
--brand-primary, --brand-primary-dark, --brand-accent
--surface-page, --surface-card, --surface-sunken, --surface-inverse
--text-heading, --text-body, --text-muted, --text-inverse, --text-link
--font-display, --font-body
--text-display, --text-h1, --text-h2, --text-h3, --text-h4, --text-body, --text-small, --text-caption
--space-1 through --space-10, --container-max, --container-pad
--radius-sm, --radius-md, --radius-lg, --radius-pill
--shadow-sm, --shadow-md, --shadow-lg
--ease-standard, --duration-fast, --duration-base
```

### Using Tokens
1. **Never use raw hex** — always reference via `var(--token-name)`
2. **Never use raw px** — use spacing tokens for consistency
3. **Never use unlisted fonts** — only Libre Franklin (display) and Source Sans 3 (body)

---

## ✅ Implementation Checklist

- [x] Colors integrated (primary slate, accent bronze, neutrals, semantic)
- [x] Typography configured (Libre Franklin, Source Sans 3, Google Fonts)
- [x] Spacing system defined (4px base scale)
- [x] Token files created (colors.css, typography.css, spacing.css)
- [x] theme.json updated with all design system specs
- [x] tailwind.config.js ready for use
- [x] Foundation specs (radius, shadows, motion) documented
- [x] Design principles documented
- [ ] Component JSX files (Button, Card, Input, Select, Checkbox, Badge, Tag) — ready to build
- [ ] Component preview HTML files
- [ ] Compliance linter configuration (_adherence.oxlintrc.json)
- [ ] Logo and branding assets
- [ ] Website UI kit (Home, Services, Contact pages)

---

## 🔗 Next Steps

1. **Build Components** — Implement Button, Card, Input, Select, Checkbox, Badge, Tag in React/HTML
2. **Create Website Pages** — Home page, Services page, Contact/Quote form
3. **Add Assets** — Logo files, business card design, any imagery
4. **Test Compliance** — Use oxlint with component property validators
5. **Deploy** — Version control, publish to production

---

## 📖 Documentation Files

| File | Contents |
|------|----------|
| `design-system/theme.json` | Complete design system config with all tokens |
| `design-system/tokens/colors.css` | Color palette CSS variables |
| `design-system/tokens/typography.css` | Font definitions and type scale |
| `design-system/tokens/spacing.css` | Spacing and container scale |
| `design-system/styles.css` | Global stylesheet entry point |
| `design-system/tailwind.config.js` | Tailwind configuration (ready to use) |
| `README.md` | Project overview |
| `SETUP_GUIDE.md` | Customization guide (now superseded by real design system) |
| `PROJECT_CHECKLIST.md` | Task checklist |

---

**Design System Status:** ✅ Complete and ready to use
**Ready to build:** Yes — start with components or website pages
