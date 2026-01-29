/**
 * Projects Filter Module
 * Handles project filtering by category
 */

export const initProjectFilter = () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  const filterProjects = (category) => {
    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');

      if (category === 'all' || cardCategory === category) {
        card.classList.remove('hidden');
        card.classList.add('filtering-in');
        setTimeout(() => {
          card.classList.remove('filtering-in');
        }, 400);
      } else {
        card.classList.add('hidden');
      }
    });
  };

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter projects
      const filter = btn.getAttribute('data-filter');
      filterProjects(filter);
    });
  });
};

