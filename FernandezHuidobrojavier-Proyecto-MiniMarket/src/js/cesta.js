import '../style.css';
import { DatabaseCarrito } from './DatabaseCarrito';
import { renderHeader } from './header';

export class Carrito {
    // Añadir producto
    static async agregar(producto) {
        try {
            await DatabaseCarrito.add(producto);
            await renderHeader();
            alert(`${producto.nombre} se ha añadido al carrito`);
        } catch (error) {
            console.error("Error al añadir al carrito:", error);
        }
    }

    // Eliminar un solo producto por su ID de IndexedDB
    static async eliminar(id_db) {
        await DatabaseCarrito.delete(id_db);
        await renderHeader(); // Actualiza el contador del header
        await pintarCesta();  // Refresca la lista visual
    }

    // Calcular el precio total
    static async obtenerTotal() {
        const productos = await DatabaseCarrito.getAll();
        return productos.reduce((acc, p) => acc + parseFloat(p.precio), 0);
    }

    // Vaciar toda la base de datos
    static async vaciar() {
        const productos = await DatabaseCarrito.getAll();
        if (productos.length === 0) return;

        // Borramos todos los elementos usando Promise.all para esperar a que todos terminen
        await Promise.all(productos.map(p => DatabaseCarrito.delete(p.id_db)));
        
        await renderHeader();
        await pintarCesta();
    }
}

// Función para renderizar los productos en la página de carrito.html
async function pintarCesta() {
    const contenedor = document.getElementById('contenedor-cesta');
    const totalElemento = document.getElementById('precio-total');

    if (!contenedor) return;

    const productos = await DatabaseCarrito.getAll();
    contenedor.innerHTML = "";

    // Si no hay productos, mostramos mensaje
    if (productos.length === 0) {
        contenedor.innerHTML = `
            <div style="text-align:center; padding:50px; grid-column: 1/-1;">
                <p>Tu cesta está vacía.</p>
                <a href="index.html" style="color: var(--accent); text-decoration: none;">Ir a la tienda</a>
            </div>`;
        if (totalElemento) totalElemento.innerText = "0";
        return;
    }

    // Dibujamos cada producto
    productos.forEach(p => {
        const item = document.createElement('div');
        item.className = 'item-cesta';
        item.innerHTML = `
            <div class="img-cesta-container">
                <img src="${p.imagen}" alt="${p.nombre}" class="img-cesta" onerror="this.src='https://via.placeholder.com/100?text=Error'">
            </div>
            <div class="info-item">
                <h3>${p.nombre}</h3>
                <p class="precio-item">${p.precio}€</p>
            </div>
        `;

        const btnBorrar = document.createElement('button');
        btnBorrar.className = 'btn-eliminar';
        btnBorrar.innerText = "Eliminar";
        btnBorrar.onclick = () => Carrito.eliminar(p.id_db);

        item.appendChild(btnBorrar);
        contenedor.appendChild(item);
    });

    // Actualizamos el precio total
    const total = await Carrito.obtenerTotal();
    if (totalElemento) totalElemento.innerText = total.toFixed(2);
}

// Lógica para detectar el clic en el botón "Vaciar Carrito"
document.addEventListener('DOMContentLoaded', () => {
    // Pintamos la cesta al cargar la página
    pintarCesta();

    // Vinculamos el botón de vaciar
    const btnVaciar = document.getElementById('btn-vaciar');
    if (btnVaciar) {
        btnVaciar.addEventListener('click', async () => {
            if (confirm("¿Estás seguro de que quieres vaciar toda la cesta?")) {
                await Carrito.vaciar();
            }
        });
    }
});