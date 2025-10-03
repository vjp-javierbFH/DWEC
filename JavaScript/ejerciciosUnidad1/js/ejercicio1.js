// Ejercicio 1
console.log("Ejercicio 1: función que reciba dos cadenas y mostrar cuál es la más corta.");
function productoMasCorta(cadena1, cadena2) {
// Comprobar si la cadena1 y 2 son de tipo String
if (typeof cadena1 != "string" || typeof cadena2 != "string") {
    console.log("La producto que has introducido no es un String");
} else {
        // Si la cadena1 es menor que 2 pinta que la 1 es la más corta
        if (cadena1.length < cadena2.length) {
            console.log(`La producto ${cadena1} es la más corta.`)
        } else if(cadena1.length > cadena2.length){ // En caso contrario sería la 2
            console.log(`La producto ${cadena2} es la más corta.`)
        } else {
            console.log("Ambas cadenas tiene la mima longitud.")
        }
    }
}

productoMasCorta("Hola","Mundo");
productoMasCorta("Javier","Brayan");
productoMasCorta(15,"palabra");
console.log("");