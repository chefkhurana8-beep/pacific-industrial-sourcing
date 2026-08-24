# Saurav Pacific Industrial Solution - Website Building Project

A comprehensive web development setup with design skills, testing frameworks, and branding tools to build a distinctive, professional website.

## 📁 Project Structure

```
.
├── .claude/                           # Claude Code configuration
│   └── settings.local.json           # Project permissions and settings
├── .claude-plugin/                   # Plugin configuration
│   └── marketplace.json              # Superpowers marketplace config
├── design-system/                    # Your custom design system
│   ├── theme.json                    # Brand colors, fonts, spacing
│   ├── tailwind.config.js            # Tailwind CSS configuration
│   ├── colors/                       # Color palette documentation
│   ├── typography/                   # Font specifications
│   └── components/                   # Reusable UI components
├── skills/                           # Design methodologies
│   └── frontend-design/              # Distinctive design principles
├── plugins/                          # Installed plugins
│   └── superpowers-marketplace/      # 10+ battle-tested plugins
├── resources/                        # Learning materials
│   └── prompting_for_frontend_aesthetics.ipynb  # Frontend design guide
├── docs/                             # Project documentation
└── README.md                         # This file
```

## 🚀 Installed Skills & Tools

### 1. **Frontend-Design Skill** (`skills/frontend-design/`)
A distinctive web design methodology that teaches:
- Grounding design in subject matter (not templates)
- Typography as personality
- Meaningful structure and layout
- Taking intentional aesthetic risks
- Careful, intentional writing

**Files:** `SKILL.md` (methodology guide), `LICENSE.txt`

### 2. **Webapp-Testing Skill** (Ready to use)
Python + Playwright automated testing framework for:
- E2E browser automation testing
- Server lifecycle management
- DOM inspection and debugging
- Screenshots and console logging

**Install:** `/skill webapp-testing`

### 3. **Superpowers-Marketplace** (`plugins/superpowers-marketplace/`)
10 battle-tested plugins including:
- **superpowers** — TDD, debugging, collaboration patterns
- **superpowers-chrome** — Chrome DevTools Protocol access
- **elements-of-style** — Writing guidance
- **episodic-memory** — Session memory with semantic search
- **superpowers-lab** — Experimental skills
- And 5 more...

**Activate:** `/plugin marketplace add obra/superpowers-marketplace`

### 4. **Prompting for Frontend Aesthetics** (`resources/prompting_for_frontend_aesthetics.ipynb`)
Jupyter notebook with practical strategies for:
- Prompting Claude for distinctive UIs
- 3 proven techniques for better design results
- Examples of design inspirations and prompting patterns
- Best practices for avoiding AI-generated defaults

## 🎨 Design System Setup

### Color Palette (`design-system/theme.json`)
Define your brand colors:
- **Primary** — Main brand color
- **Secondary** — Supporting brand color
- **Accent** — CTAs and highlights
- **Neutral** — Light, medium, dark grays
- **Semantic** — Success, warning, error, info states

### Typography (`design-system/theme.json`)
Configure your fonts:
- **Display Font** — Headlines (h1, h2, h3)
- **Body Font** — Paragraphs and text
- **Mono Font** — Code snippets
- **Scale** — Font sizes (h1: 48px, body: 16px, etc.)

### Business Vibe
Define your brand personality:
- Industry focus (Industrial/Manufacturing)
- Brand tone (Professional, Trustworthy, Innovative)
- Target audience (B2B, Partners, Investors)
- Brand values and keywords

### Tailwind Configuration
The `tailwind.config.js` file is ready to extend with your custom:
- Colors from `theme.json`
- Font families from your selections
- Spacing scale
- Border radius
- Shadows

## 📋 Getting Started

### Step 1: Define Your Theme
Edit `design-system/theme.json` with:
1. Your brand colors (hex codes)
2. Font families (web-safe or Google Fonts)
3. Business vibe keywords and values
4. Industry-specific tone and messaging

### Step 2: Update Tailwind Config
Edit `design-system/tailwind.config.js` to include:
1. Your custom colors
2. Your selected font families
3. Any additional design tokens

### Step 3: Start Building
Use the **Frontend-Design Skill** methodology:
1. Brainstorm design plan (colors, type, layout, signature element)
2. Review against your brief
3. Build with Claude's help, referencing the methodology
4. Iterate and refine

### Step 4: Test Your Website
Use the **Webapp-Testing Skill** to:
1. Write E2E tests with Playwright
2. Test responsive design
3. Verify functionality across browsers
4. Catch UI regressions

## 🛠️ Claude Code Skills Available

### Enabled by Default
- **design** — Create interactive design canvases
- **artifact-design** — Design guidance for artifacts
- **dataviz** — Charts and data visualizations
- **web-artifacts-builder** — Complex React/Tailwind artifacts
- **canvas-design** — Visual design and artwork

### Ready to Install
```bash
# Frontend Design Methodology
/skill frontend-design

# Webapp Testing with Playwright
/skill webapp-testing

# Superpowers Marketplace
/plugin marketplace add obra/superpowers-marketplace
```

## 📚 Design Resources

1. **Frontend-Design SKILL.md** — Complete design methodology
2. **prompting_for_frontend_aesthetics.ipynb** — Practical prompting guide
3. **theme.json** — Your design system source of truth
4. **tailwind.config.js** — CSS configuration for consistency

## 🎯 Workflow

**Design Phase:**
1. Review frontend-design methodology
2. Brainstorm distinctive design approach
3. Create design plan (colors, type, layout)
4. Critique plan against brief
5. Build with Claude, iterate

**Development Phase:**
1. Build with Tailwind + your theme
2. Reference design system tokens
3. Write tests with Playwright
4. Deploy

**Quality Phase:**
1. Run automated tests
2. Test responsiveness
3. Verify design fidelity
4. Iterate

## 🔗 Quick Links

- Frontend-Design Guide: `skills/frontend-design/SKILL.md`
- Theme Configuration: `design-system/theme.json`
- Learning Notebook: `resources/prompting_for_frontend_aesthetics.ipynb`
- Superpowers: `plugins/superpowers-marketplace/`

## 💡 Tips

1. **For Distinctive Design:** Use the frontend-design methodology—ground every choice in your specific subject matter
2. **For Better Prompts:** Reference the prompting notebook techniques when working with Claude
3. **For Consistency:** Keep your theme.json as your single source of truth
4. **For Testing:** Write tests early using Playwright to catch issues quickly
5. **For Branding:** Make your typography and color choices memorable and intentional

---

**Ready to build?** Start by editing `design-system/theme.json` with your brand colors, fonts, and business details!
