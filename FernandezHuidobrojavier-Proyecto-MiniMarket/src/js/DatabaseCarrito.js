import { openDB } from './indexedDB';

export class DatabaseCarrito {
    static async add(producto) {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction("carrito", "readwrite");
            const store = tx.objectStore("carrito");
            const request = store.add(producto);
            request.onsuccess = () => resolve(true);
            request.onerror = () => reject("Error al guardar");
        });
    }

    static async getAll() {
        const db = await openDB();
        return new Promise((resolve) => {
            const tx = db.transaction("carrito", "readonly");
            const store = tx.objectStore("carrito");
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result);
        });
    }

    static async delete(id_db) {
        const db = await openDB();
        return new Promise((resolve) => {
            const tx = db.transaction("carrito", "readwrite");
            const store = tx.objectStore("carrito");
            const request = store.delete(id_db);
            request.onsuccess = () => resolve(true);
        });
    }
}