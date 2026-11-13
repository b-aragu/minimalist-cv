# Antony Baragu
**Junior Machine Learning Engineer** — ML Pipelines, RAG, Vector Search, Model Evaluation, Python/MLOps  
Nairobi, Kenya (EAT) | +254-740-459-672 | baraguantonyy@gmail.com  
GitHub: github.com/b-aragu | LinkedIn: linkedin.com/in/antony-baragu | Portfolio: baragu.netlify.app

---

## PROFESSIONAL SUMMARY

Junior ML Engineer with 4+ years of full-stack production experience and specialized ML project work. Built and deployed end-to-end ML systems: **UniArchive** (OCR + FAISS semantic search pipeline processing 1000+ page PDFs with sub-200ms search), **Heynia** (GPT-3.5/4 fine-tuning via OpenAI API for dental clinic, Docker/AWS deployment), **Kenya CHW** (AI health assistant with RAG pipeline). Strong foundation in Python, FastAPI, PostgreSQL, vector databases (FAISS), embeddings (Sentence-Transformers), and MLOps (Docker, GitHub Actions CI/CD). Seeking Junior ML Engineer role to apply production ML experience to model training, evaluation, pipeline development, and deployment at scale.

---

## ML TECHNICAL SKILLS

### Machine Learning & AI
| Skill | Level | Production Evidence |
|-------|-------|---------------------|
| **RAG / Semantic Search** | Advanced | UniArchive (FAISS + embeddings), Kenya CHW |
| **Vector Databases (FAISS)** | Advanced | UniArchive IVF index optimization |
| **Embeddings (Sentence-Transformers)** | Advanced | UniArchive, Kenya CHW |
| **OpenAI API / GPT Fine-tuning** | Proficient | Heynia — hosted fine-tuning for dental clinic |
| **Prompt Engineering** | Advanced | Heynia, Kenya CHW, vaafiti 3D generation |
| **Tesseract OCR / Document AI** | Advanced | UniArchive document pipeline |
| **ElevenLabs / TTS APIs** | Proficient | Heynia voice features |
| **Model Evaluation / Quality Gates** | Proficient | Heynia evaluation framework, UniArchive search relevance |
| **Generative Video (LTX, Kling)** | Proficient | interactive-garment-starter |
| **Computer Vision / 3D ML** | Learning | vaafiti virtual try-on, garment reconstruction |

### MLOps & Infrastructure
| Skill | Level | Production Evidence |
|-------|-------|---------------------|
| **Docker / Multi-stage Builds** | Advanced | UniArchive, vaafiti |
| **GitHub Actions CI/CD** | Advanced | UniArchive, vaafiti, 365, minimalist-cv |
| **FastAPI / ML Model Serving** | Expert | UniArchive semantic search API |
| **PostgreSQL / Vector Extensions** | Advanced | UniArchive, Starnex, vaafiti |
| **AWS (EC2, S3, Lambda)** | Proficient | Heynia deployment |
| **Linux Server Admin** | Proficient | wHTa, personal VPS |
| **Monitoring / Logging** | Proficient | Custom metrics in UniArchive, vaafiti |

### Software Engineering (Foundation)
| Skill | Level | Production Evidence |
|-------|-------|---------------------|
| **Python** | Expert | FastAPI, Django, ML pipelines, 3+ projects |
| **TypeScript/JavaScript** | Expert | 12+ production Next.js/React projects |
| **Rust** | Advanced | Tauri backend for vaafiti 3D SaaS |
| **SQL / PostgreSQL** | Advanced | UniArchive, Starnex, vaafiti |
| **Git / GitHub** | Expert | 15+ repos, CI/CD, code review |

---

## KEY ML PROJECTS

### 1. UniArchive — OCR + Semantic Search Pipeline (Final-Year Project, Solo)
**Stack:** FastAPI, PostgreSQL, FAISS, Sentence-Transformers, Tesseract OCR, React, Docker, GitHub Actions  
**Repo:** github.com/b-aragu/UniArchive

- **Built end-to-end ML pipeline:** PDF → Tesseract OCR → text chunking → Sentence-Transformer embeddings → FAISS vector index → semantic search API → React frontend
- **Achieved sub-200ms semantic search** on 1000+ page documents using FAISS IVF indexing with optimized nprobe
- **Implemented hybrid keyword + vector search ranking** with configurable BM25 + cosine similarity weights
- **Designed evaluation framework:** precision@k, recall@k, MRR metrics for search quality validation
- **Multi-stage Docker builds** for dev/test/prod; GitHub Actions CI/CD (lint, type-check, test, build, deploy)
- **95%+ OCR accuracy** on clean academic documents; graceful degradation for noisy scans

### 2. Heynia — GPT Fine-tuning & Deployment (Employee, Part-time)
**Stack:** Python, OpenAI API (GPT-3.5/4 fine-tuning), React, Node.js, MongoDB, Docker, AWS

- **Fine-tuned GPT-3.5/4 via OpenAI hosted API** for dental clinic use case — custom training data preparation, validation splits
- **Built custom evaluation framework** for model output quality — automated testing of medical domain responses, hallucination detection
- **Containerized ML workloads** with Docker for reproducible deployment to AWS (EC2, S3, Lambda)
- **Integrated ElevenLabs TTS API** for voice features in clinical workflow
- **Implemented prompt library** with versioning, A/B testing hooks, and usage analytics

### 3. Kenya CHW — AI Health Assistant with RAG (Freelance)
**Stack:** React, Tailwind, AI Integration, Netlify, Vector Search

- **Built RAG pipeline** for community health worker queries — document ingestion, chunking, embedding, retrieval
- **Designed prompt templates** for medical guidance with safety guardrails and citation requirements
- **Integrated with Netlify Functions** for serverless inference endpoints
- **Evaluation:** Manual review of 200+ query-response pairs for accuracy and safety

### 4. vaafiti — 3D Multi-tenant SaaS with Generative AI (Solo, Active)
**Stack:** Three.js/R3F, Tauri (Rust), Next.js, Stripe, PostgreSQL, Generative Video (LTX/Kling)

- **Built generative video pipeline** for garment animation: LTX-2.5 Pro / Kling 3.0 → background removal → 3D composition
- **R3F scene graph with dynamic tenant theming** — runtime asset isolation, <100ms tenant switch
- **WebGL shaders for virtual try-on** — body tracking, garment deformation, realistic rendering at 60fps mobile
- **Multi-tenant data isolation** at DB + API layer (PostgreSQL row-level security)

### 5. interactive-garment-starter — Generative Garment Animation (Contributor)
**Stack:** Three.js, LTX Video, Kling, Background Removal, WebGL

- **AI-generated garment turn animations** using LTX-2.5 Pro and Kling 3.0 video generation
- **Automated background removal pipeline** (RMBG) for generated asset isolation
- **Interactive 3D rail navigation** for asset review and selection

---

## EXPERIENCE

### 2022–Present: Founder & Technical Lead — **Zuri Estates** (Sole Founder)
**Live:** zuriestates.com | **Stack:** Next.js 14, TypeScript, Tailwind, Sanity CMS, Cloudinary, Mapbox GL, NextAuth.js, PostgreSQL

- Built live commercial real estate platform from 0→1: 216 properties, 73 developments, multi-role auth, Mapbox geo-search
- **ML-relevant:** Designed data pipelines for property embedding and similarity search (future ML feature)

### 2023–Present: AI Integration Engineer — **Heynia** (Employee, Part-time)
**Stack:** Python, OpenAI API (GPT-3.5/4 fine-tuning), Docker, AWS, MongoDB

- **Core ML work:** GPT fine-tuning, custom evaluation pipelines, Docker/MLOps, AWS deployment
- Designed and implemented model quality gates with automated testing

### 2024 (May–Jul): Backend Developer — **wHTa Networks** (Industrial Attachment)
**Stack:** Python, Django, Django REST Framework, MySQL, Linux

- Django/MySQL backend development, REST APIs, Linux server environment
- Built data processing pipelines and API integrations

### 2023–2024: Final-Year Project — **UniArchive** (Solo)
**Stack:** FastAPI, PostgreSQL, FAISS, Sentence-Transformers, Tesseract, React, Docker, GitHub Actions

- **Full ML pipeline:** OCR → embeddings → vector search → evaluation
- See Key ML Projects for details

### 2023–2024: Independent Projects
- **Mdaftari** — Offline-first M-Pesa PWA (React, IndexedDB, Service Workers, Daraja API)
- **365** — Encrypted journaling app (React Native, Expo, SecureStore, Biometric Auth)
- **vaafiti** — 3D multi-tenant SaaS (Three.js/R3F, Tauri/Rust, Generative Video, Stripe)

---

## EDUCATION

| Degree | Institution | Period | Details |
|--------|-------------|--------|---------|
| **BSc Computer Science** | Multimedia University of Kenya | 2022–2026 | Final-year project: UniArchive (OCR + Vector Search) |
| **ALX Software Engineering** | ALX Africa | Aug 2023–Jun 2024 | Full-stack curriculum, peer learning, 1000+ hours |

---

## CERTIFICATIONS & LEARNING

- ALX Software Engineering Certificate (2024)
- **Currently learning:** Advanced RAG patterns, LLM evaluation frameworks, MLOps (MLflow, Kubeflow), distributed training
- **Relevant coursework:** Machine Learning, Data Structures & Algorithms, Database Systems, Distributed Systems

---

## WHY I'M A STRONG FIT FOR JUNIOR ML ENGINEER

1. **Production ML Experience** — Not just notebooks: deployed FAISS vector search, GPT fine-tuning, RAG pipelines to live users
2. **Full-Stack ML** — Can own the entire lifecycle: data ingestion → model training → API serving → monitoring → frontend
3. **MLOps Competence** — Docker, CI/CD, multi-stage builds, evaluation frameworks, AWS deployment
4. **Strong Engineering Foundation** — 4+ years TypeScript/Python/Rust, systems design, database design, API design
5. **Evaluation Mindset** — Built custom quality gates for LLM outputs, search relevance metrics, safety guardrails
6. **Rapid Learner** — Self-taught Rust/Tauri, Three.js/R3F, generative video in months while delivering products

---

## TARGET ROLES & KEYWORDS

**Roles:** Junior Machine Learning Engineer, ML Engineer I, Applied AI Engineer, ML Platform Engineer, AI Engineer (Entry/Mid)

**Keywords for ATS:** Python, PyTorch, TensorFlow, scikit-learn, FAISS, Sentence-Transformers, RAG, Vector Search, Embeddings, LLM Fine-tuning, OpenAI API, Hugging Face, Docker, Kubernetes, GitHub Actions, CI/CD, FastAPI, PostgreSQL, AWS, MLOps, Model Evaluation, Prompt Engineering, Tesseract OCR, Generative AI

---

## CONTACT

**Email:** baraguantonyy@gmail.com  
**Phone:** +254-740-459-672  
**Portfolio:** baragu.netlify.app  
**GitHub:** github.com/b-aragu  
**LinkedIn:** linkedin.com/in/antony-baragu  
**Live Platforms:** zuriestates.com, siennapaints.com, starnexindustrialspares.com