import _ from 'underscore';


/**
 * 
 * @param {Array<String>} tiposdecarta 
 * @param {Array<String>} tiposespeciales 
 * @returns Array<String>
 */

export const crearDeck = (tiposdecarta, tiposespeciales) => {

    if(!tiposdecarta || !tiposespeciales) {
        throw new Error('No se han proporcionado los parametros necesarios');
    }

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposdecarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposdecarta ) {
        for( let esp of tiposespeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
   
    return deck;
}
