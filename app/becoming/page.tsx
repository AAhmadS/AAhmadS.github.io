import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { gaps, powers, ORG_URL } from '@/content/audits';

export const metadata: Metadata = {
  title: 'Becoming',
  description:
    'Becoming AAhmadS: personal audits — what I did not know, how I get powerful in each domain, and the path forward. Audits live at github.com/AAhmadS-Audit.',
  alternates: { canonical: 'https://aahmads.github.io/becoming/' },
};

export default function BecomingPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="// becoming — personal audits"
        title={<>Becoming <span className="gradient-text">AAhmadS</span></>}
        subtitle="What I did not know, how I decided to get powerful, and the path I am still on. The audits live in a dedicated org — this page is the map."
      />

      <div className="mx-auto max-w-[1160px] px-6">
        <div className="glass-card p-8">
          <h2 className="font-display text-2xl font-bold">What I did not know</h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            Each audit starts the same way: name the gap out loud, then plan against it.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            {gaps.map((g) => (
              <div
                key={g.period}
                className="rounded-xl border p-6"
                style={{ borderColor: 'var(--surface-border)', background: 'var(--surface)' }}
              >
                <div className="font-mono text-xs uppercase tracking-wider" style={{ color: 'var(--brand-start)' }}>
                  {g.period}
                </div>
                <p className="mt-2 font-display font-bold">Did not know: {g.gap}</p>
                <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>Plan: {g.plan}</p>
                <p className="mt-1 font-mono text-xs" style={{ color: 'var(--text-tertiary)' }}>Evidence: {g.evidence}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="mt-12 font-display text-2xl font-bold">
          How I get <span className="gradient-text">powerful</span>
        </h2>
        <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>
          Then → now, per domain. The method never changes: audit, build, measure, ship.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {powers.map((p) => (
            <div key={p.domain} className="glass-card p-6">
              <h3 className="font-display text-lg font-bold">{p.domain}</h3>
              <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--text-tertiary)' }}>Then — </span>{p.then}
              </p>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--brand-start)' }}>Now — </span>{p.now}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-card mt-12 p-8">
          <h2 className="font-display text-2xl font-bold">Where this goes</h2>
          <p className="mt-3 max-w-3xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            The future AAhmadS this page is tracking toward: the TRL paper finished and published; Hambast
            operating as a real Fin-AI company; Chantex products compounding quietly; a public Persian
            evaluation benchmark that outlives all of it. Every audit in{' '}
            <a href={ORG_URL} target="_blank" rel="noopener noreferrer" className="font-mono text-sm" style={{ color: 'var(--brand-start)' }}>
              AAHmadS-Audit
            </a>{' '}
            is a dated checkpoint on that path — gaps named, plans written, evidence attached.
          </p>
          <div className="mt-5">
            <a href={ORG_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              The audit org →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
