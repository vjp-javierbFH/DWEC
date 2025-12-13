const STORAGE_KEY = 'usuarios_edad_ej4';

// Helper to get data
function getStoredData() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
}

// Helper to set data
function setStoredData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// UI Helper
function showMessage(msg, isError = false) {
    const area = document.getElementById('result-area');
    area.style.display = 'block';
    area.className = isError ? 'error' : '';
    area.innerHTML = msg;
}

function checkUser() {
    const nameInput = document.getElementById('username');
    const name = nameInput.value.trim();
    const ageSection = document.getElementById('age-input-section');
    const resultArea = document.getElementById('result-area');

    // Reset UI
    resultArea.style.display = 'none';
    ageSection.style.display = 'none';

    if (!name) {
        showMessage("Por favor, introduce un nombre.", true);
        return;
    }

    const data = getStoredData();

    if (data.hasOwnProperty(name)) {
        // User exists
        showMessage(`Hola <strong>${name}</strong>, tu edad registrada es: <strong>${data[name]}</strong> años. <button class="btn-xs" onclick="enableModify()">Modificar</button>`);
    } else {
        // User does not exist
        showMessage(`El usuario <strong>${name}</strong> no existe. Por favor, introduce tu edad para registrarte.`);
        ageSection.style.display = 'block';
        document.getElementById('age').focus();
    }
}

function enableModify() {
    const ageSection = document.getElementById('age-input-section');
    ageSection.style.display = 'block';
    document.getElementById('age').focus();
    // pre-fill current age?
    const name = document.getElementById('username').value.trim();
    const data = getStoredData();
    if (data[name]) {
        document.getElementById('age').value = data[name];
    }
}

function saveNewUser() {
    const name = document.getElementById('username').value.trim();
    const ageInput = document.getElementById('age');
    const age = ageInput.value.trim();
    const ageSection = document.getElementById('age-input-section');

    if (!name) {
        showMessage("Error: El nombre se ha perdido. Por favor empieza de nuevo.", true);
        return;
    }

    if (!age || isNaN(age) || age < 0) {
        showMessage("Por favor, introduce una edad válida.", true);
        return;
    }

    const data = getStoredData();
    data[name] = age; // Add or update
    setStoredData(data);

    ageSection.style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('age').value = '';

    showMessage(`¡Guardado! El usuario <strong>${name}</strong> ha sido registrado con <strong>${age}</strong> años.`);
}

function listUsers() {
    const data = getStoredData();
    const names = Object.keys(data);
    const ageSection = document.getElementById('age-input-section');
    ageSection.style.display = 'none'; // Hide age input if open

    if (names.length === 0) {
        showMessage("No hay usuarios registrados todavía.", true);
        return;
    }

    let html = '<p><strong>Lista de usuarios registrados:</strong></p><ul>';
    names.forEach(name => {
        html += `<li><span>${name}</span> <span>${data[name]} años</span></li>`;
    });
    html += '</ul>';

    // Add a clear button for development convenience/logic
    html += '<div style="text-align: right; margin-top: 10px;"><button style="padding: 5px 10px; font-size: 0.8rem; background-color: #ff6b6b; color: white; border: none; border-radius: 4px; cursor: pointer;" onclick="clearData()">Borrar Datos</button></div>';

    showMessage(html);
}

function clearData() {
    if (confirm("¿Estás seguro de que quieres borrar todos los datos?")) {
        localStorage.removeItem(STORAGE_KEY);
        showMessage("Todos los datos han sido borrados.");
    }
}