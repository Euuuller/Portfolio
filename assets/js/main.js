/**
 * ==========================================
 * ARQUIVO DE ENTRADA PRINCIPAL (MAIN)
 * Orquestra a inicialização de todos os módulos da aplicação.
 * ==========================================
 */

import { APP_CONFIG } from './config.js';
import { debounce } from './utils/debounce.js';
import { initTheme } from './components/theme.js';
import { initMobileMenu } from './components/mobileMenu.js';
import { initNavigation, updateActiveNavLink } from './components/navigation.js';
import { initTypingEffect, cleanupTypingEffect } from './components/typingEffect.js';
import { initScrollAnimations, checkVisibleElements } from './components/scrollAnimations.js';
import { initContactForm } from './components/contactForm.js';
import { initPreloader } from './components/preloader.js';
import { initScrollToTop } from './components/scrollToTop.js';
/**
 * Classe principal da aplicação para organizar a inicialização.
 */
class App {
    constructor() {
        this.isInitialized = false;
        this.init();
    }

    /**
     * Ponto de entrada que aguarda o DOM estar pronto.
     */
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeApp());
        } else {
            this.initializeApp();
        }
    }

    /**
     * Inicializa todos os módulos e vincula eventos globais.
     */
    initializeApp() {
        if (this.isInitialized) return;

        console.log('🚀 Inicializando aplicação...');
        try {
            // Inicializa todos os componentes
            initPreloader();
            initTheme();
            initMobileMenu();
            initNavigation();
            initTypingEffect();
            initScrollAnimations();
            initContactForm();
            initScrollToTop();

            this.bindGlobalEvents();

            this.isInitialized = true;
            console.log('✅ Aplicação inicializada com sucesso');

        } catch (error) {
            console.error('❌ Erro crítico na inicialização da aplicação:', error);
        }
    }

    /**
     * Vincula eventos que precisam de coordenação central.
     */
    bindGlobalEvents() {
        const debouncedScrollHandler = debounce(() => {
            updateActiveNavLink();
            checkVisibleElements();
        }, APP_CONFIG.animation.debounceDelay);

        window.addEventListener('scroll', debouncedScrollHandler);

        // Exemplo de cleanup (se necessário)
        window.addEventListener('beforeunload', () => {
            cleanupTypingEffect();
        });
    }
}

// Inicializa a aplicação
new App();

// Exposição para debug em ambiente de desenvolvimento
if (window.location.hostname === 'localhost') {
    window.APP_CONFIG = APP_CONFIG;
    console.log('🔧 Modo de desenvolvimento ativo');
}