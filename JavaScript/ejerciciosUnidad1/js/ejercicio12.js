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
function mediaAritmetica(...numeros) {
    let suma = 0;

    for (let n of numeros) {
        suma += n;
    }

    return suma / numeros.length;
}
// Función que muestre el nombre de los alumnos y su media
function mostrarNombreYMedia(estudiantes) {
    // Recorrer cada alumno
    estudiantes.forEach((notas, nombre) => {
        let media = mediaAritmetica(...notas);
        console.log(`${nombre}, media: ${media}`)
    });
}

// Mostrar estudiante con mejor media
// function alumnoMejorMedia(estudiantes){
//     mejorMedia = 
// }

// Mostrar nombre de alumnos ordenados por media
function ordenarAlumnoPorMedia(estudiantes) {
    let ordenar = [];

    estudiantes.forEach((notas, nombre) => {
        // Guarda nombre y nota media(utilizando la función mediaAritmetica)
        ordenar.push({ nombre, media: mediaAritmetica(...notas) });
    });

    // La función sort para ordenar las medias de mayor a menor
    ordenar.sort((a, b) => b.media - a.media);

    console.log("\nEstudiantes ordenados por media:");
    ordenar.forEach(e => console.log(`${e.nombre} → ${e.media}`));
}