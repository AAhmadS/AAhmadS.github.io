export interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  detail: string;
}

export const nowItems: ExperienceItem[] = [
  {
    period: 'Now',
    title: 'Chantex — private company',
    org: 'Private',
    detail:
      'My business company, kept deliberately quiet. Products: Interval (time intelligence), Trailmark (research capture), STEADY (focus management). See the Chantex tab — methods undisclosed.',
  },
  {
    period: 'Now',
    title: 'Wisdom-Era — applied AI work',
    org: 'Working experience',
    detail:
      'Techniques, not pointers: Persian speech pipelines with word/sub-word/character error benches; agentic document OCR from photos to checked schemas; website and social audit pipelines with deterministic QA gates; options-research tooling with walk-forward harnesses. The Hambast Fin-AI company grows out of this work.',
  },
  {
    period: 'Now',
    title: 'Ongoing paper — TRL',
    org: 'Research',
    detail:
      'Tutor-to-student DPO story generation (Qwen3-8B → Llama-3.2-1B on ROCStories). The one paper in active progress.',
  },
];

export const beforeItems: ExperienceItem[] = [
  {
    period: '2025–Jan 2026',
    title: 'Founder — Kolbeh AI real-estate platform (failed)',
    org: 'mykolbeh.com',
    detail:
      'My startup attempt: ASP.NET pricing/auth backend, ML pricer, Next.js client, Nuxt landing. Shut down January 2026 — it did not make it. The engineering feeds everything since.',
  },
  {
    period: 'Working experience',
    title: 'Yara — multi-agent FinTech system',
    org: 'Yara',
    detail:
      'Deployed a multi-agent system for FinTech: LangChain/LangGraph agents with evaluation tooling, prompt-optimization loops, and a LangServe deployment surface — including an LLM-as-judge design for the domain chatbots.',
  },
  {
    period: '2024–2026',
    title: '2 published · 2 under review · 2 unfinished',
    org: 'Sharif + collaborators',
    detail:
      'Published: Emo3D (NAACL 2025 Findings) and Lightning Network JCNSRA (JRSS Series A 2026). Under review: SDPERL and the agentic defect-prediction preprint. Unfinished: LLM-evaluation and X-Bliva.',
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
    title: 'Chair (دبیر), Mathematical Sciences Student Council',
    org: 'Sharif University of Technology',
    detail:
      'Elected head of the department student council, Nov 2022–Jun 2023. Contributor, GNN study group (Prof. Sarbazi-Azad).',
  },
  {
    period: '2020–2025',
    title: 'B.Sc. Computer Science — completed',
    org: 'Sharif University of Technology',
    detail: 'Graduated over a year ago. GPA 17.38/20; B.Sc. project 20/20; graduate-level NLP 19.3/20.',
  },
];
