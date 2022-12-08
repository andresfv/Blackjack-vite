import { acumularPuntos } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./determinar-ganador";
import { pedirCarta } from "./pedir-carta";

// Lección 56
/**
 * Turno de la computadora
 * @param {Array<Number>} puntosJugadores puntos de los jugadores
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck
 */
export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, puntosLabels, divCartasJugadores) => {
    if (!puntosMinimos) throw new Error('puntosMinismos es obligatorios');
    if (!deck) throw new Error('deck es obligatorios');

    let puntosComputadora = 0;

    do {
        console.log(deck.length);
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosLabels);
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
}