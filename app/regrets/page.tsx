import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Ledger, type LedgerRow } from '@/components/Ledger';
import { regrets } from '@/content/regrets';

export const metadata: Metadata = {
  title: 'Regrets',
  description:
    'Projects Amirahmad Shafiee regrets: LLaMA ClipViT, LLM evaluation, Persian-vs-English multimodal reasoning — what went wrong, what each taught, capabilities gained.',
  alternates: { canonical: 'https://aahmads.github.io/regrets/' },
};

const rows: LedgerRow[] = regrets.map((r) => ({
  id: r.slug,
  when: r.period,
  title: r.project,
  titleHref: `/regrets/${r.slug}/`,
  summary: r.tagline,
}));

export default function RegretsPage() {
  return (
    <>
      <PageHeader
        title="Things I Regret"
        subtitle="Unfinished and mis-aimed projects I keep public on purpose: what I regret about each, the expertise hiding inside them, and the capabilities they left me — told as stories."
      />

      <div className="container-site">
        <div className="section-body pt-0">
          {/* The only heading above the list is the h1, so the row titles are paragraphs (no skipped heading level). */}
          <Ledger as="ul" titleAs="p" aria-label="Regrets" items={rows} />
        </div>
      </div>
    </>
  );
}
