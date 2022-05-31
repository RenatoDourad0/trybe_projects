// Desafio 11
// eslint-disable-next-line max-lines-per-function
// eslint-disable-next-line complexity
function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let counter = 0;
  for (let value of arr) {
    if (value < 0 || value > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let value1 of arr) {
      if (value === value1) {
        counter += 1;
      }
      if (counter >= 3){
        return 'não é possível gerar um número de telefone com esses valores';
      }
      }
    counter = 0;
  }
  let answer = `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
  return answer;
}

// Desafio 12
// eslint-disable-next-line complexity
// eslint-disable-next-line max-lines-per-function
function triangleCheck(lineA, lineB, lineC) {
  let triangle = [lineA, lineB, lineC];
  let firstCheckv = false;
  let secondCheck = true;
  for (let index in triangle) {
    if (triangle[index] < (lineA + lineB + lineC - triangle[index])) {
      firstCheck = true;
    }
  }
  if (triangle[0] < Math.abs(triangle[1] - triangle[2])) {
    secondCheck = false;
  }
  if (triangle[1] < Math.abs(triangle[0] - triangle[2])) {
    secondCheck = false;
  }
  if (triangle[2] < Math.abs(triangle[0] - triangle[1])) {
    secondCheck = false;
  }
  if (firstCheck && secondCheck) {
    return true;
  }
  return false;
}
// console.log(triangleCheck(10, 14, 8));
// Desafio 13
function hydrate(str) {
  let regex = /\d+/g;
  let matches = str.match(regex);
  matches.toString();
  let numbers = 0;
  for (let value of matches) {
    numbers += parseInt(value, 10);
  }
  if (numbers <= 1) {
    return `${numbers} copo de água`;
  }
  return `${numbers} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
