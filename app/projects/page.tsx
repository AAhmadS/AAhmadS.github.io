import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';
import { Ledger, type LedgerRow } from '@/components/Ledger';
import { Rich } from '@/components/Rich';
import type { StatusTone } from '@/components/Status';
import { ToolList } from '@/components/ToolList';
import { projects } from '@/content/projects';
import type { Project } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Open-source and applied AI projects by Amirahmad Shafiee: NLP, RL, multimodal research implementations, Hambast, the closed Kolbeh startup, voice agents, tools.',
  alternates: { canonical: 'https://aahmads.github.io/projects/' },
};

const groups: { key: NonNullable<Project['kind']>; heading: string; blurb: string }[] = [
  {
    key: 'venture',
    heading: 'Company work',
    blurb: 'Hambast at Wisdom Era, and Kolbeh, an AI real-estate startup that closed in January 2026.',
  },
  {
    key: 'tool',
    heading: 'Tools — open and research-grade',
    blurb: 'Agents, trackers, and labs I use daily and share.',
  },
  {
    key: 'research',
    heading: 'Research implementations — what I have done',
    blurb: 'Code behind papers and coursework; archived but documented.',
  },
];

// Active -> ongoing, Paper published -> published, Prototype -> unfinished; Archived, Closed ... -> neutral.
function statusTone(status: string): StatusTone {
  if (status === 'Active') return 'ongoing';
  if (status === 'Paper published') return 'published';
  if (status === 'Prototype') return 'unfinished';
  return 'neutral';
}

function toRow(p: Project): LedgerRow {
  return {
    id: p.slug,
    when: p.year,
    title: p.title,
    titleHref: `/projects/${p.slug}/`,
    kicker: p.badge,
    summary: <Rich text={p.summary} />,
    extra: <ToolList items={p.tech} label="Tech" />,
    status: p.status ? { tone: statusTone(p.status), label: p.status } : undefined,
  };
}

export default function ProjectsPage() {
  const shown = groups
    .map((g) => ({ ...g, items: projects.filter((p) => p.kind === g.key) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <PageHeader title="What I Build" subtitle="Ventures I run now, tools I share, and research code from before." />
      {shown.map((g, i) => (
        <Section key={g.key} title={g.heading} lede={g.blurb} rule={i > 0}>
          <Ledger as="ol" asideWidth="11rem" items={g.items.map(toRow)} />
        </Section>
      ))}
    </>
  );
}
