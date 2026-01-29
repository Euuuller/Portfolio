/**
 * Math Background Animation
 * Creates floating mathematical formulas in the background with grid
 */

const formulas = [
  { text: 'e', sub: 'iπ', sup: '', suffix: ' + 1 = 0' },
  { text: '∫' },
  { text: 'lim', sub: 'x→∞' },
  { text: '∂/∂x' },
  { text: '∑' },
  { text: 'dy/dx' },
  { text: '∮' },
  { text: 'V = L(di/dt)' },
  { text: 'Z = R + jX' },
  { text: 'P = V·I' },
  { text: 'x(t) * h(t)' },
  { text: 'ℒ' },
  { text: '∇·D = ρ' },
  { text: '∇×H = J + ∂D/∂t' },
  { text: '∫∫' },
  { text: '∂²/∂x²' },
  { text: '∇²φ = 0' },
  { text: '∮ E·dl = -dΦ/dt' },
  { text: '∮ B·dA = 0' }
];

const predefinedPositions = [
  { x: 5, y: 15, size: 48 },    // e^iπ + 1 = 0
  { x: 85, y: 10, size: 32 },   // lim
  { x: 92, y: 35, size: 28 },   // dy/dx
  { x: 8, y: 65, size: 24 },    // ∂/∂x
  { x: 88, y: 85, size: 36 },   // ∮
  { x: 15, y: 88, size: 28 },   // ∇·D = ρ
  { x: 75, y: 55, size: 22 },   // ∑
  { x: 25, y: 45, size: 26 },   // ∫
  { x: 40, y: 75, size: 24 },   // Z = R + jX
  { x: 95, y: 60, size: 18 },   // P = V·I
  { x: 3, y: 40, size: 32 },    // X_L = 2πfL
  { x: 70, y: 90, size: 22 },   // x(t) * h(t)
  { x: 20, y: 25, size: 28 },   // ℒ
  { x: 50, y: 50, size: 20 },   // ∇×H
  { x: 90, y: 20, size: 24 },   // ∫∫
  { x: 10, y: 80, size: 18 },   // ∂²/∂x²
  { x: 80, y: 40, size: 20 },   // ∇²φ
  { x: 35, y: 60, size: 16 },   // ∮ E·dl
  { x: 65, y: 75, size: 18 },   // ∮ B·dA
];

export const initMathBackground = () => {
  const container = document.getElementById('mathBackground');
  if (!container) return;

  const formulasElements = [];
  let isActive = true;

  const createFormulaElement = (formulaData, position) => {
    if (!container || !isActive) return;

    const formula = document.createElement('span');
    formula.className = 'math-formula';
    formula.setAttribute('aria-hidden', 'true');

    let html = formulaData.text;
    if (formulaData.sub) html += `<sub style="font-size: 0.6em; vertical-align: sub;">${formulaData.sub}</sub>`;
    if (formulaData.sup) html += `<sup style="font-size: 0.6em; vertical-align: super;">${formulaData.sup}</sup>`;
    if (formulaData.suffix) html += formulaData.suffix;
    
    formula.innerHTML = html;

    // Aumentando significativamente a opacidade para maior visibilidade
    // Antes: 0.08 a 0.23 -> Agora: 0.15 a 0.55
    const opacity = Math.random() * 0.4 + 0.15;
    const duration = Math.random() * 20 + 25;
    const delay = Math.random() * 10;

    // Adicionando text-shadow para efeito de brilho e aumentando contraste
    formula.style.cssText = `
      left: ${position.x}%;
      top: ${position.y}%;
      font-size: ${position.size * 1.3}px; /* Aumentado em 30% */
      opacity: ${opacity};
      text-shadow: 0 0 15px rgba(59, 130, 246, 0.4); /* Glow azulado */
      font-weight: 500;
      color: rgba(255, 255, 255, 0.8);
      animation: float ${duration}s ease-in-out ${delay}s infinite;
      z-index: 0; /* Garantindo que fique no fundo mas visível */
      pointer-events: none;
    `;

    container.appendChild(formula);
    formulasElements.push(formula);
  };

  // Create formulas at predefined positions
  predefinedPositions.forEach((position, index) => {
    const formulaData = formulas[index % formulas.length];
    setTimeout(() => {
      createFormulaElement(formulaData, position);
    }, index * 100);
  });

  // Add random floating formulas
  const extraCount = window.innerWidth < 768 ? 3 : 5;
  for (let i = 0; i < extraCount; i++) {
    setTimeout(() => {
      const randomFormula = formulas[Math.floor(Math.random() * formulas.length)];
      createFormulaElement(randomFormula, {
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5,
        size: Math.random() * 20 + 16
      });
    }, (predefinedPositions.length + i) * 100);
  }

  document.addEventListener('visibilitychange', () => {
    isActive = document.visibilityState === 'visible';
    formulasElements.forEach(el => {
      el.style.animationPlayState = isActive ? 'running' : 'paused';
    });
  });
};

