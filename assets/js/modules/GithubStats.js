/**
 * GithubStats.js
 * Fetches and displays the public repository count from GitHub API
 */

export const initGithubStats = async () => {
  const repoCountElement = document.getElementById('repo-count');
  if (!repoCountElement) return;

  try {
    const response = await fetch('https://api.github.com/users/Euuuller');
    if (!response.ok) throw new Error('Failed to fetch stats');
    
    const data = await response.json();
    
    // Animate the number or just set it
    // For simplicity and robustness, just set it
    repoCountElement.textContent = `${data.public_repos || 0}+`;
    repoCountElement.parentElement.classList.remove('loading');
    
  } catch (error) {
    console.warn('Could not fetch GitHub stats:', error);
    repoCountElement.textContent = '35+'; // Fallback to a reasonable default
  }
};
