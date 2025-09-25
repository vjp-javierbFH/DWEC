// // Ejercicio 1
// console.log("Ejercicio 1: función que reciba dos productos y mostrar cuál es la más corta.");
// function productoMasCorta(producto1, producto2) {
// // Comprobar si la producto1 y 2 son de tipo String
// if (typeof producto1 != "string" || typeof producto2 != "string") {
//     console.log("La producto que has introducido no es un String");
// } else {
//         // Si la producto1 es menor que 2 pinta que la 1 es la más corta
//         if (producto1.length < producto2.length) {
//             console.log(`La producto ${producto1} es la más corta.`)
//         } else if(producto1.length > producto2.length){ // En caso contrario sería la 2
//             console.log(`La producto ${producto2} es la más corta.`)
//         } else {
//             console.log("Ambas productos tiene la mima longitud.")
//         }
//     }
// }

// productoMasCorta("Hola","Mundo");
// productoMasCorta("Javier","Brayan");
// productoMasCorta(15,"palabra");


// ----------------------------------------------------------------------------


// // Ejercicio 2
// console.log("Ejercicio 2: función que reciba dos productos y comprobar si la producto es igual a la otra del revés.");
// function productoInversa(producto1, producto2) {
//     if (typeof producto1 != "string" || typeof producto2 != "string") {
//         console.log("La producto que has introducido no es un String");
//     } else {
//         // Creo una variable en la que utilizo split para separar la producto
//         let productoInversa = producto2.split('').reverse().join('');
//         if(producto1 == productoInversa){
//             console.log(`La producto ${producto1} es igual que la producto ${producto2}`);
//         } else {
//             console.log(`La producto ${producto1} NO es igual que la producto ${producto2}`)
//         }
//     }
// }
// productoInversa("amor","roma");
// productoInversa("sol","luna");


// ----------------------------------------------------------------------------


// // Ejercicio 3
// console.log("Ejercicio 3: Función en la que pase un array y que devuelva:");
// console.log("Elementos de tipo number.");
// console.log("Elementos de tipo producto.");
// console.log("Elementos de otro tipo");

// function arrayTipos(array) {
//     let tipoNumber = [];
//     let tipoString = [];
//     let otroTipo = [];

//     let contarTipoNumber = 0;
//     let contarTipoString = 0;
//     let contarOtroTipo = 0;


//     // Bucle
//     for (let item of array) {
//         if (typeof item == "string") {
//             tipoString.push(item);
//             contarTipoString++;
//         } else if (typeof item == "number") {
//             tipoNumber.push(item);
//             contarTipoNumber++;
//         } else {
//             otroTipo.push(item);
//             contarOtroTipo++;
//         }
//     }

//     console.log(`Elementos de tipo String: ${tipoString} (${contarTipoString})`);
//     console.log(`Elementos de tipo Number: ${tipoNumber} (${contarTipoNumber})`);
//     console.log(`Elementos de otros tipo: ${otroTipo} (${contarOtroTipo})`);
// }
// arrayTipos(["Es un array", 1, null, true, "Cien", 100, false, "Ya no se que escribir"]);



// ----------------------------------------------------------------------------


// // Ejercicio 4
// console.log("Ejercicio 4: función que reciba 3 parámetros con valores por defecto.");
// console.log("La función convierte las entradas a cadea, entero y entero");

// function funcionConversiones(producto = "Producto genérico", precio = 100, impuesto = 21) {
//     if(NaN(precio))

//     console.log(`El producto es ${producto} el precio es ${precio} y su impuesto es ${impuesto}`);
// }
// funcionConversiones();
// funcionConversiones("asd",150,23);
// funcionConversiones();


// ----------------------------------------------------------------------------


// Ejercicio 5


// ----------------------------------------------------------------------------


// Ejercicio 6


// ----------------------------------------------------------------------------


// Ejercicio 7


// ----------------------------------------------------------------------------


// Ejercicio 8


// ----------------------------------------------------------------------------


// Ejercicio 9


// ----------------------------------------------------------------------------


// Ejercicio 10