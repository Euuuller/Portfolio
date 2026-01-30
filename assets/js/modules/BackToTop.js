/**
 * BackToTop Module
 * Handles visibility and functionality of the scroll-to-top button
 */

export const initBackToTop = () => {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;

  let isVisible = false;
  let ticking = false;

  const toggleVisibility = () => {
    const currentScrollY = window.scrollY;
    
    // Optimized: Only touch DOM if state needs to change
    if (currentScrollY > 500 && !isVisible) {
      backToTop.classList.add('visible');
      isVisible = true;
    } else if (currentScrollY <= 500 && isVisible) {
      backToTop.classList.remove('visible');
      isVisible = false;
    }
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(toggleVisibility);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};
