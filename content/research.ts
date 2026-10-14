import type { Paper } from '@/lib/types';

export const papers: Paper[] = [
  {
    slug: 'sdperl',
    title:
      'SDPERL: A Framework for Software Defect Prediction Using Ensemble Feature Extraction and Reinforcement Learning',
    year: '2024',
    meta: '17 citations',
    venue: 'arXiv preprint · under review',
    group: 'under-review',
    summary:
      'File-level software defect prediction combining ensemble feature extraction (five code-specific pre-trained models) with PPO reinforcement-learning feature selection. +6.25% average F1 over baselines on PROMISE.',
    abstract:
      'We propose SDPERL, a framework for file-level software defect prediction that combines ensemble feature extraction with reinforcement-learning-based feature selection. Semantic and structural features are extracted with five code-specific pre-trained models; selection runs in a custom embedding space with an Ant-Colony-inspired pheromone table guiding a PPO agent to the most predictive features. Evaluated on the PROMISE dataset, it improves average F1-Score by 6.25% over traditional methods and baselines. With M. Hesamolhokama, M. Ahmaditeshnizi, M. Fazli, J. Habibi. 14 pages, arXiv:2412.07927.',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2412.07927' },
      {
        label: 'Scholar',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bmO8gCYAAAAJ&citation_for_view=bmO8gCYAAAAJ:zYLM7Y9cAGgC',
      },
    ],
  },
  {
    slug: 'lightning-network-rl',
    title:
      'Aligning Incentives and Resilience: Joint Node Selection and Resource Allocation in the Lightning Network',
    year: '2026',
    meta: '2 citations · equal contribution',
    venue: 'J. Royal Statistical Society Series A',
    group: 'published',
    summary:
      'Journal version of the JCNSRA work: transformer-enhanced deep RL for joint node selection + channel funding in Bitcoin\u2019s Lightning Network, with a more realistic routing simulation. Revenue incentives align with decentralization.',
    abstract:
      'Joining the Lightning Network for profit means solving a joint combinatorial problem: discrete node selection plus continuous resource allocation. We build a transformer-enhanced deep RL framework for this JCNSRA problem on an improved LN environment with a more realistic routing mechanism, and outperform baselines and heuristics across settings. Deploying the agent and tracking centrality shows no conflict between revenue-maximization incentives and decentralization — rather a positive association. Equal contribution with M. Salahshour, with M. Tefagh. Published in the Journal of the Royal Statistical Society Series A (2026); preprint arXiv:2411.17353. Implementation: Lightning-Network-Centralization repo.',
    links: [
      { label: 'arXiv preprint', href: 'https://arxiv.org/abs/2411.17353' },
      { label: 'Code', href: 'https://github.com/AAhmadS/Lightning-Network-Centralization' },
      {
        label: 'Scholar',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bmO8gCYAAAAJ&citation_for_view=bmO8gCYAAAAJ:d1gkVwhDpl0C',
      },
    ],
  },
  {
    slug: 'emo3d',
    title:
      'Emo3D: Metric and Benchmarking Dataset for 3D Facial Expression Generation from Emotion Description',
    year: '2025',
    meta: '2 citations · equal contribution',
    venue: 'Findings of NAACL 2025',
    group: 'published',
    summary:
      'Published at NAACL 2025 Findings (pp. 3158–3172): Text-Image-Expression dataset pairing LLM-generated emotion descriptions with images and 3D blendshapes, plus a new Emo3D metric that beats MSE at judging emotional fidelity.',
    abstract:
      'Emotion-conditioned 3D faces were bottlenecked by narrow emotion classes and thin datasets. Emo3D contributes a Text-Image-Expression dataset spanning a wide emotion spectrum — LLM-generated descriptions paired with images and 3D blendshapes — benchmarks fine-tuned language models and vision-language models (incl. CLIP) on expression synthesis, and introduces the Emo3D metric, shown superior to MSE for visual-text emotional alignment. Applications in animation, VR, and affective HCI. Equal contribution with M. Dehghani and A. Shafiei; with N. Fallah, F. Alizadeh, M. M. Gholinejad, H. Behroozi, J. Habibi, E. Asgari. Findings of the Association for Computational Linguistics: NAACL 2025, pp. 3158–3172. Preprint arXiv:2410.02049.',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2410.02049' },
      {
        label: 'Scholar',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bmO8gCYAAAAJ&citation_for_view=bmO8gCYAAAAJ:Tyk-4Ss8FVUC',
      },
    ],
  },
  {
    slug: 'illusion-to-insight',
    title:
      'From Illusion to Insight: Change-Aware File-Level Software Defect Prediction Using Agentic AI',
    year: '2025',
    meta: '2 citations',
    venue: 'arXiv preprint · under review',
    group: 'under-review',
    summary:
      'Follow-up to SDPERL: change-aware file-level defect prediction with agentic AI. With M. Hesamolhokama, B. Rouhani, M. Fazli, J. Habibi.',
    abstract:
      'Continuing the SDPERL line from static prediction toward agentic methods: change-aware file-level software defect prediction using agentic AI. With M. Hesamolhokama, B. Rouhani, M. Fazli, J. Habibi. Preprint arXiv:2512.23875 (2025). Listed here from my Scholar profile; details to expand once the camera-ready version lands.',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2512.23875' }],
  },
  {
    slug: 'x-bliva',
    title: 'X-Bliva: LVLMs Learn to Think Like a Radiologist',
    year: '2025',
    meta: 'Under revision · unfinished',
    venue: 'Unfinished',
    group: 'unfinished',
    summary:
      'Dataset + model for medical visual question answering in chest radiology: LLM-generated pipeline with prompt optimization and human verification, hand-crafted domain queries, and an LLM-as-a-Judge. Supervised by Prof. F. Firouzi (Duke).',
    abstract:
      'Medical VQA for chest radiology: a dataset-generation pipeline using in-context learning and LLMs, refined with automatic prompt optimization and human verification, plus X-Bliva — a Bliva variant with hand-crafted domain-specific queries — and an LLM-as-a-Judge built from two combined prompting techniques, which I designed. Supervised by Prof. F. Firouzi (Duke University). Paper under revision; no public preprint yet.',
    links: [],
  },
  {
    slug: 'trl',
    title: 'TRL: Tutorical Refinement Loop — Tutor-to-Student DPO Story Generation',
    year: '2026',
    meta: 'Ongoing',
    venue: 'Ongoing',
    group: 'ongoing',
    summary:
      'A tutor model (Qwen3-8B) refines a student (Llama-3.2-1B) via DPO on ROCStories, compared against three baselines. MIT-licensed repo with research tracker and CITATION.cff.',
    abstract:
      'TRL tests whether a stronger tutor model can systematically lift a small student generator: the tutor (Qwen3-8B) produces refinement signal for the student (Llama-3.2-1B) trained with DPO on ROCStories, evaluated against three baselines with a Mistral-based judge. Work in progress; repo carries a research tracker, LoRA/bitsandbytes setup, and CITATION.cff. No public preprint yet — this page will link it when released.',
    links: [],
  },
  {
    slug: 'llm-evaluation',
    title: 'Can LLMs Evaluate? Judging Summarization and Alignment Quality',
    year: '2025',
    meta: 'Unfinished',
    venue: 'Unfinished',
    group: 'unfinished',
    summary:
      'Definement-vs-scoring study of LLM judges (GPT-4o/mini, LLaMA-3.3-70B, Qwen2.5-32B, Mixtral-8x22B) on USR, SummEval, SumPubMed, and HelpSteer2.',
    abstract:
      'We compare ways of asking LLMs to evaluate generated text — definement versus direct scoring — across summarization and alignment benchmarks (USR, SummEval, SumPubMed, HelpSteer2) with a panel of open and closed judges. Started under supervision of Prof. M. Aliannejadi (University of Amsterdam) as an analytical study of LLM evaluators: quality, biases, reliability. Work in progress; findings feed the Domains notes on evaluation methodology. No public preprint yet.',
    links: [],
  },
];

export function getPaper(slug: string): Paper | undefined {
  return papers.find((p) => p.slug === slug);
}
