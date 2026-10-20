const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Close menu' : 'Open menu');
    navigation.classList.toggle('is-open', expanded);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    navigation.classList.remove('is-open');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
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

const contactButton = document.querySelector('.contact-reveal');
const contactDetails = document.querySelector('#contact-details');
if (contactButton && contactDetails) {
  contactButton.addEventListener('click', event => {
    if (!event.isTrusted) return;
    const expanded = contactButton.getAttribute('aria-expanded') !== 'true';
    contactDetails.replaceChildren();
    if (expanded) {
      const address = String.fromCharCode(106, 119, 107, 111, 64, 107, 97, 115, 105, 46, 114, 101, 46, 107, 114);
      const link = document.createElement('a');
      link.textContent = address;
      link.href = `mailto:${address}`;
      contactDetails.append(link);
    }
    contactDetails.hidden = !expanded;
    contactButton.setAttribute('aria-expanded', String(expanded));
    contactButton.textContent = expanded ? 'Hide email' : 'Project inquiries · Show email';
  });
}
