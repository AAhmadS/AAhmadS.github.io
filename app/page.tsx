import Link from 'next/link';
import { projects } from '@/content/projects';
import { papers } from '@/content/research';
import { domains } from '@/content/domains';
import { regrets } from '@/content/regrets';
import { SiGithub, SiGooglescholar, SiTelegram } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const socials = [
  { label: 'GitHub', href: 'https://github.com/AAhmadS', Icon: SiGithub },
  {
    label: 'Scholar',
    href: 'https://scholar.google.com/citations?user=bmO8gCYAAAAJ&hl=en',
    Icon: SiGooglescholar,
  },
  { label: 'Email', href: 'mailto:shafieeamirahmadii@gmail.com', Icon: FiMail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amirahmad-shafiee', Icon: FaLinkedinIn },
  { label: 'Telegram', href: 'https://t.me/notamira', Icon: SiTelegram },
];

const roles = [
  'AI Researcher & Builder',
  'Persian NLP & Voice Agents',
  'Vision-Language Models',
  'Reinforcement Learning',
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100vh] items-center overflow-hidden pt-[68px]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,.12) 0%, transparent 70%)' }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-[10%] -left-[5%] h-[400px] w-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,.08) 0%, transparent 70%)' }}
        />

        <div className="mx-auto grid w-full max-w-[1160px] gap-12 px-6 md:grid-cols-[1fr_380px] md:items-center">
          <div>
            <p className="font-mono text-sm" style={{ color: 'var(--text-tertiary)' }}>
              <span style={{ color: 'var(--brand-start)' }}>//</span> ai-researcher · sharif-university
            </p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.08] tracking-tight md:text-[4.5rem]">
              Amirahmad
              <br />
              <span className="gradient-text">Shafiee</span>
            </h1>
            <p className="mt-4 font-display text-xl font-semibold" style={{ color: 'var(--brand-start)' }}>
              {roles[0]}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {roles.slice(1).map((r) => (
                <span key={r} className="tag">{r}</span>
              ))}
            </div>
            <p className="mt-6 max-w-[540px] text-lg" style={{ color: 'var(--text-secondary)' }}>
              Sharif CS undergrad working where linguistics meets AI — 3 published papers, the live Kolbeh
              real-estate AI platform, Persian voice agents, and open tools I actually use.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/research" className="btn-primary">View Research</Link>
              <Link href="/domains" className="btn-secondary">Domains of Interest</Link>
            </div>
          </div>

          {/* Profile card */}
          <div className="glass-card p-8 text-center">
            <div
              className="mx-auto mb-5 h-[140px] w-[140px] overflow-hidden rounded-full border-[3px]"
              style={{ borderColor: 'var(--brand-start)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://avatars.githubusercontent.com/u/83911837?v=4"
                alt="Amirahmad Shafiee"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
            <div className="font-display text-xl font-bold">Amirahmad Shafiee</div>
            <div className="font-mono text-xs" style={{ color: 'var(--brand-start)' }}>AI Researcher</div>
            <div className="mt-1 text-sm" style={{ color: 'var(--text-secondary)' }}>
              Sharif University of Technology
            </div>
            <div className="my-5 h-px" style={{ background: 'var(--surface-border)' }} />
            <div className="flex justify-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border text-base transition-all hover:-translate-y-0.5"
                  style={{
                    background: 'var(--surface)',
                    borderColor: 'var(--surface-border)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS OVERVIEW */}
      <section className="py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <h2 className="font-display text-3xl font-bold">
            Explore <span className="gradient-text">my work</span>
          </h2>
          <p className="mt-3 max-w-2xl text-lg" style={{ color: 'var(--text-secondary)' }}>
            Research, open-source projects, and the domains I study — with public discussion on my ideas and notes.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Link href="/research" className="glass-card p-7">
              <div className="section-label">Research</div>
              <h3 className="mt-3 font-display text-xl font-bold">Publications</h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {papers.filter((p) => p.venue !== 'In progress').length} published + {papers.filter((p) => p.venue === 'In progress').length} in-progress across NLP, RL, and vision-language research.
              </p>
            </Link>
            <Link href="/projects" className="glass-card p-7">
              <div className="section-label">Ventures & Tools</div>
              <h3 className="mt-3 font-display text-xl font-bold">Projects</h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {projects.length} curated: Kolbeh platform, research implementations, and open tools.
              </p>
            </Link>
            <Link href="/domains" className="glass-card p-7">
              <div className="section-label">Knowledge</div>
              <h3 className="mt-3 font-display text-xl font-bold">Domains of Interest</h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {domains.length} domains with studied items, findings, notes, and ideas — plus public chat.
              </p>
            </Link>
            <Link href="/regrets" className="glass-card p-7">
              <div className="section-label">Honesty</div>
              <h3 className="mt-3 font-display text-xl font-bold">Regrets</h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {regrets.length} unfinished projects, what each taught, and the capabilities they left.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
