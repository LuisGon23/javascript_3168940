const jell = document.querySelectorAll('.escenario-dragonball .jellyfish');
const tablero = document.querySelector('.escenario-dragonball .contador h2');
let counter = 0;

console.log(jell, tablero);

jell.forEach(item => {
    item.addEventListener('click', () => {
        if (item.style.filter !== "grayscale(1)") {
            item.style.filter = "grayscale(1)";
            item.classList.add('salto');
            counter++;
            tablero.textContent = counter;
        }
    });
});

const ataques = document.querySelectorAll('.namek .mover');
const freezer = document.querySelector('.namek .freezer');
const vidaFreezerDisplay = document.querySelector('.namek .contador h2');
const tituloContadorNamek = document.querySelector('.namek .contador h1');

let vidaFreezer = 100;
vidaFreezerDisplay.textContent = vidaFreezer;

ataques.forEach(ataque => {
    ataque.addEventListener('click', () => {
        if (vidaFreezer <= 0) {
            return;
        }

        ataque.style.display = 'none';

        vidaFreezer -= 20;

        if (vidaFreezer < 0) {
            vidaFreezer = 0;
        }

        vidaFreezerDisplay.textContent = vidaFreezer;

        freezer.classList.add('freezer-hit');
        setTimeout(() => {
            freezer.classList.remove('freezer-hit');
        }, 300);

        if (vidaFreezer <= 0) {
            tituloContadorNamek.textContent = "¡Freezer derrotado!";
            freezer.classList.add('freezer-derrotado');
        }
    });
});

const gokuBlue = document.querySelector('.gokublue');
const gokuBlueImg = document.querySelector('.gokublue img');
const aura = document.querySelector('.aura');
const contadorGoku = document.querySelector('.planetabils .contador h2');

let clicsGoku = 0;
const clicsParaTransformar = 5;

gokuBlue.addEventListener('click', () => {
    if (clicsGoku >= clicsParaTransformar) {
        return;
    }

    clicsGoku++;

    contadorGoku.textContent = clicsGoku;

    aura.classList.add('activada');
    setTimeout(() => aura.classList.remove('activada'), 500);

    if (clicsGoku === clicsParaTransformar) {
        contadorGoku.textContent = "¡UI!";
        gokuBlueImg.src = 'pngwing.com (2).png';
        aura.classList.add('aura-ui', 'activada');
    }
});

//Galeria//

const escenas = document.querySelectorAll('.escenas');
const siguienteBtn = document.querySelector('#siguiente-btn');
const anteriorBtn = document.querySelector('#anterior-btn');
const galeria = document.querySelector('.galeria');
const miniaturas = document.querySelectorAll('.galeria img');
let indice = 0;

console.log(escenas);

function mostrarEscena(i) {
    escenas.forEach(escena => {
        escena.classList.remove("activa");
    });
    escenas[i].classList.add("activa");
    indice = i;
}

miniaturas.forEach(function (miniatura, i) {
    miniatura.addEventListener('click', function () {
        mostrarEscena(i);
    });
});

anteriorBtn.addEventListener("click", function () {
    let nuevoIndice = indice - 1;
    if (nuevoIndice < 0) {
        nuevoIndice = escenas.length - 1;
    }
    mostrarEscena(nuevoIndice);
});

siguienteBtn.addEventListener('click', function () {
    let nuevoIndice = indice + 1;
    if (nuevoIndice >= escenas.length) {
        nuevoIndice = 0;
    }
    mostrarEscena(nuevoIndice);
});

inicioBtn.addEventListener('click', function() {
    mostrarEscena(0);
});

mostrarEscena(0);