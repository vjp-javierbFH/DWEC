import '../assets/style.css';

const container = document.getElementById('productos-container');

async function cargarProductos() {
    try {
        const response = await fetch('http://localhost:3000/electronica');
        const productos = await response.json();

        productos.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'producto-card';
            card.innerHTML = `
                <img src="${prod.imagen}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <p>Precio: ${prod.precio}€</p>
                <button onclick="agregarAlCarrito(${JSON.stringify(prod).replace(/"/g, '&quot;')})">Comprar</button>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error cargando productos", error);
    }
}

// Función global para el carrito (usando LocalStorage)
window.agregarAlCarrito = (producto) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto añadido');
};

cargarProductos();