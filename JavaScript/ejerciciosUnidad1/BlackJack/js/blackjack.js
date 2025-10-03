console.log("Black Jack");
// Crear un array
let cartasBlackJack = ["Corazones", "Picas", "Tréboles"][1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jota", "Reina", "Rey"];

function empezarJuego() {
    while (prompt("Quieres jugar al BlackJack? (S/N)") === "S") {
        blackJack();
    }
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

// Función que pide al usuario 
function turnoJugador(mazo) {
    do {
    } while (prompt("¿Desea pedir otra carta? (S/N)") === "S");
}

function mostrarMenu() {

}

function pedirCarta() {
}