// Declaro un objeto persona
var persona = {
    nombre: "Marta",
    "edad": 20,
    // Declaro un array trabajos
    trabajos: [
        {
            descripcion: "Payaso del circo",
            duracion: "2003-2005"
        },
        {
            descripcion: "Sexador de pollos",
            duracion: "2005-2019"
        }
    ]
};

// Creo la función getInfo para pintar los datos del objeto persona
persona.getInfo = function () {
    let cadenaDeVuelta = "Mi nombre es " + this.nombre + " y tengo " + this.edad + "\n";

    // Con un for recorro el array de trabajos para mostrarlos.
    for (var i = 0; i < this.trabajos.length; i++) {
        // Uso += para concatenar
        cadenaDeVuelta += "-" + this.trabajos[i].descripcion + " -> " + this.trabajos[i].duracion + "\n"
    }
    // Devuelve la variable declarada
    return cadenaDeVuelta;
}
console.log("Modificar la función getInfo para pintar además de nombre y edad también muestre el array de trabajos.");
console.log(persona.getInfo());