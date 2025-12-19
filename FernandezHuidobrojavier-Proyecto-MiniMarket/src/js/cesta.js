import '../style.css';
import { DatabaseCarrito } from './DatabaseCarrito';
import { renderHeader } from './header';

export class Carrito {
    static async agregar(producto) {
        await DatabaseCarrito.add(producto);
        await renderHeader();
        alert("¡Añadido!");
    }

    static async eliminar(id_db) {
        await DatabaseCarrito.delete(id_db);
        await renderHeader();
        pintarCesta();
    }

    static async obtenerTotal() {
        const productos = await DatabaseCarrito.getAll();
        return productos.reduce((acc, p) => acc + parseFloat(p.precio), 0);
    }
}

async function pintarCesta() {
    const contenedor = document.getElementById('contenedor-cesta');
    const totalElemento = document.getElementById('precio-total');

    if (!contenedor) return;

    const productos = await DatabaseCarrito.getAll();
    contenedor.innerHTML = "";

    if (productos.length === 0) {
        contenedor.innerHTML = "<p>Tu cesta está vacía</p>";
        if (totalElemento) totalElemento.innerText = "0";
        return;
    }

    productos.forEach(p => {
        const item = document.createElement('div');
        item.className = 'item-cesta';
        item.innerHTML = `
            <div class="img-cesta-container" style="width:80px; height:80px;">
                <img src="${p.imagen}" alt="${p.nombre}" class="img-cesta">
            </div>
            <div class="info-item">
                <h3>${p.nombre}</h3>
                <p>${p.precio}€</p>
            </div>
        `;

        const btnBorrar = document.createElement('button');
        btnBorrar.innerText = "Eliminar";
        btnBorrar.onclick = () => Carrito.eliminar(p.id_db);

        item.appendChild(btnBorrar);
        contenedor.appendChild(item);
    });

    const total = await Carrito.obtenerTotal();
    if (totalElemento) totalElemento.innerText = total.toFixed(2);
}

// Inicializar si estamos en carrito.html
pintarCesta();