"use client";

const categories = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js",       level: 90 },
      { name: "React",         level: 88 },
      { name: "TypeScript",    level: 82 },
      { name: "Tailwind CSS",  level: 95 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js",    level: 78 },
      { name: "Express",    level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB",    level: 72 },
      { name: "Prisma",     level: 68 },
    ],
  },
  {
    name: "Design & Tools",
    skills: [
      { name: "Figma",      level: 85 },
      { name: "Git",        level: 88 },
      { name: "VS Code",    level: 95 },
      { name: "Vercel",     level: 80 },
      { name: "Linux",      level: 65 },
    ],
  },
];

const badges = [
  "Next.js","React","TypeScript","Tailwind","Node.js",
  "PostgreSQL","MongoDB","Figma","Git","Prisma",
  "Framer Motion","Vercel","Express","REST API","GraphQL",
];

export default function Skills() {
  return (
    <section id="skills" className="lg:ml-[240px] py-28 bg-[#F5F5F5] border-t border-black/[0.06]">
      <div className="max-w-5xl mx-auto px-8 lg:px-16">

        {/* Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono-custom text-[11px] text-black/30 uppercase tracking-[0.25em]">03 — Skills</span>
          <div className="flex-1 h-px bg-black/[0.07]" />
        </div>

        <div className="mb-12">
          <h2 className="font-display font-semibold text-[clamp(1.9rem,3.5vw,2.8rem)] text-black leading-[1.15]">
            My tech stack
          </h2>
          <p className="text-black/40 mt-2 text-base">Tools I reach for when building products.</p>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-14">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white border border-black/[0.08] rounded-2xl p-7 hover:border-black/20 transition-colors duration-200"
            >
              <h3 className="font-display font-semibold text-base text-black mb-6">{cat.name}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[13px] font-medium text-black/70">{skill.name}</span>
                      <span className="font-mono-custom text-[11px] text-black">{skill.level}%</span>
                    </div>
                    <div className="h-[3px] bg-black/[0.06] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-black rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee badge strip */}
        <div className="overflow-hidden border-y border-black/[0.07] py-4">
          <div className="flex animate-marquee gap-3 w-max">
            {[...badges, ...badges].map((b, i) => (
              <span
                key={i}
                className="flex-shrink-0  text-[11px] uppercase tracking-[0.15em] px-4 py-2 bg-white border border-black/[0.08] rounded-full text-black"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
