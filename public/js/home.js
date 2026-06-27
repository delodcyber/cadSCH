document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  const year = document.getElementById('year');
  const contactForm = document.getElementById('contactForm');
  const newsletterForm = document.getElementById('newsletterForm');
  const formNote = document.getElementById('formNote');

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (event) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (siteNav && siteNav.classList.contains('is-open')) {
        siteNav.classList.remove('is-open');
        navToggle?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  if (contactForm && formNote) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      formNote.textContent = 'Message captured. Hook this form to your backend next.';
      contactForm.reset();
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Newsletter form is ready. Connect it to your email service or database.');
      newsletterForm.reset();
    });
  }
});
