
// blog.js — list view linking to /blog/<id>.html, markup aligned to blog.html CSS
(async function () {
  const listEl = document.getElementById('blog-list');
  const searchEl = document.getElementById('blog-search');
  const detail = document.getElementById('post-detail');
  if (detail) detail.style.display = 'none';

  // Try multiple locations for the JSON (works locally & on server)
  const CANDIDATE_URLS = [
    './blog_posts.json?v=' + Date.now(),
    '/blog_posts.json?v=' + Date.now(),
    'blog_posts.json?v=' + Date.now(),
    './data/blog_posts.json?v=' + Date.now(),
    '/data/blog_posts.json?v=' + Date.now(),
    'data/blog_posts.json?v=' + Date.now()
  ];

  let posts = null;
  for (const url of CANDIDATE_URLS) {
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) continue;
      posts = await res.json();
      break;
    } catch (_) {}
  }

  if (!posts) {
    listEl.innerHTML = '<p>Nem sikerült betölteni a cikkeket.</p>';
    return;
  }

  // sort by date desc
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  function escapeHtml(s='') {
    return s.replace(/[&<>"']/g, ch => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[ch]));
  }

  function render(items) {
    listEl.innerHTML = items.map(p => `
      <article class="post-card">
        <a class="read-more" href="blog/${p.id}.html" aria-label="${escapeHtml(p.title)}">
          <img class="post-image" src="${p.image}" alt="${escapeHtml(p.title)}" loading="lazy">
        </a>
        <h3>${escapeHtml(p.title)}</h3>
        <p class="meta">${escapeHtml(p.date || '')}</p>
        <p class="excerpt">${escapeHtml(p.excerpt || '')}</p>
        <a class="read-more" href="blog/${p.id}.html">Tovább →</a>
      </article>
    `).join('');
  }

  render(posts);

  if (searchEl) {
    searchEl.addEventListener('input', () => {
      const q = searchEl.value.trim().toLowerCase();
      const filtered = !q ? posts : posts.filter(p =>
        (p.title||'').toLowerCase().includes(q) ||
        (p.excerpt||'').toLowerCase().includes(q) ||
        (p.content||'').toLowerCase().includes(q)
      );
      render(filtered);
    });
  }
})();
