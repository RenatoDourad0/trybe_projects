/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros::
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arr) => {
  let sum = 0;
  if (arr.length < 1) {
    return undefined;
  }
  for (const value of arr) {
    if (typeof value !== 'number') {
      return undefined;
    }
    sum += value;
  }
  // const sum = arr.reduce(function (acumulador, valorAtual) {
  //   return acumulador + valorAtual;
  // });
  const result = Math.round(sum / arr.length);
  return result;
};

module.exports = average;
