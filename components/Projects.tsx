"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function getTagColor(tag: string) {
  const t = tag.toLowerCase();
  if (
    ["python", "c", "javascript", "js", "typescript", "java"].some((k) =>
      t.includes(k),
    )
  )
    return "bg-yellow-50 border-yellow-200/80 text-yellow-700";
  if (
    ["react", "nextjs", "next.js", "html", "css", "tailwind", "framer"].some(
      (k) => t.includes(k),
    )
  )
    return "bg-blue-50 border-blue-200/80 text-blue-600";
  if (
    ["supabase", "postgresql", "mongodb", "mysql", "redis"].some((k) =>
      t.includes(k),
    )
  )
    return "bg-green-50 border-green-200/80 text-green-700";
  if (
    ["vercel", "netlify", "render", "cloudflare", "docker"].some((k) =>
      t.includes(k),
    )
  )
    return "bg-purple-50 border-purple-200/80 text-purple-600";
  if (
    ["oauth", "jwt", "auth", "bcrypt", "security", "cyber"].some((k) =>
      t.includes(k),
    )
  )
    return "bg-red-50 border-red-200/80 text-red-600";
  if (
    ["api", "rest", "graphql", "expressjs", "node"].some((k) => t.includes(k))
  )
    return "bg-orange-50 border-orange-200/80 text-orange-600";
  if (
    ["cloudinary", "resend", "stripe", "gemini", "openai"].some((k) =>
      t.includes(k),
    )
  )
    return "bg-pink-50 border-pink-200/80 text-pink-600";
  return "bg-slate-50 border-slate-200/80 text-slate-500";
}

const projects = [
  {
    num: "01",
    title: "NIXBIRD",
    description: "Premium Clothing brand.",
    tags: [
      "Nextjs",
      "Tailwind",
      "typescript",
      "supabase",
      "supabase-Oauth",
      "cloudinary",
      "resend",
      "trunstile",
      "cloudflare",
      "google-Oauth",
      "postgresql",
      "vercel",
    ],
    github: "https://github.com/MehadiWritesCode/nixbird",
    live: "https://nixbird.com",
    featured: true,
    inProgress: false,
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
  },
  {
    num: "05",
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
  },

  {
    num: "06",
    title: "World Explore",
    description: "Give primary details of every country in the world",
    tags: ["HTML", "css", "js", "API"],
    github: "https://github.com/MehadiWritesCode/world-explore",
    live: "https://world-explore6838.netlify.app",
    featured: false,
    inProgress: false,
  },

  {
    num: "07",
    title: "GlobeReport",
    description:
      "A BBC-inspired modern news platform built with PHP and Supabase database integration.",
    tags: ["HTML", "css", "js", "PHP", "supabase", "REST API"],
    github: "https://github.com/MehadiWritesCode/GlobeReport-servert",
    live: "",
    featured: false,
    inProgress: false,
  },
  {
    num: "08",
    title: "Portfolio — Nibir Hasan",
    description:
      "Personal portfolio website designed and developed for a friend.",
    tags: ["HTML", "css", "js", "netlify"],
    github: "https://github.com/MehadiWritesCode/nibir-hasan-portfolio",
    live: "https://nibir-hasan.netlify.app",
    featured: false,
    inProgress: false,
  },
  {
    num: "09",
    title: "Inventory Management System",
    description:
      "1st semester console-based inventory management system built with C.",
    tags: ["C", "Algorithm", "data-structures", "console-application"],
    github: "https://github.com/MehadiWritesCode/Inventory-Management-System",
    live: "",
    featured: false,
    inProgress: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="lg:ml-[240px] py-28 bg-white border-t border-black/[0.06]"
    >
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        {/* Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono-custom text-[11px] text-black/30 uppercase tracking-[0.25em]">
            04 — Projects
          </span>
          <div className="flex-1 h-px bg-black/[0.07]" />
        </div>

        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display font-semibold text-[clamp(1.9rem,3.5vw,2.8rem)] text-black leading-[1.15]">
            Things I`ve built
          </h2>
          <Link
            href="https://github.com/MehadiWritesCode"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-[13px] text-black/35 hover:text-black transition-colors font-medium"
          >
            <GithubIcon size={14} />
            All on GitHub
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <div
              key={p.num}
              className="group relative bg-white border border-black/[0.08] rounded-2xl p-8 hover:border-black/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 overflow-hidden"
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-custom text-[11px] text-black/20 uppercase tracking-[0.2em]">
                  {p.num}
                </span>
                <div className="flex items-center gap-2">
                  {p.inProgress && (
                    <span className="text-[11px] font-medium text-amber-500 border  bg-amber-50 px-2.5 py-0.5 rounded-full">
                      In Progress
                    </span>
                  )}
                  {p.featured && !p.inProgress && (
                    <span className="text-[11px] font-medium text-white border border-black/10 px-2.5 py-0.5 rounded-full bg-black">
                      Featured
                    </span>
                  )}
                  <Link
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center rounded-lg border border-black/08 text-black/30 hover:text-black hover:border-black/20 transition-all"
                  >
                    <GithubIcon size={13} />
                  </Link>
                  {p.live && (
                    <Link
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 flex items-center justify-center rounded-lg border border-black/08 text-black/30 hover:text-black hover:border-black/20 transition-all"
                    >
                      <ArrowUpRight size={13} />
                    </Link>
                  )}
                </div>
              </div>

              <h3 className="font-display font-semibold text-xl text-black mb-3">
                {p.title}
              </h3>
              <p className="text-black/40 text-[13px] leading-relaxed mb-6">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className={` text-black text-[11px] uppercase tracking-wider px-3 py-1 border rounded-full ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover left border accent */}
              <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
