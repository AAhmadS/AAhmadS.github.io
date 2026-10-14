'use client';

import { useCallback, useEffect, useState } from 'react';
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

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-bold">{title}</h3>
        <span className="font-mono text-xs" style={{ color: 'var(--text-tertiary)' }}>
          {messages.length} {messages.length === 1 ? 'comment' : 'comments'}
        </span>
      </div>

      {!isSupabaseConfigured && (
        <p className="mt-4 rounded-lg border px-4 py-3 text-sm"
          style={{ borderColor: 'var(--surface-border)', color: 'var(--text-secondary)' }}>
          Chat is not configured yet. Set <code className="font-mono">NEXT_PUBLIC_SUPABASE_URL</code> and{' '}
          <code className="font-mono">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to enable public discussion.
        </p>
      )}

      {isSupabaseConfigured && loading && (
        <p className="mt-4 text-sm" style={{ color: 'var(--text-secondary)' }}>Loading discussion…</p>
      )}

      {isSupabaseConfigured && !loading && messages.length === 0 && (
        <p className="mt-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
          No comments yet. Start the discussion below.
        </p>
      )}

      {isSupabaseConfigured && messages.length > 0 && (
        <div className="mt-5 flex max-h-[400px] flex-col gap-4 overflow-y-auto pr-1">
          {messages.map((m) => (
            <div key={m.id} className="rounded-xl border p-4"
              style={{ borderColor: 'var(--surface-border)', background: 'var(--surface)' }}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold" style={{ color: 'var(--brand-start)' }}>
                  {m.author}
                </span>
                <span className="font-mono text-[11px]" style={{ color: 'var(--text-tertiary)' }}>
                  {new Date(m.created_at).toLocaleString()}
                </span>
              </div>
              <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                {m.body}
              </p>
            </div>
          ))}
        </div>
      )}

      {isSupabaseConfigured && (
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
          <input
            className="form-input"
            placeholder="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <textarea
            className="form-textarea"
            rows={3}
            placeholder="Share a comment or reply to this idea/note…"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary self-start" disabled={posting}>
            {posting ? 'Posting…' : 'Post comment'}
          </button>
        </form>
      )}
    </div>
  );
}
