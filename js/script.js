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

// Include components onLoad
document.addEventListener('DOMContentLoaded', () => {
  ['disclaimer', 'header', 'banner', 'footer'].forEach(name => {
    fetch(`components/${name}.html`)
      .then(res => res.text())
      .then(html => document.getElementById(name).innerHTML = html)
      .then(() => { if (name === 'banner') initCarousel(); });
  });
});



function initCarousel() {
let slideIndex = 0;
showSlides();
function showSlides() {
let slides = document.getElementsByClassName('slides');
for (let i = 0; i < slides.length; i++) slides[i].style.display = 'none';
slideIndex++;
if (slideIndex > slides.length) { slideIndex = 1; }
slides[slideIndex-1].style.display = 'block';
setTimeout(showSlides, 5000);
}
}


// Buttons for manual navigation
function plusSlides(n) {
let slides = document.getElementsByClassName('slides');
let current = Array.from(slides).findIndex(s => s.style.display === 'block');
slides[current].style.display = 'none';
let nextIndex = (current + n + slides.length) % slides.length;
slides[nextIndex].style.display = 'block';
}
