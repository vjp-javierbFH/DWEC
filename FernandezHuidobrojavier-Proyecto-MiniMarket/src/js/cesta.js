import '../style.css';
import { DatabaseCarrito } from './DatabaseCarrito';
import { renderHeader } from './header';

export class Carrito {
    static async agregar(producto) {
        try {
            await DatabaseCarrito.add(producto);
            await renderHeader();
            alert(`${producto.nombre} se ha añadido al carrito`);
        } catch (error) {
            console.error("Error al añadir al carrito:", error);
        }
    }

    static async eliminar(id_db) {
        await DatabaseCarrito.delete(id_db);
        await renderHeader();
        await pintarCesta();
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
        contenedor.innerHTML = "<p style='text-align:center; padding:20px;'>La cesta está vacía.</p>";
        if (totalElemento) totalElemento.innerText = "0";
        return;
    }

    productos.forEach(p => {
        const item = document.createElement('div');
        item.className = 'item-cesta';
        item.innerHTML = `
            <div class="img-cesta-container">
                <img src="${p.imagen}" alt="${p.nombre}" class="img-cesta" onerror="this.src='https://via.placeholder.com/100?text=Error'">
            </div>
            <div class="info-item">
                <h3>${p.nombre}</h3>
                <p>${p.precio}€</p>
            </div>
        `;

        const btnBorrar = document.createElement('button');
        btnBorrar.className = 'btn-eliminar';
        btnBorrar.innerText = "Eliminar";
        btnBorrar.onclick = () => Carrito.eliminar(p.id_db);

        item.appendChild(btnBorrar);
        contenedor.appendChild(item);
    });

    const total = await Carrito.obtenerTotal();
    if (totalElemento) totalElemento.innerText = total.toFixed(2);
}

// Botón vaciar carrito
document.addEventListener('click', async (e) => {
    if (e.target && e.target.id === 'btn-vaciar') {
        const productos = await DatabaseCarrito.getAll();
        for (let p of productos) {
            await DatabaseCarrito.delete(p.id_db);
        }
        await pintarCesta();
        await renderHeader();
    }
});

pintarCesta();