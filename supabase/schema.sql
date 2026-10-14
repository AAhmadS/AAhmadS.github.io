-- Schema for the public chat/discussion feature.
-- Run this in your Supabase SQL editor.

create table if not exists public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  thread_key text not null,
  parent_id uuid references public.chat_messages(id) on delete cascade,
  author text not null,
  body text not null,
  created_at timestamptz not null default now()
);

create index if not exists chat_messages_thread_key_idx
  on public.chat_messages (thread_key, created_at);

-- Enable RLS and allow anonymous public read + insert (public discussion).
alter table public.chat_messages enable row level security;

drop policy if exists "Public read chat" on public.chat_messages;
create policy "Public read chat"
  on public.chat_messages for select
  using (true);

drop policy if exists "Public insert chat" on public.chat_messages;
create policy "Public insert chat"
  on public.chat_messages for insert
  with check (true);
