const infoComic = document.querySelector(".info-comic");
 const cardPersonajes = document.querySelector(".card-personajes");       

console.log(infoComic);

/* infoComic.innerHTML = ` 
        <small>${comic.year}</small>
        <h1>${comic.nombreComic}</h1>
        <p>${comic.sinopsis}</p>
        <p>${comic.genero}</p>
        `
 */

 console.log(comic.personajes)
        comic.personajes.forEach(char => {
                const div = document.createElement("div");
                div.classList.add("card-personaje");
                div.innerHTML = `
                        <img src="${char.imagen}" alt="">
                        <h3>${char.nombre}</h3>
                        <p>${char.descripcion}</p>
                `
                cardPersonajes.appendChild(div);
               
        });
