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
  let words = expr.replace(/\*{10}/g, ' ').split(' ')
  let result = ''
  for(let i = 0; i < words.length; i++) {

    words[i] = words[i].match(/.{10}/g);
    for(let j = 0; j < words[i].length; j++){
      words[i][j] = words[i][j].replace(/10/g, '.')
      words[i][j] = words[i][j].replace(/11/g, '-')
      words[i][j] = words[i][j].replace(/0/g, '')
      
      for(let key in MORSE_TABLE) {
        if(words[i][j] === key) {
          words[i][j] = MORSE_TABLE[key]
        }
      }
    }
    words[i] = words[i].join('')
    result += words[i] + ' '
  }
  return result.trim()
}

module.exports = {
    decode
}