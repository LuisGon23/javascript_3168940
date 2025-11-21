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
        <p><img src="${char.imagen}" alt="${char.nombre}"></p>
        <p><strong>Rol:</strong> ${char.rol}</p>
        <p>${char.descripcion}</p>
    `
    gridContainer.appendChild(div);
});


// Capitulos 

const gridContainer2 = document.querySelector (".grid-container2")

comic.capitulos.forEach(char => {
    const div = document.createElement("div")
    div.classList.add("card-capitulos")
    div.innerHTML = `
        <h3>${char.nombre}</h3>
        <p><strong>Personajes:</strong> ${char.personajes.join(", ")}</p>
        <p>${char.descripcion}</p>
        <p><img src="${char.portada}" alt="${char.nombre}"></p>
    `

        gridContainer2.appendChild(div);

})