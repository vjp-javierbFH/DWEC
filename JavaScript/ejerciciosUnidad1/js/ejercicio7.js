// Ejercicio 7
console.log("Ejercicio 7: utilizar función every para comprobar si todos los números de un array son pares.");
let arrayNumeros = [1, 8, 45, 87, 23, 101, 34];
console.log(`¿El array [${arrayNumeros}] tiene todos los números pares?: `);
console.log(arrayNumeros.every(num => num % 2 == 0));
let arrayNumeros2 = [24,36,48,50,62,10];
console.log(`¿El array [${arrayNumeros2}] tiene todos los números pares?: `);
console.log(arrayNumeros2.every(num => num % 2 == 0));
console.log("");