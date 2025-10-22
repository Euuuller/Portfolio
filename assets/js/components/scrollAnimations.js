/**
 * ==========================================
 * MÓDULO DE ANIMAÇÕES DE SCROLL
 * ==========================================
 */

import { APP_CONFIG } from '../config.js';

const ANIMATED_ELEMENTS_SELECTOR = '.fade-in, .fade-in-left, .fade-in-right';

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
            el.style.transitionDelay = `${index * 0.08}s`;
        });
    } catch (error) {
        console.error('Erro ao adicionar classes de animação:', error);
    }
}

export function checkVisibleElements() {
    try {
        const animatedElements = document.querySelectorAll(ANIMATED_ELEMENTS_SELECTOR);
        
        animatedElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    } catch (error) {
        console.error('Erro ao verificar elementos visíveis:', error);
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