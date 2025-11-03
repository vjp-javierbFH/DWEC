// TODO: Ejemplo 5: Inicializar la base de datos

function openDatabase() {
    return new Promise((resolve, reject) => {
        let openReq = indexedDB.open('Ejemplo', 1);
        openReq.addEventListener('upgradeneeded', e => {
            console.log("db actualizado a v1");
            let db = e.target.result;
            if (!db.objectStoreNames.contains('products')) {
                db.createObjectStore('products', { autoIncrement: true, keyPath: 'id' });
            }
        });
        openReq.addEventListener('success', e => {
            resolve(e.target.result);
        });
        openReq.addEventListener('error', e => reject("Error al abrir"));
        openReq.addEventListener('blocked', e => reject("DB ya en uso"));
    });
}

// Ejemplo 6: Borrar la base de datos
function deleteDatabase() {
    return new Promise((resolve, reject) => {
        let deleteReq = indexedDB.deleteDatabase('Ejemplo');
        deleteReq.addEventListener('success', () => resolve());
        deleteReq.addEventListener('error', () => reject("Error al borrar"));
        deleteReq.addEventListener('blocked', () => reject("Cerrar antes"));
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const db = await openDatabase();
        db.close();
        await deleteDatabase();
        console.log("Base de datos borrada");
    } catch (err) {
        console.error(err);
    }
});