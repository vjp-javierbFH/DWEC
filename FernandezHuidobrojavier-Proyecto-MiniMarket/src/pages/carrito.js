import { DatabaseCarrito } from "../db/DatabaseCarrito";
import { Carrito } from "../components/Carrito";
import { Producto } from "../components/Producto";

document.addEventListener("DOMContentLoaded", async () => {
    const contenedor = document.getElementById("carrito");

    // Crear tabla
    const tabla = document.createElement("table");
    tabla.innerHTML = `
    <thead>
      <tr>
        <th>Producto</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Total</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;
    contenedor.appendChild(tabla);

    const tbody = tabla.querySelector("tbody");

    // Obtener productos de la DB
    const productosBD = await DatabaseCarrito.obtenerProductos();

    productosBD.forEach(productoBD => {
        const tr = Producto.crearTr(productoBD, Carrito.eliminarProductoCarrito.bind(Carrito));
        tbody.appendChild(tr);
    });

    // Calcular precio final y mostrarlo
    const precioFinal = await Carrito.calcularPrecioFinal();
    const footer = document.createElement("p");
    footer.textContent = `Precio final: ${precioFinal.toFixed(2)} €`;
    contenedor.appendChild(footer);
});
