// Inicializar el mapa centrado en Plasencia
var map = L.map('map').setView([40.038, -6.09], 14);

// Añadir capa de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// --- Elementos a añadir ---

// 1. Ayuntamiento de Plasencia (Marcador)
// Coordenadas aprox: 40.0294, -6.0908
var ayuntamientoCords = [40.0294, -6.0908];
var markerAyto = L.marker(ayuntamientoCords).addTo(map);
markerAyto.bindPopup(
    "<b>Ayuntamiento de Plasencia</b><br>" +
    "El centro administrativo de la ciudad.<br>" +
    "<a href='https://www.plasencia.es/web/' target='_blank'>Visitar web</a>"
);

// 2. Piscina bioclimática (Círculo)
// Coordenadas aprox: 40.0447, -6.0850
var piscinaCords = [40.0447, -6.0850];
var circlePiscina = L.circle(piscinaCords, {
    color: 'blue',
    fillColor: '#30f',
    fillOpacity: 0.5,
    radius: 50 // Radio en metros
}).addTo(map);
circlePiscina.bindPopup(
    "<b>Piscina Bioclimática</b><br>" +
    "Instalación deportiva moderna y sostenible.<br>" +
    "<a href='https://deportes.aytoplasencia.es' target='_blank'>Visitar web</a>"
);

// 3. IES Valle del Jerte (Polígono)
// Coordenadas centro: 40.0427, -6.0864
// Definimos un polígono rectangular simple alrededor del punto
var iesPolygonCords = [
    [40.0430, -6.0867],
    [40.0430, -6.0861],
    [40.0424, -6.0861],
    [40.0424, -6.0867]
];
var polygonIES = L.polygon(iesPolygonCords, {
    color: 'green',
    fillColor: '#0f3',
    fillOpacity: 0.5
}).addTo(map);
polygonIES.bindPopup(
    "<b>IES Valle del Jerte</b><br>" +
    "Instituto de Educación Secundaria.<br>" +
    "<a href='https://iesvallejertepla.educarex.es' target='_blank'>Visitar web</a>"
);

// 4. Estación de trenes (Polígono)
// Coordenadas centro: 40.0222, -6.0995
var stationPolygonCords = [
    [40.0226, -6.1000],
    [40.0226, -6.0990],
    [40.0218, -6.0990],
    [40.0218, -6.1000]
];
var polygonStation = L.polygon(stationPolygonCords, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);
polygonStation.bindPopup(
    "<b>Estación de Trenes</b><br>" +
    "Punto de conexión ferroviaria de Plasencia.<br>" +
    "<a href='https://www.renfe.com/es/es/inspirate/estaciones/estacion-plasencia' target='_blank'>Visitar web</a>"
);
