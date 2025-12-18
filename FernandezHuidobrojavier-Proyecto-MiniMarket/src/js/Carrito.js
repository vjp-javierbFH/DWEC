import '../assets/style.css';

const listaCesta = document.getElementById('lista-cesta');
const totalLabel = document.getElementById('total');

function renderCesta() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    listaCesta.innerHTML = '';
    let total = 0;

    carrito.forEach((item, index) => {
        total += parseFloat(item.precio);
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.nombre} - ${item.precio}€ 
            <button class="btn-eliminar" data-index="${index}">Eliminar</button>
        `;
        listaCesta.appendChild(li);
    });

    totalLabel.innerText = `Total: ${total.toFixed(2)}€`;
}

// Delegación de eventos para eliminar
listaCesta.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-eliminar')) {
        let carrito = JSON.parse(localStorage.getItem('carrito'));
        const index = e.target.dataset.index;
        carrito.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        renderCesta();
    }
});

renderCesta();