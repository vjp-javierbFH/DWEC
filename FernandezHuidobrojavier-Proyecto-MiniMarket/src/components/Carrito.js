import { DatabaseCarrito } from "../db/DatabaseCarrito";
import { actualizarHeader } from "./header";

export class Carrito {

    // Añade un producto y actualiza el header
    static async anadirProductoCarrito(producto) {
        await DatabaseCarrito.addProducto(producto);
        this.actualizarCabeceraCarrito();
    }

    // Actualiza la cabecera del carrito (contador de productos)
    static async actualizarCabeceraCarrito() {
        const productos = await DatabaseCarrito.obtenerProductos();
        const totalCantidad = productos.reduce((sum, p) => sum + p.cantidad, 0);
        actualizarHeader(totalCantidad);
    }

    // Elimina un producto del carrito y actualiza la vista y header
    static async eliminarProductoCarrito(productoId, trProducto = null) {
        await DatabaseCarrito.eliminarProducto(productoId);
        if (trProducto) trProducto.remove(); // eliminar fila de tabla si existe
        this.actualizarCabeceraCarrito();
    }

    // Calcula precio final
    static async calcularPrecioFinal() {
        const productos = await DatabaseCarrito.obtenerProductos();
        return productos.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
    }
}
