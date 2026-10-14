'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
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
    <div className="pb-24">
      <PageHeader
        eyebrow="// 04 — Contact"
        title={<>Let&rsquo;s <span className="gradient-text">Connect</span></>}
        subtitle="Have a research idea, collaboration opportunity, or just want to chat about AI? I'd love to hear from you."
      />

      <div className="mx-auto grid max-w-[1160px] gap-8 px-6 md:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-5">
          {contactItems.map((c) => (
            <div key={c.label} className="glass-card flex items-start gap-4 p-5">
              <div
                className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-lg text-lg text-white"
                style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
              >
                <c.Icon />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                  {c.label}
                </div>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    className="transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {c.value}
                  </a>
                ) : (
                  <div style={{ color: 'var(--text-primary)' }}>{c.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8">
          {sent && (
            <div className="mb-6 rounded-lg border px-4 py-3 text-sm"
              style={{ borderColor: 'var(--surface-border)', color: 'var(--text-primary)' }}>
              Your email client should open with the message pre-filled.
            </div>
          )}
          <div className="mb-4">
            <label className="form-label" htmlFor="name">Your Name</label>
            <input className="form-input" type="text" id="name" name="name" required />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="email">Your Email</label>
            <input className="form-input" type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="subject">Subject</label>
            <input className="form-input" type="text" id="subject" name="subject" required />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea className="form-textarea" id="message" name="message" rows={5} required />
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
}
