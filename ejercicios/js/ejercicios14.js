let str = "ab1c3de4fg";


for (let caracter of str) {
    if (caracter.match(/[aeiou/]/)) {
        console.log("El caracter " + caracter + " es una vocal");
    } else if(caracter.match(/[0-9]/)){
        console.log("El caracter " + caracter + " es un número.")
    } else {
        console.log("El caracter " + caracter + " es una consonante.")
    }
}