'use strict';
(() => {
  const button = document.querySelector('[data-copy-citation]');
  const citation = document.getElementById('citation-text');
  const status = document.querySelector('.copy-status');
  if (!button || !citation || !status) return;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(citation.textContent.trim());
      button.textContent = 'Copied';
      status.textContent = 'Citation copied to clipboard.';
      window.setTimeout(() => { button.textContent = 'Copy citation'; }, 2500);
    } catch {
      status.classList.remove('sr-only');
      status.textContent = 'Please select and copy the citation above.';
    }
  });
})();
