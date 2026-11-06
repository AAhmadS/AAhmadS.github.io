import Link from 'next/link';
import { projects } from '@/content/projects';
import { papers } from '@/content/research';
import { domains } from '@/content/domains';
import { chantexProducts } from '@/content/chantex';
import { Ledger, type LedgerRow } from '@/components/Ledger';
import { Section } from '@/components/Section';
import { SiGithub, SiGooglescholar, SiTelegram } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const socials = [
  { label: 'GitHub', href: 'https://github.com/AAhmadS', Icon: SiGithub },
  {
    label: 'Scholar',
    href: 'https://scholar.google.com/citations?user=bmO8gCYAAAAJ&hl=en',
    Icon: SiGooglescholar,
  },
  { label: 'Email', href: 'mailto:shafieeamirahmadii@gmail.com', Icon: FiMail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amirahmad-shafiee', Icon: FaLinkedinIn },
  { label: 'Telegram', href: 'https://t.me/notamira', Icon: SiTelegram },
];

const countByGroup = (group: NonNullable<(typeof papers)[number]['group']>) =>
  papers.filter((p) => p.group === group).length;

const publishedCount = countByGroup('published');
const underReviewCount = countByGroup('under-review');

const roles = [
  'AI Researcher & Builder',
  'Persian NLP & Voice Agents',
  'Vision-Language Models',
  'Reinforcement Learning',
];

// Selected Publications: published papers first, then those under review, each group in data order (the same
// order as /research/).
const publicationRows: LedgerRow[] = (['published', 'under-review'] as const).flatMap((group) =>
  papers
    .filter((p) => p.group === group)
    .map(
      (p): LedgerRow => ({
        id: p.slug,
        when: p.year,
        title: p.title,
        titleHref: `/research/${p.slug}/`,
        kicker: p.venue,
        status:
          group === 'published'
            ? { tone: 'published', label: 'Published' }
            : { tone: 'review', label: 'Under review' },
      }),
    ),
);

// Explore my work: the seven destinations, same order and strings as before, counts derived from the data.
const exploreRows: LedgerRow[] = [
  {
    id: 'research',
    when: 'Research',
    title: 'Publications',
    titleHref: '/research',
    summary: (
      <>
        {countByGroup('published')} published · {countByGroup('under-review')} under review ·{' '}
        {countByGroup('ongoing')} ongoing · {countByGroup('unfinished')} unfinished.
      </>
    ),
  },
  {
    id: 'projects',
    when: 'Ventures & Tools',
    title: 'Projects',
    titleHref: '/projects',
    summary: (
      <>
        {projects.length} curated: Hambast, the Kolbeh startup (closed), research implementations, and open tools.
      </>
    ),
  },
  {
    id: 'domains',
    when: 'Knowledge',
    title: 'Domains of Interest',
    titleHref: '/domains',
    summary: (
      <>
        {domains.length} domains with studied items, findings, notes, and ideas — plus public chat.
      </>
    ),
  },
  {
    id: 'regrets',
    when: 'Honesty',
    title: 'Regrets',
    titleHref: '/regrets',
    summary: <>Unfinished projects, what each taught, and the capabilities they left.</>,
  },
  {
    id: 'chantex',
    when: 'Private',
    title: 'Chantex',
    titleHref: '/chantex',
    summary: (
      <>My private company: {chantexProducts.map((p) => p.name).join(', ')}. Methods undisclosed.</>
    ),
  },
  {
    id: 'hambast',
    when: 'Wisdom Era',
    title: 'Hambast',
    titleHref: '/hambast',
    summary:
      'Accounting automation built within Wisdom Era: bookkeeping, VAT compliance and AI-assisted journal entries.',
  },
  {
    id: 'becoming',
    when: 'Journey',
    title: 'Becoming',
    titleHref: '/becoming',
    summary: 'Personal audits: what I did not know, how I get powerful, where this goes.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO: a quiet front sheet. Text first; the portrait follows the actions on mobile. */}
      <section aria-labelledby="home-title" className="page-header container-site">
        <div className="rise grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-14 lg:gap-20">
          <div>
            <h1 id="home-title">Amirahmad Shafiee</h1>
            <p className="mt-4 font-ui text-xl font-semibold text-accent">{roles[0]}</p>

            {/* The overflow clip hides the divider of the first item on each wrapped line. */}
            <div className="mt-3 overflow-hidden">
              <ul role="list" className="-ml-4 flex flex-wrap gap-y-1 font-ui text-base text-muted">
                {roles.slice(1).map((r) => (
                  <li
                    key={r}
                    className="relative px-4 before:absolute before:inset-y-[0.2em] before:left-0 before:w-px before:bg-line-strong"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 max-w-measure text-lg leading-relaxed text-fg">
              Computer science graduate of Sharif University of Technology. I work on multi-agent systems, RAG,
              voice agents and LLM evaluation. Currently I build Carinx, an agentic chatbot for crowdfunding, and
              Hambast, an accounting platform within Wisdom Era. {publishedCount} papers published,{' '}
              {underReviewCount} under review.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/research" className="btn-primary">View Research</Link>
              <Link href="/domains" className="btn-secondary">Domains of Interest</Link>
            </div>
          </div>

          <div className="md:w-64">
            <figure className="flex items-center gap-4 md:block">
              {/* Vendored portrait (public/images). Plain img: the export is static and unoptimized. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/amirahmad.jpg"
                alt="Amirahmad Shafiee"
                width={460}
                height={460}
                className="size-28 shrink-0 rounded-md border border-line object-cover object-[center_15%] md:size-64"
              />
              <figcaption className="md:mt-4">
                <p className="font-serif text-xl font-semibold leading-snug text-fg">Amirahmad Shafiee</p>
                <p className="meta text-fg">AI Researcher</p>
                <p className="meta">Sharif University of Technology</p>
              </figcaption>
            </figure>
            <ul role="list" className="mt-5 flex flex-wrap gap-2">
              {socials.map(({ label, href, Icon }) => {
                const external = href.startsWith('http');
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      title={label}
                      className="icon-btn"
                    >
                      <Icon aria-hidden="true" focusable="false" size={18} />
                      <span className="sr-only">
                        {label}
                        {external ? ' (opens in a new tab)' : ''}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <Section title="Selected Publications">
        <Ledger items={publicationRows} />
        <p className="mt-4">
          <Link href="/research/" className="link-accent inline-flex min-h-11 items-center font-ui font-medium">
            All publications
          </Link>
        </p>
      </Section>

      <Section
        title="Explore my work"
        lede="Research, open-source projects, and the domains I study — with public discussion on my ideas and notes."
      >
        <Ledger items={exploreRows} as="ul" titleAs="h3" />
      </Section>
    </>
  );
}
