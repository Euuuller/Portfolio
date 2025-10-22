/**
 * ==========================================
 * MÓDULO DO BOTÃO VOLTAR AO TOPO
 * ==========================================
 */

const SELECTOR = '#scroll-to-top';

function handleScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

export function initScrollToTop() {
    try {
        const scrollToTopBtn = document.querySelector(SELECTOR);
        
        if (!scrollToTopBtn) {
            console.warn('Botão de voltar ao topo não encontrado');
            return;
        }
        
        scrollToTopBtn.addEventListener('click', handleScrollToTop);
    } catch (error) {
        console.error('Erro na inicialização do botão voltar ao topo:', error);
    }
}