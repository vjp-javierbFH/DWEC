export const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("MiniMarketDB", 1);

        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains("carrito")) {
                // Importante: id_db es la clave autoincremental para IndexedDB
                db.createObjectStore("carrito", { keyPath: "id_db", autoIncrement: true });
            }
        };

        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject("Error al abrir IndexedDB");
    });
};