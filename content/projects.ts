import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    slug: 'kolbeh-platform',
    title: 'Kolbeh — AI Real-Estate Platform',
    badge: 'Venture · Flagship',
    summary:
      'Full-stack property platform (mykolbeh.com): C# ASP.NET backend with OTP/JWT auth and AI pricing APIs, Next.js client, Nuxt landing, and an ML pricer (CatBoost/XGBoost/LightGBM, MAPE ~0.15). Live and actively developed.',
    description:
      'My main venture. Backend: ASP.NET Core 8 + EF/Postgres + Redis + SignalR — 18 controllers covering OTP/JWT users, SmartRealEstatePricing (incl. V2 background jobs), estate delegation, ads, wishlist, location, blog. AI pricer: FastAPI service (CatBoost/XGBoost/LightGBM) fed by property crawlers, calling back into the pricing API. Frontends: Next.js client (Orval-generated API layer) and a Nuxt SEO landing. Deployed on Liara; mykolbeh.com. Status: live, in active development — backend and pricer are production-critical, so integration work happens around them, not in them.',
    tech: ['C#', 'ASP.NET Core', 'Postgres', 'Next.js', 'Nuxt', 'FastAPI', 'CatBoost'],
    links: [{ label: 'Website', href: 'https://mykolbeh.com' }],
    year: '2025–2026',
    kind: 'venture',
    status: 'Live · active',
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
    slug: 'open-timelogger',
    title: 'OpenTimeLogger (Interval)',
    badge: 'Tool · OSS',
    summary:
      'MIT-licensed Windows time tracker: overlap sessions, analytics dashboard, Excel export, BYOK 3-agent AI plus voice. Released.',
    description:
      'Open-source time tracking (pywebview desktop): overlapping sessions, analytics, Excel export, and bring-your-own-key AI assistance with voice input. Part of my personal productivity trio with OpenTaskManager and OpenPointLogger — built to log exactly the kind of work this site describes.',
    tech: ['Python', 'pywebview', 'SQLite'],
    links: [],
    year: '2025–2026',
    kind: 'tool',
    status: 'Released · MIT',
  },
  {
    slug: 'open-taskmanager',
    title: 'OpenTaskManager (STEADY)',
    badge: 'Tool · OSS',
    summary:
      'Focus manager PWA: 5 priorities, Ingest→Timetable agent, offline IndexedDB, Telegram/QR sync. Extensively tested.',
    description:
      'React 18 + Vite + Electron/Capacitor PWA for focus management: five priority lanes, an Ingest-to-Timetable agent, local-first IndexedDB storage with Telegram and QR sync, BYOK AI. Ships with an extensive test suite and design previews.',
    tech: ['React', 'Vite', 'Electron', 'IndexedDB'],
    links: [],
    year: '2025–2026',
    kind: 'tool',
    status: 'Released',
  },
  {
    slug: 'open-pointlogger',
    title: 'OpenPointLogger (Trailmark)',
    badge: 'Tool · OSS',
    summary:
      'MIT research logger: global hotkey glass capture, 3 citation kinds, compose→verify export to HTML/PDF/MD/DOCX, PyInstaller exe. Released.',
    description:
      'Windows research-capture tool (pywebview): Ctrl+Alt+P glass capture anywhere, three citation kinds, a compose-then-verify export pipeline to HTML/PDF/MD/DOCX, BYOK AI. MIT-licensed with a packaged .exe release.',
    tech: ['Python', 'pywebview', 'PyInstaller'],
    links: [],
    year: '2025–2026',
    kind: 'tool',
    status: 'Released · MIT',
  },
  {
    slug: 'option-lab',
    title: 'Option Lab — TSE Options Research',
    badge: 'Tool · Quant',
    summary:
      'Tehran Stock Exchange options lab: TSETMC crawl, Black-Scholes/binomial/Monte-Carlo pricing, GARCH/SABR/SSVI, deep-hedge and PPO experiments, 179 tests.',
    description:
      'Research-grade options toolkit for the TSE: Playwright TSETMC crawler, full pricing stack (Black-Scholes, binomial, Monte-Carlo), volatility surfaces (GARCH, SABR, SSVI, PINN), deep-hedging and PPO hedging experiments, an LLM ranker, and a walk-forward harness with HTML reports — 179 tests backing it.',
    tech: ['Python', 'Playwright', 'PyTorch', 'GARCH'],
    links: [],
    year: '2025–2026',
    kind: 'tool',
    status: 'Research-grade',
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
    title: 'finAI — Auto-Accounting + Invoice OCR',
    badge: 'Venture',
    summary:
      'Persian auto-accounting (Vue + FastAPI + Mistral) plus an agentic vision-OCR pipeline turning invoice photos into JSON/XLSX.',
    description:
      'Two halves: First-Agent, an auto-accounting web app (Vue 3 + FastAPI + Mistral) with admin gating; and Invoice-OCR, a LangGraph vision pipeline where Persian invoice photos go through Gemini/OpenRouter/AvalAI/Qwen-VL models into structured JSON and XLSX. Built for real bookkeeping pain, not demos.',
    tech: ['FastAPI', 'Vue 3', 'LangGraph', 'Mistral'],
    links: [],
    year: '2025–2026',
    kind: 'venture',
    status: 'In development',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
