/**
 * Main Application Entry Point
 * Orchestrates the initialization of all modules
 */

// Core Modules
import { initMathBackground } from './modules/MathBackground.js';
import { initTypingEffect } from './modules/TypingEffect.js';
import { initNavigation } from './modules/Navigation.js';
import { initThemeManager } from './modules/ThemeManager.js';
import { initTabManager } from './modules/TabManager.js';
import { initSkillsLoader } from './modules/SkillsLoader.js';
import { initProjectFilter } from './modules/ProjectFilter.js';
import { initScrollReveal } from './modules/ScrollReveal.js';
import { initContactForm } from './modules/ContactForm.js';
import { initGithubStats } from './modules/GithubStats.js';

// Modular Components
import { initYearUpdater } from './modules/YearUpdater.js';
import { initBackToTop } from './modules/BackToTop.js';
import { initCVDownload } from './modules/CVDownload.js';
import { initPerformanceMonitoring } from './modules/Performance.js';
import { initPreloader } from './modules/Preloader.js';

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
