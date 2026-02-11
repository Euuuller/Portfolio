/**
 * Main Application Entry Point
 * Orchestrates the initialization of all modules
 */

// Core Modules
import { initPerformanceMonitoring } from './core/Performance.js';

// UI Modules
import { initMathBackground } from './ui/MathBackground.js';
import { initTypingEffect } from './ui/TypingEffect.js';
import { initNavigation } from './ui/Navigation.js';
import { initThemeManager } from './ui/ThemeManager.js';
import { initTabManager } from './ui/TabManager.js';
import { initScrollReveal } from './ui/ScrollReveal.js';
import { initBackToTop } from './ui/BackToTop.js';
import { initPreloader } from './ui/Preloader.js';

// Services
import { initSkillsLoader } from './services/SkillsLoader.js';
import { initProjectFilter } from './services/ProjectFilter.js';
import { initProjectModal } from './services/ProjectModal.js';
import { initContactForm } from './services/ContactForm.js';
import { initGithubStats } from './services/GithubStats.js';
import { initCVDownload } from './services/CVDownload.js';

// Utils
import { initYearUpdater } from './utils/YearUpdater.js';

/**
 * Initialize all application modules
 */
const initApp = () => {
  // Initialize in priority order
  initPreloader();
  initThemeManager();
  initNavigation();
  initYearUpdater();
  
  // Visual & Interactive Effects
  initMathBackground();
  initTypingEffect();
  initScrollReveal();
  initGithubStats();
  
  // Components & Features
  initSkillsLoader();
  initTabManager();
  initProjectFilter();
  initProjectModal();
  initContactForm();
  initCVDownload();
  initBackToTop();
  
  // Monitoring
  initPerformanceMonitoring();

  console.log('✨ Portfolio initialized successfully!');
};

// Start application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
