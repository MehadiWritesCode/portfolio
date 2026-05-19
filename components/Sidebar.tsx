"use client";

// components/Sidebar.tsx

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  Briefcase,
  User,
  Cpu,
  Mail,
  Palette,
  Skull,
  Telescope,
} from "lucide-react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  LayoutGroup,
  type Variants,
} from "framer-motion";

const links = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Cpu },
  { label: "Projects", href: "#projects", icon: Briefcase },
  { label: "Hobbies", href: "#hobbies", icon: Palette },
  { label: "My Rabbit Holes", href: "#rabbit-holes", icon: Telescope },
  { label: "Am I Villain?", href: "#villain", icon: Skull },
  { label: "Contact", href: "#contact", icon: Mail },
];

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socials = [
  {
    icon: GithubIcon,
    href: "https://github.com/MehadiWritesCode",
    label: "GitHub",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/mehadi-hasan-4476b1392/",
    label: "LinkedIn",
  },
  { icon: XIcon, href: "https://x.com/Mehadi_Hasan68", label: "X / Twitter" },
];

// ─── Variants (typed properly) ────────────────────────────────────────
const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.32, ease: EASE_EXPO },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    transition: { duration: 0.22, ease: "easeIn" },
  },
};

const mobileLinkVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.06 + i * 0.05, duration: 0.35, ease: EASE_EXPO },
  }),
};

const socialVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.07, duration: 0.4, ease: EASE_EXPO },
  }),
};

// ─── Component ────────────────────────────────────────────────────────
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const label = links.find(
              (l) => l.href === `#${entry.target.id}`,
            )?.label;
            if (label) setActive(label);
          }
        });
      },
      { threshold: 0.35 },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const springTransition = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 380, damping: 30 };

  return (
    <>
      {/* ─── DESKTOP SIDEBAR ──────────────────────────────────────────── */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[240px] flex-col bg-white border-r border-black/[0.07] z-50">
        {/* Logo */}
        <div className="px-7 pt-9 pb-7 border-b border-black/[0.07]">
          <Link href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0 border border-black/10">
              <Image
                src="/my_image.jpg"
                alt="Mehadi Hasan"
                width={36}
                height={36}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-black leading-none tracking-tight">
                Mehadi Hasan
              </p>
              <p className="text-[11px] text-black/35 mt-0.5 tracking-widest uppercase">
                Portfolio
              </p>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-5 space-y-0.5 overflow-y-auto">
          <LayoutGroup id="desktop-nav">
            {links.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setActive(label)}
                className="relative flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-medium"
                style={{
                  color: active === label ? "#fff" : "rgba(0,0,0,0.75)",
                }}
              >
                {active === label && (
                  <motion.span
                    layoutId="desktop-active-pill"
                    className="absolute inset-0 rounded-xl bg-black"
                    style={{ zIndex: -1 }}
                    transition={springTransition}
                  />
                )}
                <Icon size={15} className="flex-shrink-0 relative z-10" />
                <span className="relative z-10">{label}</span>
              </Link>
            ))}
          </LayoutGroup>
        </nav>

        {/* Bottom */}
        <div className="px-7 py-6 border-t border-black/[0.07] space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] text-black/40 tracking-wider uppercase font-medium">
              Available
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            {socials.map(({ icon: Icon, href, label }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={socialVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-black/10 text-black/35 hover:text-black hover:border-black/25 hover:bg-black/[0.03] transition-all duration-200"
                >
                  <Icon size={15} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </aside>

      {/* ─── MOBILE TOP BAR ───────────────────────────────────────────── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/[0.07]">
        <div className="flex items-center justify-between px-5 py-3.5">
          <Link href="#home" className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0 border border-black/10">
              <Image
                src="/my_image.jpg"
                alt="Mehadi Hasan"
                width={36}
                height={36}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <span className="text-[13px] font-semibold text-black truncate">
              Mehadi Hasan
            </span>
          </Link>
          <motion.button
            onClick={() => setOpen(!open)}
            whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
            className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl border border-black/10 text-black/60 hover:text-black transition-colors ml-3"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.15 }}
              >
                {open ? <X size={17} /> : <Menu size={17} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* ─── MOBILE FULLSCREEN MENU ───────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden fixed inset-0 z-[60] bg-white flex flex-col"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[0.07]">
              <Link href="#home" className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MH</span>
                </div>
                <span className="text-[13px] font-semibold text-black">
                  Mehadi Hasan
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-xl border border-black/10 text-black/60 hover:text-black transition-colors"
              >
                <X size={17} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 px-5 pt-6 space-y-2">
              <LayoutGroup id="mobile-nav">
                {links.map(({ label, href, icon: Icon }, i) => (
                  <motion.div
                    key={label}
                    custom={i}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative"
                  >
                    <Link
                      href={href}
                      onClick={() => {
                        setActive(label);
                        setOpen(false);
                      }}
                      className="relative flex items-center gap-4 px-5 py-4 rounded-2xl font-medium text-base overflow-hidden"
                      style={{
                        color: active === label ? "#fff" : "#000",
                        border:
                          active === label
                            ? "none"
                            : "1px solid rgba(0,0,0,0.08)",
                      }}
                    >
                      {active === label && (
                        <motion.span
                          layoutId="mobile-active-pill"
                          className="absolute inset-0 bg-black"
                          style={{ zIndex: -1 }}
                          transition={springTransition}
                        />
                      )}
                      <Icon size={18} className="relative z-10 flex-shrink-0" />
                      <span className="relative z-10">{label}</span>
                    </Link>
                  </motion.div>
                ))}
              </LayoutGroup>
            </nav>

            {/* Socials */}
            <div className="px-5 py-8 border-t border-black/[0.07]">
              <p className="text-[11px] text-black/30 uppercase tracking-widest mb-4">
                Find me on
              </p>
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, href, label }, i) => (
                  <motion.div
                    key={label}
                    custom={i}
                    variants={socialVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 flex items-center justify-center rounded-xl border border-black/10 text-black/40 hover:text-black hover:border-black/30 transition-all"
                    >
                      <Icon size={17} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
