import {

  ColorKenyaLogo,
  HeyniaLogo,
  FreelanceLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,

  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
  AfriimportsLogo,
  WandelogoLogo,
  UkamilifuLogo,
  HifadhiLogo,
  KenyaCHWLogo,
  WhtaNetworksLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Antony Baragu",
  initials: "AB",
  location: "Nairobi, Kenya, EAT",
  locationLink: "https://www.google.com/maps/place/Nairobi",
  about:
    "🚀 Aspiring Computer Scientist | Passionate Tech Enthusiast 🖥️ | Transforming code into meaningful innovations! 👨‍💻 | Exploring the realms of algorithms and data structures 🔍 | Lifelong Learner 📚",
  summary:
    "A passionate computer science student dedicated to learning new skills and exploring the vast world of technology day in and day out. Through my journey, I have delved into various aspects of computer science, taking on freelance projects that allow me to apply and enhance my knowledge. While I'm still on the learning path, I find joy in the challenges and opportunities that come with each project.",
  avatarUrl: "/images/logos/baragu.jpeg",
  personalWebsiteUrl: "https://baragu.tech",
  contact: {
    email: "baraguantonyy@gmail.com",
    tel: "+254740459672",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/b-aragu",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/baragu/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/b_aragu",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Multimedia University of Kenya",
      degree: "Bachelor's Of Science In Computer Science",
      start: "2022",
      end: "2026 (in progress)",
    },
    {
      school: "ALX",
      degree: "Certificate In Software Engineering",
      start: "August 2023",
      end: "June 2024",
    },
  ],
  work: [
    {
      company: "Heynia",
      link: "https://heynia.com",
      badges: ["AI", "React", "Node.js", "MongoDB", "Vite", "Python", "Docker", "AWS"],
      title: "AI Integration Engineer",
      logo: HeyniaLogo,
      start: "Jan 2023",
      end: "Present",
      description: "Led the integration of AI capabilities into a dental-powered clinic platform, including fine-tuning LLMs and building custom wrappers for intelligent task automation. Developed scalable backend systems and frontend features using React and Node.js. Deployed services with Docker and AWS, enhancing application intelligence and data processing performance in production.",
    },
    {
      company: "wHTa Networks",
      link: "https://whtanetworks.com",
      badges: ["Python", "Django", "MySQL", "Linux", "Git", "GitHub"],
      title: "Backend Software Engineer",
      logo: WhtaNetworksLogo,
      start: "May 2024",
      end: "July 2024",
      description: "Developed backend infrastructure using Django and MySQL to support internal systems for a networking solutions provider. Built scalable RESTful APIs, collaborated in agile sprints, and used Git/GitHub for effective version control. Worked on Linux servers and contributed to performance improvements through efficient backend logic and database optimization.",
    },
    {
      company: "Wande Realty",
      link: "https://wanderealty.com",
      badges: ["React.js", "Express.js", "MongoDB", "Auth0", "Cloudinary"],
      title: "Full Stack Web Developer",
      logo: WandelogoLogo,
      start: "2022",
      end: "Present",
      description: "Built and maintained a custom CMS real estate listing platform using the MERN stack. Integrated Auth0 for secure authentication and Cloudinary for fast media handling. Designed and optimized UI/UX for search and property filtering. Improved performance and scalability of database queries and collaborated with business teams to enhance lead conversions.",
    },
    {
      company: "Freelance Developer",
      link: "https://www.linkedin.com/in/baragu/",
      badges: ["Full Stack", "Client Projects", "Agile"],
      title: "Full Stack Developer",
      logo: FreelanceLogo,
      start: "2022",
      end: "Present",
      description: "Offering tailored software development solutions across web and AI domains. Delivered client projects from idea to deployment using modern stacks like React, Node.js, and Django. Ensured clean code, modular architecture, CI/CD automation, and clear communication. Frequently collaborated with designers and product owners for high-impact deliveries.",
    },
  ],
  skills: [
    "Python",
    "Django",
    "Flask",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "HTML/CSS",
    "MongoDB",
    "MySQL",
    "Node.js",
    "Express.js",
    "Docker",
    "AWS",
    "Git/GitHub",
    "REST API Development",
    "AI Integration",
    "GPT Fine-tuning",
    "ElevenLabs API",
    "Prompt Engineering",
    "Authentication (Auth0)",
    "Cloudinary",
    "Netlify",
    "Shadcn/ui",
    "Styled Components",
    "Linux",
    "Vite",
    "Algorithmic Problem-Solving",
    "C++",
    "C"
  ],  
  projects: [
    {
      title: "Ukamilifu",
      techStack: ["NGO Project", "React", "Vite", "MongoDB", "Netlify"],
      description: "A dynamic NGO platform enabling Christ-centered community development. Built for scaling outreach and managing vulnerable person profiles and support requests across Kenya.",
      logo: UkamilifuLogo,
      link: {
        label: "Ukamilifu",
        href: "https://ukamilifu.netlify.app",
      },
    },
    {
      title: "Hifadhi (Thrift Sanctuary)",
      techStack: ["React", "Node.js", "Express", "MongoDB", "DARAJA API"],
      description: "A sustainable fashion marketplace offering secondhand clothing. Built with full e-commerce features including Stripe payments, seller dashboards, and responsive product listings.",
      logo: HifadhiLogo,
      link: {
        label: "Hifadhi",
        href: "https://hifadhi.onrender.com",
      },
    },
    {
      title: "Color Kenya",
      techStack: ["React", "Next.js", "Styled Components", "Netlify"],
      description: "A platform for painters that connects clients with certified local craftsmen, offers painting services, and includes a shop for tools and curated Kenyan-inspired color palettes.",
      logo: ColorKenyaLogo,
      link: {
        label: "ColorKenya",
        href: "https://colorkenya.netlify.app",
      },
    },
    {
      title: "Kenya CHW",
      techStack: ["React", "Tailwind CSS", "AI Integration", "Netlify"],
      description: "An AI-powered platform to support Community Health Workers in remote Kenyan regions with intelligent health content, diagnostic tools, and offline-first accessibility.",
      logo: KenyaCHWLogo,
      link: {
        label: "Kenya CHW",
        href: "https://kenya-chw.netlify.com",
      },
    },
    {
      title: "Wande Realty",
      techStack: ["React", "Express.js", "MongoDB", "Auth0", "Cloudinary"],
      description: "A full-stack real estate platform built from scratch, featuring dynamic property listings, secure authentication with Auth0, media management via Cloudinary, and a custom CMS for admins.",
      logo: WandelogoLogo,
      link: {
        label: "Wande Realty",
        href: "https://wanderealty.com",
      },
    },
    {
      title: "wHTa Networks Backend Systems",
      techStack: ["Django", "Python", "MySQL", "Linux"],
      description: "Collaborated on backend infrastructure for a networking solutions firm. Contributed to scalable API development, database schema design, and system optimization in a Django-based environment.",
      logo: WhtaNetworksLogo,
      link: {
        label: "wHTa Networks",
        href: "https://whtanetworks.com",
      },
    },
    {
      title: "AfriImports",
      techStack: ["Next.js", "shadcn/ui", "Tailwind CSS", "Netlify"],
      description: "A modern web platform simplifying global product imports for local African communities. Built with Next.js and styled using shadcn components for a sleek, responsive user experience.",
      logo: AfriimportsLogo,
      link: {
        label: "AfriImports",
        href: "https://afriimports.netlify.app",
      },
    },
    {
      "title": "Heynia AI Platform",
      "techStack": [
        "GPT Fine-tuning",
        "Grok-inspired Models",
        "ElevenLabs API",
        "Docker",
        "AWS"
      ],
      "description": "Developed an AI-powered system for a dental-cleaning platform, integrating fine-tuned GPT models, ElevenLabs voice synthesis, and Grok-like inference workflows. Built scalable infrastructure and interfaces to automate user interactions and task execution.",
      "logo": HeyniaLogo,
      "link": {
        "label": "Heynia",
        "href": "https://heynia.com"
      }
    },    
  ],
} as const;

