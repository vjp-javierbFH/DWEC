// Ejercicio 3
console.log("Ejercicio 3: Función en la que pase un array y que devuelva:");
console.log("Elementos de tipo number.");
console.log("Elementos de tipo producto.");
console.log("Elementos de otro tipo");

function arrayTipos(array) {
    let tipoNumber = [];
    let tipoString = [];
    let otroTipo = [];

    let contarTipoNumber = 0;
    let contarTipoString = 0;
    let contarOtroTipo = 0;


    // Bucle
    for (let item of array) {
        if (typeof item == "string") {
            tipoString.push(item);
            contarTipoString++;
        } else if (typeof item == "number") {
            tipoNumber.push(item);
            contarTipoNumber++;
        } else {
            otroTipo.push(item);
            contarOtroTipo++;
        }
    }

    console.log(`Elementos de tipo String: ${tipoString} (${contarTipoString})`);
    console.log(`Elementos de tipo Number: ${tipoNumber} (${contarTipoNumber})`);
    console.log(`Elementos de otros tipo: ${otroTipo} (${contarOtroTipo})`);
}
arrayTipos(["Es un array", 1, null, true, "Cien", 100, false, "Ya no se que escribir"]);