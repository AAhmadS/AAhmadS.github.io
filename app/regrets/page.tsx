import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { regrets } from '@/content/regrets';

export const metadata: Metadata = {
  title: 'Regrets',
  description:
    'Projects Amirahmad Shafiee regrets: LLaMA ClipViT, LLM evaluation, Persian-vs-English multimodal reasoning — what went wrong, what each taught, capabilities gained.',
  alternates: { canonical: 'https://aahmads.github.io/regrets/' },
};

export default function RegretsPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="// Regrets"
        title={<>Things I <span className="gradient-text">Regret</span></>}
        subtitle="Unfinished and mis-aimed projects I keep public on purpose: what I regret about each, the expertise hiding inside them, and the capabilities they left me — told as stories."
      />

      <div className="mx-auto max-w-[1160px] px-6">
        <div className="flex flex-col gap-5">
          {regrets.map((r) => (
            <Link key={r.slug} href={`/regrets/${r.slug}`} className="glass-card relative p-7 pl-9">
              <span
                aria-hidden
                className="absolute left-0 top-6 bottom-6 w-[3px] rounded"
                style={{ background: 'linear-gradient(135deg,#f59e0b,#fb7185)' }}
              />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="font-display text-lg font-bold leading-snug">{r.project}</h2>
                <span className="tag shrink-0">{r.period}</span>
              </div>
              <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {r.tagline}
              </p>
              <div className="mt-4 font-mono text-xs" style={{ color: 'var(--brand-start)' }}>
                Read the story →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
