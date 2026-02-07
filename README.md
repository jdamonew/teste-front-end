# Teste Front-End

## Especificações

| Package                                         | Version                                                               |
| ----------------------------------------------- | --------------------------------------------------------------------  |
| **Node (Recomendada)**                          | v20.19.0                                                              |
| **React**                                       | v19.2.4                                                               |
| **Vite**                                        | v7.2.4                                                                |

## Decisões Técnicas

- Para o desenvolvimento do projeto escolhi a ```Dobra 3``` e ```Dobra 5```;

- A estilização do projeto foi implementado com ```styled-components``` utilizando tokens centralizados (cores e espaçamentos) via ThemeProvider, permitindo consistência visual, fácil manutenção e escalabilidade sem dependência de estilos globais não controlados, fazendo mais sentido em um contexto de design system.

- Para os icones, optei por não utilizar não utilizar bibliotecas externas. Utilizei os SVGs dfornecidos no protótipo do Figma e os componentizei para ter uma utilização e permitindo uma importação mais limpa e reutilizável, além de representar bem um cenário de ícones exclusivos da empresa;

- Na criação dos componentes, priorizei simplicidade e clareza. No componente do Card, por ser mais versátil e possuir múltiplas variações de conteúdo, optei pelo padrão Compound Components. Ele tem uma utilização bem mais clara, reduz a necessidade de múltiplas props e evita verificações condicionais desnecessárias dentro do componente.

- Para a organização dos dados exibidos em cada seção, criei hooks responsáveis por montar os objetos de dados utilizados no front-end. Em um cenário real, esses dados poderiam ser facilmente substituídos por respostas de uma API, mantendo o código mais limpo e separando a lógica de dados do escopo da página.

- Para testes utilizo Jest como test runner e React Testing Library para testar componentes do ponto de vista do usuário, focando em comportamento e acessibilidade, não em implementação.


## 1. Instalação

Para realizar a instalação dos pacotes, execute o comando abaixo:

```bash
# com npm
npm install

# com Yarn
yarn add
```

## 2. Execução

Para **rodar o projeto**, execute o comando abaixo:

```bash
# com npm
npm run dev

# com Yarn
yarn dev
```

## 3. Testes

 Foram realizados algums testes automatizados na pagina principal no arquivo [Home.test.tsx](\src\pages\Home\Home.test.tsx) e no componente Button, no arquivo [Button.test.tsx](\src\components\Button\Button.test.tsx).

Para rodar os testes, utilize o comando abaixo:

```bash
# com npm
npm run test

# com Yarn
yarn test
```


## Eslint e Prettier

As configurações para o ```Eslint``` e ```Prettier``` então nos respectivos arquivos ```.eslintrc & eslint.config.js``` e ```.prettierrc```.

### Eslint

Para executar o ```Eslint``` onde sinalizará pontos de atenção no código:

```bash
# com npm
npm run lint

# com Yarn
yarn lint
```

### Prettier

Para formatar todos os arquivos utilizando padrões configurado nos arquivos do ```Prettier```

```bash
# com npm
npm run format

# com Yarn
yarn format
```

## Estrutura do projeto

```
├── 📁 public
│   └── 🖼️ vite.svg
├── 📁 src
│   ├── 📁 assets
│   │   ├── 🖼️ imgdobra-mobile.png
│   │   └── 🖼️ imgdobra.png
│   ├── 📁 components
│   │   ├── 📁 Button
│   │   │   ├── 📄 Button.styles.tsx
│   │   │   ├── 📄 Button.test.tsx
│   │   │   ├── 📄 Button.tsx
│   │   │   └── 📄 Button.types.tsx
│   │   ├── 📁 Card
│   │   │   ├── 📄 Card.styles.tsx
│   │   │   ├── 📄 Card.tsx
│   │   │   └── 📄 Card.types.tsx
│   │   ├── 📁 IconButton
│   │   │   ├── 📄 IconButton.styles.tsx
│   │   │   ├── 📄 IconButton.tsx
│   │   │   └── 📄 IconButton.types.tsx
│   │   ├── 📁 Icons
│   │   │   ├── 📄 Certificate.tsx
│   │   │   ├── 📄 ChevronLeft.tsx
│   │   │   ├── 📄 ChevronRight.tsx
│   │   │   ├── 📄 Clock.tsx
│   │   │   ├── 📄 Gift.tsx
│   │   │   ├── 📄 HandHeart.tsx
│   │   │   ├── 📄 HandShake.tsx
│   │   │   ├── 📄 Icons.main.tsx
│   │   │   ├── 📄 Icons.types.tsx
│   │   │   ├── 📄 Laptop.tsx
│   │   │   ├── 📄 NoCash.tsx
│   │   │   ├── 📄 PiggyCoin.tsx
│   │   │   ├── 📄 Tasks.tsx
│   │   │   └── 📄 Telemarketing.tsx
│   │   └── 📁 Panel
│   │       ├── 📄 Panel.styles.tsx
│   │       ├── 📄 Panel.tsx
│   │       └── 📄 Panel.types.tsx
│   ├── 📁 hooks
│   │   ├── 📄 useBenefits.tsx
│   │   ├── 📄 useCards.tsx
│   │   └── 📄 useIsMobile.tsx
│   ├── 📁 pages
│   │   └── 📁 Home
│   │       ├── 📄 Home.styles.tsx
│   │       ├── 📄 Home.test.tsx
│   │       ├── 📄 Home.tsx
│   │       └── 📄 Home.types.tsx
│   ├── 📁 styles
│   │   ├── 📄 GlobalStyle.tsx
│   │   ├── 📄 style.d.tsx
│   │   ├── 📄 theme.tsx
│   │   └── 📄 tokens.tsx
│   ├── 📁 tests
│   │   ├── 📄 fileMock.ts
│   │   ├── 📄 setupTests.ts
│   │   └── 📄 test-utils.tsx
│   ├── 📄 main.tsx
│   └── 📄 vite-env.d.ts
├── ⚙️ .eslintrc
├── ⚙️ .gitignore
├── ⚙️ .prettierrc
├── 📄 LICENSE
├── 📝 README.md
├── 📄 eslint.config.js
├── 🌐 index.html
├── 📄 jest.config.cjs
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── ⚙️ tsconfig.app.json
├── ⚙️ tsconfig.json
├── ⚙️ tsconfig.node.json
├── 📄 vite.config.ts
└── 📦 yarn.lock
```