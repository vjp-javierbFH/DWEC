import { crearHeader } from "../components/header";

crearHeader();

const dbRequest = indexedDB.open("carritoDB", 1);

dbRequest.onsuccess = e => {
    const db = e.target.result;
    const tx = db.transaction("carrito", "readonly");
    const store = tx.objectStore("carrito");
    const getAllRequest = store.getAll();

    getAllRequest.onsuccess = () => {
        const carrito = getAllRequest.result;
        const contenedor = document.getElementById("carrito");

        if (carrito.length === 0) {
            contenedor.innerHTML = "<p>El carrito está vacío.</p>";
            return;
        }

        carrito.forEach(item => {
            contenedor.innerHTML += `<p>Producto ID: ${item.id} | Cantidad: ${item.cantidad}</p>`;
        });
    };
};
