"use client";

import { useEffect, useRef, useState } from "react";

/* ── Icons ──────────────────────────────────────────────────────────────── */
const IconFilm = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect
      x="2"
      y="4"
      width="16"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M2 7h16M2 13h16M6 4v3M10 4v3M14 4v3M6 13v3M10 13v3M14 13v3"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const IconGamepad = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M3 8c0-2.2 1.8-4 4-4h6c2.2 0 4 1.8 4 4v1l1 5c.2 1-.6 2-1.6 2s-1.8-.6-2.2-1.5L13.5 14h-7l-.7 1.5C5.4 16.4 4.6 17 3.6 17S1.8 16 2 15l1-5V8z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 9v1.5M6.5 10h2M12.5 9.5h1M13 9v1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const IconBook = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M4 3h9a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M15 14H5M7 3v11"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

/* ── Data ───────────────────────────────────────────────────────────────── */
type HobbyItem = { label: string; sub?: string };
type HobbyBlock = {
  id: string;
  category: string;
  tag: string;
  icon: React.ReactNode;
  items: HobbyItem[];
};

const hobbies: HobbyBlock[] = [
  {
    id: "movies",
    category: "Movies & Series",
    tag: "Cinephile",
    icon: <IconFilm />,
    items: [
      { label: "Fantasy", sub: "Favourite genre" },
      { label: "Gothic Horror", sub: "Dark atmosphere" },
      { label: "Sci-Fi", sub: "Mind-bending" },
      { label: "Animated", sub: "Art direction" },
      { label: "Web Series", sub: "Binge-worthy" },
    ],
  },
  {
    id: "gaming",
    category: "Competitive Gaming",
    tag: "Gamer",
    icon: <IconGamepad />,
    items: [
      { label: "Free Fire", sub: "BR" },
      { label: "Call of Duty: Mobile", sub: "FPS" },
      { label: "MLBB", sub: "MOBA" },
      { label: "League of Legends", sub: "MOBA" },
      { label: "Clash of Clans", sub: "Strategy" },
    ],
  },
  {
    id: "books",
    category: "Books & Reading",
    tag: "Reader",
    icon: <IconBook />,
    items: [
      { label: "The Laws of Human Nature", sub: "Psychology" },
      { label: "Influence", sub: "Persuasion" },
      { label: "The 48 Laws of Power", sub: "Dark psychology" },
      { label: "Manufacturing Consent", sub: "Media & power" },
      { label: "The Gift of Fear", sub: "Intuition" },
      { label: "A Brief History of Time", sub: "Science" },
      { label: "Thinking, Fast and Slow", sub: "Cognitive sci." },
      { label: "The Dictator's Handbook", sub: "Political sci." },
    ],
  },
];

/* ── Fade-in hook ───────────────────────────────────────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ── Card ───────────────────────────────────────────────────────────────── */
function HobbyCard({ block, delay }: { block: HobbyBlock; delay: number }) {
  const { ref, visible } = useFadeIn();

  return (
    <div
      ref={ref}
      className="group bg-white border border-black/[0.08] rounded-2xl p-7 flex flex-col gap-6 hover:border-black/25 hover:shadow-sm transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, border-color 0.2s, box-shadow 0.2s`,
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl border border-black/[0.08] flex items-center justify-center text-black/60 group-hover:text-black group-hover:border-black/25 transition-all duration-200">
          {block.icon}
        </div>
        <div>
          <h3 className="text-[14px] font-semibold text-black leading-none">
            {block.category}
          </h3>
          <span className="text-[10px] text-black/50 uppercase tracking-[0.18em] font-medium mt-1 block">
            {block.tag}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-black/[0.06] group-hover:bg-black/[0.12] transition-colors duration-300" />

      {/* Items */}
      <ul className="space-y-3.5">
        {block.items.map((item) => (
          <li
            key={item.label}
            className="flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-black/40 group-hover:bg-black/70 transition-colors duration-200 flex-shrink-0" />
              <span className="text-[13px] text-black/80 group-hover:text-black transition-colors duration-200 font-medium">
                {item.label}
              </span>
            </div>
            {item.sub && (
              <span className="text-[10px] text-black/50 uppercase tracking-[0.12em] flex-shrink-0 font-medium">
                {item.sub}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────────────────── */
export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="lg:ml-[240px] py-10 bg-white border-t border-black/[0.06]"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16">
        {/* Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[11px] text-black/30 uppercase tracking-[0.25em]">
            05 — Beyond Code
          </span>
          <div className="flex-1 h-px bg-black/[0.07]" />
        </div>

        {/* Heading */}
        <div className="mb-12">
          <h2 className="font-semibold text-[clamp(1.9rem,3.5vw,2.8rem)] text-black leading-[1.15]">
            When I&apos;m not coding
          </h2>
          <p className="text-black/60 mt-2 text-base max-w-lg">
            A developer is more than their stack — here&apos;s what keeps me
            entertained and sharp outside the editor.
          </p>
        </div>

        {/* Cards — first two side by side, books full width below */}
        <div className="flex flex-col gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            {hobbies.slice(0, 2).map((block, i) => (
              <HobbyCard key={block.id} block={block} delay={i * 100} />
            ))}
          </div>

          {/* Books card spans full width */}
          <HobbyCard key={hobbies[2].id} block={hobbies[2]} delay={200} />
        </div>

        {/* Bottom quote strip */}
        <div className="mt-12 border border-black/[0.07] rounded-2xl px-7 py-5 flex items-start gap-4">
          <div className="w-7 h-7 rounded-lg border border-black/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 4.5C2 3.4 2.9 2.5 4 2.5h1.5V4H4v2H2V4.5zM8 4.5C8 3.4 8.9 2.5 10 2.5h1.5V4H10v2H8V4.5z"
                fill="black"
                fillOpacity="0.35"
              />
            </svg>
          </div>
          <p className="text-[13px] text-black/65 leading-relaxed">
            Competitive gaming sharpens my decision-making under pressure, dark
            cinema keeps my creative instincts alive, and books on psychology
            and power deepen how I understand people and systems — all of it
            feeds back into better, more thoughtful software.
          </p>
        </div>
      </div>
    </section>
  );
}
