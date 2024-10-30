/**
 * @readonly
 * @enum {String}
 */
const colors = {
    backgroud: {
        0: "rgb(231, 76, 60)",
        1: "rgb(52, 152, 219)",
        2: "rgb(46, 204, 113)",
        3: "rgb(241, 196, 15)",
        4: "rgb(175, 122, 197)",
        5: "rgb(230, 126, 34)",
        6: "rgb(189, 195, 199)",
    },
    border: {
        0: "rgb(203, 67, 53)",
        1: "rgb(46, 134, 193)",
        2: "rgb(40, 180, 99)",
        3: "rgb(212, 172, 13)",
        4: "rgb(155, 89, 182)",
        5: "rgb(202, 111, 30)",
        6: "rgb(166, 172, 175)",
    }
}

/**
* @return {String} 
*/
const getRandomRgb = () => {
    const num = Math.round(0xffffff * Math.random());

    return 'rgb(' + (num >> 16) + ', ' + (num >> 8 & 255) + ', ' + (num & 255) + ')';
}

const colorUtility = {
    colors,
    getRandomRgb
}

export default colorUtility;