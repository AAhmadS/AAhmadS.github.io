import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';

// This project entry was removed. The old URL keeps working: a static page that sends visitors to /projects/
// (meta refresh for crawlers and no-JS, window.location.replace for browsers).
// next/navigation redirect() was tried first; in a static export it leaves no meta refresh in the HTML.
export const metadata: Metadata = {
  title: 'Project retired',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://aahmads.github.io/projects/' },
};

export default function RetiredProjectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/projects/" />
      <script dangerouslySetInnerHTML={{ __html: "window.location.replace('/projects/');" }} />
      <PageHeader title="This project page has been retired." />
      <div className="container-site pb-24">
        <Link href="/projects" className="btn-secondary">
          Back to Projects
        </Link>
      </div>
    </>
  );
}
