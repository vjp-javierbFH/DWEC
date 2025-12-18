import { Carrito } from "./components/Carrito";
import { actualizarHeader } from "./components/header";

document.addEventListener("DOMContentLoaded", async () => {
    // Inicializa el header con contador desde DB
    await Carrito.actualizarCabeceraCarrito();
});
