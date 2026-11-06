'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { useTheme } from '@/lib/theme';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/projects', label: 'Projects' },
  { href: '/domains', label: 'Domains' },
  { href: '/chantex', label: 'Chantex' },
  { href: '/hambast', label: 'Hambast' },
  { href: '/becoming', label: 'Becoming' },
  { href: '/regrets', label: 'Regrets' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  // The menu is open only for the path it was opened on, so a route change closes it without an effect.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const menuButton = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  function onKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    if (e.key === 'Escape' && open) {
      setOpenPath(null);
      menuButton.current?.focus();
    }
  }

  return (
    <header className="site-header" onKeyDown={onKeyDown}>
      <div className="container-site site-header__bar">
        <Link href="/" className="wordmark" aria-label="Amirahmad Shafiee, home">
          Amirahmad Shafiee
        </Link>

        <nav className="hidden items-stretch gap-5 nav:flex" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
              aria-current={isActive(l.href) ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="icon-btn theme-toggle"
          >
            {theme === 'dark' ? <FiSun aria-hidden="true" size={18} /> : <FiMoon aria-hidden="true" size={18} />}
          </button>

          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpenPath(open ? null : pathname)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="icon-btn menu-btn nav:hidden"
          >
            <span>Menu</span>
            {open ? <FiX aria-hidden="true" size={18} /> : <FiMenu aria-hidden="true" size={18} />}
          </button>
        </div>
      </div>

      {/* Always in the DOM (hidden attribute) so aria-controls resolves and a no-JS fallback can reveal it. */}
      <div id="site-menu" className="site-menu nav:hidden" hidden={!open}>
        <nav className="container-site" aria-label="Main navigation">
          <ul role="list" className="m-0 list-none p-0">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="menu-link"
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  onClick={() => setOpenPath(null)}
                >
                  <span>{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
