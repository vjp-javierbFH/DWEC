let arrayValores = [90, 4, 89, 100,23]
function funcionConRest(arg1, arg2, ...restoArg) {
    console.log("El primer argumento es " + arg1);
    console.log("El segundo argumento es " + arg2);
    console.log("El resto de arumento es un array " + restoArg);

}

function devolverMayor(...valor) {
    valor.some(num => isNaN(num)) ?
        // caso true
        undefined :
        // caso false
        valor.reduce((max, num) => num > max ? num : max, valor[0]);
}

funcionConRest(...arrayValores);
console.log("------- ")
console.log(
    devolverMayor(...arrayValores)
);