// Declaro la variable monumento y las inicializo con los datos sacados del json de opendata caceres
let monumento = {
    "uri": {
        "type": "uri",
        "value": "http://opendata.caceres.es/recurso/turismo/monumentos/Monumento/19-palacio-de-godoy"
    },
    "geo_long": {
        "type": "typed-literal",
        "datatype": "http://www.w3.org/2001/XMLSchema#double",
        "value": "-6.36977"
    },
    "geo_lat": {
        "type": "typed-literal",
        "datatype": "http://www.w3.org/2001/XMLSchema#double",
        "value": "39.476"
    },
    "clase": {
        "type": "typed-literal",
        "datatype": "http://www.w3.org/2001/XMLSchema#string",
        "value": "PALACIO "
    },
    "rdfs_label": {
        "type": "typed-literal",
        "datatype": "http://www.w3.org/2001/XMLSchema#string",
        "value": "Palacio de Godoy"
    },
    "tieneEnlaceSIG": {
        "type": "typed-literal",
        "datatype": "http://www.w3.org/2001/XMLSchema#string",
        "value": "http://sig.caceres.es/serweb/fichasig/fichatoponimia.php?mslink=1178 "
    }
};

// Pinto por pantalla el nombre y tipo de monumento
console.log(`El nombre del monumento es ${monumento.rdfs_label.value}`);
console.log(`El tipo de monumento es: ${monumento.clase.value}`)
