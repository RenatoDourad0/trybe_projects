const rgbText = document.getElementById('rgb-color');
const colorDivs = document.getElementById('balls');
const colorDiv = document.getElementsByClassName('ball');
const answerText = document.getElementById('answer');
const btn = document.getElementById('reset-game');
const score = document.getElementById('score');

function createRandomColor() {
  const randomNumber1 = Math.floor(Math.random() * 255);
  const randomNumber2 = Math.floor(Math.random() * 255);
  const randomNumber3 = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
  return randomColor;
}

function addColor(elements) {
  for (let index = 0; index < elements.length; index += 1) {
    const element = elements[index];
    const randomColor = createRandomColor();
    element.style.width = '50px';
    element.style.height = '50px';
    element.style.borderRadius = '100px';
    element.style.display = 'inline-block';
    element.style.background = randomColor;
  }
}

function createAndAddColorText(elements) {
  const randomNumber = Math.floor(Math.random() * elements.length);
  const randomColor = elements[randomNumber].style.backgroundColor;
  rgbText.innerText = `${randomColor}`;
}

let pontuacao = 0;
colorDivs.addEventListener('click', (event) => {
  if (event.target.style.background === rgbText.innerText) {
    answerText.innerText = 'Acertou!';
    pontuacao += 3;
    score.innerText = `Placar: ${pontuacao}`;
  } else {
    answerText.innerText = 'Errou! Tente novamente.';
  }
});

btn.addEventListener('click', () => {
  addColor(colorDiv);
  createAndAddColorText(colorDiv);
  answerText.innerText = 'Escolha uma cor';
});

window.onload = () => {
  addColor(colorDiv);
  createAndAddColorText(colorDiv);
};
