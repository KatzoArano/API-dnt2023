FROM node:16
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install
CMD ["ng", "serve", "--host", "0.0.0.0"]
