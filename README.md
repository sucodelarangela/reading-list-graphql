<div id='top'>

# Reading List | GraphQl / Apollo / React

</div>

_[Read it in English](#English)_

Aplicação com React para prática pessoal de GraphQL e Apollo Client.

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/vite-242424?style=for-the-badge&logo=vite&logoColor=646CFF"/>
  <img src="https://img.shields.io/badge/apollo-ffffff?style=for-the-badge&logo=apollographql&logoColor=311C87"/>
  <img src="https://img.shields.io/badge/mongodb-ffffff?style=for-the-badge&logo=mongodb&logoColor=47A248"/>
  <img src="https://img.shields.io/badge/graphql-f5f6f8?style=for-the-badge&logo=graphql&logoColor=E10098">
  <img src="https://img.shields.io/badge/node-233056?style=for-the-badge&logo=node.js&logoColor=339933">
  <img src="https://img.shields.io/badge/express-eeeeee?style=for-the-badge&logo=express&logoColor=000000">
  <img src="https://img.shields.io/badge/lodash-ffffff?style=for-the-badge&logo=lodash&logoColor=3492FF">
</div>

## ⚙️ Como usar

1. Crie um banco de dados no [**MongoDb Atlas**](https://www.mongodb.com/);

2. Faça o download deste repositório através do botão verde **Code** no topo da página e, em seguida, clicando em **Download ZIP**. Ou, se preferir, através do terminal (Git Bash, Powershell, etc.), use o comando:

```bash
git clone https://github.com/sucodelarangela/reading-list-graphql.git
```

3. Acesse a pasta do projeto com seu terminal;

4. Rode o comando `npm install` ou `yarn install` para instalar as dependências (você precisa ter o [**Node.js**](https://nodejs.org/en/download/) instalado);

5. Crie um arquivo `.env` na pasta `server`. Neste arquivo, crie duas variáveis `DBUSER` e `DBPASS` e atribua a elas seu nome de usuário e a senha do seu banco de dados do MongoDb Atlas criado no passo **1**, respectivamente.

> A aplicação só funcionará com esses dados corretamente inseridos no arquivo `.env`.

6. Após a correta configuração acima, acesse a pasta `server` e rode o back-end com o comando `npm start` ou `yarn start`. Você deve receber a seguinte mensagem de confirmação:

```
Now listening for requests on port 4000
Connected to database
```

7. Depois, abra outra instância do seu terminal e acesse a pasta `client`. Rode o comando `npm run dev` ou `yarn dev` para ter acesso ao front-end da aplicação. Você deve receber a seguinte mensagem de confirmação:

```
yarn run v1.22.19
$ vite

  VITE v4.0.4  ready in 736 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

8. Acesse o endereço `Local` acima no seu navegador para usar a lista de leitura.

---

<div id="English">

_English version_

</div>

## 🔎 Overview

React app for personal practices of GraphQL and Apollo Client.

## ⚙️ How to use it

1. Create a database in [**MongoDb Atlas**](https://www.mongodb.com/);

2. Download this repository by clicking the green **Code** button on top of the page and then clicking **Download ZIP** option. Or use the following command on your terminal (Git Bash, Powershell, etc.):

```bash
git clone https://github.com/sucodelarangela/reading-list-graphql.git
```

3. Access the project root folder on your terminal;

4. Run `npm install` or `yarn install` to install all project dependencies (you must have [Node.js](https://nodejs.org/en/download/) installed);

5. Create a `.env` file in the `server` folder. In this file, create two variables `DBUSER` and `DBPASS` and set their values with the user name and password for the MongoDb Atlas database created on step **1**, respectively.

> The app will only work properly if these data are correctly set in `.env` file.

6. After the correct setup above, access the `server` folder and run `npm start` or `yarn start` on yout terminal to start the back-end. You should receive the following message:

```
Now listening for requests on port 4000
Connected to database
```

7. Then, open a new instance of your terminal and access the `client`folder. Run `npm run dev` or `yarn dev` to have access to the front-end. You should receive the following message:

8. Open the `Local` url above on your browser to use the reading list.

---

Developed with 🧡 by [@sucodelarangela](https://angelacaldas.vercel.app)
