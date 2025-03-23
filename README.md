# Einstein Floripa - Website

Este projeto é o site do Einstein Floripa, uma organização focada em fornecer oportunidades educacionais para estudantes de baixa renda na região da Grande Florianópolis. O site é construído usando React, Tailwind CSS e outras tecnologias web modernas.

## Índice

- [Recursos](#recursos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Começando](#começando)
  - [Prerequisitos](#prerequisitos)
  - [Instalação](#instalação)
  - [Executando o Projeto](#executando-o-projeto)
- [Componentes](#componentes)
  - [Header](#header)
  - [Home](#home)
  - [Sobre](#sobre)
  - [Resultados](#resultados)
  - [Contato](#contato)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Recursos

- **Navegação:** Rolagem suave entre as diferentes seções da página (Home, Sobre, Resultados, Contato).
- **Seção Hero:** Uma seção visualmente atraente com uma imagem de fundo e chamada para ação.
- **Sobre:** Informações sobre a equipe do Einstein Floripa e sua missão.
- **Resultados:** Destaques das conquistas e impactos da organização.
- **Depoimentos:** Um carrossel com depoimentos de estudantes.
- **Design Responsivo:** O site é responsivo e funciona bem em diferentes tamanhos de tela.
- **Voluntariado e Estudantes:** A página inicial possui chamadas para ação tanto para estudantes quanto para voluntários.

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construir interfaces de usuário.
- **Tailwind CSS:** Framework CSS utilitário para desenvolvimento rápido de UI.
- **React Scroll:** Biblioteca para rolagem suave entre seções da página.
- **Swiper.js:** Biblioteca moderna de sliders com transições aceleradas por hardware.
- **Vite:** Ferramenta de build para uma experiência de desenvolvimento mais rápida e eficiente.

## Estrutura do Projeto

```
spa/
├── index.html         # Arquivo HTML principal
├── src/
│   ├── App.jsx        # Componente principal da aplicação
│   ├── main.jsx       # Ponto de entrada do React
│   ├── index.css      # Estilos globais
│   ├── components/    # Componentes React
│   │   ├── Header.jsx      # Cabeçalho de navegação
│   │   ├── Home.jsx        # Seção Hero
│   │   ├── Sobre.jsx       # Seção Sobre
│   │   ├── Resultados.jsx  # Seção de Resultados
│   │   └── Contato.jsx     # Seção de Contato/Depoimentos
│   └── assets/        # Imagens e outros arquivos
│       ├── 2-alunos-einstein.png
│       ├── alunos-einstein.jpeg
│       ├── conjunto-de-imagens.png
│       ├── carol-dias-pessoa.png
│       ├── evelin.png
│       ├── logo-branca.png
│       └── story-branco-azul.jpeg
├── public/
│   └── vite.svg
├── package.json       # Dependências e scripts do projeto
├── tailwind.config.js # Configuração do Tailwind CSS
└── ...
```

## Começando

### Prerequisitos

- **Node.js:** Certifique-se de que você tem o Node.js (versão 16 ou superior) instalado. Baixe em [https://nodejs.org/](https://nodejs.org/).
- **npm ou yarn:** Gerenciadores de pacotes que geralmente acompanham o Node.js.

### Instalação

1. **Clone o repositório:**

    ```bash
    git clone <repository-url>
    ```

2. **Navegue até o diretório do projeto:**

    ```bash
    cd spa
    ```

3. **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

### Executando o Projeto

1. **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

2. **Abra seu navegador:** O projeto estará rodando em `http://localhost:5173/` (ou outro endereço indicado no terminal).

## Deploy

O site está disponível online através do Firebase. Você pode acessá-lo em: [Einstein Floripa](https://eistain-floripa.web.app/).

## Componentes

### Header

- **Arquivo:** `src/components/Header.jsx`
- **Descrição:** Cabeçalho de navegação do site.
- **Funcionalidade:**
  - Links para "Início", "Nossa Equipe", "Resultados" e "Contato".
  - Usa Tailwind CSS para estilização.

### Home

- **Arquivo:** `src/components/Home.jsx`
- **Descrição:** Seção Hero do site.
- **Funcionalidade:**
  - Exibe uma imagem de fundo.
  - Contém chamadas para ação para voluntários e estudantes.

### Sobre

- **Arquivo:** `src/components/Sobre.jsx`
- **Descrição:** Seção "Sobre Nós".

### Resultados

- **Arquivo:** `src/components/Resultados.jsx`
- **Descrição:** Seção de Resultados.

### Contato

- **Arquivo:** `src/components/Contato.jsx`
- **Descrição:** Seção de Contato e Depoimentos.

## Contribuição

1. Fork o repositório.
2. Crie um branch para sua funcionalidade ou correção de bug.
3. Faça as alterações e commit.
4. Envie para seu repositório forkado.
5. Submeta um pull request.

## Licença

Este projeto está licenciado sob a MIT License.

