/**
 * CVDownload Module
 * Handles CV download button and user feedback
 */

import { showToast } from '../utils/UiUtils.js';

export const initCVDownload = () => {
  const btnCV = document.getElementById('btnCV');
  const btnDownloadCV = document.getElementById('btnDownloadCV');

  const handleDownload = () => {
    // ✨ Download real do arquivo CV
    const link = document.createElement('a');
    link.href = './assets/docs/cv.pdf';
    link.download = 'Euller_Duarte_CV.pdf';
    link.click();
    
    // Feedback para o usuário
    showToast('Currículo baixado com sucesso! 📄', 'success');
  };

  if (btnCV) {
    btnCV.addEventListener('click', handleDownload);
  }

  if (btnDownloadCV) {
    btnDownloadCV.addEventListener('click', handleDownload);
  }
};

