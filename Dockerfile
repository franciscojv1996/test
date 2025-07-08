#Imagen de base Node.Js
FROM node:20

#Crear carpeta de trabajo
WORKDIR /usr/src/app

#Copiar package.json y package-lock.json
COPY package*.json ./

#Instalar dependecia
RUN npm install

#Copiar el resto del codigo funte
COPY  . .

#Exponer el puerto
EXPOSE 3030

#Comando de arranque
CMD ["npm", "run", "dev"]