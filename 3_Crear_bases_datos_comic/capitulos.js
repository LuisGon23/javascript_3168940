import { comic } from './bd.js';

const params = new window.URLSearchParams(window.location.search)
const id = parseInt ( params.get('id') )
const miCapitulo = comic.capitulos.find( c => c.id === id )

const containerCapitulo = document.querySelector('.contenido-capitulo')
console.log(containerCapitulo)
containerCapitulo.innerHTML = `
    <section class="episode-details-container">
        <div class="details-header">
            <h1 class="ep-title">${miCapitulo.nombre}</h1>
            
                     <section class="player-container">
        <div class="video-wrapper">
           <video width="auto" height="500px" controls>
  <source src="${miCapitulo.video}" type="video/mp4">
Your browser does not support the video tag
            <div class="play-button-centered">
            </div>
        </div>
    </section>
 
            <div class="ep-meta">
                <span class="episode-tag">Episodio ${miCapitulo.id}</span>
                <span class="date">10 Oct 2026</span>
                <span class="duration">24 min</span>
            </div>
        </div>

        <div class="details-grid">
            <div class="synopsis">
                <h3>Sinopsis</h3>
                <p>${miCapitulo.descripcion}</p>
            </div>
     
        </div>
    </section>

`