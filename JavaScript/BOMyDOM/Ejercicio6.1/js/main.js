const contenedor = ['red','blue','grenn','yellow'];

function crearMatrizBotones() {
    const contenedor = document.getElementById('contenedorGeneral');

    // Limpiamos el contenedor por si ya tiene contenido
    contenedor.innerHTML = '';

    // Configuramos el contenedor como un grid
    contenedor.style.display = 'grid';
    contenedor.style.gridTemplateColumns = 'repeat(10, 25px)'; // 10 columnas de 50px
    contenedor.style.gap = '10px'; // espacio entre botones
    contenedor.style.justifyContent = 'center'; // centrado horizontal
    contenedor.style.marginTop = '20px';

    for (let i = 0; i < 100; i++) { // 10x10 = 100 botones
        const boton = document.createElement('button');
        boton.style.width = '25px';
        boton.style.height = '25px';
        boton.style.margin = '0'; // el margen se controla con gridGap
        boton.style.cursor = 'pointer';
        boton.style.fontSize = '14px';
        contenedor.appendChild(boton);
    }
}

document.addEventListener("DOMContentLoaded", asignarEventosBoton);

function asignarEventosBoton() {

    Event.preventDefault();

    const boton = event.target;
}

// Llamamos a la función al cargar la página
crearMatrizBotones();
