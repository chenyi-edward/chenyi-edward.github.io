/* The course content is rendered by Jekyll from each course's Markdown file. */
'use strict';
(() => {
  const buttons = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-course-level]');
  const count = document.getElementById('course-count');
  if (!buttons.length) return;
  buttons.forEach(button => button.addEventListener('click', () => {
    const level = button.dataset.filter;
    let visible = 0;
    buttons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    cards.forEach(card => {
      card.hidden = level !== 'all' && card.dataset.courseLevel !== level;
      if (!card.hidden) visible++;
    });
    if (count) count.textContent = `Showing ${visible} ${level === 'all' ? '' : level.toLowerCase() + ' '}courses`;
  }));
})();
