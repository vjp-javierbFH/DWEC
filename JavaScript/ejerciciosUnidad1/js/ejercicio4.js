// Ejercicio 4
console.log("Ejercicio 4: función que reciba 3 parámetros con valores por defecto.");
console.log("La función convierte las entradas a cadena, entero y entero");

function funcionConversiones(producto = "Producto genérico", precio = 100, impuesto = 21) {
    // Convertir las entradas a los tipos requeridos
    producto = String(producto).trim() || "Producto genérico";
    precio = parseInt(precio);
    impuesto = parseInt(impuesto);

    // Validar los valores convertidos
    if (isNaN(precio)) precio = 100;
    if (isNaN(impuesto)) impuesto = 21;

    console.log(`El producto es "${producto}", el precio es ${precio} y su impuesto es ${impuesto}`);
}

// Llamadas de pruebfuncionConversiones();
funcionConversiones("Laptop", 1500, 18);
funcionConversiones("", "abc", null);
funcionConversiones("Teléfono", "200", "10");
console.log("");