<div align="center">

# Portfolio de Projetos — Euller Duarte

![Portfolio Preview](./public/assets/images/preview.gif)

**Portfólio web moderno e responsivo construído com React 19, TypeScript, Tailwind CSS v4 e Vite.**

[![Live Demo](https://img.shields.io/badge/Demo-euuuller.vercel.app-0F172A?style=for-the-badge&logo=vercel&logoColor=white)](https://euuuller.vercel.app)

[![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](.)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](.)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)](.)
[![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=flat-square&logo=vite&logoColor=white)](.)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](./LICENSE)

</div>

---

## Indice

- [Visao Geral](#visao-geral)
- [Funcionalidades](#funcionalidades)
- [Stack Tecnologico](#stack-tecnologico)
- [Arquitetura](#arquitetura)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalacao e Uso](#instalacao-e-uso)
- [Personalizacao](#personalizacao)
- [Deploy](#deploy)
- [Autor](#autor)
- [Licenca](#licenca)

---

## Visão Geral

Esse é um portfólio profissional desenvolvido por mim **Euller dos Santos Rodrigues Duarte** com a finalidade de apresentar os projetos de Análise de Dados e documentação dos meus Estudos. Graduando em Engenharia Elétrica pelo Instituto Federal do Maranhão (IFMA) e estudante de Análise de Dados. O projeto centraliza projetos do segmento de dados, habilidades técnicas e informações de contato em uma interface limpa, interativa e acessível. Ademais, é um prazer ter sua visita, sinta-se à vontade para avaliar o portfólio e se possível entrar em contato.

O portfólio também serve como demonstração prática de:

- Desenvolvimento frontend moderno com **React 19** e **TypeScript**
- Estilização utility-first com **Tailwind CSS v4**
- Arquitetura **data-driven** com separação clara entre dados e apresentação
- Práticas de **SEO**, **acessibilidade** e **performance**

---

## Funcionalidades

| Funcionalidade | Detalhes |
|---|---|
| **Dark / Light Mode** | Alternância com persistência em `localStorage` e transições suaves via classe `dark` |
| **Animação Typewriter** | Ciclo automático entre "Data Analyst", "Analista de Dados" e "Eng. Elétrica" no Hero |
| **Carrossel Infinito** | Duas faixas de skills com rolagem CSS contínua em direções opostas |
| **Grid de Projetos Adaptativo** | Carrossel swipeable no mobile, grid responsivo (2-3 colunas) em telas maiores |
| **Modal de Detalhes** | Popup com desafio, solução, impacto, métricas e links para cada projeto |
| **Navegação Inteligente** | Intersection Observer para destaque automático da seção ativa na navbar |
| **Formulário de Contato** | Validação em tempo real com integração Formspree para envio de e-mails |
| **SEO Completo** | Meta tags Open Graph, Twitter Card, canonical URL e HTML semântico |
| **Download de CV** | Botão de download direto do currículo em PDF |
| **Totalmente Responsivo** | Mobile-first com breakpoints `sm`, `md`, `lg` e `xl` |

---

## Stack Tecnologico

### Core

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [React](https://react.dev) | 19.0 | UI declarativa baseada em componentes |
| [TypeScript](https://typescriptlang.org) | 5.8 | Tipagem estática e segurança em tempo de desenvolvimento |
| [Tailwind CSS](https://tailwindcss.com) | 4.1 | Estilização utility-first com tema customizado via `@theme` |
| [Vite](https://vite.dev) | 6.2 | Build tool, dev server com HMR e bundling otimizado |

### Complementares

| Tecnologia | Finalidade |
|---|---|
| [Lucide React](https://lucide.dev) | Biblioteca de ícones SVG como componentes React |
| [Font Awesome](https://fontawesome.com) | Ícones de marcas e UI (via CDN) |
| [Google Fonts](https://fonts.google.com) | Inter (corpo) e JetBrains Mono (código) |
| [Formspree](https://formspree.io) | Backend para formulário de contato |
| [Vercel](https://vercel.com) | Hospedagem e deploy contínuo |

---

## Arquitetura

O projeto adota uma arquitetura **data-driven** com separação clara entre conteúdo e apresentação:

```
                  ┌──────────────┐
                  │   data.ts    │  Fonte única de verdade (SSOT)
                  │  (conteúdo)  │  Projetos, Skills, Links sociais
                  └──────┬───────┘
                         │
                         ▼
┌─────────┐    ┌──────────────────┐    ┌──────────────────┐
│ main.tsx │───►│     App.tsx      │───►│   Componentes    │
│ (entry)  │    │ (orquestrador)   │    │  (renderização)  │
└─────────┘    └──────────────────┘    └──────────────────┘
                         │
                         ▼
               ┌──────────────────┐
               │   index.css      │  Diretivas Tailwind v4
               │  @theme + anim.  │  Cores, fontes, keyframes
               └──────────────────┘
```

### Estilização com Tailwind CSS v4

O projeto utiliza **Tailwind CSS v4**, que substitui o `tailwind.config.js` por configuração direta no CSS via bloco `@theme`. As customizações incluem cores do sistema (`--color-navy`, `--color-bg-main`), famílias tipográficas e animações de scroll infinito | tudo definido em [index.css](src/index.css).

### Gerenciamento de Tema

O dark mode é controlado pelo hook customizado [useTheme.ts](src/hooks/useTheme.ts), que encapsula a lógica de alternância e persistência em `localStorage`. O Tailwind aplica estilos condicionais através do prefixo `dark:` com `darkMode: 'class'`.

---

## Estrutura do Projeto

```
Portfolio/
├── public/
│   ├── assets/images/
│   │   └── preview.gif              # Preview animado do portfólio
│   ├── docs/
│   │   └── curriculo.pdf            # Currículo para download
│   ├── icons/                       # Ícones SVG de tecnologias
│   ├── profile.jpeg                 # Foto de perfil
│   └── favicon.svg                  # Favicon do site
│
├── src/
│   ├── main.tsx                     # Ponto de entrada (ReactDOM)
│   ├── App.tsx                      # Componente raiz — orquestra as seções
│   ├── data.ts                      # Dados do portfólio (SSOT)
│   ├── index.css                    # Tailwind v4: @theme, animações, utilitários
│   │
│   ├── components/
│   │   ├── Navbar.tsx               # Navegação fixa + menu mobile + toggle de tema
│   │   ├── Hero.tsx                 # Banner com typewriter e CTAs
│   │   ├── About.tsx                # Seção sobre com foto e métricas
│   │   ├── Skills.tsx               # Carrossel infinito de habilidades
│   │   ├── Projects.tsx             # Grid de projetos com modal de detalhes
│   │   ├── Contact.tsx              # Formulário validado + links sociais
│   │   ├── SectionHeader.tsx        # Componente reutilizável de título
│   │   └── Footer.tsx               # Rodapé com créditos
│   │
│   └── hooks/
│       └── useTheme.ts              # Hook de dark/light mode
│
├── index.html                       # HTML com SEO (OG, Twitter Card)
├── vite.config.ts                   # Vite + React + Tailwind v4
├── tsconfig.json                    # Configuração do TypeScript
├── package.json                     # Dependências e scripts
├── .env.example                     # Template de variáveis de ambiente
├── LICENSE                          # MIT License
└── README.md
```

---

## Instalação e Uso

### Pré-requisitos

- [Node.js](https://nodejs.org/) 16+ instalado
- npm (incluso com o Node) ou gerenciador equivalente (yarn, pnpm)

### Desenvolvimento local

```bash
# Clonar o repositório
git clone https://github.com/Euuuller/Portfolio.git
cd Portfolio

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (porta 3000)
npm run dev
```

O servidor estará disponível em `http://localhost:3000` com Hot Module Replacement ativo.

### Scripts disponíveis

| Script | Comando | Descrição |
|---|---|---|
| `dev` | `npm run dev` | Servidor de desenvolvimento com HMR na porta 3000 |
| `build` | `npm run build` | Build de produção otimizado |
| `preview` | `npm run preview` | Preview local do build de produção |
| `lint` | `npm run lint` | Verificação de tipos com TypeScript |
| `clean` | `npm run clean` | Remove o diretório `dist/` |

---

## Personalizacao

### Conteudo (sem tocar em componentes)

Todo o conteúdo é centralizado em [`src/data.ts`](src/data.ts). Para personalizar o portfólio, edite as constantes:

| Constante | O que controla |
|---|---|
| `PROJECTS` | Lista de projetos com título, descrição, tags, métricas, links e detalhes do modal |
| `SKILLS` | Habilidades exibidas no carrossel (nome, frase descritiva, ícone) |
| `SOCIAL_LINKS` | Links de contato (e-mail, LinkedIn, GitHub, Medium) |

### Arquivos estaticos

| Arquivo | Caminho | Como atualizar |
|---|---|---|
| Currículo PDF | `public/docs/curriculo.pdf` | Substituir pelo novo arquivo com o mesmo nome |
| Foto de perfil | `public/profile.jpeg` | Substituir pela nova imagem |
| Preview GIF | `public/assets/images/preview.gif` | Gravar tela, converter para `.gif` e substituir |
| Favicon | `public/favicon.svg` | Substituir pelo novo ícone |

### Estilo e tema

As customizações visuais (cores, fontes, animações) são definidas no bloco `@theme` dentro de [`src/index.css`](src/index.css).

---

## Deploy

O projeto está hospedado na **Vercel** com deploy contínuo a partir do branch `main`.

```
https://euuuller.vercel.app
```

Para deploy manual:

```bash
npm run build    # Gera o diretório dist/
```

O conteúdo de `dist/` pode ser servido por qualquer plataforma de hospedagem estática (Vercel, Netlify, GitHub Pages, etc.).

---

## Autor

<table>
  <tr>
    <td align="center">
      <strong>Euller dos Santos Rodrigues Duarte</strong><br>
      Analista de Dados | Graduando em Engenharia Elétrica (IFMA)<br><br>
      <a href="https://www.linkedin.com/in/euuuller/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
      </a>
      <a href="https://github.com/Euuuller">
        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
      </a>
      <a href="https://medium.com/@euller.santos.duarte">
        <img src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white" alt="Medium">
      </a>
      <a href="mailto:euller.santos.duarte@gmail.com">
        <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
      </a>
    </td>
  </tr>
</table>

---

## Licenca

Distribuído sob a licença **MIT**. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

```
Copyright (c) 2026 Euller dos Santos Rodrigues Duarte
```

---

<div align="center">

![GitHub last commit](https://img.shields.io/github/last-commit/Euuuller/Portfolio?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/Euuuller/Portfolio?style=flat-square)

</div>
