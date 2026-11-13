# Antony Baragu
**Video / Multimodal Annotation Engineer** — 3D Pipelines, Generative Video, Computer Vision, WebGL  
Nairobi, Kenya (EAT) | +254-740-459-672 | baraguantonyy@gmail.com  
GitHub: github.com/b-aragu | LinkedIn: linkedin.com/in/antony-baragu | Portfolio: baragu.netlify.app

---

## PROFESSIONAL SUMMARY

Multimodal engineer with production experience across the 3D + Generative AI pipeline: Three.js/React Three Fiber for interactive 3D (vaafiti), LTX Video / Kling 3.0 for garment animation generation (interactive-garment-starter), background removal, WebGL shaders for virtual try-on, and React Native media handling (365). Built end-to-end systems from asset ingestion → processing → real-time rendering → annotation-ready output. Strong full-stack foundation (Next.js, Python, Rust/Tauri, PostgreSQL) enables building annotation tooling, quality pipelines, and data infrastructure. Seeking Video/Multimodal Annotation roles to apply 3D/GenAI production experience to data quality, pipeline development, and evaluation at scale.

---

## MULTIMODAL TECHNICAL SKILLS

### 3D & Real-Time Graphics
| Skill | Level | Production Evidence |
|-------|-------|---------------------|
| **Three.js / React Three Fiber (R3F)** | Advanced | vaafiti (multi-tenant 3D SaaS), interactive-garment-starter |
| **WebGL / GLSL Shaders** | Advanced | Virtual try-on shaders (vaafiti); custom material system |
| **GLTF/GLB Pipeline** | Advanced | Asset optimization (Draco compression, texture atlasing); validation |
| **Animation & Rigging** | Proficient | Garment turn animations; morph targets; skeletal animation |
| **Scene Graph Architecture** | Advanced | Tenant-isolated R3F scenes (vaafiti); dynamic theming system |

### Generative Video & AI
| Skill | Level | Production Evidence |
|-------|-------|---------------------|
| **LTX Video (2.5 Pro)** | Proficient | interactive-garment-starter — garment turn generation |
| **Kling 3.0 (via Pika)** | Proficient | interactive-garment-starter — alternative generation path |
| **Background Removal (RMBG)** | Proficient | Automated pipeline for generated garment isolation |
| **Prompt Engineering for Video** | Proficient | Template system for consistent garment animation |
| **Frame Interpolation** | Learning | Temporal consistency improvement for generated video |

### Computer Vision & Annotation
| Skill | Level | Production Evidence |
|-------|-------|---------------------|
| **Tesseract OCR** | Advanced | UniArchive — document pipeline (preprocessing, layout analysis) |
| **Image Preprocessing** | Advanced | Deskew, denoise, contrast enhancement, binarization |
| **Annotation Formats** | Expert | COCO, YOLO, Pascal VOC, LabelMe; custom schemas for 3D assets |
| **Quality Metrics** | Advanced | CER/WER (OCR); FID/CLIP-score (generative); visual regression |
| **Tooling** | Advanced | Custom annotation UIs (React/Three.js); programmatic label generation |

### Multimedia & Mobile
| Skill | Level | Production Evidence |
|-------|-------|---------------------|
| **React Native / Expo Media** | Advanced | 365 — image/audio capture, gallery, compression, encryption |
| **Video Codecs/Containers** | Proficient | MP4/WebM; H.264/HEVC/VP9; FFmpeg for transcoding |
| **Asset Pipeline** | Advanced | Ingestion → validation → processing → CDN (Cloudinary) |
| **Cross-Platform Rendering** | Advanced | Web (Three.js), Desktop (Tauri/WebView), Mobile (Expo) |

### Full-Stack Infrastructure (Enables Pipeline Development)
| Skill | Level | Evidence |
|-------|-------|----------|
| **Python / FastAPI** | Expert | UniArchive, Heynia, annotation tooling backends |
| **Rust / Tauri** | Advanced | vaafiti native wrapper; IPC for heavy processing |
| **Next.js / TypeScript** | Expert | 6 commercial apps; annotation dashboard potential |
| **PostgreSQL / Redis** | Advanced | Metadata, job queues, caching for pipeline |
| **Docker / GitHub Actions** | Expert | CI/CD for media processing pipelines |
| **Cloudinary / S3** | Expert | 4 commercial platforms; transformation pipelines |

---

## PRODUCTION MULTIMODAL EXPERIENCE

### Independent Project — **vaafiti** (3D Multi-Tenant SaaS) | 2024–Present
*Stack: Three.js/R3F, Tauri/Rust, Next.js, Stripe, PostgreSQL, WebGL Shaders*
*Repo: github.com/b-aragu/vaafiti*

- **Interactive 3D Platform:** Real-time garment visualization with dynamic tenant theming; 60fps on mobile; <100ms tenant switch
- **Virtual Try-On Shaders:** Custom GLSL for body mesh deformation, texture projection, lighting simulation; WebGL 2.0 features
- **Asset Pipeline:** GLTF ingestion → validation (watertight, UV, PBR) → Draco compression → Cloudinary CDN → R3F runtime loading
- **Multi-Tenant Architecture:** Tenant-isolated scene graphs, asset libraries, theming tokens; data isolation at DB + API + render layer
- **Tauri/Rust Backend:** Native capabilities for heavy processing (asset optimization, video encoding); secure IPC with TypeScript bindings
- **Annotation-Relevant:** Built-in asset inspection tools (wireframe, UV view, bounds); metadata overlay; export for annotation workflows

### Independent Project — **interactive-garment-starter** | 2024
*Stack: Three.js, LTX Video, Kling 3.0, Background Removal (RMBG), WebGL*
*Repo: github.com/amirmushichge/interactive-garment-starter (implementation)*

- **Generative Video Pipeline:** Static garment photo → LTX-2.5 Pro / Kling 3.0 → 360° turn animation → background removal → GLB export
- **Prompt Template System:** Structured prompts for consistent garment generation (fabric, fit, lighting, camera path)
- **Quality Filtering:** Automated artifact detection (temporal flicker, geometric distortion); CLIP-score for prompt adherence
- **Interactive WebGL Viewer:** Rail-based navigation (hover to turn, click to inspect); touch/swipe mobile; keyboard controls
- **Asset Output:** Annotated frames with camera poses, lighting params, garment metadata for downstream training

### Final-Year Project — **UniArchive** (OCR + Semantic Search) | 2023–2024
*Stack: FastAPI, Tesseract OCR, FAISS, Sentence-Transformers, React, Docker*
*Repo: github.com/b-aragu/UniArchive*

- **Document Vision Pipeline:** PDF → image extraction → preprocessing (deskew, denoise, binarize) → Tesseract OCR → layout analysis (blocks, lines, words)
- **Annotation-Ready Output:** Structured JSON with bounding boxes, confidence scores, reading order, language detection
- **Quality Metrics:** CER/WER on 50+ document types; preprocessing ablation study; confidence calibration
- **Scale:** 1000+ page PDFs; batch processing; incremental indexing

### Independent Project — **365** (React Native Journaling) | 2023–2024
*Stack: React Native, Expo, TypeScript, SecureStore, SQLite, Media Library*
*Repo: github.com/b-aragu/365*

- **Multimedia Capture:** Camera (photo/video), microphone (audio), gallery import; real-time preview
- **Media Processing:** Compression (HEVC/HEIC), thumbnail generation, EXIF preservation, encryption (AES-256)
- **Annotation Support:** Rich text with inline media; tagging; searchable metadata; export bundles (JSON + assets)

### Commercial Platforms — **Asset Pipeline at Scale** (Founder/Tech Lead)
| Platform | Media Handled | Pipeline |
|----------|---------------|----------|
| **Zuri Estates** | 216 properties × 10+ images | Cloudinary auto-format, responsive, CDN |
| **Sienna Paints** | 707 products × 5+ images + color swatches | Cloudinary + custom color visualizer (canvas) |
| **Starnex Industrial** | 739 parts × technical images + datasheets | Cloudinary + PDF datasheet handling |
| **KIKI'S Chemicals** | 707 chemicals × safety datasheets (PDF) | Sanity + Cloudinary + PDF preview |

---

## ANNOTATION & QUALITY PIPELINE EXPERIENCE

### Built Annotation Tooling (Custom)
- **UniArchive:** Document viewer with OCR overlay, bounding box visualization, confidence heatmaps, correction interface
- **vaafiti:** 3D asset inspector (wireframe, UV, bounds, materials); frame-by-frame video playback with metadata
- **interactive-garment-starter:** Generated frame gallery with prompt/camera/lighting metadata; artifact flagging UI

### Quality Metrics Implemented
| Domain | Metrics | Implementation |
|--------|---------|----------------|
| **OCR** | CER, WER, Confidence Calibration | Tesseract + custom eval harness |
| **Generative Video** | FID, CLIP-Score, Temporal Consistency | Frame-level + sequence-level |
| **3D Assets** | Watertight %, UV Overlap, Texel Density, PBR Validation | Automated GLTF validator |
| **Retrieval** | Precision@K, Recall@K, MRR, nDCG | FAISS eval with annotated queries |

### Data Formats & Standards
- **3D:** GLTF/GLB (Draco, KHR_materials_pbrSpecularGlossiness), USDZ (exploring)
- **Video:** MP4 (H.264/HEVC), WebM (VP9), image sequences (PNG/EXR)
- **Annotations:** COCO JSON, YOLO TXT, LabelMe JSON, custom schemas (Pydantic/TypeScript)
- **Metadata:** EXIF, XMP, IPTC; custom embedding in GLTF extras; sidecar JSON

---

## EDUCATION

**BSc Computer Science** — Multimedia University of Kenya (2022–2026)  
*Thesis: "Semantic Retrieval for Academic Documents Using Vector Embeddings" — UniArchive (OCR + FAISS)*

**ALX Software Engineering Certificate** — ALX Africa (Aug 2023–Jun 2024)  
*Full-stack, data structures, algorithms, system design*

---

## MULTIMODAL PORTFOLIO (Links)

| Project | Modality | Repo | Key Artifact |
|---------|----------|------|--------------|
| **vaafiti** | 3D + WebGL + GenVideo | github.com/b-aragu/vaafiti | 3D SaaS + virtual try-on |
| **interactive-garment-starter** | GenVideo + 3D + WebGL | github.com/amirmushichge/interactive-garment-starter | Garment turn pipeline |
| **UniArchive** | OCR + Vision + Text | github.com/b-aragu/UniArchive | Document pipeline + eval |
| **365** | Mobile Media + Encryption | github.com/b-aragu/365 | React Native media handling |
| **Zuri/Sienna/Starnex** | Image Pipeline at Scale | github.com/b-aragu/zuriestates | Cloudinary + Sanity CMS |

---

## WHY I'M A STRONG FIT FOR VIDEO/MULTIMODAL ANNOTATION ROLES

1. **Pipeline Builder, Not Just Annotator:** I build the ingestion → processing → annotation → export pipelines (UniArchive, vaafiti, garment-starter)
2. **3D + Video Fluency:** Rare combination — Three.js/R3F for real-time 3D, LTX/Kling for generative video, shaders for rendering
3. **Quality Infrastructure:** Automated metrics (CER/WER, FID, CLIP, geometric validation) + human review tooling
4. **Format Expertise:** GLTF/GLB, COCO/YOLO, video codecs, metadata standards — reduce onboarding friction
5. **Scale Experience:** 700+ SKU image pipelines (Cloudinary), 1000+ page OCR batches, multi-tenant 3D asset management
6. **African Media Context:** M-Pesa receipts, Swahili documents, local product imagery — geographic diversity value

---

## REFERENCES

Available upon request. Can provide pipeline architecture docs, evaluation reports, annotation tool demos.