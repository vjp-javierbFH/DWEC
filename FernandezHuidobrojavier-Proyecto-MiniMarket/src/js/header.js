import { DatabaseCarrito } from './DatabaseCarrito';

export const renderHeader = async () => {
    const headerElement = document.querySelector('header');
    if (!headerElement) return;

    const productos = await DatabaseCarrito.getAll();
    const path = window.location.pathname;

    const active = (name) => path.includes(name) ? 'class="active"' : '';

    headerElement.innerHTML = `
        <nav>
            <div class="logo">Mini-Market</div>
            <ul>
                <li><a href="index.html" ${active('index')}>Inicio</a></li>
                <li><a href="muebles.html" ${active('muebles')}>Muebles</a></li>
                <li><a href="electronica.html" ${active('electronica')}>Electrónica</a></li>
                <li><a href="decoracion.html" ${active('decoracion')}>Decoración</a></li>
                <li><a href="carrito.html" ${active('carrito')}>Cesta (<span id="cart-count">${productos.length}</span>)</a></li>
            </ul>
        </nav>
    `;
};