//Leccion 50
/**
 * Esta funcion permite pedir una carta
 * @param {Array<String>} deck 
 * @returns Retorna una carta.
 */
export const pedirCarta = (deck) => {
    if (!deck) throw new Error('deck es obligatorio y debe ser un arreglo de string');

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    return deck.pop(); //Extrae la carta del deck;
}