import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { papers, getPaper } from '@/content/research';

export function generateStaticParams() {
  return papers.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const paper = getPaper(params.slug);
  if (!paper) return { title: 'Paper not found' };
  return {
    title: paper.title,
    description: paper.summary,
    alternates: { canonical: `https://aahmads.github.io/research/${paper.slug}/` },
  };
}

export default function PaperDetailPage({ params }: { params: { slug: string } }) {
  const paper = getPaper(params.slug);
  if (!paper) notFound();

  return (
    <div className="pb-24">
      <div className="mx-auto max-w-[1160px] px-6 pt-32">
        <Link href="/research" className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
          ← All publications
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="tag">{paper.year}</span>
          <span className="tag" style={{ background: 'rgba(245,158,11,.12)', color: 'var(--warm-amber)' }}>
            {paper.meta}
          </span>
          {paper.venue && <span className="tag">{paper.venue}</span>}
        </div>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight md:text-5xl">
          {paper.title}
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_280px]">
          <div className="glass-card p-8">
            <h2 className="font-display text-xl font-bold">Abstract</h2>
            <p className="mt-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {paper.abstract}
            </p>
          </div>

          {paper.links.length > 0 && (
          <div className="glass-card h-fit p-6">
            <h3 className="font-display text-lg font-bold">Links</h3>
            <div className="mt-4 flex flex-col gap-3">
              {paper.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="rounded-lg border px-4 py-2.5 text-center font-mono text-sm transition-colors"
                  style={{ borderColor: 'var(--surface-border)', color: 'var(--text-secondary)' }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
