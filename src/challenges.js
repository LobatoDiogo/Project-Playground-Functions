// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}
//referência https://www.w3schools.com/jsref/jsref_split.asp

// Desafio 4
function concatName(names) {
  const lastName = names[0];
  const firstName = names[names.length - 1] + ', ';

  return firstName + lastName;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}
//referência https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/return   

// Desafio 6
function highestCount(number) {

  let biggestNumber = number[0];
  let repetitions = 0;

  for (let index = 0; index < number.length; index += 1) {
    if (number[index] > biggestNumber) {
      biggestNumber = number[index];
    }
  }
  for (let index1 = 0; index1 < number.length; index1 += 1) {
    if (biggestNumber === number[index1]) {
      repetitions += 1;
    }
  }
  return repetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge'
}
// referência https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_abs2

// Desafio 8
function fizzBuzz(arrayNumbers) {

  let fizzBuzzState = [];

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      fizzBuzzState.push("fizzBuzz");
    } else if (arrayNumbers[index] % 5 === 0) {
      fizzBuzzState.push("buzz");
    } else if (arrayNumbers[index] % 3 === 0) {
      fizzBuzzState.push("fizz");
    } else {
      fizzBuzzState.push("bug!");
    }    
  }
  return fizzBuzzState;
}
// console.log(fizzBuzz([2, 3, 5, 20, 25, 9, 8]));

// Desafio 9

function encode(string) {
  
  string = string.replaceAll('a', '1');
  string = string.replaceAll('e', '2');
  string = string.replaceAll('i', '3');
  string = string.replaceAll('o', '4');
  string = string.replaceAll('u', '5');

  return string;
}

function decode(replaced) {
  
  replaced = replaced.replaceAll('1','a');
  replaced = replaced.replaceAll('2','e');
  replaced = replaced.replaceAll('3','i');
  replaced = replaced.replaceAll('4','o');
  replaced = replaced.replaceAll('5','u');
  
  return replaced;
}

// referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

// Desafio 10
function techList() {
  // seu código aqui
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
