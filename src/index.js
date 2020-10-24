const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let finalString = '';
    let arrayExpr = [];

    for (let i = 0; i < expr.length; i += 10 ) {
        arrayExpr.push(expr.slice(i, i + 10));
    }
    let arrayMorse = [];

    for (let i = 0; i < arrayExpr.length; i++) {
            arrayMorse[i] = '';
            if (arrayExpr[i] === `**********`) arrayMorse[i] = ' ';
        for (let j = 0; j < arrayExpr[i].length; j += 2) {
            if (arrayExpr[i][j] === '1' & arrayExpr[i][j + 1] === '0') arrayMorse[i] += '.';
            if (arrayExpr[i][j] === '1' & arrayExpr[i][j + 1] === '1') arrayMorse[i] += '-';
        }
    }
    for (let i = 0; i < arrayMorse.length; i++) {
        if (arrayMorse[i] === ' ') {
            finalString += ' ';
        } else finalString += MORSE_TABLE[arrayMorse[i]];
    }

    return finalString;
}

module.exports = {
    decode
}