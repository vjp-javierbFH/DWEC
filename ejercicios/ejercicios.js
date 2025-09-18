// // Le pides al usuario tres números
// let numero1 = parseInt(prompt("Introduce el primer número: "));
// let numero2 = parseInt(prompt("Introduce el segundo número: "));
// let numero3 = parseInt(prompt("Introduce el tercer número: "));

// // Con if-else compruebas si la suma de los números introducidos da 100 o no
// if (numero1 + numero2 + numero3 == 100){
//     alert("La suma de los números introduccidos es 100");
// } else {
//     alert("La suma de los números introduccidos no es 100");
// }

// // Función setTimeout que pase 3 milisegundos y después muestre un alert de "Hola"
// setTimeout(() => {alert("Hola");}, 3000);

// // Función setTimeout que le pida al usuario su nombre y después de 3 segundos muestre un alert con su nombre
// let nombreUsuario = prompt("Introduce tu nombre de usuario: ");
// setTimeout(() => {alert(nombreUsuario);}, 3000);

// Le pides al usuario una cadena
let cadena = prompt("Introduce una cadena de texto: ");
// Cuenta el número de caracteres
alert(`La cadena tiene ${cadena.length} caracteres \n La cadena tiene ${cadena.match(/[AEIOUaeiou]/g).length} vocale/s  \n ¿La cadena empieza o no por "A"? ${cadena.startsWith("A")}`);