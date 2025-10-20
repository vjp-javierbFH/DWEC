function pintarInfoRestaurante(objetoRestaurante) {
    return {
        nombre: objetoRestaurante.rdfs_label.value,
        web: objetoRestaurante.schema_url?.value ? objetoRestaurante.schema_url.value : ("—"),
        direccion: objetoRestaurante.schema_address_streetAddress.value || "—",
        aforo: objetoRestaurante.om_capacidadPersonas?.value ? objetoRestaurante.om_capacidadPersonas.value : ("—")
    };
}

let peticionAjax = new XMLHttpRequest();
let restaurantes = [];

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
    restaurantes = objetoResultado.results.bindings.map(pintarInfoRestaurante);
}

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