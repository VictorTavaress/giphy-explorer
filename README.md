# Giphy Explorer - Desafio Front-end Quasar + Vue 3

Este projeto é uma aplicação web desenvolvida com [Quasar 2](https://quasar.dev/), [Vue 3](https://vuejs.org/), [Pinia](https://pinia.vuejs.org/), [Axios](https://axios-http.com/), [Tailwind CSS](https://tailwindcss.com/) e integra a [API do GIPHY](https://developers.giphy.com/).  
O objetivo é permitir que usuários visualizem, pesquisem, favoritem e explorem GIFs de forma moderna e responsiva.

---
![image](https://github.com/user-attachments/assets/d38ec583-f77f-457f-aeac-2081fa62b5cd)



https://github.com/user-attachments/assets/bd37f300-0754-4ffa-aa56-4fdd435144ff



---

## Funcionalidades

- **Login GIPHY:** Integração com a API do GIPHY usando sua própria chave de desenvolvedor.
- **Layout moderno:** Navbar lateral, topbar com logo e nome do desenvolvedor.
- **Home:** Lista de GIFs trending e busca por termos.
- **Favoritos:** Adicione/remova GIFs favoritos, persistidos no LocalStorage.
- **Categorias:** Lista de categorias do GIPHY, com exibição dos GIFs de cada categoria (infinite scroll).
- **Sobre:** Informações sobre o desenvolvedor e o propósito do projeto.
- **Responsivo:** Interface adaptada para desktop e mobile.
- **Gerenciamento de estado:** Pinia para dados da API e favoritos.
- **Persistência:** Favoritos sincronizados com LocalStorage via plugin do Quasar.
- **Estilização:** Tailwind CSS para visual moderno.

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: versão 18+)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- [Quasar CLI](https://quasar.dev/start/installation) (global)

```bash
npm install -g @quasar/cli
# ou
yarn global add @quasar/cli
```

---

## 🚀 Passo a Passo para Rodar a Aplicação

### 1. **Clone o repositório**

```bash
git clone https://github.com/VictorTavaress/giphy-explorer
cd giphy-explorer
```

---

### 2. **Instale as dependências**

```bash
yarn install
# ou
npm install
```

---

### 3. **Configure a API Key do GIPHY**

1. Crie uma conta gratuita em [https://developers.giphy.com/](https://developers.giphy.com/) e gere sua chave de API.
2. Na raiz do projeto, crie um arquivo chamado `.env`.
3. Adicione a seguinte linha ao arquivo `.env`:

   ```
   VITE_GIPHY_API_KEY=sua_chave_aqui
   ```

   > Substitua `sua_chave_aqui` pela sua chave da API do GIPHY.

---

### 4. **Rode a aplicação em modo desenvolvimento**

```bash
npm run dev
```

Acesse [http://localhost:9000](http://localhost:9000) no seu navegador para ver a aplicação rodando.

---

### 5. **Dicas e Solução de Problemas**

- Se aparecer erro de chave da API, confira se o arquivo `.env` está correto e se a chave está válida.
- Se mudar a chave no `.env`, reinicie o servidor de desenvolvimento.
- O arquivo `.env` **não vai para o GitHub**. Cada usuário deve criar o seu localmente.

---

Pronto! Agora é só explorar, pesquisar e favoritar GIFs à vontade 🚀

Se tiver dúvidas, consulte o README ou entre em contato com o desenvolvedor.
