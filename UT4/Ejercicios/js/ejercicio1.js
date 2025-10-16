var persona = {
    nombre: "Marta",
    "edad": 20,
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

persona.getInfo = function () {
    let cadenaDeVuelta = "Mi nombre es " + this.nombre + " y tengo " + this.edad + "\n";

    for (var i = 0; i < this.trabajos.length; i++) {
        cadenaDeVuelta += "-" + this.trabajos[i].descripcion + " -> " + this.trabajos[i].duracion + "\n"
    }
    return cadenaDeVuelta;
}
console.log("Modificar la función getInfo para pintar además de nombre y edad también muestre el array de trabajos.");
console.log(persona.getInfo());