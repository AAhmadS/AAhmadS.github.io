import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { projects } from '@/content/projects';
import type { Project } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Open-source and applied AI projects by Amirahmad Shafiee: NLP, RL, multimodal research implementations, Kolbeh AI platform, voice agents, tools.',
  alternates: { canonical: 'https://aahmads.github.io/projects/' },
};

const groups: { key: NonNullable<Project['kind']>; heading: string; blurb: string }[] = [
  {
    key: 'venture',
    heading: 'Ventures — what I do now',
    blurb: 'Products I build and run: the Kolbeh platform, applied-AI ventures, client-grade systems.',
  },
  {
    key: 'tool',
    heading: 'Tools — open and research-grade',
    blurb: 'Agents, trackers, and labs I use daily and share.',
  },
  {
    key: 'research',
    heading: 'Research implementations — what I have done',
    blurb: 'Code behind papers and coursework; archived but documented.',
  },
];

export default function ProjectsPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="// 03 — Ventures & Tools"
        title={<>What I <span className="gradient-text">Build</span></>}
        subtitle="Ventures I run now, tools I share, and research code from before."
      />

      <div className="mx-auto max-w-[1160px] px-6">
        {groups.map((g) => {
          const items = projects.filter((p) => p.kind === g.key);
          if (items.length === 0) return null;
          return (
            <section key={g.key} className="mt-12 first:mt-0">
              <h2 className="font-display text-2xl font-bold">{g.heading}</h2>
              <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>{g.blurb}</p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {items.map((p) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`} className="glass-card flex flex-col p-7">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-lg font-bold">{p.title}</h3>
                      <span className="tag shrink-0">{p.badge}</span>
                    </div>
                    <p className="mt-3 flex-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {p.summary}
                    </p>
                    <div className="mt-5 flex items-center justify-between font-mono text-xs">
                      {p.status && (
                        <span style={{ color: 'var(--text-tertiary)' }}>{p.status}{p.year ? ` · ${p.year}` : ''}</span>
                      )}
                      <span style={{ color: 'var(--brand-start)' }}>View details →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
