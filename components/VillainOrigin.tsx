"use client";

// components/VillainOrigin.tsx

import { motion, type MotionProps } from "framer-motion";

/* ── Icons ──────────────────────────────────────────────────────────────── */
const IconTrash = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M3 5h14M8 5V3h4v2M6 5l1 11h6l1-11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconScale = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 3v14M4 17h12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4 7L2 11h4L4 7zM16 7l-2 4h4l-2-4z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const IconFist = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect
      x="5"
      y="8"
      width="10"
      height="7"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M7 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M5 11H3.5a1 1 0 0 0 0 2H5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const IconSkull = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 3a6 6 0 0 0-6 6c0 2 .9 3.7 2.3 4.8V16h7v-2.2A6 6 0 0 0 10 3z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 16v1.5h5V16"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="8" cy="10" r="1" fill="currentColor" />
    <circle cx="12" cy="10" r="1" fill="currentColor" />
  </svg>
);

const IconWarning = () => (
  <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 3L2 17h16L10 3z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M10 9v4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="10" cy="15" r="0.8" fill="currentColor" />
  </svg>
);

/* ── Data ───────────────────────────────────────────────────────────────── */
type PeeveItem = {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  desc: string;
  verdict: string;
  tag: string;
};

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

/* ── Animation helper ───────────────────────────────────────────────────── */
const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.5, ease: "easeOut", delay: delay / 1000 },
});

/* ── Card ───────────────────────────────────────────────────────────────── */
function PeeveCard({ item, delay }: { item: PeeveItem; delay: number }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className="group bg-white border border-black/[0.08] rounded-2xl p-7 flex flex-col gap-5 hover:border-black/25 hover:shadow-sm transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl border border-black/[0.08] flex items-center justify-center text-black/50 group-hover:text-black group-hover:border-black/25 transition-all duration-200">
          {item.icon}
        </div>
        <div>
          <h3 className="text-[14px] font-semibold text-black leading-none">
            {item.title}
          </h3>
          <span className="text-[10px] text-black/40 uppercase tracking-[0.18em] font-medium mt-1 block">
            {item.tag}
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-[11px] text-black/55 italic font-mono -mt-2">
        {item.subtitle}
      </p>

      {/* Divider */}
      <div className="h-px bg-black/[0.06] group-hover:bg-black/[0.12] transition-colors duration-300" />

      {/* Description */}
      <p className="text-[13px] text-black/70 leading-relaxed group-hover:text-black/85 transition-colors duration-200">
        {item.desc}
      </p>

      {/* Verdict */}
      <div className="flex items-start gap-2 bg-black/[0.06] rounded-xl px-4 py-3 group-hover:bg-black/[0.10] transition-colors duration-200">
        <span className="text-black/50 mt-0.5 flex-shrink-0">
          <IconWarning />
        </span>
        <p className="text-[11.5px] text-black/70 italic leading-snug">
          {item.verdict}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Section ────────────────────────────────────────────────────────────── */
export default function VillainOrigin() {
  return (
    <section
      id="villain"
      className="lg:ml-[240px] py-10 bg-white border-t border-black/[0.06]"
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16">
        {/* Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[11px] text-black/30 uppercase tracking-[0.25em]">
            06 — Origin Story
          </span>
          <div className="flex-1 h-px bg-black/[0.07]" />
        </div>

        {/* Heading */}
        <motion.div {...fadeUp(0)} className="mb-4">
          <h2 className="font-semibold text-[clamp(1.9rem,3.5vw,2.8rem)] text-black leading-[1.15]">
            My villain origin story
          </h2>
          <p className="text-black/65 mt-3 text-base max-w-xl leading-relaxed">
            Every great antagonist has a reason. These are mine — meticulously
            observed, completely true, and mildly threatening. I did not choose
            chaos. Chaos chose me, one infuriating person at a time.
          </p>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          {...fadeUp(100)}
          className="text-[11px] text-black/45 italic font-mono mb-12"
        >
          * No actual villainous acts were committed. Probably.
        </motion.p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {peeves.map((item, i) => (
            <PeeveCard key={item.id} item={item} delay={200 + i * 100} />
          ))}
        </div>

        {/* Closing strip */}
        <motion.div
          {...fadeUp(350)}
          className="mt-12 border border-black/[0.07] rounded-2xl px-7 py-5 flex items-start gap-4"
        >
          <div className="w-7 h-7 rounded-lg border border-black/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5 text-black/40">
            <IconSkull />
          </div>
          <p className="text-[13px] text-black/70 leading-relaxed italic">
            I didn&apos;t choose the dark side. The dark side found me — on a
            littered road, in a rigged classroom, watching an adult lose an
            argument to a child and choosing the wrong response. I just took
            notes. Very detailed notes. You&apos;ve been warned.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
