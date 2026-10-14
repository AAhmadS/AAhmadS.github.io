import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
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

export default function RegretDetailPage({ params }: { params: { slug: string } }) {
  const regret = getRegret(params.slug);
  if (!regret) notFound();

  return (
    <div className="pb-24">
      <div className="mx-auto max-w-[1160px] px-6 pt-32">
        <Link href="/regrets" className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
          ← All regrets
        </Link>
        <div className="mt-6">
          <span className="tag">{regret.period}</span>
        </div>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight md:text-5xl">
          {regret.project}
        </h1>
        <p className="mt-3 max-w-3xl font-mono text-sm" style={{ color: 'var(--brand-start)' }}>
          {regret.tagline}
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_280px]">
          <div className="flex flex-col gap-6">
            <div className="glass-card space-y-4 p-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {regret.story.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div
              className="rounded-xl border p-7"
              style={{ borderColor: 'var(--surface-border)', background: 'rgba(245,158,11,.06)' }}
            >
              <div className="section-label">What I regret</div>
              <p className="mt-3 font-display text-lg font-semibold leading-relaxed">{regret.regret}</p>
            </div>
          </div>

          <div className="flex h-fit flex-col gap-6">
            <div className="glass-card p-6">
              <h2 className="font-display text-lg font-bold">Capabilities gained</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {regret.capabilities.map((c) => (
                  <span key={c} className="tag">{c}</span>
                ))}
              </div>
            </div>

            {regret.related.length > 0 && (
              <div className="glass-card p-6">
                <h2 className="font-display text-lg font-bold">Related</h2>
                <div className="mt-4 flex flex-col gap-3">
                  {regret.related.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      className="rounded-lg border px-4 py-2.5 text-center font-mono text-sm transition-colors"
                      style={{ borderColor: 'var(--surface-border)', color: 'var(--text-secondary)' }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
