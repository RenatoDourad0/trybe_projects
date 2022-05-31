// Desafio 1
function compareTrue(bol1, bol2) {
  if (bol1 && bol2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  let arr = str.split(' ');
  return arr;
}

// Desafio 4
function concatName(arr) {
  let sentence = `${arr[arr.length - 1]}, ${arr[0]}`;
  return sentence;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = (wins * 3) + ties;
  return score;
}

// Desafio 6
function highestNumber(arr) {
  let highest = arr[0];
  for (let value of arr) {
    if (value > highest) {
      highest = value;
    }
  }
  return highest;
}
function highestCount(arr) {
  let highest = highestNumber(arr);
  let counter = 0;
  for (let value of arr) {
    if (value === highest) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(cat1 - mouse); // Math.abs : igual módulo, trasforma em absoluto.
  let distanciaGato2 = Math.abs(cat2 - mouse);
  let result;
  if (distanciaGato1 < distanciaGato2) {
    result = 'cat1';
  } else if (distanciaGato1 > distanciaGato2) {
    result = 'cat2';
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(arr) {
  let answer = [];
  for (let index = 0; index < arr.length; index += 1) {
    let value = arr[index];
    if (value % 3 === 0 && value % 5 !== 0) {
      answer.push('fizz');
    }
    if (value % 5 === 0 && value % 3 !== 0) {
      answer.push('buzz');
    }
    if (value % 5 === 0 && value % 3 === 0) {
      answer.push('fizzBuzz');
    }
    if (value % 5 !== 0 && value % 3 !== 0) {
      answer.push('bug!');
    }
  }
  return answer;
}

// Desafio 9
// eslint-disable-next-line complexity
function encode(str) {
  for (let index in str) {
    if (str[index] === 'a') {
      str = str.replace('a', '1');
    } else if (str[index] === 'e') {
      str = str.replace('e', '2');
    } else if (str[index] === 'i') {
      str = str.replace('i', '3');
    } else if (str[index] === 'o') {
      str = str.replace('o', '4');
    } else if (str[index] === 'u') {
      str = str.replace('u', '5');
    }
  }
  return str;
}

// eslint-disable-next-line complexity
function decode(str) {
  for (let index in str) {
    if (str[index] === '1') {
      str = str.replace('1', 'a');
    } else if (str[index] === '2') {
      str = str.replace('2', 'e');
    } else if (str[index] === '3') {
      str = str.replace('3', 'i');
    } else if (str[index] === '4') {
      str = str.replace('4', 'o');
    } else if (str[index] === '5') {
      str = str.replace('5', 'u');
    }
  }
  return str;
}

// Desafio 10
function techList(arr, name) {
  if (arr === undefined || name === undefined || arr.length === 0) {
    return 'Vazio!';
  }
  let obj = {};
  let answer = [];
  arr.sort(function (a, b) { return a + b; });
  arr.splice(arr.length - 1, 1);
  arr.splice(2, 0, 'JavaScript');
  for (let index = arr.length - 1; index >= 0; index -= 1) {
    obj.tech = arr[index];
    obj.name = name;
    answer.push(obj);
    obj = {};
  }
  return answer;
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
