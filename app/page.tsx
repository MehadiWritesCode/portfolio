// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Hobbies from "@/components/Hobbies";
import SectionWrapper from "@/ui/SectionWrapper";
import VillainOrigin from "@/components/VillainOrigin";
import RabbitHoles from "@/components/RabbitHoles";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mehadi Hasan",
    url: "https://mehadihasan.netlify.app",
    jobTitle: "Full Stack Developer",
    description: "CSE Student & Full Stack Developer from Bangladesh",
    knowsAbout: [
      "Next.js",
      "React",
      "Node.js",
      "C",
      "C++",
      "Java",
      "Python",
      "PostgreSQL",
      "Supabase",
    ],
    sameAs: [
      "https://github.com/MehadiWritesCode",
      "https://linkedin.com/in/MehadiWritesCode",
    ],
  };

  return (
    <main className="bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Sidebar />

      <Hero />

      <SectionWrapper id="about">
        <About />
      </SectionWrapper>

      <SectionWrapper id="skills">
        <Skills />
      </SectionWrapper>

      <SectionWrapper id="projects">
        <Projects />
      </SectionWrapper>

      <SectionWrapper id="hobbies">
        <Hobbies />
      </SectionWrapper>

      <SectionWrapper id="rabbit-holes">
        <RabbitHoles />
      </SectionWrapper>

      <SectionWrapper id="villain">
        <VillainOrigin />
      </SectionWrapper>

      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>

      <Footer />
    </main>
  );
}
