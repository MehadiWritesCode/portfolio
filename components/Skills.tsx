"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  type Variants,
} from "framer-motion";

const sections = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Languages",
] as const;
type Section = (typeof sections)[number];

const categories = {
  Frontend: [
    { name: "Next.js", level: 90 },
    { name: "React", level: 88 },
    { name: "TypeScript", level: 82 },
    { name: "Tailwind CSS", level: 95 },
    { name: "HTML/CSS", level: 93 },
  ],
  Backend: [
    { name: "Node.js", level: 78 },
    { name: "Express", level: 75 },
    { name: "REST API", level: 80 },
  ],
  Database: [
    { name: "PostgreSQL", level: 70 },
    { name: "MySQL", level: 70 },
  ],
  Tools: [
    { name: "Git", level: 70 },
    { name: "VS Code", level: 95 },
    { name: "Vercel", level: 80 },
    { name: "Linux", level: 65 },
  ],
  Languages: [],
};

const badges = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "PostgreSQL",
  "Git",
  "Vercel",
  "Express",
  "REST API",
];

/* ─── Framer Motion Variants ─────────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.22, ease: "easeIn" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

/* ─── Lang Icons ─────────────────────────────────────────────────────────── */
const LangIcon = ({ lang }: { lang: string }) => {
  const icons: Record<string, React.ReactNode> = {
    C: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontFamily="Georgia,serif"
          fontSize="15"
          fontWeight="700"
          fill="#fff"
        >
          C
        </text>
      </svg>
    ),
    "C++": (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000" />
        <text
          x="11"
          y="22"
          textAnchor="middle"
          fontFamily="Georgia,serif"
          fontSize="13"
          fontWeight="700"
          fill="#fff"
        >
          C
        </text>
        <text
          x="23"
          y="22"
          textAnchor="middle"
          fontFamily="Georgia,serif"
          fontSize="13"
          fontWeight="700"
          fill="#fff"
        >
          ++
        </text>
      </svg>
    ),
    Java: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000" />
        <rect x="10" y="18" width="12" height="2" rx="1" fill="#fff" />
        <path
          d="M11 12 Q11 10 13 10 Q13 13 15 13 Q17 13 17 10 Q19 10 19 12 L19 18 L11 18 Z"
          fill="#fff"
        />
        <path
          d="M19 13.5 Q22 13.5 22 15.5 Q22 17.5 19 17.5"
          stroke="#fff"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
    JavaScript: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontFamily="Georgia,serif"
          fontSize="13"
          fontWeight="700"
          fill="#fff"
        >
          JS
        </text>
      </svg>
    ),
    Python: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000" />
        <path
          d="M10 10 Q10 8 13 8 L17 8 Q20 8 20 11 L20 14 L12 14 L12 17 L20 17 L20 21 Q20 24 17 24 L13 24 Q10 24 10 21"
          stroke="#fff"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="13.5" cy="11" r="1" fill="#fff" />
        <circle cx="18.5" cy="21" r="1" fill="#fff" />
      </svg>
    ),
    PHP: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontFamily="Georgia,serif"
          fontSize="13"
          fontWeight="700"
          fill="#fff"
        >
          PHP
        </text>
      </svg>
    ),
    Assembly: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000" />
        <rect
          x="11"
          y="11"
          width="10"
          height="10"
          rx="2"
          stroke="#fff"
          strokeWidth="1.5"
          fill="none"
        />
        <line
          x1="13"
          y1="11"
          x2="13"
          y2="9"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="11"
          x2="16"
          y2="9"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="19"
          y1="11"
          x2="19"
          y2="9"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="13"
          y1="21"
          x2="13"
          y2="23"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="21"
          x2="16"
          y2="23"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="19"
          y1="21"
          x2="19"
          y2="23"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="11"
          y1="14"
          x2="9"
          y2="14"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="11"
          y1="18"
          x2="9"
          y2="18"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="21"
          y1="14"
          x2="23"
          y2="14"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="21"
          y1="18"
          x2="23"
          y2="18"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  };
  return <>{icons[lang] ?? null}</>;
};

const languages = [
  { name: "C", tag: "Systems" },
  { name: "C++", tag: "Systems" },
  { name: "Java", tag: "OOP" },
  { name: "JavaScript", tag: "Web" },
  { name: "Python", tag: "General" },
  { name: "PHP", tag: "Backend" },
  { name: "Assembly", tag: "Low-level" },
];

/* ─── Skill Bar ─────────────────────────────────────────────────────────── */
function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  // useInView triggers the bar fill when it enters viewport
  const inView = useInView(ref, { once: false, margin: "0px 0px -40px 0px" });

  return (
    // motion.div handles fade+slide via parent stagger
    <motion.div ref={ref} variants={itemVariants} className="group">
      <div className="flex justify-between mb-1.5">
        <span className="text-[13px] font-medium text-black/70 group-hover:text-black transition-colors duration-200">
          {name}
        </span>
        <span
          className="font-mono text-[11px] text-black/40 group-hover:text-black transition-colors duration-200"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {level}%
        </span>
      </div>
      <div className="h-[3px] bg-black/[0.06] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-black rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{
            duration: 0.65,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.1,
          }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function Skills() {
  const [active, setActive] = useState<Section>("Frontend");
  const navRef = useRef<HTMLDivElement>(null);

  const handleNav = (sec: Section) => {
    setActive(sec);
    const btn = navRef.current?.querySelector(
      `[data-tab="${sec}"]`,
    ) as HTMLElement | null;
    btn?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const skillList = categories[active];

  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
          will-change: transform;
        }
        .skills-nav::-webkit-scrollbar { display: none; }
        .skills-nav { -ms-overflow-style: none; scrollbar-width: none; }

        .tab-btn { position: relative; }
        .tab-btn::after {
          content: "";
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: black;
          transform: scaleX(0);
          transition: transform 0.2s ease;
          border-radius: 2px 2px 0 0;
        }
        .tab-btn.active::after,
        .tab-btn:hover::after { transform: scaleX(1); }

        .skills-content-area { min-height: 320px; }
        .skills-section-wrap { overflow-anchor: none; }
      `}</style>

      <section
        id="skills"
        className="skills-section-wrap lg:ml-[240px] py-10 bg-white border-t border-black/[0.06]"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16">
          {/* Label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-[11px] text-black/30 uppercase tracking-[0.25em]">
              03 — Skills
            </span>
            <div className="flex-1 h-px bg-black/[0.07]" />
          </div>

          {/* Heading */}
          <div className="mb-10">
            <h2 className="font-semibold text-[clamp(1.9rem,3.5vw,2.8rem)] text-black leading-[1.15]">
              My tech stack
            </h2>
            <p className="text-black/40 mt-2 text-base">
              Tools I reach for when building products.
            </p>
          </div>

          {/* Sticky Nav */}
          <div
            className="sticky top-0 z-20 bg-white/90 backdrop-blur-sm border-b border-black/[0.07] mb-10 -mx-5 sm:-mx-8 lg:-mx-16 px-5 sm:px-8 lg:px-16 overflow-hidden"
            style={{ transform: "translateZ(0)", willChange: "transform" }}
          >
            <nav
              ref={navRef}
              className="skills-nav flex overflow-x-auto gap-0"
              aria-label="Skills navigation"
            >
              {sections.map((sec) => (
                <button
                  key={sec}
                  data-tab={sec}
                  onClick={() => handleNav(sec)}
                  className={`tab-btn flex-shrink-0 px-4 sm:px-5 py-4 text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-200 outline-none ${
                    active === sec
                      ? "active text-black"
                      : "text-black/35 hover:text-black/70"
                  }`}
                >
                  {sec}
                </button>
              ))}
            </nav>
          </div>

          {/* ── Content Panel ── */}
          <div className="skills-content-area">
            <AnimatePresence mode="wait">
              {active !== "Languages" ? (
                /*
                 * SKILL BARS PANEL
                 * key={active} forces unmount/remount on tab switch
                 * so AnimatePresence runs exit → enter correctly
                 */
                <motion.div
                  key={active}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid sm:grid-cols-2 gap-x-12 gap-y-5 mb-14"
                >
                  {skillList.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </motion.div>
              ) : (
                /*
                 * LANGUAGES GRID PANEL
                 * Same stagger pattern, spring-pop card variants
                 */
                <motion.div
                  key="Languages"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid grid-cols-4 sm:grid-cols-7 gap-3 mb-14"
                >
                  {languages.map((lang) => (
                    <motion.div
                      key={lang.name}
                      variants={cardVariants}
                      whileHover={{
                        y: -4,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                      }}
                      whileTap={{ scale: 0.96 }}
                      className="bg-white border border-black/[0.08] rounded-xl p-3 sm:p-4 flex flex-col items-center gap-2 cursor-default"
                      style={{ willChange: "transform" }}
                    >
                      <LangIcon lang={lang.name} />
                      <span className="text-[11px] sm:text-[12px] font-semibold text-black text-center leading-tight">
                        {lang.name}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-black/35 tracking-wide">
                        {lang.tag}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Marquee badge strip */}
          <div className="overflow-hidden border-y border-black/[0.07] py-4">
            <div className="flex animate-marquee gap-3 w-max">
              {[...badges, ...badges].map((b, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 text-[11px] uppercase tracking-[0.15em] px-4 py-2 bg-white border border-black/[0.08] rounded-full text-black hover:border-black/30 hover:bg-black hover:text-white transition-colors duration-200 cursor-default"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
