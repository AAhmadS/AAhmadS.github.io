import { PageHeader } from '@/components/PageHeader';
import { Prose } from '@/components/Prose';
import { Section } from '@/components/Section';
import { Ledger, type LedgerRow } from '@/components/Ledger';
import { ToolList } from '@/components/ToolList';
import { Rich } from '@/components/Rich';
import type { Metadata } from 'next';
import { nowItems, beforeItems, type ExperienceItem } from '@/content/experience';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Amirahmad Shafiee: AI researcher and builder, CS at Sharif. Linguistics x AI, Persian NLP/voice, Carinx and Wisdom Era (Hambast), audit and automation practice.',
  alternates: { canonical: 'https://aahmads.github.io/about/' },
};

const skills = [
  {
    title: 'AI and ML',
    items: [
      'LLM agents and multi-agent systems',
      'Retrieval-augmented generation (RAG)',
      'LLM evaluation',
      'Post-training (SFT, DPO, reinforcement learning)',
      'Vision-language models',
      'Classical machine learning',
    ],
  },
  {
    title: 'Programming',
    items: ['Python', 'Java', 'R', 'Go'],
  },
  {
    title: 'Frameworks',
    items: ['PyTorch', 'Transformers', 'LangChain', 'LangGraph', 'LangSmith', 'Playwright'],
  },
  {
    title: 'Full-stack and infrastructure',
    items: [
      'FastAPI',
      'PostgreSQL (pgvector)',
      'Redis',
      'Docker',
      'Next.js',
      'Vue 3',
      'Nuxt',
      'ASP.NET Core',
      'RabbitMQ',
    ],
  },
  {
    title: 'Research libraries',
    items: [
      'PyTorch',
      'TensorFlow',
      'Transformers',
      'NLTK',
      'spaCy',
      'LangChain',
      'LangGraph',
      'LangSmith',
      'Playwright',
      'Stable-baselines3',
      'Gym',
      'CVXPY',
    ],
  },
];

const focusTags = [
  'Natural Language Processing',
  'Conversational AI',
  'Vision-Language Models',
  'Reinforcement Learning',
  'Linguistics',
  'Machine Learning',
];

/**
 * Experience entries as ledger rows. Top level: period in the `when` column, organisation and tag as the kicker,
 * `href` on the title. Nested entries (children) are subordinate: the period moves into their kicker line so
 * they keep the full width of the parent's main column.
 */
function experienceRows(items: ExperienceItem[], nested = false): LedgerRow[] {
  return items.map((e) => {
    const orgLine = e.tag ? `${e.org} · ${e.tag}` : e.org;
    const hasExtra = Boolean(e.bullets || e.tools || e.children);
    return {
      id: `${e.org}|${e.period}|${e.title}`,
      when: nested ? undefined : e.period,
      title: <Rich text={e.title} />,
      titleHref: e.href,
      kicker: nested ? `${e.period} · ${orgLine}` : orgLine,
      summary: <Rich text={e.detail} />,
      extra: hasExtra ? (
        <>
          {e.bullets && (
            <ul className="max-w-measure list-disc space-y-1.5 pl-5 text-muted marker:text-faint">
              {e.bullets.map((b) => (
                <li key={b}>
                  <Rich text={b} />
                </li>
              ))}
            </ul>
          )}
          {e.tools && <ToolList items={e.tools} className={e.bullets ? 'mt-3' : undefined} />}
          {e.children && (
            <Ledger
              items={experienceRows(e.children, true)}
              titleAs="h4"
              className="mt-4 border-l border-line pl-5 [&_.ledger-row]:py-4 [&_.ledger-title]:text-[1.0625rem]"
            />
          )}
        </>
      ) : undefined,
    };
  });
}

// Education: the B.Sc. entry as a ledger row (when | institution, degree, summary).
const educationRows: LedgerRow[] = [
  {
    id: 'sharif-bsc',
    when: 'Oct 2020 – Sep 2025',
    title: 'Sharif University of Technology',
    kicker: 'B.Sc. Computer Science',
    summary:
      'Admitted to Industrial Engineering, transferred to Computer Science. Department of Mathematical Sciences. Final GPA 17.22/20. B.Sc. project 20/20; graduate-level NLP 19.3/20. Ranked 95th among more than 50,000 candidates (top 0.2%) in the 2020 National University Entrance Exam (Konkur), Mathematics and Physics track.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Bridging Language & Intelligence"
        subtitle="A snapshot of who I am, what I research, and the tools I use."
      />

      <div className="container-site pb-10 md:pb-14">
        <Prose>
          <p>
            I&rsquo;m a <strong>Computer Science</strong> graduate of <strong>Sharif University of Technology</strong>,
            driven by a deep fascination with the intersection of <strong>linguistics and artificial intelligence</strong>.
            My research interests span Natural Language Processing, Conversational AI systems, Vision-Language Models, and
            Reinforcement Learning — and how these combine into more intelligent, human-like AI.
          </p>
          <p>
            Through academic projects and research collaborations, I&rsquo;ve worked on problems in software
            engineering, blockchain technology, and computer vision. Since December 2024 I have built AI products in
            Persian and English: conversational assistants at Yara, the engineering team and valuation work at Kolbeh
            (an AI real-estate startup that closed in January 2026), Hambast and Baghboon at Wisdom Era, now Carinx,
            and my private company Chantex.
          </p>
        </Prose>
      </div>

      <Section title="Research Focus">
        {/* The overflow clip hides the divider of the first item on each wrapped line. */}
        <div className="overflow-hidden">
          <ul role="list" className="-ml-4 flex flex-wrap gap-y-1 text-lg">
            {focusTags.map((t) => (
              <li
                key={t}
                className="relative px-4 before:absolute before:inset-y-[0.2em] before:left-0 before:w-px before:bg-line-strong"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Education">
        <Ledger items={educationRows} />
        <dl className="border-t border-line py-5 md:grid md:grid-cols-[minmax(0,9rem)_minmax(0,1fr)] md:gap-x-8">
          <dt className="meta md:row-span-2 md:pt-1">Research impact · Google Scholar</dt>
          <dd className="mt-1 font-serif text-xl font-semibold leading-snug md:mt-0">23 citations · h-index 2</dd>
          <dd className="mt-2 max-w-measure text-muted md:col-start-2">
            4 listed works: SDPERL (17), Emo3D at NAACL 2025 Findings, Lightning Network at JRSS Series A 2026, and
            From Illusion to Insight (2025). Verified sharif.edu profile.
          </dd>
        </dl>
      </Section>

      <Section title="Skills">
        <dl>
          {skills.map((s) => (
            <div
              key={s.title}
              className="border-t border-line py-4 first:border-t-0 first:pt-0 md:grid md:grid-cols-[minmax(0,9rem)_minmax(0,1fr)] md:gap-x-8"
            >
              <dt className="meta md:pt-1">{s.title}</dt>
              <dd className="mt-1 max-w-measure md:mt-0">{s.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="What I do now">
        <Ledger items={experienceRows(nowItems)} as="ol" />
      </Section>

      <Section title="What I have done">
        <Ledger items={experienceRows(beforeItems)} as="ol" />
      </Section>
    </>
  );
}
