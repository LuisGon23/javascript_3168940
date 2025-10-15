const Goku = document.getElementById("Goku");
const btnBlancoNegro = document.querySelector(".btnBlancoNegro");
const btnDesenfoque = document.querySelector(".btnDesenfoque");
const btnZoomRotar = document.querySelector(".btnZoomRotar");


btnBlancoNegro.addEventListener("click", () => {
    Goku.style.filter = "grayscale(100%)";
});

btnDesenfoque.addEventListener("click", () => {
    Goku.style.filter = "blur(5px)";
});

btnZoomRotar.addEventListener("click", () => {
    Goku.style.transform = "scale(1.1) rotate(10deg)";
});