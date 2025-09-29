// Ejercio 13
console.log("Ejercicio 13: crear una función que dada un array, elimine sus repetidos y que pinte por pantalla qué elementos estaban repetidos.");
function eliminarRepetidos(array) {
    // Array para almacenar los elementos únicos
    const elementosUnicos = [];
    // Set para almacenar los elementos repetidos (Set evita duplicados automáticamente)
    const elementosRepetidos = new Set();

    // Recorremos cada elemento del array
    array.forEach((elemento) => {
        // Si el elemento ya está en el array de únicos, lo añadimos al Set de repetidos
        if (elementosUnicos.includes(elemento)) {
            elementosRepetidos.add(elemento);
        } else {
            // Si no está en el array de únicos, lo añadimos
            elementosUnicos.push(elemento);
        }
    });

    // Mostramos los elementos repetidos
    console.log("Elementos repetidos:", Array.from(elementosRepetidos));
    // Mostramos el array sin elementos repetidos
    console.log("Array sin repetidos:", elementosUnicos);

    // Retornamos el array sin repetidos
    return elementosUnicos;
}

// Ejemplo de uso
const arrayEjemplo = [1,10,23,10,34,20,20];
console.log("Array original:", arrayEjemplo);
eliminarRepetidos(arrayEjemplo);
console.log("");