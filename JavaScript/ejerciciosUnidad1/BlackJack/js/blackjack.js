console.log("Black Jack");

// Función que le pide al usuario si quiere jugar al blackjack
function empezarJuego() {
    while (prompt("Quieres jugar al BlackJack? (S/N)") === "S") {
        blackJack();
    }
}

function construirMazo() {
    // Crear un array
    let cartasPalos = ["Corazones", "Picas", "Tréboles"];
    let cartasValor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jota", "Reina", "Rey"];
    let mazo = [];
    // Recorre cada palo del array cartasPalo
    for (let palo of cartasPalos) {
        // Cada valor del array cartasValor
        for (let valor of cartasValor) {
            mazo.push([palo, valor]);
        }
    }
    // Devuelve un array de arrays
    return mazo;
}

function calcularValorMano(cartas) {

}


// Función que pide al usuario 
function turnoJugador(mazo) {
    let cartas = [];
    do {
        // let carta = 
    } while (prompt("¿Desea pedir otra carta? (S/N)") === "S");
    return cartas;
}

function turnoMaquina(mazo, valorJugador) {
    let cartasMaquina = [];

    let carta

}

// DçFunción para lanzar un juego de blackjack
function blackJack() {
    console.log("Creando mazo...");
    let mazo = construirMazo();

    let cartasJugador = turnoJugador(mazo);
    let valorJugador = calcularValorMano(cartasJugador);

    if (valorJugador > 21) {
        alert("Has perdido la partida, has superado los 21 puntos");
    } else {
        let cartasMaquina = turnoMaquina(mazo, valorJugador);
        pintarInfoFinalJuego(cartasJugador, cartasMaquina);
    }
}
