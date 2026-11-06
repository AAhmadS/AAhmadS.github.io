import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = { title: 'Page not found' };

const destinations = [
  { href: '/research', label: 'Research' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function NotFound() {
  return (
    <>
      <PageHeader
        title="Page not found"
        subtitle="This address does not lead to a page on the site. It may have moved, or the link may have a typo."
      />
      <nav className="container-site pb-24" aria-label="Pages you can open instead">
        <ul role="list" className="m-0 flex list-none flex-wrap gap-3 p-0">
          <li>
            <Link href="/" className="btn-primary">
              Home
            </Link>
          </li>
          {destinations.map((d) => (
            <li key={d.href}>
              <Link href={d.href} className="btn-secondary">
                {d.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
