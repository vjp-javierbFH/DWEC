import { DatabaseCarrito } from './DatabaseCarrito';

export async function renderHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    const productos = await DatabaseCarrito.getAll();
    const totalItems = productos.length;

    header.innerHTML = `
        <nav>
            <a href="index.html" class="nav-logo">Mini-Market</a>
            <ul class="nav-links">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="electronica.html">Electrónica</a></li>
                <li><a href="muebles.html">Muebles</a></li>
                <li><a href="decoracion.html">Decoración</a></li>
            </ul>
            <a href="carrito.html" class="nav-cart">
                🛒 Mi Cesta <span id="cart-count">${totalItems}</span>
            </a>
        </nav>
    `;
}

// Ejecutar al cargar para que aparezca el menú
renderHeader();