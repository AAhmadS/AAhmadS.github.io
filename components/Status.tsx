export type StatusTone = 'published' | 'review' | 'ongoing' | 'unfinished' | 'neutral';

interface StatusProps {
  tone: StatusTone;
  /** Always rendered: the shape never carries the meaning alone. */
  label: string;
  className?: string;
}

/**
 * Small shape plus text. published = filled circle, review = half-filled circle, ongoing = ring with dot,
 * unfinished = hollow ring, neutral = small square.
 */
export function Status({ tone, label, className }: StatusProps) {
  return (
    <span className={`status${className ? ` ${className}` : ''}`} data-tone={tone}>
      <svg className="status__shape" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
        {tone === 'published' && <circle cx="6" cy="6" r="5" fill="currentColor" />}
        {tone === 'review' && (
          <>
            <circle cx="6" cy="6" r="4.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 1.75a4.25 4.25 0 0 0 0 8.5z" fill="currentColor" />
          </>
        )}
        {tone === 'ongoing' && (
          <>
            <circle cx="6" cy="6" r="4.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="6" cy="6" r="1.5" fill="currentColor" />
          </>
        )}
        {tone === 'unfinished' && (
          <circle cx="6" cy="6" r="4.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        )}
        {tone === 'neutral' && <rect x="3" y="3" width="6" height="6" fill="currentColor" />}
      </svg>
      <span>{label}</span>
    </span>
  );
}
