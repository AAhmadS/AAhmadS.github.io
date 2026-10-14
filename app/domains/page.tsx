import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { domains } from '@/content/domains';

export const metadata: Metadata = {
  title: 'Domains of Interest',
  description:
    'Knowledge map by Amirahmad Shafiee: NLP, Conversational AI/Voice, RL, Vision-Language Models — studied papers, findings, borrowings, ideas.',
  alternates: { canonical: 'https://aahmads.github.io/domains/' },
};

export default function DomainsPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="// Domains of Interest"
        title={<>What I <span className="gradient-text">Study</span></>}
        subtitle="A living map of the domains I explore. Each domain holds what I've studied, and for each study: findings, notes, borrowings, and ideas — with public discussion on the ideas and notes."
      />

      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {domains.map((d) => (
            <Link key={d.slug} href={`/domains/${d.slug}`} className="glass-card flex flex-col p-7">
              <h2 className="font-display text-xl font-bold">{d.name}</h2>
              <p className="mt-1 font-mono text-xs" style={{ color: 'var(--brand-start)' }}>
                {d.tagline}
              </p>
              <p className="mt-3 flex-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {d.description}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-mono text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  {d.studied.length} studied
                </span>
                <span className="font-mono text-xs" style={{ color: 'var(--brand-start)' }}>
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
