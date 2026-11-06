import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { Prose } from '@/components/Prose';
import { Ledger, type LedgerRow } from '@/components/Ledger';
import { SmartLink } from '@/components/SmartLink';
import { gaps, powers, ORG_URL } from '@/content/audits';

export const metadata: Metadata = {
  title: 'Becoming',
  description:
    'Becoming AAhmadS: personal audits — what I did not know, how I get powerful in each domain, and the path forward. Audits live at github.com/AAhmadS-Audit.',
  alternates: { canonical: 'https://aahmads.github.io/becoming/' },
};

const gapRows: LedgerRow[] = gaps.map((g) => ({
  id: g.period,
  when: g.period,
  title: `Did not know: ${g.gap}`,
  summary: `Plan: ${g.plan}`,
  extra: <p className="meta">{`Evidence: ${g.evidence}`}</p>,
}));

// Wide screens: a real table (Domain | Then | Now). Narrow screens: each row becomes a block, the domain as its
// title and "Then —" / "Now —" as inline labels, so nothing scrolls sideways. The labels are real text, hidden from md up.
const TABLE = 'block w-full md:table md:table-fixed';
const THEAD = 'sr-only md:not-sr-only md:table-header-group';
const TH_COL = 'border-b border-line pb-3 text-left font-ui text-[0.875rem] font-medium text-muted';
const TR = 'block border-t border-line py-5 first:border-t-0 md:table-row md:py-0';
const TH_ROW =
  'block pb-2 text-left font-serif text-[1.1875rem] font-semibold leading-snug text-fg md:table-cell md:py-5 md:pr-8 md:align-top';
const TD = 'block pb-1 md:table-cell md:py-5 md:align-top';
const CELL_LABEL = 'font-ui text-[0.875rem] font-medium text-muted md:hidden';

export default function BecomingPage() {
  return (
    <>
      <PageHeader
        title="Becoming AAhmadS"
        subtitle="What I did not know, how I decided to get powerful, and the path I am still on. The audits live in a dedicated org — this page is the map."
      />

      <Section
        id="gaps"
        title="What I did not know"
        lede="Each audit starts the same way: name the gap out loud, then plan against it."
        rule={false}
      >
        <Ledger as="ol" items={gapRows} />
      </Section>

      <Section
        id="powers"
        title="How I get powerful"
        lede="Then → now, per domain. The method never changes: audit, build, measure, ship."
      >
        <table className={TABLE} aria-labelledby="powers-heading">
          <thead className={THEAD}>
            <tr>
              <th scope="col" className={`${TH_COL} pr-8 md:w-[22%]`}>
                Domain
              </th>
              <th scope="col" className={`${TH_COL} pr-8 md:w-[34%]`}>
                Then
              </th>
              <th scope="col" className={TH_COL}>
                Now
              </th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {powers.map((p) => (
              <tr key={p.domain} className={TR}>
                <th scope="row" className={TH_ROW}>
                  {p.domain}
                </th>
                <td className={`${TD} text-muted md:pr-8`}>
                  <span className={CELL_LABEL}>Then — </span>
                  {p.then}
                </td>
                <td className={TD}>
                  <span className={CELL_LABEL}>Now — </span>
                  {p.now}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="Where this goes">
        <Prose>
          <p>
            The future AAhmadS this page is tracking toward: the TRL paper finished and published; Hambast
            operating as a real Fin-AI company; Chantex products compounding quietly; a public Persian
            evaluation benchmark that outlives all of it. Every audit in{' '}
            <SmartLink href={ORG_URL} className="link-accent">
              AAHmadS-Audit
            </SmartLink>{' '}
            is a dated checkpoint on that path — gaps named, plans written, evidence attached.
          </p>
        </Prose>
        <p className="mt-4">
          <SmartLink href={ORG_URL} className="link-accent inline-flex min-h-[44px] items-center font-ui font-medium">
            The audit org →
          </SmartLink>
        </p>
      </Section>
    </>
  );
}
