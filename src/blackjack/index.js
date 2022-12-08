import {acumularPuntos, crearCarta, crearDeck, pedirCarta, turnoComputadora} from './useCases';

/*
 * Leccion 49
* Reglas del juego: 
* -Si un jugador suma 21 puntos gana automaticamente, 
* -Si alguno de los dos jugadores sobrepasa los 21 puntos pierde automaticamente, 
* -Si ninguno de los dos jugadores llega a 21 gana quien tenga puntaje mayor.
 */

//Leccion 62 Patrón módulo
const miModulo = (() => {
  'use strict'

  //C = Clover
  //D = Daimonds
  //H = Hearts
  //S = Spades
  const tipos = ['C', 'D', 'H', 'S'];

  //A = As
  //J = Jack
  //Q = Queen
  //K = King
  const especiales = ['A', 'J', 'Q', 'K'];

  // let puntosJugador = 0;
  // let puntosComputadora = 0;
  let puntosJugadores = [];

  // REFERENCIAS HTML
  const btnNuevo = document.querySelector('#btnNuevo');
  const btnPedir = document.querySelector('#btnPedir');
  const btnDetener = document.querySelector('#btnDetener');

  const puntosLabels = document.querySelectorAll('small');
  const divCartasJugadores = document.querySelectorAll('.divCartas');

  let deck = [];

  /**
   * Inicializa el juego
   */
  const inicializarJuego = (numJugadores = 2) => {
      deck = crearDeck(tipos, especiales);
      puntosJugadores = [];
      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);
      }

      puntosLabels.forEach(element => element.innerText = 0);
      divCartasJugadores.forEach(element => element.innerHTML = '');

      btnPedir.disabled = false;
      btnDetener.disabled = false;
  }



  crearDeck(tipos, especiales);
  // console.log(valorCarta (pedirCarta()));

  // Lección 54
  // EVENTOS
  // Las funciones que se envian como parámetros son llamadas 'callBack' y pueden ser funciones normales o de flecha.
  btnPedir.addEventListener('click', () => {

      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosLabels);
      crearCarta(carta, 0, divCartasJugadores);

      if (puntosJugador > 21) {
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador, deck, puntosJugadores, puntosLabels, divCartasJugadores);

      } else if (puntosJugador === 21) {
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador, deck, puntosJugadores, puntosLabels, divCartasJugadores);
      }

  });

  //Lección 56
  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntosLabels, divCartasJugadores);
  });

  //Lección 57
  btnNuevo.addEventListener('click', () => {
      inicializarJuego();
  });

  return {
      nuevoJuego:inicializarJuego
  };
})();
