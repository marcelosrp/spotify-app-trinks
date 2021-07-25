## Tecnologias usadas:

<ul>
  <li>NextJS</li>
  <li>ReactJS</li>
  <li>Styled Components</li>
  <li>Axios</li>
  <li>NodeJS</li>
</ul>

## Como rodar o projeto

<ul>
  <li>Clone o projeto;</li>
  <li>Rode yarn ou npm install para instalar as dependencias</li>
  <li>Pegar as as chaves <strong>client id</strong> e <strong>Client Secret</strong></li>
  <li>Criar um arquivo na .env.local na raiz do projeto com as seguintes variaveis de ambiente: <strong>NEXT_PUBLIC_API_KEY</strong> para a client id, <strong>NEXT_PUBLIC_API_KEY_SECRET</strong> para a client secret e <strong>NEXT_PUBLIC_REDIRECT_URI</strong> com a url de produção (https://spotify-app-trinks.vercel.app/)</li>
  <li>Rode npm run dev ou yarn dev para subir o servidor local.</li>
</ul>

## Sobre o projeto

Utilizei o nextjs como framework do react pela facilidade de criar endpoints em nodeJS no back-end. 
Sendo assim, usei a função de back-end para fazer os processos de autorização e fetch na API pois como preciso passar dados sensíveis como chaves, resolvi não usar o front-end para isso.
Para o CSS usei styled components pois com ele evitamos problemas de conflitos de classes, além de aproveitar as funções de encaminhamentos de props.

## Deploy produção

[https://spotify-app-trinks.vercel.app/](https://spotify-app-trinks.vercel.app/)

## Screenshots:

Página Login<br>
![Página Login](/public/img/screenshots/login.png)

Home Dashboard<br>
![Dashboard](/public/img/screenshots/dashboard1.png)

Dashboard com lista de músicas<br>
![Dashboard](/public/img/screenshots/dashboard2.png)

Dashboard com música tocando<br>
![Dashboard](/public/img/screenshots/dashboard3.png)

Dashboard com modal com a letra da música<br>
![Dashboard](/public/img/screenshots/dashboard4.png)
