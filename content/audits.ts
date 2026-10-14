export interface AuditEntry {
  period: string;
  gap: string;
  plan: string;
  evidence: string;
}

export const gaps: AuditEntry[] = [
  {
    period: '2020–2022',
    gap: 'Knew coursework, had never shipped anything real.',
    plan: 'Take the intern seat (Roshan-AI, classical ML) and TA rooms; learn how code survives contact with users and students.',
    evidence: 'Internship Jul 2022–Oct 2023; TA for ML, Automata ×2, Statistics ×2.',
  },
  {
    period: '2023',
    gap: 'Could train models, could not formulate research.',
    plan: 'Attach to strong supervisors and do the unglamorous parts: datasets, revisions, human evals.',
    evidence: 'Emo3D: dataset generation, Emotion-XLM experiments, top contributor to revision + human eval → NAACL 2025.',
  },
  {
    period: '2024',
    gap: 'Published papers, could not deploy anything.',
    plan: 'Build full-stack: backend, frontend, pricing models, auth — the whole boring stack.',
    evidence: 'Kolbeh platform (18 controllers, ML pricer, two frontends). It later failed — but the capability stayed.',
  },
  {
    period: '2025',
    gap: 'Could build, could not make it survive.',
    plan: 'Learn evaluation-first engineering: benches before models, QA gates before verdicts, tests before claims.',
    evidence: 'Voice benches (137 tests), audit pipelines with deterministic gates, Option Lab (179 tests).',
  },
];

export const powers: { domain: string; then: string; now: string }[] = [
  {
    domain: 'NLP & Evaluation',
    then: 'Grad NLP course, 19.3/20 — theory only.',
    now: 'SDPERL (17 cites), LLM-judge protocol design, definement-vs-scoring studies.',
  },
  {
    domain: 'Speech & Dialogue',
    then: 'No shipped conversational system.',
    now: 'Persian voice pipelines with error-rate benches; multi-agent FinTech dialogue at Yara.',
  },
  {
    domain: 'Vision-Language',
    then: 'Benchmark-chasing across six medical models.',
    now: 'Task-first metrics (Emo3D beat MSE); X-Bliva medical VQA under revision.',
  },
  {
    domain: 'Reinforcement Learning',
    then: 'Coursework-level RL.',
    now: 'JCNSRA paper (JRSS 2026): transformer-DRL on live-network economics; PPO hedging tooling.',
  },
  {
    domain: 'Shipping software',
    then: 'Jupyter notebooks.',
    now: 'Failed startup (full platform), private company (Chantex), Fin-AI company (Hambast).',
  },
];

export const ORG_URL = 'https://github.com/AAhmadS-Audit';
