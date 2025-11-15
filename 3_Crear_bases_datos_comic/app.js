const herocontent = document.querySelector(".hero-content");

herocontent.innerHTML = `   
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sinopsis}</p>
    <p>Género: ${comic.genero}</p>
`