
// "Configuración Esmodules 2611"

import { comic } from "./bd";   

const params = new URLSearchParams(window.location.search);
const id=  parseInt(params.get("id"));

console.log("ID del personaje:", id);

