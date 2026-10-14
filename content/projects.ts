import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    slug: 'kolbeh-platform',
    title: 'Kolbeh — AI Real-Estate Platform',
    badge: 'Venture · Shut down Jan 2026',
    summary:
      'My startup attempt (2025–Jan 2026): full-stack property platform (mykolbeh.com) with C# ASP.NET OTP/JWT backend, ML pricer (MAPE ~0.15), Next.js client, and Nuxt landing. It failed — documented here honestly.',
    description:
      'My startup attempt, now finished. Backend: ASP.NET Core 8 + EF/Postgres + Redis + SignalR — 18 controllers covering OTP/JWT users, SmartRealEstatePricing (incl. V2 background jobs), estate delegation, ads, wishlist, location, blog. AI pricer: FastAPI service (CatBoost/XGBoost/LightGBM) fed by property crawlers, calling back into the pricing API. Frontends: Next.js client (Orval-generated API layer) and a Nuxt SEO landing, deployed on Liara. The venture did not survive — it shut down in January 2026 — but the engineering (auth, pricing pipeline, bilingual product) feeds everything I build since.',
    tech: ['C#', 'ASP.NET Core', 'Postgres', 'Next.js', 'Nuxt', 'FastAPI', 'CatBoost'],
    links: [{ label: 'Website', href: 'https://mykolbeh.com' }],
    year: '2025–Jan 2026',
    kind: 'venture',
    status: 'Shut down · failed startup',
  },
  {
    slug: 'foreign-word-detector',
    title: 'Foreign Word Detector',
    badge: 'NLP',
    summary:
      'Sharif NLP coursework on Persian text: detects and translates non-Persian words embedded in Persian writing, with a unique corpus of Persian-written English words.',
    description:
      'Built for the NLP course at Sharif (19.3/20). A classical-ML pipeline over Persian text that spots foreign-word intrusions and translates them — trained on a purpose-built corpus of Persian-written English words. Early work that led into my Persian/English language focus.',
    tech: ['Python', 'scikit-learn', 'Jupyter'],
    links: [
      { label: 'GitHub', href: 'https://github.com/AAhmadS/Foreign-word-detector' },
    ],
    year: '2024',
    kind: 'research',
    status: 'Archived',
  },
  {
    slug: 'philosophical-text-classification',
    title: 'Philosophical Text Classification',
    badge: 'NLP',
    summary:
      'Trains BERT to attribute philosophical texts to Nietzsche, Kant, or Hegel — authorship classification on abstract long-form prose.',
    description:
      'Coursework project fine-tuning BERT to classify authors of philosophical texts across Nietzsche, Kant, and Hegel — an early test of how far semantic representations carry on long, abstract prose.',
    tech: ['Python', 'Transformers', 'Jupyter'],
    links: [
      { label: 'GitHub', href: 'https://github.com/AAhmadS/Philosophical-Text-Classification' },
    ],
    year: '2024',
    kind: 'research',
    status: 'Archived',
  },
  {
    slug: 'lightning-network-centralization',
    title: 'Lightning Network Centralization',
    badge: 'RL',
    summary:
      'Research code for the JCNSRA paper: transformer-enhanced DRL for node selection + resource allocation in the Lightning Network.',
    description:
      'Implementation behind the Lightning-Network-RL paper (arXiv:2411.17353): Gym-style environment with improved LN routing, PPO/A2C baselines plus the attention-based agent, NetworkX graph analysis and TensorBoard logging. See the Research page for the paper.',
    tech: ['Python', 'PyTorch', 'Stable-Baselines3', 'NetworkX'],
    links: [
      { label: 'GitHub', href: 'https://github.com/AAhmadS/Lightning-Network-Centralization' },
    ],
    year: '2024',
    kind: 'research',
    status: 'Paper published',
  },
  {
    slug: 'llama-clipvit',
    title: 'LLaMA ClipViT',
    badge: 'Multimodal',
    summary:
      'Medical vision-language experiments: few-shot and fine-tuned evaluation of BLIVA, MedFlamingo, LLaVA-Med, RadFM, CogVLM on Indiana chest X-rays.',
    description:
      'Research prototype comparing state-of-the-art medical vision-language models on chest-X-ray tasks (Indiana dataset): few-shot and fine-tuning protocols, SOTA benchmark aggregation, plus TextGrad experiments. Grew out of the earlier LLaMA-Quantization attention-layer work.',
    tech: ['Python', 'PyTorch', 'Hugging Face', 'LLaMA', 'CLIP'],
    links: [
      { label: 'GitHub', href: 'https://github.com/AAhmadS/LLaMA_ClipViT' },
    ],
    year: '2024',
    kind: 'research',
    status: 'Prototype',
  },
  {
    slug: 'iresearcher',
    title: 'iResearcher — Agentic Research Assistant',
    badge: 'Tool · Agents',
    summary:
      'Markdown/LaTeX repo-as-app: digest, scholar, paper, explore, and bilingual (EN/FA) market-research agents with Telegram delivery. In active use.',
    description:
      'My daily research driver: a Node + Mistral-Large-3 agent workspace where each capability (paper digest, scholar lookup, deep explore, Iran-focused bilingual market research with HTML+PDF output) is a markdown app. Research outputs render to styled reports and ship via a Telegram bot. Powers the market-research behind my studio work.',
    tech: ['Node.js', 'Mistral', 'Markdown', 'LaTeX', 'Telegram'],
    links: [],
    year: '2025–2026',
    kind: 'tool',
    status: 'Active',
  },
  {
    slug: 'crm-mini',
    title: 'CRM-Mini — AI Real-Estate CRM',
    badge: 'Venture',
    summary:
      'Multi-channel (Telegram/WhatsApp/SMS) real-estate CRM: FastAPI + LangGraph/Mistral agents, Postgres/Redis/Elastic, React dashboard, Persian templates.',
    description:
      'Phase-2-hardened AI CRM for property sales: LangGraph agents on Mistral handle multi-channel follow-ups (Telegram MTProto DMs, WhatsApp, SMS) with Persian templates, over FastAPI + SQLAlchemy/Alembic with Postgres, Redis, and Elastic. React dashboard for agents. Dockerized.',
    tech: ['FastAPI', 'LangGraph', 'Mistral', 'Postgres', 'React'],
    links: [],
    year: '2025',
    kind: 'venture',
    status: 'Phase 2',
  },
  {
    slug: 'finai-accounting',
    title: 'Hambast — Auto-Accounting + Invoice OCR',
    badge: 'Hambast · Wisdom-Era',
    summary:
      'Hambast company product: Persian auto-accounting (Vue + FastAPI + Mistral) plus an agentic vision-OCR pipeline turning invoice photos into JSON/XLSX.',
    description:
      'Two halves of the Hambast Fin-AI company: First-Agent, an auto-accounting web app (Vue 3 + FastAPI + Mistral) with admin gating; and Invoice-OCR, a LangGraph vision pipeline where Persian invoice photos go through vision-language models into structured JSON and XLSX with a checked-in invoice schema. Built for real bookkeeping pain, not demos. See the Hambast tab for the company.',
    tech: ['FastAPI', 'Vue 3', 'LangGraph', 'Mistral'],
    links: [],
    year: '2025–2026',
    kind: 'venture',
    status: 'Becoming Hambast',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
