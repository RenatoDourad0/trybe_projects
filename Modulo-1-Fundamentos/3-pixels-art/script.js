const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const clearButton = document.getElementById('clear-board');
const generateButton = document.getElementById('generate-board');
const input = document.getElementById('board-size');

// eslint-disable-next-line max-lines-per-function
function generatePalett(number) {
  const newBlackColor = document.createElement('div');
  newBlackColor.style.width = '50px';
  newBlackColor.style.height = '50px';
  newBlackColor.style.display = 'inline-block';
  newBlackColor.style.border = '1px solid black';
  newBlackColor.style.backgroundColor = 'black';
  newBlackColor.classList.add('selected');
  newBlackColor.classList.add('color');
  colorPalette.appendChild(newBlackColor);
  for (let index = 0; index < number; index += 1) {
    const newColor = document.createElement('div');
    newColor.style.width = '50px';
    newColor.style.height = '50px';
    newColor.style.display = 'inline-block';
    newColor.style.border = '1px solid black';
    newColor.classList.add('color');
    newColor.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorPalette.appendChild(newColor);
  }
}

function generatePixels(value) {
  for (let counter0 = 0; counter0 < value; counter0 += 1) {
    for (let counter = 0; counter < value; counter += 1) {
      const newPixel = document.createElement('div');
      newPixel.classList.add('pixel');
      newPixel.style.background = 'white';
      newPixel.style.width = '40px';
      newPixel.style.height = '40px';
      newPixel.style.border = '1px solid black';
      newPixel.style.margin = '0px';
      newPixel.style.display = 'inline-block';
      newPixel.style.marginBottom = '-3px';
      pixelBoard.appendChild(newPixel);
    }
  }
}

// eslint-disable-next-line complexity
generateButton.addEventListener('click', () => {
  if (pixelBoard.hasChildNodes) {
    pixelBoard.innerHTML = '';
  }
  let inputValue = parseInt(input.value, 10);
  if (inputValue <= 0 || isNaN(inputValue)) {
    alert('Board inválido!');
  } else {
    if (inputValue > 50) {
      inputValue = 50;
    }
    if (inputValue < 5) {
      inputValue = 5;
    }
    pixelBoard.style.width = (inputValue * 42) + 'px';
    generatePixels(inputValue);
  }
});

colorPalette.addEventListener('click', (event) => {
  const element = event.target;
  if (!element.classList.contains('selected')) {
    const selectedElement = document.querySelector('.selected');
    selectedElement.classList.remove('selected');
    element.classList.add('selected');
  }
});

pixelBoard.addEventListener('click', (event) => {
  const element = event.target;
  const selectedElement = document.querySelector('.selected');
  const cssObj = window.getComputedStyle(selectedElement, null);
  if (element.classList.contains('pixel')) {
    element.style.background = cssObj.backgroundColor;
  }
});

clearButton.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    const element = pixels[index];
    element.style.background = 'white';
  }
});

window.onload = () => {
  generatePalett(3);
  generatePixels(5);
  pixelBoard.style.width = (5 * 42) + 'px';
};
