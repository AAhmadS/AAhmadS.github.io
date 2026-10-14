import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { chantexProducts } from '@/content/chantex';

export const metadata: Metadata = {
  title: 'Chantex',
  description: 'Chantex — Amirahmad Shafiee’s private company. Products: Interval, Trailmark, STEADY.',
  alternates: { canonical: 'https://aahmads.github.io/chantex/' },
};

export default function ChantexPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="// chantex — private"
        title={<>Chan<span className="gradient-text">tex</span></>}
        subtitle="My private company. Three products live below. Methods undisclosed."
      />

      <div className="mx-auto max-w-[1160px] px-6">
        <div className="glass-card p-8">
          <p className="max-w-3xl font-mono text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {"// Chantex builds private software. What it makes:"}
          </p>
          <div className="mt-8 flex flex-col gap-5">
            {chantexProducts.map((p) => (
              <div
                key={p.name}
                className="flex flex-wrap items-baseline justify-between gap-3 rounded-xl border p-6"
                style={{ borderColor: 'var(--surface-border)', background: 'var(--surface)' }}
              >
                <div>
                  <h2 className="font-display text-xl font-bold">
                    {p.name} <span className="font-mono text-xs font-normal" style={{ color: 'var(--text-tertiary)' }}>· {p.codename}</span>
                  </h2>
                  <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{p.line}</p>
                </div>
                <span className="tag shrink-0">Private</span>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl font-mono text-sm leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
            {"// No repos. No demos. No roadmaps published."}
            <br />
            {"// Inquiries: shafieeamirahmadii@gmail.com"}
          </p>
        </div>
      </div>
    </div>
  );
}
