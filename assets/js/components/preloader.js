/**
 * ==========================================
 * MÓDULO DO PRELOADER
 * ==========================================
 */

const SELECTORS = {
    preloader: '#preloader',
    mainContent: '#main-content'
};

let preloader, mainContent;

function hidePreloader() {
    try {
        if (preloader && mainContent) {
            preloader.classList.add('hidden');
            mainContent.classList.add('loaded');
            
            // Remove o preloader do DOM após a animação para não interferir com outros elementos
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    } catch (error) {
        console.error('Erro ao ocultar preloader:', error);
    }
}

export function initPreloader() {
    try {
        preloader = document.querySelector(SELECTORS.preloader);
        mainContent = document.querySelector(SELECTORS.mainContent);
        
        if (!preloader || !mainContent) {
            console.warn('Elementos do preloader não encontrados');
            // Se não houver preloader, mostra o conteúdo principal imediatamente
            if(mainContent) mainContent.classList.add('loaded');
            return;
        }
        
        // Fallback para garantir que o preloader suma mesmo que o evento 'load' falhe
        const fallbackTimeout = setTimeout(() => hidePreloader(), 3000);

        window.addEventListener('load', () => {
            clearTimeout(fallbackTimeout);
            hidePreloader();
        });

    } catch (error) {
        console.error('Erro na inicialização do preloader:', error);
        // Garante que o conteúdo seja exibido em caso de erro
        if(mainContent) mainContent.classList.add('loaded');
    }
}