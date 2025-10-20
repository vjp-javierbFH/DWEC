function pintarInfoRestaurante(objetoRestaurante) {
    let cadena = "";
    cadena += "Nombre: " + objetoRestaurante.rdfs_label.value + "\n";
    cadena += "Teléfono: " + objetoRestaurante.schema_telephone.value + "\n";
    cadena += "Latitud: " + objetoRestaurante.geo_lat.value + "\n";
    cadena += "Longitud: " + objetoRestaurante.geo_long.value + "\n";
    cadena += "Uri: " + objetoRestaurante.uri.value + "\n";
    return cadena;
}

let peticionAjax = new XMLHttpRequest();
peticionAjax.addEventListener("readystatechange", procesarPeticion);
peticionAjax.open("GET", "https://raw.githubusercontent.com/fredericsangar/backupOpendataCCJSON/master/restaurantes.json");
peticionAjax.send();

function procesarPeticion(event) {
    if (this.readyState == 4 && this.status == 200) {
        let objetoResultado = JSON.parse(this.responseText);
        procesarResultado(objetoResultado);
    }
}

function procesarResultado(objetoResultado) {
    for (let restaurante of objetoResultado.results.bindings) {
        console.log(pintarInfoRestaurante(restaurante));
    }
}