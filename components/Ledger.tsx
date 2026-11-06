import type { CSSProperties, ReactNode } from 'react';
import { SmartLink, classifyHref } from './SmartLink';
import { Status, type StatusTone } from './Status';

export interface LedgerRow {
  id: string;
  /** Year or date range, shown in the first column (tabular figures). */
  when?: string;
  title: ReactNode;
  /** Makes the title a real link (site path, https URL or mailto). */
  titleHref?: string;
  /** One short meta line under the title (venue, role, authors). */
  kicker?: string;
  /** Summary under the title. Wrap strings that contain markup in <Rich>. */
  summary?: ReactNode;
  status?: { tone: StatusTone; label: string };
  /** Links shown as a wrapped list in the last column, each a 44px-high target. */
  links?: { label: string; href: string }[];
  /** Anything extra under the summary, for example <ToolList />. */
  extra?: ReactNode;
}

interface LedgerProps {
  items: LedgerRow[];
  /** "ol" when order matters (newest first, steps), otherwise "ul" (default). */
  as?: 'ol' | 'ul';
  /** Element for each row title; "h3" (default), "h4" or "p". */
  titleAs?: 'h3' | 'h4' | 'p';
  /** Accessible name for the list when no heading introduces it. */
  'aria-label'?: string;
  className?: string;
  /** Width of the status and links column, any CSS length. Default "auto" sizes it per list; give lists that sit one under another on a page the same fixed value so their status edges line up. */
  asideWidth?: string;
}

/**
 * Ledger rows: when | title, kicker, summary, extra | status and links. Three columns from 64rem up (aligned across
 * rows); from 48rem the status and links move under the title; stacked on mobile. Hairline between rows. Columns
 * nobody uses are dropped automatically.
 */
export function Ledger({
  items,
  as: List = 'ul',
  titleAs: Title = 'h3',
  'aria-label': ariaLabel,
  className,
  asideWidth,
}: LedgerProps) {
  const hasWhen = items.some((r) => r.when);
  const hasAside = items.some((r) => r.status || (r.links && r.links.length > 0));
  const whenCol = hasWhen ? 'minmax(0, 9rem)' : null;
  const cols = [whenCol, 'minmax(0, 1fr)', hasAside ? (asideWidth ?? 'auto') : null].filter(Boolean).join(' ');
  // From 48rem to 64rem the aside drops under the main column (.ledger--reflow in globals.css), so the tracks are the same minus the aside.
  const midCols = [whenCol, 'minmax(0, 1fr)'].filter(Boolean).join(' ');

  return (
    <List
      role="list"
      aria-label={ariaLabel}
      className={`ledger${hasAside ? ' ledger--reflow' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--ledger-cols': cols, '--ledger-cols-mid': midCols } as CSSProperties}
    >
      {items.map((row) => (
        <li key={row.id} className="ledger-row">
          {hasWhen && <div className="ledger-when meta">{row.when}</div>}

          <div className="ledger-main">
            <Title className="ledger-title">
              {row.titleHref ? (
                <SmartLink href={row.titleHref} allowMailto>
                  {row.title}
                </SmartLink>
              ) : (
                row.title
              )}
            </Title>
            {row.kicker && <p className="ledger-kicker meta">{row.kicker}</p>}
            {row.summary && <div className="ledger-summary">{row.summary}</div>}
            {row.extra && <div className="ledger-extra">{row.extra}</div>}
          </div>

          {hasAside && (
            <div className="ledger-aside">
              {row.status && <Status tone={row.status.tone} label={row.status.label} />}
              {row.links && row.links.length > 0 && (
                <ul role="list" className="ledger-links">
                  {row.links.map((l) => (
                    <li key={`${l.label}|${l.href}`}>
                      {classifyHref(l.href) === 'unsafe' ? (
                        <span className="ledger-link text-muted">{l.label}</span>
                      ) : (
                        <SmartLink href={l.href} allowMailto className="ledger-link link-accent">
                          {l.label}
                        </SmartLink>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </li>
      ))}
    </List>
  );
}
