interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <div className="pt-32 pb-12">
      <div className="mx-auto max-w-[1160px] px-6">
        <span className="section-label">{eyebrow}</span>
        <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg" style={{ color: 'var(--text-secondary)' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
