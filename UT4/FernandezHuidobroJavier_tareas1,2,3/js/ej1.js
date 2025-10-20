let DiscoMusica = {
    titulo: "Origins",
    autor: "Imagine Dragons",
    anyoPublicacion: 2018,
    numVentas: 27000,
}
DiscoMusica.getInto = function () {
    return "Título: " + this.titulo + ", autor: " + this.autor + ", año de publicación: " + this.anyoPublicacion + " y número de ventas";
}
console.log(DiscoMusica.getInto());


let calleCiudad = {
    nombre: "Calle del Sol",
    longitud: 50,
    lista: [
        {
            nombre: "juguetería"
        },
        {
            nombre: "cafetería"
        },
        {
            nombre: "bazar"
        }
    ]
}
calleCiudad.getInto = function () {
    let cadena = "Nombre de la calle: " + this.nombre + ", longitud: " + this.longitud +" y estabelcimientos: \n";

    for (let i = 0; i < this.lista.length; i++) {
        cadena+=this.lista[i].nombre
    }
    return cadena;
}
console.log(calleCiudad.getInto());

let coche={
    modelo:"a4",
    duenyo: [
        
    ]
}
