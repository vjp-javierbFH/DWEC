// Función para crear un mazo de cartas
function construirMazo() {
    // Creo dos arrays de 4 y 13 índices
    const cartasPalos = ["Corazones", "Picas", "Tréboles", "Diamantes"];
    const cartasValores = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jota", "Reina", "Rey"];
    let mazo = [];
    for (let palo of cartasPalos) {
        for (let valor of cartasValores) {
            mazo.push({ palo, valor }); // Hago un push para añadir al array auxiliar las 52 cartas del BlackJack
        }
    }
    return mazo;
}

// Función para tomar una carta aleatoria del mazo y eliminarla
function tomarCarta(mazo) {
    // Con math random toma una posición aleatoria del array
    const indice = Math.floor(Math.random() * mazo.length);
    return mazo.splice(indice, 1)[0]; // Elimina y retorna la carta seleccionada
}

// Función para el turno del jugador
function turnoJugador(mazo) {
    // Declaro una variable para almacenar las cartas del jugador
    let cartaJugador = [];
    // Repartir dos cartas iniciales aleatorias
    cartaJugador.push(tomarCarta(mazo));
    cartaJugador.push(tomarCarta(mazo));
    console.log("Tus cartas iniciales:", cartaJugador);

    // Mientras que no supere 21 o el usuario responda N seguirá en el bucle
    while (calcularValorMano(cartaJugador) <= 21 && prompt("¿Quieres otra carta? (S/N)").toUpperCase() === "S") {
        let carta = tomarCarta(mazo);
        cartaJugador.push(carta);
        console.log("Nueva carta:", carta);
        console.log("Tus cartas:", cartaJugador);
    }
    return cartaJugador; // Devuelve las cartas que ha conseguido el usuario
}

// Función para el turno de la máquina
function turnoMaquina(mazo, valorJugador) {
    let cartaMaquina = [];
    let valorMaquina = 0;

    // Repartir dos cartas iniciales
    cartaMaquina.push(tomarCarta(mazo));
    cartaMaquina.push(tomarCarta(mazo));
    valorMaquina = calcularValorMano(cartaMaquina);

    // La máquina sigue tomando cartas hasta alcanzar al menos 17 o superar al jugador
    while (valorMaquina < 17 && valorMaquina <= valorJugador && valorMaquina < 21) {
        let carta = tomarCarta(mazo);
        cartaMaquina.push(carta);
        valorMaquina = calcularValorMano(cartaMaquina);
    }

    return cartaMaquina;
}

// Función para calcular el valor de una mano
function calcularValorMano(cartas) {
    let valor = 0;
    let ases = 0;

    // Recorre cada carta del jugador o máquina pasada por parámetro
    for (let carta of cartas) {
        let valorCarta = carta.valor;
        if (valorCarta === "1") {
            ases++;
            valor += 1; // Ases cuentan como 1 inicialmente
        } else if (["Jota", "Reina", "Rey"].includes(valorCarta)) {
            valor += 10; // Jota, Reina, Rey valen 10
        } else {
            valor += parseInt(valorCarta); // Números valen su valor
        }
    }

    // Ajustar valor de los Ases (pueden valer 11 si no se pasa de 21)
    while (ases > 0 && valor + 10 <= 21) {
        valor += 10;
        ases--;
    }

    return valor; // Devuelve el valor total
}

// Función para pintar la información final del juego
function pintarInfoFinalJuego(cartaJugador, cartaMaquina) {
    // Almacena los valores del jugador y de la máquina y los pinta
    const valorJugador = calcularValorMano(cartaJugador);
    const valorMaquina = calcularValorMano(cartaMaquina);

    console.log("Cartas del jugador:", cartaJugador, `(Valor: ${valorJugador})`);
    console.log("Cartas de la máquina:", cartaMaquina, `(Valor: ${valorMaquina})`);

    // Determinar y mostrar el ganador
    // Si la máquina supera los 21 puntos o si el jugador supera a la máquina y es menor que 21 puntos
    if (valorMaquina > 21 || (valorJugador > valorMaquina && valorJugador <= 21)) {
        console.log("¡El jugador gana!");
    } else if (valorMaquina === valorJugador) { // Si ambos jugaadores tienen el mismo valor
        console.log("¡Empate!");
    } else {
        console.log("¡La máquina gana!");
    }
}

// Función principal para lanzar un juego de Blackjack
function blackJack() {
    console.log("");
    console.log("---------------------------------------");
    console.log("Creando el mazo...");
    let mazo = construirMazo(); // Declaro una variable y la inicializo con una función que devuelve un array de arrays

    // Declaro una variable en la que almacene las cartas pedidas por el usuario
    let cartaJugador = turnoJugador(mazo);
    // Las cartas del jugador irán sumando según el tipo de valor
    let valorJugador = calcularValorMano(cartaJugador);

    // Si el valor del jugador supera 21 mostrará un alert
    if (valorJugador > 21) {
        alert("Has perdido la partida, has superado 21 puntos.");
    } else {
        // Sino empieza el turno de la máquina
        let cartaMaquina = turnoMaquina(mazo, valorJugador);
        pintarInfoFinalJuego(cartaJugador, cartaMaquina);
    }
}

// Iniciar el juego
while (confirm("¿Quieres jugar al Blackjack?")) {
    blackJack();
}