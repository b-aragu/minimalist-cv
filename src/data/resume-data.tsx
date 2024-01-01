import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
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
  	"As a passionate computer science student, I am dedicated to learning new skills and exploring the vast world of technology day in and day out. Through my journey, I have delved into various aspects of computer science, taking on freelance projects that allow me to apply and enhance my knowledge. While I'm still on the learning path, I find joy in the challenges and opportunities that come with each project.",  
  avatarUrl: "https://media.licdn.com/dms/image/D4D03AQFULVEYAh5wfA/profile-displayphoto-shrink_200_200/0/1699103444611?e=1709769600&v=beta&t=nmxEEfPQ76nYu1g494WAwv0mTzfzEjXHAS2rAq0veYI",
  personalWebsiteUrl: "https://baragu.me",
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
      end: "June 2024 (In Progress)",
    },

  ],
  work: [
       {
      company: "Freelance Developer",
      link: "https://www.linkedin.com/in/baragu/",
      badges: [],
      title: "Full Stack Developer",
      logo: NSNLogo,
      start: "2022",
      end: "Present",
      description: "Offering custom software development solutions with expertise in Full Stack Development. Collaborating with clients to deliver high-quality and innovative solutions tailored to their unique needs. Ensuring code quality, testing, and timely project delivery.",
    },
  ],
  skills: [
    "Python",
    "HTML/CSS",
    "Git/Github",
    "Algorithmic problem-solving skills",
    "Python Flask",
    "C++",
    "C",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
