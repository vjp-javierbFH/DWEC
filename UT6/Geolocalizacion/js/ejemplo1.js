'use strict';

navigator.geolocation.getCurrentPosition(function (pos) {
    let p = document.getElementById('coordenadas');
    p.textContent = "Latitud: " + pos.coords.latitude + ". Longitud: " + pos.coords.longitude + "(exactitud: " + pos.coords.accuracy + ")";
});