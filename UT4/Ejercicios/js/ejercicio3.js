// Creo la clase Ciclomotor
class Ciclomotor {
    // Constructor
    constructor(marca, aceleracion, desaceleracion) {
        this.numRuedas = 2;
        this.velocidadMaxima = 120;
        this.velocidadActual = 0;
        this.marca = marca;
        this.aceleracion = aceleracion;
        this.desaceleracion = desaceleracion;
        this.encendida = false;
    }

    // Método arrancar
    arrancar() {
        // Inicializo la variable encendida a true
        this.encendida = true;
        console.log("Se mete y gira la llave, la moto arranca");
    }

    // Método acelerar
    acelerar() {
        // Si laa moto está encendida hace lo siguiente:
        if (this.encendida == true) {
            // Si la suma de la velocidad actual y aceleración es menor que la velocidad máxima:
            if (this.velocidadActual + this.aceleracion <= this.velocidadMaxima) {
                // Suma la velocidad actual y la aceleración, y cambia el resultado de velocidadActual
                this.velocidadActual += this.aceleracion;
                console.log(`Acelerando... Velocidad actual: ${this.velocidadActual}`);
            } else { // Si no 
                this.velocidadActual = this.velocidadMaxima;
                console.log("Ya has alcanzado la velocidad máxima.");
                console.log(`Velocidad actual: ${this.velocidadActual}`);
            }

        } else { // Si no pinta un mensaje de que esta apagada
            console.log("No puedes acelerar porque la moto está apagada.");
        }
    }

    //Método frenar
    frenar() {
        // Si la moto esta encendida hace lo siguiente:
        if (this.encendida == true) {
            // Si la resta de la velocidad actual y desaceleración es menor que 0
            if (this.velocidadActual -= this.desaceleracion < 0) {
                // Inicializa la variable velocidadActual a 0
                this.velocidadActual = 0;
                console.log("Te has detenido.");
                console.log(`Velocidad actual: ${this.velocidadActual}`);
            } else {
                this.velocidadActual -= this.desaceleracion;
                console.log(`Frenando... Velocidad actual: ${velocidadActual}`);
            }
        } else {
            console.log("No puedes frenar porque la moto está apagada.");
        }
    }

    // Método mostrarInfo
    mostrarInfo() {
        console.log(`------ ${this.marca} ------`);
        console.log(`Número de ruedas: ${this.numRuedas}`);
        console.log(`Velocidad máxima: ${this.velocidadMaxima}`);
        console.log(`Velocidad actual: ${this.velocidadActual}`);
        console.log(`Aceleración: ${this.aceleracion}`);
        console.log(`Desaceleración: ${this.desaceleracion}`);
        console.log(`Encendida: ${this.encendida ? "Si" : "No"}`);
    }
}

// Declaro un objeto de la clase Ciclomotor y lo inicializo con el constructor por parámetro
let ciclomotor = new Ciclomotor("Kawasaki", 70, 20);
console.log("LA MOTO INICIALMENTE:");
// Llamo al método 
ciclomotor.mostrarInfo();
console.log("LA MOTO TRAS ACELERAR:");
ciclomotor.acelerar(); //No se puede acelerar una moto apagada
ciclomotor.mostrarInfo();
console.log("\n")
console.log("LA MOTO TRAS ARRANCARLA Y ACELERAR:");
ciclomotor.arrancar();
ciclomotor.acelerar();
ciclomotor.mostrarInfo();
console.log("\n")
console.log("VOLVEMOS A ACELERAR:");
ciclomotor.acelerar(); //No podrá pasar de 120km/h
ciclomotor.mostrarInfo();
console.log("\n")
console.log("FRENAMOS LA MOTO:");
ciclomotor.frenar();
ciclomotor.mostrarInfo();