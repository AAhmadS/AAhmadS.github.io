import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { hambastProducts } from '@/content/hambast';

export const metadata: Metadata = {
  title: 'Hambast',
  description:
    'Hambast — Amirahmad Shafiee’s Fin-AI company. Persian auto-accounting and invoice OCR. Part of the Wisdom-Era work.',
  alternates: { canonical: 'https://aahmads.github.io/hambast/' },
};

export default function HambastPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="// fin-ai · wisdom-era"
        title={<>Ham<span className="gradient-text">bast</span></>}
        subtitle="My Fin-AI company, growing out of the Wisdom-Era work: accounting that reads its own invoices."
      />

      <div className="mx-auto max-w-[1160px] px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {hambastProducts.map((p) => (
            <div key={p.name} className="glass-card flex flex-col p-7">
              <h2 className="font-display text-xl font-bold">{p.name}</h2>
              <p className="mt-1 font-mono text-xs" style={{ color: 'var(--brand-start)' }}>
                {p.line}
              </p>
              <p className="mt-3 flex-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {p.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-card mt-5 p-7">
          <h2 className="font-display text-xl font-bold">How it fits</h2>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Hambast is where my financial-AI techniques live in production form: document understanding,
            structured extraction with schemas, model-assisted bookkeeping, and evaluation before automation.
            The technical story sits under my Wisdom-Era experience; the company shouts its own name here.
          </p>
          <div className="mt-5">
            <Link href="/projects/finai-accounting" className="btn-secondary">
              Technical details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
