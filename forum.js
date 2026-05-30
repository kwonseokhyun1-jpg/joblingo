const DEMO_THREADS = [
  {
    id: "demo-thread-1",
    career_id: "software-developer",
    user_id: "demo-user-1",
    title: "What surprised me most after my first year",
    body: "I expected to write code all day. Instead I spent a lot of time reading documentation, asking questions in standups, and fixing small bugs that taught me how the system actually works.",
    display_name: "Jordan M.",
    years_label: "6 years in software",
    is_verified_pro: true,
    reply_count: 2,
    last_reply_at: "2026-02-15T11:00:00.000Z",
    created_at: "2026-02-01T10:00:00.000Z"
  },
  {
    id: "demo-thread-2",
    career_id: "software-developer",
    user_id: "demo-user-2",
    title: "Do you need to be great at math?",
    body: "Short answer: logical thinking matters more than advanced calculus for most product teams. Helpful skills are breaking problems down, communicating clearly, and learning tools steadily.",
    display_name: "Priya K.",
    years_label: "3 years, frontend focus",
    is_verified_pro: true,
    reply_count: 2,
    last_reply_at: "2026-02-12T09:30:00.000Z",
    created_at: "2026-02-10T14:30:00.000Z"
  },
  {
    id: "demo-thread-3",
    career_id: "nurse",
    user_id: "demo-user-3",
    title: "The emotional side nobody warns you about",
    body: "You are with people on hard days. The clinical tasks are learnable, but pacing yourself and debriefing with your team is part of staying effective long term.",
    display_name: "Alex R.",
    years_label: "8 years in acute care",
    is_verified_pro: true,
    reply_count: 1,
    last_reply_at: "2026-02-08T16:00:00.000Z",
    created_at: "2026-02-02T09:15:00.000Z"
  },
  {
    id: "demo-thread-4",
    career_id: "ux-designer",
    user_id: "demo-user-4",
    title: "How much of the job is research vs. visual design?",
    body: "On my team, research and facilitation are at least half the work. Wireframes matter, but the bigger skill is helping everyone agree on the real user problem first.",
    display_name: "Sam L.",
    years_label: "5 years in product design",
    is_verified_pro: true,
    reply_count: 0,
    last_reply_at: null,
    created_at: "2026-02-10T16:45:00.000Z"
  }
];

const DEMO_REPLIES = [
  {
    id: "demo-reply-1",
    thread_id: "demo-thread-1",
    user_id: "demo-user-2",
    display_name: "Priya K.",
    years_label: "3 years, frontend focus",
    is_verified_pro: true,
    body: "Same here. My first useful skill was learning how to read error messages and search for them without panicking.",
    created_at: "2026-02-08T12:00:00.000Z"
  },
  {
    id: "demo-reply-2",
    thread_id: "demo-thread-1",
    user_id: "demo-user-5",
    display_name: "Chris T.",
    years_label: "10 years, backend",
    is_verified_pro: true,
    body: "Mentorship helped. Find someone willing to review your small pull requests and explain why they suggested changes.",
    created_at: "2026-02-15T11:00:00.000Z"
  },
  {
    id: "demo-reply-3",
    thread_id: "demo-thread-2",
    user_id: "demo-user-1",
    display_name: "Jordan M.",
    years_label: "6 years in software",
    is_verified_pro: true,
    body: "If you like puzzles and patience, you can grow the technical depth over time. Do not let imposter syndrome stop you from trying small projects.",
    created_at: "2026-02-12T09:30:00.000Z"
  },
  {
    id: "demo-reply-4",
    thread_id: "demo-thread-3",
    user_id: "demo-user-6",
    display_name: "Morgan P.",
    years_label: "5 years, med-surg",
    is_verified_pro: true,
    body: "Having a routine after difficult shifts, even a short walk or journal note, made a big difference for me.",
    created_at: "2026-02-08T16:00:00.000Z"
  },
  {
    id: "demo-reply-5",
    thread_id: "demo-thread-2",
    user_id: "demo-explorer-1",
    display_name: "Taylor S.",
    years_label: null,
    is_verified_pro: false,
    body: "Thanks for answering this — I am still in school and trying to figure out if software is the right path for me.",
    created_at: "2026-02-11T18:00:00.000Z"
  }
];

const STORAGE_KEYS = {
  session: "pathdiscover.forumSession",
  verifications: "pathdiscover.verifications",
  threads: "pathdiscover.forumThreads",
  replies: "pathdiscover.forumReplies"
};

const FORUM_EVENT = "pathdiscover:forum-updated";

let supabaseClient = null;
let currentUser = null;
let authListenerBound = false;
const forumState = {
  view: "list",
  activeThreadId: null
};

function getConfig() {
  return window.pathdiscoverConfig || {};
}

function isBackendConfigured() {
  const config = getConfig();
  return Boolean(config.supabaseUrl && config.supabaseAnonKey);
}

function isDemoMode() {
  return !isBackendConfigured();
}

function readLocal(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch (error) {
    return fallback;
  }
}

function writeLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function notifyForumUpdated() {
  document.dispatchEvent(new CustomEvent(FORUM_EVENT));
}

async function loadSupabase() {
  if (supabaseClient) {
    return supabaseClient;
  }

  const { createClient } = await import("https://esm.sh/@supabase/supabase-js@2.49.1");
  const config = getConfig();
  supabaseClient = createClient(config.supabaseUrl, config.supabaseAnonKey);
  return supabaseClient;
}

async function ensureAuthListener() {
  if (!isBackendConfigured() || authListenerBound) {
    return;
  }

  const supabase = await loadSupabase();
  authListenerBound = true;

  supabase.auth.onAuthStateChange((_event, session) => {
    currentUser = session?.user || null;
    notifyForumUpdated();
  });

  const { data } = await supabase.auth.getSession();
  currentUser = data.session?.user || null;
}

function getDemoSession() {
  return readLocal(STORAGE_KEYS.session, null);
}

function setDemoSession(session) {
  writeLocal(STORAGE_KEYS.session, session);
  currentUser = session
    ? {
        id: session.id,
        email: session.email,
        user_metadata: { display_name: session.displayName }
      }
    : null;
}

function buildDemoUser(session) {
  return {
    id: session.id,
    email: session.email,
    user_metadata: { display_name: session.displayName }
  };
}

async function getCurrentUser() {
  if (isDemoMode()) {
    return getDemoSession() ? currentUser || buildDemoUser(getDemoSession()) : null;
  }

  await ensureAuthListener();
  if (currentUser) {
    return currentUser;
  }

  const supabase = await loadSupabase();
  const { data } = await supabase.auth.getSession();
  currentUser = data.session?.user || null;
  return currentUser;
}

function formatDate(value) {
  return new Date(value).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function formatDateTime(value) {
  return new Date(value).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getDisplayName(user) {
  return user.user_metadata?.display_name || user.email?.split("@")[0] || "Member";
}

function isVerified(verification) {
  return verification?.status === "approved";
}

async function fetchThreads(careerId) {
  if (isDemoMode()) {
    const localThreads = readLocal(STORAGE_KEYS.threads, []);
    return [...DEMO_THREADS, ...localThreads]
      .filter((thread) => thread.career_id === careerId)
      .sort(
        (a, b) =>
          new Date(b.last_reply_at || b.created_at) - new Date(a.last_reply_at || a.created_at)
      );
  }

  const supabase = await loadSupabase();
  const { data, error } = await supabase
    .from("forum_threads")
    .select("*")
    .eq("career_id", careerId)
    .order("last_reply_at", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data || [];
}

async function fetchThread(threadId) {
  if (isDemoMode()) {
    const threads = [...DEMO_THREADS, ...readLocal(STORAGE_KEYS.threads, [])];
    return threads.find((thread) => thread.id === threadId) || null;
  }

  const supabase = await loadSupabase();
  const { data, error } = await supabase.from("forum_threads").select("*").eq("id", threadId).maybeSingle();
  if (error) {
    throw error;
  }
  return data;
}

async function fetchReplies(threadId) {
  if (isDemoMode()) {
    const localReplies = readLocal(STORAGE_KEYS.replies, []);
    return [...DEMO_REPLIES, ...localReplies]
      .filter((reply) => reply.thread_id === threadId)
      .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  }

  const supabase = await loadSupabase();
  const { data, error } = await supabase
    .from("forum_replies")
    .select("*")
    .eq("thread_id", threadId)
    .order("created_at", { ascending: true });

  if (error) {
    throw error;
  }

  return data || [];
}

async function fetchVerificationForCareer(userId, careerId) {
  if (isDemoMode()) {
    const verifications = readLocal(STORAGE_KEYS.verifications, []);
    return verifications.find((item) => item.user_id === userId && item.career_id === careerId) || null;
  }

  const supabase = await loadSupabase();
  const { data, error } = await supabase
    .from("verification_requests")
    .select("*")
    .eq("user_id", userId)
    .eq("career_id", careerId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

async function signInWithEmail(email, password) {
  if (isDemoMode()) {
    const session = {
      id: `demo-${btoa(email).replace(/=/g, "").slice(0, 12)}`,
      email,
      displayName: email.split("@")[0]
    };
    setDemoSession(session);
    notifyForumUpdated();
    return { user: buildDemoUser(session) };
  }

  const supabase = await loadSupabase();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    throw error;
  }
  currentUser = data.user;
  return data;
}

async function signUpWithEmail(email, password, displayName) {
  if (isDemoMode()) {
    return signInWithEmail(email, password);
  }

  const supabase = await loadSupabase();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { display_name: displayName } }
  });

  if (error) {
    throw error;
  }

  if (data.user) {
    await supabase.from("profiles").upsert({ id: data.user.id, display_name: displayName });
  }

  return data;
}

async function signOut() {
  if (isDemoMode()) {
    setDemoSession(null);
    currentUser = null;
    notifyForumUpdated();
    return;
  }

  const supabase = await loadSupabase();
  await supabase.auth.signOut();
  currentUser = null;
}

async function submitVerificationRequest(career, formData) {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error("Sign in before requesting verification.");
  }

  const payload = {
    user_id: user.id,
    career_id: career.id,
    career_title: career.title,
    years_experience: formData.yearsExperience.trim(),
    current_role: formData.currentRole.trim() || null,
    employer: formData.employer.trim() || null,
    work_email: formData.workEmail.trim(),
    linkedin_url: formData.linkedinUrl.trim() || null,
    proof_note: formData.proofNote.trim() || null,
    status: isDemoMode() ? "approved" : "pending",
    reviewed_at: isDemoMode() ? new Date().toISOString() : null
  };

  if (isDemoMode()) {
    const verifications = readLocal(STORAGE_KEYS.verifications, []);
    const existingIndex = verifications.findIndex(
      (item) => item.user_id === user.id && item.career_id === career.id
    );
    const record = {
      ...payload,
      id: `demo-verification-${career.id}`,
      created_at: new Date().toISOString()
    };

    if (existingIndex >= 0) {
      verifications[existingIndex] = record;
    } else {
      verifications.push(record);
    }

    writeLocal(STORAGE_KEYS.verifications, verifications);
    notifyForumUpdated();
    return record;
  }

  const supabase = await loadSupabase();
  const { data, error } = await supabase
    .from("verification_requests")
    .upsert({ ...payload, status: "pending", reviewed_at: null }, { onConflict: "user_id,career_id" })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

async function requireSignedIn() {
  const user = await getCurrentUser();
  if (!user) {
    throw new Error("Sign in to post in the forum.");
  }
  return user;
}

async function getPostingContext(career) {
  const user = await requireSignedIn();
  const verification = await fetchVerificationForCareer(user.id, career.id);
  const isVerifiedPro = isVerified(verification);

  return {
    user,
    verification,
    isVerifiedPro,
    yearsLabel: isVerifiedPro ? verification.years_experience : ""
  };
}

function renderVerifiedCheckmark(isVerifiedPro) {
  if (!isVerifiedPro) {
    return "";
  }

  return `<span class="pro-checkmark" title="Verified professional">✓</span>`;
}

async function createThread(career, title, body, yearsLabel) {
  const { user, verification, isVerifiedPro } = await getPostingContext(career);
  const payload = {
    career_id: career.id,
    user_id: user.id,
    title: title.trim(),
    body: body.trim(),
    display_name: getDisplayName(user),
    years_label: isVerifiedPro ? yearsLabel.trim() || verification.years_experience : yearsLabel.trim() || null,
    is_verified_pro: isVerifiedPro,
    reply_count: 0,
    last_reply_at: null
  };

  if (isDemoMode()) {
    const threads = readLocal(STORAGE_KEYS.threads, []);
    const record = {
      ...payload,
      id: `demo-thread-${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    threads.push(record);
    writeLocal(STORAGE_KEYS.threads, threads);
    notifyForumUpdated();
    return record;
  }

  const supabase = await loadSupabase();
  const { data, error } = await supabase.from("forum_threads").insert(payload).select().single();
  if (error) {
    throw error;
  }
  return data;
}

async function createReply(threadId, career, body, yearsLabel) {
  const { user, verification, isVerifiedPro } = await getPostingContext(career);
  const payload = {
    thread_id: threadId,
    user_id: user.id,
    body: body.trim(),
    display_name: getDisplayName(user),
    years_label: isVerifiedPro ? yearsLabel.trim() || verification.years_experience : yearsLabel.trim() || null,
    is_verified_pro: isVerifiedPro
  };

  if (isDemoMode()) {
    const replies = readLocal(STORAGE_KEYS.replies, []);
    const threads = readLocal(STORAGE_KEYS.threads, []);
    const record = {
      ...payload,
      id: `demo-reply-${Date.now()}`,
      created_at: new Date().toISOString()
    };
    replies.push(record);

    const threadIndex = threads.findIndex((thread) => thread.id === threadId);
    if (threadIndex >= 0) {
      threads[threadIndex].reply_count += 1;
      threads[threadIndex].last_reply_at = record.created_at;
    }

    const demoThreadIndex = DEMO_THREADS.findIndex((thread) => thread.id === threadId);
    if (demoThreadIndex >= 0) {
      DEMO_THREADS[demoThreadIndex].reply_count += 1;
      DEMO_THREADS[demoThreadIndex].last_reply_at = record.created_at;
    }

    writeLocal(STORAGE_KEYS.replies, replies);
    writeLocal(STORAGE_KEYS.threads, threads);
    notifyForumUpdated();
    return record;
  }

  const supabase = await loadSupabase();
  const { data, error } = await supabase.from("forum_replies").insert(payload).select().single();
  if (error) {
    throw error;
  }
  return data;
}

function renderAuthPanel(user) {
  if (user) {
    return `
      <div class="forum-auth-bar">
        <p>Signed in as <strong>${escapeHtml(getDisplayName(user))}</strong></p>
        <button class="button secondary" type="button" data-action="sign-out">Sign out</button>
      </div>
    `;
  }

  return `
    <form class="forum-form forum-auth-form" data-form="auth">
      <h4>Join the forum</h4>
      <p class="form-hint">Sign in to start topics and reply. Verified professionals get a checkmark on their posts.</p>
      <label>
        Display name
        <input name="displayName" type="text" required maxlength="80" placeholder="Alex Rivera" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autocomplete="email" placeholder="you@company.com" />
      </label>
      <label>
        Password
        <input name="password" type="password" required minlength="8" autocomplete="current-password" />
      </label>
      <div class="form-actions">
        <button class="button primary" type="submit">Sign in</button>
        <button class="button secondary" type="button" data-auth-mode="sign-up">Create account</button>
      </div>
    </form>
  `;
}

function renderVerificationPanel(career, verification) {
  if (isVerified(verification)) {
    return `
      <p class="verification-status approved">
        <span class="pro-checkmark pro-checkmark-inline" title="Verified professional">✓</span>
        <span class="verified-badge">Verified ${escapeHtml(career.title)}</span>
        Your posts show the verified pro checkmark in this forum.
      </p>
    `;
  }

  if (verification?.status === "pending") {
    return `
      <p class="verification-status pending">
        Verification is under review. You can still post now; the checkmark appears after approval.
      </p>
    `;
  }

  if (verification?.status === "rejected") {
    return `
      <p class="verification-status rejected">
        Your verification was not approved. Update your details and submit again.
      </p>
    `;
  }

  return `
    <form class="forum-form" data-form="verification">
      <h4>Get the verified pro checkmark</h4>
      <p class="form-hint">Anyone signed in can post. Verified professionals get a ✓ tag after we confirm your experience.</p>
      <label>
        Years of experience
        <input name="yearsExperience" type="text" required maxlength="80" placeholder="4 years in this role" />
      </label>
      <label>
        Current or most recent role title
        <input name="currentRole" type="text" maxlength="120" placeholder="Registered Nurse, ICU" />
      </label>
      <label>
        Employer
        <input name="employer" type="text" maxlength="120" placeholder="City General Hospital" />
      </label>
      <label>
        Work email
        <input name="workEmail" type="email" required placeholder="name@employer.com" />
      </label>
      <label>
        LinkedIn or portfolio (optional)
        <input name="linkedinUrl" type="url" placeholder="https://linkedin.com/in/your-name" />
      </label>
      <label>
        Notes for reviewers (optional)
        <textarea name="proofNote" rows="3" maxlength="500" placeholder="License, certification, or profile we can check."></textarea>
      </label>
      <button class="button primary" type="submit">Request verification</button>
    </form>
  `;
}

function renderNewTopicForm(user, verification) {
  if (!user) {
    return "";
  }

  const verified = isVerified(verification);

  return `
    <form class="forum-form" data-form="new-topic">
      <h4>Start a new topic</h4>
      <label>
        Topic title
        <input name="title" type="text" required minlength="8" maxlength="160" placeholder="What is the job really like day to day?" />
      </label>
      ${
        verified
          ? `<label>
        Experience label (shown on verified posts)
        <input name="yearsLabel" type="text" maxlength="80" value="${escapeHtml(verification.years_experience || "")}" />
      </label>`
          : ""
      }
      <label>
        Opening post
        <textarea name="body" rows="6" required minlength="20" maxlength="4000" placeholder="Share advice, myths, or things you wish you knew earlier."></textarea>
      </label>
      <button class="button primary" type="submit">Post topic</button>
    </form>
  `;
}

function renderThreadList(threads, career) {
  if (!threads.length) {
    return `<p class="empty-state">No topics yet. Be the first to ask about ${escapeHtml(career.title)}.</p>`;
  }

  return `
    <div class="forum-table-wrap">
      <table class="forum-table">
        <thead>
          <tr>
            <th scope="col">Topic</th>
            <th scope="col">Started by</th>
            <th scope="col">Replies</th>
            <th scope="col">Last activity</th>
          </tr>
        </thead>
        <tbody>
          ${threads
            .map(
              (thread) => `
                <tr>
                  <td>
                    <button class="forum-topic-link" type="button" data-thread-id="${thread.id}">
                      ${escapeHtml(thread.title)}
                    </button>
                  </td>
                  <td>
                    <span class="forum-author">${escapeHtml(thread.display_name)}</span>
                    ${renderVerifiedCheckmark(thread.is_verified_pro)}
                  </td>
                  <td>${thread.reply_count || 0}</td>
                  <td>${formatDateTime(thread.last_reply_at || thread.created_at)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderPostBlock({ author, yearsLabel, createdAt, body, isVerifiedPro = false, isOriginal = false }) {
  return `
    <article class="forum-post ${isOriginal ? "forum-post-original" : ""}">
      <header class="forum-post-header">
        <div class="forum-author-row">
          <strong>${escapeHtml(author)}</strong>
          ${renderVerifiedCheckmark(isVerifiedPro)}
        </div>
        <time datetime="${createdAt}">${formatDateTime(createdAt)}</time>
      </header>
      ${yearsLabel ? `<p class="forum-post-meta">${escapeHtml(yearsLabel)}</p>` : ""}
      <div class="forum-post-body">${escapeHtml(body).replace(/\n/g, "<br>")}</div>
    </article>
  `;
}

function renderThreadDetail(thread, replies, user, verification) {
  const verified = isVerified(verification);
  const replyForm = user
    ? `
      <form class="forum-form" data-form="reply">
        <h4>Reply to this topic</h4>
        ${
          verified
            ? `<label>
          Experience label (optional, for verified posts)
          <input name="yearsLabel" type="text" maxlength="80" value="${escapeHtml(verification.years_experience || "")}" />
        </label>`
            : ""
        }
        <label>
          Your reply
          <textarea name="body" rows="5" required minlength="5" maxlength="3000" placeholder="Ask a question, share your perspective, or add advice."></textarea>
        </label>
        <button class="button primary" type="submit">Post reply</button>
      </form>
    `
    : `<p class="form-hint">Sign in to reply in this forum.</p>`;

  return `
    <div class="forum-thread-view">
      <button class="button secondary forum-back" type="button" data-action="back-to-list">← All topics</button>
      <h4 class="forum-thread-title">${escapeHtml(thread.title)}</h4>
      ${renderPostBlock({
        author: thread.display_name,
        yearsLabel: thread.years_label,
        createdAt: thread.created_at,
        body: thread.body,
        isVerifiedPro: thread.is_verified_pro,
        isOriginal: true
      })}
      <div class="forum-replies">
        <h5>${replies.length} ${replies.length === 1 ? "reply" : "replies"}</h5>
        ${
          replies.length
            ? replies
                .map((reply) =>
                  renderPostBlock({
                    author: reply.display_name,
                    yearsLabel: reply.years_label,
                    createdAt: reply.created_at,
                    body: reply.body,
                    isVerifiedPro: reply.is_verified_pro
                  })
                )
                .join("")
            : `<p class="empty-state">No replies yet. Be the first to respond.</p>`
        }
      </div>
      ${replyForm}
    </div>
  `;
}

async function renderCareerForum(career, container) {
  if (!container) {
    return;
  }

  container.innerHTML = `<p class="empty-state">Loading forum…</p>`;

  try {
    await ensureAuthListener();
    const user = await getCurrentUser();
    const verification = user ? await fetchVerificationForCareer(user.id, career.id) : null;

    const modeNote = isDemoMode()
      ? `<p class="demo-banner">Demo mode: sample topics are shown. Anyone can post after sign-in; request verification to test the ✓ checkmark. Add Supabase for production.</p>`
      : "";

    let mainContent = "";

    if (forumState.view === "thread" && forumState.activeThreadId) {
      const [thread, replies] = await Promise.all([
        fetchThread(forumState.activeThreadId),
        fetchReplies(forumState.activeThreadId)
      ]);

      if (!thread) {
        forumState.view = "list";
        forumState.activeThreadId = null;
      } else {
        mainContent = renderThreadDetail(thread, replies, user, verification);
      }
    }

    if (forumState.view === "list") {
      const threads = await fetchThreads(career.id);
      const topicCount = threads.length;
      const replyCount = threads.reduce((total, thread) => total + (thread.reply_count || 0), 0);

      mainContent = `
        <div class="forum-list-view">
          <div class="forum-stats">
            <span><strong>${topicCount}</strong> topics</span>
            <span><strong>${replyCount}</strong> replies</span>
          </div>
          ${renderThreadList(threads, career)}
          ${renderNewTopicForm(user, verification)}
        </div>
      `;
    }

    container.innerHTML = `
      <div class="forum-panel">
        <div class="forum-intro">
          <p class="eyebrow">Career forum</p>
          <h3 id="career-forum-title">${escapeHtml(career.title)} forum</h3>
          <p>Anyone signed in can ask questions and join the discussion. Posts from verified professionals show a ✓ checkmark.</p>
          ${modeNote}
        </div>
        <div id="forum-feedback" class="form-status" role="status" aria-live="polite"></div>
        ${renderAuthPanel(user)}
        ${user ? renderVerificationPanel(career, verification) : ""}
        ${mainContent}
      </div>
    `;

    bindForumEvents(container, career, verification);
  } catch (error) {
    container.innerHTML = `<p class="empty-state">Could not load forum. ${escapeHtml(error.message)}</p>`;
  }
}

function setFeedback(container, message, isError = false) {
  const target = container.querySelector("#forum-feedback");
  if (!target) {
    return;
  }
  target.textContent = message;
  target.classList.toggle("error", isError);
}

function bindForumEvents(container, career, verification) {
  const feedback = (message, isError) => setFeedback(container, message, isError);

  container.querySelector('[data-action="sign-out"]')?.addEventListener("click", async () => {
    await signOut();
    feedback("Signed out.");
    await renderCareerForum(career, container);
  });

  container.querySelector('[data-action="back-to-list"]')?.addEventListener("click", async () => {
    forumState.view = "list";
    forumState.activeThreadId = null;
    await renderCareerForum(career, container);
  });

  container.querySelectorAll("[data-thread-id]").forEach((button) => {
    button.addEventListener("click", async () => {
      forumState.view = "thread";
      forumState.activeThreadId = button.dataset.threadId;
      await renderCareerForum(career, container);
      container.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const authForm = container.querySelector('[data-form="auth"]');
  authForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      await signInWithEmail(form.email.value.trim(), form.password.value);
      feedback("Signed in.");
      await renderCareerForum(career, container);
    } catch (error) {
      feedback(error.message, true);
    }
  });

  authForm?.querySelector('[data-auth-mode="sign-up"]')?.addEventListener("click", async () => {
    const form = authForm;
    try {
      await signUpWithEmail(form.email.value.trim(), form.password.value, form.displayName.value.trim());
      feedback("Account created. You can post now, or request verification for the ✓ checkmark.");
      await renderCareerForum(career, container);
    } catch (error) {
      feedback(error.message, true);
    }
  });

  container.querySelector('[data-form="verification"]')?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      await submitVerificationRequest(career, {
        yearsExperience: form.yearsExperience.value,
        currentRole: form.currentRole.value,
        employer: form.employer.value,
        workEmail: form.workEmail.value,
        linkedinUrl: form.linkedinUrl.value,
        proofNote: form.proofNote.value
      });
      feedback(
        isDemoMode()
          ? "Verified in demo mode. Your posts will show the ✓ checkmark."
          : "Verification submitted. You can keep posting; the checkmark appears after approval."
      );
      await renderCareerForum(career, container);
    } catch (error) {
      feedback(error.message, true);
    }
  });

  container.querySelector('[data-form="new-topic"]')?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      const thread = await createThread(career, form.title.value, form.body.value, form.yearsLabel.value);
      form.reset();
      forumState.view = "thread";
      forumState.activeThreadId = thread.id;
      feedback("Topic posted.");
      await renderCareerForum(career, container);
    } catch (error) {
      feedback(error.message, true);
    }
  });

  container.querySelector('[data-form="reply"]')?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      await createReply(forumState.activeThreadId, career, form.body.value, form.yearsLabel.value);
      form.reset();
      feedback("Reply posted.");
      await renderCareerForum(career, container);
    } catch (error) {
      feedback(error.message, true);
    }
  });
}

async function initCareerForum() {
  await ensureAuthListener();
  await getCurrentUser();
}

function resetForumView() {
  forumState.view = "list";
  forumState.activeThreadId = null;
}

window.PathDiscoverForum = {
  init: initCareerForum,
  renderForCareer: renderCareerForum,
  resetView: resetForumView,
  isDemoMode
};
