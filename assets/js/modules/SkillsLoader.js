/**
 * Skills Loader Module
 * Fetches skills from JSON and renders them dynamically
 */

export const initSkillsLoader = async () => {
  try {
    const response = await fetch('./assets/data/skills.json');
    if (!response.ok) throw new Error('Failed to load skills data');
    
    const skillsData = await response.json();
    renderSkills(skillsData);
  } catch (error) {
    console.error('Error loading skills:', error);
  }
};

const renderSkills = (data) => {
  // Map JSON keys to DOM IDs
  const categoryMap = {
    'languages': 'tab-languages',
    'visualization': 'tab-visualization',
    'ml-stats': 'tab-ml',
    'engineering': 'tab-engineering'
  };

  Object.entries(data).forEach(([category, skills]) => {
    const tabId = categoryMap[category];
    if (!tabId) return;

    const tabPanel = document.getElementById(tabId);
    if (!tabPanel) return;

    // Create grid container if not exists, or clear it
    let grid = tabPanel.querySelector('.skills-grid');
    if (!grid) {
      grid = document.createElement('div');
      grid.className = 'skills-grid';
      tabPanel.appendChild(grid);
    } else {
      grid.innerHTML = ''; // Clear existing content
    }

    skills.forEach(skill => {
      const card = createSkillCard(skill);
      grid.appendChild(card);
    });
  });
};

const createSkillCard = (skill) => {
  const card = document.createElement('div');
  card.className = 'skill-card';

  // Icon container
  const iconContainer = document.createElement('div');
  iconContainer.className = 'skill-icon';
  
  // Render icon based on type
  if (skill.icon_type === 'devicon') {
    const i = document.createElement('i');
    i.className = skill.icon;
    iconContainer.appendChild(i);
  } else if (skill.icon_type === 'svg_path') {
    const img = document.createElement('img');
    img.src = skill.icon;
    img.alt = skill.name;
    img.loading = 'lazy';
    iconContainer.appendChild(img);
  } else if (skill.icon_type === 'svg') {
    iconContainer.innerHTML = skill.icon;
  }

  // Name
  const name = document.createElement('h3');
  name.className = 'skill-name';
  name.textContent = skill.name;

  // Description
  const description = document.createElement('p');
  description.className = 'skill-description';
  description.textContent = skill.description;

  card.appendChild(iconContainer);
  card.appendChild(name);
  card.appendChild(description);

  return card;
};
