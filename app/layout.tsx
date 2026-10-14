import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/lib/theme';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://aahmads.github.io'),
  title: {
    default: 'Amirahmad Shafiee — AI Researcher & Builder',
    template: '%s | Amirahmad Shafiee',
  },
  description:
    'Amirahmad Shafiee — AI Researcher & Builder, CS at Sharif University of Technology. NLP, Persian LLM/Voice, Vision-Language Models, RL. Papers (SDPERL, Lightning Network RL, Emo3D), Kolbeh real-estate AI platform, voice agents, open tools.',
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
    'Kolbeh',
  ],
  authors: [{ name: 'Amirahmad Shafiee', url: 'https://aahmads.github.io' }],
  creator: 'Amirahmad Shafiee',
  alternates: { canonical: 'https://aahmads.github.io' },
  openGraph: {
    type: 'website',
    url: 'https://aahmads.github.io',
    siteName: 'Amirahmad Shafiee',
    title: 'Amirahmad Shafiee — AI Researcher & Builder',
    description:
      'NLP, Persian voice/agents, VLM, RL. Papers, Kolbeh AI platform, audits, open tools.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amirahmad Shafiee — AI Researcher & Builder',
    description:
      'NLP, Persian voice/agents, VLM, RL. Papers, Kolbeh AI platform, audits, open tools.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧠</text></svg>',
  },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <Nav />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
