import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { domains, getDomain } from '@/content/domains';
import { Chat } from '@/components/Chat';

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

const kindStyles: Record<string, { label: string; color: string }> = {
  finding: { label: 'Finding', color: 'var(--brand-start)' },
  note: { label: 'Note', color: 'var(--warm-amber)' },
  borrowing: { label: 'Borrowing', color: 'var(--warm-coral)' },
  idea: { label: 'Idea', color: 'var(--brand-end)' },
};

export default function DomainDetailPage({ params }: { params: { slug: string } }) {
  const domain = getDomain(params.slug);
  if (!domain) notFound();

  return (
    <div className="pb-24">
      <div className="mx-auto max-w-[1160px] px-6 pt-32">
        <Link href="/domains" className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
          ← All domains
        </Link>
        <h1 className="mt-6 font-display text-4xl font-bold md:text-5xl">{domain.name}</h1>
        <p className="mt-2 font-mono text-sm" style={{ color: 'var(--brand-start)' }}>
          {domain.tagline}
        </p>
        <p className="mt-5 max-w-3xl text-lg" style={{ color: 'var(--text-secondary)' }}>
          {domain.description}
        </p>

        <div className="mt-12 flex flex-col gap-8">
          {domain.studied.map((study) => (
            <div key={study.id} className="glass-card p-8">
              <h2 className="font-display text-2xl font-bold">{study.name}</h2>
              <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>
                {study.description}
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {study.notes.map((note) => {
                  const k = kindStyles[note.kind] ?? kindStyles.note;
                  return (
                    <div key={note.id} className="flex flex-col rounded-xl border p-5"
                      style={{ borderColor: 'var(--surface-border)', background: 'var(--surface)' }}>
                      <span className="tag self-start" style={{ background: 'var(--tag-bg)', color: k.color }}>
                        {k.label}
                      </span>
                      <h3 className="mt-3 font-display font-bold">{note.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {note.body}
                      </p>

                      <div className="mt-5 border-t pt-5"
                        style={{ borderColor: 'var(--surface-border)' }}>
                        <Chat
                          threadKey={`${domain.slug}/${study.id}/${note.id}`}
                          title={`Discuss: ${note.title}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
