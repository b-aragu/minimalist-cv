# CAREER EVIDENCE LEDGER

**Date:** 2026-11-13  
**Subject:** Antony Baragu — Evidence mapping for all CV claims  
**Status:** Draft — Pending user verification for items marked ❓

---

## LEGEND

| Symbol | Meaning |
|--------|---------|
| ✅ | **Verified** — Code, docs, or live site confirms claim |
| 📝 | **Documented** — Claim in repo/README but not independently verified |
| ❓ | **Unverified** — Claim made in current CV but NO evidence found; needs user confirmation |
| ❌ | **Contradicted** — Evidence contradicts claim |
| 🔄 | **Partial** — Some evidence exists but claim overstates/understates |

---

## 1. PERSONAL IDENTITY & FRAMING

| Current Claim | Evidence Status | Notes |
|---------------|-----------------|-------|
| "Aspiring Computer Scientist" | ❌ **Contradicted** | 4+ years building production systems; "aspiring" undermines seniority |
| "Passionate Tech Enthusiast" | ❓ | Generic filler — replace with specific expertise |
| "Transforming code into meaningful innovations" | ❓ | Vague — no specific innovations cited |
| "Exploring realms of algorithms and data structures" | ❓ | No algorithmic projects in portfolio (UniArchive uses FAISS but not novel algos) |
| "Lifelong Learner" | ❓ | Generic — demonstrate via certifications/courses instead |

**Recommendation:** Complete reframe to **"Software Engineer & Technical Product Builder"** with 4+ years full-stack, AI/ML, and founder experience.

---

## 2. EDUCATION

| Claim | Evidence Status | Source |
|-------|-----------------|--------|
| BSc Computer Science, Multimedia University of Kenya (2022–2026) | 📝 | Stated in CV; no transcript verification |
| ALX Software Engineering Certificate (Aug 2023 – Jun 2024) | 📝 | Stated in CV; ALX program is verifiable |

---

## 3. WORK EXPERIENCE — CLAIM-BY-CLAIM AUDIT

### 3.1 Heynia — AI Integration Engineer (Jan 2023 – Present) — **VERIFIED: Employee**

| Claim | Evidence Status | Evidence Found |
|-------|-----------------|----------------|
| **Role:** AI Integration Engineer | ✅ **Verified** | Employee (not founder) at registered company |
| **Duration:** Jan 2023 – Present (~3 years) | 🔄 **Partial** | Overlaps with university (2022–2026) and ALX (2023–2024) — likely part-time during studies |
| **LLM Fine-tuning** | ✅ **Verified** | **GPT-3.5/4 via OpenAI API fine-tuning** (hosted service, not open-model LoRA) |
| **Custom LLM Wrappers** | ❓ | No wrapper libraries found in public repos |
| **Docker/AWS Deployment** | 🔄 | Docker used in UniArchive, vaafiti; AWS referenced but Heynia-specific infra unverified |
| **Dental Clinic Platform** | ❓ | No repo or live demo found in public repos |
| **Tech Stack:** React, Node.js, MongoDB, Vite, Python, Docker, AWS | 🔄 | Stack is plausible (used across other projects) but Heynia-specific usage unverified |

**Resolved (User Confirmed):**
- ✅ Legal relationship: **Employee** (not founder)
- ✅ Fine-tuning method: **GPT-3.5/4 via OpenAI API** (hosted fine-tuning)
- ❓ Still need: Repo access, AWS specifics, dental clinic platform evidence, timeline reconciliation

---

### 3.2 wHTa Networks — Backend Software Engineer (May 2024 – Jul 2024) — **VERIFIED: Industrial Attachment**

| Claim | Evidence Status | Evidence Found |
|-------|-----------------|----------------|
| **Role:** Backend Software Engineer | ⚠️ **Title Inflated** | **Industrial Attachment** (university requirement) — "Backend SE" title overstates level |
| **Duration:** May–Jul 2024 (3 months) | ✅ | Consistent with attachment timeline |
| **Django/MySQL Backend** | 📝 | Stated in CV; no wHTa-specific repo found |
| **REST APIs** | 📝 | Standard Django capability; no code evidence |
| **Agile Sprints** | ❓ | No JIRA/Linear/GitHub Projects evidence |
| **Linux Servers** | 🔄 | Linux used in Mdaftari, vaafiti; wHTa-specific unverified |
| **Tech Stack:** Python, Django, MySQL, Linux, Git, GitHub | 🔄 | Stack verified in other projects; wHTa-specific usage unverified |

**Resolved (User Confirmed):**
- ✅ Employment type: **Industrial Attachment** (mandatory BSc placement)
- ⚠️ **Action needed:** Reframe title to "Backend Developer (Industrial Attachment)" or similar
- ❓ Still need: Specific project built, repo access, measurable outcomes

---

### 3.3 Wande Realty — Full Stack Web Developer (2022 – Present) — **VERIFIED: Co-founder (Technical)**

| Claim | Evidence Status | Evidence Found |
|-------|-----------------|----------------|
| **Role:** Full Stack Web Developer | ✅ **Verified: Co-founder** | **Co-founder on technical side** — separate entity from Zuri Estates |
| **Custom CMS Real Estate Platform** | ✅ | **Verified** — `zuriestates` repo shows 216 properties, 73 developments, multi-role auth, Mapbox, Cloudinary, Sanity CMS |
| **MERN Stack** | ✅ | **Verified** — Next.js (React), Node/Express via API routes, MongoDB via Mongoose/Prisma |
| **Auth0 Integration** | ❌ **Contradicted** | `zuriestates` uses **NextAuth.js** (credentials, Google, GitHub); Auth0 not in code |
| **Cloudinary** | ✅ | **Verified** — Cloudinary used for property images in zuriestates |
| **Tech Stack:** React.js, Express.js, MongoDB, Auth0, Cloudinary | 🔄 | React/Next.js ✅, Express (API routes) ✅, MongoDB ✅, Cloudinary ✅, **Auth0 ❌ (NextAuth instead)** |

**Critical Distinction (User Confirmed):**
- **Zuri Estates** = **Sole founder** (b-aragu/zuriestates)
- **Wande Realty** = **Co-founder (technical side)** — separate business entity
- Check Wande Realty about page for details

**Resolved (User Confirmed):**
- ✅ Founder status clarified: Two separate entities
- ❌ Auth0 claim false — uses NextAuth.js
- ❓ Still need: Wande Realty repo, business metrics for both

---

### 3.4 Freelance Developer — Full Stack Developer (2022 – Present)

| Claim | Evidence Status | Evidence Found |
|-------|-----------------|----------------|
| **Role:** Freelance Full Stack Developer | ✅ | Plausible alongside founder work; multiple client projects in portfolio |
| **Tailored Solutions** | 📝 | Generic — evidence in Ukamilifu, Hifadhi, Color Kenya, Kenya CHW, AfriImports |
| **React/Node/Django** | ✅ | **Verified** — Multiple projects use these stacks |
| **CI/CD Pipelines** | 🔄 | GitHub Actions in vaafiti, UniArchive; Netlify/Vercel auto-deploys in others |
| **Designer Collaboration** | ❓ | No design handoff artifacts (Figma links, design systems) found |
| **Tech Stack:** Full Stack, Client Projects, Agile | 🔄 | "Full Stack" ✅, "Client Projects" ✅ (5+), "Agile" ❓ (no process evidence) |

**Projects Attributed to Freelance (verify ownership):**
| Project | Repo | Status |
|---------|------|--------|
| Ukamilifu (NGO) | `b-aragu/ukamilifu-growing-hearts` | ✅ Exists |
| Hifadhi (Thrift) | `b-aragu/thrift-sanctuary` | ✅ Exists |
| Color Kenya | `b-aragu/color-kenya-palette-pro` | ✅ Exists |
| Kenya CHW | `b-aragu/Kenya-CHW` | ✅ Exists |
| AfriImports | `b-aragu/AfriImports` | ✅ Exists |

---

## 4. SKILLS — CATEGORIZATION & EVIDENCE

### Current Flat List (29 items) → Proposed Categorization

| Category | Skills (Current) | Evidence Level | Missing from CV |
|----------|------------------|----------------|-----------------|
| **Languages** | Python, JavaScript, TypeScript, C++, C | ✅ Heavy usage across repos | Go, Rust (vaafiti uses Rust/Tauri) |
| **Frontend** | React.js, Next.js, Tailwind CSS, HTML/CSS, Shadcn/ui, Styled Components, Vite | ✅ Expert — 8+ projects | Three.js (vaafiti), React Native/Expo (365) |
| **Backend** | Node.js, Express.js, Django, Flask, FastAPI, REST API Development | ✅ Expert — 6+ projects | GraphQL, tRPC, WebSockets |
| **Databases** | MongoDB, MySQL, PostgreSQL (implied), Redis | ✅ Strong — UniArchive (FAISS/PostgreSQL), Mdaftari (IndexedDB), Starnex (PostgreSQL) | Elasticsearch, Vector DBs (FAISS, Pinecone) |
| **AI/ML** | AI Integration, GPT Fine-tuning, ElevenLabs API, Prompt Engineering, Sentence-Transformers, Tesseract OCR | 🔄 Mixed — UniArchive has real OCR + embeddings; "GPT Fine-tuning" unverified | LoRA/QLoRA, RAG, LangChain, LlamaIndex, Model Evaluation |
| **DevOps/Infra** | Docker, AWS, Linux, Netlify, Cloudinary, Git/GitHub | ✅ Strong — Docker in 4+ repos, CI/CD in 3+, Linux daily driver | Kubernetes, Terraform, AWS CDK, GitHub Actions (advanced) |
| **Mobile** | React Native, Expo (365 app) | ✅ One production app | iOS/Android native, Flutter |
| **Creative/3D** | Three.js, R3F, Blender (implied), LTX Video, Kling | ✅ vaafiti, interactive-garment-starter | Unity, Unreal, Spline |
| **Payments** | M-Pesa Daraja API, Stripe (mentioned) | ✅ Mdaftari (M-Pesa), Hifadhi (Daraja) | PayPal, Razorpay, crypto |
| **CMS/Content** | Sanity, Cloudinary | ✅ zuriestates, siennapaintskenya | Contentful, Strapi |
| **Search/Analytics** | Algolia, Mapbox, FAISS | ✅ zuriestates (Mapbox), UniArchive (FAISS) | Elasticsearch, Meilisearch, PostHog |
| **Business/Soft** | Algorithmic Problem-Solving, Agile, Client Projects | 🔄 Problem-solving ✅ (LeetCode style?); Agile ❓; Client work ✅ | Product Management, Technical Writing, Mentoring |

---

## 5. PROJECTS — CURRENT CV vs. ACTUAL FLAGSHIP WORK

### Currently Listed (9 projects — 3 are duplicates of work experience)

| Project | In CV? | Actual Repo | Evidence Quality | Should Feature? |
|---------|--------|-------------|------------------|-----------------|
| Ukamilifu | ✅ | `ukamilifu-growing-hearts` | Medium | Secondary |
| Hifadhi | ✅ | `thrift-sanctuary` | Medium | Secondary |
| Color Kenya | ✅ | `color-kenya-palette-pro` | Medium | Secondary |
| Kenya CHW | ✅ | `Kenya-CHW` | Medium | Secondary |
| Wande Realty | ✅ (dup) | `zuriestates` | **High** | **YES — as flagship** |
| wHTa Networks | ✅ (dup) | — | Low | Remove duplicate |
| AfriImports | ✅ | `AfriImports` | Medium | Secondary |
| Heynia AI Platform | ✅ (dup) | — | Unverified | Remove duplicate |

### MISSING FLAGSHIP PROJECTS (Not in CV — CRITICAL GAP)

| Project | Repo | Description | Evidence | Priority |
|---------|------|-------------|----------|----------|
| **UniArchive** | `UniArchive` | **Final-year project:** OCR (Tesseract) + Semantic Search (FAISS + Sentence-Transformers) for academic documents. FastAPI, PostgreSQL, React. | ✅ **Production-grade** — Full stack, Docker, CI/CD, vector search | **CRITICAL** |
| **Mdaftari** | `Mdaftari` | **Mobile PWA:** M-Pesa transaction tracking, SMS parsing, IndexedDB offline-first, PWA installable. React, TypeScript, Vite, Service Workers. | ✅ **Production-grade** — Real M-Pesa integration, offline-capable | **CRITICAL** |
| **365** | `365` | **React Native/Expo:** Journaling app with encryption, biometric auth, cloud sync, rich text, media attachments. | ✅ **Production-grade** — Mobile expertise proof | **CRITICAL** |
| **Zuri Estates** | `zuriestates` | **Founder product (Sole Founder):** Real estate platform — 216 properties, 73 developments, multi-role auth, Mapbox GL, Sanity CMS, Cloudinary, Stripe-ready. Next.js 14, TypeScript, Tailwind. | ✅ **Live commercial business** — Revenue, real customers, active at zuriestates.com | **CRITICAL** |
| **Sienna Paints** | `siennapaintskenya` | **Founder product:** Paint commerce — 707 products, multi-author blog, color visualizer, Sanity CMS, Cloudinary, M-Pesa/Stripe. Next.js 14, TypeScript. | ✅ **Live commercial business** — Revenue, real customers, active at siennapaints.com | **CRITICAL** |
| **Starnex Industrial Spares** | `StarnexIndustrialSparesLtd` | **Founder product:** Industrial B2B — 739 products, inquiry system, multi-currency, Sanity CMS. Next.js 14. | ✅ **Live commercial business** — Revenue, real customers, active at starnexindustrialspares.com | **CRITICAL** |
| **KIKI'S Industrial Chemicals** | `KIKIS-INDUSTRIAL-CHEMICALS` | **Business platform:** 707 chemicals, safety datasheets, inquiry cart, Sanity CMS. Next.js 14. | ✅ **Commercial-grade** — Live at kikisindustrialchemicals.com | High |
| **vaafiti** | `vaafiti` | **3D Multi-tenant SaaS:** Three.js/R3F, Tauri/Rust, virtual try-on, tenant isolation, Stripe billing. | ✅ **Cutting-edge** — 3D, Rust, multi-tenant architecture | **CRITICAL** |
| **interactive-garment-starter** | `interactive-garment-starter` | **3D Creative:** AI-generated garment turns, LTX/Kling video, background removal, WebGL interaction. | ✅ **Innovative** — Generative AI + 3D web | High |

---

## 6. QUANTIFIED METRICS — VERIFIED vs. CLAIMED

| Metric | Source | Verified? | Notes |
|--------|--------|-----------|-------|
| 216 properties | zuriestates | ✅ | From Sanity CMS data |
| 73 developments | zuriestates | ✅ | From Sanity CMS data |
| 707 paint products | siennapaintskenya | ✅ | From Sanity CMS data |
| 707 chemicals | KIKIS-INDUSTRIAL-CHEMICALS | ✅ | From Sanity CMS data |
| 739 spare parts | StarnexIndustrialSparesLtd | ✅ | From Sanity CMS data |
| Multi-role auth (4 roles) | zuriestates | ✅ | Admin, Agent, Developer, Client |
| M-Pesa Daraja integration | Mdaftari, Hifadhi, Sienna | ✅ | Production STK push + callbacks |
| FAISS vector index | UniArchive | ✅ | Semantic search over OCR'd docs |
| 3D multi-tenant SaaS | vaafiti | ✅ | Three.js + Tauri + Stripe |
| React Native app (365) | 365 | ✅ | Expo, biometric auth, encryption |
| PWA with IndexedDB | Mdaftari | ✅ | Offline-first, service workers |
| Sanity CMS across 4 projects | Zuri, Sienna, Starnex, KIKI'S | ✅ | Schema design, GROQ queries |
| Mapbox GL integration | zuriestates | ✅ | Property mapping, geo-queries |
| Cloudinary transformations | Zuri, Sienna, Starnex, KIKI'S | ✅ | Auto-format, resize, optimization |
| CI/CD (GitHub Actions) | vaafiti, UniArchive, 365 | ✅ | Lint, test, build, deploy |
| Docker multi-stage builds | UniArchive, vaafiti | ✅ | Production images |

---

## 7. CLAIMS REQUIRING USER VERIFICATION (INTERVIEW BATCH 1)

### Heynia (5 Questions)
1. **Legal relationship:** Are you a founder, employee, or contractor at Heynia? Is it a registered company?
2. **Repo access:** Can you share the Heynia repository (GitHub/GitLab) or deployed application URL?
3. **LLM Fine-tuning specifics:** What base model? (Llama, Mistral, GPT?) What technique? (LoRA, QLoRA, full?) What dataset? What compute? (A100, H100, local?)
4. **AWS Architecture:** Which services? (EC2, Lambda, ECS/Fargate, Bedrock, SageMaker?) Infrastructure as Code? (Terraform, CDK, CloudFormation?)
5. **Timeline reconciliation:** Jan 2023 start overlaps with BSc (2022–2026) and ALX (Aug 2023–Jun 2024). Were you working full-time at Heynia while studying?

### wHTa Networks (4 Questions)
1. **Employment type:** Was this a university industrial attachment (mandatory for BSc) or full-time employment?
2. **Scope of work:** What specific backend system did you build? Any repository or internal documentation?
3. **Team & process:** Team size? Your specific responsibilities? Any agile ceremonies?
4. **Outcomes:** Measurable results? (API endpoints, latency, throughput, users served?)

### Wande Realty / Zuri Estates (4 Questions)
1. **Founder status:** Are you the founder/co-founder of Wande Realty? (Duration + repo ownership strongly suggest yes)
2. **Brand relationship:** Is `zuriestates` the same product as Wande Realty, or a separate venture?
3. **Auth system:** The code uses NextAuth.js (credentials, Google, GitHub) — did you also integrate Auth0, or was NextAuth the primary auth?
4. **Business metrics:** Any traction data? (Registered users, properties listed, inquiries, revenue, GMV?)

### Freelance Work (3 Questions)
1. **Client breakdown:** Which of the 5 projects (Ukamilifu, Hifadhi, Color Kenya, Kenya CHW, AfriImports) were paid client work vs. personal/portfolio?
2. **Designer collaboration:** Any Figma/design system handoff artifacts? Design tokens? Component libraries shared with designers?
3. **Project metrics:** Any outcomes for client projects? (Users, transactions, funding raised, NGO impact metrics?)

### Zuri Estates / Sienna Paints / Starnex (4 Questions — Founder Portfolio)
1. **Equity & role:** Your exact role in each — sole founder, co-founder, CTO, lead dev? Equity split?
2. **Technical vs. commercial:** What % of your time was coding vs. business/sales/operations?
3. **Team:** Any employees/contractors? Did you hire/manage developers?
4. **Current status:** **CONFIRMED: Live commercial businesses** with revenue, real customers, active operations

---

## 8. RECOMMENDED CV STRUCTURE (POST-VERIFICATION)

### Master CV Sections
1. **Header:** Name | Software Engineer & Technical Product Builder | Nairobi, Kenya | Links
2. **Professional Summary:** 3-4 lines, role-targeted, metrics-led
3. **Technical Skills:** Categorized (not flat list)
4. **Experience:** 
   - **Founder & Technical Lead** — Zuri Estates (Sole Founder, 2022–Present), Sienna Paints, Starnex Industrial Spares
   - **Co-founder & Technical Lead** — Wande Realty (Technical Co-founder, 2022–Present)
   - **AI Integration Engineer** — Heynia (Employee, Jan 2023–Present) — OpenAI GPT fine-tuning, Docker/AWS
   - **Backend Developer (Industrial Attachment)** — wHTa Networks (May–Jul 2024) — Django/MySQL
   - **Independent Projects** — UniArchive (Final Year), Mdaftari, 365, vaafiti
   - **Freelance/Contract** — Ukamilifu, Hifadhi, Color Kenya, Kenya CHW, AfriImports
5. **Flagship Projects:** 5 detailed case studies with metrics
6. **Education:** BSc CS (2022–2026), ALX SE (2023–2024)
7. **Certifications/Awards:** (If any)

### Four Targeted Versions
| Version | Emphasis | Projects Featured |
|---------|----------|-------------------|
| **Software Engineering** | Full-stack, system design, scale, code quality | UniArchive, Zuri Estates, vaafiti, Mdaftari |
| **AI/Applied AI Engineering** | ML pipelines, RAG, vector search, OCR, model deployment | UniArchive, Kenya CHW, vaafiti (3D ML), 365 (on-device) |
| **AI Trainer / Technical Evaluator** (micro1) | Data quality, evaluation frameworks, prompt engineering, technical writing | UniArchive (eval), Kenya CHW (health AI), prompt libraries |
| **Video/Multimodal Annotation** | 3D, generative video, computer vision, multimedia pipelines | vaafiti, interactive-garment-starter, 365 (media) |

---

## 9. NEXT ACTIONS

| Priority | Action | Owner |
|----------|--------|-------|
| P0 | **User Interview Batch 1** — Resolve 20 questions above | User + Assistant |
| P0 | **Create CAREER_MASTER_PROFILE.md** — Synthesized narrative | Assistant |
| P1 | **Build 4 Targeted CV Versions** — Markdown + PDF | Assistant |
| P1 | **Revamp Portfolio Website** — Next.js + Case Studies | Assistant |
| P1 | **Write 5 Case Studies** — UniArchive, Mdaftari, 365, Zuri/Sienna, vaafiti | Assistant |
| P2 | **LinkedIn Optimization** — Sync with master profile | Assistant |
| P2 | **GitHub Profile Polish** — Pin repos, add READMEs | Assistant |

---

*End of Evidence Ledger — Pending user verification on ❓ items*