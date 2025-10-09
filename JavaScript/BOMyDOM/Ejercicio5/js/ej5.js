let div = document.getElementById("contenedorGeneral");

div.style.width = "200px";
div.style.height = "200px";
div.style.backgroundColor = "#9e9e9e";
div.style.color = "blue";
div.style.border = "#FF0000 solid 1px";

document.addEventListener("DOMContentLoaded", () => {
    let div = document.getElementById("contenedorGeneral");
    function redimensionar() {
        div.textContent = `${window.innerWidth} - ${window.innerHeight}`;
    }

    redimensionar();

    window.addEventListener('resize', redimensionar)
})