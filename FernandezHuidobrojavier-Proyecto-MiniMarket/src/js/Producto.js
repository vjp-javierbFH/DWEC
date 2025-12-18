export class Producto {
    /**
     * Crea un <tr> representando un producto en la tabla del carrito
     * @param {Object} productoBD - objeto de la DB {id, nombre, precio, cantidad}
     * @param {Function} eliminarCallback - función que se llama al eliminar el producto
     * @returns {HTMLTableRowElement}
     */
    static crearTr(productoBD, eliminarCallback) {
        const tr = document.createElement("tr");

        tr.innerHTML = `
      <td>${productoBD.nombre}</td>
      <td>${productoBD.precio} €</td>
      <td>${productoBD.cantidad}</td>
      <td>${(productoBD.precio * productoBD.cantidad).toFixed(2)} €</td>
      <td><button>Eliminar</button></td>
    `;

        tr.querySelector("button").addEventListener("click", () => {
            eliminarCallback(productoBD.id, tr);
        });

        return tr;
    }
}
