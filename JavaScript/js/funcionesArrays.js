// función indexOf() y lastindexOf()
let array = [3, 21, 15, 61, 9, 15];
console.log(array.indexOf(15));
console.log(array.lastIndexOf(15));

// función every
console.log(array.every(num => num < 100)); // Devuelve un booleano, en este caso true porque todos los números son menores que 100

// función forEach
array.forEach(
    (item, indice, array) =>
        console.log("índice[" + indice + "] valor: " + item + " del array " + array)
);

// función map
let a3 = [4, 21, 33, 12, 9, 54];
console.log(a3.map(num => num * 2));

// función filter
console.log(a3.filter(num => num % 2 == 1));