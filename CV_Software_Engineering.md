# Antony Baragu
**Software Engineer** — Full-Stack, Systems, Product Builder  
Nairobi, Kenya (EAT) | +254-XXX-XXXXXX | antony@baragu.tech  
GitHub: github.com/b-aragu | LinkedIn: linkedin.com/in/antony-baragu | Portfolio: baragu.netlify.app

---

## PROFESSIONAL SUMMARY

Software Engineer with 4+ years building and shipping production full-stack applications. Founded and serve as technical lead for three live commercial platforms (Zuri Estates, Sienna Paints, Starnex Industrial Spares) serving real customers in Kenya's real estate, paint, and industrial B2B markets — handling 216 properties, 707 SKUs, and 739 industrial parts with multi-role auth, multi-currency, and payment integration. Expert in TypeScript/Next.js, Python/FastAPI/Django, PostgreSQL/MongoDB, Docker, and CI/CD. Final-year project (UniArchive) demonstrates systems engineering: OCR pipeline + FAISS vector search for academic document retrieval. Seeking senior/lead engineering roles where I can apply end-to-end product ownership experience to complex technical challenges.

---

## TECHNICAL SKILLS

**Languages:** TypeScript, JavaScript, Python, Rust, C/C++, SQL  
**Frontend:** Next.js 14/15 (App Router), React 18/19, Tailwind CSS, shadcn/ui/Radix, Three.js/R3F, React Native/Expo, Vite  
**Backend:** FastAPI, Django/DRF, Node.js/Express, Next.js API Routes, tRPC (learning)  
**Databases:** PostgreSQL, MongoDB, FAISS (vector), Redis, IndexedDB, SQLite  
**DevOps/Infra:** Docker (multi-stage), GitHub Actions CI/CD, Netlify/Vercel, AWS (EC2, S3, Lambda, RDS), Linux, Cloudinary, Mapbox GL  
**Payments/Integrations:** M-Pesa Daraja (STK Push, Callbacks), Stripe, Sanity CMS (GROQ), NextAuth.js  
**Testing/Quality:** Jest, Pytest, Playwright, ESLint, TypeScript strict mode

---

## EXPERIENCE

### Founder & Technical Lead — **Zuri Estates** (Sole Founder) | 2022–Present
*Live commercial platform: zuriestates.com | Stack: Next.js 14, TypeScript, Tailwind, Sanity CMS, Cloudinary, Mapbox GL, NextAuth.js, PostgreSQL*

- Architected and built full-stack real estate platform: 216 properties, 73 developments, 4-role auth (Admin, Agent, Developer, Client), Mapbox geo-search, inquiry system
- Designed Sanity CMS schemas for complex property/development/agent content with GROQ queries; Cloudinary transformation pipeline for optimized property images (auto-format, responsive)
- Implemented multi-role authentication with NextAuth.js (credentials, Google, GitHub); role-based dashboards with server-side data fetching
- Configured Docker multi-stage builds + GitHub Actions CI/CD (lint, typecheck, test, deploy); zero-downtime Netlify deployments
- **Business outcome:** Live revenue-generating business with real customers (agents, developers, buyers); active development

### Co-founder & Technical Lead — **Wande Realty** (Technical Co-founder) | 2022–Present
*Separate entity from Zuri Estates | Stack: Next.js, TypeScript, Tailwind, Sanity CMS, Cloudinary, NextAuth.js*

- Built platform architecture, CMS, and frontend as technical co-founder; distinct business entity with separate codebase
- Shared component library and patterns with Zuri Estates for consistency and velocity

### AI Integration Engineer — **Heynia** (Employee) | Jan 2023–Present
*Stack: Python, OpenAI GPT-3.5/4 Fine-tuning API, React, Node.js, MongoDB, Docker, AWS*

- Implemented GPT-3.5/4 fine-tuning via OpenAI hosted API for dental clinic use case; designed custom LLM wrapper libraries
- Containerized services with Docker; deployed to AWS (EC2, RDS, S3); configured CI/CD pipelines
- Part-time during university studies (BSc 2022–2026, ALX 2023–2024)

### Backend Developer (Industrial Attachment) — **wHTa Networks** | May–Jul 2024
*Stack: Python, Django, Django REST Framework, MySQL, Linux*

- 3-month mandatory BSc industrial attachment; built Django/MySQL REST APIs for internal systems
- Linux server administration; database design and optimization; API documentation

### Independent Projects (Solo)

| Project | Period | Stack | Highlights |
|---------|--------|-------|------------|
| **UniArchive** (Final-Year) | 2023–2024 | FastAPI, PostgreSQL, FAISS, Sentence-Transformers, Tesseract, React, Docker | OCR + semantic search pipeline; FAISS IVF index; hybrid keyword+vector search; CI/CD |
| **Mdaftari** | 2023–2024 | React, TypeScript, Vite, IndexedDB, Service Workers, M-Pesa Daraja | Offline-first PWA; SMS parsing; STK Push; zero-server architecture |
| **365** | 2023–2024 | React Native, Expo, TypeScript, SecureStore, SQLite, Biometric Auth | Encrypted journaling; AES-256 local encryption; FaceID/TouchID; media sync |
| **vaafiti** | 2024–Present | Three.js/R3F, Tauri/Rust, Next.js, Stripe, PostgreSQL | 3D multi-tenant SaaS; WebGL virtual try-on; tenant isolation; Stripe Connect billing |
| **interactive-garment-starter** | 2024 | Three.js, LTX/Kling Video, Background Removal | Generative AI garment animation; WebGL interactive rail |

---

## FLAGSHIP PROJECTS

### UniArchive — OCR + Semantic Search for Academic Documents
*Solo Full-Stack Engineer | FastAPI, PostgreSQL, FAISS, Tesseract, React, Docker*
- Built end-to-end pipeline: PDF → Tesseract OCR → chunking → embeddings → FAISS → semantic search API
- Optimized FAISS IVF index for memory-constrained deployment; hybrid BM25 + vector search ranking
- Sub-200ms semantic search latency on 1000+ page corpora; 95%+ OCR accuracy on clean documents
- Docker multi-stage builds; GitHub Actions CI/CD (lint, test, typecheck, deploy)

### Mdaftari — Offline-First M-Pesa Transaction Tracker (PWA)
*Solo Full-Stack Engineer | React, TypeScript, Vite, IndexedDB, Service Workers, Daraja API*
- 100% offline-capable PWA with Service Worker lifecycle management; <3s cold start
- Parses 5+ M-Pesa SMS formats; STK Push integration with callback handling
- Zero-server architecture (client-only with Daraja callbacks); optimistic UI with background sync

### Zuri Estates / Sienna Paints / Starnex — Founder Platform Suite
*Founder & Technical Lead | Next.js 14, TypeScript, Tailwind, Sanity CMS, Cloudinary, Mapbox, PostgreSQL*
- Three live commercial platforms sharing core architecture; 216 properties / 707 paint SKUs / 739 industrial parts
- Sanity schema design for complex product variants; Cloudinary transformation pipelines; Mapbox geo-queries
- Multi-role auth (4 roles), multi-currency, Stripe-ready; revenue-generating with real customers

### vaafiti — 3D Multi-Tenant SaaS
*Solo Full-Stack Engineer | Three.js/R3F, Tauri/Rust, Next.js, Stripe, PostgreSQL*
- R3F scene graph with dynamic tenant theming; Tauri/Rust backend for native capabilities
- Stripe Connect multi-tenant billing; WebGL shaders for virtual try-on; tenant data isolation at DB + API layer
- 60fps WebGL on mobile; <100ms tenant switch

---

## EDUCATION

**BSc Computer Science** — Multimedia University of Kenya (2022–2026)  
*Final-year project: UniArchive (OCR + Semantic Search)*

**ALX Software Engineering Certificate** — ALX Africa (Aug 2023–Jun 2024)  
*Full-stack curriculum, peer learning, project-based*

---

## OPEN SOURCE & COMMUNITY

- Contributor to interactive-garment-starter (3D generative AI garment visualization)
- Active on GitHub: github.com/b-aragu (12+ public repos, consistent commits)
- Technical writer: Project READMEs, API documentation, architecture decision records

---

## REFERENCES

Available upon request.