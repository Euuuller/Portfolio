export const PROJECTS = [
  {
    id: 'segmentacao-clientes',
    title: 'Segmentação de Clientes (RFM)',
    category: 'ANALYTICS',
    badgeColor: 'bg-purple-100 text-purple-700',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Análise de Clusterização para classificar clientes com base em Recência, Frequência e Valor Monetário.',
    tags: ['Python', 'Pandas', 'Power BI'],
    metrics: ['1.5k Registros', '5 Segmentos'],
    status: 'Concluído',
    modal: {
      desafio: 'Marketing massivo com baixo ROI e taxa de conversão.',
      solucao: 'Algoritmo K-Means para identificar personas baseado em Recência, Frequência e Valor.',
      impacto: 'Aumento de 12% na conversão de campanhas de e-mail.',
      metricas: ['4 Perfis Definidos', 'ROI +20%', 'Python Puro'],
      stack: ['PYTHON', 'K-MEANS', 'SCIKIT-LEARN'],
      urlCodigo: 'https://github.com/euller-ds',
      urlDemo: '#'
    }
  },
  {
    id: 'dashboard-vendas',
    title: 'Dashboard de Vendas',
    category: 'DASHBOARDS',
    badgeColor: 'bg-blue-100 text-blue-700',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Dashboard interativo para monitoramento de KPIs de vendas, análise geográfica e tendências mensais.',
    tags: ['Power BI', 'DAX', 'SQL'],
    metrics: ['KPIs em Tempo Real'],
    status: 'Projeto em Andamento',
    modal: {
      desafio: 'Gestão de vendas sem visibilidade centralizada de KPIs em tempo real.',
      solucao: 'Dashboard Power BI integrado com múltiplas fontes de dados e atualização automática.',
      impacto: 'Redução de 40% no tempo de geração de relatórios.',
      metricas: ['KPIs em Tempo Real', '6 Páginas', 'DAX Avançado'],
      stack: ['POWER BI', 'DAX', 'SQL'],
      urlCodigo: 'https://github.com/euller-ds',
      urlDemo: '#'
    }
  },
  {
    id: 'deteccao-fraudes',
    title: 'Detecção de Fraudes (ML)',
    category: 'MACHINE LEARNING',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Modelo de Machine Learning para identificar transações fraudulentas em tempo real com alta precisão.',
    tags: ['Python', 'Scikit-Learn', 'XGBoost'],
    metrics: ['95% Precisão', '2% Falsos Positivos'],
    status: 'Projeto em Andamento',
    modal: {
      desafio: 'Alta taxa de fraudes causando prejuízos financeiros.',
      solucao: 'Pipeline ML com XGBoost, SMOTE e validação cruzada.',
      impacto: 'Detecção de 95% das fraudes com 2% de falsos pos.',
      metricas: ['95% Precisão', '2% Falsos Positivos', 'F1-Score: 0.94'],
      stack: ['PYTHON', 'XGBOOST', 'SCIKIT-LEARN'],
      urlCodigo: 'https://github.com/euller-ds',
      urlDemo: '#'
    }
  }
];

export const SKILLS = [
  { name: 'SQL Server', phrase: 'Banco Corporativo', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
  { name: 'MySQL', phrase: 'Banco Relacional', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', phrase: 'Queries Avançadas', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'SQLite', phrase: 'Banco Leve', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg' },
  { name: 'Python', phrase: 'Análise de Dados', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Pandas', phrase: 'Manipulação de Dados', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
  { name: 'NumPy', phrase: 'Computação Científica', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
  { name: 'Scikit-Learn', phrase: 'Machine Learning', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
  { name: 'Figma', phrase: 'Prototipagem UI/UX', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'LaTeX', phrase: 'Redação Técnica', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg' },
  { name: 'Git', phrase: 'Controle de Versão', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'GitHub', phrase: 'Plataforma', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
  { name: 'VS Code', phrase: 'IDE', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'Jupyter', phrase: 'Notebooks', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg' },
  { name: 'Plotly', phrase: 'Data Viz', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg' },
  { name: 'Power BI', phrase: 'Dashboards', iconUrl: '/icons/powerbi.svg' },
  { name: 'Excel', phrase: 'Planilhas', iconUrl: '/icons/excel.svg' }
];

export const SOCIAL_LINKS = [
  { name: 'Email', value: 'euller.santos.duarte@gmail.com', icon: 'fa-solid fa-envelope', url: 'mailto:euller.santos.duarte@gmail.com', bg: 'bg-red-50', color: 'text-red-500' },
  { name: 'LinkedIn', value: 'Faça uma conexão comigo', icon: 'fa-brands fa-linkedin-in', url: 'https://linkedin.com/in/euller-duarte', bg: 'bg-blue-50', color: 'text-[#0077B5]' },
  { name: 'GitHub', value: 'Veja meus projetos', icon: 'fa-brands fa-github', url: 'https://github.com/euller-ds', bg: 'bg-slate-100', color: 'text-slate-900' },
  { name: 'Medium', value: 'Leia meus artigos', icon: 'fa-brands fa-medium', url: '#', bg: 'bg-slate-100', color: 'text-[#00AB6C]' }
];
