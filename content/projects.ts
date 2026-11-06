import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    slug: 'kolbeh-platform',
    title: 'Kolbeh — AI Real-Estate Startup',
    badge: 'Startup · Closed Jan 2026',
    summary:
      'An AI-powered property marketplace and valuation platform (Mar 2025 – Jan 2026), closed in January 2026. I built its engineering team and led product development as Director of Technology, after starting as Product Manager and Data Scientist.',
    description:
      'Kolbeh was an AI real-estate startup building a property marketplace and valuation platform. I joined in March 2025 as Product Manager and Data Scientist and became Director of Technology in July 2025. I built the engineering team from the ground up and led product development. I managed development of the automated property valuation engine and developed its data crawling, which collected the market listings its pricing models were trained on. I also managed full-stack development across the core backend, the client web application and the acquisition landing pages. The company closed in January 2026.',
    tech: ['ASP.NET Core', 'Next.js', 'Nuxt'],
    links: [],
    year: 'Mar 2025 – Jan 2026',
    kind: 'venture',
    status: 'Closed January 2026',
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
      { label: 'GitHub', href: 'https://github.com/incentivus/Lightning-Network-Centralization' },
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
    slug: 'finai-accounting',
    title: 'Hambast — Accounting Automation',
    badge: 'Hambast · Wisdom Era',
    summary:
      'A Persian-language accounting platform centered on agentic workflow automation: bookkeeping, VAT compliance, AI-assisted journal entries and role-based access control. First live case: the company accounting of **[ModAI](https://modai.fashion)**.',
    description:
      'Hambast is a Persian-language accounting platform centered on agentic workflow automation, developed within Wisdom Era since July 2026. It handles bookkeeping, VAT compliance, AI-assisted journal entries and role-based access control, and is built with Vue 3, FastAPI and LangGraph. It was deployed on its first live case, the company accounting of **[ModAI](https://modai.fashion)**.',
    tech: ['Vue 3', 'FastAPI', 'LangGraph'],
    links: [
      { label: 'Hambast', href: 'https://hambast.ir' },
      { label: 'Wisdom Era', href: 'https://www.wisdomera.net/' },
    ],
    year: 'Jul 2026 – present',
    kind: 'venture',
    status: 'Active',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
