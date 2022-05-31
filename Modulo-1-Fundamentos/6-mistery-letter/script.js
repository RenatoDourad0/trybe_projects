const inputTexto = document.getElementById('carta-texto');
const btnTexto = document.getElementById('criar-carta');
const paragTexto = document.getElementById('carta-gerada');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];
const contador = document.getElementById('carta-contador');

function addClass(element) {
  element.classList.add(`${estilo[Math.floor(Math.random() * 3)]}`);
  element.classList.add(`${tamanho[Math.floor(Math.random() * 3)]}`);
  element.classList.add(`${rotacao[Math.floor(Math.random() * 2)]}`);
  element.classList.add(`${inclinacao[Math.floor(Math.random() * 2)]}`);
}

function createNewWord(element) {
  const newWord = document.createElement('span');
  newWord.innerText = element;
  addClass(newWord);
  paragTexto.appendChild(newWord);
}

btnTexto.addEventListener('click', () => {
  const textoCarta = inputTexto.value;
  const elementosCarta = textoCarta.split(' ');
  paragTexto.innerText = '';
  if (elementosCarta.length > 0) {
    for (let index = 0; index < elementosCarta.length; index += 1) {
      const element = elementosCarta[index];
      if (element === '') {
        paragTexto.innerText = 'Por favor, digite o conteúdo da carta.';
      } else {
        createNewWord(element);
      }
    }
    contador.innerText = elementosCarta.length;
  } else {
    paragTexto.innerText = 'Por favor, digite o conteúdo da carta.';
  }
});

paragTexto.addEventListener('click', (event) => {
  event.target.classList = '';
  addClass(event.target);
});
