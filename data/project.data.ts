export type Tab = "favs" | "saas" | "others";

export type Project = {
  num: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
  inProgress: boolean;
  cats: Tab[];
  stars?: number;
};

export const TABS: { key: Tab; label: string }[] = [
  { key: "favs", label: "⭐ My Favs" },
  { key: "saas", label: "SaaS" },
  { key: "others", label: "Others" },
];

export const ACCENT_COLORS = [
  "#6366f1",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#ec4899",
  "#84cc16",
  "#f97316",
];

export const projects: Project[] = [
  {
    num: "01",
    title: "NIXBIRD",
    description: "Premium Clothing brand.",
    tags: [
      "Nextjs",
      "Tailwind",
      "typescript",
      "supabase",
      "Oauth",
      "cloudinary",
      "resend",
      "trunstile",
      "postgresql",
      "vercel",
    ],
    github: "https://github.com/MehadiWritesCode/nixbird",
    live: "https://nixbird.com",
    featured: true,
    inProgress: false,
    cats: ["favs", "saas"],
  },
  {
    num: "02",
    title: "NetSpy",
    description:
      "Advance Packet capturing and security analysis and traffic monitoring.",
    tags: [
      "Python",
      "Scapy",
      "Customtkinter",
      "packet-sniffer",
      "traffic-monitor",
      "cyber-security",
      "networking",
    ],
    github: "https://github.com/MehadiWritesCode/NetSpy",
    live: "",
    featured: true,
    inProgress: false,
    cats: ["favs"],
  },
  {
    num: "03",
    title: "Robot PathFinder",
    description:
      "Multi-floor A* pathfinding visualizer with elevators & stairs — built with Python & Pygame.",
    tags: ["python", "pygame", "A*-algorithm", "heuristic", "bfs"],
    github: "https://github.com/MehadiWritesCode/RobotPathFinder",
    live: "",
    featured: true,
    inProgress: false,
    cats: ["favs"],
  },
  {
    num: "04",
    title: "XONEXA",
    description:
      "Full stack ecommerce website with authentication, product management, and analytics dashboard.",
    tags: [
      "React",
      "postgresql",
      "MongoDB",
      "Javascript",
      "supabase-Oauth",
      "supabase",
      "vercel",
      "google-Oauth",
      "render",
      "rest-API",
      "expressjs",
      "recharts",
      "bycrypt",
      "jwt",
      "cloudinary",
      "joi-validation",
    ],
    github: "https://github.com/MehadiWritesCode/xonexa-server",
    live: "https://xonexa-client.vercel.app",
    featured: true,
    inProgress: false,
    cats: ["favs", "saas"],
  },
  {
    num: "05",
    title: "Space-Viz",
    description:
      "Easy documentation and interactive 3D model for space objects like blackhole,nebula,solarsystem , cosmic web struture etc",
    tags: ["Nextjs", "Threejs", "WebGL shader", "typescript"],
    github: "https://github.com/MehadiWritesCode/space-viz",
    live: "https://space-viz.netlify.app",
    featured: true,
    inProgress: false,
    cats: ["favs"],
  },
  {
    num: "06",
    title: "CGCP",
    description:
      "A smart digital platform connecting citizens with government services in Bangladesh, enabling issue reporting, transparency, AI-powered assistance, and real-time public service insights.",
    tags: [
      "Nextjs",
      "postgresql",
      "Gemini API",
      "typescript",
      "supabase-Oauth",
      "supabase",
      "Leaflet.js",
      "OpenStreetMap",
      "image-verification",
      "chatbot",
    ],
    github:
      "https://github.com/MehadiWritesCode/Citizen-Govt-Connection-Platform",
    live: "",
    featured: true,
    inProgress: true,
    cats: ["favs"],
  },
  {
    num: "07",
    title: "World Explore",
    description: "Give primary details of every country in the world",
    tags: ["HTML", "css", "js", "API"],
    github: "https://github.com/MehadiWritesCode/world-explore",
    live: "https://world-explore6838.netlify.app",
    featured: false,
    inProgress: false,
    cats: ["others"],
    stars: 3,
  },
  {
    num: "08",
    title: "GlobeReport",
    description:
      "A BBC-inspired modern news platform built with PHP and Supabase database integration.",
    tags: ["HTML", "css", "js", "PHP", "supabase", "REST API"],
    github: "https://github.com/MehadiWritesCode/GlobeReport-servert",
    live: "",
    featured: false,
    inProgress: false,
    cats: ["others"],
    stars: 4,
  },
  {
    num: "09",
    title: "Portfolio — Nibir Hasan",
    description:
      "Personal portfolio website designed and developed for a friend.",
    tags: ["HTML", "css", "js", "netlify"],
    github: "https://github.com/MehadiWritesCode/nibir-hasan-portfolio",
    live: "https://nibir-hasan.netlify.app",
    featured: false,
    inProgress: false,
    cats: ["others"],
    stars: 3,
  },
  {
    num: "10",
    title: "Inventory Management System",
    description:
      "1st semester console-based inventory management system built with C.",
    tags: ["C", "Algorithm", "data-structures", "console-application"],
    github: "https://github.com/MehadiWritesCode/Inventory-Management-System",
    live: "",
    featured: false,
    inProgress: false,
    cats: ["others"],
    stars: 4,
  },
];
