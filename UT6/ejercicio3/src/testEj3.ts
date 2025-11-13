// Crear interfaz BiDimensional
interface BiDimensional {
    getArea(): number;
    getInfo(): void;
}

// 3 clases
// Circulo
class Circulo implements BiDimensional{
    // Constructor
    constructor(public radio: number){
    }
    // Métodos de la interfaz BiDimensional
    getArea(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }
    getInfo(): void {
        console.log(`Circulo: radio = ${this.radio}`);
    }

}

console.log("--- Círculo ---");
const circulo = new Circulo(5);
console.log(`Área: ${circulo.getArea()}`);
console.log("Información:");
circulo.getInfo();


// class Rectangulo implements BiDimensional{

//     constructor(public lado1: number, public lado2: number){}

//     getArea(): number {
//         return this.lado1 * this.lado2;
//     }

//     getInfo(): void {
//         console.log(`Rectangulo: lado1 = ${this.lado1}, lado2 = ${this.lado2}`);
//     }

// }

// class Triangulo implements BiDimensional{

//     constructor(public base: number, public altura: number){}

//     getArea(): number {
//         return (this.base * this.altura) / 2;
//     }

//     getInfo(): void {
//         console.log(`Triangulo: base = ${this.base}, altura = ${this.altura}`);
//     }

// }
