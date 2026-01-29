/**
 * Main Module
 * Initialize all functionality and handle global events
 */

(function() {
  'use strict';

  // Update current year in footer
  function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // Back to top button
  function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    function toggleVisibility() {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // CV Download button
  function initCVDownload() {
    const btnCV = document.getElementById('btnCV');
    if (!btnCV) return;

    btnCV.addEventListener('click', () => {
      // Show toast message
      const toast = document.getElementById('toast');
      if (toast) {
        const toastMessage = toast.querySelector('.toast-message');
        if (toastMessage) {
          toastMessage.textContent = 'Currículo em breve disponível para download!';
        }
        toast.className = 'toast info active';
        setTimeout(() => {
          toast.classList.remove('active');
        }, 4000);
      }
    });
  }

  // Preload critical resources
  function preloadResources() {
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap'
    ];

    criticalFonts.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      document.head.appendChild(link);
    });
  }

  // Performance monitoring
  function initPerformanceMonitoring() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.timing;
          const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
          console.log(`Page load time: ${pageLoadTime}ms`);
        }, 0);
      });
    }
  }

  // Initialize all functionality
  function init() {
    updateCurrentYear();
    initBackToTop();
    initCVDownload();
    preloadResources();
    initPerformanceMonitoring();

    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
