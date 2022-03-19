# Apolo
Un buscador de canciones que utiliza la [API de Spotify](https://developer.spotify.com/documentation/web-api/) para obtener los datos de las canciones y [lyricsovh](https://lyricsovh.docs.apiary.io/#) para las letras de las mismas. La aplicación permite: ver detalles y reproducir una preview de la canción buscada, siempre que este recurso este disponible.

![2](https://user-images.githubusercontent.com/67164849/159109389-5c004a39-531b-4e5a-99f2-ab1dcc954e1e.gif)

## Video de presentación
#### **`¡IMPORTANTE!`**
Los videos en modo ventana se reproducen en calidad baja (360p), recomiendo ponerlos en pantalla completa para verlos en 720p o bien ajustar la calidad manualmente. 
[![apolo-yt](https://user-images.githubusercontent.com/67164849/159110585-ba4c5a64-1d3c-4dda-888e-a37b7156927a.gif)](https://drive.google.com/file/d/1Nc2mLAyMl-gd775y_MTAwjW5GptUgBYZ/view?usp=sharing)

## Live demo

https://apolo-kv357.netlify.app

## Tecnologías
- [X] ![10](https://i.ibb.co/hXmqN5t/typescript.png) TypeScript
- [X] ![11](https://i.ibb.co/7Yb8sZf/react.png) React.JS
- [X] ![12](https://i.ibb.co/fNzydrw/sc.png) Styled Components
- [X] ![13](https://i.ibb.co/mbqkrtd/cypress.png) Cypress
- [X] ![14](https://i.ibb.co/nMczFTQ/react-testing-library.png) React Testing Library

## Instalación
Para instalar el proyecto descargue y abra en su editor de código, o bien desde la consola de preferencia y ejecute el comando **`npm install`**. Esto comenzara a instalar todas las dependencias necesarias para correr el proyecto.

**NOTA:** Necesitará obtener las credenciales de [Spotify](https://developer.spotify.com/documentation/web-api/) y asignar las claves en un archivo **`.env`** con los siguientes nombres:
- **REACT_APP_CLIENT_ID**
- **REACT_APP_CLIENT_SECRET**

## Ejecutar
Para hacerlo utilice el comando **`npm start`**, esto ejecutara el proyecto automáticamente en su navegador predeterminado, en el siguiente enlace: http://localhost:3000/
