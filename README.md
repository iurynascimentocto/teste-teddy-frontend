# Teddy - Gerenciamento de Clientes

Este é o repositório do frontend do projeto **Teddy**, uma aplicação React desenvolvida para gerenciar clientes de forma eficiente. A aplicação conta com funcionalidades de criação, visualização, edição e remoção de clientes, além de uma interface amigável e moderna.

## 🚀 Tecnologias Utilizadas

- **React** + **Vite** + **TypeScript**
- **Styled Components** (Estilização)
- **Zustand** (Gerenciamento de estado)
- **Axios** (Requisições HTTP)
- **React Router DOM** (Gerenciamento de rotas)
- **Yup** (Validação de formulários)
- **Cypress / Jest** (Testes automatizados)
- **i18n** (Internacionalização)

## 📌 Funcionalidades

- Inserir o nome do usuário na tela inicial
- Redirecionamento para a tela de listagem de clientes
- Cadastro, edição, exclusão e seleção de clientes
- Visualização detalhada dos clientes selecionados
- Suporte a múltiplos idiomas
- Testes automatizados com Cypress e Jest

## 📦 Estrutura do Projeto

```
/src
 ├── services
 │   ├── api.ts
 │   ├── clientService.ts
 │   ├── selectedClientService.ts
 │
 ├── store
 │   ├── clientStore.ts
 │   ├── selectedClientStore.ts
 │   ├── userStore.ts
 │
 ├── pages
 │   ├── Home
 │   │   ├── index.tsx
 │   │   ├── styles.ts
 │   │
 │   ├── Logout
 │   │   ├── index.tsx
 │   │   ├── styles.ts
 │   │
 │   ├── Clients
 │   │   ├── components
 │   │   │   ├── ModalCreateClient
 │   │   │   │   ├── index.tsx
 │   │   │   │   ├── styles.ts
 │   │   │   ├── ModalDeleteClient
 │   │   │   │   ├── index.tsx
 │   │   │   │   ├── styles.ts
 │   │   ├── hooks
 │   │   │   ├── useClients.ts
 │   │   ├── index.tsx
 │   │   ├── styles.ts
 │   │
 │   ├── SelectedClient
 │   │   ├── components
 │   │   │   ├── ModalRemoveSelectedClient
 │   │   │   │   ├── index.tsx
 │   │   │   │   ├── styles.ts
 │   │   ├── hooks
 │   │   │   ├── useSelectedClients.ts
 │   │   ├── index.tsx
 │   │   ├── styles.ts
 │
 ├── components
 │   ├── Button
 │   │   ├── index.tsx
 │   │   ├── styles.ts
 │   │
 │   ├── CardList
 │   │   ├── index.tsx
 │   │   ├── styles.ts
 │   │
 │   ├── Input
 │   │   ├── index.tsx
 │   │   ├── styles.ts
 │   │
 │   ├── ModalDefault
 │   │   ├── index.tsx
 │   │   ├── styles.ts
 │   │
 │   ├── Layout
 │   │   ├── Header
 │   │   │   ├── index.tsx
 │   │   │   ├── styles.ts
 │   │   ├── index.tsx
 │
 ├── assets
 │   ├── logo.svg
 │
 ├── styles
 │   ├── global.ts
 │   ├── styled.d.ts
 │   ├── theme.ts
 │
 ├── util
 │   ├── currencyFormatter.ts
 │   ├── parseCurrency.ts
 │
 ├── i18n
 │   ├── en.json
 │   ├── index.ts
 │   ├── pt.json
 │
 ├── types
 │   ├── client.ts
 │   ├── user.ts
 │
 ├── routers
 │   ├── index.tsx
 │
 ├── App.tsx
 ├── Main.tsx
```

## 🛠 Configuração do Ambiente

1. Clone este repositório:
   ```sh
   git clone https://github.com/iurynascimentocto/teste-teddy-frontend.git
   ```

2. Acesse a pasta do projeto:
   ```sh
   cd teddy
   ```

3. Instale as dependências:
   ```sh
   npm install
   # ou
   yarn install
   ```

4. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto:
   ```env
   VITE_API_BASE_URL=http://localhost:3000
   ```

5. Execute o projeto em ambiente de desenvolvimento:
   ```sh
   npm run dev
   # ou
   yarn dev
   ```

## 🧪 Testes

Rodando os testes automatizados:
```sh
npm run test
# ou
yarn test
```

Rodando testes de ponta a ponta com Cypress:
```sh
npm run cypress:open
# ou
yarn cypress:open
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com 💙 por [Iury Nascimento](https://www.linkedin.com/in/ivnascimento/).

