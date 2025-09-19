let arrayValores = [90, 4, 89, "asd", true, "hola"]
function funcionConRest(arg1, arg2, ...restoArg) {
    console.log("El primer argumento es " + arg1);
    console.log("El segundo argumento es " + arg2);
    console.log("El resto de arumento es un array " + restoArg);
}

function funcionConSpread(...arrayValores) {
    // if (arrayValores.includes([0 - 100])) {
    //     console.log("El número mayor es " + arrayValores.reduce((max, min) => num > max ? num : max, arrayValores[0]));
    // }
    console.log(arrayValores)
    console.log(arrayValores.includes([0-100]) && arrayValores.reduce((max, min) => num > max ? num : max, arrayValores[0]));
}

funcionConRest(...arrayValores);
console.log("------- ")
funcionConSpread(...arrayValores);