function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  const verify = arr.some((number) => number < 0 || number > 9);
  const verifyRepeat = arr.some((number) => arr.filter((num) => num === number).length >= 3);
  if (verify || verifyRepeat) return 'não é possível gerar um número de telefone com esses valores';

  const ddd = arr.slice(0, 2).join('');
  const firstPart = arr.slice(2, 7).join('');
  const secondPart = arr.slice(7).join('');

  return `(${ddd}) ${firstPart}-${secondPart}`;
}

function triangleCheck(lineA, lineB, lineC) {
  const checkAB = lineA + lineB > lineC;
  const checkAC = lineA + lineC > lineB;
  const checkBC = lineB + lineC > lineA;
  return checkAB && checkAC && checkBC;
}

function hydrate(request) {
  let regex = /\d+/g;
  const numbers = request.match(regex) || [];

  const sum = numbers.reduce((acc, curr) => acc + parseInt(curr, 10), 0);

  const result = sum === 1 ? `${sum} copo de água` : `${sum} copos de água`;

  return result;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
