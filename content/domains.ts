import type { Domain } from '@/lib/types';

export const domains: Domain[] = [
  {
    slug: 'natural-language-processing',
    name: 'Natural Language Processing',
    tagline: 'How machines understand, generate, and reason over language.',
    description:
      'My core research focus — from defect prediction on code-as-text to Persian/English evaluation. What follows are real studies, not placeholders; each carries findings I stand behind, methods I reuse elsewhere, and open questions.',
    studied: [
      {
        id: 'sdperl',
        name: 'SDPERL: ensemble features + RL selection (PROMISE)',
        description:
          'My file-level defect-prediction paper (arXiv:2412.07927): five code-specific pre-trained models for features, PPO agent with ACO-inspired pheromone guidance for selection.',
        notes: [
          {
            id: 'sdperl-finding',
            kind: 'finding',
            title: 'RL selection beats static selectors by 6.25% F1',
            body: 'On the PROMISE dataset, letting a PPO agent choose features in a custom interaction-embedding space outperformed traditional selectors by 6.25% average F1. The dynamic policy — not a bigger feature set — did the work.',
          },
          {
            id: 'sdperl-borrowing',
            kind: 'borrowing',
            title: 'Pheromone-guided search transfers to TRL',
            body: 'The ACO-inspired pheromone table (biasing the agent toward historically predictive feature combinations) is the mechanism I now reuse in TRL for tutor-signal selection: remember what worked, guide exploration with it.',
          },
          {
            id: 'sdperl-idea',
            kind: 'idea',
            title: 'Same loop for Persian code-mixed text?',
            body: 'Code is code-mixed text by nature. Open question I would like to test: does ensemble-extraction + RL-selection transfer to Persian/English mixed-language classification (e.g. the foreign-word detector problem)? Discuss below.',
          },
        ],
      },
    ],
  },
  {
    slug: 'conversational-ai',
    name: 'Conversational AI',
    tagline: 'Building systems that hold coherent, human-like dialogue.',
    description:
      'From paper ideas to production voice: Persian farmer voice agents, crowdfunding chatbots, and the evaluation science that keeps them honest.',
    studied: [
      {
        id: 'baghboon-voice',
        name: 'Baghboon Persian voice agent (Phase-0)',
        description:
          'Production-leaning Persian voice pipeline for farmers: FastAPI adapter over AvalAI/OpenAI/OpenRouter plus local faster-whisper and VITS-ONNX, with WER/SW-WER/CER benches — 137 tests passing.',
        notes: [
          {
            id: 'bv-finding',
            kind: 'finding',
            title: 'Measure first: WER/SW-WER/CER bench before tuning',
            body: 'The bench suite (word, sub-word, and character error rates on farm-domain utterances) caught more real failures than any model swap. Local faster-whisper + VITS-ONNX proved viable for on-prem Persian before paying for APIs.',
          },
          {
            id: 'bv-borrowing',
            kind: 'borrowing',
            title: 'Bench harness reused in cafebeler + CF-Chatbot',
            body: 'The same measure-first pattern now backs the cafebeler voice-ordering MVP and the Carinx crowdfunding agent (Jev J1–J8 eval gates): ship the eval, then the model.',
          },
          {
            id: 'bv-idea',
            kind: 'idea',
            title: 'Persian voice eval as a public benchmark?',
            body: 'Farm-domain Persian speech has no standard bench. I am considering open-sourcing the bench split — if you work on Persian ASR/TTS, tell me what a useful public split would contain.',
          },
        ],
      },
    ],
  },
  {
    slug: 'reinforcement-learning',
    name: 'Reinforcement Learning',
    tagline: 'Agents that learn optimal behavior through interaction and reward.',
    description:
      'My sharpest tool: attention-based RL for combinatorial network problems, now applied to pricing, hedging, and feature selection.',
    studied: [
      {
        id: 'jcnsra',
        name: 'JCNSRA: node selection + allocation in Lightning (arXiv:2411.17353)',
        description:
          'Transformer-enhanced deep RL solving joint discrete node selection and continuous channel funding, on an LN environment with improved routing realism.',
        notes: [
          {
            id: 'jcnsra-finding',
            kind: 'finding',
            title: 'Attention-DRL wins; profit aligns with decentralization',
            body: 'The agent beat baselines and heuristics across settings — and tracking centrality after deployment showed revenue-maximizing entry does not centralize the network; incentives and decentralization correlate positively.',
          },
          {
            id: 'jcnsra-borrowing',
            kind: 'borrowing',
            title: 'Joint discrete+continuous framing reused twice',
            body: 'The same framing (choose where, then decide how much) now structures my TSE option-hedging work (PPO hedger in Option Lab) and the Kolbeh pricing-request scheduler: selection first, sizing second.',
          },
          {
            id: 'jcnsra-idea',
            kind: 'idea',
            title: 'Centrality-regularized rewards for other networks?',
            body: 'If monitoring centrality during training keeps one network decentralized, the trick should generalize — e.g. validator selection, marketplace matching. Open question: what breaks when the graph is adversarial?',
          },
        ],
      },
    ],
  },
  {
    slug: 'vision-language-models',
    name: 'Vision-Language Models',
    tagline: 'Connecting visual understanding with language models.',
    description:
      'From 3D faces to X-rays: grounding language in images, and measuring whether the grounding is emotionally and clinically faithful.',
    studied: [
      {
        id: 'emo3d-clipvit',
        name: 'Emo3D + LLaMA ClipViT: faces and X-rays',
        description:
          'Two threads: the Emo3D paper (Text-Image-Expression dataset, CLIP-based synthesis eval, new Emo3D metric beating MSE) and LLaMA ClipViT medical few-shot/fine-tune benchmarks on Indiana chest X-rays.',
        notes: [
          {
            id: 'vlm-finding',
            kind: 'finding',
            title: 'Task-specific metrics beat MSE for emotional fidelity',
            body: 'The Emo3D metric outperformed mean-squared error at judging whether a generated 3D expression actually conveys the described emotion — pixel closeness and emotional closeness are different things. Same lesson in medical VLM eval: benchmark the clinical question, not the embedding distance.',
          },
          {
            id: 'vlm-borrowing',
            kind: 'borrowing',
            title: 'LLM-generated descriptions as cheap supervision',
            body: 'Using LLMs to generate diverse textual descriptions (the Emo3D dataset trick) is now my default for bootstrapping paired data — reused for invoice-OCR prompt variety and Persian voice-agent test utterances.',
          },
          {
            id: 'vlm-idea',
            kind: 'idea',
            title: 'Persian multimodal reasoning gap',
            body: 'English VLM progress does not automatically transfer to Persian. My early Aya-Expedition harness compares FA-vs-EN multimodal reasoning — results pending, and I post them here first when they land.',
          },
        ],
      },
    ],
  },
];

export function getDomain(slug: string): Domain | undefined {
  return domains.find((d) => d.slug === slug);
}

export function getStudiedItem(domain: Domain, id: string) {
  return domain.studied.find((s) => s.id === id);
}
