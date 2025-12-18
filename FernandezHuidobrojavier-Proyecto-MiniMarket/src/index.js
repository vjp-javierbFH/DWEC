import { Carrito } from "./js/Carrito.js";
import { actualizarHeader } from "./js/header";

document.addEventListener("DOMContentLoaded", async () => {
    // Inicializa el header con contador desde DB
    await Carrito.actualizarCabeceraCarrito();
});
