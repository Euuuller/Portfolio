# 📊 Data Science Portfolio

<div align="center">

![Portfolio Preview](./assets/images/image.png)

**Portfólio web desenvolvido do zero para apresentar meus projetos de Ciência de Dados**

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://euuuller.github.io/Portfolio/)
[![GitHub Stars](https://img.shields.io/github/stars/Euuuller/Portfolio?style=for-the-badge)](https://github.com/Euuuller/Portfolio/stargazers)
[![License](https://img.shields.io/github/license/Euuuller/Portfolio?style=for-the-badge)](./LICENSE)

[🌐 Ver Portfólio ao Vivo](https://euuuller.github.io/Portfolio/) • [🐛 Reportar Bug](https://github.com/Euuuller/Portfolio/issues) • [✨ Solicitar Feature](https://github.com/Euuuller/Portfolio/issues)

</div>

---

## 🎯 Sobre o Projeto

Este é meu **portfólio pessoal de Ciência de Dados**, desenvolvido completamente por mim para apresentar meus projetos, habilidades técnicas e experiência profissional de forma moderna e interativa.

O site foi construído do zero utilizando HTML, CSS e JavaScript puro, demonstrando minhas capacidades não apenas em análise de dados, mas também em desenvolvimento web front-end. Através deste projeto, busco apresentar minha trajetória profissional e os trabalhos que realizei nas áreas de análise de dados, machine learning e visualização de dados.

### 💡 Motivação

Criei este portfólio para:
- ✅ Centralizar todos os meus projetos de Data Science em um único lugar
- ✅ Demonstrar habilidades técnicas além da análise de dados (desenvolvimento web)
- ✅ Apresentar meu trabalho de forma profissional para recrutadores e empresas
- ✅ Praticar desenvolvimento front-end e design de interfaces
- ✅ Ter um espaço personalizado que represente minha identidade profissional

### ✨ Principais Funcionalidades

- 🌓 **Tema Claro/Escuro** - Alternância suave com detecção automática de preferência do sistema
- 📱 **Design Responsivo** - Experiência otimizada para desktop, tablet e mobile
- ⚡ **Performance** - Carregamento rápido com JavaScript vanilla e CSS moderno
- 🎨 **Animações Suaves** - Efeitos de digitação, scroll e hover para melhor UX
- 📊 **Skills Dinâmicas** - Tecnologias carregadas via JSON para fácil manutenção
- ♿ **Acessível** - HTML semântico e atributos ARIA
- 🔍 **SEO Otimizado** - Meta tags e Open Graph configurados

## 🛠️ Tecnologias Utilizadas

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### Ferramentas & Deploy
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)

## 📁 Estrutura do Projeto

```
Portfolio/
├── 📂 assets/
│   ├── 📂 css/
│   │   ├── 📂 base/         # Variáveis, reset, tipografia
│   │   ├── 📂 components/   # Componentes reutilizáveis
│   │   └── 📂 layout/       # Layout e seções
│   ├── 📂 data/
│   │   └── skills.json      # Dados das habilidades técnicas
│   ├── 📂 images/           # Imagens e recursos visuais
│   └── 📂 js/
│       ├── 📂 components/   # Módulos JavaScript
│       ├── 📂 utils/        # Funções utilitárias
│       └── main.js          # Ponto de entrada
├── 📂 docs/
│   └── Curriculum.pdf       # Currículo em PDF
├── index.html               # Página principal
├── README.md
└── LICENSE
```

## 🚀 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Git instalado

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/Euuuller/Portfolio.git
cd Portfolio
```

2. **Abra no navegador**
```bash
# Com Python
python -m http.server 8000

# Ou simplesmente abra o index.html
```

3. **Acesse** `http://localhost:8000`

### Personalização

#### 1. Informações Pessoais
Edite o arquivo `index.html`:
```html
<!-- Atualize nome, bio, links sociais -->
<h1>Seu Nome</h1>
<p>Sua descrição profissional</p>
```

#### 2. Skills e Tecnologias
Modifique `assets/data/skills.json`:
```json
{
  "categories": [
    {
      "name": "Linguagens",
      "skills": [
        {"name": "Python", "icon": "python"},
        {"name": "R", "icon": "r"}
      ]
    }
  ]
}
```

#### 3. Estilos e Cores
Ajuste as variáveis em `assets/css/base/variables.css`:
```css
:root {
  --primary-color: #seu-codigo-hex;
  --secondary-color: #seu-codigo-hex;
}
```

#### 4. Adicionar Projetos
Atualize a seção de projetos no `index.html` e adicione screenshots em `assets/images/projects/`

## 📦 Deploy

### GitHub Pages (Recomendado)

1. Vá em **Settings** > **Pages** no seu repositório
2. Em **Source**, selecione a branch `main` e pasta `/ (root)`
3. Clique em **Save**
4. Seu site estará disponível em: `https://[seu-usuario].github.io/Portfolio/`

### Outras Opções

- **Netlify**: Drag and drop da pasta do projeto
- **Vercel**: Conecte seu repositório GitHub
- **Firebase Hosting**: `firebase deploy`

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a Branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📝 Roadmap

- [ ] Adicionar blog para artigos de Data Science
- [ ] Implementar sistema de filtros para projetos
- [ ] Integrar Google Analytics
- [ ] Adicionar seção de certificações
- [ ] Criar versão em inglês
- [ ] Implementar modo de alto contraste

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Euller dos Santos**

Estudante de Engenharia Elétrica com especialização em Ciência de Dados no IFMA. Apaixonado por transformar dados em insights valiosos e resolver problemas reais através de análises.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/euuuller)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:euller.santos.duarte@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Euuuller)

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela!**

Feito com ❤️ por [Euller dos Santos](https://github.com/Euuuller)

</div>