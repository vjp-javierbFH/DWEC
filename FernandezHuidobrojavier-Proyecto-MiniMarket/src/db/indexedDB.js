let db;

const request = indexedDB.open("carritoDB", 1);

request.onupgradeneeded = e => {
    db = e.target.result;
    db.createObjectStore("carrito", { keyPath: "id" });
};

request.onsuccess = e => {
    db = e.target.result;
};

export function guardarProducto(id) {
    const tx = db.transaction("carrito", "readwrite");
    const store = tx.objectStore("carrito");

    store.put({ id, cantidad: 1 });
}
