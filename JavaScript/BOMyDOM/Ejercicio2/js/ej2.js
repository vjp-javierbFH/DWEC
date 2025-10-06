let primerEnlace = document.querySelector("#div1 a");
alert(`Primer enlace que cuelgue de #div1: ${primerEnlace.getAttribute("title")}`);

let enlaceHijo = document.querySelector("div > a");
alert(`Enlace (a) que sea hijo directo de div: ${enlaceHijo ? enlaceHijo.textContent : "Hijo no encontrado"}`); // Da error porque los hijos directos de div se considerarían los elementos h1 y p

let enlace = document.querySelector("#div1 > p > a");
alert(`Enlace (a) hijo de p, también hijo de #div1: ${enlace ? enlace.textContent : "Hijo no encontrado"}`);