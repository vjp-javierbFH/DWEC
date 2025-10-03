// Ejercicio 5
console.log("Ejercicio5: ordenar un array sin utilizar el método sort.");
function ordenarArray(arr) {
    // Hacer dos bucles para comparar
    for (let $i = 0; $i < arr.length - 1; $i++) {
        for (let $j = 0; $j < arr.length; $j++) {
            if (arr[$j] > arr[$i + 1]) {
                let valorMayor = arr[$j];
                arr[$j] = arr[$i + 1];
                arr[$i + 1] = valorMayor;
            }
        }
    }
    return arr;
}
let arrayNumerosOrdenar = [55, 67, 23, 87, 100, 34, 45, 76];
console.log(`Array original [${arrayNumerosOrdenar}]`);
console.log(`Array ordenado [${ordenarArray(arrayNumerosOrdenar)}]`);
console.log("");