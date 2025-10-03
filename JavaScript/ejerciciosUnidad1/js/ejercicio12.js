// Ejercicio 12
console.log("Ejercicio 12: crear un mapa que guarde Estudiantes con nombre y un array (notas) de 6 posiciones y que realicen las siguientes funciones:");
console.log("1. Mostrar los nombres y las notas media de cada estudiante.");
console.log("2. Mostrar el nombre del estudiante con la nota media más alta.");
console.log("3. Mostrar los nombres de los estudiantes ordenados por nota media.");

// Crear mapa de estudiantes
let estudiantes = new Map(
    ["Javier", [5, 8, 6, 9, 4, 10]],
    ["Raúl", [10, 7, 5, 6, 4, 7]],
    ["David", [7, 8, 6, 9, 5, 9]],
    ["Eva", [8, 9, 7, 6, 7, 5]]
);

// Función que calcule la media