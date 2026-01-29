/**
 * Navigation Module
 * Handles header scroll, mobile menu, and smooth scrolling
 */

export const initNavigation = () => {
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');

  let lastScrollY = window.scrollY;
  let ticking = false;

  // Header scroll effect
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Add/remove scrolled class
    if (currentScrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Update active nav link
    updateActiveNavLink();

    lastScrollY = currentScrollY;
    ticking = false;
  };

  const updateActiveNavLink = () => {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  // Smooth scroll
  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const headerHeight = header?.offsetHeight || 80;
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu
      closeMobileMenu();
    }
  }

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    const isOpen = mobileToggle?.classList.contains('active');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  const openMobileMenu = () => {
    mobileToggle?.classList.add('active');
    mobileToggle?.setAttribute('aria-expanded', 'true');
    mobileMenu?.classList.add('active');
    mobileMenu?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    mobileToggle?.classList.remove('active');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    mobileMenu?.classList.remove('active');
    mobileMenu?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Request animation frame for scroll
  const requestScrollUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  };

  // Event Listeners
  window.addEventListener('scroll', requestScrollUpdate, { passive: true });

  navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  mobileToggle?.addEventListener('click', toggleMobileMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });

  document.addEventListener('click', (e) => {
    if (mobileMenu?.classList.contains('active')) {
      if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });

  // Initial scroll check
  handleScroll();
};

