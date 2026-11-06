import { SiGithub, SiGooglescholar, SiTelegram } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { SmartLink } from './SmartLink';

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
    <footer className="site-footer mt-auto border-t border-line">
      <div className="container-site py-10">
        <p className="max-w-measure text-muted">
          Alibaba had Genie, 2026 Its called AI. I asked for, Genie built, more than 3
        </p>

        <ul role="list" className="m-0 mt-4 flex list-none flex-wrap gap-x-6 p-0">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <SmartLink href={href} allowMailto className="footer-link">
                <Icon aria-hidden="true" size={18} />
                <span>{label}</span>
              </SmartLink>
            </li>
          ))}
        </ul>

        <p className="meta mt-6 border-t border-line pt-6">
          © {new Date().getFullYear()} Amirahmad Shafiee. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
