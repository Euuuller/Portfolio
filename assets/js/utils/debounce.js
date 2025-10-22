/**
 * ==========================================
 * UTILITÁRIO DEBOUNCE
 * ==========================================
 */

/**
 * Cria uma função "debounced" que atrasa a invocação de `func` até que `wait` milissegundos tenham se passado
 * desde a última vez que a função "debounced" foi invocada.
 * @param {Function} func A função para debounce.
 * @param {number} wait O número de milissegundos para atrasar.
 * @returns {Function} Retorna a nova função debounced.
 */
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}