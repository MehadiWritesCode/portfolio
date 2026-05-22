"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { type Tab, TABS, ACCENT_COLORS, projects } from "../data/project.data";
import { getTagColor, StarRating, GithubIcon } from "../utils/project.utils";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("favs");

  const filtered = projects
    .filter((p) => p.cats.includes(activeTab))
    .sort((a, b) => {
      if (activeTab === "others") return (b.stars ?? 0) - (a.stars ?? 0);
      return 0;
    });

  return (
    <section
      id="projects"
      className="lg:ml-[240px] py-10 bg-white border-t border-black/[0.06]"
    >
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        {/* Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono-custom text-[11px] text-black/30 uppercase tracking-[0.25em]">
            04 — Projects
          </span>
          <div className="flex-1 h-px bg-black/[0.07]" />
        </div>

        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display font-semibold text-[clamp(1.9rem,3.5vw,2.8rem)] text-black leading-[1.15]">
              Small but mine.
            </h2>
            <p className="text-black/35 mt-2 text-[13px] leading-relaxed max-w-sm">
              Not a lot — but every line is something I actually cared about
              building.
            </p>
          </div>
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

        {/* Tab Bar */}
        <div className="flex gap-1 mb-10 bg-black/[0.04] w-fit p-1 rounded-xl border border-black/[0.06]">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-white text-black shadow-sm border border-black/[0.08]"
                  : "text-black/40 hover:text-black/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-black/30 text-sm py-16 text-center">
            No projects in this category yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((p, i) => (
              <div
                key={p.num}
                className="group relative bg-black/[0.02] border border-black/[0.07] rounded-2xl p-8 hover:border-black/[0.16] hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300 overflow-hidden"
              >
                {/* Colored left accent on hover */}
                <div
                  className="absolute left-0 top-6 bottom-6 w-[2.5px] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-full"
                  style={{
                    background: ACCENT_COLORS[i % ACCENT_COLORS.length],
                  }}
                />

                {/* Top row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-custom text-[11px] text-black/20 uppercase tracking-[0.2em]">
                      {p.num}
                    </span>
                    {activeTab === "others" && p.stars !== undefined && (
                      <StarRating count={p.stars} />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {p.inProgress && (
                      <span className="text-[11px] font-medium text-amber-600 border border-amber-200 bg-amber-50 px-2.5 py-0.5 rounded-full">
                        In Progress
                      </span>
                    )}
                    {p.featured && !p.inProgress && activeTab !== "others" && (
                      <span className="text-[11px] font-medium text-white border border-black/10 px-2.5 py-0.5 rounded-full bg-black">
                        Featured
                      </span>
                    )}
                    <Link
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 flex items-center justify-center rounded-lg border border-black/[0.08] text-black/30 hover:text-black hover:border-black/20 transition-all"
                    >
                      <GithubIcon size={13} />
                    </Link>
                    {p.live && (
                      <Link
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 flex items-center justify-center rounded-lg border border-black/[0.08] text-black/30 hover:text-black hover:border-black/20 transition-all"
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
                      className={`text-[11px] uppercase tracking-wider px-3 py-1 border rounded-full ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
