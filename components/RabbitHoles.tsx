"use client";

// components/RabbitHoles.tsx

import Link from "next/link";
import { ArrowUpRight, Clock, Star } from "lucide-react";

export type RabbitHole = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  readTime: string;
  date: string;
  coverEmoji: string;
  averageRating?: number;
  reviewCount?: number;
};

export const rabbitHoles: RabbitHole[] = [
  {
    slug: "black-holes",
    title: "Black Holes",
    subtitle:
      "From stellar collapse to Hawking radiation — everything I've fallen into studying the universe's most extreme objects.",
    tags: ["Astrophysics", "Relativity", "Quantum"],
    readTime: "12 min",
    date: "May 2026",
    coverEmoji: "🕳️",
    averageRating: 0,
    reviewCount: 0,
  },
  // Add more rabbit holes here in the future
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={12}
          className={
            i <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "text-black/20"
          }
        />
      ))}
    </div>
  );
}

export default function RabbitHoles() {
  return (
    <section className="py-10 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-black/35 mb-4">
          <span className="w-5 h-px bg-black/20" />
          Deep dives
        </div>
        <h2 className="text-3xl font-semibold text-black tracking-tight leading-tight">
          My Rabbit Holes
        </h2>
        <p className="mt-3 text-black/50 text-[15px] leading-relaxed max-w-lg">
          Topics I couldn&apos;t stop reading about. Documented so you can fall
          in too.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-5">
        {rabbitHoles.map((hole) => (
          <Link
            key={hole.slug}
            href={`/rabbit-holes/${hole.slug}`}
            className="group relative flex items-start gap-6 p-6 rounded-2xl border border-black/[0.08] bg-white hover:border-black/20 hover:shadow-sm transition-all duration-200"
          >
            {/* Emoji cover */}
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-black/[0.04] flex items-center justify-center text-2xl border border-black/[0.06] group-hover:bg-black/[0.07] transition-colors">
              {hole.coverEmoji}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[15px] font-semibold text-black leading-snug group-hover:text-black/80 transition-colors">
                    {hole.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-black/50 leading-relaxed line-clamp-2">
                    {hole.subtitle}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="flex-shrink-0 text-black/20 group-hover:text-black/60 transition-colors mt-0.5"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mt-3">
                {hole.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/[0.05] text-black/50 border border-black/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1.5 text-[11px] text-black/35">
                  <Clock size={11} />
                  {hole.readTime} read
                </div>
                <span className="text-black/15">·</span>
                <span className="text-[11px] text-black/35">{hole.date}</span>
                {hole.reviewCount !== undefined && hole.reviewCount > 0 && (
                  <>
                    <span className="text-black/15">·</span>
                    <div className="flex items-center gap-1.5">
                      <StarRating rating={hole.averageRating ?? 0} />
                      <span className="text-[11px] text-black/35">
                        ({hole.reviewCount})
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Coming soon hint */}
      <div className="mt-6 flex items-center gap-3 px-6 py-4 rounded-2xl border border-dashed border-black/[0.1]">
        <span className="text-lg">🔭</span>
        <p className="text-[13px] text-black/35">
          More rabbit holes coming soon — currently falling into one.
        </p>
      </div>
    </section>
  );
}
