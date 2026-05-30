-- PathDiscover: career forums with verified professionals
-- Run in the Supabase SQL editor after creating a project.

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.verification_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  career_id text not null,
  career_title text not null,
  years_experience text not null,
  current_role text,
  employer text,
  work_email text not null,
  linkedin_url text,
  proof_note text,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  reviewer_note text,
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  unique (user_id, career_id)
);

create table if not exists public.forum_threads (
  id uuid primary key default gen_random_uuid(),
  career_id text not null,
  user_id uuid not null references public.profiles (id) on delete cascade,
  title text not null check (char_length(title) between 8 and 160),
  body text not null check (char_length(body) between 20 and 4000),
  display_name text not null,
  years_label text,
  reply_count integer not null default 0,
  last_reply_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.forum_replies (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references public.forum_threads (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  body text not null check (char_length(body) between 5 and 3000),
  display_name text not null,
  years_label text,
  created_at timestamptz not null default now()
);

create index if not exists forum_threads_career_idx
  on public.forum_threads (career_id, coalesce(last_reply_at, created_at) desc);

create index if not exists forum_replies_thread_idx
  on public.forum_replies (thread_id, created_at asc);

create index if not exists verification_requests_status_idx
  on public.verification_requests (status, created_at desc);

-- Keep reply_count in sync
create or replace function public.bump_thread_reply_stats()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.forum_threads
  set
    reply_count = reply_count + 1,
    last_reply_at = new.created_at,
    updated_at = now()
  where id = new.thread_id;
  return new;
end;
$$;

drop trigger if exists on_forum_reply_created on public.forum_replies;
create trigger on_forum_reply_created
  after insert on public.forum_replies
  for each row execute function public.bump_thread_reply_stats();

alter table public.profiles enable row level security;
alter table public.verification_requests enable row level security;
alter table public.forum_threads enable row level security;
alter table public.forum_replies enable row level security;

create policy "Profiles are readable by everyone"
  on public.profiles for select using (true);

create policy "Users manage their own profile"
  on public.profiles for all
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "Users read own verification requests"
  on public.verification_requests for select
  using (auth.uid() = user_id);

create policy "Users create own verification requests"
  on public.verification_requests for insert
  with check (auth.uid() = user_id and status = 'pending');

create policy "Users update own pending verification requests"
  on public.verification_requests for update
  using (auth.uid() = user_id and status = 'pending')
  with check (auth.uid() = user_id and status = 'pending');

create policy "Forum threads are public"
  on public.forum_threads for select using (true);

create policy "Verified professionals can start threads"
  on public.forum_threads for insert
  with check (
    auth.uid() = user_id
    and exists (
      select 1 from public.verification_requests vr
      where vr.user_id = auth.uid()
        and vr.career_id = forum_threads.career_id
        and vr.status = 'approved'
    )
  );

create policy "Authors can update own threads"
  on public.forum_threads for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Authors can delete own threads"
  on public.forum_threads for delete
  using (auth.uid() = user_id);

create policy "Forum replies are public"
  on public.forum_replies for select using (true);

create policy "Verified professionals can reply in their career"
  on public.forum_replies for insert
  with check (
    auth.uid() = user_id
    and exists (
      select 1
      from public.forum_threads ft
      join public.verification_requests vr
        on vr.career_id = ft.career_id
       and vr.user_id = auth.uid()
       and vr.status = 'approved'
      where ft.id = forum_replies.thread_id
    )
  );

create policy "Authors can update own replies"
  on public.forum_replies for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Authors can delete own replies"
  on public.forum_replies for delete
  using (auth.uid() = user_id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'display_name', split_part(new.email, '@', 1))
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
