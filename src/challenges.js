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
//console.log(splitSentence('Go trybe'));

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
//console.log(footballPoints(1,2));   

// Desafio 6
function highestCount() {
  
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
