import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/lib/theme';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

// Self-hosted variable fonts (OFL, licences in app/fonts). Latin subset; Persian runs use a system face.
const serif = localFont({
  src: './fonts/source-serif-4-latin-wght-normal.woff2',
  weight: '200 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-serif',
  adjustFontFallback: 'Times New Roman',
});

const ui = localFont({
  src: './fonts/space-grotesk-latin-wght-normal.woff2',
  weight: '300 700',
  style: 'normal',
  display: 'swap',
  variable: '--font-ui',
  adjustFontFallback: 'Arial',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aahmads.github.io'),
  title: {
    default: 'Amirahmad Shafiee — AI Researcher & Builder',
    template: '%s | Amirahmad Shafiee',
  },
  description:
    'Amirahmad Shafiee — AI Researcher & Builder, computer science graduate of Sharif University of Technology. Multi-agent systems, RAG, voice agents, LLM evaluation. Papers (Lightning Network RL, Emo3D, SDPERL, From Illusion to Insight), Carinx, Hambast at Wisdom Era, open tools.',
  keywords: [
    'Amirahmad Shafiee',
    'Sharif University',
    'NLP',
    'Persian NLP',
    'Conversational AI',
    'Voice Agent',
    'Vision-Language Models',
    'Reinforcement Learning',
    'Lightning Network',
    'Software Defect Prediction',
    'Multi-agent systems',
    'RAG',
    'LLM evaluation',
  ],
  authors: [{ name: 'Amirahmad Shafiee', url: 'https://aahmads.github.io' }],
  creator: 'Amirahmad Shafiee',
  alternates: { canonical: 'https://aahmads.github.io' },
  openGraph: {
    type: 'website',
    url: 'https://aahmads.github.io',
    siteName: 'Amirahmad Shafiee',
    title: 'Amirahmad Shafiee — AI Researcher & Builder',
    description: 'NLP, Persian voice agents, VLM, RL. Papers, Carinx, Hambast at Wisdom Era, audits, open tools.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amirahmad Shafiee — AI Researcher & Builder',
    description: 'NLP, Persian voice agents, VLM, RL. Papers, Carinx, Hambast at Wisdom Era, audits, open tools.',
  },
  robots: { index: true, follow: true },
  // favicon: app/icon.svg (file convention)
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Amirahmad Shafiee',
  url: 'https://aahmads.github.io',
  jobTitle: 'AI Researcher & Builder',
  affiliation: { '@type': 'CollegeOrUniversity', name: 'Sharif University of Technology' },
  address: { '@type': 'PostalAddress', addressLocality: 'Tehran', addressCountry: 'IR' },
  sameAs: [
    'https://github.com/AAhmadS',
    'https://scholar.google.com/citations?user=bmO8gCYAAAAJ&hl=en',
    'https://www.linkedin.com/in/amirahmad-shafiee',
    'https://t.me/notamira',
  ],
};

// Runs before first paint: dark is the default, `light` is added only when the visitor chose it.
const themeScript = `try{var t=localStorage.getItem('theme');document.documentElement.classList.toggle('light',t==='light')}catch(e){}`;

// Without JavaScript the Menu button cannot work, so show the link list instead.
const noscriptCss =
  '@media (max-width:69.99rem){.site-menu[hidden]{display:block!important}.menu-btn{display:none!important}}';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${ui.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{noscriptCss}</style>
        </noscript>
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Nav />
          <main id="main" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
