/**
 * CVDownload Module
 * Handles CV download button and user feedback
 */

import { showToast } from '../utils/UiUtils.js';

export const initCVDownload = () => {
  const btnCV = document.getElementById('btnCV');
  const btnDownloadCV = document.getElementById('btnDownloadCV');

  const handleDownload = () => {
    // Para adicionar o PDF real:
    // 1. Crie uma pasta 'assets/documents'
    // 2. Coloque o arquivo 'cv.pdf' lá
    // 3. Descomente a linha abaixo e remova o toast
    // window.open('assets/documents/cv.pdf', '_blank');
    
    showToast('Currículo em breve disponível para download!', 'info');
  };

  if (btnCV) {
    btnCV.addEventListener('click', handleDownload);
  }

  if (btnDownloadCV) {
    btnDownloadCV.addEventListener('click', handleDownload);
  }
};

