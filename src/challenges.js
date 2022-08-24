// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  }
    return false;
}

// Desafio 2
function calcArea(base, height) {
  return base*height / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");  
}
//referência https://www.w3schools.com/jsref/jsref_split.asp

// Desafio 4
function concatName(names) {
  const lastName = names [0];
  const firstName = names [names.length - 1] + ', ';

  return firstName + lastName;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties*1;
}
//referência https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/return   

// Desafio 6
function highestCount(number) {
  
  let biggestNumber = number[0];
  let repetitions = 0;

  for (let index = 0; index < number.length; index += 1) {
    if (number[index] > biggestNumber){
      biggestNumber = number[index];
    }
   } 
   for (let index1 = 0; index1 < number.length; index1 += 1) {
    if (biggestNumber === number[index1]){
      repetitions += 1;
    }
  } 
  return repetitions;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

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
