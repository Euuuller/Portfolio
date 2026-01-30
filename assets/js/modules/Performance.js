/**
 * Performance Module
 * Monitors and logs page performance metrics
 */

export const initPerformanceMonitoring = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      // Use setTimeout to ensure metrics are complete
      setTimeout(() => {
        const perfData = performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        // console.log(`Page load time: ${pageLoadTime}ms`);
      }, 0);
    });
  }
};
