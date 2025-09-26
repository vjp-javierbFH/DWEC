// Ejercicio 7
console.log("Ejercicio 7: utilizar función every para comprobar si todos los números de un array son pares.");
let arrayNumeros = [1, 8, 45, 87, 23, 101, 34];
console.log(`¿El array [${arrayNumeros}] tiene todos los números pares?: `);
console.log(arrayNumeros.every(num => num % 2 == 0));