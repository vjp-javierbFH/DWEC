// Pintar el atributo title del primer enlaces
let primerEnlace = document.querySelector("#div1 a");
alert(`Primer enlace que cuelgue de #div1: ${primerEnlace.getAttribute("title")}`);

let enlaceHijo = document.querySelector("div > a");
alert(`Enlace (a) que sea hijo directo de div: ${enlaceHijo ? enlaceHijo.textContent : "Hijo no encontrado"}`);

let enlace = document.querySelector("#div1 > p > a");
alert(`Enlace (a) hijo de p, también hijo de #div1: ${enlace ? enlace.textContent : "Hijo no encontrado"}`)