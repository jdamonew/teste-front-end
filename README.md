# Teste Front-End

## Especificações

| Package                                         | Version                                                               |
| ----------------------------------------------- | --------------------------------------------------------------------  |
| **Node (Recomendada)**                          | v20.19.0                                                              |
| **React**                                       | v19.2.0                                                               |
| **Vite**                                        | v7.2.4                                                                |

## Decisões Técnicas

- Para o desenvolvimento do projeto escolhi a ```Dobra 3``` e ```Dobra 5```;

- A estilização do projeto foi implementado com ```styled-components``` utilizando tokens centralizados (cores e espaçamentos) via ThemeProvider, permitindo consistência visual, fácil manutenção e escalabilidade sem dependência de estilos globais não controlados. Onde faz mais sentido para um design system;

- Para os icones, optei por não utilizar lib externa para isso. Utilizei os svgs disponibilizados pelo protótipo do figma e componentizei para ter uma utilização e importação mais limpa ao invés de assets. É um bom exemplo para utilização de icone exclusivos da empresa, caso tenha;

- Na criação dos componentes tentei criar de uma forma simples, mas no componente do Card, como tinha vários dados diferentes e é um componente versátil, decidi utilizar Compound Component. Ele tem uma utilização bem mais limpa, não precisa passar vários props e realizar verificações inúteis dentro do componente caso não venha alguma prop;

- Para trazer os dados de cada dobra, criei hooks onde monto um objeto com os dados que serão monstrados no front. Em uma situação real, o simples retorno dos dados mockados poderiam vir de uma requisição de Api. Assim deixa o código bem mais limpo e separa essas funções do escopo da página;


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

testes aqui


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

Comando para **solucionar pontos de atenção** sinalizados pelo ```Eslint```:

```bash
# com npm
npm run lint:fix

# com Yarn
yarn lint:fix
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
├── 📁 src
│   ├── 📁 assets
│   │   ├── 🖼️ imgdobra-mobile.png
│   │   └── 🖼️ imgdobra.png
│   ├── 📁 components
│   │   ├── 📁 Button
│   │   │   ├── 📄 Button.tsx
│   │   │   └── 📄 Button.types.tsx
│   │   ├── 📁 Card
│   │   │   ├── 📄 Card.main.tsx
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
│   │       ├── 📄 Panel.tsx
│   │       └── 📄 Panel.types.tsx
│   ├── 📁 hooks
│   │   ├── 📄 useBenefits.tsx
│   │   ├── 📄 useCards.tsx
│   │   └── 📄 useIsMobile.tsx
│   ├── 📁 pages
│   │   └── 📁 Home
│   │       ├── 📄 Home.styles.tsx
│   │       ├── 📄 Home.tsx
│   │       └── 📄 Home.types.tsx
│   ├── 📁 styles
│   │   ├── 📄 GlobalStyle.tsx
│   │   ├── 📄 style.d.tsx
│   │   ├── 📄 theme.tsx
│   │   └── 📄 tokens.tsx
│   ├── 📁 tests
│   │   └── 📄 Button.test.tsx
│   └── 📄 main.tsx
├── ⚙️ .eslintrc
├── ⚙️ .gitignore
├── ⚙️ .prettierrc
├── 📄 LICENSE
├── 📝 README.md
├── 📄 eslint.config.js
├── 🌐 index.html
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── ⚙️ tsconfig.app.json
├── ⚙️ tsconfig.json
├── ⚙️ tsconfig.node.json
├── 📄 vite.config.ts
└── 📦 yarn.lock
```

