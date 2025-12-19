import '../style.css';
import { renderHeader } from './header';
import { Carrito } from './cesta';

const contenedor = document.getElementById('contenedor');

async function iniciar() {
    await renderHeader();

    try {
        // Forzamos URL completa para evitar problemas de puertos
        const res = await fetch('http://localhost:3000/electronica');
        if (!res.ok) throw new Error("Error servidor 3000");
        const datos = await res.json();

        contenedor.innerHTML = "";
        datos.forEach(p => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-image-container">
                    <img src="${p.imagen}" class="producto-foto" onerror="this.src='https://via.placeholder.com/200'">
                </div>
                <div class="card-info">
                    <h3>${p.nombre}</h3>
                    <p class="precio">${p.precio}€</p>
                </div>
            `;
            const btn = document.createElement('button');
            btn.className = 'btn-comprar';
            btn.innerText = "Añadir al carrito";
            btn.onclick = () => Carrito.agregar(p);
            card.appendChild(btn);
            contenedor.appendChild(card);
        });
    } catch (error) {
        console.error(error);
        contenedor.innerHTML = "Error al cargar productos. ¿json-server --cors?";
    }
}
iniciar();