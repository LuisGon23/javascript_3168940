//"configuración ESModules 2611"

import { comic } from './bd.js';

const params = new window.URLSearchParams(window.location.search)
const id = parseInt ( params.get('id') )

//comparar id de URl con id de la base de datos
const miPersonaje = comic.personajes.find( p => p.id === id )
if (!miPersonaje){  
    window.location.href = "index.html";
    throw new Error("El personaje no existe");
}

//console.log("El personaje encontrado es:", miPersonaje);
const containerPersonaje = document.querySelector('.contenido-personaje')
console.log(containerPersonaje)
containerPersonaje.innerHTML = `
      
<main class="contenido-personaje">
    
    <div class="back-nav">
        <a href="index.html" class="btn-back">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Volver al inicio
        </a>
    </div>

    <div class="profile-container">
        
        <div class="image-wrapper">
            <img src="${miPersonaje.imagen}">
        </div>

        <div class="profile-info">
            <h1 class="char-name">${miPersonaje.nombre} <span class="char-alias">"${miPersonaje.rol}"</span></h1>

            <div class="char-bio">
                <h3>Biografía</h3>
                <p>${miPersonaje.descripcion}</p>
            </div>
    </div>

</main>
`