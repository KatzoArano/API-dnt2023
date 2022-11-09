# FROM: Permet de recuperer la version de node
FROM node:16
#WORKDIR: Permet de configurer le répertoire de travail pour les instrutions suivantes. 
WORKDIR /app
#COPY: Permet de copier tout le contenu du contexte de build.
COPY package*.json .
#RUN: Install les dépéndances
RUN npm install
COPY . .
#CMD: Lance le serveur
CMD [ "node", "server.js" ]

