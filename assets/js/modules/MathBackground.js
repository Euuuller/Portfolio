/**
 * Math Background Animation (Refactored to match live site)
 * Static formulas with specific positions, rotations, and mix-blend modes
 */

const formulas = [
  { 
    text: 'e', 
    sup: 'iπ', 
    suffix: ' + 1 = 0', 
    classes: 'text-4xl md:text-6xl top-[12%] left-[5%] md:left-[10%] rotate-[-6deg] z-0 font-bold',
    label: 'Identidade de Euler',
    isSignature: true,
    style: {
      fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', // 4xl to 6xl
      top: '12%',
      left: '10%', // Desktop default
      transform: 'rotate(-6deg)',
      opacity: '0.2', // Signature opacity
      mixBlendMode: 'normal'
    },
    mobileStyle: {
      left: '5%'
    }
  },
  { 
    text: '∫', 
    classes: 'text-9xl top-[-2%] left-[2%] rotate-[-15deg] opacity-[0.03]',
    label: 'Integral',
    style: {
      fontSize: '8rem', // 9xl
      top: '-2%',
      left: '2%',
      transform: 'rotate(-15deg)',
      opacity: '0.03'
    }
  },
  { 
    text: 'lim', 
    sub: 'x→∞',
    classes: 'text-2xl md:text-3xl top-[8%] right-[8%] rotate-[5deg] opacity-[0.08]',
    label: 'Limite',
    style: {
      fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
      top: '8%',
      right: '8%',
      transform: 'rotate(5deg)',
      opacity: '0.08'
    }
  },
  { 
    text: '∂/∂x', 
    classes: 'text-3xl md:text-4xl bottom-[25%] left-[5%] rotate-[20deg] opacity-[0.05]',
    label: 'Derivada Parcial',
    style: {
      fontSize: 'clamp(1.875rem, 3vw, 2.25rem)',
      bottom: '25%',
      left: '5%',
      transform: 'rotate(20deg)',
      opacity: '0.05'
    }
  },
  { 
    text: '∑', 
    classes: 'text-8xl bottom-[-5%] right-[35%] rotate-[10deg] opacity-[0.03]',
    label: 'Somatório',
    style: {
      fontSize: '6rem',
      bottom: '-5%',
      right: '35%',
      transform: 'rotate(10deg)',
      opacity: '0.03'
    }
  },
  { 
    text: 'dy/dx', 
    classes: 'text-xl md:text-2xl top-[35%] right-[15%] rotate-[-10deg] opacity-[0.06]',
    label: 'Derivada',
    style: {
      fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
      top: '35%',
      right: '15%',
      transform: 'rotate(-10deg)',
      opacity: '0.06'
    }
  },
  { 
    text: '∮', 
    classes: 'text-6xl top-[5%] right-[35%] rotate-[15deg] opacity-[0.04]',
    label: 'Integral Fechada',
    style: {
      fontSize: '3.75rem',
      top: '5%',
      right: '35%',
      transform: 'rotate(15deg)',
      opacity: '0.04'
    }
  },
  { 
    text: 'V = L(di/dt)', 
    classes: 'text-sm md:text-lg bottom-[15%] right-[10%] rotate-[-5deg] opacity-[0.08]',
    label: 'Indutor',
    style: {
      fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
      bottom: '15%',
      right: '10%',
      transform: 'rotate(-5deg)',
      opacity: '0.08'
    }
  },
  { 
    text: 'Z = R + jX', 
    classes: 'text-lg md:text-xl top-[60%] left-[5%] rotate-[8deg] opacity-[0.08]',
    label: 'Impedância',
    style: {
      fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
      top: '60%',
      left: '5%',
      transform: 'rotate(8deg)',
      opacity: '0.08'
    }
  },
  { 
    text: 'P = V·I', 
    classes: 'text-5xl md:text-7xl top-[40%] left-[-2%] rotate-[-90deg] opacity-[0.03]',
    label: 'Potência',
    style: {
      fontSize: 'clamp(3rem, 4vw, 4.5rem)',
      top: '40%',
      left: '-2%',
      transform: 'rotate(-90deg)',
      opacity: '0.03'
    }
  },
  { 
    text: 'X_L = 2πfL', 
    classes: 'text-sm md:text-lg bottom-[50%] right-[20%] rotate-[-15deg] opacity-[0.06]',
    label: 'Reatância Indutiva',
    style: {
      fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
      bottom: '50%',
      right: '20%',
      transform: 'rotate(-15deg)',
      opacity: '0.06'
    }
  },
  { 
    text: 'x(t) * h(t)', 
    classes: 'text-base md:text-lg top-[25%] left-[35%] rotate-[5deg] opacity-[0.05]',
    label: 'Convolução',
    style: {
      fontSize: 'clamp(1rem, 2vw, 1.125rem)',
      top: '25%',
      left: '35%',
      transform: 'rotate(5deg)',
      opacity: '0.05'
    }
  },
  { 
    text: 'ℒ', 
    classes: 'text-6xl md:text-8xl top-[75%] right-[15%] rotate-[-10deg] opacity-[0.04]',
    label: 'Laplace',
    style: {
      fontSize: 'clamp(3.75rem, 5vw, 6rem)',
      top: '75%',
      right: '15%',
      transform: 'rotate(-10deg)',
      opacity: '0.04'
    }
  },
  { 
    text: '∇·D = ρ', 
    classes: 'text-lg md:text-xl bottom-[10%] left-[25%] rotate-[-5deg] opacity-[0.07]',
    label: 'Gauss',
    style: {
      fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
      bottom: '10%',
      left: '25%',
      transform: 'rotate(-5deg)',
      opacity: '0.07'
    }
  },
  { 
    text: '∇×H', 
    suffix: ' = J + ∂D/∂t', 
    classes: 'text-sm md:text-base bottom-[40%] left-[85%] rotate-[5deg] opacity-[0.06]',
    label: 'Ampère-Maxwell',
    style: {
      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
      bottom: '40%',
      left: '85%',
      transform: 'rotate(5deg)',
      opacity: '0.06'
    }
  }
];

export const initMathBackground = () => {
  const container = document.getElementById('mathBackground');
  if (!container) return;

  // Clear existing content
  container.innerHTML = '';
  
  // Set container styles to match the 'noise' and 'background' layers
  container.className = 'math-background absolute inset-0 overflow-hidden pointer-events-none select-none z-0';

  // Add Noise Overlay (from site)
  const noise = document.createElement('div');
  noise.style.cssText = `
    position: absolute;
    inset: 0;
    opacity: 0.2;
    mix-blend-mode: soft-light;
    background-image: url('https://grainy-gradients.vercel.app/noise.svg');
  `;
  container.appendChild(noise);

  // Add Grid Overlay (from site)
  const grid = document.createElement('div');
  grid.style.cssText = `
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to right, rgba(128, 128, 128, 0.07) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(128, 128, 128, 0.07) 1px, transparent 1px);
    background-size: 24px 24px;
  `;
  container.appendChild(grid);

  // Wrapper for formulas
  const formulasWrapper = document.createElement('div');
  formulasWrapper.className = 'absolute inset-0 overflow-hidden pointer-events-none select-none z-0';
  container.appendChild(formulasWrapper);

  const isMobile = window.innerWidth < 768;

  formulas.forEach(data => {
    // Filter for mobile based on site logic (optional, but site does filtering)
    if (isMobile) {
       // logic from site: if(isMobile) return isSignature || label=Integral|Somatório|Laplace|Potência
       const allowedLabels = ['Integral', 'Somatório', 'Laplace', 'Potência'];
       if (!data.isSignature && !allowedLabels.includes(data.label)) return;
    }

    const el = document.createElement('div');
    
    // Base styles
    el.style.position = 'absolute';
    el.style.fontFamily = '"Source Serif Pro", serif'; // Using serif as per site
    el.style.fontStyle = 'italic';
    el.style.fontWeight = '500';
    el.style.willChange = 'transform';
    el.style.whiteSpace = 'nowrap';
    el.style.color = 'inherit'; // Controlled by mix-blend below
    
    // Apply specific styles
    Object.assign(el.style, data.style);
    
    // Mobile Overrides
    if (isMobile && data.mobileStyle) {
      Object.assign(el.style, data.mobileStyle);
    }

    // Mix Blend & Color logic
    if (data.isSignature) {
      el.style.color = 'rgba(59, 130, 246, 0.2)'; // accent-blue/20
      el.style.mixBlendMode = 'normal';
    } else {
      // Default math color logic from site
      // text-gray-900 dark:text-white mix-blend-overlay
      // Since we are in dark mode mostly or using CSS vars:
      el.style.color = 'var(--color-text-primary)';
      el.style.opacity = isMobile ? '0.05' : (data.style.opacity || '0.05');
      el.style.mixBlendMode = 'overlay';
    }

    // Construct HTML
    let html = data.text;
    if (data.sup) html += `<sup style="font-size: 0.6em; vertical-align: super;">${data.sup}</sup>`;
    if (data.sub) html += `<sub style="font-size: 0.6em; vertical-align: baseline; margin-left: 2px;">${data.sub}</sub>`;
    if (data.suffix) html += data.suffix;
    
    el.innerHTML = html;
    formulasWrapper.appendChild(el);
  });
};
