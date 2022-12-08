//Lección 51
// const valorCarta = (carta) =>{
//     const valor = carta.substring(0, carta.length -1);
//     let puntos = 0;
//     if (isNaN( valor )) {
//         puntos = ( valor === 'A' ) ? 11 : 10; //por regla del juego "21" las cartas de ñetras de la "J" a la "K" valen 10 pts, la "A" vale 11 pts
//     }else{
//         puntos = valor * 1;//Esta es la forma más sencilla de transformar un número String a número
//     }
//     return puntos
// }

//Tarea, simplificar funcion 'valorCarta'

/**
 * Permite obtener el valor de la carta
 * @param {String} carta 
 * @returns {Number} Puntaje equivalente de la carta
 */
export const valorCarta = (carta) => {
    if (!carta) throw new Error('carta es obligatorio');

    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? ((valor === 'A') ? 11 : 10) : (valor * 1);
}