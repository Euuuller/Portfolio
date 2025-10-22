/**
 * ==========================================
 * MÓDULO DE NAVEGAÇÃO E SCROLL
 * ==========================================
 */

const SELECTORS = {
    navLinks: 'a[href^="#"]',
    sections: 'section[id]',
    header: '.header'
};

function scrollToSection(section) {
    try {
        const headerHeight = document.querySelector(SELECTORS.header)?.offsetHeight || 80;
        const targetPosition = section.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    } catch (error) {
        console.error('Erro no scroll para seção:', error);
    }
}

export function initNavigation() {
    try {
        const navLinks = document.querySelectorAll(SELECTORS.navLinks);
        
        if (navLinks.length === 0) {
            console.warn('Nenhum link de navegação encontrado');
            return;
        }
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                if (!targetId || targetId === '#') {
                    e.preventDefault();
                    return;
                }

                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    e.preventDefault();
                    scrollToSection(targetSection);
                }
            });
        });
    } catch (error) {
        console.error('Erro na inicialização da navegação:', error);
    }
}

export function updateActiveNavLink() {
    try {
        const scrollPosition = window.scrollY + 150; // Offset para ativar o link um pouco antes
        const sections = document.querySelectorAll(SELECTORS.sections);

        let activeSectionId = null;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activeSectionId = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.header__nav-link, .mobile-menu__nav-link').forEach(link => {
            link.classList.remove('header__nav-link--active', 'mobile-menu__nav-link--active');
            
            if (activeSectionId && link.getAttribute('href') === `#${activeSectionId}`) {
                const activeClass = link.classList.contains('header__nav-link') 
                    ? 'header__nav-link--active' 
                    : 'mobile-menu__nav-link--active';
                link.classList.add(activeClass);
            }
        });

    } catch (error) {
        console.error('Erro ao atualizar link ativo:', error);
    }
}