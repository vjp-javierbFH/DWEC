const map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const customIcon = L.icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
});

let marker = null;
function updatePosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const accuracy = position.coords.accuracy;

    console.log(`Updated position: ${lat}, ${lng} (Accuracy: ${accuracy}m)`);


    marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`<img src="recursos/perfil.png" width="50" height="50">`).openPopup();
    map.setView([lat, lng], 16);

}

function handleError(error) {
    console.error("Geolocation error:", error);
    alert("Error getting location: " + error.message);
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(updatePosition, handleError);

    setInterval(() => {
        navigator.geolocation.getCurrentPosition(updatePosition, handleError);
    }, 30000);
} else {
    alert("Geolocation is not supported by this browser.");
}