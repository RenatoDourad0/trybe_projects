const txtInput = document.getElementById('text-input');
const memeConteiner = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const imgInput = document.getElementById('meme-insert');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const memesProntos = document.getElementById('memes-prontos');
const link = document.getElementById('meme-insert-open');
let img = '';

link.addEventListener('click', (event) => {
  imgInput.click();
  event.preventDefault();
});

txtInput.addEventListener('input', () => {
  memeText.innerText = txtInput.value;
  // if (!memeImage.style.backgroundImage) {
  //   memeText.style.color = 'black';
  // }
});

imgInput.addEventListener('change', () => {
  const leitorDeArquivos = new FileReader();
  leitorDeArquivos.addEventListener('load', () => {
    img = leitorDeArquivos.result;
    memeImage.style.backgroundImage = `url(${img})`;
  });
  leitorDeArquivos.readAsDataURL(imgInput.files[0]);
});

fire.addEventListener('click', (event) => {
//  if (memeConteiner.style.border === '1px solid black') {
  memeConteiner.style.border = getComputedStyle(event.target).border;
//  } else {
//    memeConteiner.style.border = '1px solid black';
//  }
});

water.addEventListener('click', (event) => {
  // if (memeConteiner.style.border === '1px solid black') {
  memeConteiner.style.border = getComputedStyle(event.target).border;
  // } else {
  //   memeConteiner.style.border = '1px solid black';
  // }
});

earth.addEventListener('click', (event) => {
//  if (memeConteiner.style.border === '1px solid black') {
  memeConteiner.style.border = getComputedStyle(event.target).border;
//  } else {
//   memeConteiner.style.border = '1px solid black';
// }
});

memesProntos.addEventListener('click', (event) => {
  // memeImage.style.backgroundImage = `url(${event.target.src})`;
  memeImage.src = event.target.src;
});
