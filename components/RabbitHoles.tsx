"use client";

// components/RabbitHoles.tsx

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/project.data.viz";

export default function RabbitHoles() {
  return (
    <section className=" lg:ml-[240px] py-10 px-3 bg-white border-t border-black/[0.06]">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-black/35 mb-4">
          <span className="w-5 h-px bg-black/20" />
          Interactive simulations
        </div>
        <h2 className="text-3xl font-semibold text-black tracking-tight leading-tight">
          My Projects
        </h2>
        <p className="mt-3 text-black/50 text-[15px] leading-relaxed max-w-lg">
          Physics simulations and space visualizations built with WebGL &amp;
          Three.js.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.map((project) => (
          <Link
            key={project.id}
            href={`https://space-viz.netlify.app/viz/${project.id}`}
            className="group flex flex-col rounded-2xl border border-black/[0.08] bg-white hover:border-black/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
          >
            {/* Dark top strip */}
            <div className="flex items-center justify-between px-4 py-3 bg-black">
              <div className="flex items-center gap-2.5">
                <span className="text-sm text-white/75 leading-none">
                  {project.icon}
                </span>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-white/50">
                  {project.badge}
                </span>
              </div>
              <ArrowUpRight
                size={13}
                className="text-white group-hover:text-white/70 transition-colors"
              />
            </div>

            {/* Body */}
            <div className="flex flex-col px-4 py-4 gap-3">
              {/* Title + subtitle */}
              <div>
                <h3 className="text-[14px] font-semibold text-black leading-snug">
                  {project.title}
                </h3>
                <p className="mt-0.5 text-[12px] text-black/40 leading-snug">
                  {project.subtitle}
                </p>
              </div>

              {/* Description — hard clamp to 2 lines */}
              <p className="text-[12px] text-black/50 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Divider */}
              <div className="border-t border-black/[0.06]" />

              {/* Stats — fixed 2 rows × 2 cols */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {project.details.slice(0, 4).map((d) => (
                  <div key={d.label} className="min-w-0">
                    <p className="text-[9.5px] uppercase tracking-wider text-black/30 font-medium mb-0.5">
                      {d.label}
                    </p>
                    <p className="text-[12px] font-semibold text-black/80 leading-tight truncate">
                      {d.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer hint */}
      <div className="mt-6 flex items-center gap-3 px-5 py-4 rounded-2xl border border-dashed border-black/[0.08]">
        <span className="text-base">🔭</span>
        <p className="text-[13px] text-black/35">
          More simulations coming soon — currently building one.
        </p>
      </div>
    </section>
  );
}
