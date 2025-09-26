// Ejercicio 8
console.log("Ejercicio 8: función procesarArray que realiza:");
console.log("1) Comprobar si los elementos son de tipo número.");
console.log("2) En caso afirmativo modificar el valor del array duplicando.");
console.log("3) Comprobar que todos los elementos son pares.");
function preocesarArray(array) {
    if (array.every(element => typeof element === 'number')) {
        // console.log(`Array con los valores duplicados [${array.every(element => element * 2)}]`)
    } else {

        alert("Error en el array");
    }
}
let arrayEjercicio8 = [3, 7, 10, 14, 21];
preocesarArray(arrayEjercicio8);
console.log("");