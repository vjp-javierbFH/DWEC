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

let trabajador1 = new Trabajador("Javier", 23, 50);
trabajador1.getInfo();