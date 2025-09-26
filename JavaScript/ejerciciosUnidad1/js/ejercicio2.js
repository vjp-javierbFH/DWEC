// Ejercicio 2
console.log("Ejercicio 2: función que reciba dos productos y comprobar si la producto es igual a la otra del revés.");
function productoInversa(producto1, producto2) {
    if (typeof producto1 != "string" || typeof producto2 != "string") {
        console.log("La producto que has introducido no es un String");
    } else {
        // Creo una variable en la que utilizo split para separar la producto
        let productoInversa = producto2.split('').reverse().join('');
        if(producto1 == productoInversa){
            console.log(`La producto ${producto1} es igual que la producto ${producto2}`);
        } else {
            console.log(`La producto ${producto1} NO es igual que la producto ${producto2}`)
        }
    }
}
productoInversa("amor","roma");
productoInversa("sol","luna");