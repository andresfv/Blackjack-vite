import { valorCarta } from "./valor-carta";

  
  /**
   * Acumula puntos por jugador
   * @param {Number} turno: 0 = primer jugador y el ultimo sera la computadora
   * @return {Array<Number>} Retorna array de puntos de jugadores
   */
   export const acumularPuntos = (carta, turno, puntosJugadores, puntosLabels) => {
    if (!carta) throw new Error('carta es obligatorio');

    
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosLabels[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}