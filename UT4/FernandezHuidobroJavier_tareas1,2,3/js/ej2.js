// Clase Trabajador
class Trabajador {
    // Constructor parametrizado
    constructor(nombre, numHorasSemanales, salarioPorHora) {
        this.nombre = nombre;
        this.numHorasSemanales = numHorasSemanales;
        this.salarioPorHora = salarioPorHora;
    }

    // Métodos
    // Devuelve lo un entero
    getSaldoSemanal() {
        return this.numHorasSemanales * this.salarioPorHora;
    }
    getInfo() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Horas trabajadas semanalmente: ${this.numHorasSemanales}`);
        console.log(`Salario que gana por hora: ${this.salarioPorHora}`);
        console.log("*******************");

    }
}

class Restaurante {
    //Constructor parametrizado
    constructor(nombre, trabajadores = []) {
        this.nombre = nombre;
        this.trabajadores = trabajadores;
    }

    // Métodos
    // Añadir un objeto trabajador al array de trabajadores
    añadirTrabajador(trabajador) {
        this.trabajadores.push(trabajador);
    }

    // Método que muestra la info del restauante con sus trabajadores
    getInfo() {
        console.log(`INFORMACIÓN DEL RESTAURANTE: ${this.nombre}`);

        // Recorrer el array para mostrar info de trabajadores
        for (let i = 0; i < this.trabajadores.length; i++) {
            console.log(`*** Trabajador ${i} ***`);
            this.trabajadores[i].getInfo();
            this.trabajadores
            console.log("");

        }

    }
    // Método que devuelve un entero
    getPagosSemanales() {
        return this.trabajadores.reduce((total, trabajador) => total + trabajador.getSaldoSemanal(), 0);
    }
}

console.log("Mostrar información...");
// Creo un objeto de la clase Restaurante
let restaurante = new Restaurante("La tapería");
restaurante.getInfo();

// Llamo al método a añadirTrabajador para inicializar por constructor parametrizado tres trabajadores y almacenarlos en un array
restaurante.añadirTrabajador(new Trabajador("Pepe", 40, 10));
restaurante.añadirTrabajador(new Trabajador("Laura", 35, 15));
restaurante.añadirTrabajador(new Trabajador("Marcos", 20, 10))
restaurante.getInfo();
console.log("Mantener a los trabajadores del restaurante cuesta: " + restaurante.getPagosSemanales());
