/**
 * ==========================================
 * MÓDULO DE ANIMAÇÕES DE SCROLL - OTIMIZADO
 * ==========================================
 */

import { APP_CONFIG } from '../config.js';

const ANIMATED_ELEMENTS_SELECTOR = '.fade-in, .fade-in-left, .fade-in-right';
let ticking = false;
let animatedElements = [];

function isElementInViewport(element) {
    try {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        return (
            rect.top <= windowHeight - APP_CONFIG.animation.scrollOffset &&
            rect.bottom >= APP_CONFIG.animation.scrollOffset
        );
    } catch (error) {
        console.error('Erro ao verificar viewport:', error);
        return false;
    }
}

function addAnimationClasses() {
    try {
        document.querySelectorAll('.section-header').forEach(el => el.classList.add('fade-in'));
        document.querySelectorAll('.hero__text, .about__text').forEach(el => el.classList.add('fade-in-left'));
        document.querySelectorAll('.hero__image, .about__image').forEach(el => el.classList.add('fade-in-right'));
        document.querySelectorAll('.contact__form').forEach(el => el.classList.add('fade-in'));

        document.querySelectorAll('.skill-card, .project-card').forEach((el, index) => {
            el.classList.add('fade-in');
            el.style.transitionDelay = `${index * 0.05}s`; // Reduzido de 0.08s para 0.05s
        });
        
        // Cache dos elementos animados
        animatedElements = Array.from(document.querySelectorAll(ANIMATED_ELEMENTS_SELECTOR));
    } catch (error) {
        console.error('Erro ao adicionar classes de animação:', error);
    }
}

function updateVisibleElements() {
    try {
        animatedElements.forEach(element => {
            if (!element.classList.contains('visible') && isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
        
        // Remove elementos já visíveis do array para otimizar futuras verificações
        animatedElements = animatedElements.filter(el => !el.classList.contains('visible'));
        
        ticking = false;
    } catch (error) {
        console.error('Erro ao verificar elementos visíveis:', error);
        ticking = false;
    }
}

export function checkVisibleElements() {
    if (!ticking) {
        requestAnimationFrame(updateVisibleElements);
        ticking = true;
    }
}

export function initScrollAnimations() {
    try {
        addAnimationClasses();
        checkVisibleElements(); // Verifica no carregamento inicial
    } catch (error) {
        console.error('Erro na inicialização das animações de scroll:', error);
    }
}