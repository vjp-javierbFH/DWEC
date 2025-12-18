export class DatabaseCarrito {
    static db;

    // Inicializa IndexedDB
    static init() {
        return new Promise((resolve, reject) => {
            if (this.db) return resolve(this.db);

            const request = indexedDB.open("carritoDB", 1);

            request.onupgradeneeded = e => {
                this.db = e.target.result;
                if (!this.db.objectStoreNames.contains("carrito")) {
                    this.db.createObjectStore("carrito", { keyPath: "id" });
                }
            };

            request.onsuccess = e => {
                this.db = e.target.result;
                resolve(this.db);
            };

            request.onerror = () => reject("Error abriendo IndexedDB");
        });
    }

    static async addProducto(producto) {
        await this.init();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction("carrito", "readwrite");
            const store = tx.objectStore("carrito");
            const getRequest = store.get(producto.id);

            getRequest.onsuccess = () => {
                const existente = getRequest.result;
                if (existente) {
                    existente.cantidad += 1;
                    store.put(existente);
                } else {
                    store.put({ ...producto, cantidad: 1 });
                }
            };

            tx.oncomplete = () => resolve(true);
            tx.onerror = () => reject("Error añadiendo producto");
        });
    }

    static async eliminarProducto(id) {
        await this.init();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction("carrito", "readwrite");
            const store = tx.objectStore("carrito");
            store.delete(id);

            tx.oncomplete = () => resolve(true);
            tx.onerror = () => reject("Error eliminando producto");
        });
    }

    static async obtenerProductos() {
        await this.init();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction("carrito", "readonly");
            const store = tx.objectStore("carrito");
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject("Error obteniendo productos");
        });
    }
}
