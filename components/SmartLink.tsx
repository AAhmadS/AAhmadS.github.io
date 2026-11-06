import Link from 'next/link';
import type { ReactNode } from 'react';

export type HrefKind = 'internal' | 'external' | 'mailto' | 'unsafe';

/**
 * Classifies a href. `internal` = a site path starting with a single "/", `external` = https URL,
 * `mailto` = mailto: address, anything else (javascript:, data:, http:, "//host", ...) = `unsafe`.
 */
export function classifyHref(href: string): HrefKind {
  const h = href.trim();
  if (/^\/(?![/\\])/.test(h)) return 'internal';
  if (/^https:\/\/[^\s]+$/i.test(h)) {
    try {
      return new URL(h).protocol === 'https:' ? 'external' : 'unsafe';
    } catch {
      return 'unsafe';
    }
  }
  if (/^mailto:[^\s]+$/i.test(h)) return 'mailto';
  return 'unsafe';
}

interface SmartLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  /** Allow mailto: links (off by default). */
  allowMailto?: boolean;
}

/**
 * One link primitive: internal paths use next/link, https links open in a new tab with
 * rel="noopener noreferrer" plus a visually hidden "(opens in a new tab)". An unsafe href renders
 * only its children as plain text, never an anchor.
 */
export function SmartLink({ href, children, className, allowMailto = false }: SmartLinkProps) {
  const kind = classifyHref(href);
  if (kind === 'internal') {
    return (
      <Link href={href.trim()} className={className}>
        {children}
      </Link>
    );
  }
  if (kind === 'external') {
    return (
      <a href={href.trim()} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  if (kind === 'mailto' && allowMailto) {
    return (
      <a href={href.trim()} className={className}>
        {children}
      </a>
    );
  }
  return <>{children}</>;
}
