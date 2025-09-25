// // Ejercicio 1
// console.log("Ejercicio 1: función que reciba dos cadenas y mostrar cuál es la más corta.");
// function cadenaMasCorta(cadena1, cadena2) {
// // Comprobar si la cadena1 y 2 son de tipo String
// if (typeof cadena1 != "string" || typeof cadena2 != "string") {
//     console.log("La cadena que has introducido no es un String");
// } else {
//         // Si la cadena1 es menor que 2 pinta que la 1 es la más corta
//         if (cadena1.length < cadena2.length) {
//             console.log(`La cadena ${cadena1} es la más corta.`)
//         } else if(cadena1.length > cadena2.length){ // En caso contrario sería la 2
//             console.log(`La cadena ${cadena2} es la más corta.`)
//         } else {
//             console.log("Ambas cadenas tiene la mima longitud.")
//         }
//     }
// }

// cadenaMasCorta("Hola","Mundo");
// cadenaMasCorta("Javier","Brayan");
// cadenaMasCorta(15,"palabra");


// ----------------------------------------------------------------------------


// // Ejercicio 2
// console.log("Ejercicio 2: función que reciba dos cadenas y comprobar si la cadena es igual a la otra del revés.");
// function cadenaInversa(cadena1, cadena2) {
//     if (typeof cadena1 != "string" || typeof cadena2 != "string") {
//         console.log("La cadena que has introducido no es un String");
//     } else {
//         // Creo una variable en la que utilizo split para separar la cadena
//         let cadenaInversa = cadena2.split('').reverse().join('');
//         if(cadena1 == cadenaInversa){
//             console.log(`La cadena ${cadena1} es igual que la cadena ${cadena2}`);
//         } else {
//             console.log(`La cadena ${cadena1} NO es igual que la cadena ${cadena2}`)
//         }
//     }
// }
// cadenaInversa("amor","roma");
// cadenaInversa("sol","luna");


// ----------------------------------------------------------------------------


// // Ejercicio 3
// console.log("Ejercicio 3: Función en la que pase un array y que devuelva:");
// console.log("Elementos de tipo number.");
// console.log("Elementos de tipo cadena.");
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


// Ejercicio 4
console.log("Ejercicio 4: función que reciba 3 parámetros");

function funcionConversiones(string,bool, number){

}