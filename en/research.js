const paperFilters = document.querySelector('.paper-filters');
const publications = document.querySelectorAll('.publication[data-topic]');
const paperCount = document.querySelector('.paper-count');
if (paperFilters && paperCount) {
  paperFilters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button || !paperFilters.contains(button)) return;
    const filter = button.dataset.filter;
    let visible = 0;
    publications.forEach(paper => {
      paper.hidden = filter !== 'all' && paper.dataset.topic !== filter;
      if (!paper.hidden) visible += 1;
    });
    paperFilters.querySelectorAll('button').forEach(item => {
      item.setAttribute('aria-pressed', String(item === button));
    });
    paperCount.textContent = `${button.textContent} · ${visible} papers`;
  });
}
