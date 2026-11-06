import type { ReactNode } from 'react';

interface ProseProps {
  children: ReactNode;
  /** Wrapper element. Defaults to "div". */
  as?: 'div' | 'article' | 'section';
  className?: string;
}

/**
 * Reading wrapper: 42rem column, serif, `text-wrap: pretty`, accent-underlined links (anchors without a class),
 * sensible list, quote and code spacing. Put paragraphs, lists and headings directly inside.
 */
export function Prose({ children, as: Tag = 'div', className }: ProseProps) {
  return <Tag className={`prose-site${className ? ` ${className}` : ''}`}>{children}</Tag>;
}
