export interface Regret {
  slug: string;
  project: string;
  period: string;
  tagline: string;
  story: string[];
  regret: string;
  capabilities: string[];
  related: { label: string; href: string }[];
}

export const regrets: Regret[] = [
  {
    slug: 'llama-clipvit',
    project: 'LLaMA ClipViT — medical vision-language experiments',
    period: '2024',
    tagline: 'Six SOTA models, one lesson: benchmark the clinical question, not the leaderboard.',
    story: [
      'I came into medical vision-language models the way a kid walks into a candy store. BLIVA, MedFlamingo, LLaVA-Med, MedVInT-TD, RadFM, CogVLM — every week a new state-of-the-art, and I wanted to run all of them on chest X-rays from the Indiana dataset, few-shot and fine-tuned, with TextGrad experiments on top. The harness worked. The benchmark table grew. And then I looked at the table and realized I could not tell you which result mattered for a single real clinical decision.',
      'That stung, because the engineering was genuinely good: Hugging Face pipelines, clean few-shot protocols, aggregated SOTA comparisons. I had built a machine for producing numbers and forgotten to decide which number would change anyone\u2019s mind. It was the mirror image of Emo3D, where inventing the right metric was the whole contribution — here I had six models and no metric of my own.',
      'So this one sits in Regrets, not because it failed, but because it taught me the rule I now enforce everywhere: decide the question before running the model. My Option Lab has 179 tests because of ClipViT. My voice-agent benches measure farm-domain error rates because ClipViT taught me that embedding distance is not task performance.',
    ],
    regret:
      'I chased breadth — six models, three protocols — instead of depth on one clinical question with one metric I believed in. Benchmark-chasing felt like progress and was not.',
    capabilities: [
      'Medical VLM evaluation design (few-shot + fine-tune)',
      'Hugging Face ecosystem at scale',
      'Chest X-ray domain data handling',
      'TextGrad prompt optimization',
      'SOTA benchmark aggregation',
    ],
    related: [{ label: 'Project: LLaMA ClipViT', href: '/projects/llama-clipvit/' }],
  },
  {
    slug: 'llm-evaluation',
    project: 'LLM-Evaluation — can LLMs judge?',
    period: '2025',
    tagline: 'A wide judges × benchmarks matrix that taught me to validate one cell deeply first.',
    story: [
      'The question was irresistible: if LLMs can write summaries, can they grade them? I assembled the full panel — GPT-4o and mini, LLaMA-3.3-70B, Qwen2.5-32B, Mixtral-8x22B — against USR, SummEval, SumPubMed, and HelpSteer2, comparing definement-style judging against direct scoring. On paper it was the definitive study. In practice, the matrix exploded: every new judge multiplied every benchmark by every method, and I was drowning in comparisons before I had validated that any single cell agreed with human raters.',
      'Here is what I actually know deeply from this project, and it is worth more than the matrix: how to design a judging protocol — what definement reveals that scoring hides, where position and verbosity bias creep in, why summarization and alignment need different rubrics. I can tell you exactly how an LLM judge fails, because I watched five of them fail in different, instructive ways.',
      'The regret is sequencing, not topic. I should have locked one judge, one benchmark, and human agreement first, then scaled. Now that discipline is policy: my audit pipeline has deterministic QA gates before any LLM verdict, and my voice benches ship before model swaps. Evaluation is my craft — this project is where I paid tuition for it.',
    ],
    regret:
      'I scaled the comparison matrix before establishing human agreement on a single judge-benchmark cell. Breadth first felt ambitious; it was actually avoidance of the hard validation step.',
    capabilities: [
      'LLM-as-judge protocol design (definement vs scoring)',
      'Judge bias analysis (position, verbosity, self-preference)',
      'Benchmark selection across summarization + alignment',
      'Human-agreement validation discipline',
      'Multi-model evaluation harnesses',
    ],
    related: [{ label: 'Research: Can LLMs Evaluate?', href: '/research/llm-evaluation/' }],
  },
  {
    slug: 'persian-multimodal-reasoning',
    project: 'Persian-vs-English multimodal reasoning (Aya Expedition)',
    period: '2025 — stalled',
    tagline: 'The most important question I asked, and the project I left half-built.',
    story: [
      'This was supposed to be my thesis in miniature: English VLM progress does not automatically transfer to Persian, and I was going to prove exactly where it breaks. I joined the Aya Expedition, built the API loader and the evaluation scripts, wrote a two-line README — and then Kolbeh, voice agents, and client work ate the calendar. Three commits, same day, then silence. The harness sits there, correct and empty.',
      'I keep it on this site deliberately. Everything I now do — Persian voice agents, bilingual market research, RTL-first products — is downstream of the belief this project was meant to test. The belief survived; the experiment did not get its due. That gap between conviction and evidence bothers me more than any failed experiment, because a failed experiment at least teaches you something.',
      'What I did gain is specific and real: I know how to design a fair cross-lingual comparison, what confounds to control (translationese, prompt language, cultural content of images), and how scarce Persian multimodal data truly is. When the FA-vs-EN results finally land, they will be posted here first — and this regret entry is the reason the harness still exists instead of being deleted in a cleanup.',
    ],
    regret:
      'I announced a direction with three commits and let production work starve it. Starting is not doing; a correct, empty harness is a promise, not a result. I regret the stall, not the question.',
    capabilities: [
      'Cross-lingual evaluation design (FA vs EN)',
      'Confound control: translationese, prompt language, image culture',
      'Aya Expedition / low-resource language programs',
      'Persian data-scarcity assessment',
      'Bilingual benchmark harness construction',
    ],
    related: [
      { label: 'Domain: Vision-Language Models', href: '/domains/vision-language-models/' },
    ],
  },
];

export function getRegret(slug: string): Regret | undefined {
  return regrets.find((r) => r.slug === slug);
}
