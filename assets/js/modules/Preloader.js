/**
 * Preloader Module
 * Handles preloading of critical resources and page load state
 */

export const initPreloader = () => {
  const criticalFonts = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap'
  ];

  criticalFonts.forEach(href => {
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      document.head.appendChild(link);
    }
  });

  // Add loaded class to body for CSS transitions
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });
};
