"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";

const roles = ["Full Stack Developer", "CSE Student", "UI Enthusiast", "Open Source Builder"];

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let i = 0, charIdx = 0, deleting = false;
    const tick = () => {
      const cur = roles[i % roles.length];
      if (roleRef.current)
        roleRef.current.textContent = deleting
          ? cur.substring(0, charIdx--)
          : cur.substring(0, charIdx++);
      if (!deleting && charIdx > cur.length) setTimeout(() => { deleting = true; }, 1800);
      else if (deleting && charIdx < 0) { deleting = false; i++; }
      setTimeout(tick, deleting ? 45 : 90);
    };
    tick();
  }, []);

  return (
    <section
      id="home"
      className="lg:ml-[240px] min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 lg:pt-0 bg-white"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Accent blob top-right */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-black/[0.025] blur-3xl pointer-events-none" />

      {/* Large ghosted number */}
      <span className="absolute right-8 bottom-10 font-display font-bold text-[200px] leading-none text-black/[0.025] select-none pointer-events-none hidden lg:block">
        01
      </span>

      <div className="max-w-5xl mx-auto px-8 lg:px-16 w-full py-16">
        <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-center">

          {/* ── Text ── */}
          <div>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 border border-black/10 rounded-full px-4 py-1.5 mb-10 opacity-0 animate-fadeUp delay-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono-custom text-[11px] text-black/40 tracking-[0.15em] uppercase">
                Available for opportunities
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-display font-semibold leading-[1.06] mb-7">
              <span className="block text-[clamp(2.2rem,5vw,4rem)] text-black/20 opacity-0 animate-fadeUp delay-1">
                Hello, I`m
              </span>
              <span className="block text-[clamp(2.8rem,6vw,5rem)] text-black opacity-0 animate-fadeUp delay-2">
                Mehadi Hasan
              </span>
              <span className="block text-[clamp(1.5rem,3vw,2.5rem)] text-black/30 opacity-0 animate-fadeUp delay-3 mt-1">
                <span ref={roleRef} className="text-black" />
                <span className="inline-block w-[2px] h-[0.85em] bg-black ml-1 align-middle animate-pulse" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-black/45 text-lg leading-relaxed max-w-lg mb-11 opacity-0 animate-fadeUp delay-4">
              CSE student from Dhaka, Bangladesh — building clean, fast, and
              user-focused web apps with a deep love for great design.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-14 opacity-0 animate-fadeUp delay-5">
        <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-black text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-black/80 transition-colors duration-200"
              >
                View Projects
                <ArrowUpRight size={15} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 border border-black/15 text-black px-7 py-3.5 rounded-full text-sm font-semibold hover:border-black hover:bg-black/[0.03] transition-all duration-200"
              >
                <Download size={14} />
                Resume
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 opacity-0 animate-fadeUp delay-6">
              {[
                { n: "2+", label: "Years exp." },
                { n: "20+", label: "Projects" },
                { n: "10+", label: "Clients" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-2xl text-black">{s.n}</p>
                  <p className="text-[12px] text-black/35 mt-0.5 tracking-wide uppercase font-mono-custom">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Photo Card ── */}
          <div className="relative hidden lg:flex justify-center items-center opacity-0 animate-fadeUp delay-3">
            {/* Spinning dashed ring */}
            <div className="absolute w-[350px] h-[350px] rounded-full border border-dashed border-black/10 animate-spin-slow" />

            {/* Photo frame */}
            <div className="relative w-[280px] h-[340px] rounded-3xl overflow-hidden border border-black/10 bg-black/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <Image
                src="/my_image.jpg"
                alt="Mehadi Hasan"
                fill
                sizes="280px"
                className="object-cover object-top"
                priority
              />

              {/* Bottom name strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/85 backdrop-blur-sm border-t border-black/[0.07] px-5 py-3">
                <p className="text-[13px] font-semibold text-black">Mehadi Hasan</p>
                <p className="text-[11px] text-black/40">Full-stack Developer · Dhaka 🇧🇩</p>
              </div>
            </div>

            {/* Floating tech chips */}
            <div className="absolute -top-2 right-2 bg-white border border-black/10 rounded-xl px-3.5 py-2 animate-float shadow-sm">
              <p className="text-[11px] font-semibold text-black">Next.js 15</p>
            </div>
            <div
              className="absolute bottom-14 -left-8 bg-white border border-black/10 rounded-xl px-3.5 py-2 animate-float shadow-sm"
              style={{ animationDelay: "1.5s" }}
            >
              <p className="text-[11px] font-semibold text-black">Supabase</p>
            </div>
            <div
              className="absolute top-1/2 -right-6 -translate-y-1/2 bg-black text-white rounded-xl px-3.5 py-2 animate-float"
              style={{ animationDelay: "0.8s" }}
            >
              <p className="text-[11px] font-semibold">TypeScript</p>
            </div>
            <div
              className="absolute -bottom-3 right-8 bg-white border border-black/10 rounded-xl px-3.5 py-2 animate-float shadow-sm"
              style={{ animationDelay: "2.2s" }}
            >
              <p className="text-[11px] font-semibold text-black">📍 Dhaka, BD</p>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-12 flex flex-col items-center gap-1.5 opacity-20">
        <span className="font-mono-custom text-[10px] uppercase tracking-[0.2em] text-black">scroll</span>
        <div className="w-px h-10 bg-black" />
      </div>
    </section>
  );
}
