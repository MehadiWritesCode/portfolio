"use client";

import { Code2, Palette, Coffee, Gamepad2, Music, BookOpen } from "lucide-react";

const hobbies = [
  { icon: Code2,     label: "Open Source" },
  { icon: Palette,   label: "UI Design" },
  { icon: Coffee,    label: "Coffee" },
  { icon: Gamepad2,  label: "Gaming" },
  { icon: Music,     label: "Music" },
  { icon: BookOpen,  label: "Reading" },
];

export default function About() {
  return (
    <section id="about" className="lg:ml-[240px] py-28 bg-white border-t border-black/[0.06]">
      <div className="max-w-5xl mx-auto px-8 lg:px-16">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono-custom text-[11px] text-black/30 uppercase tracking-[0.25em]">02 — About</span>
          <div className="flex-1 h-px bg-black/[0.07]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <div>
            <h2 className="font-display font-semibold text-[clamp(1.9rem,3.5vw,2.8rem)] text-black leading-[1.15] mb-8">
              A developer who{" "}
              <span className="italic text-black/30">loves</span>{" "}
              solving real problems.
            </h2>

            <div className="space-y-4 text-black/50 text-[1.05rem] leading-relaxed">
              <p>
                I`m a full-stack developer based in Dhaka, Bangladesh — passionate
                about building products that feel as good as they look.
              </p>
              <p>
                With a background in both design and development, I approach every
                project holistically — thinking about UX, performance, and
                scalability all at once.
              </p>
              <p>
                When I`m not shipping code, I`m exploring design trends,
                contributing to open-source, or brewing the perfect cup of coffee.
              </p>
            </div>

            {/* Status card */}
            <div className="mt-9 flex items-start gap-4 p-5 border border-black/[0.08] rounded-2xl bg-black/[0.015]">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-black">Studying Computer Science</p>
                <p className="text-sm text-black/40 mt-0.5">Open to freelance & internship opportunities</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="font-mono-custom text-[11px] text-black/30 uppercase tracking-[0.2em] mb-5">
              Things I enjoy
            </p>
            <div className="grid grid-cols-3 gap-2.5">
              {hobbies.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group flex flex-col items-center gap-2.5 py-5 px-3 bg-white border border-black/[0.08] rounded-2xl hover:border-black hover:bg-black hover:shadow-none transition-all duration-250 cursor-default"
                >
                  <Icon
                    size={17}
                    className="text-black/30 group-hover:text-white transition-colors"
                  />
                  <span className="text-[12px] font-medium text-black/50 group-hover:text-white transition-colors">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-8 pl-4 border-l-2 border-black/15">
              <p className="text-black/40 italic text-sm leading-relaxed">
                Good design is as little design as possible.
              </p>
              <p className="text-black/25 text-[11px] font-mono-custom mt-1.5 uppercase tracking-wider">
                — Dieter Rams
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
