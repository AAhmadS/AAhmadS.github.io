import type { ReactNode } from 'react';

interface PageHeaderProps {
  /** Optional quiet label above the title (sentence case, UI font). Rendered only when given. */
  eyebrow?: string;
  /** Rendered as the page's single <h1>. */
  title: ReactNode;
  /** Muted standfirst, max 42rem. */
  subtitle?: ReactNode;
}

/** Page opening: optional eyebrow, the h1, and an optional subtitle inside the 68rem container. */
export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <header className="page-header container-site">
      {eyebrow && <p className="meta mb-3">{eyebrow}</p>}
      <h1>{title}</h1>
      {subtitle && <p className="lede">{subtitle}</p>}
    </header>
  );
}
