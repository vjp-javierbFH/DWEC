// Ejercicio 1
console.log("Ejercicio 1: función que reciba dos productos y mostrar cuál es la más corta.");
function productoMasCorta(producto1, producto2) {
// Comprobar si la producto1 y 2 son de tipo String
if (typeof producto1 != "string" || typeof producto2 != "string") {
    console.log("La producto que has introducido no es un String");
} else {
        // Si la producto1 es menor que 2 pinta que la 1 es la más corta
        if (producto1.length < producto2.length) {
            console.log(`La producto ${producto1} es la más corta.`)
        } else if(producto1.length > producto2.length){ // En caso contrario sería la 2
            console.log(`La producto ${producto2} es la más corta.`)
        } else {
            console.log("Ambas productos tiene la mima longitud.")
        }
    }
}

productoMasCorta("Hola","Mundo");
productoMasCorta("Javier","Brayan");
productoMasCorta(15,"palabra");
console.log("");