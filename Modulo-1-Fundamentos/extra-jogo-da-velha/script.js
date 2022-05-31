const combinacoes =[
  [0,1,2], // linha 1
  [3,4,5], // linha 2
  [6,7,8], // linha 3
  [0,3,6], // coluna 1
  [1,4,7], // coluna 2
  [2,5,8], // coluna 3
  [0,4,8], // diagonal esqueda direita
  [2,4,6] // diagonal direita esquerda
];

function generateDiv() {
  let gridDiv = document.getElementsByClassName('grid')[0];
  for (let counter = 8; counter >= 0; counter -= 1) {
    let newDiv = document.createElement('div');
    newDiv.id = counter;
    newDiv.classList.add('celula');
    gridDiv.appendChild(newDiv);
  }
  gridDiv.addEventListener('click', function jogar(event){
    let player = document.getElementById('player');
    let playerTurn = player.innerText[player.innerText.length-1];
    let divClicada = event.target;
    divClicada.innerText = playerTurn;
    var winner = checkWinner(combinacoes);
    var ties = tie();
    if (playerTurn === 'X') {
      player.innerText = 'Vez do jogador O'
    } else {
      player.innerText = 'Vez do jogador X'
    }
    if (winner === true) {
      player.innerText = `Jogador ${playerTurn} ganhou!`;
      for (let id = 0; id <= 8; id++) {
        let element = document.getElementById(`${id}`);
        element.innerText = '';
        }
    }
    if (ties === true) {
      player.innerText = 'Empate!'
      setTimeout(200);
      for (let id = 0; id <= 8; id++) {
        let element = document.getElementById(`${id}`);
        element.innerText = '';
        }
    }
  })
}
generateDiv();

function checkWinner(combinacoes) {
  let player = document.getElementById('player');
  let playerTurn = player.innerText[player.innerText.length-1];
  for (let index = 0; index < combinacoes.length; index += 1) {
    if(document.getElementById(combinacoes[index][0]).innerText === playerTurn && document.getElementById(combinacoes[index][1]).innerText === playerTurn && document.getElementById(combinacoes[index][2]).innerText === playerTurn) {
      return true
    }
  }
  return false
}

function tie() {
  let counter = 0;
  for (let id = 0; id <= 8; id++) {
    let element = document.getElementById(`${id}`);
    if (element.innerText !== '') {
      counter++;
    }
  }
  if (counter >= 9) {
    return true
  }
  return false
}

function reset() {
  let button = document.getElementById('reset');
  button.addEventListener('click', function() {
    for (let id = 0; id <= 8; id++) {
      let element = document.getElementById(`${id}`);
      element.innerText = '';
      }
      player.innerText = 'Vez do jogador X';
    })
}
reset();

