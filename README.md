# Projeto Componentes de Estoque — Node.js + EJS

Projeto didático com componentes independentes e responsivos para um sistema de controle de estoque.

## Tecnologias
- Node.js
- Express
- EJS
- HTML5
- CSS3
- JavaScript
- Chart.js no dashboard

## Estrutura

```text
projeto_componentes_estoque/
├── package.json
├── server.js
├── README.md
├── views/
│   ├── partials/
│   │   ├── head.ejs
│   │   ├── footer.ejs
│   │   └── nav-links.ejs
│   ├── home.ejs
│   ├── menu-horizontal.ejs
│   ├── menu-vertical.ejs
│   ├── menu-responsivo.ejs
│   ├── tabela.ejs
│   ├── cards.ejs
│   ├── formulario.ejs
│   ├── formulario-grid.ejs
│   ├── carrossel.ejs
│   ├── dashboard.ejs
│   └── rodape.ejs
└── public/
    ├── css/
    │   ├── home.css
    │   ├── menu-horizontal.css
    │   ├── menu-vertical.css
    │   ├── menu-responsivo.css
    │   ├── tabela.css
    │   ├── cards.css
    │   ├── formulario.css
    │   ├── formulario-grid.css
    │   ├── carrossel.css
    │   ├── dashboard.css
    │   └── rodape.css
    ├── js/
    │   ├── carrossel.js
    │   └── dashboard.js
    └── images/
```

## Como executar

1. Instale o Node.js.
2. Abra o terminal dentro da pasta do projeto.
3. Execute `npm install`.
4. Execute `npm start`.
5. Acesse `http://localhost:3000`.

## Rotas

- `/` — página inicial
- `/menu-horizontal`
- `/menu-vertical`
- `/menu-responsivo`
- `/tabela`
- `/cards`
- `/formulario`
- `/formulario-grid`
- `/carrossel`
- `/dashboard`
- `/rodape`

## Observações

Os componentes foram separados por página e por folha de estilo para facilitar a movimentação para outros layouts.

O servidor usa dados fictícios em memória apenas para demonstrar a renderização do EJS. Não há banco de dados nem backend de persistência.

As imagens de demonstração usam `placehold.co`, portanto uma conexão com a internet pode ser necessária para visualizá-las.

O dashboard utiliza Chart.js via CDN. Para um projeto totalmente offline, coloque a biblioteca localmente em `public/js`.
