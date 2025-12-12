let mapa = L.map("#map").setView([40.037315, -6.085430], 13);

L.tileLayer('http://{$}.title.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyrigtht">OpenStreetMap</a>'
}).addTo(mapa);