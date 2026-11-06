import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { Prose } from '@/components/Prose';
import { Rich } from '@/components/Rich';
import { SmartLink } from '@/components/SmartLink';
import { ToolList } from '@/components/ToolList';
import { hambast } from '@/content/hambast';

export const metadata: Metadata = {
  title: 'Hambast',
  description:
    'Hambast, a Persian-language accounting platform centered on agentic workflow automation, developed within Wisdom Era.',
  alternates: { canonical: 'https://aahmads.github.io/hambast/' },
};

const linkClass = 'link-accent inline-flex min-h-11 items-center font-ui font-medium';

export default function HambastPage() {
  return (
    <>
      <PageHeader title="Hambast" subtitle="Accounting automation, developed within Wisdom Era." />

      <div className="container-site pb-16 md:pb-24">
        <Prose>
          <p className="meta">
            {hambast.line} · {hambast.period}
          </p>
          <p>{hambast.summary}</p>
          <p>
            <Rich text={hambast.firstCase} />
          </p>
          <p>
            Hambast is one of two Wisdom Era projects I worked on; the other is Baghboon (voice agent and
            product matching).
          </p>

          <h2>Capabilities</h2>
          <ul>
            {hambast.capabilities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <ToolList items={hambast.tools} className="mt-6" />
        </Prose>

        <ul role="list" className="mt-10 flex flex-wrap gap-x-8 border-t border-line pt-3">
          {hambast.links.map((l) => (
            <li key={l.href}>
              <SmartLink href={l.href} className={linkClass}>
                {l.label}
                <span aria-hidden="true">&nbsp;↗</span>
              </SmartLink>
            </li>
          ))}
          <li>
            <Link href="/projects/finai-accounting" className={linkClass}>
              Technical details
              <span aria-hidden="true">&nbsp;→</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
