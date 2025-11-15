const infoComic = document.querySelector(".info-comic");

console.log(infoComic);

infoComic.innerHTML = ` 
        <small>${comic.year}</small>
        <h1>${comic.nombreComic}</h1>
        <p>${comic.sinopsis}</p>
        <p>${comic.genero}</p>
        `