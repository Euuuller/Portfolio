/**
 * YearUpdater Module
 * Automatically updates the current year in the footer
 */

export const initYearUpdater = () => {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
};
