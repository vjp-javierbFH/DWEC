class Punto2D {
    // Atributo
    private punto1: { x: number; y: number; };
    private punto2: { x: number; y: number; };

    // Constructor
    constructor(x1: number, y1: number, x2: number, y2: number) {
        this.punto1 = { x: x1, y: y1 };
        this.punto2 = { x: x2, y: y2 };
    }

    // Get
    public getPunto1(): { x: number; y: number; } {
        return this.punto1;
    }
    public getPunto2(): { x: number; y: number; } {
        return this.punto2;
    }

    // Set
    public setPunto1(x: number, y: number): void {
        this.punto1 = { x: x, y: y };
    }
    public setPunto2(x: number, y: number): void {
        this.punto2 = { x: x, y: y };
    }

}

// Inicalizar las variables de tipo Punto2D
let puntoA: Punto2D = new Punto2D(2, 3, 5, 8);

console.log("Punto A1: (" + puntoA.getPunto1().x + ", " + puntoA.getPunto1().y + ")");
console.log("Punto A2: (" + puntoA.getPunto2().x + ", " + puntoA.getPunto2().y + ")");

// Crear una variable que permita almacenar una función que reciba dos parámetros de tipo Punto2D y retorne un número.
let distancia: (p1: Punto2D, p2: Punto2D) => number;

let calcularDistancia = function (p1: Punto2D, p2: Punto2D): number {
    let dx = p2.getPunto2().x - p1.getPunto1().x;
    let dy = p2.getPunto2().y - p1.getPunto1().y;
    return Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
}

distancia = calcularDistancia;

// Calcular la distancia entre los dos puntos del objeto puntoA
let resultado: number = distancia(puntoA, puntoA);
console.log("Distancia entre los dos puntos de puntoA: " + resultado);