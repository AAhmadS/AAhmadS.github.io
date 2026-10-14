import Link from 'next/link';

const socials = [
  { label: 'GitHub', href: 'https://github.com/AAhmadS', text: 'GH' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=bmO8gCYAAAAJ&hl=en', text: 'SC' },
  { label: 'Email', href: 'mailto:shafieeamirahmadii@gmail.com', text: 'EM' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amirahmad-shafiee', text: 'LI' },
  { label: 'Telegram', href: 'https://t.me/notamira', text: 'TG' },
];

export function Footer() {
  return (
    <footer className="border-t py-12"
      style={{ borderColor: 'var(--surface-border)' }}>
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-sm" style={{ color: 'var(--text-tertiary)' }}>
            Built with <span className="gradient-text">♥</span> by Amirahmad Shafiee
          </p>
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border text-sm transition-all hover:-translate-y-px"
                style={{
                  background: 'var(--surface)',
                  borderColor: 'var(--surface-border)',
                  color: 'var(--text-secondary)',
                }}
              >
                {s.text}
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-5 border-t pt-5 text-center text-sm"
          style={{ color: 'var(--text-tertiary)', borderColor: 'var(--surface-border)' }}>
          © {new Date().getFullYear()} Amirahmad Shafiee. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
