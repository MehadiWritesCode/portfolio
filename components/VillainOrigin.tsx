"use client";

import { useState } from "react";

/* ─── inline SVG icons (no extra dependency) ─────────────── */
function IconTrash() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={28}
      height={28}
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
    </svg>
  );
}
function IconScale() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={28}
      height={28}
    >
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M3 9l9-6 9 6" />
      <path d="M5 9l-2 6a4 4 0 008 0L9 9" />
      <path d="M15 9l-2 6a4 4 0 008 0L19 9" />
      <line x1="5" y1="21" x2="19" y2="21" />
    </svg>
  );
}
function IconFist() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={28}
      height={28}
    >
      <path d="M18 11V8a2 2 0 00-4 0v3" />
      <path d="M14 11V6a2 2 0 00-4 0v5" />
      <path d="M10 11V8a2 2 0 00-4 0v8a6 6 0 006 6h2a6 6 0 006-6v-3a2 2 0 00-4 0" />
    </svg>
  );
}

/* ─── types ─────────────────────────────────────────────── */
interface PeeveItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  desc: string;
  verdict: string;
  tag: string;
}

/* ─── data ───────────────────────────────────────────────── */
const peeves: PeeveItem[] = [
  {
    id: "litter",
    icon: <IconTrash />,
    title: "Litterbugs",
    subtitle: "Aka. self-appointed garbage artists",
    desc: "They spot a bin. They walk past it. They drop the wrapper anyway — with the energy of someone who personally owns the atmosphere. Scientists are still studying this species.",
    verdict: "Sentence: forced to eat their own litter. Poetic.",
    tag: "public menace",
  },
  {
    id: "bias",
    icon: <IconScale />,
    title: "Unequal Judges",
    subtitle: "Aka. teachers with a favourite child syndrome",
    desc: "The gradebook doesn't lie, but apparently some teachers do. Marking one student's identical answer differently because you simply like their face more — bold. Truly bold.",
    verdict: "Sentence: graded by their own system. Anonymously.",
    tag: "broken compass",
  },
  {
    id: "violence",
    icon: <IconFist />,
    title: "Adults Who Hit Children",
    subtitle: "Aka. people who lost an argument to a 7-year-old",
    desc: "You are bigger, older, and allegedly wiser — and your best response to a child was violence? Stunning. A masterclass in what not to be. Truly inspirational, in the worst way.",
    verdict: "Sentence: they must explain their logic. To the 7-year-old.",
    tag: "inexcusable",
  },
];

/* ─── decorative skull SVG ───────────────────────────────── */
function SkullDeco({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <ellipse
        cx="32"
        cy="30"
        rx="24"
        ry="22"
        fill="currentColor"
        opacity=".08"
      />
      <ellipse
        cx="32"
        cy="28"
        rx="20"
        ry="18"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <rect
        x="22"
        y="52"
        width="8"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <rect
        x="34"
        y="52"
        width="8"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="32"
        y1="52"
        x2="32"
        y2="62"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <ellipse cx="24" cy="28" rx="5" ry="6" fill="currentColor" opacity=".5" />
      <ellipse cx="40" cy="28" rx="5" ry="6" fill="currentColor" opacity=".5" />
      <path
        d="M28 40 Q32 43 36 40"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─── card ───────────────────────────────────────────────── */
function PeeveCard({ item, index }: { item: PeeveItem; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const rotations = ["-rotate-1", "rotate-0", "rotate-1"];

  return (
    <div
      className={`group relative cursor-pointer ${rotations[index % 3]}`}
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
      tabIndex={0}
      role="button"
      aria-label={`${item.title} — click to reveal verdict`}
    >
      {/* card flip wrapper */}
      <div
        className="relative w-full transition-all duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "340px",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 flex flex-col border border-stone-300 bg-white shadow-[4px_4px_0px_#1c1917] p-6 rounded-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* tag */}
          <span className="self-start mb-4 font-mono text-[10px] uppercase tracking-widest border border-stone-400 text-stone-500 px-2 py-0.5">
            #{item.tag}
          </span>

          {/* icon */}
          <div className="mb-4 text-stone-700 group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>

          {/* title */}
          <h3
            className="font-serif text-2xl font-bold text-stone-900 leading-tight mb-1"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {item.title}
          </h3>
          <p className="font-mono text-[11px] text-stone-400 italic mb-4">
            {item.subtitle}
          </p>

          {/* desc */}
          <p className="text-sm text-stone-600 leading-relaxed flex-1">
            {item.desc}
          </p>

          {/* flip hint */}
          <div className="mt-5 flex items-center gap-1.5 text-[11px] font-mono text-stone-400 group-hover:text-stone-600 transition-colors">
            <span className="inline-block animate-bounce">↩</span>
            <span>flip for the verdict</span>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center border border-stone-800 bg-stone-900 text-[#faf8f4] shadow-[4px_4px_0px_#78716c] p-6 rounded-sm"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <SkullDeco className="w-16 h-16 text-stone-400 mb-5" />
          <p
            className="font-serif text-xl text-center leading-snug text-amber-100"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            ⚖ {item.verdict}
          </p>
          <div className="mt-6 h-px w-16 bg-stone-600" />
          <span className="mt-3 font-mono text-[10px] text-stone-500 uppercase tracking-widest">
            case closed
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── main section ───────────────────────────────────────── */
export default function VillainOrigin() {
  return (
    <>
      {/* Google Fonts — Playfair Display + Fira Mono */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Fira+Mono:wght@400;500&display=swap');
      `}</style>

      <section
        id="villain"
        className="lg:ml-[240px] py-10 bg-white border-t border-black/[0.06]"
      >
        {/* inner wrapper */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* ── header ── */}
          <div className="mb-14 relative">
            {/* decorative background text */}
            <span
              className="absolute -top-3 left-0 text-[clamp(60px,12vw,120px)] font-black text-stone-100 select-none pointer-events-none leading-none tracking-tighter"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              aria-hidden
            >
              VILLAIN
            </span>

            <div className="relative z-10 pt-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-stone-400 border-b border-stone-300 pb-0.5">
                Origin Story
              </span>

              <h2
                className="mt-3 font-serif text-[clamp(2rem,5vw,3.5rem)] font-black text-stone-900 leading-[1.05] max-w-xl"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Every villain has a
                <em className="not-italic text-red-800"> grievance.</em>
              </h2>

              <p className="mt-4 max-w-lg text-stone-500 text-sm leading-relaxed">
                These are mine. Petty? Perhaps. Justified? Absolutely. Click
                each card to deliver the sentence they deserve.
              </p>

              {/* ornament line */}
              <div className="mt-6 flex items-center gap-3">
                <div className="h-px w-10 bg-stone-900" />
                <SkullDeco className="w-6 h-6 text-stone-700" />
                <div className="h-px w-10 bg-stone-900" />
              </div>
            </div>
          </div>

          {/* ── cards grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {peeves.map((item, i) => (
              <PeeveCard key={item.id} item={item} index={i} />
            ))}
          </div>

          {/* ── footer note ── */}
          <div className="mt-14 flex items-start gap-3 border-l-2 border-stone-300 pl-4">
            <p className="font-mono text-[11px] text-stone-400 italic leading-relaxed">
              &ldquo;Not all villains wear capes. Some just have a strong sense
              of justice and a very long memory.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
