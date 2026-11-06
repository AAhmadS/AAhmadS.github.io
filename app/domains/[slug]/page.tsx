import type { CSSProperties } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { domains, getDomain } from '@/content/domains';
import { Chat } from '@/components/Chat';
import { Prose } from '@/components/Prose';
import { Section } from '@/components/Section';
import type { NoteBlock } from '@/lib/types';

export function generateStaticParams() {
  return domains.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const domain = getDomain(params.slug);
  if (!domain) return { title: 'Domain not found' };
  return {
    title: domain.name,
    description: domain.tagline,
    alternates: { canonical: `https://aahmads.github.io/domains/${domain.slug}/` },
  };
}

type Kind = NoteBlock['kind'];

const KIND_LABEL: Record<Kind, string> = {
  finding: 'Finding',
  note: 'Note',
  borrowing: 'Borrowing',
  idea: 'Idea',
};

/** One accent hue; the four kinds differ by shape (circle, bars, triangle, open diamond), and the label is always printed. */
function KindMark({ kind }: { kind: Kind }) {
  return (
    <svg className="h-3.5 w-3.5 flex-none text-accent" viewBox="0 0 14 14" aria-hidden="true" focusable="false">
      {kind === 'finding' && <circle cx="7" cy="7" r="5.5" fill="currentColor" />}
      {kind === 'note' && (
        <>
          <rect x="1.5" y="3" width="11" height="2" fill="currentColor" />
          <rect x="1.5" y="9" width="11" height="2" fill="currentColor" />
        </>
      )}
      {kind === 'borrowing' && <path d="M2.5 1.5 12 7l-9.5 5.5z" fill="currentColor" />}
      {kind === 'idea' && (
        <path d="M7 1.5 12.5 7 7 12.5 1.5 7z" fill="none" stroke="currentColor" strokeWidth="1.75" />
      )}
    </svg>
  );
}

const BACK_LINK =
  'inline-flex min-h-[44px] items-center gap-2 font-ui text-[0.9375rem] font-medium text-muted transition-colors duration-fast ease-out [@media(hover:hover)]:hover:text-fg';

const SUMMARY =
  'flex min-h-[44px] cursor-pointer list-none items-start gap-2 py-2.5 font-ui text-[0.9375rem] font-medium text-muted transition-colors duration-fast ease-out [&::-webkit-details-marker]:hidden [@media(hover:hover)]:hover:text-fg';

// when | main: the same two columns the Ledger uses, with the note kind in the first column.
const NOTES_COLS = { '--ledger-cols': 'minmax(0, 9rem) minmax(0, 1fr)' } as CSSProperties;

export default function DomainDetailPage({ params }: { params: { slug: string } }) {
  const domain = getDomain(params.slug);
  if (!domain) notFound();

  return (
    <article>
      <header className="page-header container-site">
        <Link href="/domains/" className={BACK_LINK}>
          <span aria-hidden="true">←</span> All domains
        </Link>
        <h1 className="mt-5">{domain.name}</h1>
        <p className="meta mt-3 max-w-measure text-base">{domain.tagline}</p>
        <Prose className="mt-6">
          <p>{domain.description}</p>
        </Prose>
      </header>

      {domain.studied.map((study) => (
        <Section key={study.id} id={study.id} title={study.name} lede={study.description}>
          <ul role="list" className="ledger" style={NOTES_COLS}>
            {study.notes.map((note) => {
              const kind: Kind = note.kind in KIND_LABEL ? note.kind : 'note';
              return (
                <li key={note.id} className="ledger-row">
                  <div className="ledger-when meta font-medium">
                    <span className="inline-flex items-center gap-2">
                      <KindMark kind={kind} />
                      <span>{KIND_LABEL[kind]}</span>
                    </span>
                  </div>

                  <div className="ledger-main">
                    <h3 className="m-0">{note.title}</h3>
                    <Prose className="mt-2">
                      <p>{note.body}</p>
                    </Prose>

                    <details className="group mt-4">
                      <summary className={SUMMARY}>
                        <svg
                          className="mt-[0.3125rem] h-3.5 w-3.5 flex-none text-accent transition-transform duration-fast ease-out group-open:rotate-90"
                          viewBox="0 0 14 14"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M4.5 2 10 7l-5.5 5" fill="none" stroke="currentColor" strokeWidth="1.75" />
                        </svg>
                        <span className="min-w-0">Discuss: {note.title}</span>
                      </summary>
                      <div className="pt-2">
                        <Chat threadKey={`${domain.slug}/${study.id}/${note.id}`} title={`Discuss: ${note.title}`} />
                      </div>
                    </details>
                  </div>
                </li>
              );
            })}
          </ul>
        </Section>
      ))}
    </article>
  );
}
