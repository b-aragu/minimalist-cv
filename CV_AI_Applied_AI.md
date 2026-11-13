# Antony Baragu
**AI / Applied AI Engineer** — LLMs, RAG, Vector Search, Multimodal Pipelines  
Nairobi, Kenya (EAT) | +254-XXX-XXXXXX | antony@baragu.tech  
GitHub: github.com/b-aragu | LinkedIn: linkedin.com/in/antony-baragu | Portfolio: baragu.netlify.app

---

## PROFESSIONAL SUMMARY

Applied AI Engineer with production experience across the full ML lifecycle: GPT fine-tuning via OpenAI API (Heynia), RAG/FAISS semantic search (UniArchive), Tesseract OCR pipelines, Sentence-Transformer embeddings, ElevenLabs TTS integration, and most recently 3D generative AI pipelines (vaafiti, interactive-garment-starter). Built and deployed 4+ AI-powered features in commercial products serving real users. Strong full-stack foundation (Next.js, FastAPI, Python, PostgreSQL) enables end-to-end ownership from data pipeline to production inference. Seeking Applied AI Engineering roles to build production ML systems at scale.

---

## AI/ML TECHNICAL SKILLS

**LLM & Generative AI:** OpenAI GPT-3.5/4 Fine-tuning API, Prompt Engineering, RAG (Retrieval-Augmented Generation), Function Calling, ElevenLabs TTS API, LangChain/LlamaIndex (evaluating)  
**Vector Search & Embeddings:** FAISS (IVF, HNSW), Sentence-Transformers (all-MiniLM, MPNet), Embedding pipelines, Hybrid search (BM25 + vector)  
**Computer Vision & OCR:** Tesseract OCR, Document layout analysis, Image preprocessing pipelines, OpenCV basics  
**3D Generative AI:** LTX Video, Kling 3.0, Three.js/R3F, Background removal, Virtual try-on shaders, Tauri/Rust for native ML  
**MLOps & Deployment:** Docker (GPU/CPU), FastAPI model serving, GitHub Actions CI/CD, Netlify/Vercel edge functions, Model versioning  
**Data & Evaluation:** Precision/Recall@K for retrieval, OCR accuracy benchmarking, Prompt evaluation frameworks, A/B testing for model outputs  

**Core Engineering:** Python (expert), TypeScript (expert), FastAPI, Next.js, PostgreSQL, MongoDB, Redis, Docker, GitHub Actions, AWS

---

## AI PRODUCTION EXPERIENCE

### AI Integration Engineer — **Heynia** (Employee) | Jan 2023–Present
*Stack: OpenAI GPT-3.5/4 Fine-tuning API, Python, React, Node.js, MongoDB, Docker, AWS*

- **GPT Fine-tuning:** Implemented hosted fine-tuning via OpenAI API for dental clinic domain; curated training data; evaluated model outputs against baseline; deployed fine-tuned models to production
- **LLM Wrappers:** Built custom Python/TypeScript wrapper libraries for consistent prompting, function calling, response parsing, error handling, and cost tracking across the application
- **RAG Integration:** Designed retrieval-augmented generation pipeline for clinic knowledge base; FAISS vector index with Sentence-Transformer embeddings; hybrid search with keyword fallback
- **Voice AI:** Integrated ElevenLabs TTS API for voice responses; implemented streaming audio playback; latency optimization
- **Infrastructure:** Docker containerization; AWS deployment (EC2, RDS, S3); CI/CD with automated model evaluation gates
- **Scale:** Production serving for dental clinic platform; concurrent user handling; cost monitoring

### Final-Year Project — **UniArchive** (Solo) | 2023–2024
*Stack: FastAPI, PostgreSQL, FAISS, Sentence-Transformers, Tesseract OCR, React, Docker, GitHub Actions*
*Repo: b-aragu/UniArchive*

- **OCR Pipeline:** Tesseract-based document processing — PDF → image extraction → preprocessing (deskew, denoise) → OCR → text chunking with overlap → metadata preservation
- **Embedding Pipeline:** Sentence-Transformers (all-MiniLM-L6-v2) for 384-dim embeddings; batch processing; GPU acceleration option; incremental indexing for new documents
- **Vector Search:** FAISS IVF (Inverted File) index for memory efficiency; HNSW for accuracy-critical queries; hybrid BM25 + vector search with reciprocal rank fusion
- **Search API:** FastAPI service with `/search` (semantic), `/search/hybrid`, `/documents/{id}/chunks` endpoints; sub-200ms p95 latency
- **Evaluation:** Precision@5, Recall@10, MRR metrics on academic query set; OCR accuracy benchmarking on 50+ document types
- **Deployment:** Multi-stage Docker builds; GitHub Actions CI/CD (lint, typecheck, test, build, deploy to Netlify/Vercel)

### Independent Project — **Kenya CHW** (AI Community Health Worker) | 2023–2024
*Stack: React, Tailwind, AI Integration (OpenAI API), Netlify*
*Repo: b-aragu/Kenya-CHW*

- **Prompt Engineering:** Designed structured prompt library for health worker assistance (triage, drug info, protocol lookup); few-shot examples; chain-of-thought for clinical reasoning
- **Guardrails:** Input validation; output parsing with schema enforcement; safety filters for medical disclaimers
- **RAG Lite:** Lightweight document retrieval for Kenya health guidelines; client-side embedding cache

### Independent Project — **vaafiti** (3D Generative AI SaaS) | 2024–Present
*Stack: Three.js/R3F, Tauri/Rust, Next.js, Stripe, PostgreSQL, LTX/Kling Video*
*Repo: b-aragu/vaafiti*

- **Generative Video Pipeline:** LTX-2.5 Pro and Kling 3.0 for garment turn animation; prompt engineering for consistent output; background removal (RMBG); frame interpolation
- **3D ML Integration:** Virtual try-on shaders (WebGL); body mesh deformation; texture transfer; real-time inference in browser
- **Multi-tenant AI:** Tenant-isolated model configurations; dynamic theming via R3F; per-tenant asset pipelines

### Independent Project — **interactive-garment-starter** | 2024
*Stack: Three.js, LTX Video, Kling, Background Removal, WebGL*
*Repo: amirmushichge/interactive-garment-starter (implementation)*

- Implemented AI-generated garment turn animations from static images
- LTX-2.5 Pro / Kling 3.0 video generation pipeline with prompt templates
- Background removal integration; WebGL interactive rail navigation

---

## FULL-STACK FOUNDATION (Enables End-to-End ML Delivery)

| Platform | Role | Stack | AI Relevance |
|----------|------|-------|--------------|
| **Zuri Estates** | Sole Founder/Tech Lead | Next.js, Sanity, PostgreSQL, Mapbox | Geo-search, recommendation potential |
| **Sienna Paints** | Founder/Tech Lead | Next.js, Sanity, Cloudinary | Color visualizer (shader-based) |
| **Starnex Industrial** | Founder/Tech Lead | Next.js, Sanity, Multi-currency | B2B product matching |
| **Mdaftari** | Solo Engineer | React, TypeScript, IndexedDB, Daraja | Offline ML (on-device) exploration |
| **365** | Solo Engineer | React Native, Expo, Encryption | On-device private journaling |

---

## EDUCATION

**BSc Computer Science** — Multimedia University of Kenya (2022–2026)  
*Final-year project: UniArchive — OCR + FAISS Semantic Search (thesis: "Semantic Retrieval for Academic Documents Using Vector Embeddings")*

**ALX Software Engineering Certificate** — ALX Africa (Aug 2023–Jun 2024)  
*Curriculum: Python, Flask, Django, React, Data Structures, Algorithms, System Design*

---

## AI/ML PROJECT PORTFOLIO (Links)

| Project | Type | Repo | Live/Demo |
|---------|------|------|-----------|
| UniArchive | OCR + RAG | github.com/b-aragu/UniArchive | [Deployed] |
| Heynia AI | GPT Fine-tuning | (Private) | heynia.com |
| Kenya CHW | Health AI Assistant | github.com/b-aragu/Kenya-CHW | [Netlify] |
| vaafiti | 3D Generative SaaS | github.com/b-aragu/vaafiti | [Private Beta] |
| interactive-garment-starter | 3D GenAI | github.com/amirmushichge/interactive-garment-starter | [Demo] |

---

## EVALUATION & QUALITY PRACTICES

- **Retrieval Evaluation:** Precision@K, Recall@K, MRR, nDCG on annotated query sets
- **Generation Evaluation:** LLM-as-judge for answer quality; factual consistency checks; hallucination detection
- **OCR Quality:** Character Error Rate (CER), Word Error Rate (WER) on benchmark datasets
- **Prompt Versioning:** Git-tracked prompt templates; A/B testing framework for prompt variants
- **Cost Monitoring:** Token usage tracking; latency percentiles; error rate alerting

---

## REFERENCES

Available upon request. Can provide technical deep-dive on any project above.