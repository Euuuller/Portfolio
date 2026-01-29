/**
 * CVDownload Module
 * Handles CV download button and user feedback
 */

import { showToast } from '../utils/UiUtils.js';

export const initCVDownload = () => {
  const btnCV = document.getElementById('btnCV');
  if (!btnCV) return;

  btnCV.addEventListener('click', () => {
    showToast('Currículo em breve disponível para download!', 'info');
  });
};

