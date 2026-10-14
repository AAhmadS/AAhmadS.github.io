export interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  detail: string;
}

export const nowItems: ExperienceItem[] = [
  {
    period: 'Now',
    title: 'Founder / Builder — Kolbeh AI real-estate platform',
    org: 'mykolbeh.com',
    detail:
      'Live platform: ASP.NET pricing/auth backend, ML pricer, Next.js client, Nuxt landing. Production-critical; integration-first development.',
  },
  {
    period: 'Now',
    title: 'AI practice — voice, audits, automation',
    org: 'Studio work',
    detail:
      'Persian voice agents (Baghboon), website/Instagram audit pipeline with Persian RTL reports, crowdfunding and ordering agents, market-research agents.',
  },
  {
    period: 'Now',
    title: 'Open-source tools',
    org: 'MIT where released',
    detail:
      'OpenTimeLogger, OpenTaskManager, OpenPointLogger, iResearcher agent, TSE Option Lab.',
  },
];

export const beforeItems: ExperienceItem[] = [
  {
    period: '2024',
    title: '3 arXiv papers',
    org: 'Sharif + collaborators',
    detail:
      'SDPERL (defect prediction + RL), Lightning Network JCNSRA (attention RL), Emo3D (3D faces dataset + metric).',
  },
  {
    period: '2024',
    title: 'Medical VLM + quantization prototypes',
    org: 'Research',
    detail:
      'LLaMA ClipViT chest-X-ray benchmarks; LLaMA attention-layer quantization groundwork.',
  },
  {
    period: '2023',
    title: 'Started: 3D faces from text',
    org: '3D-Face-Generation',
    detail:
      'Text-to-3D-face models with multilingual embeddings — the seed of the Emo3D paper.',
  },
  {
    period: '2022–2023',
    title: 'AI Intern — Classical Machine Learning',
    org: 'Roshan-AI',
    detail:
      'Industry internship on classical ML, alongside the degree. Jul 2022–Oct 2023.',
  },
  {
    period: '2024',
    title: 'Teaching Assistant — ML, Automata (×2), Statistics (×2)',
    org: 'Sharif University of Technology',
    detail:
      'TA for Machine Learning, Theory of Languages and Automata (twice), and Statistics and Applications (twice).',
  },
  {
    period: '2022–2023',
    title: 'Secretary, Mathematical Sciences Students’ Union',
    org: 'Sharif University of Technology',
    detail:
      'Elected secretary of the department student union, Nov 2022–Jun 2023. Contributor, GNN study group (Prof. Sarbazi-Azad).',
  },
  {
    period: 'Ongoing',
    title: 'B.Sc. Computer Science',
    org: 'Sharif University of Technology',
    detail: 'Undergraduate; focus on linguistics x AI. Tehran, Iran.',
  },
];
