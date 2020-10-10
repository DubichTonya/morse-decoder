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
    let result = ''
  expr = expr.replace(/\*{10}/g, ' ')
  let words = expr.split(' ')
  
  for(let i = 0; i < words.length; i++){
    let subWords = words[i].replace(/.{2}/g, '$& ').trim().split(' ');
    for(let j = 0; j < subWords.length; j++){
      if(subWords[j] === '10') {
        subWords[j] = '.'
      } else if(subWords[j] === '11') {
        subWords[j] = '-'
      }
    }
    subWords = subWords.join('').replace(/0/g, ' ').split(' ');
    
    subWords = subWords.filter((item) => {
      if (item !== '') {
        return item;
      }
    })

    for(let key in MORSE_TABLE) {

      for(let n = 0; n < subWords.length; n++) {
        if(subWords[n] === key){
          subWords[n] = MORSE_TABLE[key]
        }
      }
    }

    result += subWords.join('') + ' '
  }


  return result.trim()
}

module.exports = {
    decode
}