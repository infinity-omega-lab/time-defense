(() => {
  'use strict';
  // Listing anchors and their labels are authored in HTML, including without JS.

  const dialog = document.querySelector('#image-viewer');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const picture = dialog.querySelector('img');
  const title = dialog.querySelector('#viewer-title');
  const caption = dialog.querySelector('#viewer-caption');
  const canvas = dialog.querySelector('.viewer-canvas');
  const original = dialog.querySelector('[data-original]');
  const zoom = dialog.querySelector('[data-zoom]');
  const close = dialog.querySelector('[data-close]');
  let opener = null;

  const resetZoom = () => {
    canvas.classList.remove('is-full-size');
    zoom.setAttribute('aria-pressed', 'false');
    zoom.textContent = 'Show full size';
    canvas.scrollTo(0, 0);
  };
  document.querySelectorAll('[data-screen]').forEach((link) => {
    link.addEventListener('click', (event) => {
      // Preserve open-in-new-tab behavior and the raw-image fallback without JS.
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      picture.src = link.href;
      picture.alt = link.querySelector('img').alt;
      title.textContent = link.dataset.screen;
      caption.textContent = link.dataset.caption;
      original.href = link.href;
      resetZoom();
      dialog.showModal();
      document.body.classList.add('viewer-open');
      close.focus();
    });
  });
  zoom.addEventListener('click', () => {
    const full = canvas.classList.toggle('is-full-size');
    zoom.setAttribute('aria-pressed', String(full));
    zoom.textContent = full ? 'Fit to screen' : 'Show full size';
    canvas.scrollTo(0, 0);
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    // A delayed close event must not clear an image opened in the meantime.
    if (dialog.open) return;
    document.body.classList.remove('viewer-open');
    picture.removeAttribute('src');
    // Native dialog already restores focus. Do not steal a newer user focus.
    const active = document.activeElement;
    if (!active || active === document.body || dialog.contains(active)) {
      opener?.focus({ preventScroll: true });
    }
  });
})();
