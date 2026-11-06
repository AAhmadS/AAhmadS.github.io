import type { ReactNode } from 'react';

interface SectionProps {
  /** Anchor id for the section; also used to name the heading (`<id>-heading`). */
  id?: string;
  title: ReactNode;
  /** Optional muted intro under the heading, max 42rem. */
  lede?: ReactNode;
  /** Heading level: 2 (default) or 3. */
  level?: 2 | 3;
  /** Top hairline above the section. Default true; pass false for the first section under a PageHeader. */
  rule?: boolean;
  className?: string;
  children?: ReactNode;
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Page section: a `<section aria-labelledby>` inside the 68rem container with an h2 (or h3), an optional lede,
 * consistent vertical rhythm (clamp(2.5rem, 2rem + 3vw, 4.5rem)) and an optional top hairline.
 */
export function Section({ id, title, lede, level = 2, rule = true, className, children }: SectionProps) {
  const Heading = level === 3 ? 'h3' : 'h2';
  const base = id ?? (typeof title === 'string' ? slugify(title) : '');
  const headingId = base ? `${base}-heading` : undefined;

  return (
    <section id={id} aria-labelledby={headingId} className={`container-site${className ? ` ${className}` : ''}`}>
      <div className={`section-body${rule ? ' section-body--rule' : ''}`}>
        <div className="section-head">
          <Heading id={headingId}>{title}</Heading>
          {lede && <p className="lede">{lede}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
