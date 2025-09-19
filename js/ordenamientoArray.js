// Crear una función utilizando sort
function ordenarEnteros(entero1, entero2) {

}
let a3 = [20, 6, 100, 51, 28, 9];
a3.sort(ordenarEnteros);
console.log(a3);


// Ordenamiento de Arrays en Objetos
// Constructor de persona
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    // Método de persona
    toString() {
        return this.nombre + " (" + edad + ")";
    }
}
let javier = new Persona("javier",20);
console.log(javier);
console.log(javier.toString());