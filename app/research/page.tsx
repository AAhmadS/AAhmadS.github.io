import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { Ledger, type LedgerRow } from '@/components/Ledger';
import { Rich } from '@/components/Rich';
import type { StatusTone } from '@/components/Status';
import { papers } from '@/content/research';
import type { Paper } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Research & Publications',
  description:
    'Publications by Amirahmad Shafiee: SDPERL defect prediction with RL, Lightning Network attention RL, Emo3D 3D faces. Sharif University AI research.',
  alternates: { canonical: 'https://aahmads.github.io/research/' },
};

type Group = NonNullable<Paper['group']>;

// The shape of the status marker follows the paper's group; the section heading already names the group.
const TONE: Record<Group, StatusTone> = {
  published: 'published',
  'under-review': 'review',
  ongoing: 'ongoing',
  unfinished: 'unfinished',
};

const groups: { key: Group; heading: string; blurb: string }[] = [
  { key: 'published', heading: 'Published', blurb: 'Peer-reviewed papers.' },
  { key: 'under-review', heading: 'Under review', blurb: 'Preprints submitted and under review.' },
  { key: 'ongoing', heading: 'Ongoing', blurb: 'The paper in active progress.' },
  { key: 'unfinished', heading: 'Unfinished', blurb: 'Honest loose ends — real work, no paper. Listed for direction, not as claims.' },
];

const countByGroup = (group: Group) => papers.filter((p) => p.group === group).length;

function toRow(p: Paper): LedgerRow {
  // For ongoing and unfinished papers the venue string only repeats the status, so it is left out of the row.
  const showVenue = p.group === 'published' || p.group === 'under-review';
  return {
    id: p.slug,
    when: p.year,
    title: p.title,
    titleHref: `/research/${p.slug}/`,
    kicker: showVenue ? p.venue : undefined,
    summary: <Rich text={p.summary} />,
    status: p.group ? { tone: TONE[p.group], label: p.meta } : undefined,
    links: p.links,
  };
}

export default function ResearchPage() {
  const shown = groups
    .map((g) => ({ ...g, items: papers.filter((p) => p.group === g.key) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <PageHeader
        title="Selected Publications"
        subtitle={`${countByGroup('published')} published, ${countByGroup('under-review')} under review, ${countByGroup('ongoing')} ongoing, ${countByGroup('unfinished')} unfinished — labeled exactly as they are.`}
      />
      {shown.map((g, i) => (
        <Section key={g.key} title={g.heading} lede={g.blurb} rule={i > 0}>
          <Ledger as="ol" asideWidth="16rem" items={g.items.map(toRow)} />
        </Section>
      ))}
    </>
  );
}
