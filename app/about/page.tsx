import { PageHeader } from '@/components/PageHeader';
import type { Metadata } from 'next';
import { nowItems, beforeItems } from '@/content/experience';
import { FiCpu, FiMessageSquare, FiCode, FiTool } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Amirahmad Shafiee: AI researcher and builder, CS at Sharif. Linguistics x AI, Persian NLP/voice, Kolbeh founder, audit and automation practice.',
  alternates: { canonical: 'https://aahmads.github.io/about/' },
};

const skills = [
  {
    title: 'Machine Learning',
    Icon: FiCpu,
    items: ['Deep Learning', 'Reinforcement Learning', 'Computer Vision', 'PyTorch', 'TensorFlow'],
  },
  {
    title: 'NLP & AI',
    Icon: FiMessageSquare,
    items: ['Natural Language Processing', 'Conversational AI', 'Transformers', 'BERT', 'LLMs'],
  },
  {
    title: 'Programming',
    Icon: FiCode,
    items: ['Python', 'JavaScript', 'Java', 'C++', 'SQL'],
  },
  {
    title: 'Tools & Frameworks',
    Icon: FiTool,
    items: ['Git', 'Docker', 'Jupyter', 'Linux', 'AWS'],
  },
];

const focusTags = [
  'Natural Language Processing',
  'Conversational AI',
  'Vision-Language Models',
  'Reinforcement Learning',
  'Linguistics',
  'Machine Learning',
];

export default function AboutPage() {
  return (
    <div className="pb-24">
      <PageHeader
        eyebrow="// 01 — About"
        title={<>Bridging Language <span className="gradient-text">&amp; Intelligence</span></>}
        subtitle="A snapshot of who I am, what I research, and the tools I use."
      />

      <div className="mx-auto max-w-[1160px] px-6">
        <div className="glass-card p-8">
          <div className="max-w-3xl space-y-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <p>
              I&rsquo;m a <strong className="font-semibold" style={{ color: 'var(--text-primary)' }}>Computer Science</strong> graduate
              of <strong className="font-semibold" style={{ color: 'var(--text-primary)' }}>Sharif University of Technology</strong>, driven by a deep
              fascination with the intersection of <strong className="font-semibold" style={{ color: 'var(--text-primary)' }}>linguistics and artificial intelligence</strong>.
              My research interests span Natural Language Processing, Conversational AI systems, Vision-Language Models, and
              Reinforcement Learning — and how these combine into more intelligent, human-like AI.
            </p>
            <p>
              Through academic projects and research collaborations, I&rsquo;ve gained experience developing novel approaches to
              problems in software engineering, blockchain technology, and computer vision. Since 2025 I built full-stack AI
              products in Persian and English — most notably the Kolbeh real-estate platform, my startup attempt that shut
              down in January 2026 — alongside applied AI work (Wisdom-Era), FinTech multi-agent systems (Yara),
              and my private company Chantex.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl font-bold">Research Focus</h2>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {focusTags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <h2 className="mt-12 font-display text-2xl font-bold">Education</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="glass-card p-6">
            <div className="font-mono text-xs uppercase tracking-wider" style={{ color: 'var(--brand-start)' }}>
              2020 — 2025 · B.Sc. Computer Science
            </div>
            <h3 className="mt-2 font-display text-lg font-bold">Sharif University of Technology</h3>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              Admitted to Industrial Engineering, transferred to Computer
              Science. GPA 17.38/20 over 134 units — above department (16.86) and university (16.17) averages.
              B.Sc. project 20/20; graduate-level NLP 19.3/20.
            </p>
          </div>
          <div className="glass-card p-6">
            <div className="font-mono text-xs uppercase tracking-wider" style={{ color: 'var(--brand-start)' }}>
              Research impact · Google Scholar
            </div>
            <h3 className="mt-2 font-display text-lg font-bold">23 citations · h-index 2</h3>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              4 listed works: SDPERL (17), Emo3D at NAACL 2025 Findings, Lightning Network at JRSS Series A 2026,
              and the 2025 agentic defect-prediction preprint. Verified sharif.edu profile.
            </p>
          </div>
        </div>

        <h2 className="mt-12 font-display text-2xl font-bold">Skills</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {skills.map((s) => (
            <div key={s.title} className="glass-card p-6">
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg text-xl text-white"
                style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
              >
                <s.Icon />
              </div>
              <h3 className="font-display font-bold">{s.title}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.items.map((i) => (
                  <span key={i} className="rounded border px-2 py-0.5 font-mono text-xs"
                    style={{ borderColor: 'var(--surface-border)', color: 'var(--text-secondary)' }}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-12 font-display text-2xl font-bold">
          What I do <span className="gradient-text">now</span>
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          {nowItems.map((e) => (
            <div key={e.title} className="glass-card p-6">
              <div className="font-mono text-xs uppercase tracking-wider" style={{ color: 'var(--brand-start)' }}>
                {e.period} · {e.org}
              </div>
              <h3 className="mt-2 font-display text-lg font-bold">{e.title}</h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{e.detail}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 font-display text-2xl font-bold">
          What I have <span className="gradient-text">done</span>
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          {beforeItems.map((e) => (
            <div key={e.title} className="glass-card p-6">
              <div className="font-mono text-xs uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                {e.period} · {e.org}
              </div>
              <h3 className="mt-2 font-display text-lg font-bold">{e.title}</h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>{e.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
