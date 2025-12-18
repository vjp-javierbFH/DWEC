export function actualizarHeader(cantidad = 0) {
  document.getElementById("header").innerHTML = `
    <nav>
      <a href="index.html">Home</a>
      <a href="electronica.html">Electrónica</a>
      <a href="muebles.html">Muebles</a>
      <a href="decoracion.html">Decoración</a>
      <a href="carrito.html">Carrito (${cantidad})</a>
    </nav>
  `;
}
