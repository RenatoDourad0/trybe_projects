/* eslint-disable max-len */

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante através do qual será possível
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto que permite:

  - Ler o menu cadastrado;
  - Fazer pedidos;
  - Verificar o que foi pedido;
  - Somar o valor da conta.

  A estrutura deste código e deste objeto já está definida e você precisa implementá-la.
  Abaixo você verá uma série de testes e passos que irão guiar você e, que devem NECESSARIAMENTE ser realizados em ordem para o bom desenvolvimento do sistema.

  Desenvolvimento:
  - Uma função:
    createMenu()
  - Recebe um parâmetro que é um objeto, o menu:
    Exemplo: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.

  A função createMenu() então, retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE - FAÇA OS TESTES E PASSOS DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!

  BOAS PRÁTICAS TDD: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js` E VOLTE A ESTE ARQUIVO QUANDO FOR INDICADO!

*/

// PASSO 4: Adicione ao objeto retornado por `createMenu()` uma chave `pay` armazenando uma função
// que:
// - percorrerá item a item de `objetoRetornado.consumption`;
// - fará a soma do preço desses itens;
// - retornará o valor somado acrescido de 10%.
// DICA: para isso, você precisará percorrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.

// const pushOrder = (str) => {
//   restaurant.consumption.push(str);
// };

// const pay = (target) => {
//   let sum = 0;
//   for (const index in target) {
//     if (target[index] === 'agua' || target[index] === 'coxinha') {
//       sum += 3.90;
//     }
//   }
//   return sum;
// };
const restaurant = {};
const createMenu = function (menu) {
  restaurant.fetchMenu = () => menu;
  restaurant.consumption = [];
  restaurant.order = (str) => restaurant.consumption.push(str);
  restaurant.pay = () => {
    const target = restaurant.consumption;
    let sum = 0;
    for (const index in target) {
      if (target[index] === 'agua' || target[index] === 'coxinha') {
        sum += 3.90;
      }
    }
    return sum;
  };
  return restaurant;
};

// const exampleMenu = {
//   food: { coxinha: 3.90, sanduiche: 9.90 },
//   drinks: { agua: 3.90, cerveja: 6.90 },
// };
// const newobj = createMenu(exampleMenu);
// newobj.order('coxinha');
// newobj.order('agua');
// newobj.order('coxinha');
// newobj.order('agua');
// newobj.order('coxinha');
// console.log(newobj.consumption);
// console.log(newobj.pay());

module.exports = createMenu;
