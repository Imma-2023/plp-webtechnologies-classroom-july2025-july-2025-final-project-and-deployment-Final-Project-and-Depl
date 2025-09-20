document.addEventListener('DOMContentLoaded', function () {
  // footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile menu toggle (uses class "active")
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }

  // contact form handling
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name')?.value.trim() || '';
      const email = document.getElementById('email')?.value.trim() || '';
      const message = document.getElementById('message')?.value.trim() || '';

      if (!name || !email || !message) {
        if (formMessage) { formMessage.textContent = '⚠️ Please fill in all fields.'; formMessage.style.color = 'red'; }
        return;
      }
      const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailOK) {
        if (formMessage) { formMessage.textContent = '⚠️ Please enter a valid email address.'; formMessage.style.color = 'red'; }
        return;
      }

      if (formMessage) { formMessage.textContent = '✅ Thank you! Your message has been sent successfully.'; formMessage.style.color = 'green'; }
      contactForm.reset();
    });
  }
});

