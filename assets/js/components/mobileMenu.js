/**
 * ==========================================
 * MÓDULO DE MENU MOBILE - OTIMIZADO
 * ==========================================
 */

const SELECTORS = {
    toggle: '#mobile-menu-toggle',
    menu: '#mobile-menu',
    close: '#mobile-menu-close',
    overlay: '#mobile-menu-overlay',
    links: '.mobile-menu__nav-link'
};

let mobileMenu, mobileMenuToggle;

function openMobileMenu() {
    try {
        if (mobileMenu && mobileMenuToggle) {
            mobileMenu.classList.add('active');
            mobileMenuToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    } catch (error) {
        console.error('Erro ao abrir menu mobile:', error);
    }
}

function closeMobileMenu() {
    try {
        if (mobileMenu && mobileMenuToggle) {
            mobileMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    } catch (error) {
        console.error('Erro ao fechar menu mobile:', error);
    }
}

/**
 * Event delegation handler para cliques no menu mobile
 */
function handleMobileMenuClick(event) {
    const target = event.target;
    
    // Toggle do menu
    if (target.matches(SELECTORS.toggle) || target.closest(SELECTORS.toggle)) {
        event.preventDefault();
        openMobileMenu();
        return;
    }
    
    // Fechar menu
    if (target.matches(SELECTORS.close) || 
        target.matches(SELECTORS.overlay) ||
        target.matches(SELECTORS.links)) {
        event.preventDefault();
        closeMobileMenu();
        return;
    }
}

export function initMobileMenu() {
    try {
        mobileMenuToggle = document.querySelector(SELECTORS.toggle);
        mobileMenu = document.querySelector(SELECTORS.menu);

        if (!mobileMenuToggle || !mobileMenu) {
            console.warn('Elementos do menu mobile não encontrados');
            return;
        }

        // Event delegation para todos os cliques relacionados ao menu mobile
        document.addEventListener('click', handleMobileMenuClick);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu?.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        // Resize handler com throttle implícito
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.innerWidth >= 992 && mobileMenu?.classList.contains('active')) {
                    closeMobileMenu();
                }
            }, 100);
        }, { passive: true });

    } catch (error) {
        console.error('Erro na inicialização do menu mobile:', error);
    }
}