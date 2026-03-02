# 💼 Portfólio de Projetos — Euuuller

<div align="center">

![Portfolio Preview](./public/assets/images/preview.gif)

**Um portfólio web moderno e responsivo desenvolvido com React, TypeScript, Tailwind CSS e Vite.**

[![Status](https://img.shields.io/badge/Status-Finalizado-success?style=for-the-badge)](.)\
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](.)\
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](.)\
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](.)\
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](.)

[🌐 Demo Ao Vivo](https://euuuller.vercel.app) • [📁 Estrutura](#-estrutura-do-projeto) • [🚀 Quick Start](#-quick-start) • [📖 Documentação](#-arquitetura)

</div>

---

## 📑 Índice

- [✨ Destaques](#-destaques)
- [🎯 Sobre](#-sobre)
- [🏗️ Arquitetura](#-arquitetura)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [⚙️ Stack Tecnológico](#-stack-tecnológico)
- [🚀 Quick Start](#-quick-start)
- [📖 Guia de Desenvolvimento](#-guia-de-desenvolvimento)
- [💻 Seções do Site](#-seções-do-site)
- [🎨 Sistema de Temas](#-sistema-de-temas)
- [📱 Responsividade](#-responsividade)
- [♿ Acessibilidade](#-acessibilidade)
- [👤 Autor](#-autor)
- [📄 Licença](#-licença)

---

## ✨ Destaques

- 🎨 **Design com Tailwind CSS** utilizando utility classes e tema dinâmico configurado no `tailwind.config.js`
- 🌓 **Sistema de Temas** (dark/light mode) utilizando a feature `dark:` do Tailwind e persistência de estado
- 📱 **Totalmente Responsivo** com breakpoints padrão e otimizados do Tailwind
- ⚡ **Alta Performance** com Vite para um build e Hot Module Replacement (HMR) ultrarrápidos
- 🧩 **Arquitetura Baseada em Componentes** garantindo reutilização de código e fácil manutenção
- 🗄️ **Conteúdo Data-Driven** — Todo o seu portfólio alimentado unicamente pelo `src/data.ts`
- 🛡️ **Type Safety** com TypeScript para prevenção de erros e melhor DX (Developer Experience)
- 🖱️ **Modularidade Visual** com componentes React isolados (Navbar, Hero, About, Skills, Projects, Contact)
- 📬 **Integração de Contato** através de links diretos configuráveis e formulário visualmente finalizado
- ♿ **Acessível** com HTML semântico adaptado ao JSX e navegação coesa

---

## 🎯 Sobre

Portfólio de Projetos desenvolvido com bastante Carinho por mim **Euller dos Santos Rodrigues Duarte**, Graduando em Engenharia Elétrica no Instituto Federal do Maranhão (IFMA) e Atualmente estudando Análise de Dados. A finalidade desse portfólio consiste na apresentação de projetos dentro do segmento de dados, expor habilidades técnicas e disponibilizar informações de contato de forma moderna, limpa e interativa.

Além de ser um portfólio visual, este projeto demonstra:
- **Desenvolvimento Web Moderno** com React e TypeScript
- **Estilização Ágil e Responsiva** com Tailwind CSS
- **Arquitetura Limpa** dividindo Dados (`data.ts`) e Renderização (Componentes)
- **Uso de Inteligência Artificial** para delegar atribuições e obter agilidade no processo de desenvolvimento

---

## 🏗️ Arquitetura

A arquitetura do projeto separa claramente dados, lógica visual e estilo. 

### Estilização Tailwind CSS

O projeto abandona o uso clássico de diretórios CSS pesados, abraçando a filosofia *Utility-First* do Tailwind CSS. O `tailwind.config.js` gere as cores primárias, fontes da aplicação, e o `index.css` traz apenas as diretivas fundamentais e animações customizadas como scrollings infinitos.

### Arquitetura de Componentes React

```
src/
├── App.tsx              # Componente Raiz (Orquestrador da Página Principal)
├── data.ts              # ⚠️ Fonte única de verdade (SSOT) para o conteúdo 
├── index.css            # Diretivas Tailwind e classes customizadas essenciais
├── main.tsx             # Ponto de entrada (React DOM Renderer)
│
└── components/          # Componentes visuais da aplicação
    ├── About.tsx        # Seção Sobre Mim
    ├── Contact.tsx      # Seção de Contato com validações
    ├── Footer.tsx       # Rodapé do site
    ├── Hero.tsx         # Banner Principal (Hero Section)
    ├── Navbar.tsx       # Barra de navegação com toggle Dark Mode
    ├── Projects.tsx     # Grid responsivo para listagem de projetos
    ├── SectionHeader.tsx# Titulação reutilizável entre seções
    └── Skills.tsx       # Carrossel animado de Habilidades
```

---

## 📁 Estrutura do Projeto

```plaintext
Portfolio/
│
├── 📄 index.html                  # Arquivo HTML principal / Hook do Root
├── 📄 package.json                # Dependências NPM e Scripts
├── 📄 tsconfig.json               # Configurações do TypeScript
├── 📄 tailwind.config.js          # Configurações do Tema e Tokens
├── 📄 vite.config.ts              # Configuração do Vite dev-server e bundler
├── 📄 README.md                   # Este arquivo
├── 📄 LICENSE                     # MIT License
│
├── 📂 public/                     # Assets estáticos (ícones em SVG, etc.)
│   └── 📂 icons/                  # Ícones organizados localmente
│
└── 📂 src/                        # Código Fonte da Aplicação
    ├── 📄 data.ts                 # ⚠️ Dados do Portfólio (Edite aqui)
    ├── 📄 App.tsx                 # Montagem das seções
    ├── 📄 main.tsx                # Contexto React
    ├── 📄 index.css               # Core Styles
    └── 📂 components/             # React Components
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── About.tsx
        ├── Skills.tsx
        ├── Projects.tsx
        ├── Contact.tsx
        └── Footer.tsx
```

---

## ⚙️ Stack Tecnológico

### Frontend
| Tecnologia | Finalidade |
|-----------|-----------|
| **React (v18)** | Criação de UI Declarativa baseada em Componentes |
| **TypeScript** | Superset do JS focado em Tipagem e Segurança |
| **Tailwind CSS** | Estilização ágil via Classes Utilitárias |
| **Vite** | Bundler super rápido e servidor de desenvolvimento |
| **Lucide React** | Ícones SVG importados como Componentes |
| **FontAwesome** | Ícones de marcas e UI (via CDN no index.html) |

### Tipografia (Google Fonts importada via CSS)
- **Outfit** — Títulos
- **Inter** — Corpo do Texto e Componentes

---

## 🚀 Quick Start

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado no seu computador.
- NPM (incluso no Node) ou gerenciadores como Yarn/pnpm.

### Instalação e Execução

A aplicação é super simples de rodar localmente, utilizando o Vite:

```bash
# 1. Clone o repositório
git clone https://github.com/Euuuller/Template.git
cd Template

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev
```

Pronto! Acesse o endereço indicado no terminal (normalmente `http://localhost:5173/`) no seu navegador. O código atualiza em tempo real enquanto você edita graças ao sistema HMR.

---

## 📖 Guia de Desenvolvimento

### Personalizando o Conteúdo 🚀 (Fácil)

Todo o conteúdo de texto, links, projetos e informações pessoais está centralizado em um único arquivo de configuração:

```
src/data.ts
```

Você **não precisa tocar nos arquivos .tsx (React)** para atualizar seu portfólio. Basta editar o `data.ts`:

- Atualize seus **projetos** na constante `PROJECTS`.
- Atualize os links das suas **redes sociais** e botão de e-mail na constante `SOCIAL_LINKS`.
- Insira novas **habilidades** na constante `SKILLS`. Os carrosséis irão se auto-ajustar.

### Gerenciando Arquivos Estáticos 📁

Alguns arquivos não precisam de código para serem atualizados, apenas substituição direta na pasta `public/`:

- **📄 Currículo (PDF):**
  Para atualizar seu currículo disponível no site, basta salvar seu novo PDF com o nome exato de `curriculo.pdf` e colá-lo dentro da pasta `public/docs/`, substituindo o anterior. Os botões de **"Baixar CV"** do site baixarão essa nova versão automaticamente.
- **🎬 GIF Animado de Preview:**
  Para exibir aquele preview animado no GitHub, grave a tela do seu portfólio rodando, converta para formato `.gif` (ex: no Ezgif), renomeie o arquivo para `preview.gif` e coloque-o dentro de `public/assets/images/`.

### Modificando o Estilo e Layout

- Para **cores, fontes globais ou extensões do Tailwind**, altere o arquivo `tailwind.config.js`.
- Para **alterar a estrutura ou lógica de uma seção inteira**, edite o respectivo arquivo em `src/components/*.tsx`.

---

## 💻 Seções do Site

### 1. **Navbar** (`Navbar.tsx`)
Navegação responsiva, persistente ao topo, contendo a logo, links para rolagem âncora nas seções, botão de currículo, acesso ao GitHub via ícone e o Toggle Switch para alternar o modo Claro/Escuro da aplicação.

### 2. **Hero** (`Hero.tsx`)
Apresentação inicial poderosa com selo de disponibilidade, títulos impactantes, botões Calls-to-Action primários e secundários para visualização de currículo ou projetos, além de avatar com background orgânico.

### 3. **Sobre** (`About.tsx`)
Seção focada na sua trajetória técnica, visão e propósitos profissionais, estruturada junto à imagem de perfil.

### 4. **Habilidades** (`Skills.tsx` + Animação Tailwind)
Componente híbrido que mapeia a constante de Skills e implementa um double-track carrossel infinito CSS (configurado no `tailwind.config` e utilizado nas Divs) trazendo fluidez à amostragem de tecnologia.

### 5. **Projetos** (`Projects.tsx`)
Grid dinâmico adaptativo listando features e projetos chave. Projetos iteram sobre a base de dados contendo chips visuais da stack, descrições breves de problema e solução, status de conclusão e links.

### 6. **Contato** (`Contact.tsx`)
Dividido em links diretos para redes profissionais (LinkedIn, Github, Medium e um link formatado para envio direto de email via Gmail) e uma área simulada de formulário.

---

## 🎨 Sistema de Temas

O projeto dispõe de alternância **Claro/Escuro (Dark Mode)**, que funciona adicionando uma classe global.

**Fluxo de funcionamento via Tailwind:**
1. O React controla o estado do Tema na `Navbar.tsx` com `useState` e `useEffect`.
2. O Tailwind CSS é instruído (via `darkMode: 'class'`) a olhar a presença da classe `dark` no elemento HTML root.
3. Todo estilo em componentes possui a variação descrita nas próprias classes utilitárias, exemplo: `text-navy dark:text-white` ou `bg-white dark:bg-[#0a0a0a]`.
4. Uma preferência pode ser salva no Local Storage do navegador se necessário aprimoramento posterior.

---

## 📱 Responsividade

Todo o controle de Breakpoints vem *out-of-the-box* do Tailwind:

- Prefixos padrão no código React:
    - Utilizando responsividade mobile-first, onde as classes iniciais definem smartphones.
    - `md:` para tablets e small-laptops (ex: `md:grid-cols-2`).
    - `lg:` e `xl:` para desktops.

---

## ♿ Acessibilidade

O projeto foi construído pensando nas melhores práticas do uso da Web:
- Tags Semânticas apropriadas convertidas para componentes Funcionais (Navigation, Section, Main, Footers).
- Contrastes ajustados e cores baseadas no palette de design sistêmico.

---

## 👤 Autor

**Euller dos Santos Rodrigues Duarte**
Analista de Dados | Graduando em Engenharia Elétrica (IFMA)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/euuuller/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Euuuller)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](https://mail.google.com/mail/?view=cm&fs=1&to=euller.santos.duarte@gmail.com)
[![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@euller.santos.duarte)

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** — veja o arquivo [LICENSE](LICENSE) para detalhes.

```
Copyright (c) 2026 Euller dos Santos Rodrigues Duarte
```

---

<div align="center">

**Desenvolvido com ❤️ + ☕ por Euller Duarte**

⭐ Se este projeto foi útil, considere deixar uma estrela!

![GitHub last commit](https://img.shields.io/github/last-commit/Euuuller/Template?style=for-the-badge)

</div>
