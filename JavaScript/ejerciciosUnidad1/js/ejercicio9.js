// Ejercicio 9
console.log("Ejerciico 9: crear un programa que existan 3 objetos de tipo paltoCocina [Atributos: nombrePlato, duracionMinutos y dificultad]");

// Definición de la clase platoCocina
class platoCocina {
    constructor(nombre, duracionMinutos, dificultad) {
        this.nombre = nombre;
        this.duracionMinutos = duracionMinutos;
        this.dificultad = dificultad;
    }

    // Método toString para representar el objeto como cadena
    toString() {
        return `El plato ${this.nombre} tiene una duración de ${this.duracionMinutos} minutos con dificultad ${this.dificultad}`;
    }
}

let mapaPlatos = new Map();
mapaPlatos.set(new platoCocina("Cocido", 60, 6), ["Sal", "Patatas", "Chorizo", "Zanahorias"]);
mapaPlatos.set(new platoCocina("Tortilla", 45, 7), ["Sal", "Patatas", "Cebolla", "Aceite"]);
mapaPlatos.set(new platoCocina("Berenjenas", 150, 7), ["Carne", "Aceite", "Sal", "Queso", "Pimientos", "Tomates", "Bechamel"]);

mapaPlatos.forEach((ingredientes, plato) => {
    console.log(plato.toString());
    console.log("Ingredientes: " + ingredientes.join(", "));
});
