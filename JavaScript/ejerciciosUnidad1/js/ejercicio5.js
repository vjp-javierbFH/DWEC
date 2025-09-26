// Ejercicio 5
console.log("Ejercicio5: ordenar un array sin utilizar el método sort.");
function ordenarArray(arr) {
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
console.log(ordenarArray([1, 67, 23, 98, 43, 65, 32, 87]));