import '../style.css';
import { renderHeader } from './header';
import { Carrito } from './cesta';

const contenedor = document.getElementById('contenedor');

async function iniciar() {
    await renderHeader();

    try {
        // IMPORTANTE: Cambia 'electronica' por 'muebles' o 'decoracion' según el archivo
        const res = await fetch('http://localhost:3000/electronica');

        if (!res.ok) throw new Error("Servidor no disponible");

        const datos = await res.json();
        contenedor.innerHTML = "";

        datos.forEach(p => {
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <div class="card-image-container">
                    <img src="${p.imagen}" alt="${p.nombre}" class="producto-foto" 
                         onerror="this.src='https://via.placeholder.com/200?text=Sin+Imagen'">
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
        console.error("Error:", error);
        contenedor.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">⚠️ Error al conectar con la base de datos (Puerto 3000).</p>`;
    }
}

iniciar();