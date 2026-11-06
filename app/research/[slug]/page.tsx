import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Prose } from '@/components/Prose';
import { Rich } from '@/components/Rich';
import { SmartLink } from '@/components/SmartLink';
import { Status, type StatusTone } from '@/components/Status';
import { papers, getPaper } from '@/content/research';
import type { Paper } from '@/lib/types';

export function generateStaticParams() {
  return papers.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const paper = getPaper(params.slug);
  if (!paper) return { title: 'Paper not found' };
  return {
    title: paper.title,
    description: paper.summary,
    alternates: { canonical: `https://aahmads.github.io/research/${paper.slug}/` },
  };
}

const TONE: Record<NonNullable<Paper['group']>, StatusTone> = {
  published: 'published',
  'under-review': 'review',
  ongoing: 'ongoing',
  unfinished: 'unfinished',
};

const BACK_LINK =
  'inline-flex min-h-[44px] items-center gap-2 font-ui text-[0.9375rem] font-medium text-muted transition-colors duration-fast ease-out [@media(hover:hover)]:hover:text-fg';

// Paper titles run to ~110 characters, so the detail h1 is a step below the index-page h1.
const DETAIL_TITLE = 'mt-5 max-w-4xl text-3xl/[1.12] sm:text-4xl/[1.12] lg:text-5xl/[1.12]';

const LINK =
  'link-accent inline-flex min-h-[44px] items-center font-ui text-[0.9375rem] font-medium';

export default function PaperDetailPage({ params }: { params: { slug: string } }) {
  const paper = getPaper(params.slug);
  if (!paper) notFound();

  const tone: StatusTone = paper.group ? TONE[paper.group] : 'neutral';

  return (
    <article>
      <header className="page-header container-site">
        <Link href="/research/" className={BACK_LINK}>
          <span aria-hidden="true">←</span> All publications
        </Link>

        <div className="meta mt-6 flex flex-wrap items-center gap-x-5 gap-y-1">
          <span>{paper.year}</span>
          {paper.venue && <span>{paper.venue}</span>}
          <Status tone={tone} label={paper.meta} />
        </div>

        <h1 className={DETAIL_TITLE}>{paper.title}</h1>

        {paper.role && (
          <dl className="mt-8 max-w-measure">
            <dt className="meta font-medium text-fg">Role</dt>
            <dd className="mt-1 text-muted">
              <Rich text={paper.role} />
            </dd>
          </dl>
        )}
      </header>

      <div className="container-site">
        <div className="section-body section-body--rule grid gap-10 lg:grid-cols-[minmax(0,42rem)_minmax(0,1fr)] lg:gap-16">
          <section aria-labelledby="abstract-heading">
            <div className="section-head">
              <h2 id="abstract-heading">Abstract</h2>
            </div>
            <Prose>
              <p>
                <Rich text={paper.abstract} />
              </p>
            </Prose>
          </section>

          {paper.links.length > 0 && (
            <section aria-labelledby="links-heading">
              <div className="section-head">
                <h2 id="links-heading">Links</h2>
              </div>
              <ul role="list">
                {paper.links.map((l) => (
                  <li key={`${l.label}|${l.href}`}>
                    <SmartLink href={l.href} className={LINK}>
                      {l.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </article>
  );
}
