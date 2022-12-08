import _ from 'underscore';//Se renombro underscore

/**
 * 
 * @param {Array<String>} tiposCarta ejemplo ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales ejemplo  ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas.
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {
    if (!tiposCarta || tiposCarta.length === 0) throw new Error('tiposCarta es obligatorio y debe ser un arreglo de string');
    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligatorio y debe ser un arreglo de string');
    
    let deck = [];

    //Recorre del 2 al 10 para ir agregando cartas de números de por cada tipo
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCarta) {
            deck.push(i + tipo);
        }
    }

    //Recorre todos los tipos de carta para ir agregando cartas especiales (de letras) por cada tipo
    for (let tipoCarta of tiposCarta) {
        for (let tipoEspecial of tiposEspeciales) {
            deck.push(tipoEspecial + tipoCarta);
        }
    }
    return _.shuffle(deck);//Usando libreria de terceros "underscore";
}