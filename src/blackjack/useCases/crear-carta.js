// Lección 55
/**
 * Dibuja la carta en pantalla
 * @param {String} carta Carta tomada
 * @param {Number} turno Turno del jugador
 * @param {HTMLElement} divCartasJugadores Referencias HTML
 */
export const crearCarta = (carta, turno, divCartasJugadores) => {
    if (!carta) throw new Error('carta es obligatorios');
    if (!divCartasJugadores) throw new Error('divCartasJugadores es obligatorios');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;//Recordar usar backtips
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta);

}