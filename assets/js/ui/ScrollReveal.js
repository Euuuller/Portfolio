/**
 * Scroll Reveal Module
 * Animates elements as they enter the viewport
 */

export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll(
    '.section-title, .section-subtitle, .about-image, .stat-card, .skill-card, .project-card, .contact-item, .contact-form'
  );

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  };

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver(revealOnScroll, observerOptions);

  revealElements.forEach((el, index) => {
    el.classList.add('reveal');
    if (el.classList.contains('skill-card') || el.classList.contains('project-card') || el.classList.contains('stat-card')) {
      el.classList.add(`reveal-delay-${(index % 5) + 1}`);
    }
    observer.observe(el);
  });
};

