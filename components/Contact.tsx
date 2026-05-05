"use client";

import { Mail, Send, MapPin } from "lucide-react";
import { useState } from "react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socials = [
  {
    icon: GithubIcon,
    label: "GitHub",
    handle: "@MehadiWritesCode",
    href: "https://github.com/MehadiWritesCode",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    handle: "Mehadi Hasan",
    href: "https://www.linkedin.com/in/mehadi-hasan-4476b1392/",
  },
  {
    icon: XIcon,
    label: "Twitter / X",
    handle: "@MehadiWritesCode",
    href: "https://x.com/Mehadi_Hasan68",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("https://formspree.io/f/xnjwdlrq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
    setStatus("done");
    setName("");
    setEmail("");
    setMessage("");
  } else {
    setStatus("error");
  }
  }
  return (
    <section
      id="contact"
      className="lg:ml-[240px] py-28 bg-white border-t border-black/[0.06]"
    >
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono-custom text-[11px] text-black/30 uppercase tracking-[0.25em]">
            05 — Contact
          </span>
          <div className="flex-1 h-px bg-black/[0.07]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <h2 className="font-display font-semibold text-[clamp(1.9rem,3.5vw,2.8rem)] text-black leading-[1.15] mb-6">
              Let`s build{" "}
              <span className="italic text-black/30">something</span>
              <br />
              great together.
            </h2>
            <p className="text-black/45 text-[1.05rem] leading-relaxed mb-10">
              Whether you have a project in mind, want to collaborate, or just
              want to say hi — my inbox is always open.
            </p>

            <a
              href="mailto:mehadi.hasan.engr@gmail.com"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-medium text-base hover:bg-black/80 transition-colors duration-300 group mb-8"
            >
              <Mail size={18} />
              mehadi.hasan.engr@gmail.com
              <Send
                size={14}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
              />
            </a>

            <div className="flex items-center gap-2 text-black/35 text-sm mb-10">
              <MapPin size={13} />
              <span>Dhaka, Bangladesh · UTC+6</span>
            </div>

            {/* Social links */}
            <div className="space-y-2.5">
              {socials.map(({ icon: Icon, label, handle, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-black/[0.08] hover:border-black hover:bg-black hover:shadow-none transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-xl bg-black/[0.04] group-hover:bg-white/10 flex items-center justify-center transition-colors flex-shrink-0">
                    <Icon size={15} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-black group-hover:text-white transition-colors">
                      {label}
                    </p>
                    <p className="text-[12px] text-black/35 group-hover:text-white/50 transition-colors font-mono-custom">
                      {handle}
                    </p>
                  </div>
                  <span className="ml-auto text-black/20 group-hover:text-white/50 text-lg transition-colors">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white border border-black/[0.08] rounded-2xl p-8 hover:border-black/20 transition-colors duration-200">
            <h3 className="font-display font-semibold text-xl text-black mb-1">
              Send a message
            </h3>
            <p className="text-black/35 text-sm mb-7">
              I typically reply within 24 hours.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block font-mono-custom text-[11px] text-black/30 uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/[0.02] border border-black/[0.08] rounded-xl px-4 py-3 text-black text-sm placeholder:text-black/20 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono-custom text-[11px] text-black/30 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-black/[0.02] border border-black/[0.08] rounded-xl px-4 py-3 text-black text-sm placeholder:text-black/20 focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono-custom text-[11px] text-black/30 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className="w-full bg-black/[0.02] border border-black/[0.08] rounded-xl px-4 py-3 text-black text-sm placeholder:text-black/20 focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="w-full bg-black text-white py-3.5 rounded-xl font-semibold hover:bg-black/80 transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={14} />
              </button>
              {status === "done" && (
  <p className="text-black text-sm text-center border border-black/10 rounded-xl py-3">
    ✓ Message sent! I`ll reply soon.
  </p>
)}
{status === "error" && (
  <p className="text-black text-sm text-center border border-black/10 rounded-xl py-3">
    ✗ Something went wrong. Try again.
  </p>
)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
