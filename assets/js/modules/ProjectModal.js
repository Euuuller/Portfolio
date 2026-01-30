/**
 * Project Modal Module
 * Handles opening/closing and populating the project details modal.
 */

export const initProjectModal = async () => {
  const modalOverlay = document.getElementById('projectModalOverlay');
  const modalCloseBtn = document.getElementById('modalClose');
  if (!modalOverlay || !modalCloseBtn) return;

  // DOM Elements to populate
  const elements = {
    image: document.getElementById('modalImage'),
    category: document.getElementById('modalCategory'),
    title: document.getElementById('modalTitle'),
    challenge: document.getElementById('modalChallenge'),
    solution: document.getElementById('modalSolution'),
    impact: document.getElementById('modalImpact'),
    btnDemo: document.getElementById('modalBtnDemo'),
    btnRepo: document.getElementById('modalBtnRepo'),
    techs: document.getElementById('modalTechs'),
    metrics: document.getElementById('modalMetrics'),
    date: document.getElementById('modalDate')
  };

  let projectsData = [];

  // Load project data
  try {
    const response = await fetch('./assets/data/projects.json');
    projectsData = await response.json();
  } catch (error) {
    console.error('Failed to load projects data:', error);
    return;
  }

  // Open Model Handler
  const openModal = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    // Populate Data
    elements.image.src = project.image;
    elements.image.alt = project.title;
    elements.category.textContent = project.category;
    elements.title.textContent = project.title;
    
    // Using innerHTML to allow simple formatting if needed (though textContent is safer if raw text)
    // Assuming simple text for now, but design might imply paragraphs.
    elements.challenge.innerHTML = `<p>${project.challenge}</p>`;
    elements.solution.innerHTML = `<p>${project.solution}</p>`;
    elements.impact.innerHTML = `<p>${project.impact}</p>`;

    // Buttons
    elements.btnDemo.href = project.links.demo !== '#' ? project.links.demo : '#';
    elements.btnDemo.style.display = project.links.demo !== '#' ? 'flex' : 'none'; // Hide if no demo
    
    elements.btnRepo.href = project.links.repo !== '#' ? project.links.repo : '#';

    // Tech Tags
    elements.techs.innerHTML = project.tags.map(tag => 
      `<span class="tech-tag">${tag}</span>`
    ).join('');

    // Metrics
    elements.metrics.innerHTML = project.metrics.map(metric => 
      `<li>• ${metric}</li>`
    ).join('');

    // Show Modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close Modal Handler
  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Event Listeners
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.project-expand');
    if (btn) {
      const card = btn.closest('.project-card');
      const projectId = card.dataset.id;
      if (projectId) openModal(projectId);
    }
  });

  modalCloseBtn.addEventListener('click', closeModal);
  
  // Close on outside click
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
};
