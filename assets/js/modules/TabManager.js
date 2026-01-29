/**
 * Tabs Module
 * Handles skills section tab navigation
 */

export const initTabManager = () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  const switchTab = (targetBtn) => {
    const targetPanelId = targetBtn.getAttribute('aria-controls');
    const targetPanel = document.getElementById(targetPanelId);

    // Deactivate all tabs
    tabButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });

    tabPanels.forEach(panel => {
      panel.classList.remove('active');
      panel.hidden = true;
    });

    // Activate target tab
    targetBtn.classList.add('active');
    targetBtn.setAttribute('aria-selected', 'true');

    if (targetPanel) {
      targetPanel.classList.add('active');
      targetPanel.hidden = false;
    }
  };

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn));

    // Keyboard navigation
    btn.addEventListener('keydown', (e) => {
      const currentIndex = Array.from(tabButtons).indexOf(btn);
      let nextIndex;

      switch (e.key) {
        case 'ArrowRight':
          nextIndex = (currentIndex + 1) % tabButtons.length;
          tabButtons[nextIndex].focus();
          switchTab(tabButtons[nextIndex]);
          e.preventDefault();
          break;
        case 'ArrowLeft':
          nextIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
          tabButtons[nextIndex].focus();
          switchTab(tabButtons[nextIndex]);
          e.preventDefault();
          break;
        case 'Home':
          tabButtons[0].focus();
          switchTab(tabButtons[0]);
          e.preventDefault();
          break;
        case 'End':
          tabButtons[tabButtons.length - 1].focus();
          switchTab(tabButtons[tabButtons.length - 1]);
          e.preventDefault();
          break;
      }
    });
  });
};

