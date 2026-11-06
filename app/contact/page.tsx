'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { SmartLink } from '@/components/SmartLink';
import { Status } from '@/components/Status';
import { FiMail, FiMapPin, FiBookOpen } from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';

const contactItems = [
  { label: 'Email', value: 'shafieeamirahmadii@gmail.com', href: 'mailto:shafieeamirahmadii@gmail.com', Icon: FiMail },
  { label: 'Location', value: 'Tehran, Iran', Icon: FiMapPin },
  { label: 'Institution', value: 'Sharif University of Technology', Icon: FiBookOpen },
  { label: 'Research Profile', value: 'Google Scholar', href: 'https://scholar.google.com/citations?user=bmO8gCYAAAAJ&hl=en', Icon: SiGooglescholar },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = fd.get('subject') as string;
    const body = `From: ${fd.get('name')} (${fd.get('email')})\n\n${fd.get('message')}`;
    const mailto = `mailto:shafieeamirahmadii@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHeader
        title={<>Let&rsquo;s Connect</>}
        subtitle="Have a research idea, collaboration opportunity, or just want to chat about AI? I'd love to hear from you."
      />

      <div className="container-site pb-16 md:pb-24">
        <div className="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
          <dl>
            {contactItems.map((c) => (
              <div key={c.label} className="border-t border-line py-4 first:border-t-0 first:pt-0">
                <dt className="meta flex items-center gap-2">
                  <c.Icon aria-hidden="true" focusable="false" size={18} className="shrink-0" />
                  {c.label}
                </dt>
                <dd className="mt-1 text-lg [overflow-wrap:anywhere]">
                  {c.href ? (
                    <SmartLink
                      href={c.href}
                      allowMailto
                      className="link-accent inline-flex min-h-11 items-center"
                    >
                      {c.value}
                    </SmartLink>
                  ) : (
                    <span className="inline-flex min-h-11 items-center">{c.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div>
            <div role="status">
              {sent && (
                <div className="panel mb-6 px-4 py-3">
                  <Status
                    tone="published"
                    label="Your email client should open with the message pre-filled."
                    className="text-fg"
                  />
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="form-label" htmlFor="name">Your Name</label>
                <input className="form-input" type="text" id="name" name="name" autoComplete="name" required />
              </div>
              <div>
                <label className="form-label" htmlFor="email">Your Email</label>
                <input className="form-input" type="email" id="email" name="email" autoComplete="email" required />
              </div>
              <div>
                <label className="form-label" htmlFor="subject">Subject</label>
                <input className="form-input" type="text" id="subject" name="subject" required />
              </div>
              <div>
                <label className="form-label" htmlFor="message">Message</label>
                <textarea className="form-textarea" id="message" name="message" rows={5} required />
              </div>
              <div>
                <button type="submit" className="btn-primary w-full sm:w-auto">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
