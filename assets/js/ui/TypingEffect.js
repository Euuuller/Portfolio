/**
 * Typing Effect
 * Animated typing text for the hero section
 */

const roles = [
  'Analista de Dados',
  'Data Analyst',
  'Eng. Elétrica'
];

export const initTypingEffect = () => {
  const typingElement = document.getElementById('typingText');
  if (!typingElement) return;

  let currentRoleIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  const pauseTime = 2000;

  const type = () => {
    const currentRole = roles[currentRoleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, currentCharIndex - 1);
      currentCharIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, currentCharIndex + 1);
      currentCharIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && currentCharIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = pauseTime;
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  };

  setTimeout(type, 1000);
};

