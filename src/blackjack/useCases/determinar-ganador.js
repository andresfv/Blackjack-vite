
/**
 * Envia un mensaje indicando el ganador de la partida.
 * @param {Array<Number>} puntosJugadores 
 */
export const determinarGanador = (puntosJugadores) => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores; //Se usa destructuracion de arreglos

    setTimeout(() => {

        if (puntosMinimos === puntosComputadora) {
            alert('Vaya! ha sido un empate');
        }
        else if ((puntosMinimos <= 21) && (puntosComputadora > 21)) {
            alert('Felicidades has ganado!!!');

        } else if ((puntosMinimos > 21) || (puntosComputadora > puntosMinimos && puntosComputadora <= 21)) {
            alert('La computadora ha ganado, mejor suerte la próxima...');
        } else {
            alert('La computadora ha ganado, mejor suerte la próxima...');
        }

    }, 100);

}