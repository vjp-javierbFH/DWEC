let peticionAjax = new XMLHttpRequest();
peticionAjax.addEventListener("readystatechange", procesarPeticion);
peticionAjax.open("GET", "http://opendata.caceres.es/GetData/GetData?dataset=om:Restaurante&format=json");
peticionAjax.send();

function procesarPeticion(event) {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
}

function procesarDatos() {

}

function pintarInfoRestaurante(objetoRestaurante) {
    let cadena = "";
    cadena += "Nombre: " + objetoRestaurante.rdfs_label.value + "\n";
    cadena += "" + objetoRestaurante.om_categoriaRestaurante.value + "\n";
    cadena += "" + objetoRestaurante.geo_lat.value + "\n";
    cadena += "" + objetoRestaurante.geo_long.value + "\n";
    cadena += "" + objetoRestaurante.uri.value + "\n";
    return cadena;
}

peticionAjax.onreadystatechange = pintarInfoRestaurante;