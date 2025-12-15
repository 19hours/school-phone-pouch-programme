const toggle = document.querySelector('.menu-toggle');
const navWrapper = document.querySelector('.nav-wrapper');

if (toggle && navWrapper) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navWrapper.classList.toggle('open');
  });
}

document.querySelectorAll('a').forEach((link) => {
  const href = link.getAttribute('href');
  if (href && href !== '#' && href !== '/' && window.location.pathname === href) {
    link.classList.add('active');
  }
  if (href === '/' && window.location.pathname === '/') {
    link.classList.add('active');
  }
});
