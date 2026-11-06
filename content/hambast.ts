export interface HambastInfo {
  name: string;
  line: string;
  period: string;
  summary: string;
  capabilities: string[];
  tools: string[];
  firstCase: string;
  links: { label: string; href: string }[];
}

export const hambast: HambastInfo = {
  name: 'Hambast',
  line: 'Accounting automation',
  period: 'Jul 2026 – present',
  summary:
    'A Persian-language accounting platform centered on agentic workflow automation, developed within Wisdom Era.',
  capabilities: [
    'Bookkeeping',
    'VAT compliance',
    'AI-assisted journal entries',
    'Role-based access control',
  ],
  tools: ['Vue 3', 'FastAPI', 'LangGraph'],
  firstCase:
    'Deployed on its first live case, the company accounting of **[ModAI](https://modai.fashion)**.',
  links: [
    { label: 'Hambast', href: 'https://hambast.ir' },
    { label: 'Wisdom Era', href: 'https://www.wisdomera.net/' },
  ],
};
