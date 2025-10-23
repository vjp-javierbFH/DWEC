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
        console.log("*** Trabajador ***");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Horas trabajadas semanalmente: ${this.numHorasSemanales}`);
        console.log(`Salario que gana por hora: ${this.salarioPorHora}`);
        console.log("******************");

    }
}

class Restaurante {
    //Constructor parametrizado
    constructor(nombre, trabajadores = []) {
        this.nombre = nombre;
        this.trabajadores = trabajadores;
    }

    // Métodos
    anadirTrabajador(trabajador) {
        this.trabajadores.push(trabajador);
    }

    getInfo() {
        console.log(`INFORMACIÓN DEL RESTAURANTE: ${this.nombre}`);

        for (let i = 0; i < this.trabajadores.length; i++) {
            this.trabajadores[i].getInfo();
            this.trabajadores
        }

    }
    getPagosSemanales() {
        this.trabajadores.reduce((total, trabajador) => total + trabajador.getSaldoSemanal(), 0);
    }
}

console.log("Mostrar información...");

let restaurante = new Restaurante("La tapería");
restaurante.getInfo();

restaurante.anadirTrabajador(new Trabajador("Pepe", 40, 10));
restaurante.getInfo();
console.log("Mantener a los trabajadores del restaurante cuesta: " + restaurante.getPagosSemanales());
