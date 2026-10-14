import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects, getProject } from '@/content/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `https://aahmads.github.io/projects/${project.slug}/` },
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <div className="pb-24">
      <div className="mx-auto max-w-[1160px] px-6 pt-32">
        <Link href="/projects" className="font-mono text-sm" style={{ color: 'var(--text-secondary)' }}>
          ← All projects
        </Link>
        <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="tag">{project.badge}</span>
            <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">{project.title}</h1>
            {(project.year || project.status) && (
              <p className="mt-3 font-mono text-sm" style={{ color: 'var(--text-tertiary)' }}>
                {[project.status, project.year].filter(Boolean).join(' · ')}
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_280px]">
          <div className="glass-card p-8">
            <h2 className="font-display text-xl font-bold">Overview</h2>
            <p className="mt-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {project.description}
            </p>

            <h2 className="mt-8 font-display text-xl font-bold">Tech</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {project.links.length > 0 && (
          <div className="glass-card h-fit p-6">
            <h3 className="font-display text-lg font-bold">Links</h3>
            <div className="mt-4 flex flex-col gap-3">
              {project.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="rounded-lg border px-4 py-2.5 text-center font-mono text-sm transition-colors"
                  style={{
                    borderColor: 'var(--surface-border)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
