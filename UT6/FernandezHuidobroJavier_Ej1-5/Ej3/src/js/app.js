import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import bares from '../data/bares.json';

// Fix for default marker icons in Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

document.addEventListener('DOMContentLoaded', () => {
    // Cáceres coordinates
    const caceresCoords = [39.4753, -6.3724];

    // Initialize map
    const map = L.map('map').setView(caceresCoords, 15);

    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers for each bar
    bares.forEach(bar => {
        const popupContent = `
            <div>
                <h3>${bar.name}</h3>
                <p><strong>Teléfono:</strong> ${bar.phone}</p>
                <p><strong>Sirve comida:</strong> ${bar.kitchen}</p>
            </div>
        `;

        if (bar.lat && bar.lon) {
            L.marker([bar.lat, bar.lon])
                .addTo(map)
                .bindPopup(popupContent);
        }
    });

    console.log(`Loaded ${bares.length} bars.`);
});
