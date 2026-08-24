# Quick Setup Guide - Add Your Branding

Follow these steps to add your custom colors, fonts, and business branding to your project.

## Step 1: Define Your Brand Colors

Edit `design-system/theme.json` and update the `colors` section:

```json
"colors": {
  "primary": {
    "name": "Your Primary Brand Color",
    "hex": "#YOUR_COLOR_CODE",
    "description": "Your primary brand color"
  },
  "secondary": {
    "name": "Your Secondary Brand Color",
    "hex": "#YOUR_COLOR_CODE",
    "description": "Supporting brand color"
  },
  "accent": {
    "name": "Your Accent Color",
    "hex": "#YOUR_COLOR_CODE",
    "description": "For CTAs and highlights"
  }
}
```

### Color Picker Tips:
- Use a color picker tool (e.g., https://htmlcolorcodes.com)
- Get hex codes in format: #RRGGBB
- Choose colors that fit your business vibe (industrial, modern, trustworthy, etc.)
- Ensure good contrast for accessibility

---

## Step 2: Select Your Fonts

Edit `design-system/theme.json` and update the `typography.fontFamily` section:

### Option A: Web-Safe Fonts
```json
"display": {
  "name": "Display Font",
  "fontFamily": "'Arial', 'Helvetica', sans-serif",
  "description": "For headlines"
}
```

### Option B: Google Fonts
1. Go to https://fonts.google.com
2. Find fonts that match your brand
3. Get the font name and add to theme.json:

```json
"display": {
  "name": "Display Font",
  "fontFamily": "'Playfair Display', serif",
  "weights": ["400", "600", "700"]
}
```

### Recommended Font Combinations:
- **Professional:** "Georgia, serif" + "Open Sans, sans-serif"
- **Modern:** "Montserrat, sans-serif" + "Lato, sans-serif"
- **Industrial:** "IBM Plex Sans, sans-serif" + "IBM Plex Mono, monospace"
- **Elegant:** "Playfair Display, serif" + "Inter, sans-serif"

---

## Step 3: Define Your Business Vibe

Edit `design-system/theme.json` and update the `businessVibe` section:

```json
"businessVibe": {
  "industry": "Your Industry (e.g., Manufacturing, Tech, Finance)",
  "tone": "Your Brand Tone (e.g., Professional, Innovative, Trustworthy)",
  "audience": "Your Target Audience (e.g., B2B Clients, Investors)",
  "keywords": [
    "Keyword 1",
    "Keyword 2",
    "Keyword 3"
  ],
  "brandValues": [
    "Core Value 1",
    "Core Value 2",
    "Core Value 3"
  ]
}
```

### Example for Pacific Industrial:
```json
"businessVibe": {
  "industry": "Manufacturing & Industrial Solutions",
  "tone": "Professional, Reliable, Innovative",
  "audience": "Industrial Companies, B2B Partners",
  "keywords": [
    "Industrial Excellence",
    "Innovation",
    "Reliability",
    "Solutions-Driven"
  ],
  "brandValues": [
    "Quality",
    "Partnership",
    "Excellence",
    "Precision"
  ]
}
```

---

## Step 4: Update Tailwind Configuration

Edit `design-system/tailwind.config.js` and add your colors and fonts:

```javascript
colors: {
  primary: '#YOUR_PRIMARY_COLOR',
  secondary: '#YOUR_SECONDARY_COLOR',
  accent: '#YOUR_ACCENT_COLOR',
},
fontFamily: {
  display: ['Your Display Font', 'sans-serif'],
  body: ['Your Body Font', 'sans-serif'],
  mono: ['Your Mono Font', 'monospace'],
}
```

---

## Step 5: Set Up Google Fonts (Optional)

If using Google Fonts, add to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT_1&family=YOUR_FONT_2&display=swap" rel="stylesheet">
```

---

## Quick Reference: Where to Add What

| What | Where |
|------|-------|
| Brand Colors | `design-system/theme.json` → `colors` |
| Fonts | `design-system/theme.json` → `typography.fontFamily` |
| Brand Tone | `design-system/theme.json` → `businessVibe` |
| Tailwind Setup | `design-system/tailwind.config.js` |
| Design Methodology | `skills/frontend-design/SKILL.md` |
| Prompting Tips | `resources/prompting_for_frontend_aesthetics.ipynb` |

---

## Next Steps After Setup

1. ✅ Complete `theme.json` with your colors, fonts, and branding
2. ✅ Update `tailwind.config.js` with your design tokens
3. ✅ Read `skills/frontend-design/SKILL.md` for design methodology
4. ✅ Open the Jupyter notebook for prompting strategies
5. ✅ Start building your website using the frontend-design principles

---

## Design Principles to Remember

From the **Frontend-Design Skill**:

- **Ground it in the subject** — Don't use generic templates. Make choices specific to your business
- **Typography is personality** — Choose fonts deliberately that match your brand
- **Structure encodes information** — Layout should support your content, not just decorate
- **Take one aesthetic risk** — Be bold with one signature element
- **Write with intention** — Copy is design material, write clearly and purposefully

---

**Questions?** Refer to:
- Frontend-Design SKILL: `skills/frontend-design/SKILL.md`
- Prompting Guide: `resources/prompting_for_frontend_aesthetics.ipynb`
- Theme Template: `design-system/theme.json`

Good luck building! 🚀
