/**
 * ==========================================
 * MÓDULO DE MENU MOBILE
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

export function initMobileMenu() {
    try {
        mobileMenuToggle = document.querySelector(SELECTORS.toggle);
        mobileMenu = document.querySelector(SELECTORS.menu);
        const mobileMenuClose = document.querySelector(SELECTORS.close);
        const mobileMenuOverlay = document.querySelector(SELECTORS.overlay);
        const mobileMenuLinks = document.querySelectorAll(SELECTORS.links);

        if (!mobileMenuToggle || !mobileMenu) {
            console.warn('Elementos do menu mobile não encontrados');
            return;
        }

        mobileMenuToggle.addEventListener('click', openMobileMenu);
        mobileMenuClose?.addEventListener('click', closeMobileMenu);
        mobileMenuOverlay?.addEventListener('click', closeMobileMenu);

        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu?.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        // Adiciona listener para fechar o menu em telas maiores
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 992 && mobileMenu?.classList.contains('active')) {
                closeMobileMenu();
            }
        });

    } catch (error) {
        console.error('Erro na inicialização do menu mobile:', error);
    }
}