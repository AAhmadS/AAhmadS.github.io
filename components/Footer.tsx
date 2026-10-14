import Link from 'next/link';
import { SiGithub, SiGooglescholar, SiTelegram } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const socials = [
  { label: 'GitHub', href: 'https://github.com/AAhmadS', Icon: SiGithub },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=bmO8gCYAAAAJ&hl=en',
    Icon: SiGooglescholar,
  },
  { label: 'Email', href: 'mailto:shafieeamirahmadii@gmail.com', Icon: FiMail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amirahmad-shafiee', Icon: FaLinkedinIn },
  { label: 'Telegram', href: 'https://t.me/notamira', Icon: SiTelegram },
];

export function Footer() {
  return (
    <footer className="border-t py-12"
      style={{ borderColor: 'var(--surface-border)' }}>
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-sm" style={{ color: 'var(--text-tertiary)' }}>
            Alibaba had Genie, 2026 Its called AI. I asked for, Genie built, more than 3
          </p>
          <div className="flex gap-2.5">
            {socials.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border text-base transition-all hover:-translate-y-px"
                style={{
                  background: 'var(--surface)',
                  borderColor: 'var(--surface-border)',
                  color: 'var(--text-secondary)',
                }}
              >
                <Icon />
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
