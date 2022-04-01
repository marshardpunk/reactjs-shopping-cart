#Empleamos la imagen del repositorio oficial de Docker para Node. En este caso uso la versión 8 en su versión alpine, una imagen básica que ocupa muy poco espacio
FROM node:17.8-bullseye

#Se expone el puerto 3000 para poder consultar el sitio desde el pc host
EXPOSE 3000