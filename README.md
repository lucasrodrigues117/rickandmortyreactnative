🚀 Utilização da API do Rick and Morty
Aplicativo mobile em React Native utilizando a API pública do Rick and Morty
<p align="center"> <img src="https://img.shields.io/badge/React%20Native-0A0A0A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img src="https://img.shields.io/badge/Expo-000?style=for-the-badge&logo=expo&logoColor=white" /> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" /> <img src="https://img.shields.io/badge/Rick%20and%20Morty%20API-00FF00?style=for-the-badge&logo=graphql&logoColor=000" /> </p> <p align="center"> <img src="https://img.shields.io/github/license/SEU-USUARIO/SEU-REPO?style=for-the-badge" /> <img src="https://img.shields.io/github/stars/SEU-USUARIO/SEU-REPO?style=for-the-badge&color=yellow" /> <img src="https://img.shields.io/github/languages/top/SEU-USUARIO/SEU-REPO?style=for-the-badge" /> </p>
🧠 Sobre o projeto

O Rick & Morty Explorer é um aplicativo mobile feito com React Native + Expo, focado em aprendizado de:

Consumo de APIs REST

Paginação infinita

Busca em tempo real

Navegação entre telas

Renderização otimizada com FlatList

O app busca personagens da API oficial, exibe detalhes completos e permite pesquisar qualquer personagem pelo nome.

📸 Demonstração

(adicione o link do vídeo depois)
🎥 Ver demonstração no YouTube

🧩 Funcionalidades

✔ Listagem de todos os personagens
✔ Scroll infinito (carrega mais ao chegar no final)
✔ Busca por nome usando query da API
✔ Filtro automático durante a digitação
✔ Tela completa de detalhes (imagem, status, origem etc.)
✔ Interface estilizada com tema dark + neon verde (Rick and Morty vibes)

🛠 Tecnologias usadas

React Native

Expo

Axios

React Navigation (Native Stack)

Rick and Morty API

JavaScript (ES2024)

📦 Estrutura do projeto
src/
 ├── screens/
 │    ├── HomeScreen.js
 │    └── CharacterScreen.js
 ├── services/
 │    └── api.js
 ├── components/
 │    └── SearchBar.js
 └── assets/
      ├── logorick.jpg
      └── ...

⚙️ Como rodar o projeto
1️⃣ Instale as dependências

Requisitos:

Node.js

NPM

Expo Go (no celular)

2️⃣ Clone o repositório
git clone https://github.com/SEU-USUARIO/SEU-REPO
cd SEU-REPO

3️⃣ Instale tudo
npm install

4️⃣ Execute o app
npm start


ou

expo start


Depois, abra o app Expo Go e escaneie o QR Code.

📚 API Usada

Rick & Morty REST API
https://rickandmortyapi.com/

Endpoints utilizados:

/character?page=1

/character?name=Rick

/character/{id}

🔮 Melhorias futuras

Favoritar personagens

Animações no layout

Modo claro/escuro

Listagem de episódios

Splash screen personalizada

👨‍💻 Autor

Lucas Rodrigues
🔥 Estudante de programação e desenvolvedor mobile em evolução
📍 Brasil
🐙 GitHub: https://github.com/SEU-USUARIO

📩 Email: opcional

📝 Licença

Este projeto está sob a licença MIT. Você pode usá-lo livremente.
