import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Regrets',
  description:
    'Things Amirahmad Shafiee regrets — unfinished and mis-aimed projects, kept public on purpose.',
  alternates: { canonical: 'https://aahmads.github.io/regrets/' },
};

export default function RegretsPage() {
  return (
    <>
      <PageHeader
        title="Things I Regret"
        subtitle="Unfinished and mis-aimed projects I keep public on purpose: what I regret about each, the expertise hiding inside them, and the capabilities they left me — told as stories."
      />

      <div className="container-site">
        <div className="section-body pt-0">
          <p className="max-w-measure text-lg leading-relaxed text-muted">Nothing here yet.</p>
        </div>
      </div>
    </>
  );
}
