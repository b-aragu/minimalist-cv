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
      title: "Todo App",
      techStack: [
        "Learning Project",
        "Python",
        "HTML",
        "CSS",
        "Flask",
      ],
      description: "A simple flask Todo app to help learn the flask framework",
      logo: ConsultlyLogo,
      link: {
        label: "Flasktodoapp.com",
        href: "https://flask-todo-app-xt3n.onrender.com/",
      },
    },
    {
      title: "Chatbot",
      techStack: [
        "Side Project",
        "Python",
        "HTML",
        "CSS",
	"JS",
        "Flask",
      ],
      description: "A Flask chatbot that allows you to integrate any llm",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/b-aragu/chatbot",
      },
    },

    {
      title: "Christmas Spin Wheel",
      techStack: ["Side Project", "Python", "Flask", "Html", "CSS", "JS"],
      description: "A Secret Santa Web App",
      logo: MonitoLogo,
      link: {
        label: "Secret Santa",
        href: "https://beasecretsantatoday.onrender.com/",
      },
    },
  ],
} as const;

