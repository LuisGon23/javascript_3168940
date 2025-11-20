const herocontent = document.querySelector(".hero-content");

herocontent.innerHTML = `   
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sinopsis}</p>
    <p>Género: ${comic.genero}</p>
`

// Personajes
const gridContainer = document.querySelector(".grid-container");

comic.personajes.forEach(char => {
    const div = document.createElement("div");
    div.classList.add("card-personaje");
    div.innerHTML = `
        <h3>${char.nombre}</h3>
        <p><strong>Rol:</strong> ${char.rol}</p>
        <p>${char.descripcion}</p>
        <p><img src="${char.imagen}" alt="${char.nombre}"></p>
    `
    gridContainer.appendChild(div);
});