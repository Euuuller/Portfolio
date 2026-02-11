/**
 * ============================================================================
 * ARQUIVO: MathBackground.js
 * DESCRIÇÃO: Módulo responsável pela animação e renderização do fundo matemático.
 * 
 * Este arquivo cria um efeito visual estético usando fórmulas matemáticas posicionadas
 * de forma absoluta no fundo da página ("Hero Section" e outras áreas).
 * 
 * Características principais:
 * - Gera elementos HTML dinamicamente para cada fórmula.
 * - Aplica estilos específicos (posição, rotação, opacidade) definidos em um array de configuração.
 * - Inclui lógica responsiva para ajustar ou ocultar elementos em dispositivos móveis.
 * - Adiciona texturas de "ruído" (noise) e grade (grid) para um acabamento visual premium.
 * ============================================================================
 */

/**
 * LISTA DE FÓRMULAS
 * Array de objetos onde cada objeto representa uma fórmula matemática a ser renderizada.
 * 
 * Estrutura de cada objeto:
 * - text: O texto principal da fórmula (ex: 'e', '∫').
 * - sup/sub: Sobrescritos ou subscritos (opcional).
 * - suffix: Texto adicional que segue a marcação principal (opcional).
 * - label: Nome descritivo da fórmula (usado para identificação ou acessibilidade).
 * - style: Objeto CSS com as propriedades visuais (tamanho, posição, rotação).
 * - mobileStyle: Sobrescritas de estilo específicas para telas pequenas (opcional).
 * - isSignature: Booleano que destaca uma fórmula específica (Identidade de Euler).
 */
const formulas = [
  // Canto Superior Esquerdo - Identidade de Euler (Destaque principal)
  { 
    text: 'e', 
    sup: 'iπ', 
    suffix: ' + 1 = 0', 
    classes: 'text-4xl md:text-6xl top-[15%] left-[10%] rotate-[-6deg] z-0 font-bold',
    label: 'Identidade de Euler',
    isSignature: true, 
    style: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
      top: '15%',
      left: '10%', 
      transform: 'rotate(-6deg)', 
      opacity: '0.5', // Opacidade aumentada
      mixBlendMode: 'normal' 
    },
    mobileStyle: {
      left: '5%',
      top: '12%'
    }
  },
  // Canto Superior Direito - Limite
  { 
    text: 'lim', 
    sub: 'x→∞',
    classes: 'top-[10%] right-[10%]',
    label: 'Limite',
    style: {
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      top: '10%',
      right: '10%',
      transform: 'rotate(5deg)',
      opacity: '0.9' // Mais visível
    }
  },
  // Centro Esquerda - Integral
  { 
    text: '∫', 
    label: 'Integral',
    style: {
      fontSize: '8rem', 
      top: '40%',
      left: '5%',
      transform: 'rotate(-15deg)',
      opacity: '0.3' 
    }
  },
  // Centro Direita - Somatório
  { 
    text: '∑', 
    label: 'Somatório',
    style: {
      fontSize: '6rem',
      top: '45%',
      right: '8%',
      transform: 'rotate(10deg)',
      opacity: '0.3'
    }
  },
  // Canto Inferior Esquerdo - Derivada Parcial
  { 
    text: '∂/∂x', 
    label: 'Derivada Parcial',
    style: {
      fontSize: 'clamp(2rem, 3vw, 2.5rem)',
      bottom: '15%',
      left: '8%',
      transform: 'rotate(20deg)',
      opacity: '0.3'
    }
  },
  // Canto Inferior Direito - Laplace
  { 
    text: 'ℒ', 
    label: 'Laplace',
    style: {
      fontSize: '4rem',
      bottom: '20%',
      right: '12%',
      transform: 'rotate(-10deg)',
      opacity: '0.3'
    }
  },
  // Topo Centro (Levemente à esquerda) - Derivada
  { 
    text: 'dy/dx', 
    label: 'Derivada',
    style: {
      fontSize: '1.5rem',
      top: '5%',
      left: '30%',
      transform: 'rotate(-5deg)',
      opacity: '0.3'
    }
  },
  // Topo Centro (Levemente à direita) - Integral Fechada
  { 
    text: '∮', 
    label: 'Integral Fechada',
    style: {
      fontSize: '3rem',
      top: '8%',
      right: '30%',
      transform: 'rotate(15deg)',
      opacity: '0.3'
    }
  },
  // Fundo Centro (Espalhado) - Indutor
  { 
    text: 'V = L(di/dt)', 
    label: 'Indutor',
    style: {
      fontSize: '1.1rem',
      bottom: '8%',
      left: '35%',
      transform: 'rotate(-3deg)',
      opacity: '0.12'
    }
  },
  // Lateral Esquerda Alta - Impedância
  { 
    text: 'Z = R + jX', 
    label: 'Impedância',
    style: {
      fontSize: '1.2rem',
      top: '25%',
      left: '3%',
      transform: 'rotate(8deg)',
      opacity: '0.11'
    }
  },
  // Lateral Direita Baixa - Reatância
  { 
    text: 'X_L = 2πfL', 
    label: 'Reatância Indutiva',
    style: {
      fontSize: '1.1rem',
      bottom: '35%',
      right: '3%',
      transform: 'rotate(-15deg)',
      opacity: '0.1'
    }
  },
  // Espalhados pelo meio (Preenchimento sutil)
  { 
    text: 'P = V·I', 
    label: 'Potência',
    style: {
      fontSize: '2.5rem',
      top: '65%',
      left: '15%',
      transform: 'rotate(-15deg)', 
      opacity: '0.07'
    }
  },
  { 
    text: 'x(t) * h(t)', 
    label: 'Convolução',
    style: {
      fontSize: '1.2rem',
      bottom: '45%',
      right: '25%',
      transform: 'rotate(5deg)',
      opacity: '0.08'
    }
  },
  { 
    text: '∇·D = ρ', 
    label: 'Gauss',
    style: {
      fontSize: '1.3rem',
      top: '20%',
      right: '20%',
      transform: 'rotate(-8deg)',
      opacity: '0.1'
    }
  },
  { 
    text: '∇×H', 
    suffix: ' = J + ∂D/∂t', 
    label: 'Ampère-Maxwell',
    style: {
      fontSize: '1rem',
      bottom: '5%',
      right: '45%',
      transform: 'rotate(2deg)',
      opacity: '0.1'
    }
  }
];

/**
 * FUNÇÃO: initMathBackground
 * 
 * Inicializa o fundo matemático animado (ou estático decorativo).
 * Esta é a função principal exportada que deve ser chamada quando a página carrega.
 * 
 * O que ela faz:
 * 1. Encontra o container alvo no DOM.
 * 2. Limpa qualquer conteúdo existente (para evitar duplicações).
 * 3. Cria e adiciona camadas de efeito (Ruído e Grade).
 * 4. Itera sobre a lista de 'formulas' e cria elementos DOM para cada uma.
 * 5. Aplica lógica condicional para mobile (exibindo menos itens para performance/leitura).
 * 
 * @returns {void} Não retorna valor, apenas manipula o DOM diretamente.
 */
export const initMathBackground = () => {
  // Busca o elemento container pelo ID
  const container = document.getElementById('mathBackground');
  
  // Guard-clause: Se não encontrar o container, interrompe a execução para evitar erros.
  if (!container) return;

  // Limpa o conteúdo existente. 
  // Importante se a função for chamada múltiplas vezes (ex: em navegações SPA ou hot-reloads).
  container.innerHTML = '';
  
  // Define classes CSS base para o container.
  // absolute inset-0: Ocupa toda a tela.
  // pointer-events-none: Garante que os cliques "passem através" do fundo e atinjam os botões abaixo.
  // z-0: Mantém no fundo da pilha de camadas (z-index).
  container.className = 'math-background absolute inset-0 overflow-hidden pointer-events-none select-none z-0';

  // Verifica se é um dispositivo móvel (largura menor que 768px).
  const isMobile = window.innerWidth < 768;

  /**
   * CAMADA DE RUÍDO (NOISE) - Desativada no Mobile para Performance
   */
  if (!isMobile) {
    const noise = document.createElement('div');
    noise.style.cssText = `
      position: absolute;
      inset: 0;
      opacity: 0.2;
      mix-blend-mode: soft-light;
      background-image: url('https://grainy-gradients.vercel.app/noise.svg');
    `;
    container.appendChild(noise);
  }

  /**
   * CAMADA DE GRADE (GRID) - Desativada no Mobile para Performance
   */
  if (!isMobile) {
    const grid = document.createElement('div');
    grid.style.cssText = `
      position: absolute;
      inset: 0;
      background-image: linear-gradient(to right, rgba(128, 128, 128, 0.07) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(128, 128, 128, 0.07) 1px, transparent 1px);
      background-size: 24px 24px;
    `;
    container.appendChild(grid);
  }

  // Wrapper (Envoltório) para as fórmulas.
  // Separa as fórmulas das camadas de textura/grade para organização.
  const formulasWrapper = document.createElement('div');
  formulasWrapper.className = 'absolute inset-0 overflow-hidden pointer-events-none select-none z-0';
  
  // DocumentFragment: Uma técnica de otimização de performance.
  // Em vez de adicionar cada elemento ao DOM um por um (causando múltiplos "reflows"),
  // adicionamos tudo ao fragmento na memória e inserimos no DOM de uma só vez no final.
  const fragment = document.createDocumentFragment();
  


  // Itera sobre cada configuração de fórmula definida no array 'formulas'
  formulas.forEach(data => {
    /**
     * LÓGICA DE FILTRAGEM MOBILE
     * Em telas pequenas, mostrar todas as fómulas polui o visual.
     * Esta lógica seleciona apenas as mais importantes (assinatura ou labels específicos)
     * e descarta o restante para manter o layout limpo.
     */
    if (isMobile) {
       // Lista de fórmulas permitidas no mobile
       const allowedLabels = ['Integral', 'Somatório', 'Laplace', 'Potência'];
       // Se não for a assinatura E não estiver na lista permitida, pula esta iteração (return).
       if (!data.isSignature && !allowedLabels.includes(data.label)) return;
    }

    // Cria o elemento visual da fórmula
    const el = document.createElement('div');
    
    // Aplicação de Estilos Base
    el.style.position = 'absolute';
    el.style.fontFamily = '"Source Serif Pro", serif'; // Fonte serifada para aspecto matemático elegante
    el.style.fontStyle = 'italic'; // Fórmulas matemáticas geralmente são itálicas
    el.style.fontWeight = '500';
    el.style.willChange = 'transform'; // Dica para o navegador otimizar renderização de transformações
    el.style.whiteSpace = 'nowrap'; // Impede que a fórmula quebre linha
    el.style.color = 'inherit'; // A cor será controlada via mix-blend mode abaixo
    
    // Mescla os estilos específicos deste item (configurados no array) com o elemento
    Object.assign(el.style, data.style);
    
    // Override (Sobrescrita) de Estilos Mobile
    // Se estiver no mobile e houver estilos específicos para mobile, aplica-os por cima.
    if (isMobile && data.mobileStyle) {
      Object.assign(el.style, data.mobileStyle);
    }

    /**
     * LÓGICA DE COR ADAPTATIVA POR TEMA
     * Detecta se está em dark ou light mode e aplica cores apropriadas
     */
    
    // Detecta o tema atual
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark' || 
                       !document.documentElement.getAttribute('data-theme');
    
    // ✨ Cores adaptativas por tema
    if (isDarkMode) {
      // Dark Mode: Azul claro visível
      el.style.color = 'rgba(74, 144, 226, 0.35)'; // Azul mais visível no escuro
    } else {
      // Light Mode: Azul escuro visível
      el.style.color = 'rgba(37, 99, 235, 0.4)'; // Azul escuro visível no claro
    }
    
    el.style.mixBlendMode = 'normal';
    
    // Destaque extra para a assinatura (Euler)
    if (data.isSignature) {
      el.style.fontWeight = '700'; // Mais negrito
      // Euler ainda mais visível
      if (isDarkMode) {
        el.style.color = 'rgba(74, 144, 226, 0.5)';
      } else {
        el.style.color = 'rgba(37, 99, 235, 0.6)';
      }
    }

    /**
     * CONSTRUÇÃO DO HTML INTERNO
     * Monta a string HTML da fórmula, tratando sobrescritos (sup) e subscritos (sub) corretamente.
     */
    let html = data.text;
    if (data.sup) html += `<sup style="font-size: 0.6em; vertical-align: super;">${data.sup}</sup>`;
    if (data.sub) html += `<sub style="font-size: 0.6em; vertical-align: baseline; margin-left: 2px;">${data.sub}</sub>`;
    if (data.suffix) html += data.suffix;
    
    el.innerHTML = html;
    
    // Adiciona o elemento criado ao fragmento em memória
    fragment.appendChild(el);
  });
  
  // Adiciona todo o fragmento (com todas as fórmulas) ao wrapper
  formulasWrapper.appendChild(fragment);
  
  // Finalmente, insere o wrapper no container principal da página
  container.appendChild(formulasWrapper);
  
  /**
   * ✨ LISTENER DE MUDANÇA DE TEMA
   * Atualiza as cores das fórmulas quando o usuário troca entre dark/light mode
   */
  const updateFormulasOnThemeChange = () => {
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark' || 
                       !document.documentElement.getAttribute('data-theme');
    
    // Seleciona todas as fórmulas
    const allFormulas = container.querySelectorAll('div[style*="position: absolute"]');
    
    allFormulas.forEach((formula, index) => {
      const isSignature = formulas[index]?.isSignature;
      
      if (isDarkMode) {
        formula.style.color = isSignature ? 'rgba(74, 144, 226, 0.5)' : 'rgba(74, 144, 226, 0.35)';
      } else {
        formula.style.color = isSignature ? 'rgba(37, 99, 235, 0.6)' : 'rgba(37, 99, 235, 0.4)';
      }
    });
  };
  
  // Observa mudanças no atributo data-theme
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
        updateFormulasOnThemeChange();
      }
    });
  });
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
};
