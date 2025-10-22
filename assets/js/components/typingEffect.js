/**
 * ==========================================
 * MÓDULO DE EFEITO DE DIGITAÇÃO
 * ==========================================
 */

import { APP_CONFIG } from '../config.js';

const SELECTOR = '#typed-text';

let typedElement;
let typingTimeout = null;
let currentStringIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeText() {
    try {
        if (!typedElement || !APP_CONFIG.typing.strings.length) return;
        
        const currentString = APP_CONFIG.typing.strings[currentStringIndex];
        
        if (isDeleting) {
            // Removendo caracteres
            typedElement.textContent = currentString.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentStringIndex = (currentStringIndex + 1) % APP_CONFIG.typing.strings.length;
                typingTimeout = setTimeout(typeText, 500);
            } else {
                typingTimeout = setTimeout(typeText, APP_CONFIG.typing.backSpeed);
            }
        } else {
            // Adicionando caracteres
            typedElement.textContent = currentString.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            
            if (currentCharIndex === currentString.length) {
                if (APP_CONFIG.typing.loop) {
                    isDeleting = true;
                    typingTimeout = setTimeout(typeText, APP_CONFIG.typing.backDelay);
                }
            } else {
                typingTimeout = setTimeout(typeText, APP_CONFIG.typing.typeSpeed);
            }
        }
    } catch (error) {
        console.error('Erro no efeito de digitação:', error);
    }
}

export function initTypingEffect() {
    try {
        typedElement = document.querySelector(SELECTOR);
        
        if (!typedElement) {
            console.warn('Elemento de texto digitado não encontrado');
            return;
        }

        setTimeout(typeText, APP_CONFIG.typing.startDelay);
    } catch (error) {
        console.error('Erro na inicialização do efeito de digitação:', error);
    }
}

// Função para limpar o timeout se o módulo for destruído
export function cleanupTypingEffect() {
    if (typingTimeout) {
        clearTimeout(typingTimeout);
    }
}