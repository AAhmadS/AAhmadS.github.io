import type { Paper } from '@/lib/types';

export const papers: Paper[] = [
  {
    slug: 'sdperl',
    title:
      'SDPERL: A Framework for Software Defect Prediction Using Ensemble Feature Extraction and Reinforcement Learning',
    year: '2024',
    meta: '2 citations',
    venue: 'arXiv',
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
      'Joint Combinatorial Node Selection and Resource Allocations in the Lightning Network using Attention-based Reinforcement Learning',
    year: '2024',
    meta: '1 citation',
    venue: 'arXiv',
    summary:
      'Transformer-enhanced deep RL for joint node selection + channel funding in Bitcoin\u2019s Lightning Network, with a more realistic routing simulation. Beats baselines; evidence that revenue incentives align with decentralization.',
    abstract:
      'Joining the Lightning Network for profit means solving a joint combinatorial problem: discrete node selection plus continuous resource allocation. We build a transformer-enhanced deep RL framework for this JCNSRA problem on an improved LN environment with a more realistic routing mechanism, and outperform baselines and heuristics across settings. Deploying the agent and tracking centrality shows no conflict between revenue-maximization incentives and decentralization — rather a positive association. With M. Salahshour, M. Tefagh. arXiv:2411.17353. Implementation: Lightning-Network-Centralization repo.',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2411.17353' },
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
    year: '2024',
    meta: 'Collaborative Research',
    venue: 'arXiv',
    summary:
      'Text-Image-Expression dataset pairing LLM-generated emotion descriptions with images and 3D blendshapes, plus a new Emo3D metric that beats MSE at judging emotional fidelity. Built from the 3D-Face-Generation project.',
    abstract:
      'Emotion-conditioned 3D faces were bottlenecked by narrow emotion classes and thin datasets. Emo3D contributes a Text-Image-Expression dataset spanning a wide emotion spectrum — LLM-generated descriptions paired with images and 3D blendshapes — benchmarks fine-tuned language models and vision-language models (incl. CLIP) on expression synthesis, and introduces the Emo3D metric, shown superior to MSE for visual-text emotional alignment. Applications in animation, VR, and affective HCI. With M. Dehghani, A. Shafiei, N. Fallah, F. Alizadeh, M. M. Gholinejad, H. Behroozi, J. Habibi, E. Asgari. 11 pages, arXiv:2410.02049.',
    links: [
      { label: 'arXiv', href: 'https://arxiv.org/abs/2410.02049' },
      {
        label: 'Scholar',
        href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=bmO8gCYAAAAJ&citation_for_view=bmO8gCYAAAAJ:Tyk-4Ss8FVUC',
      },
    ],
  },
  {
    slug: 'trl',
    title: 'TRL: Tutorical Refinement Loop — Tutor-to-Student DPO Story Generation',
    year: '2026',
    meta: 'In progress',
    venue: 'In progress',
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
    meta: 'In progress',
    venue: 'In progress',
    summary:
      'Definement-vs-scoring study of LLM judges (GPT-4o/mini, LLaMA-3.3-70B, Qwen2.5-32B, Mixtral-8x22B) on USR, SummEval, SumPubMed, and HelpSteer2.',
    abstract:
      'We compare ways of asking LLMs to evaluate generated text — definement versus direct scoring — across summarization and alignment benchmarks (USR, SummEval, SumPubMed, HelpSteer2) with a panel of open and closed judges. Work in progress; findings feed the Domains notes on evaluation methodology. No public preprint yet.',
    links: [],
  },
  {
    slug: 'llm-for-code',
    title: 'LLM-for-Code: Defect Prediction, Mutation, and Repair with Agentic Loops',
    year: '2025',
    meta: 'In progress',
    venue: 'In progress',
    summary:
      'Framework comparing vanilla, in-context, and ART agentic loops for defect prediction, mutation testing, and program repair across GPT-4o/4.1, Qwen2.5, Mixtral, LLaMA, DeepSeek, and Gemma.',
    abstract:
      'An evaluation framework for code LLMs on three software-engineering tasks — defect prediction, mutation testing, program repair — contrasting vanilla prompting, in-context learning, and ART-style agentic loops across a wide model panel. Continues the SDPERL line from static prediction toward repair. Work in progress; no public preprint yet.',
    links: [],
  },
  {
    slug: 'persian-multimodal-reasoning',
    title: 'Multimodal Multilingual Reasoning: Persian vs English',
    year: '2025',
    meta: 'Early stage',
    venue: 'In progress',
    summary:
      'Early Aya-Expedition study comparing multimodal reasoning in Persian versus English. Prototype evaluation harness; results pending.',
    abstract:
      'Motivated by the gap between English and Persian multimodal performance, this early-stage project builds an evaluation harness comparing Persian-vs-English multimodal reasoning via the Aya Expedition program. Prototype stage (API loader + evaluation scripts). No results published yet — listed here for honesty about direction, not as a claim.',
    links: [],
  },
];

export function getPaper(slug: string): Paper | undefined {
  return papers.find((p) => p.slug === slug);
}
