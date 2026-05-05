import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://mehadihasan.netlify.app'),
  title: {
    default: 'Mehadi Hasan | Full Stack Developer',
    template: '%s | Mehadi Hasan',
  },
  description:
    'CSE Student & Full Stack Developer from Bangladesh. Building web apps with Next.js, React, Node.js, Supabase and more.',
  keywords: [
    'Mehadi Hasan',
    'Full Stack Developer',
    'CSE Student',
    'Next.js Developer',
    'React Developer',
    'Bangladesh Developer',
    'Web Developer Bangladesh',
  ],
  authors: [{ name: 'Mehadi Hasan', url: 'https://mehadihasan.netlify.app' }],
  creator: 'Mehadi Hasan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mehadihasan.netlify.app',
    title: 'Mehadi Hasan | Full Stack Developer',
    description: 'CSE Student & Full Stack Developer from Bangladesh.',
    siteName: 'Mehadi Hasan Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Mehadi Hasan Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mehadi Hasan | Full Stack Developer',
    description: 'CSE Student & Full Stack Developer from Bangladesh.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://mehadihasan.netlify.app' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
