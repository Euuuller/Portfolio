/**
 * ==========================================
 * UTILITÁRIO THROTTLE
 * ==========================================
 */

/**
 * Cria uma função "throttled" que só invoca `func` no máximo uma vez por `wait` milissegundos.
 * @param {Function} func A função para throttle.
 * @param {number} wait O número de milissegundos para throttle.
 * @returns {Function} Retorna a nova função throttled.
 */
export function throttle(func, wait) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, wait);
        }
    };
}