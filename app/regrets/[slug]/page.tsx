import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Prose } from '@/components/Prose';
import { SmartLink } from '@/components/SmartLink';
import { regrets, getRegret } from '@/content/regrets';

export function generateStaticParams() {
  return regrets.map((r) => ({ slug: r.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const regret = getRegret(params.slug);
  if (!regret) return { title: 'Regret not found' };
  return {
    title: `Regret: ${regret.project}`,
    description: regret.tagline,
    alternates: { canonical: `https://aahmads.github.io/regrets/${regret.slug}/` },
  };
}

const BACK_LINK =
  'inline-flex min-h-[44px] items-center gap-2 font-ui text-[0.9375rem] font-medium text-muted transition-colors duration-fast ease-out [@media(hover:hover)]:hover:text-fg';

// Project names run to ~60 characters, so the detail h1 is a step below the index-page h1.
const DETAIL_TITLE = 'mt-2 max-w-4xl text-3xl/[1.12] sm:text-4xl/[1.12] lg:text-5xl/[1.12]';

// Small sentence-case labels for the side blocks and the pull block.
const LABEL = 'font-ui text-[0.9375rem] font-medium leading-snug tracking-normal text-muted';

const LINK = 'link-accent inline-flex min-h-[44px] items-center font-ui text-[0.9375rem] font-medium';

export default function RegretDetailPage({ params }: { params: { slug: string } }) {
  const regret = getRegret(params.slug);
  if (!regret) notFound();

  return (
    <article>
      <header className="page-header container-site">
        <Link href="/regrets/" className={BACK_LINK}>
          <span aria-hidden="true">←</span> All regrets
        </Link>
        <p className="meta mt-6">{regret.period}</p>
        <h1 className={DETAIL_TITLE}>{regret.project}</h1>
        <p className="meta mt-4 max-w-measure text-base">{regret.tagline}</p>
      </header>

      <div className="container-site">
        <div className="section-body section-body--rule grid gap-12 lg:grid-cols-[minmax(0,42rem)_minmax(0,18rem)] lg:justify-between lg:gap-x-12">
          <div className="min-w-0">
            <Prose>
              {regret.story.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </Prose>

            <section aria-labelledby="regret-heading" className="mt-12 max-w-measure border-l-[3px] border-accent pl-5 md:pl-6">
              <h2 id="regret-heading" className={LABEL}>
                What I regret
              </h2>
              <p className="mt-2 text-[1.25rem] leading-[1.55] text-fg">{regret.regret}</p>
            </section>
          </div>

          <div className="min-w-0 space-y-10">
            <section aria-labelledby="capabilities-heading" className="border-t border-line pt-4">
              <h2 id="capabilities-heading" className={LABEL}>
                Capabilities gained
              </h2>
              <ul className="mt-3 list-disc space-y-2 ps-5 text-[0.9375rem] leading-snug marker:text-faint">
                {regret.capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </section>

            {regret.related.length > 0 && (
              <section aria-labelledby="related-heading" className="border-t border-line pt-4">
                <h2 id="related-heading" className={LABEL}>
                  Related
                </h2>
                <ul role="list" className="mt-1">
                  {regret.related.map((l) => (
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
      </div>
    </article>
  );
}
