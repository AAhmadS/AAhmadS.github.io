interface ToolListProps {
  items: string[];
  /** Text before the list. Defaults to "Tools". */
  label?: string;
  className?: string;
}

/** One muted UI-font line: `Tools: a, b, c`. Renders nothing for an empty list. */
export function ToolList({ items, label = 'Tools', className }: ToolListProps) {
  if (items.length === 0) return null;
  return (
    <p className={`meta${className ? ` ${className}` : ''}`}>
      <span className="font-medium text-fg">{label}:</span> {items.join(', ')}
    </p>
  );
}
