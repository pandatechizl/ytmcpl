// ===============================
// JS for Your Trustee Website
// ===============================

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href').includes('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card, .step, .about-section, .contact-info, .contact-form').forEach(el => {
  observer.observe(el);
});

// Simple contact form simulation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you for reaching out! We will contact you shortly.');
      form.reset();
    });
  }
});
