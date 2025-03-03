
/**
 * @param {Array} deck
 * @returns {String} carta  - Retorna una carta
 */
// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
