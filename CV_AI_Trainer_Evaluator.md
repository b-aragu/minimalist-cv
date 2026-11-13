# Antony Baragu
**AI Trainer / Technical Evaluator** — Model Evaluation, Data Quality, Prompt Engineering, Technical Writing  
Nairobi, Kenya (EAT) | +254-740-459-672 | baraguantonyy@gmail.com  
GitHub: github.com/b-aragu | LinkedIn: linkedin.com/in/antony-baragu | Portfolio: baragu.netlify.app

---

## PROFESSIONAL SUMMARY

Technical evaluator with hands-on production AI experience: GPT fine-tuning via OpenAI API (Heynia), RAG/FAISS evaluation pipelines (UniArchive), prompt library design for health AI (Kenya CHW), and 3D generative AI quality assessment (vaafiti). Strong software engineering foundation (4+ years, 12+ production apps) enables rigorous evaluation of code, model outputs, and training data. Proven technical writer — this CV, project READMEs, API documentation, architecture decision records. Seeking AI Trainer/Technical Evaluator roles (especially micro1) to apply engineering rigor to model evaluation, RLHF data quality, and benchmark development.

---

## CORE COMPETENCIES FOR AI EVALUATION

### Model Evaluation & Benchmarking
- **Retrieval Metrics:** Precision@K, Recall@K, MRR, nDCG, Hit Rate — implemented in UniArchive evaluation suite
- **Generation Quality:** LLM-as-judge prompting; factual consistency verification; hallucination detection; style/tone adherence
- **Comparative Evaluation:** A/B testing frameworks for prompt variants; model comparison (GPT-3.5 vs 4 vs fine-tuned); statistical significance testing
- **Edge Case Discovery:** Adversarial prompt design; boundary testing; failure mode categorization

### Data Quality & Annotation
- **Training Data Curation:** GPT fine-tuning dataset preparation (Heynia) — cleaning, deduplication, format validation, quality scoring
- **Annotation Guidelines:** Authored prompt engineering guidelines for Kenya CHW health AI; structured few-shot templates; schema-enforced outputs
- **Quality Gates:** Automated validation pipelines (JSON schema, regex, semantic checks); human-in-the-loop review workflows
- **Bias & Safety:** Medical disclaimer enforcement; PII detection; harmful content filtering; demographic representation checks

### Prompt Engineering & Optimization
- **Structured Prompting:** Chain-of-thought, few-shot, ReAct, function calling patterns
- **Prompt Versioning:** Git-tracked templates; semantic versioning; changelog discipline
- **Optimization Loop:** Evaluation → error analysis → prompt revision → re-evaluation; token efficiency tracking
- **Cross-Model Portability:** Prompt adaptation across GPT-3.5/4, Claude, open models (Llama, Mistral)

### Technical Writing & Documentation
- **Evaluation Reports:** Structured findings with metrics, examples, recommendations (see UniArchive eval docs)
- **API Documentation:** OpenAPI/Swagger for ML endpoints; request/response schemas; error codes
- **Architecture Decision Records (ADRs):** Lightweight docs for technical choices (FAISS index type, embedding model, chunking strategy)
- **Developer Guides:** Onboarding docs for ML pipelines; troubleshooting playbooks

---

## PRODUCTION AI EVALUATION EXPERIENCE

### AI Integration Engineer — **Heynia** (Employee) | Jan 2023–Present
*OpenAI GPT-3.5/4 Fine-tuning, Python, Docker, AWS*

- **Fine-tuning Evaluation:** Designed evaluation protocol for dental clinic fine-tuned models — baseline comparison (base vs fine-tuned), clinical accuracy assessment, safety validation
- **Production Monitoring:** Implemented logging for model inputs/outputs; token usage tracking; latency percentiles; error categorization; cost per interaction
- **Regression Testing:** Automated test suite for prompt changes; golden-set evaluation on every deploy; alerting on quality regression
- **Data Quality:** Curated fine-tuning dataset from clinic transcripts — de-identification, format normalization, quality scoring, train/val/test splits

### Final-Year Project — **UniArchive** (Solo) | 2023–2024
*FastAPI, FAISS, Sentence-Transformers, Tesseract, Docker, GitHub Actions*
*Repo: github.com/b-aragu/UniArchive*

- **Retrieval Evaluation Framework:** Built evaluation harness with annotated query set (50+ academic queries with relevance judgments); computes Precision@5, Recall@10, MRR, nDCG@10
- **OCR Quality Benchmarking:** Character Error Rate (CER) and Word Error Rate (WER) on 50+ document types (papers, theses, reports, scanned pages); preprocessing ablation study
- **Embedding Model Comparison:** Evaluated all-MiniLM-L6-v2 vs MPNet vs E5-small on academic corpus; latency/accuracy trade-off analysis
- **Index Configuration Sweep:** FAISS IVF vs HNSW vs Flat; nprobe vs recall curves; memory footprint measurement
- **Hybrid Search Tuning:** BM25 + vector weight optimization via grid search on validation set; reciprocal rank fusion parameter sweep
- **Documentation:** Evaluation report with methodology, results tables, failure analysis, recommendations

### Independent Project — **Kenya CHW** (AI Community Health Worker) | 2023–2024
*React, Tailwind, OpenAI API, Netlify*
*Repo: github.com/b-aragu/Kenya-CHW*

- **Prompt Library Design:** 20+ structured prompts for triage, drug lookup, protocol reference, patient education; each with few-shot examples, output schema, safety constraints
- **Evaluation Protocol:** Clinical expert review of model outputs (simulated); accuracy scoring on medical knowledge benchmarks; safety review for harmful advice
- **Guardrail Implementation:** Pydantic output schemas; regex validation for drug names/dosages; medical disclaimer injection; escalation triggers for high-risk queries
- **Prompt Versioning:** Git-tracked prompt templates with semantic versioning; changelog; rollback capability

### Independent Project — **vaafiti** (3D Generative AI SaaS) | 2024–Present
*Three.js/R3F, Tauri/Rust, LTX/Kling Video, Stripe*
*Repo: github.com/b-aragu/vaafiti*

- **Generative Video Quality Assessment:** Frame-level evaluation of LTX/Kling outputs — temporal consistency, artifact detection, prompt adherence scoring
- **3D Asset Validation:** Automated checks for mesh watertightness, UV layout, texture resolution, PBR material correctness
- **Cross-Browser/WebGL Testing:** Visual regression testing across Chrome/Firefox/Safari; mobile GPU compatibility matrix
- **Tenant Isolation Verification:** Data leakage tests; asset access control validation; billing meter accuracy

---

## SOFTWARE ENGINEERING FOUNDATION (Enables Rigorous Evaluation)

| Skill | Level | Evidence |
|-------|-------|----------|
| **Python** | Expert | 10+ production projects; FastAPI, Django, ML pipelines |
| **TypeScript/React/Next.js** | Expert | 6+ commercial Next.js apps; type-safe APIs |
| **Testing** | Advanced | Jest, Pytest, Playwright; CI/CD integration |
| **Databases** | Advanced | PostgreSQL, MongoDB, FAISS, Redis, IndexedDB |
| **DevOps** | Advanced | Docker, GitHub Actions, Netlify/Vercel, AWS |
| **Git/Workflow** | Expert | Trunk-based; conventional commits; PR reviews |

**Commercial Platforms Built (Founder/Tech Lead):**
- **Zuri Estates** — 216 properties, 73 developments, multi-role auth, Mapbox, Sanity CMS (live revenue)
- **Sienna Paints** — 707 products, color visualizer, multi-author blog, M-Pesa/Stripe (live revenue)
- **Starnex Industrial Spares** — 739 parts, multi-currency, inquiry system, Sanity CMS (live revenue)

---

## EDUCATION

**BSc Computer Science** — Multimedia University of Kenya (2022–2026)  
*Thesis: "Semantic Retrieval for Academic Documents Using Vector Embeddings" — UniArchive project*

**ALX Software Engineering Certificate** — ALX Africa (Aug 2023–Jun 2024)  
*Full-stack engineering, data structures, algorithms, system design, peer code review*

---

## EVALUATION ARTIFACTS (Portfolio)

| Artifact | Type | Link |
|----------|------|------|
| UniArchive Evaluation Report | Retrieval/OCR benchmarks | github.com/b-aragu/UniArchive/docs/evaluation.md |
| Kenya CHW Prompt Library | Prompt templates + schemas | github.com/b-aragu/Kenya-CHW/prompts/ |
| Heynia Fine-tuning Protocol | Dataset prep + eval | (Private — available on request) |
| vaafiti Quality Gates | 3D/Video validation | github.com/b-aragu/vaafiti/docs/quality.md |
| This CV | Technical writing sample | github.com/b-aragu/minimalist-cv/CV_AI_Trainer_Evaluator.md |

---

## WHY I'M A STRONG FIT FOR micro1 / AI TRAINER ROLES

1. **Engineering Rigor:** Not just prompting — I build the evaluation infrastructure (harnesses, metrics, CI/CD gates)
2. **Full Lifecycle:** Data curation → training/fine-tuning → evaluation → production monitoring → regression detection
3. **Multi-Modal:** Text (LLMs), Embeddings (RAG), Vision (OCR), 3D/Video (Generative) — breadth matches micro1's evaluation needs
4. **Technical Writing:** Clear, structured documentation — essential for annotation guidelines, evaluation reports, benchmark specs
5. **Production Reality:** All evaluation work tied to live systems with real users, not academic toy problems
6. **African Context:** M-Pesa, Swahili/English, local domains — valuable for geographic diversity in training/eval data

---

## REFERENCES

Available upon request. Can provide evaluation reports, prompt libraries, and technical deep-dives.