// ========================================
// MAINish — Landing Page Scripts
// ========================================

(function () {
  'use strict';

  // Scroll reveal animation
  function initScrollReveal() {
    var elements = document.querySelectorAll(
      '.what-card, .step, .benefit-card, .proof-item, ' +
      '.section-label, .section h2, .section-body, ' +
      '.vision-body, .waitlist-inner, ' +
      '.narrative-lead, .narrative-body, .narrative-emphasis, ' +
      '.narrative-lines, .narrative-closing'
    );

    elements.forEach(function (el) {
      el.classList.add('reveal');
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Email form handling
  function initForms() {
    var forms = document.querySelectorAll('.email-form');

    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        var input = form.querySelector('input[type="email"]');
        var email = input.value.trim();

        if (!email) return;

        // Replace form with success message
        var success = document.createElement('div');
        success.className = 'form-success';
        success.innerHTML = '<p>You\'re on the list. We\'ll be in touch.</p>';
        form.parentNode.replaceChild(success, form);

        // Remove the form note if present
        var note = success.nextElementSibling;
        if (note && note.classList.contains('form-note')) {
          note.style.display = 'none';
        }
      });
    });
  }

  // Smooth nav background on scroll
  function initNav() {
    var nav = document.querySelector('.nav');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
      } else {
        nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.05)';
      }
    });
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    initForms();
    initNav();
  });
})();
