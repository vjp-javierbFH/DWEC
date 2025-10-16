class Ciclomotor {
    constructor(marca, aceleracion, desaceleracion) {
        this.numRuedas = 2;
        this.velocidadMaxima = 120;
        this.velocidadActual = 0;
        this.marca = marca;
        this.aceleracion = aceleracion;
        this.desaceleracion = desaceleracion;
        this.encendida = false;
    }

    arrancar() {
        this.encendida = true;
        console.log("Se mete y gira la llave, la moto arranca");
    }

    acelerar() {
        if (this.encendida == true) {

            if (this.velocidadActual + this.aceleracion <= this.velocidadMaxima) {
                this.velocidadActual += this.aceleracion;
                console.log(`Acelerando... Velocidad actual: ${this.velocidadActual}`);
            } else {
                this.velocidadActual = this.velocidadMaxima;
                console.log("Ya has alcanzado la velocidad máxima.");
                console.log(`Velocidad actual: ${this.velocidadActual}`);
            }

        } else {
            console.log("No puedes acelerar porque la moto está apagada.");
        }
    }

    frenar() {
        if (this.encendida == true) {

            if (this.velocidadActual -= this.desaceleracion < 0) {
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

let ciclomotor = new Ciclomotor("Kawasaki", 70, 20);
console.log("LA MOTO INICIALMENTE:");
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