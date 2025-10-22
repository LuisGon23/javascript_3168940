document.addEventListener('DOMContentLoaded', () => {
    const esferas = document.querySelectorAll('.esfera');
    const shenron = document.querySelector('.shenron-animado');
    const escenario = document.querySelector('.escenario-dragonball');
    const reiniciarBtn = document.querySelector('#reiniciar-btn');

    const puntajeDisplay = document.createElement('div');
    puntajeDisplay.style.position = 'absolute';
    puntajeDisplay.style.top = '10px';
    puntajeDisplay.style.right = '10px';
    puntajeDisplay.style.color = 'white';
    puntajeDisplay.style.fontSize = '24px';
    puntajeDisplay.style.fontFamily = 'Arial, sans-serif';
    puntajeDisplay.style.zIndex = '10';
    escenario.appendChild(puntajeDisplay);

    let puntaje = 0;
    let esferasReunidas = 0;
    const totalEsferas = 7;
    const posicionesIniciales = new Map();

    esferas.forEach(esfera => {
        posicionesIniciales.set(esfera, { top: esfera.style.top, left: esfera.style.left });
    });


    function actualizarPuntaje() {
        puntajeDisplay.textContent = `Esferas: ${puntaje}`;
    }

    function recolectarEsfera(esfera) {
        if (!esfera.classList.contains('recolectada')) {
            esfera.classList.add('recolectada');
            puntaje++;
            esferasReunidas++;
            actualizarPuntaje();

            esfera.style.top = '50%';
            esfera.style.left = '50%';
            esfera.style.transform = `translate(-50%, -50%) rotate(${esferasReunidas * 51}deg) translate(100px)`;

            if (esferasReunidas === totalEsferas) {
                invocarShenlong();
            }
        }
    }

    
     
    function invocarShenlong() {
        esferas.forEach(esfera => {
            esfera.style.opacity = '0';
        });


        setTimeout(() => {
            shenron.style.opacity = '1';
            shenron.style.zIndex = '5';
        }, 500); 

        setTimeout(() => {
            const deseo = prompt("Soy Shenlong, he sido invocado para cumplir tu deseo. ¿Qué es lo que pides?");
            
            if (deseo) {
                alert(`Tu deseo "${deseo}" ha sido concedido. ¡Hasta la próxima!`);
            } else {
                alert("Has decidido no pedir ningún deseo. ¡Nos vemos!");
            }
            
            desaparecerShenlong();
        }, 2000); 
    }

    function desaparecerShenlong() {
        shenron.style.opacity = '0';
        shenron.style.zIndex = '0';
        reiniciarBtn.style.display = 'block';
    }

    
    function reiniciarJuego() {
        puntaje = 0;
        esferasReunidas = 0;
        actualizarPuntaje();
        reiniciarBtn.style.display = 'none';

        esferas.forEach(esfera => {
            esfera.classList.remove('recolectada');
            esfera.style.opacity = '1'; 
            const posicionInicial = posicionesIniciales.get(esfera);
            esfera.style.top = posicionInicial.top;
            esfera.style.left = posicionInicial.left;
            esfera.style.transform = '';
        });
    }

   
    esferas.forEach(esfera => {
        esfera.addEventListener('click', () => recolectarEsfera(esfera));
    });

    reiniciarBtn.addEventListener('click', reiniciarJuego);

  
    actualizarPuntaje();
});