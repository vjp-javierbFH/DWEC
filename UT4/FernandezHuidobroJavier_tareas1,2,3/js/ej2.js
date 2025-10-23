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
        console.log(`Saldo que gana semanalmente: ${this.getSaldoSemanal()}`);
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
    anadirTrabajador(trabajadores) {
        trabajadores.push();
    }

    getInfo() {
        console.log(`INFORMACIÓN DEL RESTAURANTE: ${this.nombre}`);

        for (let i = 0; i < this.trabajadores.length; i++) {
            console.log(`Trabajador ${i}`);
            console.log(`El nombre del trabajador es ${this.trabajadores[i].nombre}`);
            console.log(`El número de horas semanales: ${this.trabajadores[i].numHorasSemanales}`);
            console.log(`El precio/hora: ${this.trabajadores[i].salarioPorHora}`);
            
        }
    }
}

console.log("Mostrar información...");

let restaurante = new Restaurante("La tapería");
restaurante.getInfo();

restaurante.anadirTrabajador(new Trabajador("Pepe", 40, 10));
restaurante.getInfo();