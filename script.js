/* =============================================
   DARA JEWELS — script.js
   ============================================= */

/* --- Año en el footer --- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* --- Navbar: añadir clase al hacer scroll --- */
const navbar = document.getElementById('navbar');
function onScroll() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* --- Menú móvil --- */
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', function () {
  const isOpen = mobileMenu.classList.toggle('open');
  navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(function (link) {
  link.addEventListener('click', function () {
    mobileMenu.classList.remove('open');
    navToggle.setAttribute('aria-label', 'Abrir menú');
    document.body.style.overflow = '';
  });
});

/* --- Scroll reveal --- */
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);

revealEls.forEach(function (el) {
  observer.observe(el);
});

/* --- Newsletter: feedback simple --- */
const newsletterBtn = document.querySelector('.newsletter-form button');
const newsletterInput = document.querySelector('.newsletter-form input');

if (newsletterBtn && newsletterInput) {
  newsletterBtn.addEventListener('click', function () {
    const email = newsletterInput.value.trim();
    if (!email || !email.includes('@')) {
      newsletterInput.placeholder = 'Ingresa un correo válido';
      return;
    }
    newsletterInput.value = '';
    newsletterInput.placeholder = 'Gracias por suscribirte';
  });
}
