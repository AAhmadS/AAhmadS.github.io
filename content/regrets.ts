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

// Intentionally empty for now — the Regrets tab stays live but lists nothing.
export const regrets: Regret[] = [];

export function getRegret(slug: string): Regret | undefined {
  return regrets.find((r) => r.slug === slug);
}
