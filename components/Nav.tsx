'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from '@/lib/theme';
import { FiMoon, FiSun } from 'react-icons/fi';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/projects', label: 'Projects' },
  { href: '/domains', label: 'Domains' },
  { href: '/regrets', label: 'Regrets' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] border-b backdrop-blur-xl"
      style={{ background: 'var(--nav-bg)', borderColor: 'var(--surface-border)' }}>
      <div className="mx-auto flex h-[68px] max-w-[1160px] items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-tight gradient-text"
          aria-label="Amirahmad Shafiee - Home"
        >
          AS
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${isActive(l.href) ? '' : ''}`}
              style={{ color: isActive(l.href) ? 'var(--text-primary)' : 'var(--text-secondary)' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle dark/light mode"
            className="flex h-11 w-11 items-center justify-center rounded-xl border text-lg transition-all"
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--surface-border)',
              color: 'var(--text-secondary)',
            }}
          >
            {theme === 'dark' ? <FiMoon /> : <FiSun />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Open mobile menu"
            aria-expanded={open}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-xl border md:hidden"
            style={{ background: 'var(--surface)', borderColor: 'var(--surface-border)' }}
          >
            <span className="block h-[2px] w-5 rounded" style={{ background: 'var(--text-secondary)' }} />
            <span className="block h-[2px] w-5 rounded" style={{ background: 'var(--text-secondary)' }} />
            <span className="block h-[2px] w-5 rounded" style={{ background: 'var(--text-secondary)' }} />
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t px-6 py-4 md:hidden"
          style={{ background: 'var(--nav-bg)', borderColor: 'var(--surface-border)' }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-lg font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
