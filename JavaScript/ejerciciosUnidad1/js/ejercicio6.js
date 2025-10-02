// Ejercicio 6
console.log("Ejercicio 6: Crear un array y realizar los siguientes pasos:");
console.log("1) Añadir 2 elementos al inicio.");
console.log("2) Añadir 3 elementos al final.");
console.log("3) Eliminar las posiciones 3,4 y 5.");
console.log("4) Insertar 2 elementos antes del último elemento.");

let array = [0,10,15,30,60,120];
console.log("Array inicial: " + array);

// 1) Añadir 2 elementos al inicio.
array.unshift(20, 10);
console.log("Después de añadir 2 elementos al inicio: " + array);
// 2) Añadir 3 elementos al final.
array.push(150, 180, 200);
console.log("Después de añadir 3 elementos al final: " + array);
// 3) Eliminar las posiciones 3,4 y 5.
array.splice(3, 3);
console.log("Después de eliminar las posiciones 3,4 y 5: " + array);
// 4) Insertar 2 elementos antes del último elemento.
array.splice(array.length - 1, 0, 75, 90);
console.log("Después de insertar 2 elementos antes del último elemento: " + array);
console.log("");