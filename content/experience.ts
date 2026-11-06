import { papers } from './research';

export interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  /** One-sentence plain summary. */
  detail: string;
  href?: string;
  tag?: string;
  bullets?: string[];
  tools?: string[];
  children?: ExperienceItem[];
}

const publishedCount = papers.filter((p) => p.group === 'published').length;
const underReviewCount = papers.filter((p) => p.group === 'under-review').length;
const unfinishedCount = papers.filter((p) => p.group === 'unfinished').length;

export const nowItems: ExperienceItem[] = [
  {
    period: 'Sep 2026 – present',
    title: 'Agentic chatbot for crowdfunding',
    org: 'Carinx',
    href: 'https://carinx.ir',
    tag: 'Company',
    detail:
      'A customer-facing agentic chatbot built with domain financial experts: lead qualification, onboarding and request triage.',
    bullets: [
      'Architect and build a customer-facing agentic chatbot in close collaboration with domain financial experts, automating lead qualification, onboarding, and request triage to improve conversion rates and route high-value inquiries to domain experts.',
      'Designed the full-stack system, from the web client and FastAPI backend to the containerized databases, around a LangGraph agentic core in which fast System 1 routing models choose each turn’s path and a multi-stage RAG layer grounds the answers.',
    ],
    tools: ['Next.js', 'FastAPI', 'LangGraph', 'PostgreSQL with pgvector', 'Redis', 'Docker'],
  },
  {
    period: 'Mar 2026 – present',
    title: 'Applied AI for accounting and agriculture',
    org: 'Wisdom Era',
    href: 'https://www.wisdomera.net/',
    tag: 'Company',
    detail: 'Hambast (accounting automation) and Baghboon (voice agent and product matching).',
    children: [
      {
        period: 'Jul 2026 – present',
        title: 'Accounting automation',
        org: 'Hambast',
        href: 'https://hambast.ir',
        detail: 'A Persian-language accounting platform centered on agentic workflow automation.',
        bullets: [
          'Develop a Persian-language accounting platform centered on agentic workflow automation, handling bookkeeping, VAT compliance, AI-assisted journal entries, and role-based access control.',
          'Deployed the platform on its first live case, the company accounting of **[ModAI](https://modai.fashion)**.',
        ],
        tools: ['Vue 3', 'FastAPI', 'LangGraph'],
      },
      {
        period: 'Mar 2026 – Jun 2026',
        title: 'Voice agent and product matching',
        org: 'Baghboon',
        href: 'https://baghboon.com',
        detail:
          'A Persian voice agent, speech-to-text benchmarks, and an entity-resolution pipeline for product matching.',
        bullets: [
          'Built a 5-module, end-to-end Persian voice agent (ASR–LLM–TTS) featuring turn detection, noise suppression, and time-to-first-token (TTFT) latency optimizations.',
          'Benchmarked speech-to-text models across word, sub-word, and character error rates alongside latency and cost metrics to drive empirical model selection.',
          'Engineered a modular entity-resolution pipeline for Persian records containing transliterated foreign-language terms; benchmarked dense encoders and orchestrated iterative LLM, graph-clustering, and human-in-the-loop workflows.',
        ],
        tools: ['LLM extraction', 'K-Means clustering', 'graph community detection', 'B-cubed evaluation'],
      },
    ],
  },
  {
    period: 'Now',
    title: 'Chantex — private company',
    org: 'Private',
    detail:
      'My business company, kept deliberately quiet. Products: Interval (time intelligence), Trailmark (research capture), STEADY (focus management). See the Chantex tab — methods undisclosed.',
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
    period: 'Mar 2025 – Jan 2026',
    title: 'AI real-estate startup (closed in January 2026)',
    org: 'Kolbeh',
    tag: 'Company',
    detail:
      'Director of Technology (Jul 2025 – Jan 2026); earlier Product Manager and Data Scientist (Mar 2025 – Jul 2025).',
    bullets: [
      'Built the engineering team from the ground up and led product development for an AI-powered property marketplace and valuation platform.',
      'Managed development of the automated property valuation engine and developed its data crawling, collecting the market listings its pricing models were trained on.',
      'Managed full-stack development across the core backend, client web application, and acquisition landing pages.',
    ],
    tools: ['ASP.NET Core', 'Next.js', 'Nuxt'],
  },
  {
    period: 'Dec 2024 – Jul 2025',
    title: 'Conversational assistants and task-oriented dialogue',
    org: 'Yara',
    tag: 'Project',
    detail: 'Multi-agent fintech chatbots with an LLM-as-a-judge evaluation pipeline.',
    bullets: [
      'Built and deployed a production multi-agent architecture for fintech chatbots, decomposing workflows into atomic agent tasks to simplify fault isolation and observability.',
      'Designed a multi-dimensional LLM-as-a-judge evaluation pipeline and led calibration studies that increased agreement with human domain experts to ~80% on unambiguous cases.',
      'Improved retrieval precision with a multi-stage RAG stack (corrective and hierarchical RAG, multi-representation indexing, HyDE, query reformulation).',
    ],
    tools: ['LangChain', 'LangGraph', 'LangSmith'],
  },
  {
    period: '2024–2026',
    title: `${publishedCount} published · ${underReviewCount} under review · ${unfinishedCount} unfinished`,
    org: 'Sharif + collaborators',
    detail:
      'Published: Emo3D (NAACL 2025 Findings) and Lightning Network JCNSRA (JRSS Series A 2026). Under review: SDPERL and From Illusion to Insight (Journal of Systems and Software, after revision). Unfinished: LLM-evaluation and X-Bliva.',
  },
  {
    period: 'Jul 2022 – Oct 2023',
    title: 'AI Intern — classical machine learning',
    org: 'Roshan-AI',
    detail: 'Industry internship alongside the degree: oil-price forecasting models (XGBoost, SVM).',
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
    detail: 'Elected head of the department student council, Nov 2022 – Jun 2023.',
  },
  {
    period: 'Apr – Jul 2024',
    title: 'Academic Contributor — GNN study group',
    org: 'Prof. H. Sarbazi-Azad',
    detail: 'Contributor to the graph neural network study group of Prof. H. Sarbazi-Azad.',
  },
  {
    period: 'Oct 2020 – Sep 2025',
    title: 'B.Sc. Computer Science',
    org: 'Sharif University of Technology',
    detail:
      'Department of Mathematical Sciences. Final GPA 17.22/20; B.Sc. project 20/20; graduate-level NLP 19.3/20. Ranked 95th among more than 50,000 candidates (top 0.2%) in the 2020 National University Entrance Exam (Konkur), Mathematics and Physics track.',
  },
];
