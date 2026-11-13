# CAREER REVAMP INITIAL AUDIT REPORT

**Date:** 2026-11-13  
**Project:** minimalist-cv (Antony Baragu)  
**Repository:** https://github.com/b-aragu/minimalist-cv  
**Live Portfolio:** https://baragu.netlify.app

---

## 1. EXISTING ARCHITECTURE

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v3.4 + CSS Variables (HSL-based theming)
- **UI Components:** shadcn/ui (Radix UI primitives + class-variance-authority)
- **Fonts:** Inter (Google Fonts, variable font via `next/font`)
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics (`@vercel/analytics`)
- **Package Manager:** Yarn (yarn.lock present)
- **Deployment:** Netlify (per live URL), Docker support configured

### Project Structure
```
minimalist-cv/
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind + CSS variables + print styles
│   │   ├── layout.tsx       # Root layout with Inter font + Analytics
│   │   └── page.tsx         # Main CV page (server component)
│   ├── components/
│   │   ├── ui/              # shadcn/ui components (Card, Badge, Section, etc.)
│   │   ├── icons/           # Social icons (GitHub, LinkedIn, X)
│   │   ├── project-card.tsx # Project display card
│   │   ├── command-menu.tsx # ⌘B command palette (print, links)
│   │   └── print-drawer.tsx # Mobile print drawer (currently unused in page.tsx)
│   ├── data/
│   │   └── resume-data.tsx  # SINGLE SOURCE OF TRUTH for all CV content
│   ├── images/logos/        # Company/project logos (SVG, PNG, JPG, WEBP)
│   └── lib/utils.ts         # cn() utility for className merging
├── public/
│   ├── images/logos/baragu.jpeg  # Profile avatar
│   └── favicon.svg
├── components.json          # shadcn/ui config
├── tailwind.config.js       # Tailwind config with CSS variables
├── tsconfig.json            # TypeScript config (strict, path aliases)
├── next.config.js           # Minimal Next.js config
├── Dockerfile / docker-compose.yaml
└── .eslintrc.json / .prettierrc
```

### Data-Driven Architecture
**Single source of truth:** `src/data/resume-data.tsx` exports `RESUME_DATA` as `const` with `as const` for full type inference.

All content rendered from this file:
- Personal info (name, location, about, summary, avatar, contact)
- Education array
- Work experience array
- Skills array (flat list of strings)
- Projects array (with techStack, description, logo, link)

### Rendering Flow
1. `page.tsx` imports `RESUME_DATA`
2. Maps over `work`, `education`, `skills`, `projects` arrays
3. Uses shadcn/ui `Card`, `Badge`, `Section` components
4. `ProjectCard` component handles project display with logo/link
5. `CommandMenu` provides ⌘B palette for print/links (client component)
6. Print stylesheet in `globals.css` uses `page-break-before: always` via `.print-force-new-page`

---

## 2. CURRENT DESIGN & USER EXPERIENCE

### Visual Design
- **Aesthetic:** Minimalist, clean, monochrome (gray/black on white)
- **Typography:** Inter variable font, mono for details (dates, tech badges)
- **Layout:** Single-column, max-w-2xl, generous whitespace
- **Color Scheme:** CSS variables with dark mode support (class-based)
- **Responsive:** Mobile-first, breakpoints at md/lg/xl
- **Print-Friendly:** Dedicated print styles, forced page breaks before Projects

### UX Features
- ⌘B command palette for quick navigation (print, external links)
- Mobile print drawer (PrintDrawer component exists but not used in page.tsx)
- Hover states on links and badges
- External link indicator (green dot) on ProjectCard
- Avatar with fallback initials
- Social icon buttons (email, phone, GitHub, LinkedIn, X)

### Current Live Portfolio Observations
- URL: https://baragu.netlify.app
- Personal website URL in data: `https://baragu.tech` (may differ from deployed URL)
- Avatar: `/images/logos/baragu.jpeg` (served from public)

---

## 3. CONTENT STRUCTURE (from resume-data.tsx)

### Personal Information
- **Name:** Antony Baragu
- **Initials:** AB
- **Location:** Nairobi, Kenya, EAT (link to Google Maps)
- **About:** "🚀 Aspiring Computer Scientist | Passionate Tech Enthusiast 🖥️ | Transforming code into meaningful innovations! 👨‍💻 | Exploring the realms of algorithms and data structures 🔍 | Lifelong Learner 📚"
- **Summary:** Generic student-focused paragraph about learning, freelance projects, "still on the learning path"
- **Avatar:** baragu.jpeg
- **Contact:** email, phone, GitHub, LinkedIn, X

### Education (2 entries)
1. **Multimedia University of Kenya** — Bachelor's Of Science In Computer Science (2022–2026 in progress)
2. **ALX** — Certificate In Software Engineering (August 2023 – June 2024)

### Work Experience (4 entries)
1. **Heynia** — AI Integration Engineer (Jan 2023 – Present)
   - Badges: AI, React, Node.js, MongoDB, Vite, Python, Docker, AWS
   - Claims: LLM fine-tuning, custom wrappers, Docker/AWS deployment, dental clinic platform

2. **wHTa Networks** — Backend Software Engineer (May 2024 – July 2024)
   - Badges: Python, Django, MySQL, Linux, Git, GitHub
   - Claims: Django/MySQL backend, REST APIs, agile sprints, Linux servers

3. **Wande Realty** — Full Stack Web Developer (2022 – Present)
   - Badges: React.js, Express.js, MongoDB, Auth0, Cloudinary
   - Claims: Custom CMS real estate platform, MERN stack, Auth0, Cloudinary

4. **Freelance Developer** — Full Stack Developer (2022 – Present)
   - Badges: Full Stack, Client Projects, Agile
   - Claims: Tailored solutions, React/Node/Django, CI/CD, designer collaboration

### Skills (29 items, flat list)
Python, Django, Flask, JavaScript, React.js, Next.js, Tailwind CSS, HTML/CSS, MongoDB, MySQL, Node.js, Express.js, Docker, AWS, Git/GitHub, REST API Development, AI Integration, GPT Fine-tuning, ElevenLabs API, Prompt Engineering, Authentication (Auth0), Cloudinary, Netlify, Shadcn/ui, Styled Components, Linux, Vite, Algorithmic Problem-Solving, C++, C

### Projects (9 entries)
1. **Ukamilifu** — NGO platform (React, Vite, MongoDB, Netlify)
2. **Hifadhi (Thrift Sanctuary)** — Fashion marketplace (React, Node, Express, MongoDB, DARAJA API) — *mentions Stripe in description but DARAJA in badges*
3. **Color Kenya** — Painter platform (React, Next.js, Styled Components, Netlify)
4. **Kenya CHW** — AI Community Health Worker platform (React, Tailwind, AI Integration, Netlify)
5. **Wande Realty** — Duplicate of work entry (React, Express, MongoDB, Auth0, Cloudinary)
6. **wHTa Networks Backend Systems** — Duplicate of work entry (Django, Python, MySQL, Linux)
7. **AfriImports** — Import platform (Next.js, shadcn/ui, Tailwind, Netlify)
8. **Heynia AI Platform** — Duplicate of work entry (GPT Fine-tuning, Grok-inspired, ElevenLabs, Docker, AWS)

---

## 4. TECHNICAL LIMITATIONS

### Architecture Limitations
1. **Single-page only** — No detail pages for projects, no case studies
2. **Flat skills list** — No categorization (frontend/backend/AI/devops/etc.)
3. **No versioning** — Single RESUME_DATA serves all audiences
4. **Duplicate entries** — Wande Realty, wHTa Networks, Heynia appear in both Work and Projects
5. **No CV download** — No PDF generation or downloadable CV versions
6. **No role-specific views** — Cannot tailor for Software Engineering vs AI vs AI Trainer roles
7. **Print-only output** — Print stylesheet forces page break but no PDF generation pipeline

### Code Quality Issues
1. **Type safety gaps** — `logo?: any` in ProjectCard, loose typing on logo handling
2. **Unused component** — `PrintDrawer` imported but not used in page.tsx
3. **Inconsistent logo handling** — Mix of string imports and StaticImageData, workaround in page.tsx line 109-115
4. **Hardcoded metadata** — layout.tsx has generic "Create Next App" metadata (overridden in page.tsx)
5. **No tests** — No test configuration or test files
6. **No CI/CD config** — No GitHub Actions, relies on Netlify auto-deploy

### Content Issues (Critical)
1. **Generic "aspiring student" framing** — About/summary undermine seniority
2. **Unverified claims** — "GPT Fine-tuning", "Docker/AWS", "LLM fine-tuning" need evidence
3. **Date inconsistencies** — Heynia Jan 2023–Present (3+ years) vs student timeline
4. **Role inflation** — wHTa listed as "Backend Software Engineer" but was industrial attachment
5. **Duplicate projects** — 3 of 9 projects duplicate work entries
6. **Inconsistent tech** — Hifadhi mentions Stripe in description but DARAJA API in badges
7. **Missing flagship projects** — UniArchive, Mdaftari, 365, Zuri Estates, Sienna Paints, Starnex NOT in portfolio

---

## 5. OPPORTUNITIES FOR IMPROVEMENT

### Content Strategy (Highest Impact)
1. **Reframe professional identity** — From "aspiring student" to "Software Engineer & Technical Product Builder"
2. **Add missing flagship projects** — UniArchive (final-year project), Mdaftari, 365, Zuri Estates, Sienna Paints, Starnex Industrial Spares
3. **Separate work vs projects** — Clear categorization: Founder/Entrepreneur, Employment, Attachment, Independent Projects, Academic
4. **Create role-specific CV versions** — Master + 4 targeted versions (Software Eng, AI/Applied AI, AI Trainer, Video Annotation)
5. **Evidence-led claims** — Every metric/claim backed by repo, analytics, or explicit confirmation

### Architecture Enhancements
1. **Project detail pages/case studies** — `/projects/uniarchive`, `/projects/zuri-estates`, etc.
2. **Skills taxonomy** — Categorized: Languages, Frontend, Backend, Databases, AI/ML, Infra, Business, Creative
3. **CV download system** — Generate PDFs from Markdown (using @vercel/og, puppeteer, or similar)
4. **Role-based view switching** — URL or UI toggle for different CV versions
5. **Structured data (JSON-LD)** — Person, CreativeWork, Project schemas for SEO

### Design & UX Improvements
1. **Stronger hero section** — Clear value proposition, not emoji-laden tagline
2. **Better project prioritization** — Feature 4-5 strong projects, not 9 diluted ones
3. **Case study components** — Expandable/collapsible detail sections
4. **Improved print/PDF** — Dedicated PDF generation with proper page breaks
5. **Accessibility audit** — Semantic HTML, focus states, contrast ratios
6. **Performance optimization** — Image optimization (next/image), font loading

### Technical Debt
1. **Fix logo typing** — Proper union type for StaticImageData | string
2. **Remove unused PrintDrawer** — Or integrate it
3. **Add tests** — Component tests, data validation tests
4. **Add CI/CD** — Lint, typecheck, build on PR
5. **Metadata fix** — Proper Open Graph, Twitter cards, JSON-LD

---

## 6. POTENTIAL IMPLEMENTATION RISKS

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Content audit reveals major gaps in claimed experience | High | High | Evidence-led approach; interview user before finalizing |
| UniArchive/Mdaftari/365 repos not production-ready | Medium | High | Verify implementation before featuring |
| Founder role claims (Zuri/Sienna/Starnex) lack documentation | Medium | High | Interview for specifics; distinguish technical vs commercial |
| PDF generation adds build complexity | Medium | Medium | Use simple approach (print CSS + headless Chrome or markdown-pdf) |
| shadcn/ui version compatibility (Radix deprecation) | Low | Medium | Consider migration to Base UI if needed |
| Netlify deploy breaks with new Next.js features | Low | Low | Test build locally first; keep next.config minimal |
| Over-engineering the portfolio | Medium | Medium | Iterative approach; preserve minimalist spirit |

---

## 7. KEY FINDINGS SUMMARY

### What Works Well
- Clean, minimalist architecture with single data source
- Print-friendly CSS already implemented
- shadcn/ui provides accessible, customizable components
- TypeScript strict mode catches type errors
- Fast, lightweight (no heavy dependencies)
- Command menu is a nice UX touch

### What Needs Complete Overhaul
- **Professional narrative** — Current "aspiring student" framing contradicts 4+ years of building products
- **Project portfolio** — Missing the strongest technical work (UniArchive, Mdaftari, 365, business platforms)
- **Experience categorization** — Founder roles buried, attachment mislabeled as full employment
- **Skills presentation** — Flat list doesn't communicate depth or categories
- **Role targeting** — Single CV tries to serve all audiences

### Immediate Next Steps (Phase 1-3)
1. **Install ResumeSkills** and review relevant skill instructions
2. **Conduct evidence audit** — Clone/check key repos (UniArchive, Mdaftari, 365, Zuri, Sienna, Starnex, etc.)
3. **Create CAREER_EVIDENCE_LEDGER.md** — Map every claim to evidence
4. **Interview user** — First batch of 5 critical questions (Heynia, wHTa, Wande, Freelance, Zuri/Sienna)
5. **Produce CAREER_REVAMP_INITIAL_AUDIT.md** — This document

---

## 8. REPOSITORY INVENTORY FOR EVIDENCE AUDIT

### Critical Repositories to Inspect
| Repo | Purpose | Priority |
|------|---------|----------|
| `b-aragu/UniArchive` | Final-year project: OCR + Semantic Search | **Critical** |
| `b-aragu/Mdaftari` | Mobile payment tracking PWA | **Critical** |
| `b-aragu/365` | React Native journaling app | **Critical** |
| `b-aragu/zuriestates` | Founder: Real estate platform | **Critical** |
| `b-aragu/siennapaintskenya` | Founder: Paint commerce platform | **Critical** |
| `b-aragu/StarnexIndustrialSparesLtd` | Founder: Industrial spares | High |
| `b-aragu/starnex-intelligence` | Related to Starnex | High |
| `b-aragu/KIKIS-INDUSTRIAL-CHEMICALS` | Business platform | Medium |
| `b-aragu/WandeRealty` | Real estate platform (verify ownership) | High |
| `b-aragu/ukamilifu-growing-hearts` | NGO platform | Medium |
| `b-aragu/thrift-sanctuary` | Hifadhi e-commerce | Medium |
| `b-aragu/color-kenya-palette-pro` | Color Kenya | Medium |
| `b-aragu/Kenya-CHW` | AI health worker platform | Medium |
| `b-aragu/AfriImports` | Import platform | Medium |

### Business Websites to Verify
- https://zuriestates.com
- https://siennapaints.com
- https://starnexindustrialspares.com
- https://kikisindustrialchemicals.com
- https://wanderealty.com
- https://whtanetworks.com
- https://heynia.com
- https://ukamilifu.netlify.app
- https://hifadhi.onrender.com
- https://colorkenya.netlify.app
- https://kenya-chw.netlify.com
- https://afriimports.netlify.app

---

## 9. RESUME SKILLS INTEGRATION PLAN

### Skills to Activate (from Paramchoudhary/ResumeSkills)
1. `tech-resume-optimizer` — Technical role optimization
2. `resume-bullet-writer` — Achievement-focused bullets
3. `resume-ats-optimizer` — ATS compatibility
4. `resume-formatter` — Clean formatting
5. `resume-version-manager` — Master + targeted versions
6. `job-description-analyzer` — JD analysis for micro1
7. `resume-tailor` — Role-specific tailoring
8. `interview-prep-generator` — STAR stories
9. `portfolio-case-study-writer` — Project case studies
10. `linkedin-profile-optimizer` — LinkedIn optimization
11. `resume-section-builder` — Section construction
12. `career-changer-translator` — Transferable skills (entrepreneurship → tech)
13. `cover-letter-generator` — Application materials

### Critical Restriction
**DO NOT use `resume-quantifier` to invent metrics.** Every number must be verified from source (repo, analytics, docs, user confirmation).

---

*End of Initial Audit Report*