// Ejercicio 8
console.log("Ejercicio 8: función procesarArray que realiza:");
console.log("1) Comprobar si los elementos son de tipo número.");
console.log("2) En caso afirmativo modificar el valor del array duplicando.");
console.log("3) Comprobar que todos los elementos son pares.");
function preocesarArray(array) {
    // Crear una variable que almacene todos los elementos y devuelve booleano
    let allNumbers = array.every(item => typeof item === 'number');
    // Si todos los elementos son números
    if (allNumbers) {
        let doubledArray = array.map(item => item * 2);
        console.log("Array con valores duplicados: " + doubledArray);
        let allEven = doubledArray.every(item => item % 2 === 0);
        console.log("¿Todos los elementos son pares? " + allEven);
    } else {
        console.log("El array contiene elementos que no son números.");
    }
}
let arrayEjercicio8 = [3, 7, 10, 14, 21];
preocesarArray(arrayEjercicio8);
console.log("");