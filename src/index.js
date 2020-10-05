module.exports = function toReadable(number) {

  let hundreds = [
    'one hundred',
    'two hundred',
    'three hundred',
    'four hundred',
    'five hundred',
    'six hundred',
    'seven hundred',
    'eight hundred',
    'nine hundred',
  ];

  let dozens = [
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let units = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  let numArray = String(number).split('');

  // remove zero
  // if (numArray[numArray.length-1] == 0) {
  //   numArray.splice(numArray.length-1, 1);
  // }

  if (numArray.length == 3) {

    numArray[0] = hundreds[+numArray[0] - 1];
    // numArray[1] = dozens[+numArray[1] - 1];
    if (numArray[1] <= 1) {
      if (numArray[1] == 0 && numArray[2] == 0) {
        numArray.splice(1, 2);
      } else {
        numArray[1] = units[+(numArray[1] + numArray[2])];
        numArray.splice(2, 1);
      }
    } else {
      numArray[1] = dozens[+numArray[1] - 1];
      // // remove zero
      if (units[+numArray[2]] !== 'zero') {
        numArray[2] = units[+numArray[2]];
      } else {
        numArray.splice(2, 1);
      }
    }

  } else if (numArray.length == 2) {

    if (numArray[0] <= 1) {
      numArray[0] = units[+(numArray[0] + numArray[1])];
      numArray.splice(1, 1);
    } else {
      numArray[0] = dozens[+numArray[0] - 1];
      if (units[+numArray[1]] !== "zero") {
        numArray[1] = units[+numArray[1]];
      } else {
        numArray.splice(1, 1);
      }
    }

  } else if (numArray.length == 1) {

    numArray[0] = units[+numArray[0]];

  }

  return numArray.join(' ')
}
