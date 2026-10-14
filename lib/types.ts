export interface Project {
  slug: string;
  title: string;
  badge: string;
  summary: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
  year?: string;
  kind?: 'venture' | 'tool' | 'research';
  status?: string;
}

export interface PaperLink {
  label: string;
  href: string;
}

export interface Paper {
  slug: string;
  title: string;
  year: string;
  meta: string;
  venue?: string;
  group?: 'published' | 'under-review' | 'unfinished' | 'ongoing';
  summary: string;
  abstract: string;
  links: PaperLink[];
}

export interface NoteBlock {
  id: string;
  kind: 'finding' | 'note' | 'borrowing' | 'idea';
  title: string;
  body: string;
}

export interface StudiedItem {
  id: string;
  name: string;
  description: string;
  notes: NoteBlock[];
}

export interface Domain {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  studied: StudiedItem[];
}

export interface ChatMessage {
  id: string;
  thread_key: string;
  parent_id?: string | null;
  author: string;
  body: string;
  created_at: string;
  replies?: ChatMessage[];
}
