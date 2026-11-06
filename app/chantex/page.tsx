import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Status } from '@/components/Status';
import { chantexProducts } from '@/content/chantex';

export const metadata: Metadata = {
  title: 'Chantex',
  description: 'Chantex — Amirahmad Shafiee’s private company. Products: Interval, Trailmark, STEADY.',
  alternates: { canonical: 'https://aahmads.github.io/chantex/' },
};

// main | aside: the Ledger's two columns without a year column. Written out here (not <Ledger>) so each product
// name stays an h2 under the page's h1, exactly as it was.
const COLS = { '--ledger-cols': 'minmax(0, 1fr) auto' } as CSSProperties;

export default function ChantexPage() {
  return (
    <>
      <PageHeader
        eyebrow="// chantex — private"
        title="Chantex"
        subtitle="My private company. Three products live below. Methods undisclosed."
      />

      <div className="container-site">
        <div className="section-body pt-0">
          <p className="max-w-measure font-mono text-[0.9375rem] leading-relaxed text-muted">
            {"// Chantex builds private software. What it makes:"}
          </p>

          <ul role="list" className="ledger mt-6 border-t border-line" style={COLS}>
            {chantexProducts.map((p) => (
              <li key={p.name} className="ledger-row">
                <div className="ledger-main">
                  <h2 className="ledger-title text-2xl leading-tight">
                    {p.name} <span className="meta font-normal">· {p.codename}</span>
                  </h2>
                  <p className="ledger-summary">{p.line}</p>
                </div>
                <div className="ledger-aside md:pt-1.5">
                  <Status tone="neutral" label="Private" />
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-measure font-mono text-[0.875rem] leading-relaxed text-faint">
            {"// No repos. No demos. No roadmaps published."}
            <br />
            {"// Inquiries: shafieeamirahmadii@gmail.com"}
          </p>
        </div>
      </div>
    </>
  );
}
