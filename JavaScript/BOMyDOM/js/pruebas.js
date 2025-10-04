// Devuelve el código HTML de la página
// let elemento = document.documentElement;
// console.log(elemento);

// Devuelve el body del HTML 
// let body = document.body;
// console.log(body);

// console.log(document.body);
// console.log(document.getElementById("titulo1"));
// document.getElementsByClassName(".parrafos");
// document.getElementsByTagName("https://www.google.com");

// Prueba 6.1
// let body = document.body;
// console.log(body.childNodes);
// console.log(body.children);
// console.log(body.parentNode);
// console.log(body.nextSibling);
// console.log(body.previousSibling);
// console.log(body.nextElementSibling);
// console.log(body.previousElementSibling);

// let miElemento = document.createElement("p");
// let miTexto = document.createTextNode("texto de prueba")
// // miElemento.innerText = "probando";

// miElemento.appendChild(miTexto);

// document.body.appendChild(miElemento);

// Prueba 7
let elementoP = document.getElementsByTagName("p");
for (let item of elementoP) {
    console.log(item.id);
}

for(let item of elementoP){
}