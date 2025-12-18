
import { crearHeader } from "./header";
import { guardarProducto } from "./indexedDB";

crearHeader();

fetch("http://localhost:3000/productos.json")
    .then(r => r.json())
    .then(data => {
        const contenedor = document.getElementById("productos");

        data.productos
            .filter(p => p.categoria === "muebles")
            .forEach(p => {
                contenedor.innerHTML += `
          <div>
            <h3>${p.nombre}</h3>
            <p>${p.precio} €</p>
            <button data-id="${p.id}">Añadir</button>
          </div>
        `;
            });

        contenedor.addEventListener("click", e => {
            if (e.target.tagName === "BUTTON") {
                guardarProducto(e.target.dataset.id);
            }
        });
    });
