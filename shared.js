const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(expanded));
    menuButton.setAttribute('aria-label', expanded ? '메뉴 닫기' : '메뉴 열기');
    navigation.classList.toggle('is-open', expanded);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '메뉴 열기');
    navigation.classList.remove('is-open');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', '메뉴 열기');
      navigation.classList.remove('is-open');
      menuButton.focus();
    }
  });
}

const viewer = document.querySelector('#image-viewer');
if (viewer) {
  const photo = viewer.querySelector('img');
  const caption = viewer.querySelector('figcaption');
  document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
    photo.src = button.dataset.image;
    photo.alt = button.dataset.caption;
    caption.textContent = button.dataset.caption;
    viewer.showModal();
  }));
  viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
  viewer.addEventListener('close', () => { photo.removeAttribute('src'); });
}
