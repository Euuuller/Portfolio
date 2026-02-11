/**
 * Theme Module
 * Handles dark/light mode toggle and persistence
 * DEFAULT: Dark theme (matching original site)
 */

const STORAGE_KEY = 'portfolio-theme';
const html = document.documentElement;

const getPreferredTheme = () => {
  const storedTheme = localStorage.getItem(STORAGE_KEY);
  return storedTheme || 'dark';
};

export const setTheme = (theme) => {
  html.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEY, theme);

  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#ffffff');
  }

  window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
};

const toggleTheme = () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
};

export const initThemeManager = () => {
  const themeToggle = document.getElementById('themeToggle');
  
  // Set initial theme - DEFAULT DARK
  const preferredTheme = getPreferredTheme();
  setTheme(preferredTheme);

  // Toggle listener
  themeToggle?.addEventListener('click', toggleTheme);

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
};

