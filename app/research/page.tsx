import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { papers } from '@/content/research';

export const metadata: Metadata = {
  title: 'Research & Publications',
  description:
    'Publications by Amirahmad Shafiee: SDPERL defect prediction with RL, Lightning Network attention RL, Emo3D 3D faces. Sharif University AI research.',
  alternates: { canonical: 'https://aahmads.github.io/research/' },
};

function PaperCard({ p }: { p: (typeof papers)[number] }) {
  return (
    <Link href={`/research/${p.slug}`} className="glass-card relative p-7 pl-9">
      <span
        aria-hidden
        className="absolute left-0 top-6 bottom-6 w-[3px] rounded"
        style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
      />
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h2 className="font-display text-lg font-bold leading-snug">{p.title}</h2>
        <div className="flex shrink-0 gap-2">
          <span className="tag">{p.year}</span>
          <span className="tag" style={{ background: 'rgba(245,158,11,.12)', color: 'var(--warm-amber)' }}>
            {p.meta}
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
        {p.summary}
      </p>
    </Link>
  );
}

export default function ResearchPage() {
  const published = papers.filter((p) => p.venue === 'arXiv');
  const ongoing = papers.filter((p) => p.venue !== 'arXiv');
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="// 02 — Research & Publications"
        title={<>Selected <span className="gradient-text">Publications</span></>}
        subtitle="Published papers plus honest in-progress work — labeled as such."
      />

      <div className="mx-auto max-w-[1160px] px-6">
        <h2 className="font-display text-2xl font-bold">Published</h2>
        <div className="mt-6 flex flex-col gap-5">
          {published.map((p) => (
            <PaperCard key={p.slug} p={p} />
          ))}
        </div>

        {ongoing.length > 0 && (
          <>
            <h2 className="mt-12 font-display text-2xl font-bold">In progress</h2>
            <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>
              Active studies, no preprint yet — listed for direction, not as claims.
            </p>
            <div className="mt-6 flex flex-col gap-5">
              {ongoing.map((p) => (
                <PaperCard key={p.slug} p={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
