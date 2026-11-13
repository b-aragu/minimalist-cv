import {
  // Founder Platforms
  ZuriEstatesLogo,
  SiennaPaintsLogo,
  StarnexLogo,
  KikisLogo,

  // Independent Projects (Flagship)
  UniArchiveLogo,
  MdaftariLogo,
  ThreeSixFiveLogo,
  VaafitiLogo,

  // Freelance / Client Projects
  UkamilifuLogo,
  HifadhiLogo,
  ColorKenyaLogo,
  KenyaCHWLogo,
  AfriimportsLogo,

  // Employment / Attachment
  HeyniaLogo,
  WhtaNetworksLogo,
  WandelogoLogo,

  // Freelance branding
  FreelanceLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

/**
 * MASTER RESUME DATA — Single Source of Truth
 * All targeted CV versions and portfolio views derive from this.
 * Categories: Founder | Employment | Attachment | Independent | Freelance
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type ExperienceCategory =
  | "founder"
  | "employment"
  | "attachment"
  | "independent"
  | "freelance";

export type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "databases"
  | "ai-ml"
  | "devops"
  | "mobile"
  | "creative-3d"
  | "payments"
  | "cms"
  | "business";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: "expert" | "advanced" | "proficient" | "learning";
  evidence: string[]; // Project/repo references
  years: number;
}

export interface Experience {
  id: string;
  category: ExperienceCategory;
  company: string;
  title: string;
  logo: any;
  link?: string;
  start: string;
  end: string;
  location?: string;
  badges: string[];
  description: string;
  highlights: string[]; // Quantified achievements
  metrics?: Record<string, string | number | boolean>; // Key metrics
  techStack: string[];
  featured?: boolean; // Show in flagship section
  caseStudySlug?: string; // For case study detail page
}

export interface Project {
  id: string;
  title: string;
  category: "flagship" | "freelance" | "academic" | "experimental";
  logo: any;
  link?: { label: string; href: string; type: "live" | "repo" | "demo" };
  repo?: string;
  techStack: string[];
  description: string;
  longDescription?: string; // For case study
  highlights: string[];
  metrics?: Record<string, string | number | boolean>;
  role: string;
  period: string;
  featured: boolean;
  caseStudySlug?: string; // For detail page
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
  highlights?: string[];
}

export interface PersonalInfo {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  headline: string; // One-liner for hero
  summary: string; // 3-4 lines for CV
  about: string; // Longer bio for portfolio
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: Array<{
      name: string;
      url: string;
      icon: React.ComponentType<{ className?: string }>;
    }>;
  };
}

// ============================================================================
// PERSONAL INFO
// ============================================================================

export const PERSONAL_INFO: PersonalInfo = {
  name: "Antony Baragu",
  initials: "AB",
  location: "Nairobi, Kenya (EAT)",
  locationLink: "https://www.google.com/maps/place/Nairobi",
  headline: "Software Engineer & Technical Product Builder — Full-Stack, AI/ML, 3D Web, Founder-Led Products",
  summary:
    "Software Engineer with 4+ years building and shipping production full-stack applications. Founded and serve as technical lead for three live commercial platforms (Zuri Estates, Sienna Paints, Starnex Industrial Spares) serving real customers in Kenya's real estate, paint, and industrial B2B markets — handling 216 properties, 707 SKUs, and 739 industrial parts with multi-role auth, multi-currency, and payment integration. Expert in TypeScript/Next.js, Python/FastAPI/Django, PostgreSQL/MongoDB, Docker, and CI/CD. Final-year project (UniArchive) demonstrates systems engineering: OCR pipeline + FAISS vector search for academic document retrieval.",
  about:
    "I build production-grade software products end-to-end — from infrastructure and data pipelines to 3D interfaces and AI-powered features — across fintech, real estate, e-commerce, and industrial B2B. As a founder, I've taken three platforms from 0 to live revenue with real customers. As an engineer, I work across the full stack: Next.js/React/TypeScript frontends, Python/FastAPI/Django backends, PostgreSQL/MongoDB/FAISS vector databases, M-Pesa Daraja payments, and most recently Three.js/R3F + Tauri/Rust for 3D multi-tenant SaaS. My final-year project (UniArchive) combines Tesseract OCR with FAISS semantic search for academic document retrieval. I'm targeting roles in Software Engineering, Applied AI Engineering, AI Training/Evaluation, and Multimodal/Video Annotation where I can apply this breadth of production experience.",
  avatarUrl: "/images/logos/baragu.jpeg",
  personalWebsiteUrl: "https://baragu.tech",
  contact: {
    email: "baraguantonyy@gmail.com",
    tel: "+254740459672",
    social: [
      { name: "GitHub", url: "https://github.com/b-aragu", icon: GitHubIcon },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/baragu/", icon: LinkedInIcon },
      { name: "X", url: "https://x.com/b_aragu", icon: XIcon },
    ],
  },
};

// ============================================================================
// SKILLS TAXONOMY (Categorized, Leveled, Evidence-Based)
// ============================================================================

export const SKILLS: Skill[] = [
  // LANGUAGES
  { name: "TypeScript", category: "languages", level: "expert", evidence: ["Zuri Estates", "Sienna Paints", "Starnex", "vaafiti", "minimalist-cv", "UniArchive", "Mdaftari", "365"], years: 4 },
  { name: "JavaScript", category: "languages", level: "expert", evidence: ["All 12+ projects"], years: 4 },
  { name: "Python", category: "languages", level: "expert", evidence: ["UniArchive", "Heynia", "wHTa", "Kenya CHW", "Mdaftari", "vaafiti (Rust bridge)"], years: 4 },
  { name: "Rust", category: "languages", level: "advanced", evidence: ["vaafiti (Tauri backend)"], years: 1 },
  { name: "C/C++", category: "languages", level: "proficient", evidence: ["Algorithmic problem-solving", "University coursework"], years: 2 },
  { name: "SQL", category: "languages", level: "advanced", evidence: ["PostgreSQL in UniArchive, Starnex, vaafiti", "MySQL in wHTa"], years: 3 },

  // FRONTEND
  { name: "Next.js 14/15 (App Router)", category: "frontend", level: "expert", evidence: ["Zuri Estates", "Sienna Paints", "Starnex", "KIKI'S", "AfriImports", "vaafiti", "minimalist-cv"], years: 3 },
  { name: "React 18/19", category: "frontend", level: "expert", evidence: ["All frontend projects"], years: 4 },
  { name: "Tailwind CSS", category: "frontend", level: "expert", evidence: ["All projects"], years: 3 },
  { name: "shadcn/ui / Radix UI", category: "frontend", level: "expert", evidence: ["Zuri Estates", "Sienna Paints", "Starnex", "KIKI'S", "minimalist-cv"], years: 2 },
  { name: "Three.js / React Three Fiber", category: "frontend", level: "advanced", evidence: ["vaafiti", "interactive-garment-starter"], years: 1 },
  { name: "React Native / Expo", category: "frontend", level: "advanced", evidence: ["365 Journaling App"], years: 1 },
  { name: "Vite", category: "frontend", level: "proficient", evidence: ["Mdaftari", "Ukamilifu", "Hifadhi"], years: 2 },
  { name: "Styled Components", category: "frontend", level: "proficient", evidence: ["Color Kenya"], years: 1 },

  // BACKEND
  { name: "FastAPI", category: "backend", level: "expert", evidence: ["UniArchive", "Heynia", "vaafiti API"], years: 2 },
  { name: "Django / Django REST Framework", category: "backend", level: "advanced", evidence: ["wHTa Networks", "UniArchive components"], years: 1 },
  { name: "Node.js / Express", category: "backend", level: "expert", evidence: ["Hifadhi", "Early freelance", "Next.js API routes"], years: 3 },
  { name: "Next.js API Routes", category: "backend", level: "expert", evidence: ["All Next.js projects"], years: 3 },
  { name: "tRPC", category: "backend", level: "learning", evidence: ["Evaluating for future projects"], years: 0 },

  // DATABASES
  { name: "PostgreSQL", category: "databases", level: "advanced", evidence: ["UniArchive", "Starnex", "vaafiti", "KIKI'S"], years: 2 },
  { name: "MongoDB / Mongoose", category: "databases", level: "advanced", evidence: ["Early projects", "Heynia", "Freelance"], years: 3 },
  { name: "FAISS (Vector Search)", category: "databases", level: "advanced", evidence: ["UniArchive semantic search"], years: 1 },
  { name: "Sentence-Transformers / Embeddings", category: "databases", level: "advanced", evidence: ["UniArchive", "Kenya CHW"], years: 1 },
  { name: "Redis", category: "databases", level: "proficient", evidence: ["Caching, session management"], years: 1 },
  { name: "IndexedDB / Service Workers", category: "databases", level: "advanced", evidence: ["Mdaftari PWA (offline-first)"], years: 1 },
  { name: "Sanity CMS (GROQ)", category: "databases", level: "expert", evidence: ["Zuri Estates", "Sienna Paints", "Starnex", "KIKI'S"], years: 2 },

  // AI/ML
  { name: "OpenAI GPT Fine-tuning (API)", category: "ai-ml", level: "proficient", evidence: ["Heynia — dental clinic"], years: 1 },
  { name: "RAG / Semantic Search", category: "ai-ml", level: "advanced", evidence: ["UniArchive (FAISS)", "Kenya CHW"], years: 1 },
  { name: "Tesseract OCR", category: "ai-ml", level: "advanced", evidence: ["UniArchive document pipeline"], years: 1 },
  { name: "Prompt Engineering", category: "ai-ml", level: "advanced", evidence: ["Heynia", "Kenya CHW", "vaafiti", "interactive-garment-starter"], years: 2 },
  { name: "ElevenLabs / TTS APIs", category: "ai-ml", level: "proficient", evidence: ["Heynia voice features"], years: 1 },
  { name: "Generative Video (LTX, Kling)", category: "ai-ml", level: "proficient", evidence: ["interactive-garment-starter"], years: 0.5 },
  { name: "Computer Vision / 3D ML", category: "ai-ml", level: "learning", evidence: ["vaafiti virtual try-on", "garment reconstruction"], years: 0.5 },

  // DEVOPS
  { name: "Docker / Multi-stage Builds", category: "devops", level: "advanced", evidence: ["UniArchive", "vaafiti", "minimalist-cv"], years: 2 },
  { name: "GitHub Actions CI/CD", category: "devops", level: "advanced", evidence: ["vaafiti", "UniArchive", "365", "minimalist-cv"], years: 2 },
  { name: "Netlify / Vercel Deployment", category: "devops", level: "expert", evidence: ["10+ projects"], years: 3 },
  { name: "Linux Server Admin", category: "devops", level: "proficient", evidence: ["wHTa", "Personal VPS"], years: 2 },
  { name: "AWS (EC2, S3, Lambda, RDS)", category: "devops", level: "proficient", evidence: ["Heynia deployment", "Project hosting"], years: 1 },
  { name: "Cloudinary (Image Pipeline)", category: "devops", level: "expert", evidence: ["Zuri Estates", "Sienna Paints", "Starnex", "KIKI'S"], years: 2 },
  { name: "Mapbox GL JS", category: "devops", level: "advanced", evidence: ["Zuri Estates property mapping"], years: 1 },

  // MOBILE
  { name: "React Native / Expo", category: "mobile", level: "advanced", evidence: ["365 Journaling App"], years: 1 },
  { name: "Expo SecureStore / SQLite", category: "mobile", level: "proficient", evidence: ["365 encryption, biometric auth"], years: 1 },
  { name: "PWA / Service Workers", category: "mobile", level: "advanced", evidence: ["Mdaftari (offline-first)"], years: 1 },

  // CREATIVE/3D
  { name: "Three.js / R3F", category: "creative-3d", level: "advanced", evidence: ["vaafiti", "interactive-garment-starter"], years: 1 },
  { name: "Tauri (Rust + WebView)", category: "creative-3d", level: "advanced", evidence: ["vaafiti desktop/mobile wrapper"], years: 1 },
  { name: "Blender / 3D Asset Pipeline", category: "creative-3d", level: "proficient", evidence: ["vaafiti asset preparation"], years: 1 },
  { name: "Generative AI for 3D", category: "creative-3d", level: "proficient", evidence: ["interactive-garment-starter (LTX, Kling)"], years: 0.5 },

  // PAYMENTS
  { name: "M-Pesa Daraja API (STK Push)", category: "payments", level: "expert", evidence: ["Mdaftari", "Hifadhi", "Sienna Paints", "KIKI'S"], years: 2 },
  { name: "Stripe / Stripe Connect", category: "payments", level: "advanced", evidence: ["vaafiti multi-tenant billing", "Zuri Estates (ready)"], years: 1 },

  // CMS
  { name: "Sanity CMS (Schema Design)", category: "cms", level: "expert", evidence: ["Zuri Estates", "Sienna Paints", "Starnex", "KIKI'S"], years: 2 },
  { name: "GROQ Query Language", category: "cms", level: "advanced", evidence: ["4 commercial platforms"], years: 2 },

  // BUSINESS
  { name: "Founder / Technical Lead", category: "business", level: "expert", evidence: ["Zuri Estates (sole)", "Sienna Paints", "Starnex", "Wande Realty (co-founder)"], years: 4 },
  { name: "Product Strategy & Roadmap", category: "business", level: "advanced", evidence: ["3 platforms 0→1"], years: 3 },
  { name: "Multi-tenant SaaS Architecture", category: "business", level: "advanced", evidence: ["vaafiti tenant isolation, billing"], years: 1 },
  { name: "Technical Writing / Documentation", category: "business", level: "advanced", evidence: ["Project READMEs", "API docs", "ADRs", "This profile"], years: 3 },
];

// Helper to get skills by category
export const SKILLS_BY_CATEGORY: Record<SkillCategory, Skill[]> = SKILLS.reduce((acc, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<SkillCategory, Skill[]>);

// ============================================================================
// EXPERIENCE (Categorized: Founder | Employment | Attachment | Independent | Freelance)
// ============================================================================

export const EXPERIENCE: Experience[] = [
  // FOUNDER
  {
    id: "zuri-estates",
    category: "founder",
    company: "Zuri Estates",
    title: "Founder & Technical Lead",
    logo: ZuriEstatesLogo,
    link: "https://zuriestates.com",
    start: "2022",
    end: "Present",
    location: "Nairobi, Kenya",
    badges: ["Next.js 14", "TypeScript", "Tailwind", "Sanity CMS", "Cloudinary", "Mapbox GL", "NextAuth.js", "PostgreSQL"],
    description: "Sole founder of real estate platform — 216 properties, 73 developments, multi-role auth (Admin, Agent, Developer, Client), Mapbox geo-search, inquiry system. Live commercial business with revenue.",
    highlights: [
      "Architected full-stack platform: Next.js 14, Sanity CMS, Cloudinary, Mapbox GL, PostgreSQL",
      "Designed Sanity schemas for complex property/development/agent content with GROQ queries",
      "Implemented multi-role authentication (4 roles) with NextAuth.js; role-based dashboards",
      "Configured Docker multi-stage builds + GitHub Actions CI/CD; zero-downtime Netlify deployments",
      "Live revenue-generating business with real customers (agents, developers, buyers)",
    ],
    metrics: { properties: 216, developments: 73, roles: 4, status: "Live Revenue" },
    techStack: ["Next.js 14", "TypeScript", "Tailwind", "Sanity CMS", "Cloudinary", "Mapbox GL", "NextAuth.js", "PostgreSQL"],
    featured: true,
  },
  {
    id: "sienna-paints",
    category: "founder",
    company: "Sienna Paints Kenya",
    title: "Founder & Technical Lead",
    logo: SiennaPaintsLogo,
    link: "https://siennapaints.com",
    start: "2022",
    end: "Present",
    location: "Nairobi, Kenya",
    badges: ["Next.js 14", "TypeScript", "Tailwind", "Sanity CMS", "Cloudinary", "M-Pesa Daraja", "Stripe"],
    description: "Founder of paint commerce platform — 707 products, multi-author blog, color visualizer, M-Pesa/Stripe payments. Live commercial business with revenue.",
    highlights: [
      "Built e-commerce platform with 707 SKUs, variant management, color visualizer (Canvas/WebGL)",
      "Sanity CMS for multi-author blog + product content; Cloudinary transformation pipeline",
      "M-Pesa Daraja STK Push + callbacks; Stripe integration ready",
      "Shared core architecture with Zuri Estates for velocity",
    ],
    metrics: { products: 707, status: "Live Revenue" },
    techStack: ["Next.js 14", "TypeScript", "Tailwind", "Sanity CMS", "Cloudinary", "M-Pesa Daraja", "Stripe"],
    featured: true,
  },
  {
    id: "starnex-industrial",
    category: "founder",
    company: "Starnex Industrial Spares",
    title: "Founder & Technical Lead",
    logo: StarnexLogo,
    link: "https://starnexindustrialspares.com",
    start: "2023",
    end: "Present",
    location: "Nairobi, Kenya",
    badges: ["Next.js 14", "TypeScript", "Tailwind", "Sanity CMS", "Cloudinary", "Multi-currency"],
    description: "Founder of industrial B2B platform — 739 spare parts, inquiry system, multi-currency, safety datasheets. Live commercial business with revenue.",
    highlights: [
      "Industrial B2B platform with 739 parts, inquiry cart, multi-currency (KES/USD/EUR)",
      "Sanity CMS for technical specifications and safety datasheets (PDF handling)",
      "Shared Sanity/Cloudinary/Next.js architecture with sister platforms",
    ],
    metrics: { parts: 739, status: "Live Revenue" },
    techStack: ["Next.js 14", "TypeScript", "Tailwind", "Sanity CMS", "Cloudinary"],
    featured: true,
  },
  {
    id: "wande-realty",
    category: "founder",
    company: "Wande Realty",
    title: "Co-founder & Technical Lead",
    logo: WandelogoLogo,
    link: "https://wanderealty.com",
    start: "2022",
    end: "Present",
    location: "Nairobi, Kenya",
    badges: ["Next.js", "TypeScript", "Tailwind", "Sanity CMS", "Cloudinary", "NextAuth.js"],
    description: "Technical co-founder — built platform architecture, CMS, and frontend. Separate entity from Zuri Estates.",
    highlights: [
      "Technical co-founder; distinct business entity from Zuri Estates",
      "Built platform architecture, Sanity CMS, and frontend",
      "Shared component library and patterns with Zuri Estates",
    ],
    metrics: { status: "Live" },
    techStack: ["Next.js", "TypeScript", "Tailwind", "Sanity CMS", "Cloudinary", "NextAuth.js"],
    featured: false,
  },

  // EMPLOYMENT
  {
    id: "heynia",
    category: "employment",
    company: "Heynia",
    title: "AI Integration Engineer",
    logo: HeyniaLogo,
    link: "https://heynia.com",
    start: "Jan 2023",
    end: "Present",
    location: "Nairobi, Kenya (Remote)",
    badges: ["Python", "OpenAI GPT Fine-tuning", "React", "Node.js", "MongoDB", "Docker", "AWS"],
    description: "Employee at AI startup. Implemented GPT-3.5/4 fine-tuning via OpenAI hosted API for dental clinic use case. Built custom LLM wrappers, RAG pipeline, and voice AI with ElevenLabs. Containerized with Docker; deployed to AWS.",
    highlights: [
      "GPT-3.5/4 fine-tuning via OpenAI API for dental clinic domain; curated training data; production evaluation",
      "Custom LLM wrapper libraries (Python/TypeScript) for prompting, function calling, response parsing, cost tracking",
      "RAG pipeline: FAISS vector index + Sentence-Transformers embeddings; hybrid search with keyword fallback",
      "ElevenLabs TTS integration for voice responses; streaming audio; latency optimization",
      "Docker containerization; AWS deployment (EC2, RDS, S3); CI/CD with model evaluation gates",
    ],
    metrics: { fineTuningMethod: "OpenAI API", status: "Production" },
    techStack: ["Python", "OpenAI API", "React", "Node.js", "MongoDB", "Docker", "AWS", "FAISS", "ElevenLabs"],
    featured: true,
  },

  // ATTACHMENT
  {
    id: "whta-networks",
    category: "attachment",
    company: "wHTa Networks",
    title: "Backend Developer (Industrial Attachment)",
    logo: WhtaNetworksLogo,
    link: "https://whtanetworks.com",
    start: "May 2024",
    end: "Jul 2024",
    location: "Nairobi, Kenya",
    badges: ["Python", "Django", "Django REST Framework", "MySQL", "Linux"],
    description: "3-month mandatory BSc industrial attachment. Built Django/MySQL REST APIs for internal systems. Linux server administration; database design and optimization; API documentation.",
    highlights: [
      "Django/MySQL backend development for internal tooling",
      "REST API design with Django REST Framework",
      "Linux server administration and database optimization",
      "Mandatory university industrial attachment (BSc Computer Science)",
    ],
    metrics: { duration: "3 months", type: "Industrial Attachment" },
    techStack: ["Python", "Django", "DRF", "MySQL", "Linux"],
    featured: false,
  },

  // INDEPENDENT (Flagship)
  {
    id: "uniarchive",
    category: "independent",
    company: "UniArchive (Final-Year Project)",
    title: "Solo Full-Stack Engineer",
    logo: UniArchiveLogo,
    link: "https://github.com/b-aragu/UniArchive",
    start: "2023",
    end: "2024",
    location: "Nairobi, Kenya",
    badges: ["FastAPI", "PostgreSQL", "FAISS", "Sentence-Transformers", "Tesseract OCR", "React", "Docker", "GitHub Actions"],
    description: "Final-year BSc project: OCR + Semantic Search for academic documents. End-to-end pipeline: PDF → Tesseract OCR → chunking → embeddings → FAISS vector index → semantic search API → React frontend.",
    highlights: [
      "Tesseract OCR pipeline with preprocessing (deskew, denoise, binarize); 95%+ accuracy on clean docs",
      "Sentence-Transformers embeddings (all-MiniLM-L6-v2); batch processing; incremental indexing",
      "FAISS IVF index for memory efficiency; HNSW for accuracy; hybrid BM25 + vector search (RRF)",
      "FastAPI service with /search, /search/hybrid endpoints; sub-200ms p95 latency",
      "Multi-stage Docker builds; GitHub Actions CI/CD (lint, typecheck, test, build, deploy)",
      "Evaluation framework: Precision@5, Recall@10, MRR, nDCG@10 on annotated query set",
    ],
    metrics: { latency: "sub-200ms", ocrAccuracy: "95%+", indexType: "FAISS IVF/HNSW", pagesProcessed: "1000+" },
    techStack: ["FastAPI", "PostgreSQL", "FAISS", "Sentence-Transformers", "Tesseract", "React", "Docker", "GitHub Actions"],
    featured: true,
    caseStudySlug: "uniarchive",
  },
  {
    id: "mdaftari",
    category: "independent",
    company: "Mdaftari",
    title: "Solo Full-Stack Engineer",
    logo: MdaftariLogo,
    link: "https://github.com/b-aragu/Mdaftari",
    start: "2023",
    end: "2024",
    location: "Nairobi, Kenya",
    badges: ["React", "TypeScript", "Vite", "IndexedDB", "Service Workers", "M-Pesa Daraja", "PWA"],
    description: "Offline-first PWA for M-Pesa transaction tracking. SMS parsing, STK Push integration, zero-server architecture (client-only with Daraja callbacks).",
    highlights: [
      "100% offline-capable PWA with Service Worker lifecycle management; <3s cold start",
      "Parses 5+ M-Pesa SMS formats; STK Push integration with callback handling",
      "Zero-server architecture (client-only with Daraja callbacks); optimistic UI with background sync",
      "IndexedDB for local storage; installable PWA; biometric-ready",
    ],
    metrics: { offlineCapable: true, coldStart: "<3s", smsFormats: 5, architecture: "Zero-server" },
    techStack: ["React", "TypeScript", "Vite", "IndexedDB", "Service Workers", "M-Pesa Daraja"],
    featured: true,
    caseStudySlug: "mdaftari",
  },
  {
    id: "365",
    category: "independent",
    company: "365 Journaling App",
    title: "Solo Mobile Engineer",
    logo: ThreeSixFiveLogo,
    link: "https://github.com/b-aragu/365",
    start: "2023",
    end: "2024",
    location: "Nairobi, Kenya",
    badges: ["React Native", "Expo", "TypeScript", "SecureStore", "SQLite", "Biometric Auth", "Encryption"],
    description: "Cross-platform journaling app with rich text, media attachments, AES-256 local encryption, biometric lock (FaceID/TouchID), cloud sync architecture.",
    highlights: [
      "Expo ecosystem mastery: SecureStore, SQLite/AsyncStorage, Camera, Media Library",
      "AES-256 local encryption for journal entries; biometric authentication (FaceID/TouchID)",
      "Rich text editor with inline media (images, audio); media compression (HEVC/HEIC)",
      "Sync architecture design; conflict resolution; app store deployment ready",
    ],
    metrics: { encryption: "AES-256", biometric: "FaceID/TouchID", platform: "iOS/Android" },
    techStack: ["React Native", "Expo", "TypeScript", "SecureStore", "SQLite", "Biometric Auth"],
    featured: true,
    caseStudySlug: "365",
  },
  {
    id: "vaafiti",
    category: "independent",
    company: "vaafiti",
    title: "Solo Full-Stack Engineer",
    logo: VaafitiLogo,
    link: "https://github.com/b-aragu/vaafiti",
    start: "2024",
    end: "Present",
    location: "Nairobi, Kenya",
    badges: ["Three.js/R3F", "Tauri/Rust", "Next.js", "Stripe Connect", "PostgreSQL", "WebGL Shaders"],
    description: "3D Multi-tenant SaaS: virtual garment try-on, tenant isolation, subscription billing, desktop + web. R3F scene graph with dynamic tenant theming; Tauri/Rust backend for native capabilities.",
    highlights: [
      "R3F scene graph with dynamic tenant theming; 60fps WebGL on mobile; <100ms tenant switch",
      "Tauri/Rust backend for native capabilities (asset optimization, video encoding); secure IPC",
      "Stripe Connect multi-tenant billing; WebGL shaders for virtual try-on (body mesh, texture projection)",
      "Multi-tenant data isolation at DB + API + render layer; tenant-isolated asset libraries",
      "GLTF/GLB pipeline: validation → Draco compression → Cloudinary CDN → R3F runtime",
    ],
    metrics: { fps: "60fps mobile", tenantSwitch: "<100ms", billing: "Stripe Connect", architecture: "Multi-tenant" },
    techStack: ["Three.js/R3F", "Tauri/Rust", "Next.js", "Stripe Connect", "PostgreSQL", "WebGL Shaders"],
    featured: true,
    caseStudySlug: "vaafiti",
  },

  // FREELANCE
  {
    id: "ukamilifu",
    category: "freelance",
    company: "Ukamilifu (NGO)",
    title: "Full-Stack Developer",
    logo: UkamilifuLogo,
    link: "https://ukamilifu.netlify.app",
    start: "2022",
    end: "2023",
    location: "Remote",
    badges: ["React", "Vite", "MongoDB", "Netlify"],
    description: "Dynamic NGO platform for Christ-centered community development. Vulnerable person profiles, support requests, outreach scaling across Kenya.",
    highlights: ["React + Vite frontend; MongoDB backend; Netlify deployment", "Community management features; donation tracking"],
    metrics: { type: "NGO Platform" },
    techStack: ["React", "Vite", "MongoDB", "Netlify"],
    featured: false,
  },
  {
    id: "hifadhi",
    category: "freelance",
    company: "Hifadhi (Thrift Sanctuary)",
    title: "Full-Stack Developer",
    logo: HifadhiLogo,
    link: "https://hifadhi.onrender.com",
    start: "2022",
    end: "2023",
    location: "Remote",
    badges: ["React", "Node.js", "Express", "MongoDB", "M-Pesa Daraja"],
    description: "Sustainable fashion marketplace with full e-commerce: M-Pesa payments, seller dashboards, responsive product listings.",
    highlights: ["MERN stack with M-Pesa Daraja STK Push integration", "Seller dashboard; product management; responsive listings"],
    metrics: { type: "E-commerce Marketplace" },
    techStack: ["React", "Node.js", "Express", "MongoDB", "M-Pesa Daraja"],
    featured: false,
  },
  {
    id: "color-kenya",
    category: "freelance",
    company: "Color Kenya",
    title: "Full-Stack Developer",
    logo: ColorKenyaLogo,
    link: "https://colorkenya.netlify.app",
    start: "2022",
    end: "2023",
    location: "Remote",
    badges: ["React", "Next.js", "Styled Components", "Netlify"],
    description: "Platform connecting clients with certified painters. Painting services, tools shop, curated Kenyan-inspired color palettes.",
    highlights: ["Next.js with Styled Components; color visualizer (Canvas)", "Service booking; e-commerce for tools/palettes"],
    metrics: { type: "Service Marketplace" },
    techStack: ["React", "Next.js", "Styled Components", "Netlify"],
    featured: false,
  },
  {
    id: "kenya-chw",
    category: "freelance",
    company: "Kenya CHW",
    title: "Full-Stack Developer",
    logo: KenyaCHWLogo,
    link: "https://kenya-chw.netlify.com",
    start: "2023",
    end: "2024",
    location: "Remote",
    badges: ["React", "Tailwind CSS", "AI Integration (OpenAI)", "Netlify"],
    description: "AI-powered platform for Community Health Workers in remote Kenyan regions. Intelligent health content, diagnostic tools, offline-first accessibility.",
    highlights: ["OpenAI API integration with structured prompt library", "Health worker triage; drug lookup; protocol reference", "Offline-first design for low-connectivity regions"],
    metrics: { type: "Health AI Assistant" },
    techStack: ["React", "Tailwind CSS", "OpenAI API", "Netlify"],
    featured: false,
  },
  {
    id: "afriimports",
    category: "freelance",
    company: "AfriImports",
    title: "Full-Stack Developer",
    logo: AfriimportsLogo,
    link: "https://afriimports.netlify.app",
    start: "2023",
    end: "2024",
    location: "Remote",
    badges: ["Next.js", "shadcn/ui", "Tailwind CSS", "Netlify"],
    description: "Modern web platform simplifying global product imports for local African communities. Sleek, responsive UX with shadcn components.",
    highlights: ["Next.js 14 + shadcn/ui + Tailwind; modern component library", "Import workflow; supplier directory; responsive design"],
    metrics: { type: "Import Platform" },
    techStack: ["Next.js", "shadcn/ui", "Tailwind CSS", "Netlify"],
    featured: false,
  },
];

// Helpers
export const EXPERIENCE_BY_CATEGORY: Record<ExperienceCategory, Experience[]> = EXPERIENCE.reduce((acc, exp) => {
  if (!acc[exp.category]) acc[exp.category] = [];
  acc[exp.category].push(exp);
  return acc;
}, {} as Record<ExperienceCategory, Experience[]>);

export const FEATURED_EXPERIENCE = EXPERIENCE.filter((e) => e.featured);
export const FOUNDER_EXPERIENCE = EXPERIENCE.filter((e) => e.category === "founder");
export const EMPLOYMENT_EXPERIENCE = EXPERIENCE.filter((e) => e.category === "employment");
export const ATTACHMENT_EXPERIENCE = EXPERIENCE.filter((e) => e.category === "attachment");
export const INDEPENDENT_EXPERIENCE = EXPERIENCE.filter((e) => e.category === "independent");
export const FREELANCE_EXPERIENCE = EXPERIENCE.filter((e) => e.category === "freelance");

// ============================================================================
// PROJECTS (For Portfolio / Case Studies)
// ============================================================================

export const PROJECTS: Project[] = [
  // FLAGSHIP PROJECTS (Case Studies)
  {
    id: "uniarchive",
    title: "UniArchive",
    category: "flagship",
    logo: UniArchiveLogo,
    link: { label: "GitHub", href: "https://github.com/b-aragu/UniArchive", type: "repo" },
    repo: "https://github.com/b-aragu/UniArchive",
    techStack: ["FastAPI", "PostgreSQL", "FAISS", "Sentence-Transformers", "Tesseract OCR", "React", "Docker", "GitHub Actions"],
    description: "OCR + Semantic Search for academic documents. Final-year BSc project.",
    longDescription: "End-to-end pipeline: PDF → Tesseract OCR → chunking → Sentence-Transformer embeddings → FAISS vector index → semantic search API → React frontend. Hybrid BM25 + vector search with reciprocal rank fusion. Evaluation framework with Precision@K, Recall@K, MRR, nDCG.",
    highlights: [
      "Tesseract OCR pipeline with preprocessing; 95%+ accuracy on clean documents",
      "FAISS IVF/HNSW vector index; hybrid semantic + keyword search",
      "FastAPI service with sub-200ms p95 latency",
      "Multi-stage Docker builds; GitHub Actions CI/CD",
      "Evaluation harness: Precision@5, Recall@10, MRR, nDCG@10",
    ],
    metrics: { latency: "sub-200ms", ocrAccuracy: "95%+", pages: "1000+", indexType: "FAISS IVF/HNSW" },
    role: "Solo Full-Stack Engineer (Final-Year Project)",
    period: "2023–2024",
    featured: true,
    caseStudySlug: "uniarchive",
  },
  {
    id: "mdaftari",
    title: "Mdaftari",
    category: "flagship",
    logo: MdaftariLogo,
    link: { label: "GitHub", href: "https://github.com/b-aragu/Mdaftari", type: "repo" },
    repo: "https://github.com/b-aragu/Mdaftari",
    techStack: ["React", "TypeScript", "Vite", "IndexedDB", "Service Workers", "M-Pesa Daraja", "PWA"],
    description: "Offline-first PWA for M-Pesa transaction tracking. SMS parsing, STK Push, zero-server architecture.",
    longDescription: "100% offline-capable PWA with Service Worker lifecycle management. Parses 5+ M-Pesa SMS formats. STK Push integration with callback handling. Zero-server architecture (client-only with Daraja callbacks). Optimistic UI with background sync. IndexedDB for local storage; installable PWA.",
    highlights: [
      "100% offline-capable; <3s cold start",
      "Parses 5+ M-Pesa SMS formats; STK Push integration",
      "Zero-server architecture (client-only with Daraja callbacks)",
      "Service Worker lifecycle management; optimistic UI with background sync",
      "IndexedDB local storage; installable PWA; biometric-ready",
    ],
    metrics: { offline: true, coldStart: "<3s", smsFormats: 5, architecture: "Zero-server" },
    role: "Solo Full-Stack Engineer",
    period: "2023–2024",
    featured: true,
    caseStudySlug: "mdaftari",
  },
  {
    id: "365",
    title: "365 Journaling App",
    category: "flagship",
    logo: ThreeSixFiveLogo,
    link: { label: "GitHub", href: "https://github.com/b-aragu/365", type: "repo" },
    repo: "https://github.com/b-aragu/365",
    techStack: ["React Native", "Expo", "TypeScript", "SecureStore", "SQLite", "Biometric Auth", "AES-256 Encryption"],
    description: "Cross-platform encrypted journaling app with rich text, media attachments, biometric lock, cloud sync.",
    longDescription: "React Native/Expo journaling app with AES-256 local encryption, FaceID/TouchID biometric authentication, rich text editor with inline media (images, audio), media compression (HEVC/HEIC), sync architecture with conflict resolution. App store deployment ready.",
    highlights: [
      "AES-256 local encryption; FaceID/TouchID biometric authentication",
      "Rich text with inline media (images, audio); HEVC/HEIC compression",
      "Expo SecureStore + SQLite/AsyncStorage; Camera + Media Library",
      "Sync architecture with conflict resolution",
      "Cross-platform: iOS & Android via Expo",
    ],
    metrics: { encryption: "AES-256", biometric: "FaceID/TouchID", platforms: "iOS/Android" },
    role: "Solo Mobile Engineer",
    period: "2023–2024",
    featured: true,
    caseStudySlug: "365",
  },
  {
    id: "vaafiti",
    title: "vaafiti",
    category: "flagship",
    logo: VaafitiLogo,
    link: { label: "GitHub", href: "https://github.com/b-aragu/vaafiti", type: "repo" },
    repo: "https://github.com/b-aragu/vaafiti",
    techStack: ["Three.js/R3F", "Tauri/Rust", "Next.js", "Stripe Connect", "PostgreSQL", "WebGL Shaders"],
    description: "3D Multi-tenant SaaS: virtual garment try-on, tenant isolation, subscription billing, desktop + web.",
    longDescription: "R3F scene graph with dynamic tenant theming; Tauri/Rust backend for native capabilities; Stripe Connect multi-tenant billing; WebGL shaders for virtual try-on (body mesh deformation, texture projection). Multi-tenant data isolation at DB + API + render layer. GLTF pipeline: validation → Draco compression → Cloudinary CDN → R3F runtime. 60fps WebGL on mobile; <100ms tenant switch.",
    highlights: [
      "R3F scene graph with dynamic tenant theming; 60fps mobile",
      "Tauri/Rust backend; secure IPC for heavy processing",
      "Stripe Connect multi-tenant billing",
      "WebGL shaders for virtual try-on (body mesh, texture projection)",
      "Multi-tenant isolation at DB + API + render layer",
      "GLTF pipeline: validation → Draco → Cloudinary CDN → R3F",
    ],
    metrics: { fps: "60fps mobile", tenantSwitch: "<100ms", billing: "Stripe Connect", architecture: "Multi-tenant" },
    role: "Solo Full-Stack Engineer",
    period: "2024–Present",
    featured: true,
    caseStudySlug: "vaafiti",
  },
  {
    id: "founder-platforms",
    title: "Founder Platform Suite (Zuri Estates, Sienna Paints, Starnex)",
    category: "flagship",
    logo: ZuriEstatesLogo,
    link: { label: "Zuri Estates", href: "https://zuriestates.com", type: "live" },
    techStack: ["Next.js 14", "TypeScript", "Tailwind", "Sanity CMS", "Cloudinary", "Mapbox GL", "NextAuth.js", "PostgreSQL"],
    description: "Three live commercial platforms sharing core architecture. 216 properties / 707 paint SKUs / 739 industrial parts. Multi-role auth, multi-currency, live revenue.",
    longDescription: "Three distinct commercial platforms (real estate, paint commerce, industrial B2B) sharing a unified Next.js/Sanity/Cloudinary architecture. Zuri Estates: 216 properties, 73 developments, Mapbox geo-search, 4-role auth. Sienna Paints: 707 products, color visualizer (Canvas/WebGL), multi-author blog, M-Pesa/Stripe. Starnex: 739 parts, inquiry cart, multi-currency, safety datasheets. All live with revenue.",
    highlights: [
      "Unified architecture across 3 brands: Next.js 14, Sanity CMS, Cloudinary, Tailwind",
      "Zuri Estates: 216 properties, Mapbox GL geo-search, 4-role auth (Admin/Agent/Developer/Client)",
      "Sienna Paints: 707 SKUs, color visualizer, multi-author blog, M-Pesa Daraja + Stripe",
      "Starnex: 739 parts, multi-currency (KES/USD/EUR), inquiry system, PDF datasheets",
      "Sanity schema design for complex variants; Cloudinary transformation pipelines",
      "Live revenue-generating businesses with real customers",
    ],
    metrics: { properties: 216, paintSkus: 707, industrialParts: 739, status: "Live Revenue" },
    role: "Founder & Technical Lead (Zuri: Sole; Sienna/Starnex: Founder)",
    period: "2022–Present",
    featured: true,
    caseStudySlug: "founder-platforms",
  },

  // FREELANCE / CLIENT PROJECTS
  {
    id: "ukamilifu",
    title: "Ukamilifu",
    category: "freelance",
    logo: UkamilifuLogo,
    link: { label: "Live", href: "https://ukamilifu.netlify.app", type: "live" },
    techStack: ["React", "Vite", "MongoDB", "Netlify"],
    description: "NGO platform for Christ-centered community development across Kenya.",
    highlights: ["Vulnerable person profiles; support requests; outreach scaling", "React + Vite; MongoDB; Netlify deployment"],
    metrics: { type: "NGO Platform" },
    role: "Full-Stack Developer",
    period: "2022–2023",
    featured: false,
  },
  {
    id: "hifadhi",
    title: "Hifadhi (Thrift Sanctuary)",
    category: "freelance",
    logo: HifadhiLogo,
    link: { label: "Live", href: "https://hifadhi.onrender.com", type: "live" },
    techStack: ["React", "Node.js", "Express", "MongoDB", "M-Pesa Daraja"],
    description: "Sustainable fashion marketplace with M-Pesa payments, seller dashboards.",
    highlights: ["MERN stack; M-Pesa Daraja STK Push", "Seller dashboard; product management"],
    metrics: { type: "E-commerce Marketplace" },
    role: "Full-Stack Developer",
    period: "2022–2023",
    featured: false,
  },
  {
    id: "color-kenya",
    title: "Color Kenya",
    category: "freelance",
    logo: ColorKenyaLogo,
    link: { label: "Live", href: "https://colorkenya.netlify.app", type: "live" },
    techStack: ["React", "Next.js", "Styled Components", "Netlify"],
    description: "Platform connecting clients with certified painters; color visualizer, tools shop.",
    highlights: ["Next.js + Styled Components; Canvas color visualizer", "Service booking; e-commerce"],
    metrics: { type: "Service Marketplace" },
    role: "Full-Stack Developer",
    period: "2022–2023",
    featured: false,
  },
  {
    id: "kenya-chw",
    title: "Kenya CHW",
    category: "freelance",
    logo: KenyaCHWLogo,
    link: { label: "Live", href: "https://kenya-chw.netlify.com", type: "live" },
    techStack: ["React", "Tailwind CSS", "OpenAI API", "Netlify"],
    description: "AI-powered platform for Community Health Workers in remote regions.",
    highlights: ["OpenAI API with structured prompt library", "Triage; drug lookup; protocol reference", "Offline-first for low-connectivity"],
    metrics: { type: "Health AI Assistant" },
    role: "Full-Stack Developer",
    period: "2023–2024",
    featured: false,
  },
  {
    id: "afriimports",
    title: "AfriImports",
    category: "freelance",
    logo: AfriimportsLogo,
    link: { label: "Live", href: "https://afriimports.netlify.app", type: "live" },
    techStack: ["Next.js", "shadcn/ui", "Tailwind CSS", "Netlify"],
    description: "Import platform for African communities; modern UX with shadcn components.",
    highlights: ["Next.js 14 + shadcn/ui + Tailwind", "Import workflow; supplier directory"],
    metrics: { type: "Import Platform" },
    role: "Full-Stack Developer",
    period: "2023–2024",
    featured: false,
  },

  // EXPERIMENTAL / CREATIVE
  {
    id: "interactive-garment-starter",
    title: "interactive-garment-starter",
    category: "experimental",
    logo: VaafitiLogo, // placeholder
    link: { label: "GitHub", href: "https://github.com/amirmushichge/interactive-garment-starter", type: "repo" },
    repo: "https://github.com/amirmushichge/interactive-garment-starter",
    techStack: ["Three.js", "LTX Video", "Kling 3.0", "Background Removal", "WebGL"],
    description: "AI-generated garment turn animations; LTX/Kling video generation; interactive 3D rail navigation.",
    highlights: [
      "LTX-2.5 Pro / Kling 3.0 video generation pipeline",
      "Background removal (RMBG); frame interpolation",
      "Interactive WebGL viewer: hover to turn, click to inspect",
      "Prompt template system for consistent garment generation",
    ],
    metrics: { type: "Generative AI + 3D" },
    role: "Implementer / Contributor",
    period: "2024",
    featured: true,
    caseStudySlug: "interactive-garment-starter",
  },
];

export const FLAGSHIP_PROJECTS = PROJECTS.filter((p) => p.category === "flagship" && p.featured);
export const FREELANCE_PROJECTS = PROJECTS.filter((p) => p.category === "freelance");
export const EXPERIMENTAL_PROJECTS = PROJECTS.filter((p) => p.category === "experimental");

// ============================================================================
// EDUCATION
// ============================================================================

export const EDUCATION: Education[] = [
  {
    school: "Multimedia University of Kenya",
    degree: "Bachelor of Science in Computer Science",
    start: "2022",
    end: "2026",
    highlights: [
      "Final-year project: UniArchive — OCR + FAISS Semantic Search",
      "Core: Data Structures, Algorithms, Database Systems, Software Engineering, Computer Networks",
    ],
  },
  {
    school: "ALX Africa",
    degree: "Software Engineering Certificate",
    start: "Aug 2023",
    end: "Jun 2024",
    highlights: [
      "Full-stack curriculum: Python, Flask, Django, React, JavaScript",
      "Data Structures & Algorithms, System Design, Git/GitHub",
      "Peer learning, project-based, code review culture",
    ],
  },
];

// ============================================================================
// TARGETED CV VERSIONS CONFIG
// ============================================================================

export type CVVersion = "software-engineering" | "ai-applied-ai" | "ai-trainer-evaluator" | "video-multimodal";

export const CV_VERSIONS: Record<CVVersion, {
  label: string;
  headline: string;
  summary: string;
  featuredExperienceIds: string[];
  featuredProjectIds: string[];
  skillCategories: SkillCategory[];
  skillEmphasis: string[];
}> = {
  "software-engineering": {
    label: "Software Engineering",
    headline: "Software Engineer — Full-Stack, Systems, Product Builder",
    summary:
      "Software Engineer with 4+ years building and shipping production full-stack applications. Founded and serve as technical lead for three live commercial platforms (Zuri Estates, Sienna Paints, Starnex Industrial Spares) serving real customers in Kenya's real estate, paint, and industrial B2B markets — handling 216 properties, 707 SKUs, and 739 industrial parts with multi-role auth, multi-currency, and payment integration. Expert in TypeScript/Next.js, Python/FastAPI/Django, PostgreSQL/MongoDB, Docker, and CI/CD. Final-year project (UniArchive) demonstrates systems engineering: OCR pipeline + FAISS vector search for academic document retrieval.",
    featuredExperienceIds: ["zuri-estates", "sienna-paints", "starnex-industrial", "heynia", "whta-networks", "uniarchive", "mdaftari", "365", "vaafiti"],
    featuredProjectIds: ["uniarchive", "mdaftari", "365", "vaafiti", "founder-platforms"],
    skillCategories: ["languages", "frontend", "backend", "databases", "devops", "mobile", "payments", "cms", "business"],
    skillEmphasis: ["TypeScript", "Next.js", "React", "Python", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions", "System Design"],
  },
  "ai-applied-ai": {
    label: "AI / Applied AI Engineering",
    headline: "AI / Applied AI Engineer — LLMs, RAG, Vector Search, Multimodal Pipelines",
    summary:
      "Applied AI Engineer with production experience across the full ML lifecycle: GPT fine-tuning via OpenAI API (Heynia), RAG/FAISS semantic search (UniArchive), Tesseract OCR pipelines, Sentence-Transformer embeddings, ElevenLabs TTS integration, and 3D generative AI pipelines (vaafiti, interactive-garment-starter). Built and deployed 4+ AI-powered features in commercial products serving real users. Strong full-stack foundation (Next.js, FastAPI, Python, PostgreSQL) enables end-to-end ownership from data pipeline to production inference.",
    featuredExperienceIds: ["heynia", "uniarchive", "kenya-chw", "vaafiti", "interactive-garment-starter", "zuri-estates", "mdaftari"],
    featuredProjectIds: ["uniarchive", "vaafiti", "interactive-garment-starter", "founder-platforms"],
    skillCategories: ["languages", "ai-ml", "databases", "backend", "frontend", "devops", "creative-3d"],
    skillEmphasis: ["OpenAI Fine-tuning", "RAG", "FAISS", "Sentence-Transformers", "Tesseract OCR", "Prompt Engineering", "ElevenLabs", "Generative Video", "Python", "FastAPI"],
  },
  "ai-trainer-evaluator": {
    label: "AI Trainer / Technical Evaluator",
    headline: "AI Trainer / Technical Evaluator — Model Evaluation, Data Quality, Prompt Engineering",
    summary:
      "Technical evaluator with hands-on production AI experience: GPT fine-tuning via OpenAI API (Heynia), RAG/FAISS evaluation pipelines (UniArchive), prompt library design for health AI (Kenya CHW), and 3D generative AI quality assessment (vaafiti). Strong software engineering foundation (4+ years, 12+ production apps) enables rigorous evaluation of code, model outputs, and training data. Proven technical writer — evaluation reports, prompt libraries, API documentation, architecture decision records.",
    featuredExperienceIds: ["heynia", "uniarchive", "kenya-chw", "vaafiti", "interactive-garment-starter", "mdaftari"],
    featuredProjectIds: ["uniarchive", "vaafiti", "interactive-garment-starter"],
    skillCategories: ["ai-ml", "languages", "databases", "backend", "business", "devops"],
    skillEmphasis: ["Evaluation Metrics", "Precision@K/Recall@K", "LLM-as-Judge", "Prompt Versioning", "Data Quality", "Technical Writing", "Fine-tuning Evaluation", "RAG Evaluation"],
  },
  "video-multimodal": {
    label: "Video / Multimodal Annotation",
    headline: "Video / Multimodal Annotation Engineer — 3D Pipelines, Generative Video, Computer Vision",
    summary:
      "Multimodal engineer with production experience across the 3D + Generative AI pipeline: Three.js/React Three Fiber for interactive 3D (vaafiti), LTX Video / Kling 3.0 for garment animation generation (interactive-garment-starter), background removal, WebGL shaders for virtual try-on, and React Native media handling (365). Built end-to-end systems from asset ingestion → processing → real-time rendering → annotation-ready output. Strong full-stack foundation enables building annotation tooling, quality pipelines, and data infrastructure.",
    featuredExperienceIds: ["vaafiti", "interactive-garment-starter", "uniarchive", "365", "zuri-estates", "sienna-paints", "starnex-industrial"],
    featuredProjectIds: ["vaafiti", "interactive-garment-starter", "uniarchive", "365", "founder-platforms"],
    skillCategories: ["creative-3d", "ai-ml", "frontend", "mobile", "databases", "backend", "devops", "languages"],
    skillEmphasis: ["Three.js/R3F", "WebGL Shaders", "LTX Video", "Kling", "Background Removal", "GLTF Pipeline", "Tauri/Rust", "Tesseract OCR", "Annotation Formats", "Quality Metrics"],
  },
};

// ============================================================================
// JSON-LD STRUCTURED DATA (for SEO)
// ============================================================================

export const JSON_LD_PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSONAL_INFO.name,
  url: PERSONAL_INFO.personalWebsiteUrl,
  image: PERSONAL_INFO.avatarUrl,
  sameAs: [
    "https://github.com/b-aragu",
    "https://www.linkedin.com/in/baragu/",
    "https://x.com/b_aragu",
  ],
  jobTitle: "Software Engineer & Technical Product Builder",
  worksFor: [
    { "@type": "Organization", name: "Zuri Estates", url: "https://zuriestates.com" },
    { "@type": "Organization", name: "Sienna Paints Kenya", url: "https://siennapaints.com" },
    { "@type": "Organization", name: "Starnex Industrial Spares", url: "https://starnexindustrialspares.com" },
    { "@type": "Organization", name: "Heynia", url: "https://heynia.com" },
  ],
  knowsAbout: SKILLS.map((s) => s.name),
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Multimedia University of Kenya" },
    { "@type": "EducationalOrganization", name: "ALX Africa" },
  ],
};

export const JSON_LD_PROJECTS = FLAGSHIP_PROJECTS.map((p) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: p.title,
  description: p.description,
  url: p.link?.href,
  creator: { "@type": "Person", name: PERSONAL_INFO.name },
  programmingLanguage: p.techStack,
  dateCreated: p.period.split("–")[0].trim(),
  keywords: p.techStack.join(", "),
}));

// ============================================================================
// EXPORTS
// ============================================================================

export const RESUME_DATA = {
  personal: PERSONAL_INFO,
  skills: SKILLS,
  skillsByCategory: SKILLS_BY_CATEGORY,
  experience: EXPERIENCE,
  experienceByCategory: EXPERIENCE_BY_CATEGORY,
  featuredExperience: FEATURED_EXPERIENCE,
  founderExperience: FOUNDER_EXPERIENCE,
  employmentExperience: EMPLOYMENT_EXPERIENCE,
  attachmentExperience: ATTACHMENT_EXPERIENCE,
  independentExperience: INDEPENDENT_EXPERIENCE,
  freelanceExperience: FREELANCE_EXPERIENCE,
  projects: PROJECTS,
  flagshipProjects: FLAGSHIP_PROJECTS,
  freelanceProjects: FREELANCE_PROJECTS,
  experimentalProjects: EXPERIMENTAL_PROJECTS,
  education: EDUCATION,
  cvVersions: CV_VERSIONS,
  jsonLd: {
    person: JSON_LD_PERSON,
    projects: JSON_LD_PROJECTS,
  },
} as const;