/**
 * ==========================================
 * UTILITÁRIO DE OTIMIZAÇÃO DE IMAGENS
 * ==========================================
 */

/**
 * Cache para imagens carregadas
 */
const imageCache = new Map();

/**
 * Observer para lazy loading de imagens
 */
let imageObserver = null;

/**
 * Configurações de otimização
 */
const IMAGE_CONFIG = {
    rootMargin: '50px 0px',
    threshold: 0.01,
    retryAttempts: 3,
    retryDelay: 1000
};

/**
 * Inicializa o lazy loading de imagens
 */
export function initImageOptimization() {
    if (!('IntersectionObserver' in window)) {
        // Fallback para navegadores sem suporte
        loadAllImages();
        return;
    }

    imageObserver = new IntersectionObserver(handleImageIntersection, {
        rootMargin: IMAGE_CONFIG.rootMargin,
        threshold: IMAGE_CONFIG.threshold
    });

    // Observa todas as imagens com lazy loading
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

/**
 * Manipula a interseção de imagens para lazy loading
 */
function handleImageIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            loadImageWithRetry(img);
            observer.unobserve(img);
        }
    });
}

/**
 * Carrega uma imagem com retry automático
 */
async function loadImageWithRetry(img, attempt = 1) {
    try {
        const src = img.dataset.src || img.src;
        
        // Verifica cache primeiro
        if (imageCache.has(src)) {
            applyImageFromCache(img, src);
            return;
        }

        // Carrega a imagem
        await loadImage(src);
        
        // Adiciona ao cache
        imageCache.set(src, true);
        
        // Aplica a imagem
        if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        }
        
        // Adiciona classe de carregamento
        img.classList.add('loaded');
        
    } catch (error) {
        console.warn(`Erro ao carregar imagem (tentativa ${attempt}):`, error);
        
        if (attempt < IMAGE_CONFIG.retryAttempts) {
            setTimeout(() => {
                loadImageWithRetry(img, attempt + 1);
            }, IMAGE_CONFIG.retryDelay * attempt);
        } else {
            // Fallback para erro
            img.classList.add('error');
            img.alt = 'Imagem não disponível';
        }
    }
}

/**
 * Promessa para carregar uma imagem
 */
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
    });
}

/**
 * Aplica imagem do cache
 */
function applyImageFromCache(img, src) {
    if (img.dataset.src) {
        img.src = src;
        img.removeAttribute('data-src');
    }
    img.classList.add('loaded', 'cached');
}

/**
 * Fallback para navegadores sem IntersectionObserver
 */
function loadAllImages() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.classList.add('loaded');
    });
}

/**
 * Preload de imagens críticas
 */
export function preloadCriticalImages(imageSources) {
    imageSources.forEach(src => {
        if (!imageCache.has(src)) {
            loadImage(src)
                .then(() => imageCache.set(src, true))
                .catch(error => console.warn('Erro no preload:', error));
        }
    });
}

/**
 * Cleanup do observer
 */
export function cleanupImageOptimization() {
    if (imageObserver) {
        imageObserver.disconnect();
        imageObserver = null;
    }
}