/**
 * ==========================================
 * ARQUIVO DE ENTRADA PRINCIPAL (MAIN) - OTIMIZADO
 * Orquestra a inicialização de todos os módulos da aplicação.
 * ==========================================
 */

import { APP_CONFIG } from './config.js';
import { debounce } from './utils/debounce.js';
import { throttle } from './utils/throttle.js';
import { initImageOptimization, preloadCriticalImages, cleanupImageOptimization } from './utils/imageOptimizer.js';
import { initTheme } from './components/theme.js';
import { initMobileMenu } from './components/mobileMenu.js';
import { initNavigation, updateActiveNavLink } from './components/navigation.js';
import { initTypingEffect, cleanupTypingEffect } from './components/typingEffect.js';
import { initScrollAnimations, checkVisibleElements } from './components/scrollAnimations.js';
import { initContactForm } from './components/contactForm.js';
import { initPreloader } from './components/preloader.js';
import { initScrollToTop } from './components/scrollToTop.js';
import { initAboutCodeSnippet } from './components/code.js';
import { initSkills } from './components/skills.js';

/**
 * Classe principal da aplicação para organizar a inicialização.
 */
class App {
    constructor() {
        this.isInitialized = false;
        this.scrollHandlers = new Map();
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
            // Preload de imagens críticas
            const criticalImages = [
                './assets/images/profile.svg',
                './assets/images/about-illustration.svg'
            ];
            preloadCriticalImages(criticalImages);

            // Inicializa todos os componentes
            initPreloader();
            initTheme();
            initMobileMenu();
            initNavigation();
            initTypingEffect();
            initScrollAnimations();
            initContactForm();
            initScrollToTop();
            initAboutCodeSnippet();
            initSkills();
            
            // Inicializa otimização de imagens
            initImageOptimization();

            // Vincula eventos globais
            this.bindGlobalEvents();

            this.isInitialized = true;
            console.log('✅ Aplicação inicializada com sucesso!');
        } catch (error) {
            console.error('❌ Erro na inicialização da aplicação:', error);
        }
    }

    /**
     * Vincula eventos que precisam de coordenação central com otimizações.
     */
    bindGlobalEvents() {
        // Throttle para scroll (mais eficiente para animações)
        const throttledScrollHandler = throttle(() => {
            checkVisibleElements();
        }, 16); // ~60fps

        // Debounce para navegação (menos crítico)
        const debouncedNavHandler = debounce(() => {
            updateActiveNavLink();
        }, APP_CONFIG.animation.debounceDelay);

        // Event delegation para cliques
        document.addEventListener('click', this.handleGlobalClick.bind(this));

        // Scroll otimizado
        window.addEventListener('scroll', () => {
            throttledScrollHandler();
            debouncedNavHandler();
        }, { passive: true });

        // Cleanup
        window.addEventListener('beforeunload', () => {
            cleanupTypingEffect();
            cleanupImageOptimization();
            this.cleanup();
        });
    }

    /**
     * Event delegation para cliques globais
     */
    handleGlobalClick(event) {
        // Smooth scroll para links internos
        if (event.target.matches('a[href^="#"]')) {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }

    /**
     * Cleanup de recursos
     */
    cleanup() {
        this.scrollHandlers.clear();
    }
}

// Inicializa a aplicação
new App();

// Exposição para debug em ambiente de desenvolvimento
if (window.location.hostname === 'localhost') {
    window.APP_CONFIG = APP_CONFIG;
    console.log('🔧 Modo de desenvolvimento ativo');
}