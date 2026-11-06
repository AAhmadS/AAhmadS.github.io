import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Prose } from '@/components/Prose';
import { Rich } from '@/components/Rich';
import { SmartLink } from '@/components/SmartLink';
import { Status, type StatusTone } from '@/components/Status';
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

// Active -> ongoing, Paper published -> published, Prototype -> unfinished; Archived, Closed ... -> neutral.
function statusTone(status: string): StatusTone {
  if (status === 'Active') return 'ongoing';
  if (status === 'Paper published') return 'published';
  if (status === 'Prototype') return 'unfinished';
  return 'neutral';
}

const BACK_LINK =
  'inline-flex min-h-[44px] items-center gap-2 font-ui text-[0.9375rem] font-medium text-muted transition-colors duration-fast ease-out [@media(hover:hover)]:hover:text-fg';

const DETAIL_TITLE = 'mt-3 max-w-4xl text-3xl/[1.12] sm:text-4xl/[1.12] lg:text-5xl/[1.12]';

const LINK =
  'link-accent inline-flex min-h-[44px] items-center font-ui text-[0.9375rem] font-medium';

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <article>
      <header className="page-header container-site">
        <Link href="/projects/" className={BACK_LINK}>
          <span aria-hidden="true">←</span> All projects
        </Link>

        <p className="meta mt-6 font-medium">{project.badge}</p>
        <h1 className={DETAIL_TITLE}>{project.title}</h1>
        {(project.year || project.status) && (
          <p className="meta mt-4">
            {project.status && <Status tone={statusTone(project.status)} label={project.status} />}
            {project.status && project.year ? ' · ' : ''}
            {project.year}
          </p>
        )}
      </header>

      <div className="container-site">
        <div className="section-body section-body--rule grid gap-10 lg:grid-cols-[minmax(0,42rem)_minmax(0,1fr)] lg:gap-16">
          <div>
            <section aria-labelledby="overview-heading">
              <div className="section-head">
                <h2 id="overview-heading">Overview</h2>
              </div>
              <Prose>
                <p>
                  <Rich text={project.description} />
                </p>
              </Prose>
            </section>

            <section aria-labelledby="tech-heading" className="mt-10">
              <div className="section-head">
                <h2 id="tech-heading">Tech</h2>
              </div>
              <p className="font-ui text-[0.9375rem] text-muted">{project.tech.join(', ')}</p>
            </section>
          </div>

          {project.links.length > 0 && (
            <section aria-labelledby="links-heading">
              <div className="section-head">
                <h2 id="links-heading">Links</h2>
              </div>
              <ul role="list">
                {project.links.map((l) => (
                  <li key={`${l.label}|${l.href}`}>
                    <SmartLink href={l.href} className={LINK}>
                      {l.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </article>
  );
}
