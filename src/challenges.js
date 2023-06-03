function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}

function calcArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

function splitSentence(string) {
  return string.split(' ');
}

function concatName(names) {
  const lastName = names[0];
  const firstName = `${names[names.length - 1]}`;

  return `${firstName}, ${lastName}`;
}

function footballPoints(wins, ties) {
  const points = (wins * 3) + ties;
  return points;
}

function highestCount(number) {
  let biggestNumber = number[0];
  let repetitions = 1;

  for (let index = 1; index < number.length; index += 1) {
    if (number[index] > biggestNumber) {
      biggestNumber = number[index];
      repetitions = 1;
    } else if (number[index] === biggestNumber) {
      repetitions += 1;
    }
  }

  return repetitions;
}

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

function fizzBuzz(arrayNumbers) {
  return arrayNumbers.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'fizzBuzz';
    } if (number % 3 === 0) {
      return 'fizz';
    } if (number % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  });
}

function encode(string) {
  return string
    .replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
}

function decode(replaced) {
  return replaced
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
}

function techList(arrTech, name) {
  if (arrTech.length === 0) return 'Vazio!';

  const list = arrTech.sort().map((tech) => ({ tech, name }));
  return list;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
