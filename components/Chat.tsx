'use client';

import { useCallback, useEffect, useId, useState } from 'react';
import { getSupabase, isSupabaseConfigured } from '@/lib/supabase';
import type { ChatMessage } from '@/lib/types';

interface ChatProps {
  threadKey: string;
  title: string;
}

export function Chat({ threadKey, title }: ChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [posting, setPosting] = useState(false);
  const uid = useId();

  const load = useCallback(async () => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }
    const sb = getSupabase();
    if (!sb) {
      setLoading(false);
      return;
    }
    const { data, error } = await sb
      .from('chat_messages')
      .select('*')
      .eq('thread_key', threadKey)
      .order('created_at', { ascending: true });
    if (!error && data) setMessages(data as ChatMessage[]);
    setLoading(false);
  }, [threadKey]);

  useEffect(() => {
    load();
  }, [load]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isSupabaseConfigured || !author.trim() || !body.trim()) return;
    const sb = getSupabase();
    if (!sb) return;
    setPosting(true);
    const { error } = await sb.from('chat_messages').insert({
      thread_key: threadKey,
      author: author.trim(),
      body: body.trim(),
    });
    setPosting(false);
    if (!error) {
      setBody('');
      load();
    }
  }

  const titleId = `${uid}-title`;
  const authorId = `${uid}-author`;
  const bodyId = `${uid}-body`;

  return (
    <section className="panel p-5 md:p-6" aria-labelledby={titleId}>
      <div className="flex items-baseline justify-between gap-4">
        <h3 id={titleId} className="min-w-0 text-lg [overflow-wrap:anywhere]">
          {title}
        </h3>
        <span className="meta shrink-0">
          {messages.length} {messages.length === 1 ? 'comment' : 'comments'}
        </span>
      </div>

      {!isSupabaseConfigured && (
        <p className="meta mt-4 rounded-md border border-line px-4 py-3 [overflow-wrap:anywhere]">
          Chat is not configured yet. Set <code>NEXT_PUBLIC_SUPABASE_URL</code> and{' '}
          <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to enable public discussion.
        </p>
      )}

      {isSupabaseConfigured && loading && <p className="meta mt-4">Loading discussion…</p>}

      {isSupabaseConfigured && !loading && messages.length === 0 && (
        <p className="meta mt-4">No comments yet. Start the discussion below.</p>
      )}

      {isSupabaseConfigured && (
        <ul
          role="list"
          aria-live="polite"
          aria-label="Comments"
          tabIndex={messages.length > 0 ? 0 : undefined}
          className="chat-log"
        >
          {messages.map((m) => (
            <li key={m.id} className="chat-msg">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="font-ui text-sm font-semibold text-fg">{m.author}</span>
                <time className="meta" dateTime={m.created_at}>
                  {new Date(m.created_at).toLocaleString()}
                </time>
              </div>
              <p className="mt-2 whitespace-pre-wrap text-[0.9375rem] leading-relaxed">{m.body}</p>
            </li>
          ))}
        </ul>
      )}

      {isSupabaseConfigured && (
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4" aria-busy={posting}>
          <div>
            <label className="form-label" htmlFor={authorId}>
              Your name
            </label>
            <input
              id={authorId}
              className="form-input"
              placeholder="Your name"
              autoComplete="name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor={bodyId}>
              Comment
            </label>
            <textarea
              id={bodyId}
              className="form-textarea"
              rows={3}
              placeholder="Share a comment or reply to this idea/note…"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary self-start" disabled={posting}>
            {posting ? 'Posting…' : 'Post comment'}
          </button>
        </form>
      )}
    </section>
  );
}
