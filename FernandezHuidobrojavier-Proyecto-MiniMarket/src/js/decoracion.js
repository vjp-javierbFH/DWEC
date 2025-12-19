import '../style.css';
import { renderHeader } from './header';
import { Carrito } from './cesta';

const contenedor = document.getElementById('contenedor');

async function iniciar() {
    await renderHeader();

    try {
        // Intentamos conectar al servidor de datos
        const res = await fetch('http://localhost:3000/decoracion');
        
        if (!res.ok) throw new Error("No se pudo conectar con el servidor de datos");
        
        const datos = await res.json();
        contenedor.innerHTML = ""; 

        datos.forEach(p => {
            const card = document.createElement('div');
            card.className = 'card';

            // Estructura mejorada con manejo de error en imagen
            card.innerHTML = `
                <div class="card-image-container">
                    <img src="${p.imagen}" 
                         alt="${p.nombre}" 
                         class="producto-foto"
                         onerror="this.src='https://via.placeholder.com/200x200?text=Error+Imagen'">
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
        contenedor.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 50px;">
                <p>⚠️ No se pudieron cargar los productos.</p>
                
            </div>
        `;
    }
}
iniciar();