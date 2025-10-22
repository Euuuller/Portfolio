# Portfólio Profissional de Cientista de Dados

Este é um template de portfólio profissional e responsivo, desenvolvido com HTML, CSS e JavaScript puro, otimizado para Cientistas de Dados. Ele inclui funcionalidades como efeito de digitação, navegação suave, animações de scroll e um sistema de tema claro/escuro (`all white` e `all black`).

## Funcionalidades

-   **Design Responsivo**: Adapta-se a diferentes tamanhos de tela (desktop, tablet, mobile).
-   **Tema Claro/Escuro**: Alterna entre um tema claro (`all white`) e um tema escuro (`all black`) para melhor experiência do usuário.
-   **Efeito de Digitação**: Animação de texto dinâmico na seção Hero.
-   **Navegação Suave**: Rolagem suave para as seções da página.
-   **Animações de Scroll**: Elementos aparecem com animações elegantes ao rolar a página.
-   **Formulário de Contato Funcional**: Validação básica e feedback ao usuário.
-   **Estrutura de Projeto Limpa**: Organização clara de arquivos HTML, CSS e JavaScript.
-   **Otimizado para Performance**: Código leve e eficiente.

## Estrutura do Projeto

```
template-project/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    ├── images/
    │   ├── profile.svg
    │   ├── about-illustration.svg
    │   ├── cv-placeholder.pdf
    │   ├── skills/
    │   │   ├── python.svg
    │   │   ├── r.svg
    │   │   ├── sql.svg
    │   │   ├── power-bi.svg
    │   │   ├── excel.svg
    │   │   ├── tableau.svg
    │   │   ├── git.svg
    │   │   └── docker.svg
    │   └── projects/
    │       ├── project-1.svg
    │       ├── project-2.svg
    │       ├── project-3.svg
    │       ├── project-4.svg
    │       ├── project-5.svg
    │       └── project-6.svg
```

## Como Usar

### 1. Clonar o Repositório (ou baixar o ZIP)

Se você estiver usando Git, clone o repositório:

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd template-project
```

Se você baixou o arquivo ZIP, descompacte-o em uma pasta de sua preferência.

### 2. Customizar o Conteúdo

-   **`index.html`**: Edite o conteúdo textual, links de redes sociais, informações pessoais, detalhes sobre projetos e habilidades.
    -   **Seu Nome**: Altere `Seu Nome Completo` na seção Hero.
    -   **Profissão**: Edite o texto no efeito de digitação em `assets/js/main.js` (variável `APP_CONFIG.typing.strings`).
    -   **Links Sociais**: Atualize os `href` dos ícones de redes sociais no cabeçalho e rodapé.
    -   **Seções**: Preencha as seções `Sobre Mim`, `Habilidades`, `Projetos` e `Contato` com suas informações.

-   **`assets/css/style.css`**: 
    -   **Cores**: As cores principais são definidas usando variáveis CSS no `:root` e `[data-theme="dark"]`. Altere-as para personalizar o tema.
        ```css
        :root { /* Tema Claro (all white) */
            --color-primary: #3b82f6; /* Azul */
            --color-secondary: #0ea5e9; /* Azul claro */
            --color-accent: #10b981; /* Verde */
            --color-background: #ffffff; /* Fundo branco */
            --color-text-primary: #1a202c; /* Texto escuro */
            --color-text-secondary: #4a5568; /* Texto cinza */
            --color-card-background: #f8fafc; /* Fundo de card claro */
            --color-border: #e2e8f0; /* Borda clara */
            --color-shadow: rgba(0, 0, 0, 0.05);
            --color-link-hover: var(--color-primary);
            --color-button-bg: var(--color-primary);
            --color-button-text: #ffffff;
            --color-button-hover-bg: #2563eb;
            --color-button-border: var(--color-primary);
            --color-button-outline-text: var(--color-primary);
            --color-button-outline-border: var(--color-primary);
            --color-button-outline-hover-bg: var(--color-primary);
            --color-button-outline-hover-text: #ffffff;
            --color-form-bg: #ffffff;
            --color-form-border: #cbd5e0;
            --color-form-focus-border: var(--color-primary);
            --color-form-message-success-bg: #d1fae5;
            --color-form-message-success-text: #065f46;
            --color-form-message-success-border: #a7f3d0;
            --color-form-message-error-bg: #fee2e2;
            --color-form-message-error-text: #991b1b;
            --color-form-message-error-border: #fca5a5;
            --color-footer-bg: #f8fafc;
            --color-footer-text: #4a5568;
            --color-social-icon: #4a5568;
            --color-social-icon-hover: var(--color-primary);
            --color-scroll-to-top-bg: var(--color-primary);
            --color-scroll-to-top-hover-bg: #2563eb;
        }

        [data-theme="dark"] { /* Tema Escuro (all black) */
            --color-primary: #60a5fa; /* Azul mais claro para contraste */
            --color-secondary: #38bdf8; /* Azul ciano */
            --color-accent: #34d399; /* Verde menta */
            --color-background: #000000; /* Fundo preto */
            --color-text-primary: #e2e8f0; /* Texto claro */
            --color-text-secondary: #a0aec0; /* Texto cinza claro */
            --color-card-background: #1a202c; /* Fundo de card escuro */
            --color-border: #2d3748; /* Borda escura */
            --color-shadow: rgba(0, 0, 0, 0.3);
            --color-link-hover: var(--color-primary);
            --color-button-bg: var(--color-primary);
            --color-button-text: #000000;
            --color-button-hover-bg: #3b82f6;
            --color-button-border: var(--color-primary);
            --color-button-outline-text: var(--color-primary);
            --color-button-outline-border: var(--color-primary);
            --color-button-outline-hover-bg: var(--color-primary);
            --color-button-outline-hover-text: #000000;
            --color-form-bg: #1a202c;
            --color-form-border: #4a5568;
            --color-form-focus-border: var(--color-primary);
            --color-form-message-success-bg: #166534;
            --color-form-message-success-text: #d1fae5;
            --color-form-message-success-border: #22c55e;
            --color-form-message-error-bg: #7f1d1d;
            --color-form-message-error-text: #fecaca;
            --color-form-message-error-border: #ef4444;
            --color-footer-bg: #1a202c;
            --color-footer-text: #a0aec0;
            --color-social-icon: #a0aec0;
            --color-social-icon-hover: var(--color-primary);
            --color-scroll-to-top-bg: var(--color-primary);
            --color-scroll-to-top-hover-bg: #3b82f6;
        }
        ```

-   **`assets/js/main.js`**: Ajuste as configurações do efeito de digitação (`APP_CONFIG.typing.strings`) ou outras lógicas se necessário.

### 3. Substituir Imagens e Ícones

As imagens e ícones SVG fornecidos são placeholders. Substitua-os pelos seus próprios:

-   **`assets/images/profile.svg`**: Sua foto de perfil.
-   **`assets/images/about-illustration.svg`**: Uma ilustração para a seção "Sobre Mim".
-   **`assets/images/skills/`**: Ícones para suas habilidades técnicas. Certifique-se de que os nomes dos arquivos correspondem aos usados no `index.html`.
-   **`assets/images/projects/`**: Imagens de capa para seus projetos. Certifique-se de que os nomes dos arquivos correspondem aos usados no `index.html`.
-   **`assets/images/cv-placeholder.pdf`**: Substitua pelo seu currículo em PDF e atualize o link no `index.html`.

### 4. Testar Localmente

Abra o arquivo `index.html` diretamente no seu navegador ou use um servidor local (como `python3 -m http.server` ou Live Server no VS Code) para visualizar o portfólio e garantir que tudo está funcionando como esperado.

## Deploy no GitHub Pages

O GitHub Pages é uma ótima maneira de hospedar seu portfólio gratuitamente. Siga estes passos:

1.  **Crie um Repositório no GitHub**: Vá para [GitHub](https://github.com/) e crie um novo repositório. Dê a ele um nome como `seu-usuario.github.io` (para um site pessoal) ou `nome-do-projeto` (para um site de projeto).

2.  **Inicialize o Git e Faça o Primeiro Commit**: No diretório `template-project` no seu computador:

    ```bash
    git init
    git add .
    git commit -m "Initial commit: Portfolio template"
    ```

3.  **Conecte ao Repositório Remoto**: Adicione o repositório que você criou no GitHub como remoto:

    ```bash
    git remote add origin https://github.com/seu-usuario/seu-repositorio.git
    git branch -M main
    git push -u origin main
    ```
    Substitua `seu-usuario` e `seu-repositorio` pelos seus dados.

4.  **Configure o GitHub Pages**: 
    -   No seu repositório GitHub, vá para **Settings** (Configurações).
    -   No menu lateral, clique em **Pages**.
    -   Em "Source" (Fonte), selecione a branch `main` (ou `master`, dependendo do seu repositório) e a pasta `/ (root)`.
    -   Clique em **Save** (Salvar).

5.  **Aguarde o Deploy**: O GitHub Pages levará alguns minutos para construir e publicar seu site. Você verá um link para o seu site na seção Pages (geralmente `https://seu-usuario.github.io/seu-repositorio/` ou `https://seu-usuario.github.io/` se for um repositório pessoal).

## Contribuições

Sinta-se à vontade para usar, modificar e melhorar este template. Se encontrar algum bug ou tiver sugestões, por favor, abra uma issue ou envie um pull request no repositório original (se aplicável).

--- 

**Desenvolvido por Manus AI**
