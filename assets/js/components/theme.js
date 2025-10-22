/**
 * ==========================================
 * MÓDULO DE TEMA CLARO/ESCURO
 * ==========================================
 */

import { APP_CONFIG } from '../config.js';

let currentTheme;

/**
 * Obtém o tema armazenado no localStorage.
 * @returns {string | null} O tema armazenado ou nulo.
 */
function getStoredTheme() {
    try {
        return localStorage.getItem(APP_CONFIG.theme.storageKey);
    } catch (error) {
        console.warn('LocalStorage não disponível:', error);
        return null;
    }
}

/**
 * Salva o tema no localStorage.
 * @param {string} theme O tema a ser salvo ('light' or 'dark').
 */
function setStoredTheme(theme) {
    try {
        localStorage.setItem(APP_CONFIG.theme.storageKey, theme);
    } catch (error) {
        console.warn('Não foi possível salvar o tema:', error);
    }
}

/**
 * Aplica o tema ao documento.
 * @param {string} theme O tema a ser aplicado.
 */
function applyTheme(theme) {
    try {
        document.documentElement.setAttribute('data-theme', theme);
        currentTheme = theme;
        setStoredTheme(theme);
    } catch (error) {
        console.error('Erro ao aplicar tema:', error);
    }
}

/**
 * Alterna entre o tema claro e escuro.
 */
function toggleTheme() {
    try {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    } catch (error) {
        console.error('Erro ao alternar tema:', error);
    }
}

/**
 * Inicializa o sistema de temas.
 */
export function initTheme() {
    try {
        const themeToggle = document.getElementById('theme-toggle');
        
        if (!themeToggle) {
            console.warn('Botão de toggle de tema não encontrado');
            return;
        }
        
        currentTheme = getStoredTheme() || APP_CONFIG.theme.defaultTheme;
        
        applyTheme(currentTheme);
        
        themeToggle.addEventListener('click', toggleTheme);

    } catch (error) {
        console.error('Erro na inicialização do tema:', error);
    }
}