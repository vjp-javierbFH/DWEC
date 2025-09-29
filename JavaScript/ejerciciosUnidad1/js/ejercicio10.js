// Ejercicio 10
console.log("Ejercicio 10: función en la que puedan entrar un número indefinido de parámetros, comprobar que todos son cadenas y pintar por pantalla la suma total de todas las longitudes de las cadenas.");
function sumaLongitudes(...args) {
  // Verificar que todos sean cadenas
  if (!args.every(arg => typeof arg === "string")) {
    throw new Error("Todos los argumentos deben ser cadenas.");
  }

  // Reducir sumando las longitudes
  return args.reduce((total, cadena) => total + cadena.length, 0);
}

// Pruebas
console.log(`Hola mundo = ${sumaLongitudes("Hola", "mundo")}`);
console.log(`Hola soy Javier = ${sumaLongitudes("Hola", "soy", "Javier")}`);
console.log(`Esto es una prueba = ${sumaLongitudes("Esto","es","una","prueba")}`);

console.log("");