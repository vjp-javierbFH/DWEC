/*function calcularPrecio(unidades, precio){
    let precioFinal = unidades * precio;
    return precioFinal;
};

console.log(calcularPrecio(3, 6));

let funcionSumarUnoMas = function(numero){
    return numero ++;
};

console.log(funcionSumarUnoMas(5));*/

/*PRUEBA 6.1*/

let funcionLambda = (arg1, arg2) => {return arg1 + arg2}

console.log(funcionLambda(3, 2));

// Ejemplo algo más útil
let funcionProcesadoraPar = function(arg1, arg2, funcionProcesadoraPar){
    return funcionProcesadoraPar(arg1, arg2);
}

// Podemos escribir lógica dentro de la función lambda poniendo {}
// Siempre debemos devolver el valor con return
console.log("Esta vez procesamos una función (de 3 y 2): ") + 
funcionProcesadoraPar(3,2,(n1,n2) => {return n1 + n2;}
);

// Podemos escribir operadores condicionales ternaria sin indicar {}
console.log("Esta vez procesamos una función (de 3 y 2):" +
    funcionProcesadoraPar(3,2,(n1,n2) => n1*n2)
);

let procesoTres = function (arg1, arg3, arg3, funcionProcesadoraPar){
    return funcionProcesadoraPar(arg1, arg2, arg3);
};
