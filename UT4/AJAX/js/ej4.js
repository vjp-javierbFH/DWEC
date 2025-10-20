function pintarInfoRestaurante(objetoRestaurante) { // Función que pinta los datos de los restaurantes
    return { // Devuelve los datos
        nombre: objetoRestaurante.rdfs_label.value,
        web: objetoRestaurante.schema_url?.value ? objetoRestaurante.schema_url.value : (objetoRestaurante.uri?.value || "—"), // Si no existe una url pintará —
        direccion: objetoRestaurante.schema_address_streetAddress.value || "—",
        aforo: objetoRestaurante.om_capacidadPersonas?.value ? objetoRestaurante.om_capacidadPersonas.value : ("—") // Lo mismo con url
    };
}

// Declaro una variable para procesar la pertición
let peticionAjax = new XMLHttpRequest();
let restaurantes = []; // Un array para procesar los datos en él

peticionAjax.addEventListener("readystatechange", procesarPeticion);
peticionAjax.open("GET", "https://raw.githubusercontent.com/fredericsangar/backupOpendataCCJSON/master/restaurantes.json");
peticionAjax.send();

function procesarPeticion(event) {
    if (this.readyState == 4 && this.status == 200) {
        let objetoResultado = JSON.parse(this.responseText);
        procesarResultado(objetoResultado);
    }
}

// Función para pintar la información de los restaurantes y guardalos en un array
function procesarResultado(objetoResultado) {
    restaurantes = objetoResultado.results.bindings.map(pintarInfoRestaurante);
}

// Función recorre el array restaurantes para meter en el tbody los datos almacenados
function cargarRestaurantes() {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    restaurantes.forEach((restaurante, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${restaurante.nombre}</td>
            <td>${restaurante.web}</td>
            <td>${restaurante.direccion}</td>
            <td>${restaurante.aforo}</td>
        `;
        tbody.appendChild(row);
    });
}