import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Ledger, type LedgerRow } from '@/components/Ledger';
import { domains } from '@/content/domains';

export const metadata: Metadata = {
  title: 'Domains of Interest',
  description:
    'Knowledge map by Amirahmad Shafiee: NLP, Conversational AI/Voice, RL, Vision-Language Models — studied papers, findings, borrowings, ideas.',
  alternates: { canonical: 'https://aahmads.github.io/domains/' },
};

// The count is derived from the data, never typed.
const rows: LedgerRow[] = domains.map((d) => ({
  id: d.slug,
  title: d.name,
  titleHref: `/domains/${d.slug}/`,
  kicker: d.tagline,
  summary: d.description,
  extra: <p className="meta">{d.studied.length} studied</p>,
}));

export default function DomainsPage() {
  return (
    <>
      <PageHeader
        title="What I Study"
        subtitle="A living map of the domains I explore. Each domain holds what I've studied, and for each study: findings, notes, borrowings, and ideas — with public discussion on the ideas and notes."
      />

      <div className="container-site">
        <div className="section-body pt-0">
          {/* The only heading above the list is the h1, so the row titles are paragraphs (no skipped heading level). */}
          <Ledger as="ul" titleAs="p" aria-label="Domains" items={rows} />
        </div>
      </div>
    </>
  );
}
