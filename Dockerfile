#Imagen de base Node.Js
FROM node:20
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
EXPOSE 3030