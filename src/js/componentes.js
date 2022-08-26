// Lección 90
import '../css/componentes.css'
// Lección 92
import webpacklogo from '../assets/img/webpack-logo.png'; //Así se crea una referencia de una imagen en js
// Lección 85
export const saludar = (nombre) => {
    console.log('Creando etqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}!!!`;


    document.body.append(h1);

    //img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);
}