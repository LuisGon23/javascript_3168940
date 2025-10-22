const jell = document.querySelectorAll('.jellyfish');
const tablero = document.querySelector('.contador');
let counter = 0;

console.log(jell, tablero);

jell.forEach(item => {
    item.addEventListener('click', () => {    
        item.style.filter = "grayscale(1)";
        item.classList.add('salto');
        counter++;
        tablero.textContent = counter;
    });
});