/* ============ SNEHA — shared behaviour ============ */

/* ---------- floating hearts & sparkles ---------- */
(function spawnFloats() {
  const field = document.querySelector('.float-field');
  if (!field) return;
  const chars = ['\u2764', '\u2764', '\u2661', '\u2728', '\u2B50', '\u2665', '\uD83D\uDC95']; // hearts + sparkles
  const count = 26;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    el.className = 'float';
    el.textContent = chars[Math.floor(Math.random() * chars.length)];
    const size = 14 + Math.random() * 30;
    el.style.fontSize = size + 'px';
    el.style.left = Math.random() * 100 + 'vw';
    const dur = 9 + Math.random() * 12;
    el.style.animationDuration = dur + 's';
    el.style.animationDelay = (-Math.random() * dur) + 's'; // start mid-flight so it's already populated
    el.style.color = Math.random() > 0.5
      ? 'rgba(255,110,196,0.85)'
      : 'rgba(155,93,229,0.85)';
    field.appendChild(el);
  }
})();

/* ---------- active nav link ---------- */
(function highlightNav() {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ---------- graceful photo fallback ----------
   If images/picN.jpg is missing, the browser fires onerror on that <img>.
   We swap it for a labelled placeholder so the layout still looks intentional. */
window.fixPhoto = function (img) {
  const num = (img.dataset.pic) || '';
  const ph = document.createElement('div');
  ph.className = 'placeholder-photo' + (img.classList.contains('g-img') ? ' g-img' : '');
  if (img.classList.contains('g-img')) { ph.classList.remove('placeholder-photo'); ph.style.cssText = 'width:100%;height:220px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#ffb3dd,#c9a0f0);color:#fff;font-weight:700;border-radius:0;'; }
  ph.textContent = 'Add images/pic' + num + '.jpg';
  img.replaceWith(ph);
};

/* ---------- confetti (Surprise page) ---------- */
function fireConfetti() {
  const colors = ['#ff6ec4', '#9b5de5', '#ffd166', '#fff5fb', '#e0459c', '#c9a0f0'];
  for (let i = 0; i < 120; i++) {
    const c = document.createElement('div');
    c.className = 'confetti-bit';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.width = c.style.height = (8 + Math.random() * 10) + 'px';
    c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    c.style.animationDuration = (2 + Math.random() * 2) + 's';
    c.style.animationDelay = (Math.random() * 0.5) + 's';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}
window.fireConfetti = fireConfetti;

/* ---------- crown on click (Surprise page) ---------- */
(function crownButton() {
  const btn = document.getElementById('crownBtn');
  const target = document.getElementById('crownTarget');
  if (!btn || !target) return;
  let done = false;
  btn.addEventListener('click', () => {
    if (done) return;
    done = true;
    const crown = document.createElement('div');
    crown.className = 'crowned';
    crown.textContent = '\uD83D\uDC51';
    crown.style.fontSize = '4rem';
    target.insertBefore(crown, target.firstChild);
    const msg = document.getElementById('crownMsg');
    if (msg) { msg.style.display = 'block'; msg.style.animation = 'slideIn .8s ease both'; }
    fireConfetti();
    btn.style.display = 'none';
  });
})();
