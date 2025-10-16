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
        // Si la moto está encendida hace lo siguiente:
        if (this.encendida === true) {
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
        } else { // Si no pinta un mensaje de que está apagada
            console.log("No puedes acelerar porque la moto está apagada.");
        }
    }

    // Método frenar
    frenar() {
        // Si la moto está encendida hace lo siguiente:
        if (this.encendida === true) {
            // Calcula la nueva velocidad tras desacelerar
            let nuevaVelocidad = this.velocidadActual - this.desaceleracion;
            if (nuevaVelocidad < 0) {
                // Inicializa la variable velocidadActual a 0
                this.velocidadActual = 0;
                console.log("Te has detenido.");
                console.log(`Velocidad actual: ${this.velocidadActual}`);
            } else {
                this.velocidadActual = nuevaVelocidad;
                console.log(`Frenando... Velocidad actual: ${this.velocidadActual}`);
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
ciclomotor.mostrarInfo();
console.log("LA MOTO TRAS ACELERAR:");
ciclomotor.acelerar(); // No se puede acelerar una moto apagada
ciclomotor.mostrarInfo();
console.log("\n");
console.log("LA MOTO TRAS ARRANCARLA Y ACELERAR:");
ciclomotor.arrancar();
ciclomotor.acelerar();
ciclomotor.mostrarInfo();
console.log("\n");
console.log("VOLVEMOS A ACELERAR:");
ciclomotor.acelerar(); // No podrá pasar de 120km/h
ciclomotor.mostrarInfo();
console.log("\n");
console.log("FRENAMOS LA MOTO:");
ciclomotor.frenar();
ciclomotor.mostrarInfo();

// Clase Motocross
class Motocross extends Ciclomotor {
    constructor(marca, aceleracion, desaceleracion) {
        super(marca, aceleracion, desaceleracion);
        this.velocidadMaxima = 90;
        this.marchaActual = 0;
        this.pataDeCabra = false;
    }

    arrancar() {
        // Si pataDeCabra es false
        if (!this.pataDeCabra) {
            super.arrancar();
            console.log("Se quita la pata de cabra y la moto arranca");
        } else {
            console.log("No se puede arrancar con la pata de cabra puesta");
        }
    }

    acelerar() {
        if (this.encendida) {
            // Declaro una variable y la inicializo a la velocidadActual
            let nuevaVelocidad = this.velocidadActual;
            // Utilizo switch case para que en cada caso sume 0, 10 o 30 más aceleración por tanto porciento
            switch (this.marchaActual) {
                case 0: nuevaVelocidad = 0; break;
                case 1: nuevaVelocidad = 0 + (this.aceleracion * 0.1); break;
                case 2: nuevaVelocidad = 10 + (this.aceleracion * 0.3); break;
                case 3: nuevaVelocidad = 30 + (this.aceleracion * 0.5); break;
            }
            // Si la nuevaVelocidad es menor o igual que velocidadMaxima
            if (nuevaVelocidad <= this.velocidadMaxima) {
                // La velocidadActual se actualiza al valor de nuevaVelocidad
                this.velocidadActual = nuevaVelocidad;
                console.log(`Acelerando en marcha ${this.marchaActual}... Velocidad actual: ${this.velocidadActual}`);
            } else {
                this.velocidadActual = this.velocidadMaxima;
                console.log("Ya has alcanzado la velocidad máxima.");
                console.log(`Velocidad actual: ${this.velocidadMaxima}`);
            }
        } else {
            console.log("No puedes acelerar porque la moto está apagada.");
        }
    }

    frenar() {
        if (this.encendida) {
            // Declaro una variable y la inicializo con la resta de velActual menos desaceleración
            let nuevaVelocidad = this.velocidadActual - this.desaceleracion;
            // Si es menor que 0 pintará un mensaje de que se ha detenido
            if (nuevaVelocidad < 0) {
                this.velocidadActual = 0;
                console.log("Te has detenido.");
            } else {
                this.velocidadActual = nuevaVelocidad;
                console.log(`Frenando... Velocidad actual: ${this.velocidadActual}`);
            }
        } else {
            console.log("No puedes frenar porque la moto está apagada.");
        }
    }

    mostrarInfo() {
        super.mostrarInfo(); // Llamo al método de la clase padre
        console.log(`Marcha actual: ${this.marchaActual}`);
    }

    cambiarMarcha(nuevaMarcha) {
        // Si la nueva marcha es mayor o igual que 0 y menor o igual que 3
        if (nuevaMarcha >= 0 && nuevaMarcha <= 3) {
            // La marcha actual se actualizará al valor de la nueva marcha
            this.marchaActual = nuevaMarcha;
            console.log(`Cambiando a marcha ${this.marchaActual}`);
        } else {
            console.log("Marcha no válida. Debe estar entre 0 y 3.");
        }
    }
}

console.log("\nPruebas de la moto de motocross\n");
// Declaro un objeto de la clase Motocross
let motoMotocross = new Motocross("Honda", 10, 5);
console.log("LA MOTO DE MOTOCROSS INICIALMENTE:");
motoMotocross.mostrarInfo();
console.log("\n");

console.log("LA MOTO TRAS ACELERAR:");
motoMotocross.acelerar(); // No se puede acelerar una moto apagada
console.log("\n");

console.log("LA MOTO TRAS ARRANCARLA Y ACELERAR:");
motoMotocross.arrancar();
motoMotocross.acelerar(); // La marcha cambia
motoMotocross.mostrarInfo();
console.log("\n");

console.log("VOLVERMOS A ACELERAR:");
motoMotocross.acelerar(); // La marcha cambia
motoMotocross.mostrarInfo();
console.log("\n");

console.log("FRENAMOS LA MOTO:");
motoMotocross.frenar();
motoMotocross.mostrarInfo();

// Clase Scooter
class Scooter extends Ciclomotor {
    // Constructor de la Scooter con una marca, estableciendo aceleración y desaceleración fijas
    constructor(marca) {
        super(marca, 25, 15);
    }

    // Sobrescribiendo el método arrancar para mostrar un proceso de arranque diferente
    arrancar() {
        console.log("Se acerca la llave y se pulsa el botón, la moto arranca");
    }

    // Método acelerar para que acelere 25
    acelerar() {
        if (this.encendida) {
            if (this.velocidadActual + 25 <= this.velocidadMaxima) {
                this.velocidadActual += 25;
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

    // Método frenar para desacelerar 15 unidades
    frenar() {
        if (this.encendida) {
            // Si la resta de velActual menos 15 es menor que 0 pintará un mensaje de detención
            if (this.velocidadActual - 15 < 0) {
                this.velocidadActual = 0;
                console.log("Te has detenido.");
            } else {
                this.velocidadActual -= 15;
                console.log(`Frenando... Velocidad actual: ${this.velocidadActual}`);
            }
        } else {
            console.log("No puedes frenar porque la moto está apagada.");
        }
    }
}

console.log("\nPruebas de la scooter\n");

let scooter = new Scooter("Yamaha");
console.log("LA MOTO SCOOTER INICIALMENTE:");
scooter.mostrarInfo();
console.log("\n");

console.log("LA MOTO TRAS ACELERAR:");
scooter.acelerar(); // No se puede acelerar una moto apagada
console.log("\n");

console.log("LA MOTO TRAS ARRANCARLA Y ACELERAR:");
scooter.arrancar(); // La marcha cambia
scooter.acelerar();
scooter.mostrarInfo();
console.log("\n");

console.log("VOLVERMOS A ACELERAR:");
scooter.acelerar(); // La marcha cambia
scooter.mostrarInfo();
console.log("\n");

console.log("FRENAMOS LA MOTO:");
scooter.frenar();
scooter.mostrarInfo();