export interface HambastProduct {
  name: string;
  line: string;
  detail: string;
}

export const hambastProducts: HambastProduct[] = [
  {
    name: 'First-Agent',
    line: 'Persian auto-accounting',
    detail:
      'Web app (Vue 3 + FastAPI + Mistral) with admin gating: bookkeeping flows, VAT handling, and model-assisted entry — built against real ledgers.',
  },
  {
    name: 'Invoice-OCR',
    line: 'Invoice photos → structured data',
    detail:
      'Agentic vision pipeline: Persian invoice photos through vision-language models into a checked-in invoice schema, exported as JSON and XLSX.',
  },
];
