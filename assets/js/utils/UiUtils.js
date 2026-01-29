/**
 * UI Utilities
 * Shared UI functions for visual feedback
 */

export const showToast = (message, type = 'success') => {
  const toast = document.getElementById('toast');
  if (!toast) return;

  const toastMessage = toast.querySelector('.toast-message');
  if (toastMessage) {
    toastMessage.textContent = message;
  }

  // Clear existing classes then add new ones
  toast.className = `toast ${type} active`;

  setTimeout(() => {
    toast.classList.remove('active');
  }, 4000);
};
