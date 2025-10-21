// Declaro un objeto
let DiscoMusica = {
    // Propiedades
    titulo: "Origins",
    autor: "Imagine Dragons",
    añoPublicacion: 2018,
    numVentas: 27000,
} // Función getInfo que devuelve los datos del disco
DiscoMusica.getInfo = function () {
    return "Título: " + this.titulo + ", autor: " + this.autor + ", año de publicación: " + this.añoPublicacion + " y número de ventas";
}
// Pinto el getInfo
console.log(DiscoMusica.getInfo());

// Objeto calleCiudad
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
// Función getInfo
calleCiudad.getInfo = function () {
    let cadena = "Nombre de la calle: " + this.nombre + ", longitud: " + this.longitud + " y estabelcimientos: \n";

    // Reorre el array de lista `para mostrar nombre
    for (let i = 0; i < this.lista.length; i++) {
        cadena += this.lista[i].nombre + "\n"
    }
    return cadena;
}
console.log(calleCiudad.getInfo());

// 
let coche = {
    modelo: "a4",
    dueño:
    {
        nombre: "Javier",
        edad: 20
    }
    ,
    marca:
    {
        nombre: "Audi",
        añoCreacion: 2010
    }

}
coche.getInfo = function () {
    let cadena = "Modelo: " + this.modelo + ", nombre del dueño " + this.dueño.nombre + " y su edad " + this.dueño.edad + ", marca de coche: " + this.marca.nombre + " y año de creación: " + this.marca.añoCreacion;
    return cadena;
}
console.log(coche.getInfo());