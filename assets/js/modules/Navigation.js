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
  
  // State tracking to minimize DOM writes
  let isScrolled = false;
  let ticking = false;

  // 1. Optimized Header Scroll Effect
  const onScroll = () => {
    const currentScrollY = window.scrollY;
    // Only write to DOM if state changes
    if (currentScrollY > 50 && !isScrolled) {
      header?.classList.add('scrolled');
      isScrolled = true;
    } else if (currentScrollY <= 50 && isScrolled) {
      header?.classList.remove('scrolled');
      isScrolled = false;
    }
    ticking = false;
  };

  const requestScrollUpdate = () => {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestScrollUpdate, { passive: true });

  // 2. High Performance ScrollSpy using IntersectionObserver
  // This completely removes the need to calculate offsets on every scroll event
  const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // Active when section is in middle of viewport
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Update Desktop Links
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
        
        // Mobile links update (optional, usually closed)
        mobileNavLinks.forEach(link => {
           // Mobile menu usually closes on click, but good to sync state
           if (link.getAttribute('href') === `#${id}`) {
             // Logic if needed
           }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));

  // 3. Smooth Scroll \u0026 Mobile Menu Handling
  const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId || targetId === '#') return;
    
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const headerHeight = header?.offsetHeight || 80;
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      closeMobileMenu();
    }
  };

  // Mobile Menu Logic
  const toggleMobileMenu = () => {
    const isOpen = mobileToggle?.classList.contains('active');
    isOpen ? closeMobileMenu() : openMobileMenu();
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

  // Event Listeners
  navLinks.forEach(link => link.addEventListener('click', smoothScroll));
  mobileNavLinks.forEach(link => link.addEventListener('click', smoothScroll));
  mobileToggle?.addEventListener('click', toggleMobileMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
  });

  document.addEventListener('click', (e) => {
    if (mobileMenu?.classList.contains('active') && 
        !mobileMenu.contains(e.target) && 
        !mobileToggle?.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // Initial Check
  onScroll();
};

