# FROM: Permet de recuperer la version de node
FROM node:16
ADD . /app
#WORKDIR: Permet de configurer le répertoire de travail pour les instrutions suivantes. 
WORKDIR /app
#RUN: Install les dépéndances
RUN npm install
EXPOSE 1200
#CMD: Lance le serveur
CMD [ "node", "server.js" ]

