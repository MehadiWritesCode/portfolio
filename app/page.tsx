import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mehadi Hasan',
    url: 'https://mehadihasan.netlify.app',
    jobTitle: 'Full Stack Developer',
    description: 'CSE Student & Full Stack Developer from Bangladesh',
    knowsAbout: ['Next.js', 'React', 'Node.js', 'C', 'C++', 'Java', 'Python', 'PostgreSQL', 'Supabase'],
    sameAs: [
      'https://github.com/MehadiWritesCode',
      'https://linkedin.com/in/MehadiWritesCode',
    ],
  }

  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Sidebar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
