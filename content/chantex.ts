export interface ChantexProduct {
  name: string;
  codename: string;
  line: string;
}

export const chantexProducts: ChantexProduct[] = [
  {
    name: 'Interval',
    codename: 'time intelligence',
    line: 'Personal time tracking with overlap sessions, analytics, and AI assistance.',
  },
  {
    name: 'Trailmark',
    codename: 'research capture',
    line: 'Capture anything, cite everything — verified export to HTML, PDF, and docs.',
  },
  {
    name: 'STEADY',
    codename: 'focus management',
    line: 'Priorities, timetables, and local-first sync for staying on track.',
  },
];
